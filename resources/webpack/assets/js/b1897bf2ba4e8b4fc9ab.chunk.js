webpackJsonp([35],{

/***/ 862:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(238);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DataStore = function DataStore(data) {\n  var _this = this;\n\n  _classCallCheck(this, DataStore);\n\n  this.get = function (key) {\n    return _this.data[key];\n  };\n\n  this.set = function (key, value) {\n    _this.data[key] = value;\n  };\n\n  this.del = function (key) {\n    if (!_lodash2.default.isEmpty(_this.data[key])) {\n      delete _this.data[key];\n    }\n  };\n\n  this.data = data || {};\n};\n\nvar DataStores = function DataStores() {\n  var _this2 = this;\n\n  _classCallCheck(this, DataStores);\n\n  this.add = function (key) {\n    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    if (_lodash2.default.isEmpty(_this2.datastores[key])) {\n      _this2.datastores[key] = new DataStore(data);\n    }\n    return _this2.datastores[key];\n  };\n\n  this.get = function (key) {\n    return _this2.datastores[key];\n  };\n\n  this.del = function (key) {\n    if (!_lodash2.default.isEmpty(_this2.datastores[key])) {\n      delete _this2.datastores[key];\n    }\n  };\n\n  this.datastores = {};\n};\n\nexports.default = new DataStores();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/utils/stores/datastores.jsx\n ** module id = 862\n ** module chunks = 33 34 35\n **/\n//# sourceURL=webpack:///./src/entry/utils/stores/datastores.jsx?");

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _NovelReader = __webpack_require__(868);\n\nvar _NovelReader2 = _interopRequireDefault(_NovelReader);\n\nvar _novel = __webpack_require__(870);\n\nvar _novel2 = _interopRequireDefault(_novel);\n\nvar _DataStores = __webpack_require__(862);\n\nvar _DataStores2 = _interopRequireDefault(_DataStores);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NovelReader = function (_Component) {\n  _inherits(NovelReader, _Component);\n\n  function NovelReader(props) {\n    _classCallCheck(this, NovelReader);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NovelReader).call(this, props));\n\n    _this.dataStore = _DataStores2.default.add('novelreader');\n    _this.dataStore.set('novel', _novel2.default);\n    return _this;\n  }\n\n  _createClass(NovelReader, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      _DataStores2.default.del('novelreader');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var children = this.props.children;\n\n      return _react2.default.createElement(\n        'div',\n        { className: _NovelReader2.default.stage },\n        _react2.default.createElement(\n          'div',\n          { className: _NovelReader2.default.readerStage },\n          children\n        )\n      );\n    }\n  }]);\n\n  return NovelReader;\n}(_react.Component);\n\nmodule.exports = NovelReader;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/novel/reader/NovelReader.jsx\n ** module id = 867\n ** module chunks = 35\n **/\n//# sourceURL=webpack:///./src/entry/routes/novel/reader/NovelReader.jsx?");

/***/ },

/***/ 868:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(869);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(296)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./NovelReader.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./NovelReader.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/novel/reader/NovelReader.scss\n ** module id = 868\n ** module chunks = 35\n **/\n//# sourceURL=webpack:///./src/entry/routes/novel/reader/NovelReader.scss?");

/***/ },

/***/ 869:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(295)();\n// imports\n\n\n// module\nexports.push([module.id, \".NovelReader__stage___-vtOg {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: #E5E4DB; }\\n\\n.NovelReader__readerStage___1q076 {\\n  margin: auto;\\n  width: 900px; }\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"stage\": \"NovelReader__stage___-vtOg\",\n\t\"readerStage\": \"NovelReader__readerStage___1q076\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./~/postcss-loader!./~/sass-loader!./src/entry/routes/novel/reader/NovelReader.scss\n ** module id = 869\n ** module chunks = 35\n **/\n//# sourceURL=webpack:///./src/entry/routes/novel/reader/NovelReader.scss?./~/css-loader?modules&importLoaders=1&localIdentName=%5Bname%5D__%5Blocal%5D___%5Bhash:base64:5%5D!./~/postcss-loader!./~/sass-loader");

