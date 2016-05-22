# redux-async-actions-reducers-demo

npm install;
npm start;

open http://localhost:7000

or http://liyatang.github.io/redux-async-actions-reducers-demo/


## 注意

// 需要注意createStore在最外层。
// 如果使用了redux dev-tool工具，createStore没在最外层可能会有问题
```javascript
import {createStore} from 'redux-async-actions-reducers';
import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk),
        (__DEBUG__ && window.devToolsExtension) ? window.devToolsExtension() : f => f // eslint-disable-line
    ));
}
```
