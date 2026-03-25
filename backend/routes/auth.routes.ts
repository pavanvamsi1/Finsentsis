import { Router, Request, Response, NextFunction } from "express";
import { sendResponse, sendError } from "../utils/response";

const router = Router();

router.post(
  "/login",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return sendError(res, 400, "Email and password required");
      }

      return sendResponse(res, 200, "Login successful", { email });
    } catch (error) {
      next(error);
    }
  }
);

export default router;