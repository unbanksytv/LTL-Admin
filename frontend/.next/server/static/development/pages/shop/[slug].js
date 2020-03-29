module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/shop/[slug].js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/apollo/client.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








let globalApolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient(); // Run wrapped getInitialProps methods

      const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {}; // Only on the server:

      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread({}, pageProps, {
                apolloClient
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread({}, pageProps, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }

  return globalApolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
    uri: "http://localhost:4000/graphql",
    // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default())
  });
  const ssrMode = true;
  const cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState);
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode,
    link: httpLink,
    cache
  });
}

/***/ }),

/***/ "./components/PageStyles/Product.styled.tsx":
/*!**************************************************!*\
  !*** ./components/PageStyles/Product.styled.tsx ***!
  \**************************************************/
/*! exports provided: MediaWrapper, Image, ContentWrapper, ProductTitle, ProductPrice, List, ListItem, ProductDescription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaWrapper", function() { return MediaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
});
const MediaWrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  width: '470px',
  textAlign: 'center',
  '@media only screen and (max-width: 1200px)': {
    width: '400px'
  },
  '@media only screen and (max-width: 767px)': {
    width: '100%'
  }
});
const Image = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('img', ({
  $theme
}) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  backgroundColor: $theme.colors.primaryB,
  boxShadow: $theme.lighting.shadow500
}));
const ContentWrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  width: 'calc(100% - 518px)',
  '@media only screen and (max-width: 1200px)': {
    width: 'calc(100% - 440px)'
  },
  '@media only screen and (max-width: 767px)': {
    width: '100%',
    paddingTop: '40px'
  }
});
const ProductTitle = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('h3', ({
  $theme
}) => _objectSpread({}, $theme.typography.font850, {
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale500,
  '@media only screen and (max-width: 767px)': _objectSpread({}, $theme.typography.font750),
  '@media only screen and (max-width: 480px)': _objectSpread({}, $theme.typography.font650)
}));
const ProductPrice = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', ({
  $theme
}) => _objectSpread({}, $theme.typography.font750, {
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale1400,
  '@media only screen and (max-width: 767px)': _objectSpread({}, $theme.typography.font650, {
    marginBottom: $theme.sizing.scale1000
  }),
  '@media only screen and (max-width: 480px)': _objectSpread({}, $theme.typography.font550)
}));
const List = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('ul', ({
  $theme
}) => ({
  margin: `${$theme.sizing.scale800} 0`
}));
const ListItem = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('li', ({
  $theme
}) => _objectSpread({}, $theme.typography.font200, {
  color: $theme.colors.contentSecondary,
  marginBottom: $theme.sizing.scale600,
  display: 'flex',
  alignItems: 'center'
}));
const ProductDescription = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('p', ({
  $theme
}) => _objectSpread({}, $theme.typography.font200, {
  color: $theme.colors.contentSecondary,
  lineHeight: '26px',
  marginBottom: $theme.sizing.scale900
}));
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UiElements/Carousel/Carousel.styled.tsx":
/*!************************************************************!*\
  !*** ./components/UiElements/Carousel/Carousel.styled.tsx ***!
  \************************************************************/
/*! exports provided: DefaultBtn, BulletButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  position: 'relative'
});
const DefaultBtn = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', {
  cursor: 'pointer',
  margin: '10px 3px'
});
const BulletButton = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', {
  cursor: 'pointer',
  width: '10px',
  height: '10px',
  margin: '4px',
  border: 0,
  padding: 0,
  outline: 'none',
  borderRadius: '50%',
  backgroundColor: '#d6d6d6'
});
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UiElements/Carousel/Carousel.tsx":
/*!*****************************************************!*\
  !*** ./components/UiElements/Carousel/Carousel.tsx ***!
  \*****************************************************/
