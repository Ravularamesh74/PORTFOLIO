export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Handle invalid JSON (body parser error)
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    statusCode = 400;
    message = "Invalid JSON format";
  }

  // Handle Nodemailer errors (optional safety)
  if (err.code === "EAUTH") {
    statusCode = 500;
    message = "Email authentication failed";
  }

  // Handle unknown routes (optional pattern)
  if (err.name === "NotFoundError") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    success: false,
    message,
    // show stack only in development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};