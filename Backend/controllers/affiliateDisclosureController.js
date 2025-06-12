// controllers/affiliateDisclosureController.js
import AffiliateDisclosure from "../models/affiliateDisclosureModel.js";

// ✅ GET by slug (for route like /api/disclosure/affiliate-disclosure)
export const getAffiliateDisclosureBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const disclosure = await AffiliateDisclosure.findOne({ slug, visible: true });
    if (!disclosure) {
      return res.status(404).json({ message: "Affiliate Disclosure not found" });
    }
    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to load affiliate disclosure by slug", error: error.message });
  }
};

// ✅ POST or PUT to create/update disclosure
export const createOrUpdateAffiliateDisclosure = async (req, res) => {
  try {
    const { title, slug, meta_title, meta_description, platform, visible, content, updatedBy } = req.body;

    let disclosure = await AffiliateDisclosure.findOne({ slug });
    if (disclosure) {
      disclosure.title = title;
      disclosure.meta_title = meta_title;
      disclosure.meta_description = meta_description;
      disclosure.platform = platform;
      disclosure.visible = visible;
      disclosure.content = content;
      disclosure.updatedBy = updatedBy;
      await disclosure.save();
    } else {
      disclosure = await AffiliateDisclosure.create({
        title,
        slug,
        meta_title,
        meta_description,
        platform,
        visible,
        content,
        updatedBy
      });
    }

    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to create or update disclosure", error: error.message });
  }
};
