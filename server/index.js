import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import App from './../src/index';
import store from './../src/store/store';
import { Provider } from 'react-redux';
const app = express();
app.use(express.static('public'))
app.get('*',(req,res) =>{
    //服务端也要包裹数据
    const page = (<Provider store={store}>
        <StaticRouter location={req.url}>
            {App}
        </StaticRouter>
    </Provider>)
    const temp = renderToString(page);
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