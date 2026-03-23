import express from "express";
import { userController } from "../controllers/user.controller.js";
import { protectMiddleware } from "../middlewares/protect.middleware.js";

const userRouter = express.Router();

userRouter.get("", userController.findAll);
userRouter.get("/:id", userController.findOne);

userRouter.post("/avatar-local", protectMiddleware, userController.avatarLocal);

userRouter.post("/avatar-cloud", protectMiddleware, userController.avatarCloud);

export default userRouter;
