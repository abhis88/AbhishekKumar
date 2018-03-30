var http = require('http');
var express = require('express');
var app = express();

const port = process.env.port || '3000'
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running node app'));
