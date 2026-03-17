import express from "express";
import { sendContact } from "../controllers/contactController.js";
import { validateContact } from "../middlewares/validateContact.js";

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post("/", validateContact, sendContact);

export default router;