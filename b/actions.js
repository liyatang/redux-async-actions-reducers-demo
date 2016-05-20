import {mapActions} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

let actions = {};

actions.b_hello = function () {
    return {
        type: actionTypes.B_HELLO,
        name: 'i am a'
    };
};

mapActions(actions);
