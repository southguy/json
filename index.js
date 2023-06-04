const express = require('express');
const jsonServer = require('json-server');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// JSON Server setup
const jsonServerRouter = jsonServer.router('public/club.json');
const jsonServerMiddlewares = jsonServer.defaults();

app.use(jsonServerMiddlewares);
app.use(jsonServer.bodyParser);
app.use('/', jsonServerRouter); // Set the base URL for JSON Server

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;