import { prisma } from "../common/prisma/generated/connect.prisma.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../common/helpers/exception.helper.js";

function toPositiveInt(value, fieldName) {
  const n = Number.parseInt(value, 10);
  if (!Number.isInteger(n) || n <= 0) {
    throw new BadRequestError(`${fieldName} must be a positive integer.`);
  }
  return n;
}

function generateOrderCode() {
  return `OD${Date.now()}`;
}

export const orderService = {
  async createOrder({ userId, body }) {
    if (!userId) {
      throw new UnauthorizedError("Unauthorized.");
    }

    const userIdInt = toPositiveInt(userId, "userId");
    const foodIdInt = toPositiveInt(body?.food_id, "food_id");
    const amountInt = toPositiveInt(body?.amount, "amount");
    const arrSubId =
      body?.arr_sub_id === undefined || body?.arr_sub_id === null
        ? null
        : String(body.arr_sub_id);

    let foodExist = null;

    try {
      foodExist = await prisma.food.findFirst({
        where: { food_id: foodIdInt, is_deleted: false },
        select: { food_id: true, food_name: true, is_deleted: true },
      });
    } catch (error) {
      const message = String(error?.message || "").toLowerCase();
      const isMissingSoftDeleteColumn =
        message.includes("is_deleted") &&
        (message.includes("unknown") ||
          message.includes("does not exist") ||
          message.includes("invalid") ||
          message.includes("column"));

      if (!isMissingSoftDeleteColumn) {
        throw error;
      }

      foodExist = await prisma.food.findUnique({
        where: { food_id: foodIdInt },
        select: { food_id: true, food_name: true },
      });
    }

    if (!foodExist) {
      throw new NotFoundError("Food not found.");
    }

    const orderCreated = await prisma.orders.create({
      data: {
        user_id: userIdInt,
        food_id: foodIdInt,
        amount: amountInt,
        code: generateOrderCode(),
        arr_sub_id: arrSubId,
      },
      include: {
        food: {
          select: {
            food_id: true,
            food_name: true,
            price: true,
          },
        },
      },
    });

    return orderCreated;
  },
};
