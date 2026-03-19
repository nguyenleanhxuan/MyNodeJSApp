import express from "express";
import { foodController } from "../controllers/food.controller.js";
import {
  BadRequestError,
  NotFoundError,
} from "../common/helpers/exception.helper.js";
const foodRouter = express.Router();

// localhost:3000/api/foods/foodList
foodRouter.get(
  "/foodList",
  (req, res, next) => {
    console.log("1st middleware");
    const variable1 = "Biến của middleware 1";
    res.locals.variable1 = variable1; // Gán biến vào res.locals để có thể sử dụng ở các middleware tiếp theo và controller
    next();
  },
  (req, res, next) => {
    console.log("2nd middleware");
    console.log("Biến của middleware 1 ở middleware 2:", res.locals.variable1); // Sử dụng biến của middleware 1
    // Bỏ throw lỗi test để request đi tiếp vào controller.
    next();
  },
  (req, res, next) => {
    console.log("3rd middleware");
    next(); // Phải đủ 3 next() thì mới đến được controller, nếu thiếu 1 next() thì sẽ bị treo ở middleware đó và không đến được controller
  },
  // Special middleware để bắt lỗi, phải có 4 tham số thì mới được gọi khi có lỗi xảy ra ở các middleware trước đó
  // Khi bắt lỗi middleware 2 sẽ nhảy hẳn đến middleware bắt lỗi này, bỏ qua middleware 3 và controller
  // => Đem ra file app.js để dùng chung cho tất cả các router
  //   (err, req, res, next) => {
  //     console.log("Error middleware:", err);
  //     res.status(500).json({ error: "Internal server error" });
  //   },
  foodController.findAll,
);

foodRouter.post("/createFood", foodController.createFood);

foodRouter.put("/updateFood/:id", foodController.updateFood);

foodRouter.delete("/deleteFood/:id", foodController.deleteFood);

foodRouter.delete("/softDeleteFood/:id", foodController.softDeleteFood);

export default foodRouter;
