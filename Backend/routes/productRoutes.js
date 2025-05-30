// routes/productRoutes.js
import express from "express";
import { getHomeProducts, getProductBySlug } from "../controllers/productController.js";

const router = express.Router();

// Routes
router.get("/home-products", getHomeProducts);
router.get("/product/:slug", getProductBySlug);

export default router;
