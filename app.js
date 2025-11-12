// Import the express module
const express = require('express');

// Create an Express app
const app = express();

// Define a port
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! Hi HariPrasath!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
