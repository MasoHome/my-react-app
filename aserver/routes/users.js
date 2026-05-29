const express = require('express');
const router = express.Router();

// Mock data (we will use a real database later!)
const users = [
  { id: 1, name: "Joe Doe", role: 'User'},
  { id: 2, name: "Mirko Srbinovski", role: 'Admin' }
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a single user by ID
router.get('/:id', (req, res) => {
  const user = users.find(p => p.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST: Add a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    role: req.body.role
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE: Remove a user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(p => p.id !== id);
  
  if (users.length === initialLength) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
});

module.exports = router;