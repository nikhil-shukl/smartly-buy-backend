import HeroicContent from '../models/HeroicContent.js';

export const getHeroicContent = async (req, res) => {
  try {
    console.log('Fetching heroic content...');
    const content = await HeroicContent.findOne();
    console.log('Database Content:', content); // Logs the retrieved data

    if (!content) {
      console.log("No heroic content found in DB!");
      return res.status(404).json({ message: "No heroic content found" });
    }

    res.json(content);
  } catch (err) {
    console.error('Error fetching heroic content:', err);
    res.status(500).json({ message: "Error fetching heroic content" });
  }
};