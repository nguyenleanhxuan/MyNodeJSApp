export const userSwagger = {
  "/users/avatar-local": {
    post: {
      tags: ["User"],
      summary: "Upload user avatar",
      description: "Allows users to upload their avatar image",
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                orderId: {
                  type: "integer",
                  example: 123,
                },
                userId: {
                  type: "integer",
                  example: 456,
                },
                avatar: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "A list of users",
        },
      },
    },
  },
};
