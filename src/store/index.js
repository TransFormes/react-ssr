import axios from 'axios';

//定义type类型
const GET_INDEX_LIST ='GET_INDEX_LIST';


const getIndexList = list =>({
    type: GET_INDEX_LIST,
    list
})

//获取数据
export const getIndexLists = ()=>{
    return (dispath)=>{
        return axios.get('http://localhost:3030/api/index/list').then(res =>{
            const { list } = res.data;
            dispath(getIndexList(list));
        })
    }
}
//初始化数据，保存数据
const initState = {
    list: [{name:'你好',id: 0}]
}
//默认导出
export default (state = initState,action)=>{
    switch(action.type){
        case GET_INDEX_LIST:
            const newState = {
                ...state,
                list: action.list
            }
            return newState;
        default: 
            return state;
    }
}