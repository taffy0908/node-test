var net = require('net');

var server = net.createServer( function( connection ) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('客户端关闭链接');
    });
    connection.write('我是超级管理员\n');
    connection.pipe(connection);
});

server.listen(8888, function() {
    console.log('server is listening');
});
