import { Router } from "express";
const route = Router();
import * as likeController from "../controllers/likeController";
import { checkJwt } from "../middlewares/checkJwt";

route.post("/", checkJwt, async (req, res) => {
  const { characterId } = req.body;

  await likeController.insertUpdateLike({
    email: req.user.email || req.user.nickname,
    characterId,
  });
  res.json({ success: true });
});
route.get("/mine", checkJwt, async (req, res) => {
  const likes = await likeController.getLikesByUser({
    email: req.user.email || req.user.nickname,
  });

  res.json({ items: likes });
});
route.get("/:characterId", checkJwt, async (req, res) => {
  const { characterId } = req.params;
  const isLiked = await likeController.checkLike({
    email: req.user.email || req.user.nickname,
    characterId,
  });
  return res.json({ isLiked });
});

export default route;
