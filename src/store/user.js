// import { instance } from './../tool/request';
// import proxy from 'http-proxy-middleware';  


//定义type类型
const GET_INDEX_LIST ='GET_USER_INFO';


const getUserInfo = data =>({
    type: GET_INDEX_LIST,
    data
})

//获取数据
export const getUserInfos = ()=>{
  return (dispath,getState,$axios)=>{
      return $axios.get('/api/user/info').then(res =>{
          const { data } = res.data;
          // console.log(list)
          dispath(getUserInfo(data));
      }).catch(err =>{
        console.log(err)
      })
  }
}
//初始化数据，保存数据
const initState = {
    userInfo: {}
}
//默认导出
export default (state = initState,action)=>{
    switch(action.type){
        case GET_INDEX_LIST:
            const newState = {
                ...state,
                userInfo: action.data
            }
            return newState;
        default: 
            return state;
    }
}