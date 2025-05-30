import express from "express";
import { getTermsConditions, createOrUpdateTermsConditions } from "../controllers/termsConditionsController.js";

const router = express.Router();

router.get("/", getTermsConditions);
router.post("/", createOrUpdateTermsConditions); // For admin updates

export default router;
