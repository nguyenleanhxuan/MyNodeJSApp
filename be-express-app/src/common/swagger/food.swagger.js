export const foodSwagger = {
  "/foods/foodList": {
    get: {
      tags: ["Food"],
      summary: "Get list of food",
      description: "Returns a list of food items",
      responses: {
        200: {
          description: "A list of food items",
        },
      },
    },
  },
  "/foods/foodDetail/{id}": {
    get: {
      tags: ["Food"],
      summary: "Get food detail by id",
      description: "Returns the details of a specific food item",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "The ID of the food item to retrieve",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "The details of the requested food item",
        },
      },
    },
  },
};
