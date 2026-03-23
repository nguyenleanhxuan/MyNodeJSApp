import { orderService } from "../services/order.service.js";

export const orderController = {
  async createOrder(req, res, next) {
    const userId = req.user?.userId;
    const result = await orderService.createOrder({ userId, body: req.body });

    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Create order successfully",
      data: result,
    });
  },
};
