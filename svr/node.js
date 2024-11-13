require('dotenv').config();
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(req.url);
}).listen(process.env.PORT, () => console.log('Server listening'))