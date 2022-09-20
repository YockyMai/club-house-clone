import { Router } from "express";
import { passport } from "../core/passport";
import uploadMiddleware from "../middleware/uploadMiddleware";
import uploadController from "../controllers/uploadController";
// @ts-ignore
const router = new Router();

router.get("/avatar", uploadMiddleware, uploadController.avatarUpload);

export default router;
