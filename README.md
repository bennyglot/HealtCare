# 🏥 Patient Management Web Application

This project consists of:

- **Backend**: REST API built with Node.js
- **Frontend**: React + TypeScript application

---

## 📦 Backend Instructions

1. `cd backend`
2. `npm install`
3. `npm start`

---

## 💻 Frontend Instructions

1. `cd frontend`
2. `npm install`
3. `npm start`

---

## 🧪 Database

- Using **MongoDB Atlas** for storage.
- Network access is currently open to everyone.
- If you encounter issues connecting to MongoDB, let me know — I might need to whitelist your IP.

---

## 🧠 Development Process

- First, I analyzed and understood the **data**.
- Once the structure was clear, everything else followed naturally.
- There were two documents:
  - One containing **patients**
  - Another with **lab results**

The challenge was to **connect the two**, and I discovered that the missing key was `patient_id`.

---

## ⚙️ Architecture & Stack

- Initially started with **Redis and WebSocket** for real-time features.
- However, due to complexities like **broadcasting** and **authentication**, I paused that direction.
- Reverted to the basic approach using:
  - **MongoDB Atlas**
  - **React** (frontend)
  - **Node.js** (backend)
  - This allowed using a **single language** across the stack (JavaScript/TypeScript).

---

## 🔁 ETL Process

- In the backend, there is a `scripts/` folder containing an **ETL script**.
- This script:
  - Parses and processes raw data
  - Outputs `combined.json`
  - Inserts it into MongoDB Atlas
- Afterward, I created **schemas** and **interfaces** for the application.

---

## 🧰 Packages

I can share the list of packages used if needed.

---

## ✅ Best Practices

- I tried to follow best practices where possible.
- Code is modular and split between concerns.

---

## ⏱️ Time Spent

- Total working time: **2 days**
- Could be completed faster with clearer requirements or more focused scope.

---

# real world
 in real world i would i use for example aws api gate way + lambda for serverless,
 working with web socket for real time notidication.
 pick components package and go with design.

 
               
