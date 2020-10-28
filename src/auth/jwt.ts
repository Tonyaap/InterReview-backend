import {secret} from "../config/secrets";
import * as jwt from 'jsonwebtoken'



export function toJWT(data) {
  return jwt.sign(data, secret.jwtSecret, { expiresIn: "2h" });
}

export function toData(token) {
  return jwt.verify(token, secret.jwtSecret);
}

 module.exports = { toJWT, toData };
 