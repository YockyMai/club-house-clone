import { Router } from "express";
import AuthController from "../controllers/authController";
import authRouter from "./authRouter";
import uploadRouter from "./uploadRouter";
// @ts-ignore
const router = new Router();

router.use("/auth", authRouter);
router.use("/upload", uploadRouter);

export default router;
