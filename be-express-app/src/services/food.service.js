import { where } from "sequelize";
import { prisma } from "../common/prisma/generated/connect.prisma.js";
import sequelize from "../common/sequelize/connect.sequelize.js";

import Food from "../models/food.model.js";
import { buildQueryPrimaHelper } from "../common/helpers/build-query-prima.helper.js";

export const foodService = {
  async findAll(queryParams = {}) {
    //const resultSequelize = await Food.findAll();
    const { page, pageSize, queryOptions, whereFilters } =
      buildQueryPrimaHelper(queryParams);
    console.log("Query parameters:", { page, pageSize });
    let items = [];
    let totalItem = 0;

    try {
      const resultPrisma = prisma.food.findMany({
        ...queryOptions,
        where: {
          ...whereFilters,
          is_deleted: false, // Lọc ra những món ăn chưa bị xóa mềm
        },
      });
      const totalItems = prisma.food.count({
        where: {
          ...whereFilters,
          is_deleted: false, // Đếm tổng số món ăn chưa bị xóa mềm
        },
      });

      [items, totalItem] = await Promise.all([resultPrisma, totalItems]);
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

      // Fallback cho DB cũ chưa có cột is_deleted.
      const resultPrisma = prisma.food.findMany({
        ...queryOptions,
        where: whereFilters,
      });
      const totalItems = prisma.food.count({ where: whereFilters });
      [items, totalItem] = await Promise.all([resultPrisma, totalItems]);
    }

    // Tại sao phải phải dùng Promise.all() ở đây?
    // Vì cả 2 hàm findMany và count đều trả về Promise, nếu không dùng Promise.all() thì sẽ phải chờ hàm findMany hoàn thành mới bắt đầu thực hiện hàm count, điều này sẽ làm tăng thời gian xử lý. Sử dụng Promise.all() sẽ giúp thực hiện cả 2 hàm song song, khi cả 2 hàm đều hoàn thành thì mới tiếp tục xử lý phần còn lại của code, giúp giảm thời gian xử lý tổng thể.

    const totalPages = Math.ceil(totalItem / pageSize);

    //return resultSequelize;
    return {
      totalItem,
      totalPage: totalPages,
      page: page,
      pageSize: pageSize,
      items,
    };
  },
  // Để nhận được body cần 1 middleware body parser, ở đây dùng express.json() ở file app.js
  async createFood(foodData) {
    const data = {
      food_name: foodData?.food_name ?? foodData?.name ?? null,
      image: foodData?.image ?? null,
      price: foodData?.price ?? null,
      description: foodData?.description ?? foodData?.desc ?? null,
      type_id: foodData?.type_id ?? null,
    };

    const foodNew = await prisma.food.create({ data });
    return foodNew;
  },
  async updateFood(id, foodData) {
    const updateData = foodData ?? {};
    const foodUpdated = await prisma.food.update({
      where: { food_id: parseInt(id, 10) },
      data: {
        food_name: updateData?.food_name ?? updateData?.name ?? undefined,
        image: updateData?.image ?? undefined,
        price: updateData?.price ?? undefined,
      },
    });
    return foodUpdated;
  },

  // delete real => không nên dùng, nên dùng soft delete (thêm cột is_deleted hoặc deleted_at)
  async deleteFood(id) {
    const foodDeleted = await prisma.food.delete({
      where: { food_id: parseInt(id, 10) },
    });
    return foodDeleted;
  },

  async softDeleteFood(id) {
    const foodSoftDeleted = await prisma.food.update({
      where: { food_id: parseInt(id, 10) },
      data: { is_deleted: true },
    });
    return foodSoftDeleted;
  },
};
