import mongoose from "mongoose";

const affiliateDisclosureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Affiliate Disclosure | TechTrendyDeals"
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: "affiliate-disclosure"
  },
  meta_title: {
    type: String,
    required: true,
    default: "Affiliate Disclosure - TechTrendyDeals | Trusted Tech Reviews & Deals"
  },
  meta_description: {
    type: String,
    required: true,
    default: "Learn how TechTrendyDeals earns commissions through affiliate links on smartphones, laptops, and earbuds — supporting honest and expert tech reviews at no extra cost."
  },
  platform: {
    type: String,
    default: "Amazon"
  },
  visible: {
    type: Boolean,
    default: true
  },
  content: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    default: "Admin"
  }
}, { timestamps: true });

export default mongoose.model("AffiliateDisclosure", affiliateDisclosureSchema);
