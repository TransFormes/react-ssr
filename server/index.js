import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, Route, matchPath } from 'react-router-dom';
import express from 'express';
import routes from './../src/index';
import { getServerStore } from './../src/store/store';
import { Provider } from 'react-redux';
import Header from './../src/views/Header';
const app = express();
const store = getServerStore();
app.use(express.static('public'))
app.get('*',(req,res) =>{
    //服务端也要包裹数据
    const promises = [];
    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match){
            const { loadData } = route.component;
            // console.log(loadData)
            //一定要判断 不然有的没有这个属性 会报错
            if(loadData){
                promises.push(loadData(store));
            }
        }
    });
    Promise.all(promises).then(()=>{
        const page = (<Provider store={store}>
            <StaticRouter location={req.url}>
                {/* {App} */}
                <Header></Header>
                {routes.map(route =>{
                    return <Route {...route}></Route>
                })}
            </StaticRouter>
        </Provider>);
        const temp = renderToString(page);
        res.end(`
            <html>
                <head>
                    <meta charset="utf-8"></meta>
                    <title>react ssr</title>
                </head>
                <body>
                    <div id="root">${temp}</div>
                    <script>
                        window.__context = ${JSON.stringify(store.getState())}
                    </script>  
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `);
    }).catch(()=>{
        res.end('错误页面');
    })
})
app.listen('3333',()=>{
    console.log('服务已启动')
})