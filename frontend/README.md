# ⚛️ React Frontend – Patient Management App

This is the frontend for the Patient Management System, built with React and TypeScript using a modular and hook-based approach.

## 📦 Install
npm i

## 🛠️ Build
npm run build

## 🧪 Run in Development (Debug Mode)
npm run dev

## 🚀 Run in Production
npm run start

App URL: http://localhost:5173/patients

## 🧩 Features

- Filters:
  - Fetched from backend with unique values.
  - Pagination integrated with filters.
  - Filters trigger updates to the table results.

- Sidebar:
  - Shows a list of test results per patient.

- Patient Table:
  - Allows row selection.

## ⚠️ TODOs

- Authentication:
  - JWT (Bearer token) is not yet implemented.

- Real-Time Updates:
  - Currently using polling every 20 seconds (not ideal).
  - Plan to switch to WebSockets or Server-Sent Events (SSE).

- Optimized Data Updates:
  - Currently fetching all data every update.
  - Future plan: fetch only updated patients and patch them.

- Shared Types:
  - No shared enums/types package yet.
  - Backend and frontend have duplicate type definitions.

- UI/UX:
  - No UI library used.
  - No responsive design or media queries.
  - Needs improvement (I know this is important!).

- Filter Logic:
  - Basic filter module implemented.
  - Needs logic for dependent filters and reset functionality.

- Generic Filter System:
  - Foundation in place, can be extended for more power and reusability.

- ESLint:
  - Configured and in use.

- Icons & Theming:
  - No theme or icon library added yet.

- Testing:
  - No tests implemented yet.
  - Plan to add UI/unit tests with Playwright or Cypress.

## 💡 Dev Notes

- Entire UI built manually with no external UI frameworks.
- Written using React Hooks.
- Focus was on functionality first, enhancements planned as next steps.
