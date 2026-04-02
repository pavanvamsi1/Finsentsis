import express = require("express");
import { sendOTPHandler } from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-otp", sendOTPHandler);

export = router;