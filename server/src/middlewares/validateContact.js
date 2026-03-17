export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid name (at least 2 characters).",
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  if (!message || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: "Please provide a message (at least 5 characters).",
    });
  }

  next();
};
