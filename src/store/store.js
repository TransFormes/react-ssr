import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';
import userReducer from './user';
 
//创建store
// const store = createStore(combineReducers({index: indexReducer}), applyMiddleware(thunk));

//导出
// export default store;
export const getServerStore = () =>{
    return  createStore(combineReducers({index: indexReducer,user: userReducer}), applyMiddleware(thunk));
} 
export const getClientStore = () =>{
    const defaultStore = window.__context ? window.__context : {}
    return createStore(combineReducers({index: indexReducer,user: userReducer}),defaultStore, applyMiddleware(thunk));
}