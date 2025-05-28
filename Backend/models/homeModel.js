// models/homeModel.js
import mongoose from 'mongoose';
import slugify from 'slugify';

const homeCardSchema = new mongoose.Schema({
   title: String,
  description: String,
  image: String,
  slug: { type: String, unique: true },
  content: String,
  metaTitle: String,
  metaDescription: String,
  products: [
    {
      rank: Number,
      name: String,
      image: String,
      pros: [String],
      cons: [String],
      verdict: String,
      affiliateLink: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

homeCardSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('HomeContent', homeCardSchema);
