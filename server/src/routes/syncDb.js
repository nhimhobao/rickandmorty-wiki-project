import express from "express";
import { syncCharacters } from "../controllers/characterController";

const router = express.Router();

router.get("/", async (req, res) => {
  await syncCharacters();

  res.json({ success: true });
});
export default router;
