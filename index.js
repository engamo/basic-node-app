// const http = require('http');
// const fs = require('fs');
// const PORT = 8080;

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');

//   let path = './pages/';

//   switch (req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;

//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;

//     case '/contact-me':
//       path += 'contact-me.html';
//       res.statusCode = 200;
//       break;

//     case '/contact':
//       res.statusCode = 301;
//       res.setHeader('Location', '/contact-me');
//       res.end();
//       break;

//     default:
//       path += '404.html';
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });

// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let filePath;

  // Handle root URL explicitly
  if (req.url === '/' || req.url === '/index.html') {
    filePath = './index.html'; // Adjust the path based on the new location
    res.statusCode = 200;
  } else if (req.url === '/about') {
    filePath = './pages/about.html';
    res.statusCode = 200;
  } else if (req.url === '/contact-me') {
    filePath = './pages/contact-me.html';
    res.statusCode = 200;
  } else if (req.url === '/contact') {
    res.statusCode = 301;
    res.setHeader('Location', '/contact-me');
    return res.end();
  } else {
    // Handle other cases (404)
    filePath = './pages/404.html';
    res.statusCode = 404;
  }

  // Check if the requested file exists
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
