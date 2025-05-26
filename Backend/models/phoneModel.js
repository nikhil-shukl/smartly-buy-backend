import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  bestFor: String,
  affiliateLink: String,
});

export default mongoose.model("Phone", phoneSchema);
