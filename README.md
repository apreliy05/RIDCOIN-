# 💎 RIDCOIN — Crypto Wallet

<div align="center">

![RIDCOIN](https://img.shields.io/badge/RIDCOIN-Wallet-gold?style=for-the-badge&logo=bitcoin&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-orange?style=for-the-badge&logo=firebase&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-yellow?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Prototype-blue?style=for-the-badge)

**[🌐 Live Demo](https://apreliy05.github.io/RIDCOIN-/)**

A web-based cryptocurrency wallet for the internal digital currency **RID (RIDCOIN)**.  
Built as a personal learning project and portfolio piece.

</div>

---

## ✨ Features

- 🔐 **Secure Authentication** — PBKDF2 (100,000 iterations) password hashing with random salt via Web Crypto API
- 🔑 **Account Recovery** — 12-word recovery phrase system, also protected with PBKDF2
- 💸 **Transfers** — Send RID between users with confirmation step and transaction history
- 📜 **Transaction History** — Filterable (incoming / outgoing) with pagination
- 💬 **Global Chat** — Real-time group chat for all users
- ✉️ **Direct Messages** — Private messaging between users with unread counters
- 👑 **Admin Panel** — Manage users, top up balances, view all accounts
- 🎁 **Airdrop System** — Free RID distribution fund for new registrations
- 📱 **Responsive Design** — Works on mobile, tablet and desktop
- 🔌 **Offline Mode** — Falls back to localStorage when Firebase is unavailable

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML / CSS / JavaScript** | Frontend — pure, no frameworks |
| **Firebase Realtime Database** | Data storage and real-time sync |
| **Firebase Auth** | Anonymous authentication |
| **Web Crypto API** | PBKDF2 password hashing |
| **GitHub Pages** | Hosting |

---

## 🏗️ Architecture

```
index.html (Single Page Application)
│
├── 🔐 Auth Layer       — Login, Register, Recovery
├── 💰 Wallet           — Balance display, transfers, history
├── 💬 Chat             — Global chat + Direct messages
├── 👑 Admin Panel      — User management
└── 🔥 Firebase Layer   — Realtime DB sync, offline fallback
```

---

## 🔒 Security

- Passwords are hashed with **PBKDF2** (SHA-256, 100,000 iterations, random 16-byte salt)
- Recovery phrases are normalized and hashed the same way
- Legacy SHA-256 hashes are supported for backward compatibility
- XSS protection via `escapeHtml()` on all user-generated content

> ⚠️ This is a **prototype**. Business logic runs client-side, which is not suitable for production financial applications. A server-side backend would be required for a production version.

---

## 🚀 Getting Started

No installation needed. Open the live version in your browser:

**[https://apreliy05.github.io/RIDCOIN-/](https://apreliy05.github.io/RIDCOIN-/)**

Or clone and open locally:

```bash
git clone https://github.com/apreliy05/RIDCOIN-.git
cd RIDCOIN-
# Open index.html in your browser
```

---

## 📌 Project Status

This is a **prototype / portfolio project**, actively used for learning:
- Firebase Realtime Database
- Web Crypto API
- SPA architecture without frameworks
- UI/UX design principles

---

---

# 💎 RIDCOIN — Криптокошелёк

<div align="center">

**[🌐 Открыть проект](https://apreliy05.github.io/RIDCOIN-/)**

Веб-кошелёк для внутренней цифровой валюты **RID (RIDCOIN)**.  
Личный проект, созданный для обучения и портфолио.

</div>

---

## ✨ Возможности

- 🔐 **Безопасная авторизация** — хэширование паролей через PBKDF2 (100 000 итераций) с солью, Web Crypto API
- 🔑 **Восстановление аккаунта** — система из 12 слов, защищённая PBKDF2
- 💸 **Переводы** — отправка RID между пользователями с подтверждением и историей операций
- 📜 **История транзакций** — фильтрация (входящие / исходящие) и пагинация
- 💬 **Общий чат** — чат в реальном времени для всех пользователей
- ✉️ **Личные сообщения** — приватные диалоги с счётчиком непрочитанных
- 👑 **Панель администратора** — управление пользователями, пополнение балансов
- 🎁 **Airdrop** — фонд бесплатной раздачи монет при регистрации
- 📱 **Адаптивный дизайн** — работает на телефоне, планшете и компьютере
- 🔌 **Офлайн-режим** — резервное хранение в localStorage при отсутствии соединения

---

## 🛠️ Стек технологий

| Технология | Применение |
|---|---|
| **HTML / CSS / JavaScript** | Фронтенд — без фреймворков |
| **Firebase Realtime Database** | Хранение данных и синхронизация в реальном времени |
| **Firebase Auth** | Анонимная аутентификация |
| **Web Crypto API** | Хэширование паролей PBKDF2 |
| **GitHub Pages** | Хостинг |

---

## 🔒 Безопасность

- Пароли хэшируются через **PBKDF2** (SHA-256, 100 000 итераций, случайная 16-байтная соль)
- Фразы восстановления нормализуются и хэшируются аналогично
- Защита от XSS через `escapeHtml()` для всех пользовательских данных

> ⚠️ Это **прототип**. Бизнес-логика выполняется на стороне клиента, что не подходит для продакшн финансовых приложений. Для боевой версии потребуется серверная часть.

---

## 🚀 Запуск

Просто открой в браузере:

**[https://apreliy05.github.io/RIDCOIN-/](https://apreliy05.github.io/RIDCOIN-/)**

Или склонируй локально:

```bash
git clone https://github.com/apreliy05/RIDCOIN-.git
cd RIDCOIN-
# Открой index.html в браузере
```

---

## 📌 Статус проекта

**Прототип / учебный проект.** Используется для изучения:
- Firebase Realtime Database
- Web Crypto API
- Архитектура SPA без фреймворков
- Принципы UI/UX дизайна

---

<div align="center">
Made with ❤️ by <a href="https://github.com/apreliy05">apreliy05</a>
</div>
