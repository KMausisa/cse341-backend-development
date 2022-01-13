//Import the path module
const path = require('path');
// Import the http module
const http = require('http');
// Import the express module
const express = require('express');
// Import the bodyParser module
const bodyParser = require('body-parser');
// Import the routes/admin file
const adminRoutes = require('./routes/admin');
// Import the routes/shop file
const shopRoutes = require('./routes/shop');

// Create an express application
const app = express();

/* Create a new middleware function with the use method 
   Parameters:
    / = where the route will start
    req = request
    res = response
    next = function
*/

// Register a middleware function to parse body
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// Create a middleware function that uses the adminRoutes
app.use('/admin', adminRoutes);

// Create a middleware function that uses the shopRoutes
app.use(shopRoutes);

// Send a 404 Error Page when the request can't be fulfilled
app.use((req, res, next) => {
    // Send a response which shows the 404 html file
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Create a server and listen for a request on port 3000
app.listen(3000);