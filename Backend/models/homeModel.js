// models/homeModel.jsimport mongoose from "mongoose";
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  title: String, // Main title of the homepage content (like a guide)
  description: String, // Short SEO-friendly description
  image: String, // Hero image
  slug: { type: String, unique: true }, // For route like /home or future custom slugs
  content: String, // Full HTML content for homepage body (editable later)
  metaTitle: String,
  metaDescription: String,
  products: [ // Featured or trending products (Guide-style)
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
  featuredCategories: [ // Homepage category cards
    {
      name: String,
      image: String,
      link: String
    }
  ],
  latestBlogs: [ // Shown on homepage but content from Blog API
    {
      title: String,
      slug: String,
      image: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Home", homeSchema);
