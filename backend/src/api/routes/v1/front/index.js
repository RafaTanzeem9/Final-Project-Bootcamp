const express = require("express");
const userRoutes = require("./user.route");
const productRoutes = require("./product.route");
const orderRoutes = require("./order.routes");

const router = express.Router();
// const { cpUpload } = require("../../../utils/upload");
/**
 * GET v1/status
 */

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);

module.exports = router;
