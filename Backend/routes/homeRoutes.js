import express from 'express';
import {
  getHeroContent,
  getHomeCards,
  getHomeCardDetail
} from '../controllers/homeController.js';

const router = express.Router();

router.get('/hero', getHeroContent);
router.get('/home', getHomeCards);
router.get('/:slug', getHomeCardDetail);

export default router;
