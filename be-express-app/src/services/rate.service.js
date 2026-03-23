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

function toRateAmount(value) {
	const n = Number.parseInt(value, 10);
	if (!Number.isInteger(n) || n < 1 || n > 5) {
		throw new BadRequestError("amount must be an integer from 1 to 5.");
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

export const rateService = {
	async rateRestaurant({ userId, resId, amount }) {
		if (!userId) {
			throw new UnauthorizedError("Unauthorized.");
		}

		const userIdInt = toPositiveInt(userId, "userId");
		const resIdInt = toPositiveInt(resId, "resId");
		const amountInt = toRateAmount(amount);

		const restaurant = await prisma.restaurant.findUnique({
			where: { res_id: resIdInt },
			select: { res_id: true },
		});

		if (!restaurant) {
			throw new NotFoundError("Restaurant not found.");
		}

		const existed = await prisma.rate_res.findFirst({
			where: { user_id: userIdInt, res_id: resIdInt },
			select: {
				rate_id: true,
				user_id: true,
				res_id: true,
				amount: true,
				date_rate: true,
			},
		});

		if (existed) {
			const updated = await prisma.rate_res.update({
				where: { rate_id: existed.rate_id },
				data: {
					amount: amountInt,
					date_rate: new Date(),
				},
				select: {
					rate_id: true,
					user_id: true,
					res_id: true,
					amount: true,
					date_rate: true,
				},
			});

			return { rated: true, updated: true, item: updated };
		}

		const created = await prisma.rate_res.create({
			data: {
				user_id: userIdInt,
				res_id: resIdInt,
				amount: amountInt,
			},
			select: {
				rate_id: true,
				user_id: true,
				res_id: true,
				amount: true,
				date_rate: true,
			},
		});

		return { rated: true, updated: false, item: created };
	},

	async getRatesByRestaurant({ resId, query }) {
		const resIdInt = toPositiveInt(resId, "resId");
		const { page, pageSize, skip } = getPaging(query);

		const where = { res_id: resIdInt };

		const [items, totalItem] = await Promise.all([
			prisma.rate_res.findMany({
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
			prisma.rate_res.count({ where }),
		]);

		return {
			totalItem,
			totalPage: Math.ceil(totalItem / pageSize),
			page,
			pageSize,
			items,
		};
	},

	async getRatedRestaurantsByUser({ userId, query }) {
		const userIdInt = toPositiveInt(userId, "userId");
		const { page, pageSize, skip } = getPaging(query);

		const where = { user_id: userIdInt };

		const [items, totalItem] = await Promise.all([
			prisma.rate_res.findMany({
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
			prisma.rate_res.count({ where }),
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
