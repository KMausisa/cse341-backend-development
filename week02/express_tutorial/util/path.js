// Import the path module
const path = require('path');

// This gives us the absolute path to the response file
module.exports = path.dirname(process.mainModule.filename);