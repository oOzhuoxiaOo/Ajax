// 1.引入express框架
const express = require("express");

//2.创建应用对象
const app = express();

// 3.创建路由规则
//request 是对请求报文的封装
app.get('/server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应
    response.send('HELLO AJAX');
})

app.post('/server', (request, response) => {
    // 设置响应头 允许跨域访问
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    // response.setCharacterEncoding("UTF-8");
    // response.setHeader("Access-Control-Allow-Origin", "*");
    /* 星号表示所有的域都可以接受， */
    // response.setHeader("Access-Control-Allow-Methods", "GET,POST");

    // response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应
    response.send('HELLO AJAX POST');
})



// 接收任意请求
app.all('/json-server', (request, response) => {
    // 设置响应头 允许跨域访问
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    // response.setCharacterEncoding("UTF-8");
    // response.setHeader("Access-Control-Allow-Origin", "*");
    /* 星号表示所有的域都可以接受， */
    // response.setHeader("Access-Control-Allow-Methods", "GET,POST");

    response.setHeader('Access-Control-Allow-Headers','*');

    // 定义一个数据
    const data = {
        name:'xiana',
        like:'boluobao'
    }
    // 将对象进行字符串转换(send只能对字符串数据和bugger数据进行处理)
    // JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
    let str = JSON.stringify(data);
    // 设置响应
    response.send(data);
})




// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头 允许跨域访问
    response.setHeader('Access-Control-Allow-Origin', '*');
 
    // 定义一个数据
    const data = {
        name:'xiana',
        like:'boluobao'
    }
    // 将对象进行字符串转换(send只能对字符串数据和bugger数据进行处理)
    // JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
    let str = JSON.stringify(data);
    // 设置响应
    // 延时响应
    setTimeout(()=>{
        response.send('延时响应');
    },3000);
})

// axios服务(加Ac---header和all就好了(option一次post一次等))
app.all('/axios-server', (request, response) => {
    // 设置响应头 允许跨域访问
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 定义一个数据
    const data = {
        name:'xiana',
        like:'boluobao'
    }
    // 将对象进行字符串转换(send只能对字符串数据和bugger数据进行处理)
    // JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
  
    response.send(JSON.stringify(data));
})



// fetch发送请求
app.all('/fetch-server', (request, response) => {
    // 设置响应头 允许跨域访问
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 定义一个数据
    const data = {
        name:'xiana',
        like:'boluobao'
    }
    // 将对象进行字符串转换(send只能对字符串数据和bugger数据进行处理)
    // JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
  
    response.send(JSON.stringify(data));
})



// JSONP服务
app.all('/jsonp-server',(req,res)=>{
    // 返回的需要符合script
    // res.send('console.log("hello jsonp-server")');
    const data = {
        name:'xiana233'
    };
    // 将数据转为字符串
    let str = JSON.stringify(data);
    // 返回结果
    res.end(`handle(${str})`);
})

// 用户名检测是否存在
app.all('/check-username',(req,res)=>{
    // 返回的需要符合script
    // res.send('console.log("hello jsonp-server")');
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    // 将数据转为字符串
    let str = JSON.stringify(data);
    // 返回结果
    res.end(`handle(${str})`);
})

app.all('/cors-server',(req,res)=>{
    // 设置响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Method','*');
    res.send('hello Cors');
})

//4.监听端口启动服务器
app.listen(8000, () => {
    console.log("服务器已经启动,8000端口监听中...");
})