import nodemailer = require("nodemailer");
import dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// transporter.verify(function (error, success) {
//   if (error) {
//     console.log("smtp connection error", error);
//   } else {
//     console.log("smtp server ready");
//   }
// });

const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  try {
    const info = await transporter.sendMail({
      from: `"Finsentsis" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    throw error;
  }
};

export = sendEmail;