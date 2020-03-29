module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/flexboxgrid2/flexboxgrid2.css":
/*!*****************************************************!*\
  !*** ../node_modules/flexboxgrid2/flexboxgrid2.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css":
/*!****************************************************************************!*\
  !*** ../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/classNames.js":
/*!************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/classNames.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;

var _flexboxgrid = __webpack_require__(/*! flexboxgrid2/flexboxgrid2.css */ "../node_modules/flexboxgrid2/flexboxgrid2.css");

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getClass(className) {
  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
}

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/components/Col.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Col.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(/*! ../createProps */ "../node_modules/react-flexbox-grid/lib/createProps.js");

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(/*! ../classNames */ "../node_modules/react-flexbox-grid/lib/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _types = __webpack_require__(/*! ../types */ "../node_modules/react-flexbox-grid/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xl: _types.ColumnSizeType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  xlOffset: _propTypes2.default.number,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};
var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames2.default)('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames2.default)('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, ['tagName']);

  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/components/Grid.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Grid.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(/*! ../createProps */ "../node_modules/react-flexbox-grid/lib/createProps.js");

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(/*! ../classNames */ "../node_modules/react-flexbox-grid/lib/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var propTypes = {
  fluid: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function Grid(props) {
  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
  var classNames = [props.className, containerClass];
  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
}

Grid.propTypes = propTypes;

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/components/Row.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Row.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = __webpack_require__(/*! ../classNames */ "../node_modules/react-flexbox-grid/lib/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(/*! ../createProps */ "../node_modules/react-flexbox-grid/lib/createProps.js");

var _createProps2 = _interopRequireDefault(_createProps);

var _types = __webpack_require__(/*! ../types */ "../node_modules/react-flexbox-grid/lib/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];
var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function getRowClassNames(props) {
  var modificators = [props.className, (0, _classNames2.default)('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];

    if (value) {
      modificators.push((0, _classNames2.default)(key + '-' + value));
    }
  }

  if (props.reverse) {
    modificators.push((0, _classNames2.default)('reverse'));
  }

  return modificators;
}

function getRowProps(props) {
  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/createProps.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/createProps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;

function createProps(propTypes, props, classNames) {
  var newProps = {};
  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    return newProps[key] = props[key];
  });
  var className = classNames.filter(function (cn) {
    return cn;
  }).join(' ');
  return Object.assign({}, newProps, {
    className: className
  });
}

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

var _Row2 = __webpack_require__(/*! ./components/Row */ "../node_modules/react-flexbox-grid/lib/components/Row.js");

Object.defineProperty(exports, 'getRowProps', {
  enumerable: true,
  get: function get() {
    return _Row2.getRowProps;
  }
});

var _Col2 = __webpack_require__(/*! ./components/Col */ "../node_modules/react-flexbox-grid/lib/components/Col.js");

Object.defineProperty(exports, 'getColumnProps', {
  enumerable: true,
  get: function get() {
    return _Col2.getColumnProps;
  }
});

var _Grid2 = __webpack_require__(/*! ./components/Grid */ "../node_modules/react-flexbox-grid/lib/components/Grid.js");

var _Grid3 = _interopRequireDefault(_Grid2);

var _Row3 = _interopRequireDefault(_Row2);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.Grid = _Grid3.default;
exports.Row = _Row3.default;
exports.Col = _Col3.default;

/***/ }),

/***/ "../node_modules/react-flexbox-grid/lib/types.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/types.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);

var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

/***/ }),

