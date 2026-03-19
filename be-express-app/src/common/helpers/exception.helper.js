import { statusCodes } from "../helpers/statusCodes.helper.js";
export class BadRequestError extends Error {
  code = statusCodes.BAD_REQUEST;
  name = "BadRequestError";
  constructor(message = "Bad Request") {
    super(message); // Gọi constructor của lớp cha (Error) để khởi tạo message
  }
}

// 401 Unauthorized: Lỗi xác thực, thường xảy ra khi người dùng không cung cấp thông tin đăng nhập hợp lệ hoặc token đã hết hạn. Người dùng cần đăng nhập lại để lấy token mới hoặc cung cấp thông tin xác thực hợp lệ để truy cập tài nguyên được bảo vệ.
export class UnauthorizedError extends Error {
  code = statusCodes.UNAUTHORIZED;
  name = "UnauthorizedError";
  constructor(message = "Unauthorized") {
    super(message);
  }
}

// 403 Forbidden: Lỗi phân quyền, xảy ra khi người dùng đã xác thực thành công nhưng không có quyền truy cập vào tài nguyên hoặc thực hiện hành động cụ thể. Người dùng cần có quyền phù hợp để truy cập tài nguyên hoặc thực hiện hành động đó.
export class ForbiddenError extends Error {
  code = statusCodes.FORBIDDEN;
  name = "ForbiddenError";
  constructor(message = "Forbidden") {
    super(message);
  }
}

// 404 Not Found: Lỗi không tìm thấy, xảy ra khi người dùng yêu cầu một tài nguyên hoặc endpoint không tồn tại trên server. Người dùng cần kiểm tra lại URL hoặc endpoint mà họ đang cố gắng truy cập để đảm bảo rằng nó đúng và tồn tại trên server.
export class NotFoundError extends Error {
  code = statusCodes.NOT_FOUND;
  name = "NotFoundError";
  constructor(message = "Not Found") {
    super(message);
  }
}
//new BadRequestError("Lỗi rồi nhé");
