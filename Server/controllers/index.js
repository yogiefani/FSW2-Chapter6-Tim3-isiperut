const systemController = require("./system.controller");
const userController = require("./user.controller");
const authController = require("./auth.controller");
const productController = require("./product.controller");
const cartController = require("./cart.controller");

module.exports = {
    systemController,
    authController,
    userController,
    productController,
    cartController,
};
