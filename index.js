const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './pages/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;

    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;

    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;

    case '/contact':
      res.statusCode = 301;
      res.setHeader('Location', '/contact-me');
      res.end();
      break;

    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
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
