
(function(modules) { 
   // The module cache
   var installedModules = {};
   // The require function
   function __webpack_require__(moduleId) {
       // Check if module is in cache
       if(installedModules[moduleId])
           return installedModules[moduleId].exports;
       // Create a new module (and put it into the cache)
       var module = installedModules[moduleId] = {
           exports: {},
           id: moduleId,
           loaded: false
       };
       // Execute the module function
       modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
       // Flag the module as loaded
       module.loaded = true;
       // Return the exports of the module
       return module.exports;
   }
   // expose the modules object (__webpack_modules__)
   __webpack_require__.m = modules;
   // expose the module cache
   __webpack_require__.c = installedModules;
   // __webpack_public_path__
   __webpack_require__.p = "/";
   // Load entry module and return exports
   
   return __webpack_require__(9);
})([
/***** module 0 start *****/
/***** src\mydraw\mydraw.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"mydraw-top clearfix\">\n    <div class=\"head-img\"><img alt=\"\" :src=\"(drawImg)\"/></div>\n    <p class=\"user-name\">hduhduiav</p>\n    <div class=\"all-num\">\n      <p>作品<span>2132121</span></p>\n      <p>被喜欢<span>2132121</span></p>\n    </div>\n  </div>\n  <ul class=\"draw-ul clearfix\">\n    <li data-num=\"1\"  @:tap=\"changeNum($event)\" :class=\"'draw-text ' + (_num==1 ? 'active' : '')\">我的作品</li>\n    <li data-num=\"2\"  @:tap=\"changeNum($event)\" :class=\"'draw-text ' + (_num==2 ? 'active' : '')\">喜欢作品</li>\n  </ul>\n  <div class=\"list-all clearfix\">\n    <dl class=\"my-list clearfix\">\n      <dt><img alt=\"\" :src=\"(drawImg)\"/></dt>\n      <dd>\n        <p class=\"list-p\">fdsfsf</p>\n        <p class=\"list-like\"><span class=\"icon-like icon-icon_smalllike_nor\"></span><span class=\"num-txt\">1231</span></p>\n      </dd>\n    </dl>\n    <dl class=\"my-list clearfix\">\n      <dt><img alt=\"\" :src=\"(drawImg)\"/></dt>\n      <dd>\n        <p class=\"list-p\">fdsfsf</p>\n        <p class=\"list-like\"><span class=\"icon-like icon-icon_smalllike_nor\"></span><span class=\"num-txt\">1231</span></p>\n      </dd>\n    </dl>\n    <dl class=\"my-list clearfix\">\n      <dt><img alt=\"\" :src=\"(drawImg)\"/></dt>\n      <dd>\n        <p class=\"list-p\">fdsfsf</p>\n        <p class=\"list-like\"><span class=\"icon-like icon-icon_smalllike_nor\"></span><span class=\"num-txt\">1231</span></p>\n      </dd>\n    </dl>\n  </div>\n"},/***** module 0 end *****/


/***** module 1 start *****/
/***** src\drafts\drafts.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div>\n    <ul class=\"drafts-ul\">\n      <div v-for=\"(index, item) in (list)\">\n        <li>\n          <div class=\"drafts-item inner txt\"  @:touchstart=\"touchS($event)\" @:touchmove=\"touchM($event)\" @:touchend=\"touchE($event)\" :data-index=\"(index)\" :style=\"(item.txtStyle)\">\n            <p class=\"drafts-img\"><img :src=\"(item.image)\" :data-index=\"(index)\"/></p>\n            <p class=\"drafts-title\" :data-index=\"(index)\">{{item.txt}}</p>\n          </div>\n          <p  @:tap=\"delItem($event)\" class=\"inner del\" :data-index=\"(index)\">删除</p>\n        </li>\n      </div>\n    </ul>\n  </div>\n"},/***** module 1 end *****/


/***** module 2 start *****/
/***** src\drawdetail\drawdetail.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <p class=\"drawdetail-title\">见覅九点就搜集见覅九点就搜集见覅九点就搜集见覅九点就搜集见覅九点就搜集见覅九点就搜集</p>\n  <dl class=\"drawdetail-deigner clearfix\">\n    <dt>\n      <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n    </dt>\n    <dd>\n      <p>名字没回名字没回各自名字没回各自名字没回各自名字没回各自各自</p>\n      <span class=\"icon-like icon-icon_biglike_nor2\"></span><span class=\"drawlike-num\">2132131</span>\n    </dd>\n  </dl>\n  <div class=\"detail-banner\">\n    <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n  </div>\n  <ul class=\"detail-share clearfix\">\n    <li>\n      <span><img src=\"images/icon_pengyouquan_nor.png\"/></span><span>分享给好友</span>\n    </li>\n    <li>\n      <span><img src=\"images/icon_pic_nor.png\"/></span><span>分享给好友</span>\n    </li>\n  </ul>\n"},/***** module 2 end *****/


/***** module 3 start *****/
/***** src\picsave\picsave.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n    <div class=\"share-banner clearfix\">\n      <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n    </div>\n    <dl class=\"share-dl clearfix\">\n      <dt>\n        <img :src=\"(drawImg)\"/>\n        <p>长按识别二维码</p>\n      </dt>\n      <dd>\n        <p class=\"share-title\">猜猜哪个才是真的我猜猜哪个才是真的我</p>\n        <p class=\"share-img\"><img :src=\"(drawImg)\"/><span>234342343423434234342343423434</span></p>\n      </dd>\n    </dl>\n"},/***** module 3 end *****/


/***** module 4 start *****/
/***** src\share\share.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n    <div class=\"share-banner clearfix\">\n      <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n    </div>\n    <dl class=\"share-dl clearfix\">\n      <dt>\n        <img :src=\"(drawImg)\"/>\n        <p>长按识别二维码</p>\n      </dt>\n      <dd>\n        <p class=\"share-title\">猜猜哪个才是真的我猜猜哪个才是真的我</p>\n        <p class=\"share-img\"><img :src=\"(drawImg)\"/><span>234342343423434234342343423434</span></p>\n      </dd>\n    </dl>\n"},/***** module 4 end *****/


/***** module 5 start *****/
/***** src\rankinglist\rankinglist.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"ranking-list clearfix\">\n    <p class=\"ranking-num num1\">1</p>\n    <dl class=\"ranking-dl\">\n      <dt>\n        <span><img alt=\"\" :src=\"(drawImg)\"/></span>\n        <span><img alt=\"\" src=\"/images/\"/></span>\n      </dt>\n      <dd>\n        <p class=\"ranking-title\">和广发华福和广发华福和广发华福</p>\n        <p class=\"ranking-designer clearfix\"><img alt=\"\" :src=\"(drawImg)\"/><span class=\"designer-name\">和广发华福和广发华福和广发华福</span></p>\n        <p class=\"ranking-like\"><span class=\"icon-like icon-icon_biglike_nor2\"></span><span class=\"like-num\">12</span></p>\n      </dd>\n    </dl>\n  </div>\n  <div class=\"ranking-list clearfix\">\n    <p class=\"ranking-num num1\">1</p>\n    <dl class=\"ranking-dl\">\n      <dt>\n        <span><img alt=\"\" :src=\"(drawImg)\"/></span>\n        <span><img alt=\"\" src=\"/images/\"/></span>\n      </dt>\n      <dd>\n        <p class=\"ranking-title\">和广发华福和广发华福和广发华福</p>\n        <p class=\"ranking-designer clearfix\"><img alt=\"\" :src=\"(drawImg)\"/><span class=\"designer-name\">和广发华福和广发华福和广发华福</span></p>\n        <p class=\"ranking-like\"><span class=\"icon-like icon-icon_biglike_nor2\"></span><span class=\"like-num\">12</span></p>\n      </dd>\n    </dl>\n  </div>\n  <div class=\"ranking-list clearfix\">\n    <p class=\"ranking-num num1\">1</p>\n    <dl class=\"ranking-dl\">\n      <dt>\n        <span><img alt=\"\" :src=\"(drawImg)\"/></span>\n        <span><img alt=\"\" src=\"/images/\"/></span>\n      </dt>\n      <dd>\n        <p class=\"ranking-title\">和广发华福和广发华福和广发华福</p>\n        <p class=\"ranking-designer clearfix\"><img alt=\"\" :src=\"(drawImg)\"/><span class=\"designer-name\">和广发华福和广发华福和广发华福</span></p>\n        <p class=\"ranking-like\"><span class=\"icon-like icon-icon_biglike_nor2\"></span><span class=\"like-num\">12</span></p>\n      </dd>\n    </dl>\n  </div>\n"},/***** module 5 end *****/


/***** module 6 start *****/
/***** src\drawlist\drawlist.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"drawlist\">\n    <dl class=\"list-message clearfix\">\n      <dt><img alt=\"\" :src=\"(drawImg)\"/></dt>\n      <dd>\n        <p class=\"message-title\">猜猜哪一个才是真实的我</p>\n        <p class=\"message-desc\">猜猜系列主题扩展创意比赛,可爱呆萌的手绘人物形象，由你想象。</p>\n        <p class=\"message-join clearfix\"><span class=\"icon-icon_number_black\"></span>97.5万</p>\n      </dd>\n    </dl>\n  </div>\n  <div class=\"border-top\"></div>\n  <div class=\"draw-list-ul\">\n    <ul class=\"ul-list clearfix\">\n      <li>\n        <p class=\"list-image\"><img alt=\"\" :src=\"(drawImg)\"/></p>\n        <span class=\"icon-suo icon-icon_pin_nor\"></span>\n        <p class=\"like-show\"><span class=\"icon-like icon-icon_whitelike_nor\"></span><span class=\"like-num\">231231</span></p>\n      </li>\n      <li>\n        <p class=\"list-image\"><img alt=\"\" :src=\"(drawImg)\"/></p>\n        <span class=\"icon-suo icon-icon_pin_nor\"></span>\n        <p class=\"like-show\"><span class=\"icon-like icon-icon_whitelike_nor\"></span><span class=\"like-num\">231231</span></p>\n      </li>\n      \n      <li>\n        <p class=\"list-image\"><img alt=\"\" :src=\"(drawImg)\"/></p>\n        <span class=\"icon-suo icon-icon_pin_nor\"></span>\n        <p class=\"like-show\"><span class=\"icon-like icon-icon_whitelike_nor\"></span><span class=\"like-num\">231231</span></p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"index-bottom\">\n    —<span>我是有底线的</span>—\n  </div>\n"},/***** module 6 end *****/


/***** module 7 start *****/
/***** src\index\index.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container\">\n    <swiper indicator-active-color=\"#fff\" :indicator-dots=\"(indicatorDots)\" :autoplay=\"(autoplay)\" :interval=\"(interval)\" :duration=\"(duration)\">\n      <div v-for=\"(index, item) in (imgUrls)\" :key=\"(index)\">\n        <a url=\"/detail/detail\">\n          <swiper-item>\n            <img :src=\"(item)\"/>\n          </swiper-item>\n        </a>\n      </div>\n    </swiper>\n  </div>\n  <div class=\"icon\">\n    <p class=\"chart-title\">排行榜</p>\n    <a class=\"join-more\" url=\"#\">更多</a>\n  </div>\n  <div class=\"scroll_box\"> \n    <scroll-view class=\"scroll-view_x\" scroll-x=\"scroll-x\" style=\"width: auto;overflow:hidden;\">\n      <div v-for=\"(index, item) in (imgUrls)\" :key=\"(index)\"> \n        <div class=\"item_list\">\n          <img :src=\"(item)\"/>\n        </div>\n      </div>\n    </scroll-view>\n  </div>\n  <div class=\"list-view\">\n    <div v-for=\"(index, item) in (imgUrls)\" :key=\"(index)\"> \n      <div class=\"hot-images\">\n          <p class=\"black-layer\"></p>\n          <img class=\"join-image\" :src=\"(item)\"/>\n          <div class=\"join-bg\">\n            <p class=\"join-title\">\n              <span>21321312313211323121312312312</span>\n            </p>\n            <p class=\"join-messgae\">\n              <span class=\"icon-icon_canyuliang_white\"></span>\n              <span class=\"join-number\">123</span>\n            </p>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"index-bottom\">\n    —<span>我是有底线的</span>—\n  </div>\n"},/***** module 7 end *****/


/***** module 8 start *****/
/***** src\detail\detail.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"detail-banner\">\n    <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n  </div>\n  <div class=\"detail-title\">\n    这是标题\n  </div>\n  <div class=\"detail-content\">\n    <div class=\"detail-text\">zjesjo sdjfdasfklidsjfkldsjfkldjsflkijrkg,xklermgjxkfcmdlsklfsfgnfcdmk.asd,kgfjnmkldnfkdsmfgnfkldsmfjaklmfkldsmfdkls</div>\n    <div class=\"detail-image\">\n      <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n      <img src=\"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg\"/>\n    </div>\n    <div class=\"detail-text\">zjesjo sdjfdasfklidsjfkldsjfkldjsflkijrkg,xklermgjxkfcmdlsklfsfgnfcdmk.asd,kgfjnmkldnfkdsmfgnfkldsmfjaklmfkldsmfdkls</div>\n    <div class=\"detail-text\">zjesjo sdjfdasfklidsjfkldsjfkldjsflkijrkg,xklermgjxkfcmdlsklfsfgnfcdmk.asd,kgfjnmkldnfkdsmfgnfkldsmfjaklmfkldsmfdkls</div>\n    <div class=\"detail-text\">zjesjo sdjfdasfklidsjfkldsjfkldjsflkijrkg,xklermgjxkfcmdlsklfsfgnfcdmk.asd,kgfjnmkldnfkdsmfgnfkldsmfjaklmfkldsmfdkls</div>\n    <div class=\"detail-text\">zjesjo sdjfdasfklidsjfkldsjfkldjsflkijrkg,xklermgjxkfcmdlsklfsfgnfcdmk.asd,kgfjnmkldnfkdsmfgnfkldsmfjaklmfkldsmfdkls</div>\n  \n  </div>\n"},/***** module 8 end *****/


/***** module 9 start *****/
/***** src\app.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

__wepy_require(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { setStore } from 'wepy-redux'

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['mydraw/mydraw', //  个人中心页
      'drafts/drafts', //  垃圾箱
      'drawdetail/drawdetail', //  作品详情页
      'picsave/picsave', //  图片模板页
      'share/share', //  作品分享页
      'rankinglist/rankinglist', //  排行榜
      'drawlist/drawlist', //  作品列表页
      'index/index', //  首页
      'detail/detail' //  详情页
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.app);

exports.default = _default;
__wepy_require(10).default.$createApp(_default, {"routes":{"mydraw/mydraw":12,"drafts/drafts":13,"drawdetail/drawdetail":14,"picsave/picsave":15,"share/share":16,"rankinglist/rankinglist":17,"drawlist/drawlist":18,"index/index":19,"detail/detail":20},"style":[39,40,41,42,43,44,45,46,47,48],"components":{},"apis":{}});

},/***** module 9 end *****/


/***** module 10 start *****/
/***** node_modules\wepy-web\lib\wepy.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _app = __wepy_require(21);

var _app2 = _interopRequireDefault(_app);

var _page = __wepy_require(22);

var _page2 = _interopRequireDefault(_page);

var _component = __wepy_require(23);

var _component2 = _interopRequireDefault(_component);

var _event = __wepy_require(24);

var _event2 = _interopRequireDefault(_event);

var _base = __wepy_require(25);

var _base2 = _interopRequireDefault(_base);

var _util = __wepy_require(26);

var _util2 = _interopRequireDefault(_util);

var _mixin = __wepy_require(27);

var _mixin2 = _interopRequireDefault(_mixin);

var _wx = __wepy_require(28);

var _wx2 = _interopRequireDefault(_wx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    env: 'web',
    event: _event2.default,
    app: _app2.default,
    component: _component2.default,
    page: _page2.default,
    mixin: _mixin2.default,

    $createApp: _base2.default.$createApp,
    $createPage: _base2.default.$createPage,

    $isEmpty: _util2.default.$isEmpty,
    $isEqual: _util2.default.$isEqual,
    $isDeepEqual: _util2.default.$isDeepEqual,
    $has: _util2.default.$has,
    $extend: _util2.default.$extend,
    $isPlainObject: _util2.default.$isPlainObject,
    $copy: _util2.default.$copy
};
},/***** module 10 end *****/


/***** module 11 start *****/
/***** node_modules\wepy-async-function\index.js *****/
function(module, exports, __wepy_require) {/**
 * Tencent is pleased to support the open source community by making WePY available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */


var g = __wepy_require(29);

if (!g.Promise) {
  // IOS 10.0.1 may cause IOS crash.
  g.Promise = __wepy_require(30);
}
if (!g.regeneratorRuntime) {
  g.regeneratorRuntime = __wepy_require(31);
}

},/***** module 11 end *****/


/***** module 12 start *****/
/***** src\mydraw\mydraw.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mydraw = function (_wepy$page) {
  _inherits(Mydraw, _wepy$page);

  function Mydraw() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mydraw);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mydraw.__proto__ || Object.getPrototypeOf(Mydraw)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      _num: 1,
      list: []
    }, _this.methods = {
      changeNum: function changeNum(e) {
        var self = this;
        self._num = e.target.dataset.num;
        if (self._num == 1) {
          _wepy2.default.request({
            url: '/v1/paint/like/list/' + 1,
            header: {
              'content-type': 'json'
            },
            success: function success(data) {
              self.list = data.data;
              self.$apply();
            }
          });
        } else {
          _wepy2.default.request({
            url: '/v1/paint/like/list/' + 1,
            header: {
              'content-type': 'json'
            },
            success: function success(data) {
              self.list = data.data;
              self.$apply();
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Mydraw;
}(_wepy2.default.page);

exports.default = Mydraw;

exports.default.template=__wepy_require(0);
},/***** module 12 end *****/


/***** module 13 start *****/
/***** src\drafts\drafts.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drafts = function (_wepy$page) {
  _inherits(Drafts, _wepy$page);

  function Drafts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drafts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drafts.__proto__ || Object.getPrototypeOf(Drafts)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '草稿箱'
    }, _this.data = {
      delBtnWidth: 100,
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      list: [{
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除1'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除2'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除3'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除1'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除2'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除3'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除1'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除2'
      }, {
        txtStyle: '',
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        txt: '向左删除3'
      }]
    }, _this.methods = {
      touchS: function touchS(e) {
        if (e.touches.length == 1) {
          this.data.startX = e.touches[0].clientX;
        }
      },
      touchM: function touchM(e) {
        if (e.touches.length == 1) {
          var moveX = e.touches[0].clientX;
          var disX = this.data.startX - moveX;
          var delBtnWidth = this.data.delBtnWidth;
          var txtStyle = '';
          if (disX == 0 || disX < 0) {
            txtStyle = 'left:0px';
          } else if (disX > 0) {
            txtStyle = 'left:-' + disX + 'px';
            if (disX >= delBtnWidth) {
              txtStyle = 'left:-' + delBtnWidth + 'px';
            }
          }
          var index = e.target.dataset.index;
          var list = this.data.list;
          list[index].txtStyle = txtStyle;
          this.list = list;
        }
      },
      touchE: function touchE(e) {
        if (e.changedTouches.length == 1) {
          var endX = e.changedTouches[0].clientX;
          var disX = this.data.startX - endX;
          var delBtnWidth = this.data.delBtnWidth;
          var txtStyle = disX > delBtnWidth / 2 ? 'left:-' + delBtnWidth + 'px' : 'left:0px';
          var index = e.target.dataset.index;
          var list = this.data.list;
          list[index].txtStyle = txtStyle;
          this.list = list;
        }
      },
      getEleWidth: function getEleWidth(w) {
        var real = 0;
        try {
          var res = wx.getSystemInfoSync().windowWidth;
          var scale = 750 / 2 / (w / 2);
          console.log(scale);
          real = Math.floor(res / scale);
          return real;
        } catch (e) {
          return false;
        }
      },
      initEleWidth: function initEleWidth() {
        var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
        this.delBtnWidth = delBtnWidth;
      },
      delItem: function delItem(e) {
        var index = e.target.dataset.index;
        var list = this.data.list;
        list.splice(index, 1);
        this.list = list;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Drafts;
}(_wepy2.default.page);

exports.default = Drafts;

exports.default.template=__wepy_require(1);
},/***** module 13 end *****/


/***** module 14 start *****/
/***** src\drawdetail\drawdetail.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawdetail = function (_wepy$page) {
  _inherits(Drawdetail, _wepy$page);

  function Drawdetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawdetail.__proto__ || Object.getPrototypeOf(Drawdetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品详情页'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Drawdetail;
}(_wepy2.default.page);

exports.default = Drawdetail;

exports.default.template=__wepy_require(2);
},/***** module 14 end *****/


/***** module 15 start *****/
/***** src\picsave\picsave.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picsave = function (_wepy$page) {
  _inherits(Picsave, _wepy$page);

  function Picsave() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Picsave);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picsave.__proto__ || Object.getPrototypeOf(Picsave)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品分享页'
    }, _this.data = {
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Picsave;
}(_wepy2.default.page);

exports.default = Picsave;

exports.default.template=__wepy_require(3);
},/***** module 15 end *****/


/***** module 16 start *****/
/***** src\share\share.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_wepy$page) {
  _inherits(Share, _wepy$page);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品分享页'
    }, _this.data = {
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Share;
}(_wepy2.default.page);

exports.default = Share;

exports.default.template=__wepy_require(4);
},/***** module 16 end *****/


/***** module 17 start *****/
/***** src\rankinglist\rankinglist.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rankinglist = function (_wepy$page) {
  _inherits(Rankinglist, _wepy$page);

  function Rankinglist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rankinglist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rankinglist.__proto__ || Object.getPrototypeOf(Rankinglist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '排名列表页'
    }, _this.data = {
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Rankinglist;
}(_wepy2.default.page);

exports.default = Rankinglist;

exports.default.template=__wepy_require(5);
},/***** module 17 end *****/


/***** module 18 start *****/
/***** src\drawlist\drawlist.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawlist = function (_wepy$page) {
  _inherits(Drawlist, _wepy$page);

  function Drawlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Drawlist.__proto__ || Object.getPrototypeOf(Drawlist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品列表页'
    }, _this.data = {
      drawImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Drawlist;
}(_wepy2.default.page);

exports.default = Drawlist;

exports.default.template=__wepy_require(6);
},/***** module 18 end *****/


/***** module 19 start *****/
/***** src\index\index.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;

exports.default.template=__wepy_require(7);
},/***** module 19 end *****/


/***** module 20 start *****/
/***** src\detail\detail.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(10);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '详情页'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Detail;
}(_wepy2.default.page);

exports.default = Detail;

exports.default.template=__wepy_require(8);
},/***** module 20 end *****/


/***** module 21 start *****/
/***** node_modules\wepy-web\lib\app.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _native = __wepy_require(32);

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$addons = {};
        this.$interceptors = {};
        this.$pages = {};
    }

    _class.prototype.$init = function $init(wepy) {
        this.initAPI(wepy);
        this.$wxapp = getApp();
    };

    _class.prototype.use = function use(addon) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (typeof addon === 'string' && this[addon]) {
            this.$addons[addon] = 1;
            this[addon](args);
        } else {
            this.$addons[addon.name] = new addon(args);
        }
    };

    _class.prototype.intercept = function intercept(api, provider) {
        this.$interceptors[api] = provider;
    };

    _class.prototype.promisify = function promisify() {};

    _class.prototype.requestfix = function requestfix() {};

    _class.prototype.initAPI = function initAPI(wepy) {
        var self = this;
        var noPromiseMethods = {
            stopRecord: true,
            pauseVoice: true,
            stopVoice: true,
            pauseBackgroundAudio: true,
            stopBackgroundAudio: true,
            showNavigationBarLoading: true,
            hideNavigationBarLoading: true,
            createAnimation: true,
            createContext: true,
            createCanvasContext: true,
            hideKeyboard: true,
            stopPullDownRefresh: true
        };

        Object.getOwnPropertyNames(wx).forEach(function (key) {
            if (!noPromiseMethods[key] && key.substr(0, 2) !== 'on' && !/\w+Sync$/.test(key)) {
                Object.defineProperty(_native2.default, key, {
                    get: function get() {
                        return function (obj) {
                            obj = obj || {};
                            if (self.$interceptors[key] && self.$interceptors[key].config) {
                                var rst = self.$interceptors[key].config.call(self, obj);
                                if (rst === false) {
                                    if (self.$addons.promisify) {
                                        return Promise.reject('aborted by interceptor');
                                    } else {
                                        obj.fail && obj.fail('aborted by interceptor');
                                        return;
                                    }
                                }
                                obj = rst;
                            }
                            if (key === 'request') {
                                obj = typeof obj === 'string' ? { url: obj } : obj;
                            }
                            if (self.$addons.promisify) {
                                return new Promise(function (resolve, reject) {
                                    var bak = {};
                                    ['fail', 'success', 'complete'].forEach(function (k) {
                                        bak[k] = obj[k];
                                        obj[k] = function (res) {
                                            if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                                res = self.$interceptors[key][k].call(self, res);
                                            }
                                            if (k === 'success') resolve(res);else if (k === 'fail') reject(res);
                                        };
                                    });
                                    wx[key](obj);
                                });
                            } else {
                                var bak = {};
                                ['fail', 'success', 'complete'].forEach(function (k) {
                                    bak[k] = obj[k];
                                    obj[k] = function (res) {
                                        if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                            res = self.$interceptors[key][k].call(self, res);
                                        }
                                        bak[k] && bak[k].call(self, res);
                                    };
                                });
                                wx[key](obj);
                            }
                        };
                    }
                });
                wepy[key] = _native2.default[key];
            } else {
                Object.defineProperty(_native2.default, key, {
                    get: function get() {
                        return function () {
                            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                                args[_key2] = arguments[_key2];
                            }

                            return wx[key].apply(wx, args);
                        };
                    }
                });
                wepy[key] = _native2.default[key];
            }
        });
    };

    return _class;
}();

exports.default = _class;
},/***** module 21 end *****/


/***** module 22 start *****/
/***** node_modules\wepy-web\lib\page.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _native = __wepy_require(32);

var _native2 = _interopRequireDefault(_native);

var _component2 = __wepy_require(23);

var _component3 = _interopRequireDefault(_component2);

var _util = __wepy_require(26);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_component) {
    _inherits(_class, _component);

    function _class() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _component.call.apply(_component, [this].concat(args))), _this), _this.$isComponent = false, _this.$preloadData = {}, _this.$prefetchData = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _class.prototype.$init = function $init(wxpage, $parent) {

        this.$parent = $parent;
        this.$root = this;
        if (!$parent.$wxapp) {
            $parent.$wxapp = getApp();
        }
        this.$wxapp = $parent.$wxapp;
        _component.prototype.$init.call(this, wxpage, this);
    };

    _class.prototype.onLoad = function onLoad() {
        _component.prototype.onLoad.call(this);
    };

    _class.prototype.$preload = function $preload(key, data) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            var k = void 0;
            for (k in key) {
                this.$preload(k, key[k]);
            }
        } else {
            this.$preloadData[key] = data;
        }
    };

    _class.prototype.$route = function $route(type, url) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (typeof url === 'string') {
            var s = url + '?';
            if (params) {
                var k = void 0;
                for (k in params) {
                    s += k + '=' + params[k] + '&';
                }
            }
            s = s.substring(0, s.length - 1);
            url = { url: s };
        } else {
            params = _util2.default.$getParams(url.url);
        }
        wx._previousPage = this;
        var realPath = _util2.default.$resolvePath(this.$vm.$route.path, url.url.split('?')[0]);
        var goTo = this.$parent.$pages[realPath];
        if (goTo && goTo.onPrefetch) {
            var prevPage = this.$parent.__prevPage__;
            var preloadData = {};
            if (prevPage && Object.keys(prevPage.$preloadData).length > 0) {
                preloadData = prevPage.$preloadData;
            }
            goTo.$prefetchData = goTo.onPrefetch(params, { from: this, preload: preloadData });
        }
        return _native2.default[type](url);
    };

    _class.prototype.$redirect = function $redirect(url, params) {
        return this.$route('navigateTo', url, params);
    };

    _class.prototype.$navigate = function $navigate(url, params) {
        return this.$route('navigateTo', url, params);
    };

    _class.prototype.$switch = function $switch(url) {
        if (typeof url === 'string') url = { url: url };

        return _native2.default.switchTab(url);
    };

    _class.prototype.$back = function $back(delta) {
        var p = delta || {};
        if (typeof p === 'number') p = { delta: p };

        if (!p.delta) p.delta = 1;

        return _native2.default.navigateBack(p);
    };

    return _class;
}(_component3.default);

exports.default = _class;
},/***** module 22 end *****/


/***** module 23 start *****/
/***** node_modules\wepy-web\lib\component.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _event = __wepy_require(24);

var _event2 = _interopRequireDefault(_event);

var _util = __wepy_require(26);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = {
    check: function check(t, val) {
        switch (t) {
            case String:
                return typeof val === 'string';
            case Number:
                return typeof val === 'number';
            case Boolean:
                return typeof val === 'boolean';
            case Function:
                return typeof val === 'function';
            case Object:
                return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            case Array:
                return toString.call(val) === '[object Array]';
            default:
                return val instanceof t;
        }
    },
    build: function build(props) {
        var rst = {};
        if (typeof props === 'string') {
            rst[props] = {};
        } else if (toString.call(props) === '[object Array]') {
            props.forEach(function (p) {
                rst[p] = {};
            });
        } else {
            Object.keys(props).forEach(function (p) {
                if (typeof props[p] === 'function') {
                    rst[p] = {
                        type: [props[p]]
                    };
                } else if (toString.call(props[p]) === '[object Array]') {
                    rst[p] = {
                        type: props[p]
                    };
                } else rst[p] = props[p];

                if (rst[p].type && toString.call(rst[p].type) !== '[object Array]') rst[p].type = [rst[p].type];
            });
        }
        return rst;
    },
    valid: function valid(props, key, val) {
        var _this = this;

        var valid = false;
        if (props[key]) {
            if (!props[key].type) {
                valid = true;
            } else {
                return props[key].type.some(function (t) {
                    return _this.check(t, val);
                });
            }
        }
        return valid;
    },
    getValue: function getValue(props, key, value) {
        var rst;
        if (value !== undefined && this.valid(props, key, value)) {
            rst = value;
        } else if (typeof props[key].default === 'function') {
            rst = props[key].default();
        } else rst = props[key].default;
        return props[key].coerce ? props[key].coerce(rst) : rst;
    }
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$com = {};
        this.$mixins = [];
        this.$isComponent = true;
        this.$prefix = '';
        this.$mappingProps = {};
        this.data = {};
        this.methods = {};
    }

    _class.prototype.$init = function $init($wxpage, $root, $parent) {
        var _this2 = this;

        var self = this;

        this.$wxpage = $wxpage;
        if (this.$isComponent) {
            this.$root = $root || this.$root;
            this.$parent = $parent || this.$parent;
            this.$wxapp = this.$root.$parent.$wxapp;
            this.$app = this.$root.$app;
        }

        var coms = Object.getOwnPropertyNames(this.$com);
        if (coms.length) {
            coms.forEach(function (name) {
                _this2.$com[name].$init($wxpage, $root, _this2);
            });
        }

        return;
    };

    _class.prototype.initMixins = function initMixins() {
        var _this3 = this;

        if (this.mixins) {
            if (typeof this.mixins === 'function') {
                this.mixins = [this.mixins];
            }
        } else {
            this.mixins = [];
        }
        this.mixins.forEach(function (mix) {
            var inst = new mix();
            inst.init(_this3);
            _this3.$mixins.push(inst);
        });
    };

    _class.prototype.onLoad = function onLoad() {};

    _class.prototype.setData = function setData(k, v) {
        if (typeof k === 'string') {
            this.$vm[k] = v;
        }
        for (var t in k) {
            this.$vm[t] = k[t];
        }
    };

    _class.prototype.getWxPage = function getWxPage() {
        return this.$wxpage;
    };

    _class.prototype.getCurrentPages = function getCurrentPages() {
        return this.$wxpage.getCurrentPages();
    };

    _class.prototype.$getComponent = function $getComponent(com) {
        var _this4 = this;

        if (typeof com === 'string') {
            if (com.indexOf('/') === -1) {
                return this.$com[com];
            } else if (com === '/') {
                return this.$parent;
            } else {
                var path = com.split('/');
                path.forEach(function (s, i) {
                    if (i === 0) {
                        if (s === '') {
                            com = _this4.$root;
                        } else if (s === '.') {
                            com = _this4;
                        } else if (s === '..') {
                            com = _this4.$parent;
                        } else {
                            com = _this4.$getComponent(s);
                        }
                    } else if (s) {
                        com = com.$com[s];
                    }
                });
            }
        }
        return (typeof com === 'undefined' ? 'undefined' : _typeof(com)) !== 'object' ? null : com;
    };

    _class.prototype.$invoke = function $invoke(com, method) {
        com = this.$getComponent(com);

        if (!com) {
            throw new Error('Invalid path: ' + com);
        }

        var fn = com.methods ? com.methods[method] : '';

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        if (typeof fn === 'function') {
            var $evt = new _event2.default('', this, 'invoke');
            var rst = fn.apply(com, args.concat($evt));
            com.$apply();
            return rst;
        } else {
            fn = com[method];
        }

        if (typeof fn === 'function') {
            return fn.apply(com, args);
        } else {
            throw new Error('Invalid method: ' + method);
        }
    };

    _class.prototype.$broadcast = function $broadcast(evtName) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var com = this;
        var $evt = typeof evtName === 'string' ? new _event2.default(evtName, this, 'broadcast') : $evt;
        var queue = [com];

        while (queue.length && $evt.active) {
            var current = queue.shift();

            var _loop = function _loop(_c) {
                _c = current.$com[_c];
                queue.push(_c);
                var fn = getEventsFn(_c, evtName);
                if (fn) {
                    _c.$apply(function () {
                        fn.apply(_c, args.concat($evt));
                    });
                }
                if (!$evt.active) return 'break';
                c = _c;
            };

            for (var c in current.$com) {
                var _ret = _loop(c);

                if (_ret === 'break') break;
            }
        }
    };

    _class.prototype.$emit = function $emit(evtName) {
        var _this5 = this;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        var com = this;
        var source = this;
        var $evt = new _event2.default(evtName, source, 'emit');

        if (this.$parent.$events && this.$parent.$events[this.$name]) {
            var method = this.$parent.$events[this.$name]['v-on:' + evtName];
            if (method && this.$parent.methods) {
                var _fn = this.$parent.methods[method];
                if (typeof _fn === 'function') {
                    this.$parent.$apply(function () {
                        _fn.apply(_this5.$parent, args.concat($evt));
                    });
                    return;
                } else {
                    throw new Error('Invalid method from emit, component is ' + this.$parent.$name + ', method is ' + method + '. Make sure you defined it already.\n');
                }
            }
        }

        var _loop2 = function _loop2() {
            var comContext = com;
            var fn = getEventsFn(comContext, evtName);
            fn && comContext.$apply(function () {
                fn.apply(comContext, args.concat($evt));
            });
            com = comContext.$parent;
        };

        while (com && com.$isComponent !== undefined && $evt.active) {
            _loop2();
        }
    };

    _class.prototype.$apply = function $apply(fn) {
        if (typeof fn === 'function') {
            fn.call(this);
            this.$apply();
        } else {
            return true;
            if (this.$$phase) {
                this.$$phase = '$apply';
            } else {
                this.$digest();
            }
        }
    };

    _class.prototype.$digest = function $digest() {
        var _this6 = this;

        var k = void 0;
        var originData = this.$data;
        this.$$phase = '$digest';
        while (this.$$phase) {
            var readyToSet = {};
            for (k in originData) {
                if (!_util2.default.$isEqual(this[k], originData[k])) {
                    readyToSet[this.$prefix + k] = this[k];
                    this.data[k] = this[k];
                    originData[k] = _util2.default.$copy(this[k], true);
                    if (this.$mappingProps[k]) {
                        Object.keys(this.$mappingProps[k]).forEach(function (changed) {
                            var mapping = _this6.$mappingProps[k][changed];
                            if ((typeof mapping === 'undefined' ? 'undefined' : _typeof(mapping)) === 'object') {
                                _this6.$parent.$apply();
                            } else if (changed === 'parent' && !_util2.default.$isEqual(_this6.$parent.$data[mapping], _this6[k])) {
                                _this6.$parent[mapping] = _this6[k];
                                _this6.$parent.data[mapping] = _this6[k];
                                _this6.$parent.$apply();
                            } else if (changed !== 'parent' && !_util2.default.$isEqual(_this6.$com[changed].$data[mapping], _this6[k])) {
                                _this6.$com[changed][mapping] = _this6[k];
                                _this6.$com[changed].data[mapping] = _this6[k];
                                _this6.$com[changed].$apply();
                            }
                        });
                    }
                }
            }
            if (Object.keys(readyToSet).length) {
                if (this.computed) {
                    for (k in this.computed) {
                        var _fn2 = this.computed[k],
                            val = _fn2.call(this);
                        if (!_util2.default.$isEqual(this[k], val)) {
                            readyToSet[this.$prefix + k] = val;
                            this[k] = _util2.default.$copy(val, true);
                        }
                    }
                }
                this.setData(readyToSet);
            }
            this.$$phase = this.$$phase === '$apply' ? '$digest' : false;
        }
    };

    return _class;
}();

exports.default = _class;


function getEventsFn(comContext, evtName) {
    var fn = comContext.events ? comContext.events[evtName] : undefined;
    var typeFn = typeof fn === 'undefined' ? 'undefined' : _typeof(fn);
    var fnFn = void 0;
    if (typeFn === 'string') {
        var method = comContext.methods && comContext.methods[fn];
        if (typeof method === 'function') {
            fnFn = method;
        }
    } else if (typeFn === 'function') {
        fnFn = fn;
    }
    return fnFn;
}
},/***** module 23 end *****/


/***** module 24 start *****/
/***** node_modules\wepy-web\lib\event.js *****/
function(module, exports, __wepy_require) {"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(name, source, type) {
        _classCallCheck(this, _class);

        this.active = true;


        this.name = name;
        this.source = source;
        this.type = type;
    }

    _class.prototype.$destroy = function $destroy() {
        this.active = false;
    };

    _class.prototype.$transfor = function $transfor(wxevent) {
        var k = 0;
        for (k in wxevent) {
            this[k] = wxevent[k];
        }
    };

    return _class;
}();

exports.default = _class;
},/***** module 24 end *****/


