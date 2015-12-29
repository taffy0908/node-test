var server = require('./route/server');
var router = require('./route/router');

server.start(router.route);
