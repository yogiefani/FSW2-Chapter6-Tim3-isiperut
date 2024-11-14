const router = require("express").Router();

const User = require("./user.route");
// const Car = require("./car.route");
const Auth = require("./auth.route");

router.use("/users", User);
// router.use("/cars", Car);
router.use("/auth", Auth);

module.exports = router;
