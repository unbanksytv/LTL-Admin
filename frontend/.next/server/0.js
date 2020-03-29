exports.ids = [0];
exports.modules = {

/***/ "./containers/Chatbot/Chat.tsx":
/*!*************************************!*\
  !*** ./containers/Chatbot/Chat.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! elizabot */ "elizabot");
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elizabot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShowChats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowChats */ "./containers/Chatbot/ShowChats.tsx");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Chatbot/Chat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const eliza = new elizabot__WEBPACK_IMPORTED_MODULE_2___default.a();

const Chatbot = () => {
  const {
    0: chats,
    1: setChats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: listen,
    1: setListen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const setReply = () => {
      const reply = eliza.transform(value);
      chats.push({
        id: Date.now(),
        message: reply
      });
      setChats([...chats]);
      setListen(false);
    };

    setTimeout(() => {
      if (listen) setReply();
    }, 1000);
  }, [listen]);

  const handleChat = e => {
    if (e.key === 'Enter') {
      chats.push({
        id: Date.now(),
        message: value
      });
      setChats([...chats]);
      setValue('');
      setListen(true);
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_ShowChats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    chats: chats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(baseui_input__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: value,
    onChange: e => setValue(e.currentTarget.value),
    onKeyPress: handleChat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chatbot);

/***/ }),

/***/ "./containers/Chatbot/ShowChats.tsx":
/*!******************************************!*\
  !*** ./containers/Chatbot/ShowChats.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/tag */ "baseui/tag");
/* harmony import */ var baseui_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_tag__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Chatbot/ShowChats.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ShowChats = ({
  chats
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, chats && chats.length ? chats.map((chat, index) => __jsx("div", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(baseui_tag__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, chat.message))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ShowChats);

/***/ })

};;
//# sourceMappingURL=0.js.map