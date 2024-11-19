const router = require("express").Router();

const { productController } = require("../controllers");
const upload = require("../utils/upload");
// const {
//   protectedMiddleware,
//   adminMiddleware,
//   superAdminMiddleware,
// } = require("../middlewares/auth.middleware");

router.get("/all", productController.getAllProducts);
router.get("", productController.getAllProductsNoDeleted);
router.get("/:id", productController.getProductById);
router.post("", upload.single("image"), productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
