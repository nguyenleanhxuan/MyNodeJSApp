import express from "express";
import { protectMiddleware } from "../middlewares/protect.middleware.js";
import { orderController } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", protectMiddleware, orderController.createOrder);

export default orderRouter;
