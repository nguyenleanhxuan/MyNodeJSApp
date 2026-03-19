import express from "express";
import foodRouter from "./food.router.js";
import authRouter from "./auth.router.js";

const rootRouter = express.Router();
rootRouter.use("/foods", foodRouter);
rootRouter.use("/auth", authRouter);

export default rootRouter;
