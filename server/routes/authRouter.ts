import { Router } from "express";
import { passport } from "../core/passport";
import authController from "../controllers/authController";
// @ts-ignore
const router = new Router();

router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  authController.gitHubAuth
);

router.post("/call", passport.authenticate("jwt"), authController.sendCallCode);
router.get(
  "/call/check",
  passport.authenticate("jwt", { session: false }),
  authController.checkCallCode
);

router.get("/me", passport.authenticate("jwt"), authController.getMe);

export default router;
