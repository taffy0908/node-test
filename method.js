var http = require('http'),
    url = require('url'),
    util = require('util');

//获取GET请求内容
http.createServer( function( req, res ) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(util.inspect(url.parse(req.url, true)));
} ).listen(3000);

console.log('server is running at http://127.0.0.1:3000');

//获取POST请求内容

var querystring = require('querystring');

http.createServer( function( req, res ) {
    var post = '';
    req.on('data', function( chunk ) {
        post += chunk;
    });
    req.on('end', function() {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(8888);

console.log('server is running at http://127.0.0.1:8888');
