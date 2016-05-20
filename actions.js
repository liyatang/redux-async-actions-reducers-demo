import actionTypes from './action.types';
let actions = {};

actions.global_hello = () => {
    return {
        type: actionTypes.GLOBAL_HELLO,
        name: 'i am global'
    };
};

export default actions;