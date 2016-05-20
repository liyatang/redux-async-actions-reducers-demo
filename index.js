import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {bindAsyncActions} from 'redux-async-actions-reducers';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducers from './reducers';
import actions from './actions';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Demo redux-async-actions-reducers</h1>
                {this.props.children}
            </div>
        );
    }
}

let ConnectApp = connect(state => state, dispatch => ({
    actions: bindAsyncActions(actions, dispatch)
}))(App);

const A = (location, cb) => {
    require.ensure([], () => {
        cb(null, require('./a/index').default);
    });
};

const B = (location, cb) => {
    require.ensure([], () => {
        cb(null, require('./b/index').default);
    });
};


const Root = (
    <Provider store={createStore(reducers)}>
        <Router history={hashHistory}>
            <Route path="/" component={ConnectApp}>
                <Route path="a" getComponent={A}></Route>
                <Route path="b" getComponent={B}></Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById("appContainer"));