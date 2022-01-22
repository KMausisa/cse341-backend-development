// require the express module
const express = require('express');
// create a router
const router = express.Router();

// create an array to hold the users
const users = [];

// /userOutput/users => GET
router.get('/users', (req, res, next) => {
    res.render('/add-user', {
        pageTitle: 'Users Added',
        path: 'userOutput/add-user'
    })
});

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
    users.push(req.body.username);
    res.redirect('/');
  });

exports.routes = router;
exports.users = users;