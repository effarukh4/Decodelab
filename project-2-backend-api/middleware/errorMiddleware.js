// middleware/errorMiddleware.js
// Handles unknown routes (404) and unexpected server errors (500).

// 404 handler - runs when no route matches the request
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

// Generic error handler - catches any errors thrown/passed via next(err)
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = {
  notFound,
  errorHandler,
};
