const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular dist folder
app.use(express.static(path.join(__dirname, 'dist/erp-project')));

// Handle SPA routing: redirect all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/erp-project/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});