import "./env";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import callbackRoute from "./routes/callback";
import profileRoute from "./routes/profile";
import logoutRoute from "./routes/logout";
import likeRoute from "./routes/like";
import charactersRoute from "./routes/charactersRoute";
import syncDbRoute from "./routes/syncDb";

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/callback", callbackRoute);
app.use("/profile", profileRoute);

app.use("/logout", logoutRoute);
app.use("/sync-db", syncDbRoute);
app.use("/likes", likeRoute);
app.use("/characters", charactersRoute);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`\x1b[0m[LOG] Server running on port ${port}`)
);
