import express from 'express';
import { getHeroicContent } from '../controllers/heroicController.js';

const router = express.Router();

router.get('/', getHeroicContent);

export default router;
