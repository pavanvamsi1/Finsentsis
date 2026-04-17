import { Router, Request, Response } from "express";
import { sendResponse } from "../utils/response";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return sendResponse(res, 200, "Hello API working");
});

export default router;