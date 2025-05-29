import Home from "../models/homeModel.js";

// Get all home entries (for admin or future multiple layouts)
export const getAllHomes = async (req, res) => {
  try {
    const homes = await Home.find();
    res.json({ success: true, homes });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get single home layout by slug (like /home or /homepage-v2)
export const getSingleHome = async (req, res) => {
  try {
    const home = await Home.findOne({ slug: req.params.slug });
    if (!home) {
      return res.status(404).json({ success: false, message: "Home layout not found" });
    }
    res.json({ success: true, home });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Create a new home layout (admin only)
export const createHome = async (req, res) => {
  try {
    const newHome = new Home(req.body);
    await newHome.save();
    res.status(201).json({ success: true, home: newHome });
  } catch (error) {
    res.status(400).json({ success: false, message: "Failed to create home layout" });
  }
};
