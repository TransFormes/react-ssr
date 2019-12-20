import React from 'react';
import { connect } from 'react-redux';
import { getUserInfos } from './../store/user';
import { Redirect } from 'react-router-dom'

function User(props) {
  return <Redirect to="/about"></Redirect>
  
  // <div>
  //   <h1>你好{props.userInfo.name},age{props.userInfo.age}</h1>
  // </div>
}
User.loadData = (store)=>{
    return store.dispatch(getUserInfos())
}
export default connect(state =>{
    return {
        userInfo: state.user.userInfo
    };
})(User);
