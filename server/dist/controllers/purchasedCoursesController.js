"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseCourse = exports.getPurchasedCourses = exports.getAvailableCourses = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
// Open SQLite database
const dbPromise = (0, sqlite_1.open)({
    filename: "./database.sqlite",
    driver: sqlite3_1.default.Database,
});
// Get all available courses
const getAvailableCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield dbPromise;
        const purchasedCourseIds = (yield db.all("SELECT course_id FROM purchased_courses")).map((row) => row.course_id);
        const availableCourses = yield db.all("SELECT * FROM courses WHERE id NOT IN (?)", [purchasedCourseIds.join(",")]);
        res.json(availableCourses);
    }
    catch (err) {
        res.status(500).send("Error fetching courses");
    }
});
exports.getAvailableCourses = getAvailableCourses;
// Get purchased courses for a user
const getPurchasedCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const db = yield dbPromise;
        const purchasedCourses = yield db.all(`SELECT c.* FROM purchased_courses pc
       JOIN courses c ON pc.course_id = c.id
       WHERE pc.user_id = ?`, [userId]);
        res.json(purchasedCourses);
    }
    catch (err) {
        res.status(500).send("Error fetching purchased courses");
    }
});
exports.getPurchasedCourses = getPurchasedCourses;
// Purchase a course
const purchaseCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, courseId } = req.body;
    try {
        const db = yield dbPromise;
        yield db.run("INSERT INTO purchased_courses (user_id, course_id) VALUES (?, ?)", [userId, courseId]);
        res.status(200).send("Course purchased successfully");
    }
    catch (err) {
        res.status(500).send("Error purchasing course");
    }
});
exports.purchaseCourse = purchaseCourse;
