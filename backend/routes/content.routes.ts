import express from "express";

import {
  createContent,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent,
} from "../controllers/content.controller";

const router = express.Router();

router.post("/", createContent);

router.get("/", getAllContent);

router.get("/:id", getSingleContent);

router.put("/:id", updateContent);

router.delete("/:id", deleteContent);

export default router;