import express from "express";
import { clientUrl } from "../config";

const router = express.Router();
router.get("/", (req, res) => {
  res.redirect(`${clientUrl}/logout`);
});
export default router;
