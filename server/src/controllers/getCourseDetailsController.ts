import { Request, Response } from "express";

export const getCoursesDetails = async (req: Request, res: Response): Promise<void> => {
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

    const rows = await db.all(query, [courseId]);

    if (rows.length === 0) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }

    res.json(rows[0]); // Assuming you expect one course, return the first row
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
