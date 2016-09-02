webpackJsonp([21],{

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Paging = __webpack_require__(673);\n\nvar _Paging2 = _interopRequireDefault(_Paging);\n\nvar _Pagination = __webpack_require__(675);\n\nvar _Pagination2 = _interopRequireDefault(_Pagination);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Paging = function (_React$Component) {\n  _inherits(Paging, _React$Component);\n\n  function Paging(props) {\n    _classCallCheck(this, Paging);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Paging).call(this, props));\n\n    _this.onChange = function (page) {\n      _this.setState({\n        currentPage: page\n      });\n    };\n\n    _this.state = {\n      pages: 20,\n      currentPage: 1\n    };\n    return _this;\n  }\n\n  _createClass(Paging, [{\n    key: 'render',\n    value: function render() {\n      var _state = this.state;\n      var pages = _state.pages;\n      var currentPage = _state.currentPage;\n\n      return _react2.default.createElement(\n        'div',\n        { className: _Paging2.default.stage },\n        _react2.default.createElement(_Pagination2.default, { pages: pages, currentPage: currentPage, onChange: this.onChange })\n      );\n    }\n  }]);\n\n  return Paging;\n}(_react2.default.Component);\n\nmodule.exports = Paging;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/paging/Paging.js\n ** module id = 672\n ** module chunks = 21\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/paging/Paging.js?");

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(674);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(508)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../node_modules/postcss-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./Paging.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../node_modules/postcss-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./Paging.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/paging/Paging.scss\n ** module id = 673\n ** module chunks = 21\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/paging/Paging.scss?");

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(507)();\n// imports\n\n\n// module\nexports.push([module.id, \".Paging__stage___2Zinu {\\n  position: relative;\\n  overflow: auto;\\n  width: 100%;\\n  height: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"stage\": \"Paging__stage___2Zinu\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./~/postcss-loader!./~/sass-loader!./src/entry/routes/demos/routes/paging/Paging.scss\n ** module id = 674\n ** module chunks = 21\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/paging/Paging.scss?./~/css-loader?modules&importLoaders=1&localIdentName=%5Bname%5D__%5Blocal%5D___%5Bhash:base64:5%5D!./~/postcss-loader!./~/sass-loader");

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _PageLink = __webpack_require__(676);\n\nvar _PageLink2 = _interopRequireDefault(_PageLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Pagination = function (_React$Component) {\n  _inherits(Pagination, _React$Component);\n\n  function Pagination() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Pagination);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pagination)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function (page) {\n      if (page > 0) {\n        _this.props.onChange(page);\n      }\n    }, _this.getInterval = function () {\n      var _this$props = _this.props;\n      var currentPage = _this$props.currentPage;\n      var displayedPages = _this$props.displayedPages;\n      var pages = _this$props.pages;\n\n      var halfDisplayed = Math.floor(displayedPages / 2);\n      return {\n        start: Math.ceil(currentPage > halfDisplayed ? Math.max(Math.min(currentPage - halfDisplayed, pages - displayedPages), 1) : 1),\n        end: Math.ceil(currentPage > halfDisplayed ? Math.min(currentPage + halfDisplayed, pages) : Math.min(displayedPages, pages))\n      };\n    }, _this.renderStart = function (edges, start, currentPage) {\n      var end = Math.min(edges, start);\n      var starts = [];\n      if (start > edges) {\n        for (var i = 1; i <= end; i++) {\n          starts.push(_react2.default.createElement(_PageLink2.default, { key: i, onClick: _this.onClick, page: i, currentPage: currentPage }));\n        }\n      }\n      if (start - end === 2) {\n        starts.push(_react2.default.createElement(_PageLink2.default, {\n          key: end + 1,\n          onClick: _this.onClick,\n          page: end + 1,\n          currentPage: currentPage\n        }));\n      }\n      if (start - end > 2) {\n        starts.push(_react2.default.createElement(_PageLink2.default, { key: 'a', onClick: _this.onClick, page: 0, currentPage: currentPage }));\n      }\n      return starts;\n    }, _this.renderInterval = function (start, end, currentPage) {\n      var intervals = [];\n      for (var i = start; i <= end; i++) {\n        intervals.push(_react2.default.createElement(_PageLink2.default, { key: i, onClick: _this.onClick, page: i, currentPage: currentPage }));\n      }\n      return intervals;\n    }, _this.renderEnd = function (edges, end, pages, currentPage) {\n      var ends = [];\n      var begin = Math.max(end + 1, pages - edges + 1);\n      if (begin - end === 2) {\n        ends.push(_react2.default.createElement(_PageLink2.default, {\n          key: begin - 1,\n          onClick: _this.onClick,\n          page: begin - 1,\n          currentPage: currentPage\n        }));\n      }\n      if (begin - end > 2) {\n        ends.push(_react2.default.createElement(_PageLink2.default, { key: 'b', onClick: _this.onClick, page: 0, currentPage: currentPage }));\n      }\n      for (var i = begin; i <= pages; i++) {\n        ends.push(_react2.default.createElement(_PageLink2.default, { key: i, onClick: _this.onClick, page: i, currentPage: currentPage }));\n      }\n      return ends;\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Pagination, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props;\n      var pages = _props.pages;\n      var edges = _props.edges;\n      var currentPage = _props.currentPage;\n      var style = _props.style;\n      var className = _props.className;\n\n      var _getInterval = this.getInterval();\n\n      var start = _getInterval.start;\n      var end = _getInterval.end;\n\n      return _react2.default.createElement(\n        'ul',\n        { style: style, className: className },\n        this.renderStart(edges, start, currentPage),\n        this.renderInterval(start, end, currentPage),\n        this.renderEnd(edges, end, pages, currentPage)\n      );\n    }\n  }]);\n\n  return Pagination;\n}(_react2.default.Component);\n\nPagination.defaultProps = {\n  pages: 1,\n  edges: 1,\n  displayedPages: 6,\n  currentPage: 1,\n  onChange: function onChange() {}\n};\nPagination.propTypes = {\n  pages: _react.PropTypes.number.isRequired,\n  edges: _react.PropTypes.number,\n  displayedPages: _react.PropTypes.number,\n  currentPage: _react.PropTypes.number.isRequired,\n  onChange: _react.PropTypes.func.isRequired\n};\nexports.default = Pagination;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/pagination/Pagination.jsx\n ** module id = 675\n ** module chunks = 21 29 31\n **/\n//# sourceURL=webpack:///./src/components/pagination/Pagination.jsx?");

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _PageLink = __webpack_require__(677);\n\nvar _PageLink2 = _interopRequireDefault(_PageLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PageLink = function PageLink(_ref) {\n  var _onClick = _ref.onClick;\n  var page = _ref.page;\n  var currentPage = _ref.currentPage;\n\n  var kind = 'common';\n  if (page === 0) {\n    kind = 'disable';\n  } else if (page === currentPage) {\n    kind = 'active';\n  }\n  return _react2.default.createElement(\n    'li',\n    { onClick: function onClick() {\n        return _onClick(page);\n      }, className: _PageLink2.default.pagelink },\n    _react2.default.createElement(\n      'span',\n      { key: page, className: _PageLink2.default[kind] },\n      page || '...'\n    )\n  );\n};\n\nPageLink.propTypes = {\n  currentPage: _react.PropTypes.number.isRequired,\n  onClick: _react.PropTypes.func.isRequired,\n  page: _react.PropTypes.number.isRequired\n};\nexports.default = PageLink;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/pagination/components/PageLink.jsx\n ** module id = 676\n ** module chunks = 21 29 31\n **/\n//# sourceURL=webpack:///./src/components/pagination/components/PageLink.jsx?");

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(678);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(508)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./PageLink.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./PageLink.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/pagination/components/PageLink.scss\n ** module id = 677\n ** module chunks = 21 29 31\n **/\n//# sourceURL=webpack:///./src/components/pagination/components/PageLink.scss?");

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(507)();\n// imports\n\n\n// module\nexports.push([module.id, \".PageLink__pagelink___2YYG- {\\n  display: inline-block;\\n  font-size: 1rem;\\n  vertical-align: top; }\\n\\n.PageLink__pagelink___2YYG-:nth-child(n+2) {\\n  margin-left: 5px; }\\n\\n.PageLink__pagelink___2YYG- span {\\n  display: inline-block;\\n  min-width: 16px;\\n  padding: 3px 5px;\\n  line-height: 20px;\\n  background: #f7f7f7;\\n  color: #666;\\n  text-align: center;\\n  box-sizing: content-box; }\\n\\n.PageLink__pagelink___2YYG- .PageLink__common___2agXM {\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 4px;\\n  border-bottom-color: rgba(0, 0, 0, 0.3);\\n  text-shadow: 0 1px 0 #fff;\\n  background-origin: border-box;\\n  background-image: -webkit-linear-gradient(top, #fff, #eee);\\n  background-image: linear-gradient(to bottom, #fff, #eee);\\n  cursor: pointer; }\\n\\n.PageLink__pagelink___2YYG- .PageLink__common___2agXM:hover {\\n  background-color: #fafafa;\\n  color: #666;\\n  outline: 0;\\n  background-image: none; }\\n\\n.PageLink__pagelink___2YYG- .PageLink__active___j_4hN {\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 4px;\\n  border-bottom-color: rgba(0, 0, 0, 0.4);\\n  background: #009dd8;\\n  color: #fff;\\n  box-sizing: content-box;\\n  background-image: -webkit-linear-gradient(top, #00b4f5, #008dc5);\\n  background-image: linear-gradient(to bottom, #00b4f5, #008dc5);\\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2); }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"pagelink\": \"PageLink__pagelink___2YYG-\",\n\t\"common\": \"PageLink__common___2agXM\",\n\t\"active\": \"PageLink__active___j_4hN\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./~/postcss-loader!./~/sass-loader!./src/components/pagination/components/PageLink.scss\n ** module id = 678\n ** module chunks = 21 29 31\n **/\n//# sourceURL=webpack:///./src/components/pagination/components/PageLink.scss?./~/css-loader?modules&importLoaders=1&localIdentName=%5Bname%5D__%5Blocal%5D___%5Bhash:base64:5%5D!./~/postcss-loader!./~/sass-loader");

/***/ }

});