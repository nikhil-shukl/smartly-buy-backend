// models/affiliateDisclosureModel.js
import mongoose from "mongoose";

const affiliateDisclosureSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model("AffiliateDisclosure", affiliateDisclosureSchema);
