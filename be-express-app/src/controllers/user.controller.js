import { responseSuccess } from "../common/helpers/response.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {
  async avatarLocal(req, res, next) {
    const result = await userService.avatarLocal(req, req);
    responseSuccess(res, result, "avatarLocal user successfully");
  },

  async avatarCloud(req, res, next) {
    const result = await userService.avatarCloud(req, req);
    responseSuccess(res, result, "avatarCloud users successfully");
  },

  async findAll(req, res, next) {
    const result = await userService.findAll(req);
    responseSuccess(res, result, "findAll users successfully");
  },
  async findOne(req, res, next) {
    const result = await userService.findOne(req);
    responseSuccess(res, result, "findOne user successfully");
  },
};
