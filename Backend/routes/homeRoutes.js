import express from "express";
import { getAllHomes, getSingleHome, createHome } from "../controllers/homeController.js";

const router = express.Router();

// GET all home layouts (admin or dashboard)
router.get("/", getAllHomes);

// GET specific home layout by slug
router.get("/:slug", getSingleHome);

// POST a new home layout (admin use only)
router.post("/", createHome);

export default router;
