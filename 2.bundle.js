webpackJsonp([2],{

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(261);

	__webpack_require__(263);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Component = function (_React$Component) {
	    _inherits(Component, _React$Component);

	    function Component(props) {
	        _classCallCheck(this, Component);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));
	    }

	    _createClass(Component, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'b业务 ',
	                this.props.b.b_1.name,
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-default', onClick: this.handleClick1.bind(this) },
	                    'hello 1'
	                ),
	                _react2.default.createElement('hr', null),
	                'b业务 ',
	                this.props.b.b_2.name,
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-default', onClick: this.handleClick2.bind(this) },
	                    'hello 2'
	                )
	            );
	        }
	    }, {
	        key: 'handleClick1',
	        value: function handleClick1() {
	            this.props.actions.b_hello1();
	        }
	    }, {
	        key: 'handleClick2',
	        value: function handleClick2() {
	            this.props.actions.b_hello2();
	        }
	    }]);

	    return Component;
	}(_react2.default.Component);

	exports.default = Component;

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reduxAsyncActionsReducers = __webpack_require__(190);

	var _action = __webpack_require__(262);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var actions = {};

	actions.b_hello1 = function () {
	    return {
	        type: _action2.default.B_HELLO1,
	        name: 'i am b1'
	    };
	};

	actions.b_hello2 = function () {
	    return {
	        type: _action2.default.B_HELLO2,
	        name: 'i am b2'
	    };
	};

	(0, _reduxAsyncActionsReducers.mapActions)(actions);

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _action = __webpack_require__(254);

	var _action2 = _interopRequireDefault(_action);

	var _keyMirror = __webpack_require__(29);

	var _keyMirror2 = _interopRequireDefault(_keyMirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign(_action2.default, (0, _keyMirror2.default)({
	    B_HELLO1: null,
	    B_HELLO2: null
	}));

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reduxAsyncActionsReducers = __webpack_require__(190);

	var _action = __webpack_require__(262);

	var _action2 = _interopRequireDefault(_action);

	var _redux = __webpack_require__(175);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    name: 'default'
	};
	var reducers = {};
	// reducers.b = (state = initState, action) => {
	//     switch (action.type) {
	//         case actionTypes.B_HELLO:
	//             return Object.assign({}, state, {name: action.name});
	//
	//         default:
	//             return state;
	//     }
	// };

	var b_1 = function b_1() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _action2.default.B_HELLO1:
	            return Object.assign({}, state, { name: action.name });

	        default:
	            return state;
	    }
	};

	var b_2 = function b_2() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _action2.default.B_HELLO2:
	            return Object.assign({}, state, { name: action.name });

	        default:
	            return state;
	    }
	};

	reducers.b = (0, _redux.combineReducers)({
	    b_1: b_1,
	    b_2: b_2
	});

	(0, _reduxAsyncActionsReducers.mapReducers)(reducers);

/***/ }

});