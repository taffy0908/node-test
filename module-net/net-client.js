var net = require('net');

var client = net.connect({port: 8888}, function() {
    console.log('连接到服务器了');
});

client.on('data', function( data ) {
    console.log(data.toString());
    setTimeout( function() {
        client.end();
    }, 2000);
});

client.on('end', function() {
    console.log('断开与服务器的链接');
});