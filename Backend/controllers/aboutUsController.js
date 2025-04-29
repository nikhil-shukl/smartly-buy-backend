import AboutUs from '../models/AboutUs.js';

export const getAboutUs = async (req, res) => {
  try {
    const about = await AboutUs.findOne();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch About Us content.' });
  }
};
