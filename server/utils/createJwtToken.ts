import { userModel } from "../../types/models/user";
import jwt from "jsonwebtoken";

const createJwt = (user: any): string => {
  const { ...payload } = user;

  return jwt.sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "24h",
  });
};

export default createJwt;
