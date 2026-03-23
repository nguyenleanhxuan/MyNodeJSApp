import { response } from "express";
import { takeCoverage } from "v8";
import { foodSwagger } from "./food.swagger.js";
import { authSwagger } from "./auth.swagger.js";
import { userSwagger } from "./user.swagger.js";

export const swaggerDocument = {
  openapi: "3.0.4",
  info: {
    title: "Food API",
    version: "1.0.0",
    description: "A simple Food API",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server",
    },
  ],
  paths: { ...foodSwagger, ...authSwagger, ...userSwagger },
};
