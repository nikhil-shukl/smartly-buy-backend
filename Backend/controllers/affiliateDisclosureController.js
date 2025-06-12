import AffiliateDisclosure from "../models/affiliateDisclosureModel.js";

// Get disclosure by slug
export const getAffiliateDisclosure = async (req, res) => {
  try {
    const disclosure = await AffiliateDisclosure.findOne({ slug: "affiliate-disclosure", visible: true });

    if (!disclosure) {
      return res.status(404).json({ message: "Affiliate disclosure not found." });
    }

    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to load affiliate disclosure.", error: error.message });
  }
};

// Create or update disclosure
export const createOrUpdateAffiliateDisclosure = async (req, res) => {
  try {
    const {
      title,
      slug,
      meta_title,
      meta_description,
      content,
      platform,
      visible,
      updatedBy
    } = req.body;

    let disclosure = await AffiliateDisclosure.findOne({ slug });

    if (disclosure) {
      disclosure.title = title;
      disclosure.meta_title = meta_title;
      disclosure.meta_description = meta_description;
      disclosure.content = content;
      disclosure.platform = platform || disclosure.platform;
      disclosure.visible = visible !== undefined ? visible : disclosure.visible;
      disclosure.updatedBy = updatedBy || disclosure.updatedBy;
      await disclosure.save();
    } else {
      disclosure = await AffiliateDisclosure.create({
        title,
        slug,
        meta_title,
        meta_description,
        content,
        platform,
        visible,
        updatedBy
      });
    }

    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to create/update affiliate disclosure.", error: error.message });
  }
};
