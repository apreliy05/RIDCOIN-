const admin = require('firebase-admin');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    });
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { res.status(200).end(); return; }
    if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

    const { from, password, to, amount, comment } = req.body;

    if (!from || !password || !to || !amount) {
        return res.status(400).json({ error: 'Неверные данные' });
    }
    if (amount <= 0) {
        return res.status(400).json({ error: 'Сумма должна быть больше 0' });
    }
    if (from === to) {
        return res.status(400).json({ error: 'Нельзя отправить самому себе' });
    }

    const db = admin.database();

    try {
        const [fromSnap, toSnap] = await Promise.all([
            db.ref('users/' + from).get(),
            db.ref('users/' + to).get()
        ]);

        if (!fromSnap.exists()) return res.status(404).json({ error: 'Отправитель не найден' });
        if (!toSnap.exists()) return res.status(404).json({ error: 'Получатель не найден' });

        const fromData = fromSnap.val();

        // Проверка пароля
        const crypto = require('crypto');
        async function pbkdf2Hash(pw, salt) {
            return new Promise((resolve, reject) => {
                crypto.pbkdf2(pw, salt, 100000, 32, 'sha256', (err, buf) => {
                    if (err) reject(err);
                    else resolve(buf.toString('hex'));
                });
            });
        }

        let valid = false;
        if (fromData.passwordHash && fromData.passwordHash.startsWith('pbkdf2$')) {
            const parts = fromData.passwordHash.split('$');
            const computed = await pbkdf2Hash(password, parts[1]);
            valid = computed === parts[2];
        }

        if (!valid) return res.status(403).json({ error: 'Неверный пароль' });
        if ((fromData.balance || 0) < amount) return res.status(400).json({ error: 'Недостаточно средств' });

        const toData = toSnap.val();
        const date = new Date().toLocaleString('ru-RU');
        const cs = comment ? ` | ${comment}` : '';

        const updates = {};
        updates['users/' + from + '/balance'] = (fromData.balance || 0) - amount;
        updates['users/' + from + '/sentTotal'] = (fromData.sentTotal || 0) + amount;
        updates['users/' + from + '/txCount'] = (fromData.txCount || 0) + 1;
        updates['users/' + to + '/balance'] = (toData.balance || 0) + amount;
        updates['users/' + to + '/receivedTotal'] = (toData.receivedTotal || 0) + amount;
        updates['users/' + to + '/txCount'] = (toData.txCount || 0) + 1;

        await db.ref().update(updates);

        // История
        await db.ref('users/' + from + '/history').push(`[${date}] → ${to}: ${amount} RID${cs}`);
        await db.ref('users/' + to + '/history').push(`[${date}] ← ${from}: ${amount} RID${cs}`);

        return res.status(200).json({ success: true });
    } catch(e) {
        return res.status(500).json({ error: 'Ошибка сервера: ' + e.message });
    }
};
