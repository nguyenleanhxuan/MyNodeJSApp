import express from "express";
import { likeController } from "../controllers/like.controller.js";
import { protectMiddleware } from "../middlewares/protect.middleware.js";

const likeRouter = express.Router();

// Like / Unlike (cần đăng nhập)
likeRouter.post(
  "/restaurants/:resId",
  protectMiddleware,
  likeController.likeRestaurant,
);
likeRouter.delete(
  "/restaurants/:resId",
  protectMiddleware,
  likeController.unlikeRestaurant,
);

// Danh sách user đã like 1 nhà hàng
likeRouter.get("/restaurants/:resId", likeController.getLikesByRestaurant);

// Danh sách nhà hàng user đã like
likeRouter.get(
  "/users/:userId/restaurants",
  likeController.getLikedRestaurantsByUser,
);

// Nếu muốn lấy của chính mình
likeRouter.get(
  "/me/restaurants",
  protectMiddleware,
  likeController.getMyLikedRestaurants,
);

export default likeRouter;
