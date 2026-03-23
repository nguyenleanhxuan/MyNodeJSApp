import { likeService } from "../services/like.service.js";

export const likeController = {
  async likeRestaurant(req, res, next) {
    const { resId } = req.params;
    const userId = req.user?.userId;
    const result = await likeService.likeRestaurant({ userId, resId });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Like restaurant successfully",
      data: result,
    });
  },

  async unlikeRestaurant(req, res, next) {
    const { resId } = req.params;
    const userId = req.user?.userId;
    const result = await likeService.unlikeRestaurant({ userId, resId });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Unlike restaurant successfully",
      data: result,
    });
  },

  async getLikesByRestaurant(req, res, next) {
    const { resId } = req.params;
    const result = await likeService.getLikesByRestaurant({
      resId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get likes by restaurant successfully",
      data: result,
    });
  },

  async getLikedRestaurantsByUser(req, res, next) {
    const { userId } = req.params;
    const result = await likeService.getLikedRestaurantsByUser({
      userId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get liked restaurants by user successfully",
      data: result,
    });
  },

  async getMyLikedRestaurants(req, res, next) {
    const userId = req.user?.userId;
    const result = await likeService.getLikedRestaurantsByUser({
      userId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get my liked restaurants successfully",
      data: result,
    });
  },
};
