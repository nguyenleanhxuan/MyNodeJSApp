import { UnauthorizedError } from "../common/helpers/exception.helper.js";
import { tokenService } from "../services/token.service.js";

export const protectMiddleware = (req, res, next) => {
  const accessToken =
    req.cookies?.accessToken ||
    req.cookies?.AccessToken ||
    req.headers["x-access-token"] ||
    req.headers.authorization?.replace(/^Bearer\s+/i, "");

  if (!accessToken) {
    throw new UnauthorizedError("Unauthorized. Access token is missing.");
  }

  const decoded = tokenService.verifyAccessToken(accessToken);
  req.user = decoded;

  next();
};
