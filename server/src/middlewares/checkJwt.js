import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import { authDomain } from "../config";

function getAuth0SecretKey() {
  return jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${authDomain}/.well-known/jwks.json`,
  });
}

export const checkJwt = jwt({
  secret: getAuth0SecretKey(),
  issuer: [`${authDomain}/`],
  algorithms: ["RS256"],
});
