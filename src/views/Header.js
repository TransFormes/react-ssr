import React from 'react';
import { Link } from 'react-router-dom'

function Header(params) {
    return <div>
        <Link to='/'>首页</Link>
        <Link to='/about'>about</Link>
    </div>
}
export default Header;