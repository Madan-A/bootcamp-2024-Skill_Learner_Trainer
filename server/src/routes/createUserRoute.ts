import express from 'express';
import { createUser } from '../controllers/createUserController';

const router = express.Router();

router.post('/', createUser);

export default router;