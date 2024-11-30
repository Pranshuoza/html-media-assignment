const http = require("http");

// Define the port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Check if the request is for the root URL
  if (req.url === "/" && req.method === "GET") {
    // Set the response header and content
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else {
    // Handle other routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
