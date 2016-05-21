import {mapReducers} from 'redux-async-actions-reducers';
import actionTypes from './action.types';
import {combineReducers} from 'redux';

const initState = {
    name: 'default'
};
let reducers = {};
// reducers.b = (state = initState, action) => {
//     switch (action.type) {
//         case actionTypes.B_HELLO:
//             return Object.assign({}, state, {name: action.name});
//
//         default:
//             return state;
//     }
// };

const b_1 = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.B_HELLO1:
            return Object.assign({}, state, {name: action.name});

        default:
            return state;
    }
};

const b_2 = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.B_HELLO2:
            return Object.assign({}, state, {name: action.name});

        default:
            return state;
    }
};

reducers.b = combineReducers({
    b_1,
    b_2
});

mapReducers(reducers);