/***/ },

/***/ 870:
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"name\": \"修真四万年\",\n\t\"author\": \"卧牛真人\",\n\t\"sections\": [\n\t\t{\n\t\t\t\"id\": \"1\",\n\t\t\t\"name\": \"第一章 法宝坟墓\",\n\t\t\t\"time\": \"2015-03-16 15:22\",\n\t\t\t\"paragraphs\": [\n\t\t\t\t\"铁锈湖。\",\n\t\t\t\t\"联邦第二十三号特种垃圾处理场。\",\n\t\t\t\t\"也被称为“法宝坟墓”。\",\n\t\t\t\t\"随着修真文明的不断发展，昔日高高在上、只有修真者才能驱使的法宝走进了千家万户，成为普通人居家旅行、学习工作的必备工具。\",\n\t\t\t\t\"在带来生活便利的同时，也产生了大量的报废法宝和金属垃圾。\",\n\t\t\t\t\"这些垃圾法宝大多残留着不少灵力，容易造成辐射污染，构筑法宝的符阵又极不稳定，甚至有爆炸的风险，如果放任不管，会对环境造成极大的破坏。\",\n\t\t\t\t\"所以，在联邦每一个大城市周边，总会设置若干个“特种垃圾处理场”，专门处理报废法宝。\",\n\t\t\t\t\"第二十三号特种垃圾处理场，位于联邦修炼重镇“浮戈城”南郊。\",\n\t\t\t\t\"昏黄的天空下，一片污染成紫色的沼泽，散发出浓郁的恶臭，金属碎片组成的山峰犹如上百条恐龙从沼泽中露出脊背，山峰上横七竖八插满了支离破碎的飞剑，飞剑旁边坐着锈迹斑斑的晶石傀儡，空洞的眼窝早已熄灭了灵火，只剩下以灵能为食的小虫从里面探出脑袋，小心翼翼地打量着这片危机四伏的“法宝墓地”。\",\n\t\t\t\t\"“轰！”\",\n\t\t\t\t\"不远处，一座垃圾山峰内部，废弃法宝的符阵破裂，残留其中的灵力瞬间爆炸，将半座山峰轰上天空。\",\n\t\t\t\t\"无数金属构件如天女散花，四散飞溅，又引发了周围几座垃圾山的连环崩塌，扬起漫天烟尘，犹如妖魔起舞，遮蔽住整片天空。\",\n\t\t\t\t\"这里，似乎是生命的禁区，只有微不足道的蟑螂和蠕虫才把这里当成乐园。\",\n\t\t\t\t\"不过……\",\n\t\t\t\t\"李耀蛰伏在一座垃圾山后面，舔了舔干裂的嘴唇，土黄色的风衣上满是尘土，令他和环境融为一体。\",\n\t\t\t\t\"瞥了一眼不远处冉冉升起的爆炸云，少年清澈的眼神中没有流露出半点情绪，波澜不兴。\",\n\t\t\t\t\"只是当泥土和金属碎片溅射到他藏身的垃圾山时，他才稍稍往垃圾堆深处缩了一缩，同时戴上了足够遮住半张脸的风镜。\",\n\t\t\t\t\"“来了！”\",\n\t\t\t\t\"当手腕上的灵子手表发出轻轻的震动时，少年精神一振，嘴角勾起了一抹略带邪气的笑意。\",\n\t\t\t\t\"下午三点五十二分三十八秒，每天例行的垃圾倾倒时间，也是李耀这种“垃圾虫”的狂欢时刻！\",\n\t\t\t\t\"佩戴在他左腕上的灵子手表，是修炼宗门“飞灵宗”三年前推出的狩猎专用型号，被他在垃圾山中捡到之后用了足足两个月才修好。\",\n\t\t\t\t\"除了计时之外，还拥有非常强大的功能，能够记录特殊频率的震动，当附近传来特定震动时就通知主人。\",\n\t\t\t\t\"这一功能，原本是用来提醒狩猎者附近可能有强大妖兽存在。\",\n\t\t\t\t\"而经过李耀的改装，却变成了提醒他垃圾船即将出现。\",\n\t\t\t\t\"片刻之后，伴随着一阵微不足道的嗡嗡声，北方地平线上出现了十几个黑点。\",\n\t\t\t\t\"此时爆炸带来的遮天蔽日的烟尘仍未散去，十几个小黑点混杂其中，根本分辨不清楚。\",\n\t\t\t\t\"李耀耸了耸鼻尖，手指轻触风镜侧面的一道符文，“唰”，风镜表面泛起一片血红。\",\n\t\t\t\t\"在红光的扫描下，隐匿于烟尘之后的垃圾船被勾勒出了圆滚滚的身影，一清二楚。\",\n\t\t\t\t\"而灵子手表的狩猎功能，也牢牢锁定住了其中一艘垃圾船的特殊震动频率。\",\n\t\t\t\t\"“1327号垃圾船，就是你了！”\",\n\t\t\t\t\"李耀从出生到十岁，十年间一直呆在法宝坟墓，对这里的每一寸土地和天空中的每一艘垃圾船都了若指掌，这艘“1327号垃圾船”专门负责搜集浮戈城中“上东区”的垃圾。\",\n\t\t\t\t\"上东区是城里最奢华的富人区，有不少修真者居住，他们丢弃的法宝也是最有价值的。\",\n\t\t\t\t\"有不少法宝甚至完好无损，只是因为稍稍有些陈旧，或者推出了新一代产品，就被修真者和富豪们满不在乎地丢弃。\",\n\t\t\t\t\"对李耀来说，这哪里是什么垃圾船，简直是满载金矿的藏宝船！\",\n\t\t\t\t\"“嗖！”\",\n\t\t\t\t\"李耀双足发力，如弹丸般射出，在垃圾山之间急驰狂奔，冲向烟尘，冲向“1327号垃圾船”！\",\n\t\t\t\t\"四周是摇摇欲坠的垃圾山，脚下是“咕噜咕噜”冒着气泡的毒沼泽，李耀却像是山林中最灵巧的猴子，不时在垃圾山上某处突出部位一借力，每一次蹬踏都能弹出几十米远，动作行云流水，赏心悦目。\",\n\t\t\t\t\"“李耀，你这混蛋，又和老子抢食！”\",\n\t\t\t\t\"就在这时，从几座垃圾山后面窜出了十几条身影，和李耀打扮差不多，只是没有佩戴他那么先进的血红风镜和灵子手表。\",\n\t\t\t\t\"这些人手里都攥着铲子和铁棍，来势汹汹。\",\n\t\t\t\t\"他们和李耀一样，都是靠“第二十三号特种垃圾处理场”混饭吃的垃圾虫。\",\n\t\t\t\t\"有利益的地方就有斗争，一船船的废弃法宝，对高高在上的修真者来说也许只是垃圾，可是对这些底层贫民来说，却是生存的希望，李耀是法宝坟墓里混得最好的垃圾虫，自然也是大部分垃圾虫的眼中钉，肉中刺。\",\n\t\t\t\t\"李耀却是浑不在意，嘿嘿一笑，腰部骤然发力，身形诡异一折，竟然毫无征兆地转了九十度，闪开了面前一名横眉怒目的肥胖少年，还乘势在胖脸上狠狠踩了一脚，趁着这一脚，整个人又掠出了三四十米。\",\n\t\t\t\t\"“肥龙，大家出来混饭吃，比的就是谁更快，你该减肥啦！”\",\n\t\t\t\t\"肥胖少年脸上一个巨大的红印，鼻子都快陷进肥肉，气得哇哇乱叫，指挥手下穷追不舍，一行人很快进入了烟尘区。\",\n\t\t\t\t\"这里刚刚发生过爆炸，极不稳定，几十座垃圾山随时都会崩塌，连穷凶极恶的肥龙一伙少年进入此地都不由得慢下脚步，眼睁睁看着李耀风驰电掣。\",\n\t\t\t\t\"肥龙不由啐了一口。\",\n\t\t\t\t\"“这王八蛋，还真是出了名的要钱不要命，老天要是有眼，一个雷劈死……”\",\n\t\t\t\t\"话音未落，李耀不远处的一座垃圾山内部再次发生爆炸，上万吨金属构件和残破法宝如山洪暴发一般冲下来！\",\n\t\t\t\t\"“这么灵！”肥龙和一干少年都瞠目结舌，不知所措！\",\n\t\t\t\t\"却听烟尘中传来一声尖叫：“小黑，救命！”\",\n\t\t\t\t\"一道比夜空更幽深的黑芒电射而出，在金属山洪中“滴溜溜”转了一圈，随即冲上半空，却是一柄锈迹斑斑、剑刃缺口、通体漆黑的飞剑，这柄飞剑拥有如黑色羽翼般张开的巨大护手，李耀就像溺水者死死抓住稻草，十分笨拙地趴在飞剑上，周身黑芒缭绕，冲向天穹！\",\n\t\t\t\t\"天空中，十几艘垃圾船已经显露出了巨大的身形，每一艘垃圾船都有数百米长，圆滚滚的身形如同传说中支撑大地的乌龟，“龟壳”上密密麻麻镌刻着上万道符文，灵光闪动，五彩斑斓，帮助这些上万吨重的大家伙抵御重力的侵袭。\",\n\t\t\t\t\"“哗啦！”\",\n\t\t\t\t\"一只只“大乌龟”腹部的舱门打开，涌出铺天盖地的金属构件和残破法宝，狠狠砸向地面。\",\n\t\t\t\t\"一时间整片天地间的灵力都疯狂搅动起来，掀起了一场惊涛骇浪！\",\n\t\t\t\t\"就连上万吨重的垃圾船都在灵力浪潮中左摇右晃，剧烈颠簸，不得不拼命分开，减轻干扰。\",\n\t\t\t\t\"肥龙等人更是不敢轻易靠近，唯恐被波及。\",\n\t\t\t\t\"李耀依旧骑着黑色飞剑在灵力浪潮中左突右冲，样子虽然狼狈到了极点，却灵活得像是一条泥鳅。\",\n\t\t\t\t\"他当然不敢正面对抗惊涛骇浪，却凭借着十几年的生存经验努力寻找灵力潮汐之间相对平静的安全区域，只为了尽量靠近垃圾法宝的落点，近水楼台先得月。\",\n\t\t\t\t\"终于——\",\n\t\t\t\t\"将近十分钟的倾倒结束，垃圾船发出巨兽般的轰鸣，调转方向，懒洋洋地回航，烟尘也逐渐消散。\",\n\t\t\t\t\"肥龙好不容易才爬进垃圾密集的倾倒中心点，就看见李耀舒舒服服地坐在一座崭新的垃圾山上，笑眯眯地看着他。\",\n\t\t\t\t\"“妈的！”肥龙脸上横肉乱抖，心底却颇为纠结。\",\n\t\t\t\t\"李耀选择的这座垃圾山颇为巧妙，并不是最大的一座垃圾山，看上去也不像是物资最丰富的一座。\",\n\t\t\t\t\"在四周还散布着好几十座垃圾山，蕴藏着价值连城的垃圾法宝。\",\n\t\t\t\t\"而垃圾虫，可不止他们两伙……\",\n\t\t\t\t\"如果继续在这里和李耀纠缠，说不定就被别的垃圾虫渔翁得利。\",\n\t\t\t\t\"四周隐隐绰绰已经出现了其他垃圾虫的身影，不少垃圾山上都响起了欢呼声，那是有人发现了值钱的东西。\",\n\t\t\t\t\"更何况……\",\n\t\t\t\t\"肥龙听说，李耀这个臭小子，还是浮戈城里有名的“赤霄派附属第二高中”的学生。\",\n\t\t\t\t\"赤霄派是联邦南方知名的大宗派，实力强横，高手众多。\",\n\t\t\t\t\"李耀虽然未必学到什么真传，却也不是三拳两脚可以对付的，否则也不会单枪匹马在法宝坟墓闯荡了十几年，仍旧活蹦乱跳，还搏出了“秃鹫”的外号！\",\n\t\t\t\t\"可是就这么走了，他的脸又往哪里搁？他的鼻子可还嵌在肉里呢！\",\n\t\t\t\t\"心中正在纠结，一阵劲风掠过，肥龙下意识伸手一抄，入手冰凉，却是一具拳头大小的报废晶脑。\",\n\t\t\t\t\"李耀笑眯眯道：“肥龙，大家都是出来讨生活，不就是上次抢了你一台‘星光’级晶脑，又不是杀了你老爸，至于这么不死不休吗？喏，我刚刚找到了一台‘青龙门’炼制的‘骁龙17型’晶脑，是最先进型号，每秒钟可以运算超过五千个念头，虽然烧坏了，我估计也能卖个三四千块，就当我孝敬你肥龙大哥，从此咱们扯平，怎么样？”\",\n\t\t\t\t\"“你……”肥龙没想到李耀会来这么一出，顿时愣了，有些不敢相信地挠了挠脸上的肥肉。\",\n\t\t\t\t\"“喂，看看那边，‘野狼帮’的人快到了，他们可不像我这个独行客，绝对会把几十座垃圾山都吃干抹净，连颗螺丝都不会给你留下！”李耀冲着西边指了指。\",\n\t\t\t\t\"肥龙脸色一变，眯起眼睛观察半天，终于下定决心，冲李耀一挑大拇哥，挤出一句：\",\n\t\t\t\t\"“好小子，你有一套！我们走，赶紧扫货！”\",\n\t\t\t\t\"一班垃圾虫四散开来，冲向四面八方的垃圾山。\",\n\t\t\t\t\"“呼……”\",\n\t\t\t\t\"李耀长长舒了一口气，一屁股坐在垃圾堆里，额头滚落豆大的汗珠，一张笑脸瞬间哭丧起来。\",\n\t\t\t\t\"“死胖子，我好不容易发现的‘骁龙’级晶脑，白白便宜了你！”\",\n\t\t\t\t\"“你等着吧，我‘秃鹫李耀’的东西是这么好拿的么？总有一天要你吃了我的给我吐出来，拿了我的给我还回来，还要加上利息，按高利贷算，让你知道知道，为什么大家都叫我‘要钱不要命的秃鹫’！”\",\n\t\t\t\t\"“不行，必须加快速度，‘野狼帮’那帮杂碎，可是比肥龙更不讲道理的！”\",\n\t\t\t\t\"李耀一把拽下风镜，挂在脖子上，搓了搓手，双眼放光，舔了舔嘴唇，一头扎进新鲜出炉的垃圾堆！\",\n\t\t\t\t\"<a href=\\\"http://www.qidian.com\\\">起点中文网 www.qidian.com 欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在起点原创！</a><a>手机用户请到m.qidian.com阅读。</a>\"\n\t\t\t]\n\t\t}\n\t]\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/novel/reader/novel.json\n ** module id = 870\n ** module chunks = 35\n **/\n//# sourceURL=webpack:///./src/entry/routes/novel/reader/novel.json?");

/***/ }

});