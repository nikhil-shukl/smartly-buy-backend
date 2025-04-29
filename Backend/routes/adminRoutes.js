import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/adminController.js";

const router = express.Router();

// Public Routes
router.post("/login", loginAdmin);

// Only for first time to create admin
// router.post("/register", registerAdmin);

export default router;
