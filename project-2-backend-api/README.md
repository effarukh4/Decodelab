# DecodeLabs — Project 2: Backend API Development

## Project Overview

This project is a simple backend API built for **DecodeLabs Project 2 — Backend API Development** (Full Stack Development Program, Batch 2026). It demonstrates:

- Creating API endpoints
- Processing requests
- Handling user input
- Sending appropriate responses
- Performing basic data validation
- Server-side logic and fundamental API concepts

The scope is intentionally simple: a Task API with `GET`/`POST` endpoints, in-memory storage, input validation, and proper HTTP status codes. No database, authentication, or frontend is required by the assignment.

---

## Technologies

- Node.js
- Express.js
- CORS
- dotenv
- nodemon (development only)

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root (an `.env.example` is provided as a template):

```env
PORT=5000
NODE_ENV=development
```

> `.env` is excluded from version control via `.gitignore`.

---

## How to Run

**Development (auto-restart with nodemon):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will start at `http://localhost:5000` (or the port set in `.env`).

---

## Folder Structure

```text
decodelabs-project-2-backend-api/
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── server.js
├── README.md
└── test-api.md
```

---

## API Endpoints

| Method | Endpoint     | Purpose       |
| ------ | ------------ | ------------- |
| GET    | `/`          | Check server  |
| GET    | `/api/tasks` | Get all tasks |
| POST   | `/api/tasks` | Create a task |

---

## Request / Response Examples

### GET `/api/tasks`

**Response — `200 OK`**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Learn Express",
      "description": "Practice API development",
      "completed": false
    },
    {
      "id": 2,
      "title": "Test API",
      "description": "Test with Postman",
      "completed": false
    }
  ]
}
```

### POST `/api/tasks`

**Request body**
```json
{
  "title": "Learn Express",
  "description": "Practice API development"
}
```

**Response — `201 Created`**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": 1,
    "title": "Learn Express",
    "description": "Practice API development",
    "completed": false
  }
}
```

---

## Validation

- **`title`** — required, must be a non-empty string
- **`description`** — optional, must be a string if provided

**Invalid request example**
```json
{
  "description": "Build an API"
}
```

**Response — `400 Bad Request`**
```json
{
  "success": false,
  "message": "Title is required"
}
```

---

## HTTP Status Codes Used

| Code | Meaning                  |
| ---- | ------------------------ |
| 200  | Successful GET           |
| 201  | Successful POST/creation |
| 400  | Invalid input            |
| 404  | Route/resource not found |
| 500  | Server error             |

---

## Testing

See [`test-api.md`](./test-api.md) for a full set of test cases (server health check, get tasks, create task, invalid task, invalid route) using curl / Postman / Thunder Client / Insomnia.

---

## Scope Notes

This project intentionally does **not** include MongoDB, authentication/JWT, a frontend, CRUD for products/users, Cloudinary, Stripe, or deployment — these are optional future enhancements, not requirements for Project 2.
