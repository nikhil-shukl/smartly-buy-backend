import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  category: {
    type: String,
    enum: ['phone', 'computer-laptop', 'earbuds'],
    required: true
  },
  brand: String,
  description: String,
  image: {
    type: String,
    required: true
  },
  affiliateLink: {
    type: String,
    required: true
  },
  specs: {
    type: Map,
    of: String
  },
  price: Number,
  rating: {
    type: Number,
    default: 0
  },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
