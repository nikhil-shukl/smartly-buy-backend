import express from "express";
import { getLaptops } from "../controllers/laptopController.js";

const router = express.Router();

router.get('/', getLaptops);

export default router;
