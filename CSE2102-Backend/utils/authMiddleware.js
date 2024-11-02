const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // console.log("Received token:", token); // Log the received token

    if (!token) {
        // console.log("No token provided");
        return res
            .status(401)
            .json({ message: "Access Denied: No token provided" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            // console.log("Invalid token", err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Set user information
        next(); // Proceed to the next middleware/route handler
    });
};

module.exports = authenticateToken;