/***** module 25 start *****/
/***** node_modules\wepy-web\lib\base.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __wepy_require(33);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __wepy_require(34);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _event = __wepy_require(24);

var _event2 = _interopRequireDefault(_event);

var _word = __wepy_require(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageEvent = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage'];

var addStyle = function addStyle(stylelist) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];

    var css = '';
    stylelist.forEach(function (id) {
        css += __wepy_require(id) + '\r\n';
    });

    var cssNode = document.createTextNode(css);
    styleElement.appendChild(cssNode);
    head.appendChild(styleElement);
    styleElement.type = 'text/css';
    return styleElement;
};

var $createMixin = function $createMixin(com, mixinClass) {
    var obj = {};
    var mixin = new mixinClass();
    for (var k in mixin) {
        if (k === 'data') {
            obj.data = function () {
                return mixin.data;
            };
        } else if (k === 'methods') {
            obj[k] = {};
            for (var method in mixin[k]) {
                obj[k][method] = mixin[k][method].bind(com);
            }
        } else {
            obj[k] = mixin[k];
        }
    }
    var proto = Object.getPrototypeOf(mixin);
    Object.getOwnPropertyNames(proto).forEach(function (k) {
        if (k !== 'constructor') {
            com[k] = proto[k];
        }
    });
    return obj;
};

var $createComponent = function $createComponent(com, template) {

    var k = void 0,
        vueObject = {};

    vueObject.template = template;
    vueObject.computed = {};

    var comData = Object.assign({}, com.data);

    Object.getOwnPropertyNames(com.computed || {}).forEach(function (key) {
        if (com.computed[key].name === 'mappedState') {
            comData[key] = com.computed[key].call(com);
        } else {
            vueObject.computed[key] = com.computed[key];
        }
    });
    vueObject.data = function () {
        return comData;
    };

    vueObject.components = {};
    vueObject.methods = {};

    Object.getOwnPropertyNames(com.components || {}).forEach(function (name) {
        var cClass = com.components[name];
        var child = new cClass();

        child.$name = name;

        com.$com[name] = child;
        vueObject.components[name] = $createComponent(child, cClass.template);
    });

    Object.getOwnPropertyNames(com.methods || {}).forEach(function (method) {
        var fn = com.methods[method];
        vueObject.methods[method] = function () {
            for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
            }

            var e = arg[arg.length - 1];

            if (!e) {
                e = this.$arguments[0];
            }
            var evt = new _event2.default('system', com, e.type);
            evt.$transfor(e);
            if (evt.type === 'input') {
                evt.detail = {};
                evt.detail.value = evt.srcElement.value;
            }
            arg[arg.length - 1] = evt;

            if (com.$vm !== this) {
                com.$vm = this;
                com.$index = this.$parent.$children.indexOf(this);
                if (this.$parent && this.$parent.$parent && this.$parent.$parent.$children) {
                    com.$parent.$index = this.$parent.$parent.$children.indexOf(this.$parent);
                }
            }
            fn.apply(com, arg);
        };
    });

    if (_typeof(com.mixins) === 'object' && com.mixins.constructor === Array) {
        vueObject.mixins = com.mixins.map(function (mixin) {
            return $createMixin(com, mixin);
        });
    } else if (typeof com.mixins === 'function') {
        vueObject.mixins = [$createMixin(com, mixin)];
    }

    vueObject.props = com.props;

    vueObject.watch = com.watch;
    vueObject.events = com.events;

    vueObject.created = function () {
        com.$wxpage = this;
        com.$vm = this;
        this.$wepy = com;

        if (!com.$isComponent) {
            wx._currentPage = com;
            wx._currentPage.__route__ = this.$route.path;
            wx._currentPage.__wxWebviewId__ = 0;

            var share = typeof com.onShareAppMessage === 'funciton' ? com.onShareAppMessage() : null;
            if (share) {
                wx.__initShare && wx.__initShare(share);
            } else {
                wx.__hideShare && wx.__hideShare();
            }
        }

        if (typeof com.onLoad === 'function') {
            var preload = void 0;
            var prefetch = void 0;
            if (wx._previousPage) {
                if (Object.getOwnPropertyNames(wx._previousPage.$preloadData).length) {
                    preload = wx._previousPage.$preloadData;
                    wx._previousPage.$preloadData = {};
                }
                if (Object.getOwnPropertyNames(wx._previousPage.$prefetchData).length) {
                    prefetch = wx._previousPage.$prefetchData;
                    wx._previousPage.$prefetchData = {};
                }
            }
            var args = {};
            if (preload) {
                args.preload = preload;
            }
            if (prefetch) {
                args.prefetch = prefetch;
            }
            com.onLoad.call(com, com.$vm.$route.query, args);
        }
    };

    vueObject.ready = function () {
        com.$wxpage = this;
        com.$vm = this;

        if (typeof com.onShow === 'function') {
            com.onShow.call(com);
        }
    };
    var definedProperties = {};
    [].concat(Object.getOwnPropertyNames(com.props || {})).concat(Object.getOwnPropertyNames(com.computed || {})).concat(Object.getOwnPropertyNames(com.data || {})).forEach(function (v) {
        v = (0, _word.camelize)(v);
        if (definedProperties[v]) {
            throw 'Cannot redefine property "' + v + '" in component ' + com.$name;
        }
        Object.defineProperty(com, v, {
            get: function get() {
                return com.$vm[v];
            },
            set: function set(val) {
                com.$vm[v] = val;
            }
        });
    });
    return vueObject;
};

exports.default = {
    $createApp: function $createApp(appClass, config, appConfig) {
        var k = void 0,
            routes = [];

        var app = new appClass();

        app.$appConfig = appConfig;

        this.platform = wx.__platform;
        app.$components = [];
        app.$apis = [];

        addStyle(config.style);

        for (k in config.components) {
            app.$components.push(k);
            var com = __wepy_require(config.components[k]).default;
            com.name = 'wepy-' + com.name;
            _vue2.default.component('wepy-' + k, com);
        }

        var _loop = function _loop() {
            app.$apis.push(k);
            var apiMod = __wepy_require(config.apis[k]);
            if (apiMod.default) {
                Object.defineProperty(wx, k, {
                    get: function get() {
                        return apiMod.getter(_vue2.default.extend(apiMod.default));
                    }
                });
            } else {
                Object.defineProperty(wx, k, {
                    get: function get() {
                        return apiMod.getter();
                    }
                });
            }
        };

        for (k in config.apis) {
            _loop();
        }

        if (!this.$instance) {
            app.$init(this);
            this.$instance = app;
        }

        _vue2.default.use(_vueRouter2.default);

        var router = new _vueRouter2.default();
        var index = '';

        for (k in config.routes) {
            var tmp = {};
            if (!index) index = k;
            tmp['/' + k] = {
                component: this.$createPage(__wepy_require(config.routes[k]).default, '/' + k)
            };
            router.map(tmp);
        }
        router.redirect({
            '*': '/' + index
        });
        router.start({}, '#app');

        router.beforeEach(function (trans) {
            window.scrollTo(0, 0);
            trans.next();
        });

        window.$router = router;

        if (typeof app.onLaunch === 'function') {
            app.onLaunch();
        }
        if (typeof app.onShow === 'function') {
            console.warn('onShow is not implemented in web');
        }
        if (typeof app.onHide === 'function') {
            console.warn('onHide is not implemented in web');
        }
    },
    $createPage: function $createPage(pageClass, pagePath) {

        var page = new pageClass();

        if (pagePath) this.$instance.$pages[pagePath] = page;

        page.$name = pageClass.name || 'unnamed';
        page.$app = this.$instance;

        var vueObject = $createComponent(page, pageClass.template);

        page.$init(_vue2.default, this.$instance, this.$instance);

        wx._currentPages = wx._currentPages || [];
        wx._currentPages.push(page);
        page.__route__ = pagePath;
        page.__wxWebviewId__ = 0;

        return vueObject;
    }
};
},/***** module 25 end *****/


