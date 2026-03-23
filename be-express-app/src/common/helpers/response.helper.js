import { STATUS_CODES } from "http";

export const responseSuccess = (
  response,
  data,
  message,
  statusCode = 200,
  link,
) => {
  return response.status(statusCode).json({
    status: "success",
    statusCode: statusCode,
    message: message || "Request successful",
    data: data,
    doc: link,
  });
};

export const responseError = (response, error, statusCode = 500) => {
  return response.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: error.message || "An error occurred",
    data: null,
    doc: "Swagger documentation URL or reference",
  });
};
