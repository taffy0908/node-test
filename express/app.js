/**
 * 关于request和response的api，可以参照以下地址
 * http://www.runoob.com/nodejs/nodejs-express-framework.html
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//静态文件路径
app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({extend: false});
/**
 * index.html示例的js支持
 */
app.get('/index.htm', function( req, res ) {
    res.sendFile(__dirname + '/demo/'+'index.html');
});

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
/**
 * index-post.html示例的js支持
 * 表单以
 */
app.get('/index-post.htm', function( req, res ) {
    res.sendFile(__dirname + '/demo/'+'index-post.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.get('/', function( req, res ) {
    console.log('主页GET请求');
    res.send('Hello GET');

});
//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
});

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('应用实例，访问地址为http://%s:%s', host, port);
});

