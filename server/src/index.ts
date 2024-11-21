import express, { Application } from 'express';
import cors from 'cors';
import sampleRoute from './routes/sampleRoute';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import newRoute from './routes/newRoutes';
import sqlite3 from 'sqlite3';
import createUserRoute from './routes/createUserRoute';//import express from 'express';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;


// Initialize database and start the server
(async () => {
  try {
    const db = await connectDB();
    console.log('Connected to SQLite database');

    // Make db available throughout the app
    app.locals.db = db;

    app.use(cors());
    app.use(express.json());
    app.use('/api/sample', sampleRoute);
    app.use('/api/login', newRoute);
    app.use('/api/createUser',createUserRoute);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
})();
