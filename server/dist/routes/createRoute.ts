import express from 'express';
import { createUser } from '../controllers/createController'; // Ensure this path is correct

const router = express.Router();

// Define the POST route to create a new user
router.post('/create', createUser);

export default router;
