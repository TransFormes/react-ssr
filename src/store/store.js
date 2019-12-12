import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer, { getIndexLists } from './index';
 
//创建store
const store = createStore(combineReducers({index: indexReducer}), applyMiddleware(thunk));

//导出
export default store;