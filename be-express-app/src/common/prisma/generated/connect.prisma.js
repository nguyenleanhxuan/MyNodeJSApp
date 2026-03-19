// @ts-nocheck
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { DATABASE_URL } from "../../constants/app.constant.js";
let prisma = null;

const databaseUrl = DATABASE_URL ?? "";
if (databaseUrl) {
  const parsedUrl = new URL(databaseUrl);
  console.log("Parsed DATABASE_URL:", {
    host: parsedUrl.hostname,
    port: parsedUrl.port,
  });

  var adapter = new PrismaMariaDb({
    host: parsedUrl.hostname,
    port: Number(parsedUrl.port || 3306),
    user: decodeURIComponent(parsedUrl.username || ""),
    password: decodeURIComponent(parsedUrl.password || ""),
    database: parsedUrl.pathname.replace(/^\//, ""),
    connectionLimit: 5,
  });
}

try {
  const prismaPkg = await import("./prisma/index.js");
  const PrismaClient =
    prismaPkg.PrismaClient ?? prismaPkg.default?.PrismaClient;

  if (PrismaClient && adapter) {
    prisma = new PrismaClient({ adapter, omit: { users: true } });

    await prisma.$connect();
    console.log("[Prisma] Connection has been established successfully.");
  } else if (PrismaClient && !adapter) {
    console.warn("[Prisma] DATABASE_URL is missing or invalid.");
  } else {
    console.warn("[Prisma] PrismaClient export was not found.");
  }
} catch (error) {
  console.warn(
    "[Prisma] Unable to connect or initialize Prisma:",
    error?.message ?? error,
  );
}

export default prisma;
export { prisma };
