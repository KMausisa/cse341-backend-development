// Import the http module
const http = require('http');
// Import the file system (fs) module
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Parse the URL
    const url = req.url;
    // Parse the method
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // Finish writing the response
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Hello World!');
        res.statusCode = 302; // 302 = re-direction
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    // Write data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    // Finish writing the response
    res.end();
});

// listen for a request on port 3000
server.listen(3000);