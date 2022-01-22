// require the path module
const path = require('path');
// require the express module
const express = require('express');
// require the body parser module
const bodyParser = require('body-parser');
// Import the routes/userInput file
const userData = require('./routes/userInput');
// Import the routes/userOutput file
const outputData = require('./routes/userOutput');

// Create an app using express
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userData);
app.use('/userOutput', outputData.routes);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);