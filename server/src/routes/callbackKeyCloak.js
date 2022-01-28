import express from "express";
import axios from "axios";

import queryString from "querystring";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //
    // curl -X POST -H
    // "Content-Type: application/x-www-form-urlencoded"
    // -d "grant_type=authorization_code&code=3bffbda8-1453-4e2c-8edb-bffd096c40b4.04c1e2e4-e6a2-460f-841a-83ef532b01d8.e3e6990e-7c61-48a3-93e0-ee1bbc3724a4&redirect_uri=http://localhost:4200/authorization-code/callback&client_id=serendipity-pwa&client_secret=Password12"
    // http://localhost:10001/auth/realms/development/protocol/openid-connect/token
    console.log(req.query);
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: `http://localhost:9090/auth/realms/rick-and-morty-wiki/protocol/openid-connect/token`,
      data: queryString.stringify({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: "http://localhost:3000/callback-keycloak",
        client_id: "website",
        client_secret: "d5631f46-ca51-45af-b35b-1f1ee52c75e8",
      }),
    };
    const response = await axios(options);
    res.json({
      id_token: response.data.id_token,
    });
  } catch (error) {
    res.send(error.response.data);
  }
});
export default router;
