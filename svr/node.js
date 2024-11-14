require('dotenv').config();
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  var url = req.url;
  if (url.endsWith('/')) url += 'index.html';

  try {
    const file = fs.readFileSync('./site' + url);
    console.log(`${ip}: 200: ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  } catch (e) {
    const status = e.code == 'ENOENT' ? 500 : 404;
    console.log(`${ip}: ${status}: ${req.url}`);
    res.writeHead(status, { 'Content-Type': 'text/html' });
    res.end(e.code == 'ENOENT' ? '404 Not Found' : '500 Internal Server Error');
  }
}).listen(process.env.PORT, () => console.log('Server listening'));