const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/erp-project')));

// Handle all routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/erp-project/index.html'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
