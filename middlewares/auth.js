const jwt = require("jsonwebtoken");

// Function to generate JWT token
exports.generateToken = (payload) => {
  // Define your secret key (this should be securely stored)
  const secretKey = "your_secret_key";

  // Define token expiration (optional)
  const expiresIn = "1h"; // Token expires in 1 hour

  // Generate JWT token
  const token = jwt.sign(payload, secretKey, { expiresIn });

  return token;
};

// Middleware function to verify JWT token
exports.verifyToken = (req, res, next) => {
  // Get token from header, query parameters, or wherever it's sent from the frontend
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "your_secret_key");

    // Access the user ID from the decoded payload
    const userId = decoded.userId;

    // Attach user ID to the request object for future use
    req.userId = userId;

    // Call the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
