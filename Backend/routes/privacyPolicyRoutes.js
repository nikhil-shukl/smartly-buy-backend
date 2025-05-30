import express from "express";
import { getPrivacyPolicy, createOrUpdatePrivacyPolicy } from "../controllers/privacyPolicyController.js";

const router = express.Router();

router.get("/", getPrivacyPolicy);
router.post("/", createOrUpdatePrivacyPolicy); // For admin to update via Postman

export default router;
