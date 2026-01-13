const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/get-token", (req, res) => {
  const token = jwt.sign({ id: "123" }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
