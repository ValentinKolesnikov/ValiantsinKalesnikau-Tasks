var http = require('http');
var url = require('url');
var static = require('node-static');
var querystring = require('querystring');

function accept(req, res) {
  if (req.url == '/server.js') {

    if (req.method == 'POST') {
      var body = '';
      req.on('data', function (data) {
        body += data;
      });
      req.on('end', function () {
        console.log("Body: " + body);
      });
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end('Successful ('+req.method+')');
    } else if (req.method == 'GET') {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end('Successful (' + req.method + ')');
    }

  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.write("404: UPS");
    res.end("SORRY");
  }
}

http.createServer(accept).listen(8080);

console.log('Server running on port 8080');