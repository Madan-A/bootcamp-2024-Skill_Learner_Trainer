"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const purchasedCoursesController_1 = require("../controllers/purchasedCoursesController");
const router = express_1.default.Router();

// Route to purchase a course
router.post('/purchase', purchasedCoursesController_1.purchaseCourse);

// Route to get all purchased courses for a specific user
router.get('/:userId', purchasedCoursesController_1.getPurchasedCourses);

exports.default = router;
