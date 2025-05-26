import express from "express";
import { getPhones } from "../controllers/phoneController.js";

const router = express.Router();

router.get('/', getPhones);

export default router;
