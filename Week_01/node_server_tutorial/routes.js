// This file contains routing logic

// Import the file system (fs) module
const fs = require('fs');

// Connect app.js to this file
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // Finish writing the response
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // Get request data
        req.on('data', (chunk) => {
            // The listener receives a chunk of data
            console.log(chunk);
            // Place a new chunk of data in the body request
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // Store the message in a constant
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; // 302 = re-direction
                res.setHeader('Location', '/');
                return res.end();
            }); // writeFileSync blocks code execution until the file is created
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    // Write data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    // Finish writing the response
    res.end();
}

// Export the file
module.exports = requestHandler;
