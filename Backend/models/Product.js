// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category: { type: String, enum: ['phone', 'laptop', 'earbud'], required: true },
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  affiliateLink: String,
  slug: { type: String, unique: true },
  content: String,
  verdict: String,
  pros: [String],
  cons: [String],
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
