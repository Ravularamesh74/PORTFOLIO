import { asyncHandler } from "../middlewares/asyncHandler.js";
import { sendEmail } from "../config/mailer.js";
import Contact from "../models/Contact.js";

export const sendContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }

  // Save to DB
  await Contact.create({ name, email, message });

  // Send email
  await sendEmail({ name, email, message });

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
  });
});