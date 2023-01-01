const express = require("express");
const router = express.Router();
const {
  getProductById,
  getProducts,
  createProduct,
} = require("../../../controllers/admin/product.controller");

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/").get(createProduct);

module.exports = router;