/***** module 26 start *****/
/***** node_modules\wepy-web\lib\util.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
    $isEmpty: function $isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },
    $isEqual: function $isEqual(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;

        if (a !== a) return b !== b;

        if (!a || !b) return a === b;

        var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
        if (type !== 'function' && type !== 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return false;
        return this.$isDeepEqual(a, b, aStack, bStack);
    },
    $isDeepEqual: function $isDeepEqual(a, b, aStack, bStack) {
        var self = this;

        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) return +b !== +b;

                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
            case '[object Symbol]':
                var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
                return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return a === b;

            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
                return false;
            }
        }

        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        if (areArrays) {
            length = a.length;
            if (length !== b.length) return false;

            while (length--) {
                if (!self.$isEqual(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            var keys = Object.keys(a),
                key;
            length = keys.length;

            if (Object.keys(b).length !== length) return false;
            while (length--) {
                key = keys[length];
                if (!(self.$has(b, key) && self.$isEqual(a[key], b[key], aStack, bStack))) return false;
            }
        }

        aStack.pop();
        bStack.pop();
        return true;
    },
    $has: function $has(obj, path) {
        if (toString.call(path) !== '[object Array]') {
            return obj && hasOwnProperty.call(obj, path);
        }
        var length = path.length;
        for (var i = 0; i < length; i++) {
            var key = path[i];
            if (!obj || !hasOwnProperty.call(obj, key)) {
                return false;
            }
            obj = obj[key];
        }
        return !!length;
    },
    $extend: function $extend() {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        var self = this;

        if (typeof target === 'boolean') {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'function')) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if (options = arguments[i]) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (self.$isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && self.$isPlainObject(src) ? src : {};
                        }

                        target[name] = self.$extend(deep, clone, copy);
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    },
    $copy: function $copy(obj) {
        var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(obj)) {
            return this.$extend(deep, [], obj);
        } else if ('' + obj === 'null') {
            return obj;
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            return this.$extend(deep, {}, obj);
        } else return obj;
    },
    $isPlainObject: function $isPlainObject(obj) {
        var proto, Ctor;

        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
            return false;
        }

        proto = Object.getPrototypeOf(obj);

        if (!proto) {
            return true;
        }

        Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Object.prototype.hasOwnProperty.toString.call(Ctor) === Object.prototype.hasOwnProperty.toString.call(Object);
    },
    $resolvePath: function $resolvePath(route, url) {
        if (!url) return route;
        if (url[0] === '/') {
            url = url.substr(1);
            return this.$resolvePath('', url);
        }
        if (url[0] !== '.') {
            return this.$resolvePath(route, './' + url);
        }
        var current = route.split('/');
        if (url[0] === '.' && url[1] === '/') {
            url = url.substr(2);
            if (url[0] !== '.') {
                if (current.length) current[current.length - 1] = url;else current = [url];
                return current.length === 1 ? '/' + current[0] : current.join('/');
            }
            return this.$resolvePath(current.join('/'), url);
        }
        if (url[0] === '.' && url[1] === '.' && url[2] === '/') {
            url = url.replace(/^\.*/ig, '');
            current.pop();
            return this.$resolvePath(current.join('/'), '.' + url);
        }
        if (url[0] === '.') {
            return this.$resolvePath(route, url.substr(1));
        }
    },
    $getParams: function $getParams(url) {
        var rst = {};
        var quoteIndex = url.indexOf('?');

        if (quoteIndex !== -1) {
            var str = url.substr(quoteIndex + 1);
            var tmp = void 0;
            str.split('&').forEach(function (v) {
                tmp = v.split('=');
                rst[tmp[0]] = decodeURIComponent(tmp[1]);
            });
        }
        return rst;
    }
};
},/***** module 26 end *****/


