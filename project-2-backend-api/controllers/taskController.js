// controllers/taskController.js
// Contains the application logic for the Task resource.
// In-memory storage is used since a database is not required for this project.

let tasks = [
  {
    id: 1,
    title: "Learn Express",
    description: "Practice API development",
    completed: false,
  },
  {
    id: 2,
    title: "Test API",
    description: "Test with Postman",
    completed: false,
  },
];

let nextId = 3;

/**
 * GET /api/tasks
 * Receive GET request -> Get tasks -> Return JSON response
 */
const getTasks = (req, res) => {
  return res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

/**
 * POST /api/tasks
 * Receive POST request -> Read request body -> Validate input
 * -> Create task -> Return response
 */
const createTask = (req, res) => {
  const { title, description } = req.body;

  // --- Basic data validation ---

  // title: must exist, must be a string, must not be empty
  if (title === undefined || title === null) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  // description: optional, but if provided must be a string
  if (description !== undefined && typeof description !== "string") {
    return res.status(400).json({
      success: false,
      message: "Description must be a string",
    });
  }

  // --- Create the task ---
  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description ? description.trim() : "",
    completed: false,
  };

  tasks.push(newTask);

  return res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask,
  });
};

module.exports = {
  getTasks,
  createTask,
};
