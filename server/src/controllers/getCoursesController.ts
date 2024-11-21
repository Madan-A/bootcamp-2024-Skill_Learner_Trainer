import { Request, Response } from "express";

export const getCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  //const query = 'SELECT * FROM courses;';  // SQL query to fetch all courses from the 'courses' table
  const db = req.app.locals.db; // Get the database connection from app.locals

  if (!db) {
    console.error("Database instance not found in app.locals.");
    res.status(500).send("Database connection error");
  }

  try {
    // Execute the query to get all courses
    const rows = await db.all("SELECT * FROM courses;");
    res.json(rows);

    // db.all(query, (err: Error | null, rows: any[]) => {

    //   if (err) {
    //     console.error('Error executing query:', err.message);
    //     res.status(500).json({ error: 'Error while fetching courses' });
    //   }

    //   if (!rows || rows.length === 0) {
    //     res.status(404).json({ message: 'No courses found' });
    //   }

    //   // Send the fetched courses as the response
    //   res.status(200).json(rows);
    // });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
