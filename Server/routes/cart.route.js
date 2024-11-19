const router = require("express").Router();

const { cartController } = require("../controllers");
const { protectedMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

router.get("/admin/all", adminMiddleware, cartController.getAllCart);
router.get("", protectedMiddleware, cartController.getCartByUser);
router.post("", cartController.createCart);
router.patch("/:id", cartController.updateCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
