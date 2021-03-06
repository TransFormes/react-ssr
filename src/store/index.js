// import { instance } from './../tool/request';


//定义type类型
const GET_INDEX_LIST ='GET_INDEX_LIST';


const getIndexList = list =>({
    type: GET_INDEX_LIST,
    list
})

//获取数据
export const getIndexLists = ()=>{
    return (dispath,getState,$axios)=>{
        return $axios.get('/api/index/list').then(res =>{
            const { list } = res.data;
            // console.log(list)
            dispath(getIndexList(list));
        })
    }
}
//初始化数据，保存数据
const initState = {
    list: []
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