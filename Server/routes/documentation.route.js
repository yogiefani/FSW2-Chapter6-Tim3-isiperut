const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

router.use("/", swaggerUI.serve);
router.use("/", swaggerUI.setup(swaggerDocument));

module.exports = router;
