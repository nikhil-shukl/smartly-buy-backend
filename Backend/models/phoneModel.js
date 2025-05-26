import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
 name: String,
image: String,
description: String,
bestFor: String,
pros: [String],
cons: [String],
verdict: String,
affiliateLink: String,
slug: String // for SEO-friendly URLs
});

export default mongoose.model("Phone", phoneSchema);
