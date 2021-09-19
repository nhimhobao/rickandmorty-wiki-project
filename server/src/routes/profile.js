import express from "express";
import { checkJwt } from "../middlewares/checkJwt";

const router = express.Router();

router.get("/", checkJwt, (req, res) => {
  res.json({ user: req.user });
});
export default router;
