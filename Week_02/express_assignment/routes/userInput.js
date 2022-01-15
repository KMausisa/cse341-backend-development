// require the express module
const express = require('express');
// require the userData file
const userOutput = require('./userOutput');

// create a router
const router = express.Router();

router.get('/', (req, res, next) => {
    const users = userOutput.users;
    res.render('add-user', {
        users: users,
        pageTitle: 'Add User',
        formTitle: 'Username:',
        path: '/'
    })
});

module.exports = router;
