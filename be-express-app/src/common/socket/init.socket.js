// Cho tính năng chat

import { createServer } from "http";
import { Server } from "socket.io";
import { tokenService } from "../../services/token.service.js";
import { prisma } from "../prisma/generated/connect.prisma.js";

export const initSocket = (app) => {
  const httpServer = createServer(app);
  // io là 1 instance của socket.io, nó sẽ lắng nghe các kết nối đến httpServer
  const io = new Server(httpServer, {});

  // socket là 1 kết nối đến server, mỗi khi có 1 client kết nối đến server thì sẽ tạo ra 1 socket mới, và socket.id là id của kết nối đó
  io.on("connection", (socket) => {
    console.log("socket-id", socket.id);
    socket.on("CREATE_ROOM", async (data, cb) => {
      try {
        const { targetUserId = [], accessToken } = data;
        const targetUserUnique = Array.from(new Set(targetUserId));
        const decodedToken = tokenService.verifyAccessToken(accessToken);
        const userId =
          typeof decodedToken === "object" &&
          decodedToken !== null &&
          "userId" in decodedToken
            ? decodedToken.userId
            : null;

        const userExists = await prisma.users.findUnique({
          where: {
            user_id: Number(userId),
          },
        });

        if (!userExists) {
          return cb?.({ status: "error", message: "User not found", data: null });
        }

        if (targetUserUnique.length === 2) {
          // Chat 1-1
        } else {
          // Chat nhóm
        }

        return cb?.({ status: "success", message: "Create room event received", data: null });
      } catch (error) {
        return cb?.({ status: "error", message: error?.message || "Create room failed", data: null });
      }
    });
  });

  return httpServer;
};
