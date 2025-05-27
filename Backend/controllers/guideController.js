import Guide from "../models/guideModel.js";

// Get all guides
export const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json({ success: true, guides });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get single guide by slug
export const getSingleGuide = async (req, res) => {
  try {
    const guide = await Guide.findOne({ slug: req.params.slug });
    if (!guide) {
      return res.status(404).json({ success: false, message: "Guide not found" });
    }
    res.json({ success: true, guide });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Create guide (for admin use)
export const createGuide = async (req, res) => {
  try {
    const newGuide = new Guide(req.body);
    await newGuide.save();
    res.status(201).json({ success: true, guide: newGuide });
  } catch (error) {
    res.status(400).json({ success: false, message: "Failed to create guide" });
  }
};

