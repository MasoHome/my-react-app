const express = require('express');
const router = express.Router();

// Define your API endpoints here
router.get('/', (req, res) => {
  res.json({ message: "This is the users API!" });
});

router.get('/profile', (req, res) => {
  res.json({ user: "John Doe", role: "Admin" });
});

module.exports = router;