import {combineAsyncReducers} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

const globalInitState = {
    version: 1,
    name: 'default'
};

const global = (state = globalInitState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.GLOBAL_HELLO:
            return Object.assign({}, state, {
                name: action.name
            });

        default:
            return state;
    }
};

// combineReducers在初始化时会给个undefined过来。且限制reducers不能返回undefined。 估搞个true。
// 一开始需要定义好一级reducers，方便后面异步加载的时候匹配覆盖。
const reducers = {
    global,
    a: {name: 'aadf'}, // 可以是 object， 定义初始值。也可以具体到 reducer 里面定义初始值
    b: null // 不能是undefined（redux）的限制。   约定个null，没啥特别意义，纯净让reducer异步load进来时做初始化
};

const rootReducer = combineAsyncReducers(reducers);

export default rootReducer;