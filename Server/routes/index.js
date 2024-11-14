const router = require("express").Router();

const User = require("./user.route");
const Auth = require("./auth.route");
const Product = require("./product.route");

router.use("/users", User);
router.use("/auth", Auth);


router.use("/users", User);
router.use("/products", Product)

module.exports = router;
