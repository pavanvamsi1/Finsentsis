import express = require("express");
import { contactHandler } from "../controllers/contact.controller";

const router = express.Router();

router.post("/contact", contactHandler);

export = router;