import express from 'express';
import { getNewData } from '../controllers/newControllers';
import { getSampleData } from '../controllers/sampleController';




const router = express.Router();

router.get('/login', getSampleData);

export default router;
