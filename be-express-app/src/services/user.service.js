import { prisma } from "../common/prisma/generated/connect.prisma.js";
import { buildQueryPrimaHelper } from "../common/helpers/build-query-prima.helper.js";

export const userService = {
  async avatarLocal(req, res) {},
  async avatarCloud(req, res) {},

  formatUser(user) {
    return {
      id: String(user.user_id),
      fullName: user.full_name || "",
      email: user.email || "",
      avatar: user.avatar || "",
      googleId: user.googleId || "",
    };
  },

  async findAll(req) {
    const { page, pageSize, queryOptions, whereFilters } =
      buildQueryPrimaHelper(req.query);

    const resultPrismaPromise = prisma.users.findMany({
      where: whereFilters,
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const totalItemPromise = prisma.users.count({ where: whereFilters });

    const [resultPrisma, totalItem] = await Promise.all([
      resultPrismaPromise,
      totalItemPromise,
    ]);
    const totalPage = Math.ceil(totalItem / pageSize);
    const items = resultPrisma.map((user) => this.formatUser(user));

    return {
      totalItem: totalItem,
      totalPage: totalPage,
      page: page,
      pageSize: pageSize,
      items,
    };
  },

  async findOne(req) {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
      where: {
        user_id: Number(id),
      },
    });
    if (!user) return null;
    return this.formatUser(user);
  },
};
