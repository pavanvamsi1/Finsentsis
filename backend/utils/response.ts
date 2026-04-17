import { Response } from "express";

export const sendResponse = <T>(
  res: Response,
  status: number,
  message: string,
  data?: T
) => {
  return res.status(status).json({
    success: true,
    message,
    data: data ?? null,
  });
};

export const sendError = (
  res: Response,
  status: number,
  message: string
) => {
  return res.status(status).json({
    success: false,
    message,
  });
};