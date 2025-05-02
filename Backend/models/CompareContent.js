import mongoose from 'mongoose';

const compareContentSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  description: String,
  comparisonPoints: [
    {
      feature: String,
      product1Value: String,
      product2Value: String,
    }
  ],
  prosAndCons: {
    product1: {
      pros: [String],
      cons: [String]
    },
    product2: {
      pros: [String],
      cons: [String]
    }
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
}, { timestamps: true });

export default mongoose.model('CompareContent', compareContentSchema);
