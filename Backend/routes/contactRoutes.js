import express from 'express';
import {
  getAllMessages,
  getMessage,
  createMessage,
  deleteMessage,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getAllMessages);
router.get('/:id', getMessage);
router.post('/', createMessage);
router.delete('/:id', deleteMessage);

export default router;