/***** module 27 start *****/
/***** node_modules\wepy-web\lib\mixin.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.data = {};
        this.components = {};
        this.methods = {};
        this.events = {};
    }

    _class.prototype.$init = function $init(parent) {
        var _this = this;

        var k = void 0;

        Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function (k) {
            if (k[0] + k[1] !== 'on' && k !== 'constructor') {
                if (!parent[k]) parent[k] = _this[k];
            }
        });

        ['data', 'events', 'components'].forEach(function (item) {
            Object.getOwnPropertyNames(_this[item]).forEach(function (k) {
                if (k !== 'init' && !parent[item][k]) parent[item][k] = _this[item][k];
            });
        });
    };

    return _class;
}();

exports.default = _class;
},/***** module 27 end *****/


/***** module 28 start *****/
/***** node_modules\wepy-web\lib\wx.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _vue = __wepy_require(33);

var _vue2 = _interopRequireDefault(_vue);

var _axios = __wepy_require(36);

var _axios2 = _interopRequireDefault(_axios);

var _query = __wepy_require(37);

var _device = __wepy_require(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callback = function callback(type, o, name, data) {
    if (typeof o[type] === 'function') {
        setTimeout(function () {
            if (name === 'login') {
                o[type].call(wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), code: data.code, data: data });
            } else if (name === 'getSystemInfo') {
                o[type].call(wx, data);
            } else {
                o[type].call(wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), data: data });
            }
        }, 0);
    }
};

var wx = window.wx || {};

wx.login = wx.login || function login(o) {
    console.error('wx.login is only implemented in browser');
};

wx.getStorageSync = wx.getStorageSync || function getStorageSync(v) {
    var rst = window.localStorage.getItem(v);
    if (rst === null) return '';
    try {
        rst = JSON.parse(rst);
    } catch (e) {}
    return rst;
};
wx.getStorage = wx.getStorage || function getStorage(o) {
    var rst = wx.getStorageSync(o.key);
    if (rst === null) rst = '';
    callback('success', o, 'getStorage', rst);
    callback('complete', o, 'getStorage', rst);
};
wx.setStorageSync = wx.setStorageSync || function setStorageSync(k, d) {
    if (typeof d !== 'string') {
        d = JSON.stringify(d);
    }
    window.localStorage.setItem(k, d);
};
wx.setStorage = wx.setStorage || function setStorage(o) {
    var rst = void 0;
    try {
        rst = this.setStorageSync(o.key, o.data);
        callback('success', o, 'getStorage', rst);
    } catch (e) {
        callback('fail', o, 'getStorage', rst);
    }
    callback('complete', o, 'getStorage', rst);
};
wx.getStorageInfoSync = wx.getStorageInfoSync || function getStorageInfoSync() {
    var MAX_SIZE = 5 * 1024;
    var keys = Object.keys(window.localStorage);
    return {
        currentSize: 1,
        keys: keys,
        limitSize: MAX_SIZE
    };
};
wx.getStorageInfo = wx.getStorageInfo || function getStorageInfo(o) {
    var rst = this.getStorageInfoSync();
    callback('success', o, 'getStorageInfo', rst);
    callback('complete', o, 'getStorageInfo', rst);
};
wx.removeStorageSync = wx.removeStorageSync || function removeStorageSync(k) {
    window.localStorage.removeItem(k);
};
wx.removeStorage = wx.removeStorage || function removeStorage(o) {
    var rst = void 0;
    try {
        rst = this.removeStorage(o.key);
        callback('success', o, 'getStorage', rst);
    } catch (e) {
        callback('fail', o, 'getStorage', rst);
    }
    callback('complete', o, 'getStorage', rst);
};
wx.clearStorageSync = wx.clearStorageSync || function clearStorageSync() {
    window.localStorage.clear();
};
wx.clearStorage = wx.clearStorage || function clearStorage() {
    var rst = void 0;
    try {
        rst = this.clearStorage();
    } catch (e) {}
};

wx.navigateTo = wx.navigateTo || function navigateTo(o) {
    window.$router.go(o.url);
};
wx.navigateTo = wx.navigateTo || function navigateTo(o) {
    window.$router.go(o.url);
};
wx.switchTab = wx.switchTab || function switchTab(o) {
    window.$router.go(o.url);
};
wx.navigateBack = wx.navigateBack || function navigateBack(o) {
    if (!o) {
        o = {};
    }
    if (o.delta) o.delta = -1;
    window.$router.go(o.delta);
};

wx.getSystemInfoSync = wx.getSystemInfoSync || function getSystemInfoSync() {
    return {
        SDKVersion: '0.0.0',
        language: '-',
        model: (0, _device.system)().replace('mobile_', '').replace('pad_', ''),
        pixelRatio: 0,
        platform: (0, _device.system)(),
        screenHeight: window.screen.height,
        screenWidth: window.screen.width,
        system: (0, _device.system)(),
        version: '0.0.0',
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    };
};
wx.getSystemInfo = wx.getSystemInfo || function getSystemInfo(o) {
    var rst = this.getSystemInfoSync();
    callback('success', o, 'getSystemInfo', rst);
    callback('complete', o, 'getSystemInfo', rst);
};
wx.canIUse = wx.canIUse || function canIUse() {
    return true;
};

wx.getNetworkType = wx.getNetworkType || function getNetworkType() {
    return 'unkown';
};

wx.setNavigationBarTitle = wx.setNavigationBarTitle || function setNavigationBarTitle(o) {
    document.title = o.title;
    callback('success', o, 'setNavigationBarTitle', null);
    callback('complete', o, 'setNavigationBarTitle', null);
};

wx.makePhoneCall = wx.makePhoneCall || function makePhoneCall(o) {
    window.location = 'tel:' + o.phoneNumber;
    callback('success', o, 'makePhoneCall', null);
    callback('complete', o, 'makePhoneCall', null);
};

wx.hideKeyboard = wx.hideKeyboard || function hideKeyboard() {
    setTimeout(function () {
        var field = document.createElement('input');
        field.setAttribute('type', 'text');
        field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;');
        document.body.appendChild(field);

        field.onfocus = function () {
            setTimeout(function () {
                field.setAttribute('style', 'display:none;');
                setTimeout(function () {
                    document.body.removeChild(field);
                    document.body.focus();
                }, 14);
            }, 200);
        };
        field.focus();
    }, 50);
};

['getUserInfo', 'switchTab', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'createAnimation', 'requestPayment', 'chooseImage', 'showModal', 'showToast', 'showActionSheet'].forEach(function (k) {
    if (!wx[k]) {
        wx[k] = function () {
            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            console.error('wx.' + k + ' is not supported in browser or you did add it in config.');
            callback('fail', o, k, null);
            callback('complete', o, k, null);
        };
    }
});

wx.request = wx.request ? wx.request : function request(options) {
    var handlers = {};
    ['success', 'fail', 'complete', 'beforeAll', 'beforeSuccess', 'afterSuccess', 'beforeCancel', 'cancel', 'afterCancel', 'beforeFail', 'afterFail', 'afterAll'].forEach(function (k) {
        handlers[k] = options[k];
        delete options[k];
    });
    var rst = { errMsg: 'request', statusCode: 0, data: undefined };
    if (!options.method || options.method.toLowerCase() === 'get') {
        options.params = options.data;
        delete options.data;
    }
    (0, _axios2.default)(options).then(function (res) {
        rst.errMsg = rst.errMsg + ':ok';
        rst.statusCode = res.status;
        rst.data = res.data;

        if (typeof handlers.beforeAll === 'function') {
            handlers.beforeAll(res);
        }
        if (typeof handlers.beforeSuccess === 'function') {
            handlers.beforeSuccess(res);
        }
        if (typeof handlers.success === 'function') {
            handlers.success(res);
        }
        if (typeof handlers.afterSuccess === 'function') {
            handlers.afterSuccess(res);
        }
        if (typeof handlers.complete === 'function') {
            handlers.complete(res);
        }
        if (typeof handlers.afterAll === 'function') {
            handlers.afterAll(res);
        }
    }).catch(function (res) {
        if (typeof handlers.beforeAll === 'function') {
            handlers.beforeAll(res);
        }
        if (_axios2.default.isCancel(res)) {
            rst.errMsg = rst.errMsg + ':cancel';
            if (typeof handlers.fail === 'function') {
                handlers.fail(res);
            }
            if (typeof handlers.beforeCancel === 'function') {
                handlers.beforeCancel(res);
            }
            if (typeof handlers.cancel === 'function') {
                handlers.cancel(res);
            }
            if (typeof handlers.afterCancel === 'function') {
                handlers.afterCancel(res);
            }
        } else {
            rst.errMsg = rst.errMsg + ':fail';
            if (typeof handlers.beforeFail === 'function') {
                handlers.beforeFail(res);
            }
            if (typeof handlers.fail === 'function') {
                handlers.fail(res);
            }
            if (typeof handlers.afterFail === 'function') {
                handlers.afterFail(res);
            }
        }
        rst.data = res;
        if (typeof handlers.complete === 'function') {
            handlers.complete(res);
        }
        if (typeof handlers.afterAll === 'function') {
            handlers.afterAll(res);
        }
    });
};

if (typeof window !== 'undefined') {
    window.getApp = function () {
        return _vue2.default;
    };

    window.getCurrentPages = function () {
        if (wx._currentPage) return [wx._currentPage];else return [wx._currentPages[0]];
    };
}

window.wx = wx;

exports.default = wx;
},/***** module 28 end *****/


