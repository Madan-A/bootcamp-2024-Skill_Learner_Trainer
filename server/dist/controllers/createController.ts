import { Request, Response } from 'express';

// Controller to create a new user
export const createUser = (req: Request, res: Response) => {
  const { phone, email, trainerid, studentid, password, name, confirm_password } = req.body;

  // Validate required fields
  if (!phone || !email || !password || !name || !confirm_password) {
    return res.status(400).json({ error: 'All fields (phone, email, password, name, confirm_password) are required' });
  }

  // Ensure password matches confirm_password
  if (password !== confirm_password) {
    return res.status(400).json({ error: 'Password and confirm_password must match' });
  }

  const query = `
    INSERT INTO user (phone, email, trainerid, studentid, password, name, confirm_password)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const db = req.app.locals.db;

  if (!db) {
    console.error('Database instance not found in app.locals.');
    return res.status(500).send('Database connection error');
  }

  db.run(
    query,
    [phone, email, trainerid || null, studentid || null, password, name, confirm_password],
    function (err: Error | null) {
      if (err) {
        console.error('Error inserting data into the User table:', err.message);
        return res.status(500).json({ error: 'Server error while creating the user' });
      }

      res.status(201).json({
        message: 'User created successfully',
        userId: this.lastID, // `this.lastID` gives the auto-incremented ID
      });
    }
  );
};
