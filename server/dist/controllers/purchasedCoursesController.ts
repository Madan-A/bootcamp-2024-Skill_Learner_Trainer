import { Request, Response } from 'express';

export const purchaseCourse = async (req: Request, res: Response) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
        res.status(400).json({ error: 'User ID and Course ID are required.' });
    }

    const db = req.app.locals.db;

    if (!db) {
        res.status(500).json({ error: 'Database connection error' });
    }

    try {
        // Fetch the current purchased courses for the user
        const userQuery = `SELECT purchased_courses FROM users WHERE id = ?;`;
        const user = await db.get(userQuery, [userId]);

        if (!user) {
            res.status(404).json({ error: 'User not found.' });
        }

        // Update the purchased courses list
        const currentCourses = user.purchased_courses ? user.purchased_courses.split(',') : [];
        if (currentCourses.includes(String(courseId))) {
            res.status(400).json({ error: 'Course already purchased.' });
        }

        currentCourses.push(courseId);
        const updatedCourses = currentCourses.join(',');

        // Update the user record in the database
        const updateQuery = `UPDATE users SET purchased_courses = ? WHERE id = ?;`;
        await db.run(updateQuery, [updatedCourses, userId]);

        res.status(200).json({ message: 'Course purchased successfully.' });
    } catch (error) {
        console.error('Error purchasing course:', error);
        res.status(500).json({ error: 'An error occurred while purchasing the course.' });
    }
};
export const getPurchasedCourses = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId) {
        res.status(400).json({ error: 'User ID is required.' });
    }

    const db = req.app.locals.db;

    if (!db) {
        res.status(500).json({ error: 'Database connection error' });
    }

    try {
        // Fetch purchased course IDs
        const userQuery = `SELECT purchased_courses FROM users WHERE id = ?;`;
        const user = await db.get(userQuery, [userId]);

        if (!user || !user.purchased_courses) {
            return res.status(404).json({ message: 'No purchased courses found.' });
        }

        const courseIds = user.purchased_courses.split(',');
        if (courseIds.length === 0) {
            res.status(404).json({ message: 'No purchased courses found.' });
        }

        // Fetch course details from the courses table
        const placeholders = courseIds.map(() => '?').join(',');
        const courseQuery = `SELECT * FROM courses WHERE id IN (${placeholders});`;
        const courses = await db.all(courseQuery, courseIds);

        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching purchased courses:', error);
        res.status(500).json({ error: 'An error occurred while fetching purchased courses.' });
    }
};
