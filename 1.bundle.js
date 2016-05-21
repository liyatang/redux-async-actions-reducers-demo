webpackJsonp([1],{

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(257);

	__webpack_require__(259);

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
	                'a业务 ',
	                this.props.a.name,
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-default', onClick: this.handleClick.bind(this) },
	                    'hello'
	                )
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.actions.a_hello();
	        }
	    }]);

	    return Component;
	}(_react2.default.Component);

	exports.default = Component;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reduxAsyncActionsReducers = __webpack_require__(190);

	var _action = __webpack_require__(258);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var actions = {};

	actions.a_hello = function () {
	    return {
	        type: _action2.default.A_HELLO,
	        name: 'i am a'
	    };
	};

	(0, _reduxAsyncActionsReducers.mapActions)(actions);

/***/ },

/***/ 258:
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
	    A_HELLO: null
	}));

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reduxAsyncActionsReducers = __webpack_require__(190);

	var _action = __webpack_require__(258);

	var _action2 = _interopRequireDefault(_action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initState = {
	    name: 'default'
	};
	var reducers = {};
	reducers.a = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _action2.default.A_HELLO:
	            return Object.assign({}, state, { name: action.name });

	        default:
	            return state;
	    }
	};

	(0, _reduxAsyncActionsReducers.mapReducers)(reducers);

/***/ }

});