// Generated by CoffeeScript 1.4.0
(function() {
  var app, express;

  express = require('express');

  app = express;

  app.get('/hello.txt', function(req, res) {
    var body;
    body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    return res.end(body);
  });

  app.listen(3000);

  console.log('Listening on port 3000. Hi Mom!');

}).call(this);
