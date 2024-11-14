const router = require("express").Router();

const { productController } = require("../controllers");
// const {
//   protectedMiddleware,
//   adminMiddleware,
//   superAdminMiddleware,
// } = require("../middlewares/auth.middleware");

router.get("", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("", productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
