import mongoose from "mongoose";

const termsConditionsSchema = new mongoose.Schema({
  content: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("TermsConditions", termsConditionsSchema);
