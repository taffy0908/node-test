var fs = require('fs');

// open a file
console.log('准备打开文件啦');
fs.open('input.txt', 'w+', function( err, fd ) {
    if(err) {
        return console.error(err);
    }
    console.log('文件打开成功');
});
// read file info
fs.stat('input.txt', function( err, stats) {
    if(err) {
        return console.error(err);
    }

    console.log(stats);
    console.log('读取文件信息成功！');

    console.log('是否为文件(isFile)?'+stats.isFile());
    console.log('是否为目录（isDirectory）?'+stats.isDirectory());
});

// write a file
fs.writeFile('input2.txt', '我是写进来的数据', function( err) {
    if(err) {
        return console.error(err);
    }
    console.log('数据写入成功');
    console.log('－－－－－－－－我是华丽丽的分割线－－－－－－－－');
    console.log('读取写入的数据');
    // read file data
    fs.readFile('input2.txt', function( err, data ) {
        if(err) {
            return console.error(err);
        }
        console.log('异步读取文件数据：'+data.toString());
    })
});

// read file
var buf = new Buffer(1024);
console.log('准备打开已存在的文件');
fs.open('input.txt', 'r+', function( err, fd) {
    if(err) {
        return console.error(err);
    }
    console.log('文件打开成功');
    console.log('准备读取文件');
    // 截取10个字节
    fs.ftruncate(fd, 10, function(err) {
        fs.read( fd, buf, 0, buf.length, 0, function( err, bytes ) {
            if( err ) {
                console.error( err );
            }
            console.log( bytes + '字节被读取' );
            if( bytes > 0 ) {
                console.log( buf.slice( 0, bytes ).toString() );
            }
        } );

        fs.close( fd, function( err ) {
            if( err ) {
                console.error( err );
            }
            console.log( '文件关闭成功' );
        } );
    });
});

// remove a file
console.log('准备删除文件啦');
fs.unlink('input1.txt', function( err ) {
    if(err) {
        return console.error(err);
    }
    console.log('文件删除成功');
});
// mkdir
console.log('创建目录 /tmp/test');
fs.mkdir('/tmp/test',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});
// readdir
console.log("查看 /tmp 目录");
fs.readdir("/tmp/test",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

//rmdir
console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("/tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});