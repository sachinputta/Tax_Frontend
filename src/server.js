const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the correct Angular build directory
app.use(express.static(path.join(__dirname, 'dist/erp-project')));

// Redirect all routes to index.html (for Angular routing)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/erp-project', 'welcomepage.html'));
});

// Start the server
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
