import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  newsId: {
    type: String,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  tags: [String],
  relatedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  source: String
}, { timestamps: true });

export default mongoose.model('News', newsSchema);
