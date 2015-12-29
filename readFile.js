var fs = require('fs' );


//阻塞代码示例  在文件读取完后才执行完程序
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('同步读取文件，程序执行结束');


//非阻塞代码示例 不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能
fs.readFile('input.txt', function( err, data ) {
   if(err) return console.log(err);
    console.log(data.toString());
});

console.log('异步读取文件，程序执行结束');
