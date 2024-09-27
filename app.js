const http = require('http');
const routes = require('./routes');

const { log } = require('console');

const server = http.createServer(routes);

server.listen(4000);