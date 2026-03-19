import { Sequelize } from "sequelize";
import "dotenv/config";

const dbHost = process.env.DB_HOST || "127.0.0.1";
const dbPort = Number(process.env.DB_PORT || 3308);
const dbName = process.env.DB_NAME || "Restaurant";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "";

const sequelize = new Sequelize(
  process.env.SEQUELIZE_URL ||
    `mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
);

try {
  await sequelize.authenticate();
  console.log("[Sequelize] Connection has been established successfully.");
} catch (error) {
  console.error("[Sequelize] Unable to connect to the database:", error);
}

export default sequelize;