/*! exports provided: Slide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.styled */ "./components/UiElements/Carousel/Carousel.styled.tsx");
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Carousel/Carousel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Carousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  thumbs,
  numberOfBullets,
  carouselSelector
}) => {
  const addAllClasses = ['glide'];

  if (className) {
    addAllClasses.push(className);
  }

  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1___default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  }, [options]);
  return __jsx(_Carousel_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, children)), controls && __jsx("div", {
    className: "glide__controls",
    "data-glide-el": "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, prevButton ? prevButton : __jsx(_Carousel_styled__WEBPACK_IMPORTED_MODULE_2__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Prev")), __jsx("div", {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, nextButton ? nextButton : __jsx(_Carousel_styled__WEBPACK_IMPORTED_MODULE_2__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Next"))), bullets && __jsx("div", {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, totalBullets.map(index => __jsx(_Carousel_styled__WEBPACK_IMPORTED_MODULE_2__["BulletButton"], {
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))), bullets !== true && thumbs && thumbs.length > 0 && __jsx("div", {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, thumbs.map((item, index) => __jsx("div", {
    key: index,
    className: "glide__thumb",
    "data-glide-dir": `=${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("img", {
    src: item.url,
    alt: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })))));
};

const Slide = ({
  children
}) => {
  return __jsx(_Carousel_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, children);
};

Carousel.defaultProps = {
  controls: true,
  bullets: false
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/UiElements/Container/Container.styled.tsx":
/*!**************************************************************!*\
  !*** ./components/UiElements/Container/Container.styled.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);

const ContainerArea = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  width: '100%',
  maxWidth: '1070px',
  paddingLeft: '15px',
  paddingRight: '15px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  '@media screen and (max-width: 1200px)': {
    maxWidth: '970px'
  } // '@media screen and (max-width: 991px)': {
  //   maxWidth: '750px',
  // },

});
/* harmony default export */ __webpack_exports__["default"] = (ContainerArea);

/***/ }),

/***/ "./components/UiElements/Container/Container.tsx":
/*!*******************************************************!*\
  !*** ./components/UiElements/Container/Container.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.styled */ "./components/UiElements/Container/Container.styled.tsx");
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Container/Container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = ({
  children
}) => {
  return __jsx(_Container_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/UiElements/PageTitle/PageTitle.styled.tsx":
/*!**************************************************************!*\
  !*** ./components/UiElements/PageTitle/PageTitle.styled.tsx ***!
  \**************************************************************/
/*! exports provided: Title, Subtitle, Backdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return Backdrop; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Section = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('section', {
  width: '100%',
  padding: '46px 0 50px',
  position: 'relative',
  '@media only screen and (max-width: 991px)': {
    padding: '30px 0 40px'
  },
  '@media only screen and (max-width: 480px)': {
    padding: '30px 0'
  }
});
const Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('h2', ({
  $theme
}) => _objectSpread({}, $theme.typography.font950, {
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale600,
  '@media only screen and (max-width: 991px)': _objectSpread({}, $theme.typography.font850),
  '@media only screen and (max-width: 767px)': _objectSpread({}, $theme.typography.font750, {
    marginBottom: $theme.sizing.scale500
  }),
  '@media only screen and (max-width: 480px)': _objectSpread({}, $theme.typography.font650, {
    marginBottom: $theme.sizing.scale400
  })
}));
const Subtitle = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('p', ({
  $theme
}) => _objectSpread({}, $theme.typography.font200, {
  color: $theme.colors.contentSecondary
}));
const Backdrop = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', ({
  $theme
}) => ({
  width: '100%',
  height: '286px',
  backgroundColor: $theme.colors.backgroundSecondary,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`
}));
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/UiElements/PageTitle/PageTitle.tsx":
/*!*******************************************************!*\
  !*** ./components/UiElements/PageTitle/PageTitle.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container/Container */ "./components/UiElements/Container/Container.tsx");
/* harmony import */ var _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitle.styled */ "./components/UiElements/PageTitle/PageTitle.styled.tsx");
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/PageTitle/PageTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PageTitle = ({
  title,
  subtitle,
  backdrop,
  bgColor
}) => {
  return __jsx(_PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      backgroundColor: bgColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_Container_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, title), subtitle && __jsx(_PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, subtitle)), backdrop && __jsx(_PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__["Backdrop"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

PageTitle.defaultProps = {
  backdrop: true
};
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./contexts/cart/cart.provider.ts":
/*!****************************************!*\
  !*** ./contexts/cart/cart.provider.ts ***!
  \****************************************/
/*! exports provided: useCartState, useCartDispatch, CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartState", function() { return useCartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartDispatch", function() { return useCartDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.utils */ "./contexts/context.utils.tsx");
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.reducer */ "./contexts/cart/cart.reducer.ts");


const [useCartState, useCartDispatch, CartProvider] = Object(_context_utils__WEBPACK_IMPORTED_MODULE_0__["createCtxWithReducer"])(_cart_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], _cart_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
 // example usage inside a component
// function Counter() {
//   const { state, dispatch } = React.useContext(CountContext);
//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'add', payload: 5 })}>+5</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'minus', payload: 5 })}>
//         +5
//       </button>
//     </div>
//   );
// }

/***/ }),

/***/ "./contexts/cart/cart.reducer.ts":
/*!***************************************!*\
  !*** ./contexts/cart/cart.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.utils */ "./contexts/cart/cart.utils.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  hidden: true,
  cartItems: [],
  address: null
}; // type State = typeof initialState;

