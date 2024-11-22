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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesDetails = void 0;
const getCoursesDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = req.app.locals.db; // Get the database connection from app.locals
    const courseId = "req.params.courseId"; // Use courseId from URL parameter
    if (!db) {
        console.error("Database instance not found in app.locals.");
        res.status(500).send("Database connection error");
        return;
    }
    try {
        const query = `
      SELECT name, instructor, description, timings, duration, youtube_url
      FROM courses 
      WHERE id = ?;
    `;
        const rows = yield db.all(query, [courseId]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.json(rows[0]); // Assuming you expect one course, return the first row
    }
    catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
});
exports.getCoursesDetails = getCoursesDetails;
