import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  slug: { type: String, unique: true },
  content: String,
  metaTitle: String,
  metaDescription: String,
  products: [
    {
      rank: Number,
      name: String,
      image: String,
      pros: [String],
      cons: [String],
      verdict: String,
      affiliateLink: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Guide", guideSchema);
