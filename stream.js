var fs = require('fs');
// 读取文件  从流中读取数据
/*
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');
readerStream.on('data', function( chunk ) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕');
*/


// 写入文件   写入流
/*

var data = '我就是要写到文件的内容';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data);
writerStream.end();
writerStream.on('end', function() {
    console.log('写入完成');
});
writerStream.on('error', function( err ) {
    console.log(err.stack);
});
console.log('程序执行完毕');
*/

// 管道流
/*

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
console.log('程序执行完毕');*/

// 链式流

var zlib = require('zlib');

//fs.createReadStream('input.txt')
//.pipe(zlib.createGzip())
//.pipe(fs.createWriteStream('input.txt.gz'));
//
//console.log('文件压缩完成');
//

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input1.txt'));

console.log('文件解压缩完成');