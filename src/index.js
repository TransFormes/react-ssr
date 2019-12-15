import React from 'react';
import {Route} from 'react-router-dom';
import Index from './views/Index';
import About from './views/About';


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
        // exact: true,
        key: 'index'
    },
    {
        path: '/about',
        component: About,
        // exact: true,
        key: 'about'
    },
]