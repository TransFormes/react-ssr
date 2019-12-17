import React from 'react';
import ReactDom from 'react-dom';
import routes from './../src/index';
import {BrowserRouter,Route} from 'react-router-dom';
import { getClientStore } from './../src/store/store';
import { Provider } from 'react-redux';
import Header from './../src/views/Header';
//客户端包裹数据
const Page = (<Provider store={getClientStore()}>
    <BrowserRouter>
        <Header></Header>
        {routes.map(route =>{
            // return 要加  不然会渲染失败
            return <Route {...route}></Route>
        })}
    </BrowserRouter>
</Provider>)
ReactDom.hydrate(Page,document.getElementById('root'));