/***** module 29 start *****/
/***** node_modules\wepy-async-function\global.js *****/
function(module, exports, __wepy_require) {/**
 * Tencent is pleased to support the open source community by making WePY available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * 
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */


var global = module.exports = typeof window !== 'undefined' && window.Math === Math
  ? window : typeof self !== 'undefined' && self.Math === Math ? self : this;

},/***** module 29 end *****/


/***** module 30 start *****/
/***** node_modules\promise-polyfill\promise.js *****/
function(module, exports, __wepy_require) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

},/***** module 30 end *****/


/***** module 31 start *****/
/***** node_modules\regenerator-runtime\runtime.js *****/
function(module, exports, __wepy_require) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

},/***** module 31 end *****/


/***** module 32 start *****/
/***** node_modules\wepy-web\lib\native.js *****/
function(module, exports, __wepy_require) {"use strict";

exports.__esModule = true;
exports.default = {};
},/***** module 32 end *****/


/***** module 33 start *****/
/***** node_modules\vue\dist\vue.js *****/
function(module, exports, __wepy_require) {/*!
 * Vue.js v1.0.28
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delimited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([^-])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/* istanbul ignore next */
function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc = undefined;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var noop = function noop() {};
    timerFunc = function () {
      p.then(nextTickHandler);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) setTimeout(noop);
    };
  } else if (typeof MutationObserver !== 'undefined') {
    // use MutationObserver where native Promise is not available,
    // e.g. IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = setTimeout;
  }

  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var len;
