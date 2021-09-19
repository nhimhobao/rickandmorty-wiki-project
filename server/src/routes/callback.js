// server/src/routes/callback.js
import express from "express";

import axios from "axios";

import queryString from "querystring";

import {
  authClientId,
  authClientSecret,
  authDomain,
  authRedirectUri,
  clientUrlCallback,
} from "../config";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const options = {
      method: "POST",
      url: `${authDomain}/oauth/token`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: queryString.stringify({
        grant_type: "authorization_code",
        client_id: authClientId,
        client_secret: authClientSecret,
        code: req.query.code,
        redirect_uri: authRedirectUri,
      }),
    };
    const response = await axios(options);
    res.redirect(`${clientUrlCallback}?id_token=${response.data.id_token}`);
  } catch (error) {
    res.send(error.response.data);
  }
});

export default router;
