import express from 'express';
import {getCoursesDetails } from '../controllers/getCourseDetailsController'

const router = express.Router();

router.get('/', getCoursesDetails);

export default router;