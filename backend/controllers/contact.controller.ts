import { Request, Response } from "express";
import {
  sendContactConfirmation,
  sendDemoNotification,
} from "../services/email.service";

export const contactHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    await sendContactConfirmation(email, name);
    await sendDemoNotification({ name, email, message });

    res.json({
      success: true,
      message: "Contact request processed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};