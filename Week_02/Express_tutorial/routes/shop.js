// The shop that the user will see.

// Import the path module
const path = require('path');
// Import the express module
const express = require('express');
// Import the root module
const rootDir = require('../util/path');

// Create a router
const router = express.Router();

// Get finds an exact path equal to the first parameter: "/"
router.get('/', (req, res, next) => {
    // Send a response that returns the shop view
    // Use path to create absolute path
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;

