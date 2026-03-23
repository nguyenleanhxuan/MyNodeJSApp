import { STATUS_CODES } from "http";
import { foodService } from "../services/food.service.js";

export const foodController = {
  async findAll(request, response, next) {
    const result = await foodService.findAll(request.query);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food items retrieved successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
  async findOneById(request, response, next) {
    const { id } = request.params;
    const result = await foodService.findOneById(id);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food items retrieved successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
  async createFood(request, response, next) {
    const result = await foodService.createFood(request.body);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food item created successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
  async updateFood(request, response, next) {
    const { id } = request.params;
    const result = await foodService.updateFood(id, request.body);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food item updated successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
  async deleteFood(request, response, next) {
    const { id } = request.params;
    const result = await foodService.deleteFood(id);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food item deleted successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
  async softDeleteFood(request, response, next) {
    const { id } = request.params;
    const result = await foodService.softDeleteFood(id);
    response.json({
      status: "success",
      statusCode: 200,
      message: "Food item soft deleted successfully",
      data: result,
      doc: "Swagger documentation URL or reference",
    });
  },
};
