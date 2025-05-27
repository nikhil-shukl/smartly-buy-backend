import express from "express";
import { getGuideBySlug } from "../controllers/guideController.js";

const router = express.Router();

router.get("/:slug", getGuideBySlug);

export default router;

