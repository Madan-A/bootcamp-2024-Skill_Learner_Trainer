import { Request, Response } from 'express';
// import {User} from "../types/types";


export const getNewData = (req: Request, res: Response)=> {

    // Define the User type
type User = {
    phone: string;
    email: string;
    trainerid: number | null;
    studentid: number | null;
    password: string;
  };
  
  const query = 'SELECT * FROM user';
  const db = req.app.locals.db; // Access the SQLite db instance

  if (!db) {
    console.error('Database instance not found in app.locals.');
    res.status(500).json({ success: false, message: 'Database connection error' });
  }

  db.all(query, (err: Error | null, rows: User[]) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ success: false, message: 'Server error while fetching data' });
    }

    if (!rows || rows.length === 0) {
       res.status(404).json({ success: false, message: 'No data found in the table' });
    }

    res.status(200).json({ success: true, data: rows });
  });
};
