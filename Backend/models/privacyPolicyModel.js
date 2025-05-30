import mongoose from "mongoose";

const privacyPolicySchema = new mongoose.Schema({
  content: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("PrivacyPolicy", privacyPolicySchema);
