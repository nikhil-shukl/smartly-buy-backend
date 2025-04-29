import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: [String], // like trust points
  ctaLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('AboutUs', aboutUsSchema);
