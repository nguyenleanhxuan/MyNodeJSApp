import { rateService } from "../services/rate.service.js";

export const rateController = {
  async rateRestaurant(req, res, next) {
    const { resId } = req.params;
    const userId = req.user?.userId;
    const { amount } = req.body;
    const result = await rateService.rateRestaurant({ userId, resId, amount });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Rate restaurant successfully",
      data: result,
    });
  },
  async getRatesByRestaurant(req, res, next) {
    const { resId } = req.params;
    const result = await rateService.getRatesByRestaurant({
      resId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get rates by restaurant successfully",
      data: result,
    });
  },
  async getRatedRestaurantsByUser(req, res, next) {
    const { userId } = req.params;
    const result = await rateService.getRatedRestaurantsByUser({
      userId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get rated restaurants by user successfully",
      data: result,
    });
  },
  async getMyRatedRestaurants(req, res, next) {
    const userId = req.user?.userId;
    const result = await rateService.getRatedRestaurantsByUser({
      userId,
      query: req.query,
    });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get my rated restaurants successfully",
      data: result,
    });
  },
};
