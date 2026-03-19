import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

// CREATE MODEL: Code first defines the model, then uses it to create the table in the database
const Food = sequelize.define(
  "Food", // Model name
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "food",
    timestamps: false, // Tắt createdAt/updatedAt vì table không có columns này
  },
);

// SYNC MODEL: Code first defines the model, then uses it to create the table in the database
const synscFood = async () => {
  //await Food.sync({ force: true }); // force: true sẽ xóa bảng cũ và tạo lại, false sẽ giữ nguyên dữ liệu
  await Food.sync({ alter: true }); // alter: true sẽ tự động cập nhật bảng nếu có sự thay đổi trong model
  console.log("Food table has been created or updated.");
};

//synscFood();

// CREATE DATA
// 1. Using build and save
const createFoodBuildSave = async (
  food_name,
  image,
  price,
  description,
  type_id,
) => {
  const article = Food.build({
    food_name: food_name,
    image: image,
    price: price,
    description: description,
    type_id: type_id,
  });
  await article.save();
};

// createFoodBuildSave(
//   "Pizza Margherita",
//   "pizza.jpg",
//   12.99,
//   "Delicious pizza with tomato sauce and mozzarella",
//   1,
// );

// 2. Using create
const createFood = async () => {
  await Food.create({
    food_name: "Spaghetti Carbonara",
    image: "spaghetti.jpg",
    price: 10.99,
    description: "Classic Italian pasta dish with eggs, cheese, and bacon",
    type_id: 1,
  });
};

//createFood();

// Get all food items
const getAllFooditems = async () => {
  const foods = await Food.findAll();
  console.log(JSON.stringify(foods, null, 2));
};
//getAllFooditems();

// Get food item by ID
const getFoodById = async (id) => {
  const food = await Food.findByPk(id);
  if (!food) {
    console.log("Food not found");
    return;
  }
  console.log(JSON.stringify(food, null, 2));
};
//getFoodById(1);

// Delete food item by ID
const deleteFoodById = async (id) => {
  const food = await Food.findByPk(id);
  if (!food) {
    console.log("Food not found");
    return;
  }
  await food.destroy();
  console.log("Food deleted successfully");
};
//deleteFoodById(21);

export default Food;
