// Import necessary modules
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { configDotenv } from 'dotenv';

// Configure environment variables
configDotenv();

// Manually define __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the port
const PORT = process.env.PORT || 8000;

// Create the server
const server = http.createServer((req, res) => {
    const { url } = req;

    // Default to homepage
    let filePath = path.join(__dirname, 'public', 'index.html');

    // Determine the file based on the request URL
    if (url === '/about') filePath = path.join(__dirname, 'public', 'about.html');
    else if (url === '/admission') filePath = path.join(__dirname, 'public', 'admission.html');
    else if (url === '/contact') filePath = path.join(__dirname, 'public', 'contact.html');
    else if (url === '/courses') filePath = path.join(__dirname, 'public', 'courses.html');

    // Read and serve the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle file not found or other errors
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>404 - File Not Found</h1>');
        } else {
            // Serve the requested file
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
