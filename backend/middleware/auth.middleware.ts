import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware function
export const authMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  //  1. Get token from header
  const authHeader = req.headers.authorization;

  // If no token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, Unauthorized" });
  }

  //  2. Extract token
  const token = authHeader.split(" ")[1];

  try {
    //  3. Verify JWT token
    const decoded = jwt.verify(token, "secret");

    //  4. Attach user to request
    req.user = decoded;

    //  5. Allow request to continue
    next();
  } catch (err) {
    //  Invalid token
    return res.status(401).json({ message: "Invalid token" });
  }
};