/***/ "./components/SideMenu/AppsMenu.tsx":
/*!******************************************!*\
  !*** ./components/SideMenu/AppsMenu.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideMenu.styled */ "./components/SideMenu/SideMenu.styled.tsx");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/components/SideMenu/AppsMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const menuItems = [{
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

const AppsMenu = ({
  className = '',
  onClick
}) => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const newpathname = pathname.split('/').slice(2, 3);
  const mainpath = `/${newpathname[0]}`;
  return __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: ".navbar",
    innerZ: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: `side-menu ${className}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, menuItems.map(item => {
    const menupathname = item.path.split('/').slice(2, 3);
    const menupath = `/${menupathname[0]}`;
    return __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
      key: `side-menu--key${item.id}`,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx(_SideMenu_styled__WEBPACK_IMPORTED_MODULE_4__["MenuLink"], {
      className: mainpath === menupath ? 'active' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, item.label)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AppsMenu);

/***/ }),

/***/ "./components/SideMenu/SideMenu.styled.tsx":
/*!*************************************************!*\
  !*** ./components/SideMenu/SideMenu.styled.tsx ***!
  \*************************************************/
/*! exports provided: MenuItem, MenuLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLink", function() { return MenuLink; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Menu = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('ul', ({
  $theme
}) => ({
  '@media only screen and (max-width: 991px)': {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    position: 'relative',
    width: '100vw',
    left: '-50vw',
    marginLeft: '50%',
    paddingBottom: '20px',
    backgroundColor: $theme.colors.primaryB
  }
}));
const MenuItem = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('li', ({
  $theme
}) => ({
  listStyle: 'none',
  color: $theme.colors.contentSecondary,
  marginBottom: $theme.sizing.scale600,
  '@media only screen and (max-width: 991px)': {
    paddingLeft: '15px',
    paddingRight: '15px',
    marginBottom: 0,
    flexShrink: 0,
    ':last-child': {
      paddingRight: '30px'
    }
  },
  ':last-child': {
    marginBottom: 0
  }
}));
const MenuLink = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('a', ({
  $theme
}) => _objectSpread({}, $theme.typography.font250, {
  cursor: 'pointer',
  color: $theme.colors.contentSecondary,
  transition: 'all 0.3s ease',
  ':hover': {
    color: $theme.colors.primary
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Menu);

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
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/components/UiElements/Container/Container.tsx";
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

/***/ "./containers/Calendar/CreateOrUpdateEvent.tsx":
/*!*****************************************************!*\
  !*** ./containers/Calendar/CreateOrUpdateEvent.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/form-control */ "baseui/form-control");
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/textarea */ "baseui/textarea");
/* harmony import */ var baseui_textarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_textarea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/datepicker */ "baseui/datepicker");
/* harmony import */ var baseui_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var baseui_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/modal */ "baseui/modal");
/* harmony import */ var baseui_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui_modal__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Calendar/CreateOrUpdateEvent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (({
  onClose,
  isOpen,
  onSubmit,
  event
}) => {
  const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(event.title ? event.title : '');
  const [desc, setDescription] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(event.desc ? event.desc : '');
  const [slots, setSlots] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([event.start, event.end]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(_objectSpread({}, event, {
      title,
      desc,
      slots
    }));
  }

  return __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    onClose: onClose,
    closeable: true,
    isOpen: isOpen,
    animate: true,
    autoFocus: true,
    size: baseui_modal__WEBPACK_IMPORTED_MODULE_5__["SIZE"].default,
    role: baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ROLE"].dialog,
    overrides: {
      Root: {
        style: {
          zIndex: 99999
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Hello world"), __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: "Set Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(baseui_input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "input-id",
    value: title,
    onChange: event => setTitle(event.currentTarget.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: "Set Description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(baseui_textarea__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    id: "textarea-id",
    value: desc,
    onChange: event => setDescription(event.currentTarget.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), __jsx(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: "Set Date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(baseui_datepicker__WEBPACK_IMPORTED_MODULE_4__["Datepicker"], {
    range: true,
    value: slots,
    onChange: ({
      date
    }) => setSlots(date),
    placeholder: "YYYY/MM/DD \u2013 YYYY/MM/DD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))), __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ModalButton"], {
    type: "button",
    onClick: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Cancel"), __jsx(baseui_modal__WEBPACK_IMPORTED_MODULE_5__["ModalButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Okay"))));
});

/***/ }),

/***/ "./containers/Calendar/data.ts":
/*!*************************************!*\
  !*** ./containers/Calendar/data.ts ***!
  \*************************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
const now = new Date();
const events = [{
  id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2020, 3, 0),
  end: new Date(2020, 3, 1)
}, {
  id: 1,
  title: 'Long Event',
  start: new Date(2015, 3, 7),
  end: new Date(2015, 3, 10)
}, {
  id: 2,
  title: 'DTS STARTS',
  start: new Date(2016, 2, 13, 0, 0, 0),
  end: new Date(2016, 2, 20, 0, 0, 0)
}, {
  id: 3,
  title: 'DTS ENDS',
  start: new Date(2016, 10, 6, 0, 0, 0),
  end: new Date(2016, 10, 13, 0, 0, 0)
}, {
  id: 4,
  title: 'Some Event',
  start: new Date(2015, 3, 9, 0, 0, 0),
  end: new Date(2015, 3, 10, 0, 0, 0)
}, {
  id: 5,
  title: 'Conference',
  start: new Date(2015, 3, 11),
  end: new Date(2015, 3, 13),
  desc: 'Big conference for important people'
}, {
  id: 6,
  title: 'Meeting',
  start: new Date(2020, 3, 12, 10, 30, 0, 0),
  end: new Date(2020, 3, 12, 12, 30, 0, 0),
  desc: 'Pre-meeting meeting, to prepare for the meeting'
}, {
  id: 7,
  title: 'Lunch',
  start: new Date(2015, 3, 12, 12, 0, 0, 0),
  end: new Date(2015, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch'
}, {
  id: 8,
  title: 'Meeting',
  start: new Date(2015, 3, 12, 14, 0, 0, 0),
  end: new Date(2015, 3, 12, 15, 0, 0, 0)
}, {
  id: 9,
  title: 'Happy Hour',
  start: new Date(2015, 3, 12, 17, 0, 0, 0),
  end: new Date(2015, 3, 12, 17, 30, 0, 0),
  desc: 'Most important meal of the day'
}, {
  id: 10,
  title: 'Dinner',
  start: new Date(2015, 3, 12, 20, 0, 0, 0),
  end: new Date(2015, 3, 12, 21, 0, 0, 0)
}, {
  id: 11,
  title: 'Birthday Party',
  start: new Date(2015, 3, 13, 7, 0, 0),
  end: new Date(2015, 3, 13, 10, 30, 0)
}, {
  id: 12,
  title: 'Late Night Event',
  start: new Date(2015, 3, 17, 19, 30, 0),
  end: new Date(2015, 3, 18, 2, 0, 0)
}, {
  id: 12.5,
  title: 'Late Same Night Event',
  start: new Date(2015, 3, 17, 19, 30, 0),
  end: new Date(2015, 3, 17, 23, 30, 0)
}, {
  id: 13,
  title: 'Multi-day Event',
  start: new Date(2015, 3, 20, 19, 30, 0),
  end: new Date(2015, 3, 22, 2, 0, 0)
}, {
  id: 14,
  title: 'Today',
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3))
}, {
  id: 15,
  title: 'Point in Time Event',
  start: now,
  end: now
}, {
  id: 16,
  title: 'Video Record',
  start: new Date(2015, 3, 14, 15, 30, 0),
  end: new Date(2015, 3, 14, 19, 0, 0)
}, {
  id: 17,
  title: 'Dutch Song Producing',
  start: new Date(2015, 3, 14, 16, 30, 0),
  end: new Date(2015, 3, 14, 20, 0, 0)
}, {
  id: 18,
  title: 'Itaewon Halloween Meeting',
  start: new Date(2015, 3, 14, 16, 30, 0),
  end: new Date(2015, 3, 14, 17, 30, 0)
}, {
  id: 19,
  title: 'Online Coding Test',
  start: new Date(2015, 3, 14, 17, 30, 0),
  end: new Date(2015, 3, 14, 20, 30, 0)
}, {
  id: 20,
  title: 'An overlapped Event',
  start: new Date(2015, 3, 14, 17, 0, 0),
  end: new Date(2015, 3, 14, 18, 30, 0)
}, {
  id: 21,
  title: 'Phone Interview',
  start: new Date(2015, 3, 14, 17, 0, 0),
  end: new Date(2015, 3, 14, 18, 30, 0)
}, {
  id: 22,
  title: 'Cooking Class',
  start: new Date(2015, 3, 14, 17, 30, 0),
  end: new Date(2015, 3, 14, 19, 0, 0)
}, {
  id: 23,
  title: 'Go to the gym',
  start: new Date(2015, 3, 14, 18, 30, 0),
  end: new Date(2015, 3, 14, 20, 0, 0)
}]; // const events = [
//   {
//     allDay: false,
//     start: '2017-06-13T12:41:31.046Z',
//     end: '2017-06-13T12:41:31.046Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-06T18:22:42.716Z',
//     end: '2017-06-06T18:22:42.716Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-14T18:53:31.353Z',
//     end: '2017-06-14T18:53:31.353Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-06T10:50:35.587Z',
//     end: '2017-06-06T10:50:35.587Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-01T07:26:27.020Z',
//     end: '2017-06-01T07:26:27.020Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-01T04:19:19.302Z',
//     end: '2017-06-01T04:19:19.302Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-05T08:21:30.519Z',
//     end: '2017-06-05T08:21:30.519Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-06T12:33:34.094Z',
//     end: '2017-06-06T12:33:34.094Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-06T19:08:51.789Z',
//     end: '2017-06-06T19:08:51.789Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-04T12:53:06.477Z',
//     end: '2017-06-04T12:53:06.477Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-31T08:13:58.232Z',
//     end: '2017-05-31T08:13:58.232Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-31T20:49:56.502Z',
//     end: '2017-05-31T20:49:56.502Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-25T16:37:46.342Z',
//     end: '2017-05-25T16:37:46.342Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-22T20:55:43.440Z',
//     end: '2017-05-22T20:55:43.440Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-08T01:26:44.401Z',
//     end: '2017-06-08T01:26:44.401Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-13T15:13:00.444Z',
//     end: '2017-06-13T15:13:00.444Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-15T15:07:34.588Z',
//     end: '2017-06-15T15:07:34.588Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-17T05:51:03.042Z',
//     end: '2017-06-17T05:51:03.042Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-04T05:44:43.848Z',
//     end: '2017-06-04T05:44:43.848Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-27T18:52:12.327Z',
//     end: '2017-05-27T18:52:12.327Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-03T10:56:32.981Z',
//     end: '2017-06-03T10:56:32.981Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-04T23:39:50.313Z',
//     end: '2017-06-04T23:39:50.313Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-13T01:47:36.119Z',
//     end: '2017-06-13T01:47:36.119Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-09T10:53:59.669Z',
//     end: '2017-06-09T10:53:59.669Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-06T23:37:30.150Z',
//     end: '2017-06-06T23:37:30.150Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-24T15:47:41.647Z',
//     end: '2017-05-24T15:47:41.647Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-20T09:37:22.294Z',
//     end: '2017-05-20T09:37:22.294Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-22T04:18:23.139Z',
//     end: '2017-05-22T04:18:23.139Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-21T12:52:59.331Z',
//     end: '2017-05-21T12:52:59.331Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-05T19:12:46.218Z',
//     end: '2017-06-05T19:12:46.218Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-18T05:42:32.376Z',
//     end: '2017-06-18T05:42:32.376Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-13T08:25:55.959Z',
//     end: '2017-06-13T08:25:55.959Z',
//   },
//   {
//     allDay: true,
//     start: '2017-06-13T06:24:45.567Z',
//     end: '2017-06-13T06:24:45.567Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-10T16:02:57.478Z',
//     end: '2017-06-10T16:02:57.478Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-13T18:05:48.180Z',
//     end: '2017-06-13T18:05:48.180Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-17T11:41:16.372Z',
//     end: '2017-06-17T11:41:16.372Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-25T01:29:20.872Z',
//     end: '2017-05-25T01:29:20.872Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-01T18:23:07.322Z',
//     end: '2017-06-01T18:23:07.322Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-22T04:20:36.858Z',
//     end: '2017-05-22T04:20:36.858Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-26T12:05:32.983Z',
//     end: '2017-05-26T12:05:32.983Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-01T13:57:24.817Z',
//     end: '2017-06-01T13:57:24.817Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-29T17:58:20.674Z',
//     end: '2017-05-29T17:58:20.674Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-11T01:19:28.050Z',
//     end: '2017-06-11T01:19:28.050Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-31T07:10:27.044Z',
//     end: '2017-05-31T07:10:27.044Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-26T09:00:39.158Z',
//     end: '2017-05-26T09:00:39.158Z',
//   },
//   {
//     allDay: true,
//     start: '2017-05-31T17:15:18.611Z',
//     end: '2017-05-31T17:15:18.611Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-10T19:42:35.124Z',
//     end: '2017-06-10T19:42:35.124Z',
//   },
//   {
//     allDay: false,
//     start: '2017-05-20T18:40:49.210Z',
//     end: '2017-05-20T18:40:49.210Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-04T11:36:22.540Z',
//     end: '2017-06-04T11:36:22.540Z',
//   },
//   {
//     allDay: false,
//     start: '2017-06-13T20:53:08.880Z',
//     end: '2017-06-13T20:53:08.880Z',
//   },
// ];
// const datediff = new moment(new Date()).diff(
//   new moment('2017-06-01T18:23:07.322Z'),
//   'days'
// );
// events.forEach((event, index) => {
//   events[index].id = `${index + 1}`;
//   events[index].title = `Demo event ${index + 1}`;
//   events[index].desc = `Desc of event ${index + 1}`;
//   events[index].start = new moment(event.start).add(datediff, 'days').toDate();
//   events[index].end = new moment(event.end).add(datediff, 'days').toDate();
// });
// export default events.splice(0, 10);

/***/ }),

/***/ "./containers/Calendar/index.tsx":
/*!***************************************!*\
  !*** ./containers/Calendar/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ "react-big-calendar");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./containers/Calendar/data.ts");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-big-calendar/lib/addons/dragAndDrop */ "react-big-calendar/lib/addons/dragAndDrop");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-big-calendar/lib/addons/dragAndDrop/styles.css */ "../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css");
/* harmony import */ var react_big_calendar_lib_addons_dragAndDrop_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_addons_dragAndDrop_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CreateOrUpdateEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateOrUpdateEvent */ "./containers/Calendar/CreateOrUpdateEvent.tsx");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Calendar/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_1___default.a);
const DragAndDropCalendar = react_big_calendar_lib_addons_dragAndDrop__WEBPACK_IMPORTED_MODULE_4___default()(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__["Calendar"]);

function CalendarApp() {
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [actionType, setActionType] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('create');
  const [event, setEvent] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    events: _data__WEBPACK_IMPORTED_MODULE_3__["events"]
  });

  function moveEvent({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot
  }) {
    const {
      events
    } = state;
    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = _objectSpread({}, event, {
      start,
      end,
      allDay
    });

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    setState(_objectSpread({}, state, {
      events: nextEvents
    })); // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  function resizeEvent({
    event,
    start,
    end
  }) {
    const {
      events
    } = state;
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id ? _objectSpread({}, existingEvent, {
        start,
        end
      }) : existingEvent;
    });
    setState(_objectSpread({}, state, {
      events: nextEvents
    })); //alert(`${event.title} was resized to ${start}-${end}`)
  }

  function newEvent(event) {
    let idList = state.events.map(a => a.id);
    let newId = Math.max(...idList) + 1;
    let hour = {
      id: newId,
      title: event.title,
      allDay: event.slots.length == 1,
      desc: event.desc,
      start: event.slots.length == 1 ? event.start : event.slots[0],
      end: event.slots.length == 1 ? event.end : event.slots[1]
    };
    setState(_objectSpread({}, state, {
      events: state.events.concat([hour])
    }));
    return;
  }

  function updateEvent(event) {
    let updatedEvent = {
      id: event.id,
      title: event.title,
      allDay: event.slots.length == 1,
      desc: event.desc,
      start: event.slots.length == 1 ? event.start : event.slots[0],
      end: event.slots.length == 1 ? event.end : event.slots[1]
    };
    setState(_objectSpread({}, state, {
      events: state.events.map(item => item.id === updatedEvent.id ? updatedEvent : item)
    }));
    return;
  }

  function onSubmit(value) {
    setIsOpen(false);
    setEvent(null);

    if (actionType === 'create') {
      newEvent(value);
    }

    if (actionType === 'update') {
      updateEvent(value);
    }
  }

  function onSelectEvent(selectedEvent) {
    setIsOpen(true);
    setEvent(selectedEvent);
    setActionType('update');
  }

  function onSelectSlot(selectedSlot) {
    setEvent(selectedSlot);
    setActionType('create');
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setEvent(null);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DragAndDropCalendar, {
    popup: true,
    selectable: true,
    localizer: localizer,
    events: state.events,
    onEventDrop: moveEvent,
    resizable: true,
    onEventResize: resizeEvent,
    onSelectSlot: onSelectSlot,
    onSelectEvent: onSelectEvent,
    onDragStart: console.log,
    defaultView: react_big_calendar__WEBPACK_IMPORTED_MODULE_2__["Views"].MONTH,
    defaultDate: new Date(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), event && __jsx(_CreateOrUpdateEvent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClose: close,
    isOpen: isOpen,
    event: event,
    type: actionType,
    onSubmit: value => onSubmit(value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CalendarApp);

/***/ }),

/***/ "./pages/apps/index.tsx":
/*!******************************!*\
  !*** ./pages/apps/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flexbox-grid */ "../node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/block */ "baseui/block");
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_block__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UiElements/Container/Container */ "./components/UiElements/Container/Container.tsx");
/* harmony import */ var _components_SideMenu_AppsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SideMenu/AppsMenu */ "./components/SideMenu/AppsMenu.tsx");
/* harmony import */ var _containers_Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/Calendar */ "./containers/Calendar/index.tsx");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/pages/apps/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Apps = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Calendar | INST."), __jsx("meta", {
    name: "Description",
    content: "Inst calendar app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx(_components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(baseui_block__WEBPACK_IMPORTED_MODULE_3__["Block"], {
    paddingTop: ['15px', '20px', '30px', '40px'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_SideMenu_AppsMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(baseui_block__WEBPACK_IMPORTED_MODULE_3__["Block"], {
    paddingTop: ['10px', '10px', 0],
    minHeight: "500px",
    height: "100%",
    maxHeight: "700px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_containers_Calendar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Apps);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/apps/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/merin/dashboard-apps/inst/frontend/pages/apps/index.tsx */"./pages/apps/index.tsx");


/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "baseui/block":
/*!*******************************!*\
  !*** external "baseui/block" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/block");

/***/ }),

/***/ "baseui/datepicker":
/*!************************************!*\
  !*** external "baseui/datepicker" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/datepicker");

/***/ }),

/***/ "baseui/form-control":
/*!**************************************!*\
  !*** external "baseui/form-control" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/form-control");

/***/ }),

/***/ "baseui/input":
/*!*******************************!*\
  !*** external "baseui/input" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/input");

/***/ }),

/***/ "baseui/modal":
/*!*******************************!*\
  !*** external "baseui/modal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/modal");

/***/ }),

/***/ "baseui/textarea":
/*!**********************************!*\
  !*** external "baseui/textarea" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/textarea");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-big-calendar":
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "react-big-calendar/lib/addons/dragAndDrop":
/*!************************************************************!*\
  !*** external "react-big-calendar/lib/addons/dragAndDrop" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar/lib/addons/dragAndDrop");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=apps.js.map