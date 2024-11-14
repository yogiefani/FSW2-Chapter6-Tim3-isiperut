"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [];
    const categories = ["food", "drink"];
    for (let i = 0; i < 20; i++) {
      products.push({
        name: faker.food.dish(),
        desc: faker.food.description(),
        price: faker.commerce.price(5, 100), // Random price between 5 and 100
        stock: faker.number.int({ min: 10, max: 100 }), // Random stock between 10 and 100
        category: faker.helpers.arrayElement(categories), // Randomly pick between food or drink
        image: " this is url faker.image.food()", // Random image URL for food (or you can set it as required)
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
