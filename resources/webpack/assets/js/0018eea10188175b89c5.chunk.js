webpackJsonp([23],{

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function($) {'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Popups = function (_React$Component) {\n  _inherits(Popups, _React$Component);\n\n  function Popups() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Popups);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Popups)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.showPopup = function () {\n      $.notify('Hello World');\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Popups, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'button',\n          { onClick: this.showPopup },\n          'show'\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: this.hidePopup },\n          'hide'\n        )\n      );\n    }\n  }]);\n\n  return Popups;\n}(_react2.default.Component);\n\nmodule.exports = Popups;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(243)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/popupview/PopupView.jsx\n ** module id = 662\n ** module chunks = 23\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/popupview/PopupView.jsx?");

/***/ }

});