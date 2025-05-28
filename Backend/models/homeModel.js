// models/homeModel.js
import mongoose from 'mongoose';
import slugify from 'slugify';

const homeCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  metaTitle: String,
  metaDescription: String,
  isHero: { type: Boolean, default: false }, // ✅ Important for filtering
  category: {
    type: String,
    enum: ['Smartphones', 'Laptops', 'Earbuds'],
    required: true,
  },
  products: [
    {
      rank: Number,
      name: String,
      image: String,
      pros: [String],
      cons: [String],
      verdict: String,
      affiliateLink: { type: String, default: 'soon' },
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

homeCardSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('HomeContent', homeCardSchema);
