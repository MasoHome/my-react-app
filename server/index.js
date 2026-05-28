const express = require('express');
const cors = require('cors'); // 1. Import cors
const app = express();
const PORT = 3000;

app.use(cors()); // 2. Enable CORS for all routes
app.use(express.json()); // 3. Allow your server to read JSON data

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});