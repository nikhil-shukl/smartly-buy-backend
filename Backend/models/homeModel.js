// models/homeModel.js
import mongoose from 'mongoose';
import slugify from 'slugify';

const homeCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  verdict: {
    type: String,
    required: true,
  },
  isHero: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ['Smartphones', 'Laptops', 'Earbuds'],
    required: true,
  },
  affiliateLink: {
    type: String,
    default: 'soon',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

homeCardSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

export default mongoose.model('HomeContent', homeCardSchema);
