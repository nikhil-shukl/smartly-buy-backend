// controllers/affiliateDisclosureController.js
import AffiliateDisclosure from "../models/affiliateDisclosureModel.js";

export const getAffiliateDisclosure = async (req, res) => {
  try {
    const disclosure = await AffiliateDisclosure.findOne();
    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to load affiliate disclosure." });
  }
};

export const createOrUpdateAffiliateDisclosure = async (req, res) => {
  try {
    const { content } = req.body;
    let disclosure = await AffiliateDisclosure.findOne();

    if (disclosure) {
      disclosure.content = content;
      await disclosure.save();
    } else {
      disclosure = await AffiliateDisclosure.create({ content });
    }

    res.status(200).json(disclosure);
  } catch (error) {
    res.status(500).json({ message: "Failed to update disclosure." });
  }
};
