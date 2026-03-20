import { Request, Response } from "express";
import { sendOTPEmail } from "../services/email.service";

export const sendOTPHandler = async (req: Request, res: Response) => {
  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOTPEmail(email, otp);

    res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};