import {
  BadRequestError,
  UnauthorizedError,
} from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/generated/connect.prisma.js";
import bcrypts from "bcrypt";
import { tokenService } from "./token.service.js";

function extractUserId(user) {
  return user?.userId ?? user?.user_id;
}

export const authService = {
  async register(req) {
    const { email, password, full_name } = req.body;

    // Check if the email is already registered (this is just a placeholder, implement actual logic)
    const existingUser = await prisma.users.findFirst({ where: { email } });
    if (existingUser) {
      throw new BadRequestError(
        "Email is already registered. Please log in instead.",
      );
    }

    const passwordHash = await bcrypts.hashSync(password, 10);

    const newUser = await prisma.users.create({
      data: {
        email,
        password: passwordHash,
        full_name,
      },
    });
    return newUser;
  },

  async login(req) {
    const { email, password, token } = req.body;
    const userExist = await prisma.users.findFirst({ where: { email } });
    if (!userExist) {
      throw new BadRequestError("Invalid email or password.");
    }

    const isPasswordValid = await bcrypts.compareSync(
      password,
      userExist.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestError("Invalid password.");
    }

    const isTotp = Boolean(userExist.totpSecret);

    // If user enabled TOTP and has not submitted authenticator code yet,
    // return a staged response for FE to switch to the GA step.
    if (isTotp && !token) {
      return {
        accessToken: null,
        refreshToken: null,
        isTotp: true,
      };
    }

    // Verify TOTP token when authenticator flow is implemented.
    const accessToken = tokenService.createAccessToken(userExist);
    const refreshToken = tokenService.createRefreshToken(userExist);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },
  async getInfo(req) {
    const userId = extractUserId(req.user);

    if (!userId) {
      throw new UnauthorizedError("Unauthorized. User information is missing.");
    }

    const userData = await prisma.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        avatar: true,
        age: true,
        googleId: true,
        totpSecret: true,
      },
    });

    if (!userData) {
      throw new UnauthorizedError("Unauthorized. User does not exist.");
    }

    return {
      user_id: userData.user_id,
      full_name: userData.full_name,
      email: userData.email,
      avatar: userData.avatar,
      age: userData.age,
      googleId: userData.googleId,
      isTotpEnabled: Boolean(userData.totpSecret),
    };
  },

  // Why do we need refresh token? Because access token has a short expiration time for security reasons. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again. This improves user experience while maintaining security.

  // FE gọi khi access token hết hạn.
  async refreshToken(req) {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken) throw new UnauthorizedError("Access token is missing.");

    if (!refreshToken) throw new UnauthorizedError("Refresh token is missing.");

    // Access token hết hạn thì mới được phép refresh, nếu access token còn hạn mà vẫn gọi refresh thì sẽ bị lỗi => ignoreExpiration để bỏ qua lỗi access token hết hạn.
    const decodedAccessToken = tokenService.verifyAccessToken(accessToken, {
      ignoreExpiration: true,
    });
    const decodedRefreshToken = tokenService.verifyRefreshToken(refreshToken);
    const accessPayload = /** @type {any} */ (decodedAccessToken);
    const refreshPayload = /** @type {any} */ (decodedRefreshToken);

    if (accessPayload.userId !== refreshPayload.userId) {
      throw new UnauthorizedError(
        "Invalid tokens. User information does not match.",
      );
    }

    const userExist = await prisma.users.findUnique({
      where: { user_id: refreshPayload.userId },
    });
    if (!userExist) {
      throw new UnauthorizedError("Unauthorized. User does not exist.");
    }

    const accessTokenNew = tokenService.createAccessToken(userExist);
    const refreshTokenNew = tokenService.createRefreshToken(userExist);

    // Case 1: Nếu trả về cả access token mới và refresh token mới thì FE sẽ phải cập nhật cả 2 token trong cookie, đồng thời xóa cookie refresh token cũ đi. Cách này an toàn hơn vì mỗi lần refresh token sẽ được thay đổi, nếu refresh token bị lộ thì cũng chỉ có thể sử dụng được 1 lần duy nhất.
    // Nếu trong một ngày user sử dụng liên tục thì tự động gia hạn, tuy nhiên nếu không sử dụng thì sau 7 ngày (thời hạn của refresh token) thì phải đăng nhập lại.

    // Case 2: Nếu chỉ trả về access token mới mà giữ nguyên refresh token cũ thì FE chỉ cần cập nhật access token trong cookie, còn refresh token vẫn giữ nguyên. Cách này tiện lợi hơn vì không phải cập nhật refresh token mỗi lần refresh, nhưng nếu refresh token bị lộ thì có thể bị sử dụng nhiều lần cho đến khi hết hạn.
    return {
      accessToken: accessTokenNew,
      refreshToken: refreshTokenNew,
    };
  },
};
