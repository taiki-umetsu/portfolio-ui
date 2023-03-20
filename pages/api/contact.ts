import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Auto-reply email to user
  const mailToUser = {
    from: process.env.SEND_FROM_EMAIL,
    to: email,
    subject: "Thank you for contacting me",
    text: `
  Dear ${name},

  Thank you for contacting me. I have received your message with the following details:

  Name: ${name}
  Email Address: ${email}
  Message:
  ${message}

  I will get back to you as soon as possible.

  Best regards,
`,
  };

  // Sent email to admin as well
  const mailToAdmin = {
    from: process.env.SEND_FROM_EMAIL,
    to: process.env.GMAIL_USER,
    subject: "New contact from your portfolio",
    text: `
  You have received a new contact from your portfolio:

  Name: ${name}
  Email Address: ${email}
  Message:
  ${message}
`,
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
