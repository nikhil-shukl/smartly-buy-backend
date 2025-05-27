import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  slug: { type: String, unique: true },
  content: String, // full guide HTML
  metaTitle: String,
  metaDescription: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Guide", guideSchema);
