webpackJsonp([36],{

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {\n\t\t\treturn classNames;\n\t\t}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/classnames/index.js\n ** module id = 276\n ** module chunks = 1 19 24 26 31 36 37 38 40 41\n **/\n//# sourceURL=webpack:///./~/classnames/index.js?");

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(615);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _reactRouter = __webpack_require__(175);\n\nvar _R = __webpack_require__(269);\n\nvar _R2 = _interopRequireDefault(_R);\n\nvar _lodash = __webpack_require__(241);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _reactAppStore = __webpack_require__(238);\n\nvar _NovelList = __webpack_require__(618);\n\nvar _NovelList2 = _interopRequireDefault(_NovelList);\n\nvar _actions = __webpack_require__(620);\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nvar _AddNovelForm = __webpack_require__(623);\n\nvar _AddNovelForm2 = _interopRequireDefault(_AddNovelForm);\n\nvar _Consants = __webpack_require__(622);\n\nvar _Consants2 = _interopRequireDefault(_Consants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NovelList = function (_React$Component) {\n  _inherits(NovelList, _React$Component);\n\n  function NovelList(props) {\n    _classCallCheck(this, NovelList);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NovelList).call(this, props));\n\n    _this.onEditNovel = function (novelId) {\n      _this.props.router.push({\n        pathname: _R2.default.MyNovelEdit,\n        query: { novelId: novelId }\n      });\n    };\n\n    _this.store = new _reactAppStore.Store({\n      state: {\n        isAdd: false,\n        name: '',\n        author: ''\n      },\n      actionFactorys: _actions2.default,\n      didDispatch: function didDispatch(_ref) {\n        var type = _ref.type;\n\n        if (_Consants2.default.AddNovel === type) {\n          props.store.actions.getMyNovels(props.appStore.data.user.id);\n        }\n      }\n    });\n    props.store.actions.getMyNovels(props.appStore.data.user.id);\n    return _this;\n  }\n\n  _createClass(NovelList, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var novels = this.props.store.data.novels;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: _NovelList2.default.controlPanel },\n          _react2.default.createElement(\n            _Button2.default,\n            { onClick: this.store.actions.onToAddNovel },\n            '新增'\n          )\n        ),\n        _react2.default.createElement(_reactAppStore.Provider, {\n          Component: _AddNovelForm2.default,\n          connects: [{\n            store: this.store,\n            propsFn: function propsFn(_ref2) {\n              var isAdd = _ref2.isAdd;\n              var name = _ref2.name;\n              var author = _ref2.author;\n              return { show: isAdd, name: name, author: author };\n            },\n            actionsFn: function actionsFn(_ref3) {\n              var onName = _ref3.onName;\n              var onAuthor = _ref3.onAuthor;\n              var onAddNovel = _ref3.onAddNovel;\n              var onCancelAddNovel = _ref3.onCancelAddNovel;\n              return { onName: onName, onAuthor: onAuthor, onSubmit: onAddNovel, onCancel: onCancelAddNovel };\n            }\n          }]\n        }),\n        _react2.default.createElement(\n          'div',\n          { className: _NovelList2.default.novelList },\n          _lodash2.default.map(novels, function (n, k) {\n            return _react2.default.createElement(\n              'div',\n              { key: k, className: _NovelList2.default.novel },\n              _react2.default.createElement(\n                'div',\n                { className: _NovelList2.default.rowCell },\n                n.name\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: _NovelList2.default.rowCell },\n                n.author\n              ),\n              _react2.default.createElement(\n                _Button2.default,\n                { onClick: function onClick() {\n                    return _this2.onEditNovel(n.id);\n                  } },\n                '修改'\n              ),\n              _react2.default.createElement(\n                _Button2.default,\n                null,\n                '删除'\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return NovelList;\n}(_react2.default.Component);\n\nNovelList.defaultProps = {\n  user: {}\n};\nNovelList.propTypes = {\n  user: _react.PropTypes.object.isRequired,\n  store: _react.PropTypes.object,\n  appStore: _react.PropTypes.object\n};\nmodule.exports = (0, _reactRouter.withRouter)(NovelList);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/apps/NovelList.jsx\n ** module id = 614\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/apps/NovelList.jsx?");

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(616);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _classnames = __webpack_require__(276);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Button = function (_Component) {\n  _inherits(Button, _Component);\n\n  function Button() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Button);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Button)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Button, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props;\n      var children = _props.children;\n\n      var others = _objectWithoutProperties(_props, ['children']);\n\n      return _react2.default.createElement(\n        'button',\n        _extends({}, others, { className: (0, _classnames2.default)(_Button2.default.button, _Button2.default.defaults) }),\n        children\n      );\n    }\n  }]);\n\n  return Button;\n}(_react.Component);\n\nexports.default = Button;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/button/Button.jsx\n ** module id = 615\n ** module chunks = 36 37 38 40\n **/\n//# sourceURL=webpack:///./src/components/button/Button.jsx?");

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(617);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(261)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./Button.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./Button.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/button/Button.scss\n ** module id = 616\n ** module chunks = 36 37 38 40\n **/\n//# sourceURL=webpack:///./src/components/button/Button.scss?");

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(260)();\n// imports\n\n\n// module\nexports.push([module.id, \".Button__button___3B9Ox {\\n  display: inline-block;\\n  padding: 6px 12px;\\n  margin-bottom: 0;\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 1.42857143;\\n  text-align: center;\\n  white-space: nowrap;\\n  vertical-align: middle;\\n  -ms-touch-action: manipulation;\\n      touch-action: manipulation;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  background-image: none;\\n  border: 1px solid transparent;\\n  border-radius: 4px;\\n  outline: none; }\\n\\n.Button__defaults___k0czm {\\n  color: #333;\\n  background-color: #fff;\\n  border-color: #ccc; }\\n\\n.Button__defaults___k0czm:hover {\\n  color: #333;\\n  background-color: #e6e6e6;\\n  border-color: #adadad; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"button\": \"Button__button___3B9Ox\",\n\t\"defaults\": \"Button__defaults___k0czm\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./~/postcss-loader!./~/sass-loader!./src/components/button/Button.scss\n ** module id = 617\n ** module chunks = 36 37 38 40\n **/\n//# sourceURL=webpack:///./src/components/button/Button.scss?./~/css-loader?modules&importLoaders=1&localIdentName=%5Bname%5D__%5Blocal%5D___%5Bhash:base64:5%5D!./~/postcss-loader!./~/sass-loader");

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(619);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(261)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../../node_modules/postcss-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./NovelList.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../../node_modules/postcss-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./NovelList.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/apps/NovelList.scss\n ** module id = 618\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/apps/NovelList.scss?");

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(260)();\n// imports\n\n\n// module\nexports.push([module.id, \".NovelList__controlPanel___tONOA {\\n  margin: 10px 15px;\\n  padding: 8px; }\\n\\n.NovelList__novelList___3c-yg {\\n  margin: 10px 20px; }\\n\\n.NovelList__novel___zh00C {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  margin-top: -1px; }\\n\\n.NovelList__novel___zh00C:last-child {\\n  margin-top: 0; }\\n\\n.NovelList__rowCell___1BDUd {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1;\\n          flex: 1;\\n  padding: 4px 6px;\\n  border: solid 1px #ddd;\\n  margin-left: -1px; }\\n\\n.NovelList__rowCell___1BDUd:first-child {\\n  margin-left: 0; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"controlPanel\": \"NovelList__controlPanel___tONOA\",\n\t\"novelList\": \"NovelList__novelList___3c-yg\",\n\t\"novel\": \"NovelList__novel___zh00C\",\n\t\"rowCell\": \"NovelList__rowCell___1BDUd\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./~/postcss-loader!./~/sass-loader!./src/entry/routes/my/routes/NovelList/apps/NovelList.scss\n ** module id = 619\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/apps/NovelList.scss?./~/css-loader?modules&importLoaders=1&localIdentName=%5Bname%5D__%5Blocal%5D___%5Bhash:base64:5%5D!./~/postcss-loader!./~/sass-loader");

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AddNovelActions = __webpack_require__(621);\n\nvar _AddNovelActions2 = _interopRequireDefault(_AddNovelActions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_AddNovelActions2.default];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/actions/index.js\n ** module id = 620\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/actions/index.js?");

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function($) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = AddNovelActions;\n\nvar _Consants = __webpack_require__(622);\n\nvar _Consants2 = _interopRequireDefault(_Consants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AddNovelActions(_ref) {\n  var dispatch = _ref.dispatch;\n  var getState = _ref.getState;\n\n  function onName(name) {\n    dispatch({\n      type: _Consants2.default.NameChange,\n      state: { name: name }\n    });\n  }\n  function onAuthor(author) {\n    dispatch({\n      type: _Consants2.default.AuthorChange,\n      state: { author: author }\n    });\n  }\n  function onToAddNovel() {\n    dispatch({\n      type: _Consants2.default.ToAddNovel,\n      state: { name: '', author: '', isAdd: true }\n    });\n  }\n  function onCancelAddNovel() {\n    dispatch({\n      type: _Consants2.default.CancelAddNovel,\n      state: { name: '', author: '', isAdd: false }\n    });\n  }\n\n  function onAddNovel() {\n    var _getState = getState();\n\n    var name = _getState.name;\n    var author = _getState.author;\n\n    $.ajax({\n      type: 'POST',\n      url: '/api/novel',\n      data: { author: author, name: name },\n      success: function success(result) {\n        if (result.success) {\n          dispatch({\n            type: _Consants2.default.AddNovel,\n            state: { name: '', author: '', isAdd: false }\n          });\n        } else {\n          $.notify(result.desc);\n        }\n      },\n      error: function error(xml, err, throwObj) {\n        console.log(xml);\n        console.log(err);\n        console.log(throwObj);\n      }\n    });\n  }\n\n  return { onName: onName, onAuthor: onAuthor, onToAddNovel: onToAddNovel, onCancelAddNovel: onCancelAddNovel, onAddNovel: onAddNovel };\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(246)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/actions/AddNovelActions.jsx\n ** module id = 621\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/actions/AddNovelActions.jsx?");

/***/ },

/***/ 622:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  ToAddNovel: 'ToAddNovel',\n  CancelAddNovel: 'CancelAddNovel',\n  AddNovel: 'AddNovel',\n  NameChange: 'NameChange',\n  AuthorChange: 'AuthorChange'\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/actions/Consants.js\n ** module id = 622\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/actions/Consants.js?");

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(615);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddNovelForm = function (_React$Component) {\n  _inherits(AddNovelForm, _React$Component);\n\n  function AddNovelForm() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, AddNovelForm);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AddNovelForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(AddNovelForm, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props;\n      var show = _props.show;\n      var name = _props.name;\n      var author = _props.author;\n      var onName = _props.onName;\n      var onAuthor = _props.onAuthor;\n      var onSubmit = _props.onSubmit;\n      var onCancel = _props.onCancel;\n\n      return _react2.default.createElement(\n        'div',\n        { style: { display: show ? 'block' : 'none' } },\n        _react2.default.createElement('input', { placeholder: '书名', value: name, onChange: function onChange(e) {\n            return onName(e.target.value);\n          } }),\n        _react2.default.createElement('input', { placeholder: '作者', value: author, onChange: function onChange(e) {\n            return onAuthor(e.target.value);\n          } }),\n        _react2.default.createElement(\n          _Button2.default,\n          { onClick: onCancel },\n          '取消'\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          { onClick: onSubmit },\n          '保存'\n        )\n      );\n    }\n  }]);\n\n  return AddNovelForm;\n}(_react2.default.Component);\n\nAddNovelForm.propTypes = {\n  show: _react.PropTypes.bool.isRequired,\n  name: _react.PropTypes.string.isRequired,\n  author: _react.PropTypes.string.isRequired,\n  onName: _react.PropTypes.func.isRequired,\n  onAuthor: _react.PropTypes.func.isRequired,\n  onCancel: _react.PropTypes.func.isRequired,\n  onSubmit: _react.PropTypes.func.isRequired\n};\nexports.default = AddNovelForm;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/my/routes/NovelList/components/AddNovelForm.jsx\n ** module id = 623\n ** module chunks = 36\n **/\n//# sourceURL=webpack:///./src/entry/routes/my/routes/NovelList/components/AddNovelForm.jsx?");

/***/ }

});