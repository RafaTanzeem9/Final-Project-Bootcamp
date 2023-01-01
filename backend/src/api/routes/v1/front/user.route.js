const express = require("express");
const router = express.Router();
const { protect, admin } = require("../../../middlewares/front/auth");
const {
  authUser,
  getUserProfile,
  registerUser,
  refreshToken,
  userLogout,
  getUser,
} = require("../../../controllers/front/user.controller");
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/refreshToken").get(refreshToken);
router.route("/logout").get(protect, userLogout);
router.route("/").post(registerUser);
router.route("/").get(protect, admin, getUser);

module.exports = router;
