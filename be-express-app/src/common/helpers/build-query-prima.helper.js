export const buildQueryPrimaHelper = (queryParams) => {
  // Cách viết xử lý nếu input chữ // số âm // thiếu page hoặc pageSize
  const page = Math.max(parseInt(queryParams.page, 10) || 1, 1);
  const pageSize = Math.max(parseInt(queryParams.pageSize, 10) || 3, 1);

  // can you explain Math.max(parseInt(queryParams.page, 10) || 1, 1) and Math.max(parseInt(queryParams.pageSize, 10) || 10, 1) in this code?
  // Sure! The code Math.max(parseInt(queryParams.page, 10) || 1, 1) is used to determine the value of the page variable. It does the following:
  // 1. parseInt(queryParams.page, 10): This attempts to parse the page query parameter as an integer in base 10. If queryParams.page is not a valid number, it will return NaN.
  // 2. || 1: If the result of parseInt is NaN (which is falsy), it will default to 1. This means that if the page parameter is missing or invalid, it will use page = 1.
  // 3. Math.max(..., 1): This ensures that the final value of page is at least 1. If someone tries to set page to a value less than 1 (like 0 or -5), it will still default to 1.

  const skip = (page - 1) * pageSize;
  const allowedSortFields = ["food_id", "food_name", "price", "type_id"];
  const sortBy = allowedSortFields.includes(queryParams.sortBy)
    ? queryParams.sortBy
    : "food_id";
  const sortOrder = String(queryParams.isDesc) === "true" ? "desc" : "asc";
  const queryOptions = {
    skip,
    take: pageSize,
    orderBy: {
      [sortBy]: sortOrder,
    },
  };

  // Xử lý filters
  let parsedFilters = {};
  if (queryParams.filters) {
    try {
      parsedFilters = JSON.parse(queryParams.filters);
    } catch {
      parsedFilters = {};
    }
  }

  const whereFilters = {};

  const foodId = Number(parsedFilters.food_id);
  if (Number.isInteger(foodId) && foodId > 0) {
    whereFilters.food_id = foodId;
  }

  const foodName = String(parsedFilters.food_name || "").trim();
  if (foodName) {
    whereFilters.food_name = {
      contains: foodName,
    };
  }

  const price = Number(parsedFilters.price);
  if (parsedFilters.price !== undefined && Number.isFinite(price)) {
    whereFilters.price = price;
  }
  return {
    page,
    pageSize,
    queryOptions,
    whereFilters,
  };
};
