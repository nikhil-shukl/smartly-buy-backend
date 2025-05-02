import CompareContent from '../models/CompareContent.js';

export const getCompareContent = async (req, res) => {
  try {
    const { slug } = req.params;
    const content = await CompareContent.findOne({ slug })
      .populate('products')
      .populate('blogs');
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
