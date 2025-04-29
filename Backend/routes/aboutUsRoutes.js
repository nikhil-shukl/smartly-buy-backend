import express from 'express';
import { getAboutUs } from '../controllers/aboutUsController.js';

const router = express.Router();

// GET About Us content
router.get('/about', getAboutUs);

export default router;
