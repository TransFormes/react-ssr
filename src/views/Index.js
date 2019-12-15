import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getIndexLists } from './../store/index';
function Index(props) {
    console.log(props)
  const [count, setCount] = useState(1);
  //类似 componentDidMount 效果  获取数据
  useEffect(()=>{
    if(!props.list.length){
      props.getIndexLists();
    }
  },[])
  return <div>
      <h1>
        {props.title} {count}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <ul>
          {
              props.list.map(item =>{
              return <li key={item.id}>{item.name}</li>
              })
          }
      </ul>
    </div>
  
}
Index.loadData = (store)=>{
  console.log(store)
  return store.dispatch(getIndexLists());
}
//导出一个 state包裹的组件
export default connect(state =>({list: state.index.list}),{getIndexLists})(Index);
