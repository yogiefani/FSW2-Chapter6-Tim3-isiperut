"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.cart, {
        foreignKey: "productId",
      });
    }
  }
  products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 50], // Minimum 3 and maximum 50 characters
        },
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true, // Ensures the value is a decimal
          min: 0, // Minimum value for price
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Ensures the value is an integer
          min: 0, // Minimum stock should be 0
        },
      },
      category: {
        type: DataTypes.ENUM("food", "drink"),
        allowNull: false,
        validate: {
          isIn: [["food", "drink"]], // Restricts values to "food" or "drink"
        },
      },
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "products",
      paranoid: true, // Enables soft delete by adding deletedAt timestamp
    }
  );
  return products;
};
