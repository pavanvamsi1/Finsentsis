import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

// Protected route
router.get("/profile", authMiddleware, (req: any, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});

export default router;