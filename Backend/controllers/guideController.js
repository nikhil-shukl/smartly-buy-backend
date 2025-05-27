import Guide from "../models/Guide.js";
import slugify from "slugify";

export const getGuideBySlug = async (req, res) => {
  try {
    const guide = await Guide.findOne({ slug: req.params.slug });
    if (!guide) {
      return res.status(404).json({ success: false, message: "Guide not found" });
    }
    res.json({ success: true, guide });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getSingleGuide = async (req, res) => {
  try {
    const guide = await Guide.findOne({ slug: req.params.slug });
    if (!guide) return res.status(404).json({ success: false, message: "Guide not found" });
    res.json({ success: true, guide });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createGuide = async (req, res) => {
  try {
    const slug = slugify(req.body.title, { lower: true });
    const newGuide = new Guide({ ...req.body, slug });
    await newGuide.save();
    res.status(201).json({ success: true, guide: newGuide });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
