webpackHotUpdate("static/development/pages/apps.js",{

/***/ "./components/SideMenu/AppsMenu.tsx":
/*!******************************************!*\
  !*** ./components/SideMenu/AppsMenu.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "../node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideMenu.styled */ "./components/SideMenu/SideMenu.styled.tsx");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/components/SideMenu/AppsMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var menuItems = [{
  id: 1,
  label: 'Calendar',
  path: '/apps'
}, {
  id: 2,
  label: 'To do',
  path: '/apps/todo'
}, {
  id: 3,
  label: 'Firebase CRUD',
  path: '/apps/firebase-crud'
}, {
  id: 4,
  label: 'Invoice',
  path: '/apps/invoice'
}, {
  id: 5,
  label: 'Github',
  path: '/apps/github'
}, {
  id: 6,
  label: 'Product hunt',
  path: '/apps/product-hunt'
}, {
  id: 7,
  label: 'Chatbot',
  path: '/apps/chatbot'
}];

var AppsMenu = function AppsMenu(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onClick = _ref.onClick;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      pathname = _useRouter.pathname;

  var newpathname = pathname.split('/').slice(2, 3);
  var mainpath = "/".concat(newpathname[0]);
  return __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: ".navbar",
    innerZ: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "side-menu ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, menuItems.map(function (item) {
    var menupathname = item.path.split('/').slice(2, 3);
    var menupath = "/".concat(menupathname[0]);
    return __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
      key: "side-menu--key".concat(item.id),
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["MenuLink"], {
      className: mainpath === menupath ? 'active' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, item.label)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AppsMenu);

/***/ })

})
//# sourceMappingURL=apps.js.080b25a80020259bc073.hot-update.js.map