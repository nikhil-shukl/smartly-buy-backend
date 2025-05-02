import mongoose from 'mongoose';

const heroicContentSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  buttonText: String,
  buttonLink: String,
  image: String,
}, { timestamps: true });

export default mongoose.model('HeroicContent', heroicContentSchema);
