import express from "express";
import foodRouter from "./food.router.js";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();
rootRouter.use("/foods", foodRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
