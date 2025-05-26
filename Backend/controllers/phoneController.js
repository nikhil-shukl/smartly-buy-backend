import Phone from "../models/phoneModel.js";

export const getPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json({ success: true, phones });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
