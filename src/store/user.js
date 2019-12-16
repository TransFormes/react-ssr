import axios from 'axios';


//定义type类型
const GET_INDEX_LIST ='GET_USER_INFO';


const getUserInfo = data =>({
    type: GET_INDEX_LIST,
    data
})

//获取数据
export const getUserInfos = ()=>{
    return (dispath)=>{
        return axios.get('http://localhost:3030/api/user/info').then(res =>{
            const { data } = res.data;
            console.log('用户信息',data)
            dispath(getUserInfo(data));
        })
    }
}
//初始化数据，保存数据
const initState = {
    userInfo: {}
}
//默认导出
export default (state = initState,action)=>{
    console.log(action.type)
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