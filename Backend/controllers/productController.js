// controllers/productController.js
import Product from "../models/Product.js";

export const getHomeProducts = async (req, res) => {
  try {
    const phones = await Product.find({ category: 'phone' }).limit(3);
    const laptops = await Product.find({ category: 'laptop' }).limit(3);
    const earbuds = await Product.find({ category: 'earbud' }).limit(3);
    res.json({ phones, laptops, earbuds });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
