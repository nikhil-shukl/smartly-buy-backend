import Product from '../models/Product.js';
import slugify from 'slugify';

// @desc    Get all products
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Get single product by slug or ID
// @route   GET /api/products/:identifier
export const getProduct = async (req, res) => {
  const { identifier } = req.params;
  try {
    const product = await Product.findOne({
      $or: [{ _id: identifier }, { slug: identifier }]
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Create a new product
// @route   POST /api/products
export const createProduct = async (req, res) => {
  const { name, category, brand, description, image, affiliateLink, specs, price, rating } = req.body;

  try {
    const slug = slugify(name, { lower: true });
    const newProduct = new Product({
      name,
      slug,
      category,
      brand,
      description,
      image,
      affiliateLink,
      specs,
      price,
      rating,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error });
  }
};
