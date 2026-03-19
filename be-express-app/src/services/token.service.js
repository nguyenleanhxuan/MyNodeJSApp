import jwt from "jsonwebtoken";
import { BadRequestError } from "../common/helpers/exception.helper.js";

import { ACCESS_TOKEN_SECRET } from "../common/constants/app.constant.js";
import { REFRESH_TOKEN_SECRET } from "../common/constants/app.constant.js";

export const tokenService = {
  createAccessToken(user) {
    // Implement token generation logic here (e.g., using JWT)
    // This is just a placeholder, replace with actual implementation
    if (!user) {
      throw new BadRequestError(
        "User information is required to create an access token.",
      );
    }
    const userId = user.user_id ?? user.id;
    if (!userId) {
      throw new BadRequestError(
        "User id is required to create an access token.",
      );
    }

    const accessToken = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: "10s",
    });
    return accessToken;
  },
  createRefreshToken(user) {
    if (!user) {
      throw new BadRequestError("No user to create token");
    }
    const userId = typeof user === "object" ? (user.user_id ?? user.id) : user;
    if (!userId) {
      throw new BadRequestError(
        "User id is required to create a refresh token.",
      );
    }

    const refreshToken = jwt.sign({ userId: userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return refreshToken;
  },

  verifyAccessToken(accessToken, option) {
    const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET, option);
    return decoded;
  },

  verifyRefreshToken(refreshToken, option) {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, option);
    return decoded;
  },
};
