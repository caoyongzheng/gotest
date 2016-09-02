webpackJsonp([22],{

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Room = __webpack_require__(681);\n\nvar _Room2 = _interopRequireDefault(_Room);\n\nvar _Login = __webpack_require__(683);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  chat: {\n    position: 'relative',\n    width: '100%',\n    height: '100%',\n    overflow: 'auto'\n  }\n};\n\nvar Chat = function (_React$Component) {\n  _inherits(Chat, _React$Component);\n\n  function Chat(props) {\n    _classCallCheck(this, Chat);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this, props));\n\n    _this.handleChangeUserName = function (username) {\n      _this.setState({\n        username: username\n      });\n    };\n\n    _this.state = {\n      username: ''\n    };\n    return _this;\n  }\n\n  _createClass(Chat, [{\n    key: 'render',\n    value: function render() {\n      var username = this.state.username;\n\n      return _react2.default.createElement(\n        'div',\n        { name: 'chat', style: styles.chat },\n        username ? _react2.default.createElement(_Room2.default, { username: username }) : _react2.default.createElement(_Login2.default, { onChange: this.handleChangeUserName })\n      );\n    }\n  }]);\n\n  return Chat;\n}(_react2.default.Component);\n\nmodule.exports = Chat;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/chat/Chat.js\n ** module id = 680\n ** module chunks = 22\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/chat/Chat.js?");

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _MyChat = __webpack_require__(682);\n\nvar _MyChat2 = _interopRequireDefault(_MyChat);\n\nvar _lodash = __webpack_require__(238);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  groupsStage: {\n    position: 'absolute',\n    width: '200px',\n    height: '100%',\n    left: 0,\n    top: 0,\n    backgroundColor: 'rgba(255, 148, 124, 0.45)'\n  },\n  group: {\n    position: 'relative',\n    width: '100%',\n    height: '30px',\n    cursor: 'pointer'\n  },\n  groupItem: {\n    position: 'absolute',\n    width: '100%',\n    height: '30px'\n  },\n  deleteItem: {\n    position: 'absolute',\n    right: 0,\n    height: '30px',\n    padding: '0 10px',\n    backgroundColor: 'rgb(0, 0, 0)'\n  },\n  msgStage: {\n    position: 'absolute',\n    height: '100%',\n    top: 0,\n    left: '200px',\n    right: '200px',\n    backgroundColor: 'rgb(255, 37, 37)'\n  },\n  msgView: {\n    position: 'absolute',\n    width: '100%',\n    top: 0,\n    bottom: '120px',\n    overflow: 'auto',\n    backgroundColor: 'rgb(249, 232, 61)'\n  },\n  msgPost: {\n    position: 'absolute',\n    width: '100%',\n    bottom: 0,\n    height: '120px',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    overflow: 'auto'\n  },\n  msgInput: {\n    height: '25px',\n    width: '75%',\n    border: 'solid 1px #ddd',\n    outline: 'none'\n  },\n  msgButton: {\n    height: '25px',\n    width: '40px',\n    border: 'solid 1px #ddd',\n    outline: 'none'\n  },\n  msg: {\n    width: '100%',\n    padding: '6px 10px',\n    color: '#000',\n    backgroundColor: 'rgb(55, 161, 18)',\n    border: 'solid 1px rgb(241, 244, 24)',\n    marginTop: '-1px'\n  },\n  membersStage: {\n    position: 'absolute',\n    width: '200px',\n    height: '100%',\n    right: 0,\n    top: 0,\n    backgroundColor: 'rgba(255, 148, 124, 0.45)'\n  }\n};\n\nvar Room = function (_React$Component) {\n  _inherits(Room, _React$Component);\n\n  function Room(props) {\n    _classCallCheck(this, Room);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Room).call(this, props));\n\n    _this.joinGroup = function (groupPath) {\n      _this.myChat.subscription(groupPath).handleSuccess(function () {\n        var group = {\n          path: groupPath,\n          msgs: [],\n          members: []\n        };\n        var groups = _this.state.groups;\n\n        groups[groupPath] = group;\n        _this.setState({\n          groups: groups\n        });\n        _this.listen(groupPath);\n      }).handleError(function () {\n        console.log('Failed to join group:' + groupPath);\n      });\n    };\n\n    _this.listen = function (groupPath) {\n      var accepter = _this.myChat.accept(groupPath);\n      accepter.handleSuccess(function (data) {\n        if (data.dataName === 'Msg') {\n          var g1 = _this.state.groups[groupPath];\n          g1.msgs.push(data.content);\n          _this.setState({\n            groups: _this.state.groups\n          });\n        } else if (data.dataName === 'Members') {\n          var g2 = _this.state.groups[groupPath];\n          g2.members = data.content;\n          _this.setState({\n            groups: _this.state.groups\n          });\n        }\n      });\n    };\n\n    _this.handleClickAdd = function () {\n      _this.joinGroup(_this.state.path);\n      _this.setState({\n        path: ''\n      });\n    };\n\n    _this.handleClickPost = function () {\n      var _this$state = _this.state;\n      var msg = _this$state.msg;\n      var active = _this$state.active;\n\n      if (!msg) {\n        return;\n      }\n      if (active) {\n        _this.myChat.broadcast(active, 'Msg', msg);\n      } else {\n        console.log('faild to send message,should select a group');\n      }\n    };\n\n    _this.clickGroup = function (i) {\n      _this.setState({\n        active: i\n      });\n    };\n\n    _this.handleExitGroup = function (e, path) {\n      e.preventDefault();\n      _this.myChat.send({\n        path: path,\n        kind: 'ExitGroup'\n      });\n    };\n\n    _this.handleChangeMsg = function (e) {\n      _this.setState({\n        msg: e.target.value\n      });\n    };\n\n    _this.handleChangePath = function (e) {\n      _this.setState({\n        path: e.target.value\n      });\n    };\n\n    _this.state = {\n      groups: {},\n      active: '',\n      path: '',\n      msg: ''\n    };\n    return _this;\n  }\n\n  _createClass(Room, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.myChat = new _MyChat2.default('ws://localhost:5050/?id=' + this.props.username);\n\n      this.myChat.onopen(function () {\n        console.log('Connection stated');\n      });\n\n      this.myChat.onclose(function () {\n        console.log('Connection closed');\n      });\n    }\n  }, {\n    key: 'renderGroups',\n    value: function renderGroups(groups, active) {\n      var _this2 = this;\n\n      return _lodash2.default.map(groups, function (g, i) {\n        var activeStyle = {};\n        if (i === active) {\n          activeStyle = { backgroundColor: 'rgb(40, 157, 223)' };\n        }\n        return _react2.default.createElement(\n          'div',\n          { style: [styles.group, activeStyle], key: i },\n          _react2.default.createElement(\n            'div',\n            {\n              name: 'group',\n              style: styles.groupItem,\n              onClick: function onClick() {\n                _this2.clickGroup(i);\n              }\n            },\n            i\n          ),\n          _react2.default.createElement(\n            'div',\n            {\n              style: styles.deleteItem,\n              onClick: function onClick(e) {\n                _this2.handleExitGroup(e, i);\n              }\n            },\n            'X'\n          )\n        );\n      });\n    }\n  }, {\n    key: 'renderMsg',\n    value: function renderMsg(msgs) {\n      return msgs.map(function (m, i) {\n        return _react2.default.createElement(\n          'div',\n          { key: i, style: styles.msg },\n          m\n        );\n      });\n    }\n  }, {\n    key: 'renderMembers',\n    value: function renderMembers(members) {\n      return members.map(function (member, i) {\n        return _react2.default.createElement(\n          'div',\n          { key: i },\n          member\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state;\n      var path = _state.path;\n      var msg = _state.msg;\n      var groups = _state.groups;\n      var active = _state.active;\n\n      var _ref = groups[active] ? groups[active] : { msgs: [], members: [] };\n\n      var msgs = _ref.msgs;\n      var members = _ref.members;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'section',\n          { name: 'groupsStage', style: styles.groupsStage },\n          this.renderGroups(groups, active),\n          _react2.default.createElement('input', { value: path, onChange: this.handleChangePath }),\n          _react2.default.createElement(\n            'button',\n            { type: 'button', style: styles.msgButton, onClick: this.handleClickAdd },\n            'Add'\n          )\n        ),\n        _react2.default.createElement(\n          'section',\n          { name: 'msgStage', style: styles.msgStage },\n          _react2.default.createElement(\n            'div',\n            { name: 'msgView', style: styles.msgView },\n            this.renderMsg(msgs)\n          ),\n          _react2.default.createElement(\n            'div',\n            { name: 'msgPost', style: styles.msgPost },\n            _react2.default.createElement('input', {\n              value: msg,\n              onChange: this.handleChangeMsg,\n              style: styles.msgInput\n            }),\n            _react2.default.createElement(\n              'button',\n              {\n                type: 'button',\n                style: styles.msgButton,\n                onClick: this.handleClickPost\n              },\n              'Post'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'section',\n          { name: 'membersStage', style: styles.membersStage },\n          this.renderMembers(members)\n        )\n      );\n    }\n  }]);\n\n  return Room;\n}(_react2.default.Component);\n\nRoom.propTypes = {\n  username: _react.PropTypes.string.isRequired\n};\n\nexports.default = Room;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/chat/components/Room/Room.jsx\n ** module id = 681\n ** module chunks = 22\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/chat/components/Room/Room.jsx?");

