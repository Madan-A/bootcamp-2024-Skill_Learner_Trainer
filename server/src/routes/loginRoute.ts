import express from "express";
import { loginController } from "../controllers/loginControllers";

const router = express.Router();

// Define the login route to use the loginController
router.post("/", loginController);

export default router;
