var express = require("express");
var http = require('http');

var app = express();
var port = process.env.port || 3000;

var server = http.createServer(app);

app.use(express.static(__dirname + '/app'));

server.listen(port, function(){
  console.log('server is running on port: ' + port);
});

