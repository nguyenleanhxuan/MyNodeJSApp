import express from "express";
import { protectMiddleware } from "../middlewares/protect.middleware.js";
import { rateController } from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.post(
  "/restaurants/:resId",
  protectMiddleware,
  rateController.rateRestaurant,
);
rateRouter.get("/restaurants/:resId", rateController.getRatesByRestaurant);
rateRouter.get(
  "/users/:userId/restaurants",
  rateController.getRatedRestaurantsByUser,
);
rateRouter.get(
  "/me/restaurants",
  protectMiddleware,
  rateController.getMyRatedRestaurants,
);

export default rateRouter;
