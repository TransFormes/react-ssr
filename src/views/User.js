import React from 'react';
import { connect } from 'react-redux';
import { getUserInfos } from './../store/user';

function User(props) {
    console.log(props)
  return <div>
<h1>你好{props.userInfo.name},age{props.userInfo.age}</h1>
  </div>
}
User.loadData = (store)=>{
    return store.dispatch(getUserInfos())
}
export default connect(state =>{
    console.log(state.user.userInfo)
    return {
        userInfo: state.user.userInfo
    };
})(User);
