import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../../../controllers/front/product.controller";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
