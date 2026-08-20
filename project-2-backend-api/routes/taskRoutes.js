// routes/taskRoutes.js
// Defines the /api/tasks endpoints and forwards requests to the controller.

const express = require("express");
const router = express.Router();
const { getTasks, createTask } = require("../controllers/taskController");

// GET /api/tasks - retrieve all tasks
router.get("/", getTasks);

// POST /api/tasks - create a new task
router.post("/", createTask);

module.exports = router;
