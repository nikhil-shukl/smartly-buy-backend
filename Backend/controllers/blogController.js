import Blog from '../models/Blog.js';
import slugify from 'slugify';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const getBlog = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await Blog.findOne({ slug });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const createBlog = async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const slug = slugify(title, { lower: true });
    const newBlog = new Blog({ title, content, image, slug });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog', error });
  }
};

// 👇 Add these
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update blog', error });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete blog', error });
  }
};
