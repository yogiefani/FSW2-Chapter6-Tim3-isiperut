const router = require("express").Router();

const User = require("./user.route");
const Product = require("./product.route");
// const Auth = require("./auth.route");

router.use("/users", User);
router.use("/products", Product);
// router.use("", Auth);

module.exports = router;
