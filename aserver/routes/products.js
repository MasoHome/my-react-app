const express = require('express');
const router = express.Router();

// Mock data (we will use a real database later!)
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 499 }
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST: Add a new product
router.post('/', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE: Remove a product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);
  
  if (products.length === initialLength) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product deleted successfully" });
});

module.exports = router;