import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  bestFor: String,
  pros: [String],
  cons: [String],
  verdict: String,
  affiliateLink: String,
  slug: String
});

export default mongoose.model("Laptop", laptopSchema);
