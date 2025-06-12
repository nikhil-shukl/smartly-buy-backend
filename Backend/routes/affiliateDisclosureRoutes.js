// routes/affiliateDisclosureRoutes.js
import express from "express";
import {
  getAffiliateDisclosureBySlug,
  createOrUpdateAffiliateDisclosure
} from "../controllers/affiliateDisclosureController.js";

const router = express.Router();

// ✅ GET by slug (e.g. /api/disclosure/affiliate-disclosure)
router.get("/:slug", getAffiliateDisclosureBySlug);

// ✅ POST to create/update (admin usage)
router.post("/", createOrUpdateAffiliateDisclosure);

export default router;