function cartReducer(state, action) {
  console.log(state, 'context state');

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return _objectSpread({}, state, {
        hidden: !state.hidden
      });

    case 'ADD_ITEM':
      return _objectSpread({}, state, {
        cartItems: Object(_cart_utils__WEBPACK_IMPORTED_MODULE_0__["addItemToCart"])(state.cartItems, action.payload)
      });

    case 'REMOVE_ITEM':
      return _objectSpread({}, state, {
        cartItems: Object(_cart_utils__WEBPACK_IMPORTED_MODULE_0__["removeItemFromCart"])(state.cartItems, action.payload)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread({}, state, {
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      });

    case 'CLEAR_CART':
      return _objectSpread({}, state, {
        cartItems: []
      });

    default:
      return state;
    // default: {
    //   throw new Error(`Unhandled action type: ${action.type}`);
    // }
  }
}

/***/ }),

/***/ "./contexts/cart/cart.utils.ts":
/*!*************************************!*\
  !*** ./contexts/cart/cart.utils.ts ***!
  \*************************************/
/*! exports provided: addItemToCart, removeItemFromCart, calcCartItemsTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCart", function() { return addItemToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCart", function() { return removeItemFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCartItemsTotal", function() { return calcCartItemsTotal; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? _objectSpread({}, cartItem, {
      quantity: cartItem.quantity + 1
    }) : cartItem);
  }

  return [...cartItems, _objectSpread({}, cartItemToAdd, {
    quantity: 1
  })];
};
const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? _objectSpread({}, cartItem, {
    quantity: cartItem.quantity - 1
  }) : cartItem);
};
function calcCartItemsTotal(cartItems) {
  return cartItems.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
} // addToCart = () => {
//   let cart = localStorage.getItem('cart')
//                 ? JSON.parse(localStorage.getItem('cart')) : {};
//   let id = this.props.product.id.toString();
//   cart[id] = (cart[id] ? cart[id]: 0);
//   let qty = cart[id] + parseInt(this.state.quantity);
//   if (this.props.product.available_quantity < qty) {
//     cart[id] = this.props.product.available_quantity;
//   } else {
//     cart[id] = qty
//   }
//   localStorage.setItem('cart', JSON.stringify(cart));
// }
// componentDidMount() {
//   let cart = localStorage.getItem('cart');
//   if (!cart) return;
//   getCartProducts(cart).then((products) => {
//     let total = 0;
//     for (var i = 0; i < products.length; i++) {
//       total += products[i].price * products[i].qty;
//     }
//     this.setState({ products, total });
//     });
// }
// removeFromCart = (product) => {
//   let products = this.state.products.filter((item) => item.id !== product.id);
//   let cart = JSON.parse(localStorage.getItem('cart'));
//   delete cart[product.id.toString()];
//   localStorage.setItem('cart', JSON.stringify(cart));
//   let total = this.state.total - (product.qty * product.price)
//   this.setState({products, total});
// }
// clearCart = () => {
//   localStorage.removeItem('cart');
//   this.setState({products: []});
// }

/***/ }),

/***/ "./contexts/context.utils.tsx":
/*!************************************!*\
  !*** ./contexts/context.utils.tsx ***!
  \************************************/
/*! exports provided: createCtxWithReducer, createCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCtxWithReducer", function() { return createCtxWithReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCtx", function() { return createCtx; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/contexts/context.utils.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function createCtxWithReducer(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(initialState);
  const dispatchCtx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultDispatch);

  function useStateCtx(property) {
    const state = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(stateCtx);

    if (state === undefined) {
      throw new Error('useCountState must be used within a CountProvider');
    }

    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dispatchCtx);

    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider');
    }

    return context;
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, initialState);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(stateCtx.Provider, {
      value: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, children));
  } // return [ctx, Provider] as const;


  return [useStateCtx, useDispatchCtx, Provider];
} // create context with no upfront defaultValue
// without having to do undefined check all the time

function createCtx() {
  const ctx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);

  function useCtx() {
    const c = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }

  return [useCtx, ctx.Provider]; // make TypeScript infer a tuple, not an array of union types
}

/***/ }),

/***/ "./pages/shop/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/shop/[slug].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! baseui/select */ "baseui/select");
/* harmony import */ var baseui_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(baseui_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UiElements_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UiElements/PageTitle/PageTitle */ "./components/UiElements/PageTitle/PageTitle.tsx");
/* harmony import */ var _components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UiElements/Container/Container */ "./components/UiElements/Container/Container.tsx");
/* harmony import */ var _components_UiElements_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/UiElements/Carousel/Carousel */ "./components/UiElements/Carousel/Carousel.tsx");
/* harmony import */ var _utils_useDirection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/useDirection */ "./utils/useDirection.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../apollo/client */ "./apollo/client.js");
/* harmony import */ var _components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/PageStyles/Product.styled */ "./components/PageStyles/Product.styled.tsx");
/* harmony import */ var _contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../contexts/cart/cart.provider */ "./contexts/cart/cart.provider.ts");
var _jsxFileName = "/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/pages/shop/[slug].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const GET_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query getProductBySlug($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      price
      thumbnail
      gallery {
        url
      }
      colors {
        id
        label
      }
      features
      description
    }
  }
