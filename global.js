//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

console.log(__filename);

// __dirname 表示当前执行脚本所在的目录。
console.log(__dirname);

//setTimeout(cb, ms)

function printHello() {
    console.log('Hello world!');
}
var timer = setTimeout(printHello, 2000);

clearTimeout(timer);

// setInterval(cb, ms)

var interval = setInterval(printHello, 2000);

clearInterval(interval);

//console

console.log({a:1,b:2,c:3});
console.info('我已经执行到console这旮旯了');
console.trace();
var j = 0;
console.time('获取数据');

for(var i= 0;i<=1000;i++) {
    j+=i;
}
console.log(j);
console.timeEnd('获取数据');

// process
process.on('exit', function( code ) {
    setTimeout( function() {
        console.log('该代码不会执行');
    }, 0);
    console.log('退出码为：', code);
});
console.log('程序执行结束');
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);
// 平台信息
console.log(process.platform);
// 输出当前目录
console.log('当前目录: ' + process.cwd());
// 输出当前版本
console.log('当前版本: ' + process.version);
// 输出内存使用情况
console.log(process.memoryUsage());