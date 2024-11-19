const router = require("express").Router();

const { userController } = require("../controllers");
const upload = require("../utils/upload");
// const {
//   protectedMiddleware,
//   adminMiddleware,
//   superAdminMiddleware,
// } = require("../middlewares/auth.middleware");

router.get("", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("", upload.single('photoProfile'), userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
