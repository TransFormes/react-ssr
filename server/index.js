import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import App from './../src/index';
const app = express();
app.use(express.static('public'))
app.get('/',(req,res) =>{
    const temp = renderToString(App);
    res.end(`
        <html>
            <head>
                <meta charset="utf-8"></meta>
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${temp}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `);
})
app.listen('3333',()=>{
    console.log('服务已启动')
})