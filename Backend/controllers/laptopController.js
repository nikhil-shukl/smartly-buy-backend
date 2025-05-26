import Laptop from "../models/laptopModel.js";

export const getLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.json({ success: true, laptops });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
