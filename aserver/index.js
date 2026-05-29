const express = require('express');
const cors = require('cors'); // 1. Import cors
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/users'); // Import the file
const productRoutes = require('./routes/products'); // Import the file

app.use(cors()); // 2. Enable CORS for all routes
app.use(express.json()); // 3. Allow your server to read JSON data

// Tell express to use the new route file
// All routes in users.js will now start with /api/users
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
