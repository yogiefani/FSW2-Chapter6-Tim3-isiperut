"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [
      {
        name: "Spaghetti Carbonara",
        desc: "Creamy Italian pasta with a rich sauce made from eggs, cheese, pancetta, and black pepper.",
        price: 12.99,
        stock: 50,
        category: "food",
        image: "https://ik.imagekit.io/ft0mydzbzq/spaghetti-carbonara_16-11-2024.jpeg?updatedAt=1731762391300", // Replace with a real URL if needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Margarita Pizza",
        desc: "Classic Neapolitan pizza topped with fresh tomatoes, mozzarella, and basil.",
        price: 9.99,
        stock: 30,
        category: "food",
        image: "https://ik.imagekit.io/ft0mydzbzq/Margarita%20Pizza-16-11-2024.jpg?updatedAt=1731762623110", // Replace with a real URL if needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chocolate Milkshake",
        desc: "Delicious and creamy milkshake made with rich chocolate and topped with whipped cream.",
        price: 4.99,
        stock: 100,
        category: "drink",
        image: "https://ik.imagekit.io/ft0mydzbzq/chocolate-milkshake-16-11-2024.jpg?updatedAt=1731762622329", // Replace with a real URL if needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caesar Salad",
        desc: "Fresh romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.",
        price: 7.99,
        stock: 40,
        category: "food",
        image: "https://ik.imagekit.io/ft0mydzbzq/chicken-caesar-salad-16-11-2024.jpeg?updatedAt=1731762622865", // Replace with a real URL if needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Orange Juice",
        desc: "Freshly squeezed orange juice, perfect for a healthy and refreshing drink.",
        price: 3.49,
        stock: 75,
        category: "drink",
        image: "https://ik.imagekit.io/ft0mydzbzq/orange-juice-16-11-2024.jpg?updatedAt=1731762622174", // Replace with a real URL if needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
