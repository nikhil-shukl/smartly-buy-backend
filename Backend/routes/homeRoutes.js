// routes/homeRoutes.js
import express from 'express';
import {
  getHeroContent,
  getHomeCards,
  getHomeCardDetail
} from '../controllers/homeController.js';

const router = express.Router();

router.get('/', getHeroContent);
router.get('/', getHomeCards);
router.get('/:slug', getHomeCardDetail);

export default router;
