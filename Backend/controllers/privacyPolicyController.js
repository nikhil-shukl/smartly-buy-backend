import PrivacyPolicy from "../models/privacyPolicyModel.js";

export const getPrivacyPolicy = async (req, res) => {
  try {
    const policy = await PrivacyPolicy.findOne();
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ message: "Failed to load privacy policy." });
  }
};

export const createOrUpdatePrivacyPolicy = async (req, res) => {
  try {
    const { content } = req.body;
    let policy = await PrivacyPolicy.findOne();

    if (policy) {
      policy.content = content;
      await policy.save();
    } else {
      policy = await PrivacyPolicy.create({ content });
    }

    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ message: "Failed to update privacy policy." });
  }
};
