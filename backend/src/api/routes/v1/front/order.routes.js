const express = require("express");
const router = express.Router();
const { protect } = require("../../../middlewares/front/auth");
const {
  addOrderItems,
  getOrderById,
  payOrder,
  updateOrderToPaid,
} = require("../../../controllers/front/order.controller");
router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/pay").get(protect, payOrder);

module.exports = router;
