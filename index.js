const express = require('express');
const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// JSON Server setup
const jsonFilePath = path.join(__dirname, 'public', 'club.json');

if (fs.existsSync(jsonFilePath)) {
  const jsonServerRouter = jsonServer.router(jsonFilePath);
  const jsonServerMiddlewares = jsonServer.defaults();

  app.use(jsonServerMiddlewares);
  app.use(jsonServer.bodyParser);
  app.use('/api', jsonServerRouter); // Set the base URL for JSON Server
} else {
  console.error(`File not found: ${jsonFilePath}`);
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
