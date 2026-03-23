import express from "express";
import foodRouter from "./food.router.js";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import likeRouter from "./like.router.js";
import rateRouter from "./rate.router.js";
import orderRouter from "./order.router.js";

const rootRouter = express.Router();
rootRouter.use("/foods", foodRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/likes", likeRouter);
rootRouter.use("/rates", rateRouter);
rootRouter.use("/orders", orderRouter);
export default rootRouter;
