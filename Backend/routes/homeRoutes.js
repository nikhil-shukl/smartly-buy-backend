import express from 'express';
import {
  getHeroContent,
  getHomeCards,
  getHomeDetailed
} from '../controllers/homeController.js';

const router = express.Router();

router.get('/hero', getHeroContent);
router.get('/home', getHomeCards);
router.get('/home/:slug', getHomeDetailed);
router.get('/hero/:slug', getHomeDetailed);


export default router;
