"use strict";
const { users } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const usersData = [
          {
            name: "Admin",
            email: "admin@example.com",
            password: "password",
            address: "Jakarta",
            phone: "08123456789",
            role: "admin",
            photoProfile: "https://ik.imagekit.io/9h1gnwzay/default-image.jpg?updatedAt=1728904313272",
          },
          {
            name: "User",
            email: "user@example.com",
            password: "password",
            address: "Jakarta",
            phone: "08234567891",
            role: "user",
            photoProfile: "https://ik.imagekit.io/9h1gnwzay/default-image.jpg?updatedAt=1728904313272",
          }
        ];
        for (const userData of usersData) {
          await users.create({
              ...userData,
              createdAt: new Date(),
              updatedAt: new Date()
          })
        }
      },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("users", null, {});
    },
}