`;
react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].configure();

const ProductSingle = () => {
  const {
    query: {
      slug
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(GET_PRODUCT, {
    variables: {
      slug
    },
    notifyOnNetworkStatusChange: true
  });
  const dispatch = Object(_contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_16__["useCartDispatch"])();
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  const [direction] = Object(_utils_useDirection__WEBPACK_IMPORTED_MODULE_13__["default"])();
  console.log(color, quantity, 'color');
  if (!data) return null;
  const {
    id,
    name,
    description,
    price,
    thumbnail,
    colors,
    gallery,
    features
  } = data.product;

  function handleAddToCart() {
    const item = {
      id,
      name,
      thumbnail,
      color: color.length !== 0 ? color[0].id : undefined,
      quantity,
      price
    };
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])('Added to the bag', {
      progressClassName: 'fancy-progress-bar',
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  console.log(data, 'data');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, name, " | INST."), __jsx("meta", {
    name: "Description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })), __jsx(_components_UiElements_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: name,
    subtitle: "Awesome GitHub T-shirts and other cool swag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), __jsx(_components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["MediaWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, gallery && gallery.length !== 0 ? __jsx(_components_UiElements_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: {
      direction
    },
    controls: false,
    carouselSelector: "productGallery",
    thumbs: gallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, gallery.map((item, index) => __jsx(_components_UiElements_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_12__["Slide"], {
    key: `gallery-key${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("img", {
    src: item.url,
    alt: "Gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })))) : __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["Image"], {
    src: thumbnail,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["ProductTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, name), __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["ProductPrice"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "$ ", price), __jsx(baseui_input__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    value: quantity,
    onChange: e => setQuantity(e.target.value),
    type: "number",
    overrides: {
      Root: {
        style: () => {
          return {
            width: '100%',
            marginBottom: '30px',
            '@media only screen and (min-width: 376px)': {
              maxWidth: '240px'
            }
          };
        }
      },
      InputContainer: {
        style: () => {
          return {
            backgroundColor: 'transparent'
          };
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }), colors && __jsx(baseui_select__WEBPACK_IMPORTED_MODULE_8__["Select"], {
    options: colors,
    placeholder: "Select color",
    value: color,
    onChange: params => setColor(params.value),
    overrides: {
      Root: {
        style: () => {
          return {
            width: '100%',
            '@media only screen and (min-width: 376px)': {
              maxWidth: '240px'
            }
          };
        }
      },
      ControlContainer: {
        style: () => {
          return {
            backgroundColor: 'transparent'
          };
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), features && __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, features.map((item, index) => __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["ListItem"], {
    key: `${slug}_key ${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiCheck"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }), "\xA0 ", item))), description && __jsx(_components_PageStyles_Product_styled__WEBPACK_IMPORTED_MODULE_15__["ProductDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, description), __jsx(baseui_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: handleAddToCart,
    overrides: {
      BaseButton: {
        style: ({
          $theme
        }) => {
          return _objectSpread({}, $theme.typography.font450, {
            width: '100%',
            '@media only screen and (min-width: 376px)': _objectSpread({
              maxWidth: '240px'
            }, $theme.typography.font250)
          });
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, "Add to cart")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_apollo_client__WEBPACK_IMPORTED_MODULE_14__["withApollo"])(ProductSingle));

/***/ }),

/***/ "./utils/useDirection.ts":
/*!*******************************!*\
  !*** ./utils/useDirection.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDirection() {
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('ltr');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const body = document.getElementsByTagName('body')[0];
    const bodyDir = body.getAttribute('dir');
    setDirection(bodyDir);
  }, []);
  return [direction];
}

/***/ }),

/***/ 10:
/*!*************************************!*\
  !*** multi ./pages/shop/[slug].tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/pages/shop/[slug].tsx */"./pages/shop/[slug].tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "baseui/button":
/*!********************************!*\
  !*** external "baseui/button" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/button");

/***/ }),

/***/ "baseui/input":
/*!*******************************!*\
  !*** external "baseui/input" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/input");

/***/ }),

/***/ "baseui/select":
/*!********************************!*\
  !*** external "baseui/select" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/select");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map