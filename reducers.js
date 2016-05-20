import {combineAsyncReducers} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

const globalInitState = {
    version: 1,
    name: 'default'
};

const global = (state = globalInitState, action) => {
    switch (action.type) {
        case actionTypes.GLOBAL_HELLO:
            return Object.assign({}, state, {
                name: action.name
            });

        default:
            return state;
    }
};

const reducers = {
    global,
    a: value => value,
    b: value => value
};

const rootReducer = combineAsyncReducers(reducers);

export default rootReducer;