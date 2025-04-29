import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  relatedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  author: {
    type: String,
    default: 'Admin'
  },
  tags: [String],
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
