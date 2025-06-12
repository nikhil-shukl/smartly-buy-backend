import express from "express";
import {
  getAffiliateDisclosure,
  createOrUpdateAffiliateDisclosure
} from "../controllers/affiliateDisclosureController.js";

const router = express.Router();

// GET by slug (e.g., /api/disclosure/affiliate-disclosure)
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const disclosure = await getAffiliateDisclosureBySlug(slug);
    if (!disclosure) {
      return res.status(404).json({ message: "Disclosure not found." });
    }
    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Error fetching disclosure.", error: error.message });
  }
});

// POST create or update (CMS or admin use)
router.post("/", createOrUpdateAffiliateDisclosure);

export default router;

// 🔄 Utility controller inside route file for cleaner integration:
import AffiliateDisclosure from "../models/affiliateDisclosureModel.js";

const getAffiliateDisclosureBySlug = async (slug) => {
  return await AffiliateDisclosure.findOne({ slug, visible: true });
};
