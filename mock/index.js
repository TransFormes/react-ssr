const express = require('express');
const app = express();
// app.get('*',(req,res) =>{})
app.get('/api/user/info',(req,res)=>{
    // res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','application/json;charset=uft-8');
    // res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    let json = {
        code: 200,
        data:{
            name: 'liuY',
            age: '20'
        }
    }
    res.json(json);
})
app.get('/api/index/list',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','application/json;charset=uft-8');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    let json = {
        code: 200,
        list: [
            {name: '张三',id: 1},
            {name: '李四',id: 2},
            {name: '王五',id: 3}
        ]
    }
    res.json(json);
})
app.listen('3030',()=>{
    console.log('服务已启动')
})