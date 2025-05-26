import Earbud from "../models/earbudModel.js";

export const getEarbuds = async (req, res) => {
  try {
    const earbuds = await Earbud.find();
    res.json({ success: true, earbuds });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
