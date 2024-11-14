const router = require("express").Router();

const { authController } = require("../controllers");
const { protectedMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/current", protectedMiddleware, adminMiddleware, authController.currentLogin);

module.exports = router;