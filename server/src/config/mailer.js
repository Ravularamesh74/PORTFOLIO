import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, message }) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // default test sender
      to: process.env.EMAIL_TO || email, // your email or self
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return response;
  } catch (error) {
    console.error("❌ Resend Error:", error);
    throw error;
  }
};