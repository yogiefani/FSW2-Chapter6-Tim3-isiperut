"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "password123",
        address: faker.location.city(),
        phone: faker.phone.number(),
        role: faker.helpers.arrayElement(["admin", "user"]),
        photoProfile:
          "https://ik.imagekit.io/9h1gnwzay/default-image.jpg?updatedAt=1728904313272",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
