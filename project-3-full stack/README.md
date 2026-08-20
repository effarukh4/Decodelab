# Full Stack Project 3 — Database Integration (CRUD)

A full-stack CRUD application built with **React (Vite)**, **Node.js/Express**, and **MongoDB**.
This project satisfies the core requirement of Project 3: schema design, CRUD operations, and
persistent storage integration between a frontend and a backend.

## Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB (via Mongoose)

## Project Structure

```
full-stack-project-3/
├── backend/          # Express API server
│   └── src/
│       ├── server.js
│       ├── config/db.js
│       ├── models/Item.js
│       ├── controllers/itemController.js
│       ├── routes/itemRoutes.js
│       ├── middleware/errorMiddleware.js
│       └── utils/response.js
├── frontend/          # React client
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       ├── services/api.js
│       └── styles/App.css
└── docs/
    └── database-schema.md
```

## Getting Started

### 1. Backend setup

```bash
cd backend
npm install
cp ../.env.example .env   # then fill in your MongoDB URI
npm run dev
```

The API will run on `http://localhost:5000` by default.

### 2. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The React app will run on `http://localhost:5173` by default and talks to the backend
via `VITE_API_URL` (see `frontend/.env.example` if you add one, or edit `src/services/api.js`).

## API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|--------------------|
| POST   | /api/items        | Create a new item |
| GET    | /api/items        | Get all items      |
| GET    | /api/items/:id    | Get a single item |
| PUT    | /api/items/:id    | Update an item    |
| DELETE | /api/items/:id    | Delete an item    |

## Environment Variables

Create a `.env` file in `backend/` (see `.env.example`):

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/fullstack_p3
NODE_ENV=development
```


