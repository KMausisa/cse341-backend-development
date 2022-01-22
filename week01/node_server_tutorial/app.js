// Import the http module
const http = require('http');
// Import the custom file that holds the requestHandler function
const routes = require('./routes');

// Create a server
const server = http.createServer(routes);

// listen for a request on port 3000
server.listen(3000);