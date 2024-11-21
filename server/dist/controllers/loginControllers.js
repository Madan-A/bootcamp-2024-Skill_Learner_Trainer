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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = req.app.locals.db;
    const { username, password } = req.body;
    // Validate input
    if (!username || !password) {
        res.status(400).json({ message: "Username and password are required" });
    }
    try {
        // Fetch all users from the database
        const users = yield db.all("SELECT * FROM user;");
        // Match the username and password using Array.map and find
        const matchedUser = users.find((user) => user.name === username && user.password === password);
        if (matchedUser) {
            // Exclude sensitive fields like the password from the response
            const { password } = matchedUser, userWithoutPassword = __rest(matchedUser, ["password"]);
            res
                .status(200)
                .json({ message: "Login successful", user: userWithoutPassword });
        }
        else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    }
    catch (error) {
        console.error("Unexpected error during login:", error);
        res.status(500).json({ error: "Unexpected server error" });
    }
});
exports.loginController = loginController;
