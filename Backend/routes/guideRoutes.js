import express from "express";
import { getAllGuides, getSingleGuide, createGuide } from "../controllers/guideController.js";

const router = express.Router();

router.get("/", getAllGuides);
router.get("/:slug", getSingleGuide);
router.post("/", createGuide);

export default router;
