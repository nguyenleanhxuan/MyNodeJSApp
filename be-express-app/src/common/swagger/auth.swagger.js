export const authSwagger = {
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Register user",
      description: "Registers a new user with email, password and full name",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password", "full_name"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "user@example.com",
                },
                password: {
                  type: "string",
                  example: "password123",
                },
                full_name: {
                  type: "string",
                  example: "Nguyen Van A",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Register user successfully",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      description:
        "Authenticates a user and returns access/refresh tokens. If TOTP is enabled but no authenticator token is provided, API returns staged response with isTotp=true.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "user@example.com",
                },
                password: {
                  type: "string",
                  example: "password123",
                },
                token: {
                  type: "string",
                  description: "Optional TOTP code",
                  example: "123456",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Login user successfully",
        },
      },
    },
  },
  "/auth/get-info": {
    get: {
      tags: ["Auth"],
      summary: "Get user info",
      description: "Returns the information of the authenticated user",
      security: [{ bearerAuth: [] }, { accessTokenCookie: [] }],
      responses: {
        200: {
          description: "The information of the authenticated user",
        },
      },
    },
  },
};
