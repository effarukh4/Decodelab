// server.js
// Main backend entry point.
//
// Flow:
// Start Express -> Load environment variables -> Configure middleware
// -> Configure routes -> Configure error handling -> Start server

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Routes ---

// GET / - simple health check to confirm the server is running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "DecodeLabs Project 2 Backend API is running",
  });
});

// GET /api/tasks, POST /api/tasks
app.use("/api/tasks", taskRoutes);

// --- Error handling ---

// 404 handler for unknown routes
app.use(notFound);

// Generic error handler
app.use(errorHandler);

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
