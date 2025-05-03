// routes/affiliateDisclosureRoutes.js
import express from "express";
import { getAffiliateDisclosure, createOrUpdateAffiliateDisclosure } from "../controllers/affiliateDisclosureController.js";

const router = express.Router();

router.get("/", getAffiliateDisclosure);
router.post("/", createOrUpdateAffiliateDisclosure); // For manual update via Postman

export default router;
