import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const db = req.app.locals.db;

  interface User {
    id: number;
    name: string;
    password: string;
    email?: string;
    phone?: string;
    // Add other fields if necessary
  }

  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
  }

  try {
    // Fetch all users from the database
    const users: User[] = await db.all("SELECT * FROM user;");

    // Match the username and password using Array.map and find
    const matchedUser = users.find(
      (user) => user.name === username && user.password === password
    );

    if (matchedUser) {
      // Exclude sensitive fields like the password from the response
      const { password, ...userWithoutPassword } = matchedUser;
      res
        .status(200)
        .json({ message: "Login successful", user: userWithoutPassword });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Unexpected server error" });
  }
};