/***/ },

/***/ 682:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Accepter = function Accepter(path, kind) {\n  var _this = this;\n\n  _classCallCheck(this, Accepter);\n\n  this.handleSuccess = function (handleFn) {\n    _this.handleSuccessFn = handleFn;\n    return _this;\n  };\n\n  this.onSuccess = function (data) {\n    if (_this.handleSuccessFn) {\n      _this.handleSuccessFn(data);\n    }\n  };\n\n  this.handleError = function (handleErrFn) {\n    _this.handleErrorFn = handleErrFn;\n    return _this;\n  };\n\n  this.onError = function (data) {\n    if (_this.handleErrorFn) {\n      _this.handleErrorFn(data);\n    }\n  };\n\n  this.path = path;\n  this.kind = kind;\n};\n\nvar MyChat = function MyChat(url) {\n  var _this2 = this;\n\n  _classCallCheck(this, MyChat);\n\n  this.broadcast = function (path, dataName, content) {\n    _this2.send({\n      path: path,\n      dataName: dataName,\n      content: content,\n      kind: 'Broadcast'\n    });\n  };\n\n  this.subscription = function (path) {\n    if (_this2.webSocket.readyState === 0) {\n      _this2.toSubscriptions(function () {\n        _this2.send({\n          path: path,\n          kind: 'Subscription'\n        });\n      });\n    } else {\n      _this2.send({\n        path: path,\n        kind: 'Subscription'\n      });\n    }\n    return _this2.accept(path, 'Subscription');\n  };\n\n  this.accept = function (path) {\n    var kind = arguments.length <= 1 || arguments[1] === undefined ? 'Broadcast' : arguments[1];\n\n    var accepter = new Accepter(path, kind);\n    _this2.accepts[path + ':' + kind] = accepter;\n    return accepter;\n  };\n\n  this.onopen = function (handleOpen) {\n    _this2.handleOpen = handleOpen;\n  };\n\n  this.onclose = function (handleClose) {\n    _this2.handleClose = handleClose;\n  };\n\n  this.send = function (obj) {\n    _this2.webSocket.send(JSON.stringify(obj));\n  };\n\n  this.webSocket = new WebSocket(url);\n  this.accepts = {};\n  this.toSubscriptions = [];\n  this.webSocket.onmessage = function (e) {\n    var data = JSON.parse(e.data);\n    var accept = _this2.accepts[data.path + ':' + data.kind];\n    if (accept) {\n      if (data.status && accept.onSuccess) {\n        accept.onSuccess(data);\n      } else if (!data.status && accept.onError) {\n        accept.onError(data);\n      }\n    }\n  };\n  this.webSocket.onopen = function () {\n    if (_this2.handleOpen) {\n      _this2.handleOpen();\n    }\n    _this2.toSubscriptions.forEach(function (subscription) {\n      subscription();\n    });\n  };\n  this.webSocket.onclose = function () {\n    if (_this2.handleClose) {\n      _this2.handleClose();\n    }\n  };\n};\n\nexports.default = MyChat;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/chat/components/MyChat.jsx\n ** module id = 682\n ** module chunks = 22\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/chat/components/MyChat.jsx?");

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  login: {\n    display: 'block',\n    margin: 'auto',\n    width: '400px',\n    height: '300px',\n    backgroundColor: 'rgb(255, 255, 255)',\n    color: '#000'\n  }\n};\n\nvar Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));\n\n    _this.handleChangeUserName = function (e) {\n      _this.setState({\n        username: e.target.value\n      });\n    };\n\n    _this.handleLogin = function () {\n      _this.props.onChange(_this.state.username);\n    };\n\n    _this.state = {\n      username: ''\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'render',\n    value: function render() {\n      var username = this.state.username;\n\n      return _react2.default.createElement(\n        'div',\n        { name: 'login', style: styles.login },\n        _react2.default.createElement(\n          'div',\n          { name: 'title' },\n          '登录'\n        ),\n        _react2.default.createElement(\n          'div',\n          { name: 'form' },\n          _react2.default.createElement(\n            'label',\n            { htmlFor: 'user' },\n            'Username'\n          ),\n          _react2.default.createElement('input', { value: username, onChange: this.handleChangeUserName }),\n          _react2.default.createElement(\n            'div',\n            { name: 'submit' },\n            _react2.default.createElement(\n              'button',\n              { onClick: this.handleLogin },\n              '登录'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\nLogin.propTypes = {\n  onChange: _react.PropTypes.func.isRequired\n};\nexports.default = Login;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/chat/components/Login/Login.jsx\n ** module id = 683\n ** module chunks = 22\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/chat/components/Login/Login.jsx?");

/***/ }

});