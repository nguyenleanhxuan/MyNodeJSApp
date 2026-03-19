import jwt from "jsonwebtoken";
import { statusCodes } from "./statusCodes.helper.js";

/** @param {any} err */
export const appError = (err, req, res, next) => {
  console.log("Me: Error middleware:", err);

  let statusCode = statusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal server error";

  if (err instanceof jwt.JsonWebTokenError) {
    statusCode = statusCodes.FORBIDDEN;
  }

  // Only catch token expiration errors
  if (err instanceof jwt.TokenExpiredError) {
    statusCode = statusCodes.UNAUTHORIZED;
  }

  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
