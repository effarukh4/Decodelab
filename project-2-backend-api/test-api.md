# API Test Cases

Test the API using Postman, Thunder Client, Insomnia, or curl.
Base URL (local): `http://localhost:5000`

---

## Test 1 — Server Health Check

**Request**
```
GET /
```

**Expected**
```
200 OK
```
```json
{
  "success": true,
  "message": "DecodeLabs Project 2 Backend API is running"
}
```

**curl**
```bash
curl http://localhost:5000/
```

---

## Test 2 — Get All Tasks

**Request**
```
GET /api/tasks
```

**Expected**
```
200 OK
```
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

**curl**
```bash
curl http://localhost:5000/api/tasks
```

---

## Test 3 — Create a Task (Valid)

**Request**
```
POST /api/tasks
```

**Body**
```json
{
  "title": "Learn Backend",
  "description": "Complete DecodeLabs Project 2"
}
```

**Expected**
```
201 Created
```
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": 3,
    "title": "Learn Backend",
    "description": "Complete DecodeLabs Project 2",
    "completed": false
  }
}
```

**curl**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Backend","description":"Complete DecodeLabs Project 2"}'
```

---

## Test 4 — Create a Task (Invalid — Missing Title)

**Request**
```
POST /api/tasks
```

**Body**
```json
{
  "description": "Missing title"
}
```

**Expected**
```
400 Bad Request
```
```json
{
  "success": false,
  "message": "Title is required"
}
```

**curl**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"description":"Missing title"}'
```

---

## Test 5 — Invalid Route

**Request**
```
GET /api/unknown
```

**Expected**
```
404 Not Found
```
```json
{
  "success": false,
  "message": "Route not found"
}
```

**curl**
```bash
curl http://localhost:5000/api/unknown
```
