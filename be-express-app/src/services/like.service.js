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

function getPaging(query = {}) {
  const page = Math.max(1, Number.parseInt(query.page ?? "1", 10) || 1);
  const pageSize = Math.max(
    1,
    Number.parseInt(query.pageSize ?? "10", 10) || 10,
  );
  const skip = (page - 1) * pageSize;
  return { page, pageSize, skip };
}

export const likeService = {
  async likeRestaurant({ userId, resId }) {
    if (!userId) throw new UnauthorizedError("Unauthorized.");

    const userIdInt = toPositiveInt(userId, "userId");
    const resIdInt = toPositiveInt(resId, "resId");

    const restaurant = await prisma.restaurant.findUnique({
      where: { res_id: resIdInt },
      select: { res_id: true },
    });
    if (!restaurant) throw new NotFoundError("Restaurant not found.");

    // Idempotent: đã like rồi thì trả luôn success
    const existed = await prisma.like_res.findFirst({
      where: { user_id: userIdInt, res_id: resIdInt },
      select: { like_id: true, user_id: true, res_id: true, date_rate: true },
    });

    if (existed) {
      return { liked: true, alreadyLiked: true, item: existed };
    }

    const created = await prisma.like_res.create({
      data: {
        user_id: userIdInt,
        res_id: resIdInt,
        // Nếu còn cột amount thì thêm dòng dưới:
        // amount: 1,
      },
      select: { like_id: true, user_id: true, res_id: true, date_rate: true },
    });

    return { liked: true, alreadyLiked: false, item: created };
  },

  async unlikeRestaurant({ userId, resId }) {
    if (!userId) throw new UnauthorizedError("Unauthorized.");

    const userIdInt = toPositiveInt(userId, "userId");
    const resIdInt = toPositiveInt(resId, "resId");

    const result = await prisma.like_res.deleteMany({
      where: { user_id: userIdInt, res_id: resIdInt },
    });

    // Idempotent: count 0 vẫn success
    return { unliked: true, deletedCount: result.count };
  },

  async getLikesByRestaurant({ resId, query }) {
    const resIdInt = toPositiveInt(resId, "resId");
    const { page, pageSize, skip } = getPaging(query);

    const where = { res_id: resIdInt };

    const [items, totalItem] = await Promise.all([
      prisma.like_res.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { date_rate: "desc" },
        include: {
          users: {
            select: {
              user_id: true,
              full_name: true,
              avatar: true,
            },
          },
        },
      }),
      prisma.like_res.count({ where }),
    ]);

    return {
      totalItem,
      totalPage: Math.ceil(totalItem / pageSize),
      page,
      pageSize,
      items,
    };
  },

  async getLikedRestaurantsByUser({ userId, query }) {
    const userIdInt = toPositiveInt(userId, "userId");
    const { page, pageSize, skip } = getPaging(query);

    const where = { user_id: userIdInt };

    const [items, totalItem] = await Promise.all([
      prisma.like_res.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { date_rate: "desc" },
        include: {
          restaurant: {
            select: {
              res_id: true,
              res_name: true,
              image: true,
              description: true,
            },
          },
        },
      }),
      prisma.like_res.count({ where }),
    ]);

    return {
      totalItem,
      totalPage: Math.ceil(totalItem / pageSize),
      page,
      pageSize,
      items,
    };
  },
};
