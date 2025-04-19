const express = require('express');
const path = require('path');

const app = express();

// Replace with your actual Angular app name (dist output folder)
const appName = 'erp-project';

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist', appName)));

// Redirect all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', appName, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
