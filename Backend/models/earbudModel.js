import mongoose from "mongoose";

const earbudSchema = new mongoose.Schema({
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

export default mongoose.model("Earbud", earbudSchema);
