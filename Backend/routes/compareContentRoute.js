import express from 'express';
import { getCompareContent } from '../controllers/compareContentController.js';

const router = express.Router();

router.get('/:slug', getCompareContent);

export default router;
