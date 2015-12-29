var http = require('http' ),
    url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url ).pathname;
        console.log('request for '+pathname+' received');

        route(pathname);

        response.writeHead(200, {contentType: 'text/plain'});
        response.write('hello world');
        response.end();
    }

    http.createServer(onRequest ).listen(8888);
    console.log('server has started');
}

exports.start = start;