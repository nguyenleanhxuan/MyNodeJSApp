import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { protectMiddleware } from "../middlewares/protect.middleware.js";
import passport from "passport";

const authRouter = express.Router();

// Tạo route CRUD
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/get-info", protectMiddleware, authController.getInfo);

// Route refresh token. Không cần bảo vệ vì client sẽ gửi refresh token trong body hoặc cookie, không phải access token.
authRouter.post("/refresh-token", authController.refreshToken);
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    res.redirect("/");
  },
);

export default authRouter;
