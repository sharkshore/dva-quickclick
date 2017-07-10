import key from 'keymaster';

/* Model - count*/
export default {
  namespace: 'count',

  state: {
    record: 0,
    current: 0
  },//初始状态

  reducers: {
    add(state){
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      }
    },//action的type为'count/add'
    minus(state){
      return {
        ...state,
        current: (state.current - 1)
      };
    },//action的type为'count/minus'
  },//Reducers 负责处理 action 的 state 更新

  effects: {
    *add(action, {select, call, put}){
      yield call(delay, 1000);
      yield put({type: 'minus'})
    },//如果此处名称和reducers中的名称相对,dispatch action时,会同时触发reducers和effects
    *minus(action, {select, call, put}){
      console.log('减少数字');
    }
  },//Effects负责协调那些复杂或异步的操作

  subscriptions: {
    keyboardWatcher({dispatch}) {
      key('⌘+up, ctrl+up', () => {
        dispatch({type: 'add'})
      });
    },//订阅键盘按键
  },//订阅数据源

};

const delay=(timeout)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(resolve, timeout);
  })
}
