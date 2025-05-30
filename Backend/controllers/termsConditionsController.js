import TermsConditions from "../models/termsConditionsModel.js";

export const getTermsConditions = async (req, res) => {
  try {
    const terms = await TermsConditions.findOne();
    res.status(200).json(terms);
  } catch (error) {
    res.status(500).json({ message: "Failed to load terms and conditions." });
  }
};

export const createOrUpdateTermsConditions = async (req, res) => {
  try {
    const { content } = req.body;
    let terms = await TermsConditions.findOne();

    if (terms) {
      terms.content = content;
      await terms.save();
    } else {
      terms = await TermsConditions.create({ content });
    }

    res.status(200).json(terms);
  } catch (error) {
    res.status(500).json({ message: "Failed to update terms and conditions." });
  }
};
