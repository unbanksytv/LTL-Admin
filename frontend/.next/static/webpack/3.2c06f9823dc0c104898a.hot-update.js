webpackHotUpdate(3,{

/***/ "./containers/Chatbot/Chat.tsx":
/*!*************************************!*\
  !*** ./containers/Chatbot/Chat.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/input */ "../node_modules/baseui/esm/input/index.js");
/* harmony import */ var baseui_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/tag */ "../node_modules/baseui/esm/tag/index.js");
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! elizabot */ "../node_modules/elizabot/elizabot.js");
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(elizabot__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Chatbot/Chat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var eliza = new elizabot__WEBPACK_IMPORTED_MODULE_5___default.a();

var Chatbot = function Chatbot() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      chats = _useState[0],
      setChats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      listen = _useState3[0],
      setListen = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var setReply = function setReply() {
      var reply = eliza.transform(value);
      chats.push({
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
        message: reply
      });
      setChats(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(chats));
      setListen(false);
    };

    setTimeout(function () {
      if (listen) setReply();
    }, 1000);
  }, [listen]);

  var handleChat = function handleChat(e) {
    console.log(e.key, 'what key');

    if (e.key === 'Enter') {
      console.log('here');
      chats.push({
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
        message: value
      });
      setChats(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(chats));
      setValue('');
      setListen(true);
    }
  };

  console.log(chats, 'what chats');
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(ShowChats, {
    chats: chats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(baseui_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.currentTarget.value);
    },
    onKeyPress: handleChat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
};

var ShowChats = function ShowChats(_ref) {
  var chats = _ref.chats;
  console.log(chats, 'chat value received');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, chats && chats.length ? chats.map(function (chat, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(baseui_tag__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, chat.message));
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Chatbot);

/***/ })

})
//# sourceMappingURL=3.2c06f9823dc0c104898a.hot-update.js.map