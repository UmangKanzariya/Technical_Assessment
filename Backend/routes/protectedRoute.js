const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");

router.get("/protected", authMiddleware, (req, res) => {
  try {
    res.json({
      success: true,
      message: "You accessed protected data",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
