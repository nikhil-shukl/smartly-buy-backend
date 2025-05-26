import express from "express";
import { getEarbuds } from "../controllers/earbudController.js";

const router = express.Router();

router.get("/", getEarbuds);

export default router;
