import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router.js";
import "./src/common/prisma/generated/connect.prisma.js";
import { appError } from "./src/common/helpers/error.helper.js";
import cookieParser from "cookie-parser";
import { logApiMiddleware } from "./src/middlewares/log-api.middleware.js";
import { initLoginGooglePassport } from "./src/common/passport/login-google.passport.js";
import swaggerUI from "swagger-ui-express";
import { swaggerDocument } from "./src/common/swagger/swagger.js";
import { initSocket } from "./src/common/socket/init.socket.js";

const app = express();
const httpServer = initSocket(app);

const port = 3000;
// Every app.use must be before RootRouter
app.use(cookieParser());
app.use(logApiMiddleware);

// Dùng cors
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

// Tự làm
// app.use((req, res, next) => {
//   console.log(req.method, req.url, req.headers);

//   const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
//   const requestOrigin = req.headers.origin;
//   if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
//     res.setHeader("Access-Control-Allow-Origin", requestOrigin);
//   }
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,PUT,HEAD,PATCH,POST,DELETE,OPTIONS",
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.setHeader("Vary", "Origin");

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204);
//   }

//   next();
// });

// All req and res body parse as JSON
app.use(express.json());

initLoginGooglePassport();
//swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Use rootRouter for all routes starting with /api
app.use("/api", rootRouter);

let foodList = [
  { id: 1, name: "Pizza", desc: "Delicious cheese pizza" },
  { id: 2, name: "Burger", desc: "Juicy beef burger" },
  { id: 3, name: "Sushi", desc: "Fresh salmon sushi" },
  { id: 4, name: "Pasta", desc: "Italian spaghetti pasta" },
  { id: 5, name: "Salad", desc: "Healthy green salad" },
  { id: 6, name: "Tacos", desc: "Spicy chicken tacos" },
];
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/foodlist", (req, res) => {
  res.send(foodList);
});

app.get("/fooddetail/:id", (req, res) => {
  const params = req.params;
  const index = foodList.findIndex((food) => food.id === parseInt(params.id));
  if (index !== -1) {
    return res.status(200).send(foodList[index]);
  } else {
    return res.status(404).send({ error: "Food not found" });
  }
});

app.post("/addfood", (req, res) => {
  const foodData = req.body;
  const food = {
    id: foodList.length + 1,
    name: foodData.name,
    desc: foodData.desc,
  };
  foodList.push(food);
  res.status(201).send("Add Food " + JSON.stringify(foodData));
});

app.put("/updatefood/:id", (req, res) => {
  const foodData = req.body;
  const { name, desc } = foodData;

  const index = foodList.findIndex(
    (food) => food.id === parseInt(req.params.id),
  );

  const oldFood = foodList[index];
  const updatedFood = {
    id: oldFood.id,
    name: name || oldFood.name,
    desc: desc || oldFood.desc,
  };
  if (index !== -1) {
    foodList[index] = updatedFood;
    return res.status(200).send(foodList[index]);
  } else {
    return res.status(404).send({ error: "Food not found" });
  }
});

app.delete("/deletefood/:id", (req, res) => {
  const index = foodList.findIndex(
    (food) => food.id === parseInt(req.params.id),
  );
  if (index !== -1) {
    foodList.splice(index, 1);
    return res.status(200).send({ message: "Food deleted successfully" });
  } else {
    return res.status(404).send({ error: "Food not found" });
  }
});

// Middleware bắt lỗi chung cho tất cả các router, phải có 4 tham số thì mới được gọi khi có lỗi xảy ra ở các middleware trước đó
app.use(appError);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
