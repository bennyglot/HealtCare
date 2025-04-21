# 🧠 Node.js Backend – Patient Management API

This is the backend service for the Patient Management System. It provides a RESTful API built with Node.js and MongoDB, using a modular structure.

## 📦 Install
npm i

## 🛠️ Build
npm run build

## 🧪 Run in Development (Debug Mode)
npm run dev

## 🚀 Run in Production
npm run start

---

## 🌐 API Endpoints

- **Get Patients (with pagination & filters)**  
  `GET http://localhost:3000/api/patients/?page=1&limit=20`

- **Get Patient by ID**  
  `GET http://localhost:3000/api/patients/7792223`

- **Get Patient Test by Test ID**  
  `GET http://localhost:3000/api/patients/7792223/42916`

---

## 🧩 Features

- Patients routes with full pagination and filter support.
- Filters are generated dynamically based on unique values from the DB.
  - Example filter response: `{ "gender": ["male", "female"], "status": ["active", "inactive"] }`

---

## ⚠️ TODOs

- Authentication:
  - JWT (Bearer token) not implemented yet.

- Caching:
  - Add Redis/memory-based caching for improved performance.

- Real-Time Communication:
  - Plan to use WebSocket triggered by cloud events to push updates to the client.

- Mongoose Integration:
  - Script uses Mongoose schemas, REST routes use plain MongoDB with interfaces.
  - Need to consolidate to a single DB strategy.

- Redis:
  - Currently using MongoDB Atlas.
  - Considering replacing or combining with Redis for performance.
  - Please share your IP(s) if access is needed — happy to whitelist.

- Folder Structure:
  - Current setup is minimal for exercise purposes.
  - In a real-world app, would implement modular structure with shared `enums` and `types`.

- Shared Types:
  - No shared type package yet — backend and frontend have duplicate types.

- Testing:
  - Plan to use **Jest** for REST API testing.
  - Test suite not yet implemented.

---

## 💡 Dev Notes

- The backend is structured for learning and demonstration purposes — not production-ready.
- Ideal setup would include:
  - Shared packages for types/enums between backend and frontend.
  - WebSocket/SSE for real-time updates.
  - Caching layer for heavy operations.
  - Scalable folder structure for multi-app support.
