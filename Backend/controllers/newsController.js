import News from '../models/News.js';

// @desc    Get all news
// @route   GET /api/news
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Get single news by slug
// @route   GET /api/news/:slug
export const getNews = async (req, res) => {
  const { slug } = req.params;
  try {
    const news = await News.findOne({ slug });
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Create a new news article
// @route   POST /api/news
export const createNews = async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const newNews = new News({ title, content, image });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create news', error });
  }
};

// @desc    Update a news article
// @route   PUT /api/news/:id
export const updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;
  try {
    const updatedNews = await News.findByIdAndUpdate(id, { title, content, image }, { new: true });
    if (!updatedNews) return res.status(404).json({ message: 'News not found' });
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update news', error });
  }
};

// @desc    Delete a news article
// @route   DELETE /api/news/:id
export const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNews = await News.findByIdAndDelete(id);
    if (!deletedNews) return res.status(404).json({ message: 'News not found' });
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete news', error });
  }
};
