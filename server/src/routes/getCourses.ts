import express from 'express';
import {getCourses } from '../controllers/getCoursesController'

const router = express.Router();

router.get('/', getCourses);

export default router;