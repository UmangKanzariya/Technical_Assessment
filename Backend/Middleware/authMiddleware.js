const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Token missing or invalid",
      });
    }

    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token verification failed",
    });
  }
};

module.exports = authMiddleware;
