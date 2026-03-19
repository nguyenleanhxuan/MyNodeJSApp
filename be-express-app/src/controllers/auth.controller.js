import { authService } from "../services/auth.service.js";

export const authController = {
  async register(req, res, next) {
    const result = await authService.register(req);
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Register user successfully",
      data: result,
    });
  },

  async login(req, res, next) {
    const result = await authService.login(req);
    if (result.accessToken) {
      res.cookie("accessToken", result.accessToken, { httpOnly: true });
    }
    if (result.refreshToken) {
      res.cookie("refreshToken", result.refreshToken);
    }
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "login user successfully",
      data: result,
    });
  },
  async getInfo(req, res, next) {
    const result = await authService.getInfo(req);
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Get user info successfully",
      data: result,
    });
  },

  async refreshToken(req, res, next) {
    const result = await authService.refreshToken(req);
    if (result.accessToken) {
      res.cookie("accessToken", result.accessToken, { httpOnly: true });
    }
    if (result.refreshToken) {
      res.cookie("refreshToken", result.refreshToken);
    }
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "Refresh token successfully",
      data: result,
    });
  },
  async googleCallback(req, res, next) {
    res.cookie("accessToken", req.user.accessToken);
    res.cookie("refreshToken", req.user.refreshToken);
    res.redirect("http://localhost:3001/login-callback");
  },
};
