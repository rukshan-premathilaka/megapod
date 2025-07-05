# MegaPod - Full Stack Project

A full-stack web application built using **React (Vite)** for the frontend and **Node.js (Express)** with **MySQL** for the backend.

---

## Project Structure

```
megapod/
├── backend/
│   ├── src/
│   │   └── config/
│   │       ├── .env         ← Edit this file with your DB credentials
│   │       └── db.sql       ← Run this to create the database
│   ├── server.js
│   └── package.json
├── client/
│   ├── src/
│   ├── index.html
│   └── package.json
└── README.md                
```

---

## ⚙️ Requirements

Make sure these are installed:

- Node.js (v18 or newer)
- npm
- MySQL Server

---

## 1. Backend Setup

### 📌 Step 1: Navigate to backend

```bash
cd backend
```

### 📌 Step 2: Install dependencies

```bash
npm install
```

### 📌 Step 3: Edit `.env` file

Go to:
```
backend/src/config/.env
```

Edit the file with your own MySQL configuration:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=megapod
```

> ⚠️ Replace `your_mysql_password` with your actual MySQL password.

---

###  Step 4: Create the database

Go to your MySQL GUI (like phpMyAdmin or MySQL Workbench) or use terminal:

```bash
mysql -u root -p < src/config/db.sql
```

This will run the `db.sql` file and create the `megapod` database with all required tables.

---

###  Step 5: Start the backend server

```bash
npm run server
```

It will run the backend at:

```
http://localhost:3000
```

---

##  2. Frontend Setup

### 📌 Step 1: Navigate to client folder

```bash
cd ../client
```

### 📌 Step 2: Install dependencies

```bash
npm install
```

### 📌 Step 3: Start the frontend dev server

```bash
npm run dev
```

It will run at:

```
http://localhost:5173
```

---

##  3. Login and Level System

- Backend endpoints are available under `/user` like:

  - `POST /user/signup`
  - `POST /user/signing`
  - `POST /user/update-level`
  - `POST /user/get-level`
  - `POST /user/completed-levels`

- The level system tracks each student’s progress.
- Completed levels are shown on the `/levels` page as a vertical timeline.
- The main game page is under `/game`.

---
