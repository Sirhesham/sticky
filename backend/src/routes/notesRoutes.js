import express from "express";
const router = express.Router();
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteControllers.js";

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
// heshammchess_db_user
// y473yLSeq87wh3rx
// mongodb+srv://heshammchess_db_user:y473yLSeq87wh3rx@cluster0.khqkehu.mongodb.net/?appName=Cluster0