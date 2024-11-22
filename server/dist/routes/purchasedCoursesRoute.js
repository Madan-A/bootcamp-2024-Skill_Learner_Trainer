"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const purchasedCoursesController_1 = require("../controllers/purchasedCoursesController");
const router = express_1.default.Router();
// Route to fetch all available courses
router.get("/api/getCourses", purchasedCoursesController_1.getAvailableCourses);
// Route to fetch purchased courses for a specific user
router.get("/api/purchasedCourses/:userId", purchasedCoursesController_1.getPurchasedCourses);
// Route to purchase a course
router.post("/api/purchasedCourses/purchase", purchasedCoursesController_1.purchaseCourse);
exports.default = router;
