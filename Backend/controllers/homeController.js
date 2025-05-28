// controllers/homeController.js
import HomeContent from '../models/homeModel.js';

export const getHeroContent = async (req, res) => {
  try {
    const hero = await HomeContent.find({ isHero: true }).limit(1);
    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load hero section' });
  }
};

export const getHomeCards = async (req, res) => {
  try {
    const cards = await HomeContent.find({ isHero: false }).limit(14).sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load home cards' });
  }
};

export const getHomeDetailed = async (req, res) => {
  try {
    const { slug } = req.params;
    const card = await HomeContent.findOne({ slug });
    if (!card) return res.status(404).json({ error: 'Content not found' });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch detail' });
  }
};
