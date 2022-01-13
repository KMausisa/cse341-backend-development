// This route should handle the creation of products. Only of admin use.

// Import the path module
const path = require('path');
// Import the express module
const express = require('express');
// Import the root module
const rootDir = require('../util/path');

// Create a router
const router = express.Router();

// This middleweare function will create a form for the admin to add a product
router.get('/add-product', (req, res, next) => {
    // Send the add-product html file
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// This middleware function will run when the form is submitted
// The post method will be run for incoming POST requests
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    // redirect to '/' route
    res.redirect('/');
});

module.exports = router;