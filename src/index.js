import React from 'react';
import {Route} from 'react-router-dom';
import Index from './views/Index';
import About from './views/About';
import User from './views/User';
import NotFound from './views/NotFound';
import './App.css'


// export default (
//     <div>
//         <Route exact path="/" title="你好" component={Index}></Route>
//         <Route exact path="/about" component={About}></Route>
//     </div>
// );
export default [
    {
        path: '/',
        component: Index,
        exact: true,
        key: 'index'
    },
    {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path: '/user',
        component: User,
        exact: true,
        key: 'user'
    },
    {
      component: NotFound,
      key: 'NotFound'
    }
]