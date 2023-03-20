import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { readEmailTemplate } from "@/emailTemplates/emailHelper";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, recaptchaValue } = req.body;

  // check reCAPTCHA
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaValue}`;

  const recaptchaResponse = await fetch(verifyUrl, { method: "POST" });
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    return res.status(400).json({ message: "reCAPTCHA validation failed" });
  }

  // smtp configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // auto-reply email to user
  const mailToUser = {
    from: process.env.SEND_FROM_EMAIL,
    to: email,
    subject: "Thank you for contacting me",
    text: readEmailTemplate("contact", "userEmail.txt", {
      name,
      email,
      message,
    }),
  };

  // send email to admin as well
  const mailToAdmin = {
    from: process.env.SEND_FROM_EMAIL,
    to: process.env.GMAIL_USER,
    subject: "New contact from your portfolio",
    text: readEmailTemplate("contact", "adminEmail.txt", {
      name,
      email,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailToUser);
    await transporter.sendMail(mailToAdmin);
    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send emails" });
  }
};

export default handler;
