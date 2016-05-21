import {mapActions} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

let actions = {};

actions.a_hello = function () {
    return {
        type: actionTypes.A_HELLO,
        name: 'i am a'
    };
};

mapActions(actions);