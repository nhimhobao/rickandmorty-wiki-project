import express from "express";

import { getCharacters } from "../controllers/characterController";

const router = express.Router();
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const data = await getCharacters(page);
  return res.json({
    items: data.characters,
    page: data.page,
    hasMore: data.hasMore,
  });
});
export default router;
