"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewData = void 0;
// import {User} from "../types/types";
const getNewData = (req, res) => {
    const query = 'SELECT * FROM user';
    const db = req.app.locals.db; // Access the SQLite db instance
    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ success: false, message: 'Database connection error' });
    }
    db.all(query, (err, rows) => {
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
exports.getNewData = getNewData;
