import {mapActions} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

let actions = {};

actions.b_hello1 = function () {
    return {
        type: actionTypes.B_HELLO1,
        name: 'i am b1'
    };
};

actions.b_hello2 = function () {
    return {
        type: actionTypes.B_HELLO2,
        name: 'i am b2'
    };
};

mapActions(actions);
