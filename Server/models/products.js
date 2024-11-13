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
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      price: DataTypes.STRING,
      stock: DataTypes.STRING,
      // category: DataTypes.ENUM("food", " drink"),
      category: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