var index;
var chr;
var state;
var startState = 0;
var filterState = 1;
var filterNameState = 2;
var filterArgState = 3;

var doubleChr = 0x22;
var singleChr = 0x27;
var pipeChr = 0x7C;
var escapeChr = 0x5C;
var spaceChr = 0x20;

var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

function peek() {
  return str.charCodeAt(index + 1);
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function eatSpace() {
  while (peek() === spaceChr) {
    next();
  }
}

function isStringStart(chr) {
  return chr === doubleChr || chr === singleChr;
}

function isExpStart(chr) {
  return expStartChr[chr];
}

function isExpEnd(start, chr) {
  return expChrPair[start] === chr;
}

function parseString() {
  var stringQuote = next();
  var chr;
  while (!eof()) {
    chr = next();
    // escape char
    if (chr === escapeChr) {
      next();
    } else if (chr === stringQuote) {
      break;
    }
  }
}

function parseSpecialExp(chr) {
  var inExp = 0;
  var startChr = chr;

  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
      continue;
    }

    if (startChr === chr) {
      inExp++;
    }
    if (isExpEnd(startChr, chr)) {
      inExp--;
    }

    next();

    if (inExp === 0) {
      break;
    }
  }
}

/**
 * syntax:
 * expression | filterName  [arg  arg [| filterName arg arg]]
 */

function parseExpression() {
  var start = index;
  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
    } else if (isExpStart(chr)) {
      parseSpecialExp(chr);
    } else if (chr === pipeChr) {
      next();
      chr = peek();
      if (chr === pipeChr) {
        next();
      } else {
        if (state === startState || state === filterArgState) {
          state = filterState;
        }
        break;
      }
    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
      eatSpace();
      break;
    } else {
      if (state === filterState) {
        state = filterNameState;
      }
      next();
    }
  }

  return str.slice(start + 1, index) || null;
}

function parseFilterList() {
  var filters = [];
  while (!eof()) {
    filters.push(parseFilter());
  }
  return filters;
}

function parseFilter() {
  var filter = {};
  var args;

  state = filterState;
  filter.name = parseExpression().trim();

  state = filterArgState;
  args = parseFilterArguments();

  if (args.length) {
    filter.args = args;
  }
  return filter;
}

