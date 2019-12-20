import React from 'react';
import {Route} from 'react-router-dom'

function StatusCode({code, children}){
  return <Route render={(props)=>{
    if(props.staticContext){
      props.staticContext.statusCode = code;
    }
    return children;
  }}></Route>
}

function NotFound(props){
  return <StatusCode code="404"><div>404</div></StatusCode>
}
export default NotFound;