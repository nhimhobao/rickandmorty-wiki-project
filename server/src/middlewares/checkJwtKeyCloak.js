import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import { authDomain } from "../config";

function getAuth0SecretKey() {
  return jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // jwksUri: `${authDomain}/.well-known/jwks.json`,
    jwksUri:
      "http://localhost:9090/auth/realms/rick-and-morty-wiki/protocol/openid-connect/certs",
  });
}

export const checkJwtKeyCloak = jwt({
  secret: getAuth0SecretKey(),
  issuer: ["http://localhost:9090/auth/realms/rick-and-morty-wiki"],
  algorithms: ["RS256"],
});