function parseFilterArguments() {
  var args = [];
  while (!eof() && state !== filterState) {
    var arg = parseExpression();
    if (!arg) {
      break;
    }
    args.push(processFilterArg(arg));
  }

  return args;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  dir = {};
  len = str.length;
  index = -1;
  chr = '';
  state = startState;

  var filters;

  if (str.indexOf('|') < 0) {
    dir.expression = str.trim();
  } else {
    dir.expression = parseExpression().trim();
    filters = parseFilterList();
    if (filters.length) {
      dir.filters = filters;
    }
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: 'development' !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if ('development' !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      'development' !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if ('development' !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if ('development' !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      'development' !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    'development' !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if ('development' !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        'development' !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if ('development' !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        'development' !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if ('development' !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if ('development' !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIOS: isIOS,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to register itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression$1(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if ('development' !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression$1(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if ('development' !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if ('development' !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    'development' !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if ('development' !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    'development' !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression$1(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression$1,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ('development' !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression$1(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if ('development' !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if ('development' !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      'development' !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if ('development' !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if ('development' !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    if ('development' !== 'production' && this.el.hasAttribute('v-if')) {
      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
    }

    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      'development' !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new instance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        'development' !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          'development' !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if ('development' !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      'development' !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if ('development' !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      'development' !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.get();
      if (isArray(model)) {
        var val = self.getValue();
        var i = indexOf(model, val);
        if (el.checked) {
          if (i < 0) {
            self.set(model.concat(val));
          }
        } else if (i > -1) {
          self.set(model.slice(0, i).concat(model.slice(i + 1)));
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      'development' !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      'development' !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      'development' !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if ('development' !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        'development' !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if ('development' !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    'development' !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// logic control
// two-way binding
// event handling
// attributes
// ref & el
// cloak
// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      'development' !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if ('development' !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var propsData = vm.$options.propsData;
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if ('development' !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      'development' !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if ('development' !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if ('development' !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
      // has propsData
      prop.raw = value;
    } else if ('development' !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    'development' !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if ('development' !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      'development' !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    'development' !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if ('development' !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if ('development' === 'production') {}
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  sortDirectives(dirs);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * sort directives by priority (stable sort)
 *
 * @param {Array} dirs
 */
function sortDirectives(dirs) {
  if (dirs.length === 0) return;

  var groupedMap = {};
  var i, j, k, l;
  var index = 0;
  var priorities = [];
  for (i = 0, j = dirs.length; i < j; i++) {
    var dir = dirs[i];
    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
    var array = groupedMap[priority];
    if (!array) {
      array = groupedMap[priority] = [];
      priorities.push(priority);
    }
    array.push(dir);
  }

  priorities.sort(function (a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  });
  for (i = 0, j = priorities.length; i < j; i++) {
    var group = groupedMap[priorities[i]];
    for (k = 0, l = group.length; k < l; k++) {
      dirs[index++] = group[k];
    }
  }
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if ('development' !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if ('development' !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;

      var componentName = options.el.tagName.toLowerCase();
      if (componentName === 'component' && options.name) {
        componentName += ':' + options.name;
      }

      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    // a textarea which has v-pre attr should skip complie.
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for, v-if and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if ('development' !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    if (!replacer) {
      return frag;
    }
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        'development' !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    'development' !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if ('development' !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      'development' !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      'development' !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if ('development' !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        'development' !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if ('development' !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression$1(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if ('development' !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if ('development' !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          'development' !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression$1(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression$1(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      'development' !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Order filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if ('development' !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ('development' !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.28';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if ('development' !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

return Vue;

})));
},/***** module 33 end *****/


/***** module 34 start *****/
/***** node_modules\vue-router\dist\vue-router.js *****/
function(module, exports, __wepy_require) {/*!
 * vue-router v0.7.13
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var noWarning = false;
  function warn(msg) {
    if (!noWarning && typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  function tryDecode(uri, asComponent) {
    try {
      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
    } catch (e) {
      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
    }
  }

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return tryDecode(part, true);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path, silent) {
      noWarning = silent;
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        if (queryString) {
          queryParams = this.parseQueryString(queryString);
        }
      }

      path = tryDecode(path);
      if (!path) return;

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn$1(msg) {
    /* istanbul ignore next */
    if (typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root && root !== '/') {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = location.pathname + location.search;
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(path.replace(/^#!?/, '') + query);
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn$1('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn$1('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // internal reference to router
    Object.defineProperty(this, 'router', {
      enumerable: false,
      value: router
    });
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    var onPriority = Vue.directive('on').priority;
    var LINK_UPDATE = '__vue-router-link-update__';

    var activeId = 0;

    Vue.directive('link-active', {
      priority: 9999,
      bind: function bind() {
        var _this = this;

        var id = String(activeId++);
        // collect v-links contained within this element.
        // we need do this here before the parent-child relationship
        // gets messed up by terminal directives (if, for, components)
        var childLinks = this.el.querySelectorAll('[v-link]');
        for (var i = 0, l = childLinks.length; i < l; i++) {
          var link = childLinks[i];
          var existingId = link.getAttribute(LINK_UPDATE);
          var value = existingId ? existingId + ',' + id : id;
          // leave a mark on the link element which can be persisted
          // through fragment clones.
          link.setAttribute(LINK_UPDATE, value);
        }
        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
          if (link.activeIds.indexOf(id) > -1) {
            link.updateClasses(path, _this.el);
          }
        });
      },
      unbind: function unbind() {
        this.vm.$off(LINK_UPDATE, this.cb);
      }
    });

    Vue.directive('link', {
      priority: onPriority - 2,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn$1('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check v-link-active ids
        var activeIds = this.el.getAttribute(LINK_UPDATE);
        if (activeIds) {
          this.el.removeAttribute(LINK_UPDATE);
          this.activeIds = activeIds.split(',');
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            var path = el.pathname;
            if (this.router.history.root) {
              path = path.replace(this.router.history.rootRE, '');
            }
            this.router.go({
              path: path,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router.stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router.stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        if (this.activeIds) {
          this.vm.$emit(LINK_UPDATE, this, route.path);
        } else {
          this.updateClasses(route.path, this.el);
        }
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path, el) {
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
          toggleClasses(el, this.prevActiveClass, removeClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }

    // this function is copied from v-bind:class implementation until
    // we properly expose it...
    function toggleClasses(el, key, fn) {
      key = key.trim();
      if (key.indexOf(' ') === -1) {
        fn(el, key);
        return;
      }
      var keys = key.split(/\s+/);
      for (var i = 0, l = keys.length; i < l; i++) {
        fn(el, keys[i]);
      }
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this.stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn$1('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype.stringifyPath = function stringifyPath(path) {
      var generatedPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
        } else if (path.path) {
          generatedPath = encodeURI(path.path);
        }
        if (path.query) {
          // note: the generated query string is pre-URL-encoded by the recognizer
          var query = this._recognizer.generateQueryString(path.query);
          if (generatedPath.indexOf('?') > -1) {
            generatedPath += '&' + query.slice(1);
          } else {
            generatedPath += query;
          }
        }
      } else {
        generatedPath = encodeURI(path ? path + '' : '');
      }
      return generatedPath;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path, true);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn$1('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn$1('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},/***** module 34 end *****/


/***** module 35 start *****/
/***** node_modules\wepy-web\lib\helper\word.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = exports.hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

var camelizeRE = /-(\w)/g;
var camelize = exports.camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
},/***** module 35 end *****/


/***** module 36 start *****/
/***** node_modules\axios\dist\axios.js *****/
function(module, exports, __wepy_require) {/* axios v0.16.2 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=axios.map
},/***** module 36 end *****/


/***** module 37 start *****/
/***** node_modules\wepy-web\lib\helper\query.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;
exports.resolveQuery = resolveQuery;
exports.stringifyQuery = stringifyQuery;


var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
    return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

var encode = function encode(str) {
    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function parseQuery(query) {
    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
        return res;
    }

    query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = decode(parts.shift());
        var val = parts.length > 0 ? decode(parts.join('=')) : null;

        if (res[key] === undefined) {
            res[key] = val;
        } else if (Array.isArray(res[key])) {
            res[key].push(val);
        } else {
            res[key] = [res[key], val];
        }
    });

    return res;
}

function resolveQuery(query, extraQuery, _parseQuery) {
    var parse = _parseQuery || parseQuery;
    var parsedQuery = void 0;
    try {
        parsedQuery = parse(query || '');
    } catch (e) {
        parsedQuery = {};
    }
    for (var key in extraQuery) {
        var val = extraQuery[key];
        parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
    }
    return parsedQuery;
}

function stringifyQuery(obj) {
    var res = obj ? Object.keys(obj).map(function (key) {
        var val = obj[key];

        if (val === undefined) {
            return '';
        }

        if (val === null) {
            return encode(key);
        }

        if (Array.isArray(val)) {
            var result = [];
            val.slice().forEach(function (val2) {
                if (val2 === undefined) {
                    return;
                }
                if (val2 === null) {
                    result.push(encode(key));
                } else {
                    result.push(encode(key) + '=' + encode(val2));
                }
            });
            return result.join('&');
        }

        return encode(key) + '=' + encode(val);
    }).filter(function (x) {
        return x.length > 0;
    }).join('&') : null;

    return res ? '?' + res : '';
}
},/***** module 37 end *****/


/***** module 38 start *****/
/***** node_modules\wepy-web\lib\helper\device.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;
exports.system = system;
exports.mobile = mobile;


var MOBILE_DEVICE = ['android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod'];

function system() {
    var ua = window.navigator.userAgent.toLowerCase();

    for (var i = 0; i < MOBILE_DEVICE.length; i++) {
        if (ua.indexOf(MOBILE_DEVICE[i]) !== -1) {
            switch (MOBILE_DEVICE[i]) {
                case 'iphone':
                    return 'mobile_iPhone';
                case 'symbianos':
                    return 'mobile_SymbianOS';
                case 'windows phone':
                    return 'mobile_WindowsPhone';
                case 'iPad':
                    return 'pad_iPad';
                case 'iPod':
                    return 'pad_iPod';
                case 'Android':
                    if (ua.indexOf('Mobile') !== -1) {
                        return 'mobile_Android';
                    } else {
                        return 'pad_Android';
                    }

            }
        }
    }

    var sys = void 0;

    if (ua.indexOf('nt 5.1') > -1) {
        sys = 'Windows xp';
    } else if (ua.indexOf('nt 6.1') > -1) {
        sys = 'Windows 7';
    } else if (ua.indexOf('nt 6.3') > -1) {
        sys = 'Windows 8';
    } else if (ua.indexOf('nt 10.0') > -1) {
        sys = 'Windows 10';
    } else if (ua.indexOf('nt 6.0') > -1) {
        sys = 'Windows Vista';
    } else if (ua.indexOf('nt 5.2') > -1) {
        sys = 'Windows 2003';
    } else if (ua.indexOf('nt 5.0') > -1) {
        sys = 'Windows 2000';
    } else if (ua.indexOf('windows') !== -1 || ua.indexOf('win32') !== -1) {
        sys = 'Windows';
    } else if (ua.indexOf('macintosh') !== -1 || ua.indexOf('mac os x') !== -1) {
        sys = 'Macintosh';
    } else if (ua.indexOf('adobeair') !== -1) {
        sys = 'Adobeair';
    } else {
        sys = 'Unknow';
    }

    return sys;
};

function mobile() {
    var ua = window.navigator.userAgent.toLowerCase();
    return MOBILE_DEVICE.some(function (v) {
        return ua.indexOf(v) !== -1;
    });
};
},/***** module 38 end *****/


/***** module 39 start *****/
/***** src\app.wpy *****/
function(module, exports, __wepy_require) {module.exports = "@font-face{font-family:'icomoon';src:url(\"/images/fonts/icomoon.eot?5lxw0d\");src:url(\"/images/fonts/icomoon.eot?5lxw0d#iefix\") format(\"embedded-opentype\"),url(\"/images/fonts/icomoon.ttf?5lxw0d\") format(\"truetype\"),url(\"/images/fonts/icomoon.woff?5lxw0d\") format(\"woff\"),url(\"/images/fonts/icomoon.svg?5lxw0d#icomoon\") format(\"svg\");font-weight:normal;font-style:normal}[class^=\"icon-\"],[class*=\" icon-\"]{font-family:'icomoon' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-icon_whitelike_nor:before{content:\"\\e900\";color:#fefefe}.icon-icon_my_nor:before{content:\"\\e904\";color:#39fff2}.icon-icon_partake_nor:before{content:\"\\e90d\";color:#39fff2}.icon-icon_right_nor:before{content:\"\\e90e\";color:#fff}.icon-icon_draft_nor:before{content:\"\\e90f\";color:#39fff2}.icon-icon_like_nor:before{content:\"\\e911\";color:#dcdee0}.icon-icon_smalllike_dis:before{content:\"\\e912\";color:#999}.icon-icon_smalllike_nor:before{content:\"\\e913\"}.icon-icon_biglike_nor:before{content:\"\\e916\"}.icon-icon_revoke_nor:before{content:\"\\e917\"}.icon-icon_rubber_nor:before{content:\"\\e918\"}.icon-icon_rubber_pre:before{content:\"\\e919\"}.icon-icon_small_nor:before{content:\"\\e91a\"}.icon-icon_small_pre:before{content:\"\\e91b\"}.icon-icon_restore_dis:before{content:\"\\e91c\";color:#b0b8bc}.icon-icon_restore_nor:before{content:\"\\e91d\"}.icon-icon_revoke_dis:before{content:\"\\e91e\";color:#b0b8bc}.icon-icon_finish_pre:before{content:\"\\e91f\";color:#fff}.icon-icon_middle_nor:before{content:\"\\e920\"}.icon-icon_middle_pre:before{content:\"\\e921\"}.icon-icon_pan_nor:before{content:\"\\e922\"}.icon-icon_pan_pre:before{content:\"\\e923\"}.icon-icon_big_nor:before{content:\"\\e924\"}.icon-icon_big_pre:before{content:\"\\e925\"}.icon-icon_draft1_nor:before{content:\"\\e926\"}.icon-icon_draft1_pre:before{content:\"\\e927\";color:#fff}.icon-icon_finish_nor:before{content:\"\\e928\"}.icon-icon_pin_nor:before{content:\"\\e929\";color:#a3a8aa}.icon-icon_biglike_nor2:before{content:\"\\e92a\"}.icon-icon_biglike_pre2:before{content:\"\\e92b\";color:#ff4848}.icon-icon_number_black:before{content:\"\\e92c\"}.icon-icon_canyuliang_white:before{content:\"\\e92d\";color:#fff}.clearfix:after{content:\"\\200B\";display:block;height:0;clear:both}.index-bottom{padding:28px 0 30px;text-align:center;font-size:14px;color:#666}.index-bottom span{display:inline-block;margin:0 10px}.border-top{border-top:0.333335px solid #e0e0e0;width:100%}.container{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;box-sizing:border-box}.detail-share li{float:left;height:36px;margin-top:24px;margin-left:28px}.detail-share li:first-child{padding-right:19px;border-right:0.333335px solid #ccc}.detail-share span{float:left;line-height:36px;color:#666;font-size:18px}.detail-share span:first-child{margin-right:10px}.detail-share span image{width:36px;height:36px}\n\n"},/***** module 39 end *****/


/***** module 40 start *****/
/***** src\mydraw\mydraw.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".mydraw-top{height:210px;background:#000}.head-img{display:block;width:86px;height:86px;margin:0 auto 20px;padding-top:26px}.head-img image{width:86px;height:86px;border-radius:50%}.user-name{display:block;text-align:center;font-size:18px;color:#fff}.all-num{display:block;text-align:center;color:#999;font-size:15px;margin-top:16px}.all-num p{margin-left:20px;padding-right:20px}.all-num p:first-child{border-right:0.333335px solid #999}.all-num p span{margin-left:10px}.draw-ul{display:block;margin:24px 0 24px 27.666665px;height:39px}.draw-text{font-size:19px;color:#ccc;margin-left:60px;padding-bottom:10px;border-bottom:2px solid #fff}.active{color:#000;border-bottom:2px solid #000}.list-all{margin-left:1px}.list-all .my-list{display:block;float:left;margin-left:11px;margin-bottom:24px}.list-all .my-list dt{display:block}.list-all .my-list dt image{width:170px;height:170px}.list-all .my-list dd{display:block}.list-all .my-list dd p{display:block}.list-all .my-list dd .list-p{width:170px;display:block;margin-top:2px;margin-bottom:5px;color:#333;font-size:13px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.list-all .my-list dd .list-like{font-size:12px;color:#999}.list-all .my-list dd .list-like .num-txt{margin-left:10px}\n\n"},/***** module 40 end *****/


/***** module 41 start *****/
/***** src\drafts\drafts.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".drafts-ul li{width:100%;display:block;height:116px;line-height:116px;border-bottom:0.333335px solid #e0e0e0;position:relative;overflow:hidden}.drafts-ul li .drafts-item{position:relative;clear:both}.drafts-ul li .drafts-img{float:left;width:76px;height:76px;margin:20px 30px 20px 20px;border:1.333335px solid #000}.drafts-ul li .drafts-img image{width:76px;height:76px;box-shadow:0 2px 4.666665px #c3c3c3}.drafts-ul li .drafts-title{width:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#000;font-size:18px;font-weight:medium}.drafts-ul li .inner{position:absolute;top:0}.drafts-ul li .inner.txt{background-color:#fff;width:100%;z-index:5;padding:0 3.333335px;transition:left 0.2s ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.drafts-ul li .inner.del{background-color:#e64340;width:90px;text-align:center;z-index:4;right:0;color:#fff;font-size:20px}\n\n"},/***** module 41 end *****/


/***** module 42 start *****/
/***** src\drawdetail\drawdetail.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".drawdetail-title{width:328.333335px;display:block;margin-top:27px;font-size:20px;color:#000;font-weight:medium;margin-left:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.drawdetail-deigner{display:block;margin:16px 0 20px 24px}.drawdetail-deigner dt{float:left;width:68px}.drawdetail-deigner dt image{width:68px;height:68px;border-radius:50%}.drawdetail-deigner dd{float:left;margin-left:15px}.drawdetail-deigner dd p{width:220px;display:block;line-height:36px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:18px;color:#333}.drawdetail-deigner dd .drawlike-num{margin-left:8px}.detail-banner{width:362.666665px;height:362.666665px;margin:0 auto;border:0.333335px solid #c3cace}.detail-banner image{width:362.666665px;height:362.666665px}.detail-share li{float:left;height:36px;margin-top:24px;margin-left:28px}.detail-share li:first-child{padding-right:19px;border-right:0.333335px solid #ccc}.detail-share span{float:left;line-height:36px;color:#666;font-size:18px}.detail-share span:first-child{margin-right:10px}.detail-share span image{width:36px;height:36px}\n\n"},/***** module 42 end *****/


/***** module 43 start *****/
/***** src\picsave\picsave.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".share-banner{width:375px;height:375px;margin-bottom:20px}.share-banner image{width:100%;height:100%}.share-dl dt{float:right;width:96.666665px;margin-right:30px}.share-dl dt image{width:90px;height:90px;border-radius:50%}.share-dl dt p{font-size:13px;color:#b3b3b3}.share-dl dd{float:left;margin-top:25px;margin-left:30px}.share-dl dd .share-title{width:196.666665px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;font-size:17px}.share-dl dd .share-img{display:block;margin-top:12px}.share-dl dd .share-img span{line-height:36px;width:133.333335px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.share-dl dd .share-img image{margin-right:8px;float:left;width:36px;height:36px;border-radius:50%}\n\n"},/***** module 43 end *****/


/***** module 44 start *****/
/***** src\share\share.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".share-banner{width:375px;height:375px;margin-bottom:20px}.share-banner image{width:100%;height:100%}.share-dl dt{float:right;width:96.666665px;margin-right:30px}.share-dl dt image{width:90px;height:90px;border-radius:50%}.share-dl dt p{font-size:13px;color:#b3b3b3}.share-dl dd{float:left;margin-top:25px;margin-left:30px}.share-dl dd .share-title{width:196.666665px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;font-size:17px}.share-dl dd .share-img{display:block;margin-top:12px}.share-dl dd .share-img span{line-height:36px;width:133.333335px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.share-dl dd .share-img image{margin-right:8px;float:left;width:36px;height:36px;border-radius:50%}\n\n"},/***** module 44 end *****/


/***** module 45 start *****/
/***** src\rankinglist\rankinglist.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".ranking-list{margin-top:30px}.ranking-num{float:left;margin:8.666665px 12px;font-size:22px;color:#000}.ranking-dl{float:left}.ranking-dl dt{float:left;width:120px;height:120px}.ranking-dl dt image{width:120px;height:120px}.ranking-dl dd{float:left;width:200px;margin-left:15px}.ranking-dl dd .ranking-title{display:block;width:180px;line-height:43.333335px;font-size:18px;font-weight:medium;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ranking-dl dd .ranking-designer image{float:left;width:36px;height:36px;border-radius:50%}.ranking-dl dd .ranking-designer span{float:left;display:block;width:150px;line-height:36px;margin-left:12px;font-size:15px;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ranking-dl dd .ranking-like{float:right;margin:17.333335px 20px 0 0}.ranking-dl dd .ranking-like .icon-like{float:left}.ranking-dl dd .ranking-like .like-num{float:left;margin-left:8px;font-size:14px;color:#999}\n\n"},/***** module 45 end *****/


/***** module 46 start *****/
/***** src\drawlist\drawlist.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".drawlist{margin:30px 12px;margin-right:0}.drawlist .list-message dt{float:left;width:110px;height:110px}.drawlist .list-message dt image{width:100%;height:100%;border:2.666665px solid #000;box-shadow:0 4.666665px 2.666665px #ccc}.drawlist .list-message dd{float:left;width:229.333335px;margin-left:14px}.drawlist .list-message dd p{display:block;margin-bottom:10px}.drawlist .list-message dd .message-title{font-weight:medium;font-size:20px;color:#000}.drawlist .list-message dd .message-desc{font-weight:light;font-size:13px;color:#666;line-height:23px}.drawlist .list-message dd .message-join{font-weight:light;font-size:14px;color:#000}.drawlist .list-message dd .message-join span{margin-right:10px}.draw-list-ul{margin-top:14px;margin-left:1px}.draw-list-ul .ul-list li{position:relative;float:left;width:170px;height:170px;margin:12px 0 12px 11px}.draw-list-ul .ul-list li .list-image image{width:170px;height:170px;border:0.333335px solid #f0f0f0}.draw-list-ul .ul-list li .icon-suo{position:absolute;top:-3px;right:10px}.draw-list-ul .ul-list li .like-show{position:absolute;padding:5px 8.333335px;background:rgba(0,0,0,0.3);border-radius:10px;bottom:10px;left:10px}.draw-list-ul .ul-list li .like-show .icon-like{float:left;font-size:12px;margin-top:2px}.draw-list-ul .ul-list li .like-show .like-num{float:left;font-weight:light;font-size:12px;color:#fff;margin-left:4px}\n\n"},/***** module 46 end *****/


/***** module 47 start *****/
/***** src\index\index.wpy *****/
function(module, exports, __wepy_require) {module.exports = "swiper{width:100%;height:240px}swiper image{width:100%;height:100%}.icon{margin:24px 0 20px 20px}.icon .chart-title{padding-left:30px;font-size:17px;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA0LTA5VDE2OjMxOjUxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wNC0wOVQxNjo1NToxMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wNC0wOVQxNjo1NToxMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNmUwMzA2Ny0zNDczLTRjNDMtYTEzMy1hY2ZiMzkzZWVjYzAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NzkwMmExNy1hYjI3LWYwNGUtOGM2ZC02MTM0MTI5ZWM2YjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OTkzZTUxYy03NWVhLTQyMzktODYyYy1kZWVkNTdlYjllMmUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5OTNlNTFjLTc1ZWEtNDIzOS04NjJjLWRlZWQ1N2ViOWUyZSIgc3RFdnQ6d2hlbj0iMjAxOC0wNC0wOVQxNjozMTo1MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2ZTAzMDY3LTM0NzMtNGM0My1hMTMzLWFjZmIzOTNlZWNjMCIgc3RFdnQ6d2hlbj0iMjAxOC0wNC0wOVQxNjo1NToxMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjT/reoAAAL4SURBVFiFzdk/bBtVHMDxT09uh5YuxIpUUZBOlVo6x12SqZ0yVEUsVIVOMLThT+dKSB4CGdiJQpkLDRNSJUQmKoZkoGZvKiEPtKpkbJYCQypVDO8Z5Xy2c2flbL6b3737/b6683v+/Z6PLCwsmIAEF3ARDZzFazgRr/+Np3iMFh7gIV6WTXSkpOBpfIT38HrJXL/jG6zjSdGbkoLz5mLg33B7AjnxntsxxnqMeSiC7+ARPsSxCcQGORZjPcLVgyaPE6xhA9+hfghig9SxGXPURk0aJXgc3+Pm4XvluBlzHR92cZhgDfdwuUKpQS7HnLknOUzwS1yp2mgIV2LuDIPGV3GjTNTFxUXNZlO9nv2adrtdq6urdnZ2yoS7gZ+Fp4nsPjgnrKxSC2Jra8vKyop2u50ZT9PUxsaG5eXlMuHgT7yJP8i+4s/LykG9Xs/JQbvdzj3VgryKz/of+oJv4INJolXE+4LTf4IrODoznTxHBSc1QfL6QXeMWgwVch2f1oSq5PRBs5vN5tDF0Gq1qtELThcSXCoye9RiqJiLCSYqCKdEo4ZzVWYY/AqU3MDP1XCqCrE+jUYj87nkBn4qwckqxEZRcgM/WbSinhkJns9aYgzPEzybtcUYniXYnbXFGHYT/DprizG0EqGp/r/yIMEvSjTSU+QJHibCccTdGcsM4y5e9vfBdeyNm93tdqVpWng8TVO9Xq/w+AB70SnTk6wLHf9QlpaWNJtNc3P5E4ter5cb73Q65ufnc3M7nY61tTXb29vjBL8SC9bBpmlXwTOTCukJBUyPbNPUw8ezMBrglihHvnHfxJ2p6mT5Gt/uHxhWLNzC/anoZLmPTwYHhwnu4Rp+rNpoHz/EnLmdZFS59Q/eMp3XfQdvx5w5xtWDL4SjsWvoHr6XLt6NOV6MmlSkYN3EeWFvGruZF2Qvxjpv3yHRKIpW1F1h4zyDL4QT/LI8jfeeibEKvZWyp/x9+n9DXBLa1rNCo/1KvP6X8GP/WCjnfjLh3xD/ApK6uA8ZPpIEAAAAAElFTkSuQmCC\") center left no-repeat;background-size:20px}.icon .join-more{float:right;margin-top:5.333335px;margin-right:20px;font-size:12px;color:#666}.scroll_box{width:100%;height:140px;margin-left:14px;margin-bottom:30px;overflow:hidden;background:#fff;white-space:nowrap}.item_list{width:140px;height:140px;margin-right:10px;display:inline-block;border-radius:2px;box-shadow:1.333335px 1.333335px 2.666665px #000}.item_list image{width:100%;height:100%;border-radius:2px}.list-view{padding-top:12px;background:#f8f8f8}.hot-images{position:relative;width:94%;height:220px;margin:0 auto 12px;border-radius:4px}.hot-images image.join-image{width:100%;height:100%;border-radius:4px}.hot-images .black-layer{position:absolute;top:0;width:100%;height:220px;border-radius:4px;background:rgba(0,0,0,0.06)}.hot-images .join-bg{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABJIAAACfCAYAAACiPPPSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMUE2RDZBMzNGODExRThBODNBRDg3NkVEMjVEMkEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJEMUE2RDZCMzNGODExRThBODNBRDg3NkVEMjVEMkEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQxQTZENjgzM0Y4MTFFOEE4M0FEODc2RUQyNUQyQTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQxQTZENjkzM0Y4MTFFOEE4M0FEODc2RUQyNUQyQTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7EIjiCAACMXklEQVR42uz9W68l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\") top center no-repeat;width:100%;height:53px;position:absolute;bottom:0}.hot-images .join-title{position:absolute;bottom:12px;left:14px;width:241.666665px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:20px;color:#fff}.hot-images .join-messgae{position:absolute;bottom:12px;right:14px}.hot-images .join-messgae .icon-icon_canyuliang_white{display:inline-block;width:22px;height:22px;background:rgba(0,0,0,0.5);border-radius:50%;font-size:12px;text-align:center;line-height:22px}.hot-images .join-messgae .join-number{margin-left:7px;font-size:15px;color:#fff}\n\n"},/***** module 47 end *****/


/***** module 48 start *****/
/***** src\detail\detail.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".detail-banner{width:100%;height:240px}.detail-banner image{width:100%;height:100%}.detail-title{text-align:center;margin:30px 0 14.333335px;color:#000;font-size:18px;font-weight:bold}.detail-content{width:90%;margin:0 auto 35px}.detail-text{font-size:14px;color:#333;line-height:25px;word-wrap:break-word}.detail-image{margin:30px 0}.detail-image image{margin-top:10px;width:100%}\n\n"}/***** module 48 end *****/



]);
