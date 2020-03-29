module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js':
      /*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/define-property */ 'core-js/library/fn/object/define-property'
        );

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js':
      /*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/get-own-property-descriptor */ 'core-js/library/fn/object/get-own-property-descriptor'
        );

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/core-js/symbol.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol */ 'core-js/library/fn/symbol'
        );

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js':
      /*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/symbol/iterator */ 'core-js/library/fn/symbol/iterator'
        );

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/core-js/weak-map.js':
      /*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/weak-map */ 'core-js/library/fn/weak-map'
        );

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js':
      /*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js':
      /*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Object$getOwnPropertyDescriptor = __webpack_require__(
          /*! ../core-js/object/get-own-property-descriptor */ '../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js'
        );

        var _Object$defineProperty = __webpack_require__(
          /*! ../core-js/object/define-property */ '../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js'
        );

        var _typeof = __webpack_require__(
          /*! ../helpers/typeof */ '../node_modules/@babel/runtime-corejs2/helpers/typeof.js'
        );

        var _WeakMap = __webpack_require__(
          /*! ../core-js/weak-map */ '../node_modules/@babel/runtime-corejs2/core-js/weak-map.js'
        );

        function _getRequireWildcardCache() {
          if (typeof _WeakMap !== 'function') return null;
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

          if (
            obj === null ||
            (_typeof(obj) !== 'object' && typeof obj !== 'function')
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            _Object$defineProperty && _Object$getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? _Object$getOwnPropertyDescriptor(obj, key)
                : null;

              if (desc && (desc.get || desc.set)) {
                _Object$defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj['default'] = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        module.exports = _interopRequireWildcard;

        /***/
      },

    /***/ '../node_modules/@babel/runtime-corejs2/helpers/typeof.js':
      /*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var _Symbol$iterator = __webpack_require__(
          /*! ../core-js/symbol/iterator */ '../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js'
        );

        var _Symbol = __webpack_require__(
          /*! ../core-js/symbol */ '../node_modules/@babel/runtime-corejs2/core-js/symbol.js'
        );

        function _typeof2(obj) {
          if (
            typeof _Symbol === 'function' &&
            typeof _Symbol$iterator === 'symbol'
          ) {
            _typeof2 = function _typeof2(obj) {
              return typeof obj;
            };
          } else {
            _typeof2 = function _typeof2(obj) {
              return obj &&
                typeof _Symbol === 'function' &&
                obj.constructor === _Symbol &&
                obj !== _Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }
          return _typeof2(obj);
        }

        function _typeof(obj) {
          if (
            typeof _Symbol === 'function' &&
            _typeof2(_Symbol$iterator) === 'symbol'
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof _Symbol === 'function' &&
                obj.constructor === _Symbol &&
                obj !== _Symbol.prototype
                ? 'symbol'
                : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ '../node_modules/@glidejs/glide/dist/css/glide.core.min.css':
      /*!******************************************************************!*\
  !*** ../node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ '../node_modules/next/dist/client/link.js':
      /*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js'
        );

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js'
        );

        exports.__esModule = true;
        exports.default = void 0;

        var _url = __webpack_require__(/*! url */ 'url');

        var _react = _interopRequireWildcard(
          __webpack_require__(/*! react */ 'react')
        );

        var _router = _interopRequireDefault(
          __webpack_require__(
            /*! ./router */ '../node_modules/next/dist/client/router.js'
          )
        );

        var _utils = __webpack_require__(
          /*! ../next-server/lib/utils */ '../node_modules/next/dist/next-server/lib/utils.js'
        );

        function isLocal(href) {
          var url = (0, _url.parse)(href, false, true);
          var origin = (0, _url.parse)(
            (0, _utils.getLocationOrigin)(),
            false,
            true
          );
          return (
            !url.host ||
            (url.protocol === origin.protocol && url.host === origin.host)
          );
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
          return url && typeof url === 'object'
            ? (0, _utils.formatWithValidation)(url)
            : url;
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

          return (observer = new IntersectionObserver(
            entries => {
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
            },
            {
              rootMargin: '200px',
            }
          ));
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
                as: asHref ? formatUrl(asHref) : asHref,
              };
            });

            this.linkClicked = e => {
              // @ts-ignore target exists on currentTarget
              var { nodeName, target } = e.currentTarget;

              if (
                nodeName === 'A' &&
                ((target && target !== '_self') ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && e.nativeEvent.which === 2))
              ) {
                // ignore click for new tab / new window behavior
                return;
              }

              var { href, as } = this.formatUrls(
                this.props.href,
                this.props.as
              );

              if (!isLocal(href)) {
                // ignore click if it's outside our scope (e.g. https://google.com)
                return;
              }

              var { pathname } = window.location;
              href = (0, _url.resolve)(pathname, href);
              as = as ? (0, _url.resolve)(pathname, as) : href;
              e.preventDefault(); //  avoid scroll for urls with anchor refs

              var { scroll } = this.props;

              if (scroll == null) {
                scroll = as.indexOf('#') < 0;
              } // replace state instead of push if prop is present

              _router.default[this.props.replace ? 'replace' : 'push'](
                href,
                as,
                {
                  shallow: this.props.shallow,
                }
              ).then(success => {
                if (!success) return;

                if (scroll) {
                  window.scrollTo(0, 0);
                  document.body.focus();
                }
              });
            };

            if (true) {
              if (props.prefetch) {
                console.warn(
                  'Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated'
                );
              }
            }

            this.p = props.prefetch !== false;
          }

          componentWillUnmount() {
            this.cleanUpListeners();
          }

          getHref() {
            var { pathname } = window.location;
            var { href: parsedHref } = this.formatUrls(
              this.props.href,
              this.props.as
            );
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
            var { children } = this.props;
            var { href, as } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

            if (typeof children === 'string') {
              children = _react.default.createElement('a', null, children);
            } // This will return the first child, if multiple are provided it will throw an error

            var child = _react.Children.only(children);

            var props = {
              ref: el => {
                this.handleRef(el);

                if (child && typeof child === 'object' && child.ref) {
                  if (typeof child.ref === 'function') child.ref(el);
                  else if (typeof child.ref === 'object') {
                    child.ref.current = el;
                  }
                }
              },
              onMouseEnter: e => {
                if (
                  child.props &&
                  typeof child.props.onMouseEnter === 'function'
                ) {
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
              },
            }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
            // defined, we specify the current 'href', so that repetition is not needed by the user

            if (
              this.props.passHref ||
              (child.type === 'a' && !('href' in child.props))
            ) {
              props.href = as || href;
            } // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly.

            if (false) {
              var rewriteUrlForNextExport;
            }

            return _react.default.cloneElement(child, props);
          }
        }

        if (true) {
          var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

          var PropTypes = __webpack_require__(/*! prop-types */ 'prop-types');

          var exact = __webpack_require__(
            /*! prop-types-exact */ 'prop-types-exact'
          ); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.

          Link.propTypes = exact({
            href: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
              .isRequired,
            as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
            prefetch: PropTypes.bool,
            replace: PropTypes.bool,
            shallow: PropTypes.bool,
            passHref: PropTypes.bool,
            scroll: PropTypes.bool,
            children: PropTypes.oneOfType([
              PropTypes.element,
              (props, propName) => {
                var value = props[propName];

                if (typeof value === 'string') {
                  warn(
                    "Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"
                  );
                }

                return null;
              },
            ]).isRequired,
          });
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ '../node_modules/next/dist/client/router.js':
      /*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js'
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js'
        );

        exports.__esModule = true;
        exports.useRouter = useRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.createRouter = exports.withRouter = exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _router2 = _interopRequireWildcard(
          __webpack_require__(
            /*! ../next-server/lib/router/router */ '../node_modules/next/dist/next-server/lib/router/router.js'
          )
        );

        exports.Router = _router2.default;
        exports.NextRouter = _router2.NextRouter;

        var _routerContext = __webpack_require__(
          /*! ../next-server/lib/router-context */ '../node_modules/next/dist/next-server/lib/router-context.js'
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ '../node_modules/next/dist/client/with-router.js'
          )
        );

        exports.withRouter = _withRouter.default;
        /* global window */

        var singletonRouter = {
          router: null,
          // holds the actual router instance
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          },
        }; // Create public properties and methods of the router in the singletonRouter

        var urlPropertyFields = [
          'pathname',
          'route',
          'query',
          'asPath',
          'components',
        ];
        var routerEvents = [
          'routeChangeStart',
          'beforeHistoryChange',
          'routeChangeComplete',
          'routeChangeError',
          'hashChangeStart',
          'hashChangeComplete',
        ];
        var coreMethodFields = [
          'push',
          'replace',
          'reload',
          'back',
          'prefetch',
          'beforePopState',
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        Object.defineProperty(singletonRouter, 'events', {
          get() {
            return _router2.default.events;
          },
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
            },
          });
        });
        coreMethodFields.forEach(field => {
          // We don't really know the types here, so we add them later instead
          singletonRouter[field] = function() {
            var router = getRouter();
            return router[field](...arguments);
          };
        });
        routerEvents.forEach(event => {
          singletonRouter.ready(() => {
            _router2.default.events.on(event, function() {
              var eventField =
                'on' + event.charAt(0).toUpperCase() + event.substring(1);
              var _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...arguments);
                } catch (err) {
                  // tslint:disable-next-line:no-console
                  console.error(
                    'Error when running the Router event: ' + eventField
                  ); // tslint:disable-next-line:no-console

                  console.error(err.message + '\n' + err.stack);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            var message =
              'No router instance found.\n' +
              'You should only use "next/router" inside the client side of your app.\n';
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
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
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
            instance[field] = function() {
              return _router[field](...arguments);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ '../node_modules/next/dist/client/with-router.js':
      /*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ '../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js'
        );

        exports.__esModule = true;
        exports.default = withRouter;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ 'react')
        );

        var _router = __webpack_require__(
          /*! ./router */ '../node_modules/next/dist/client/router.js'
        );

        function withRouter(ComposedComponent) {
          function WithRouterWrapper(props) {
            return _react.default.createElement(
              ComposedComponent,
              Object.assign(
                {
                  router: (0, _router.useRouter)(),
                },
                props
              )
            );
          }

          WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
          WithRouterWrapper.origGetInitialProps =
            ComposedComponent.origGetInitialProps;

          if (true) {
            var name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              'Unknown';
            WithRouterWrapper.displayName = 'withRouter(' + name + ')';
          }

          return WithRouterWrapper;
        }

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/mitt.js':
      /*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        function mitt() {
          const all = Object.create(null);
          return {
            on(type, handler) {
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
              (all[type] || []).slice().map(handler => {
                handler(...evts);
              });
            },
          };
        }

        exports.default = mitt;

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/router-context.js':
      /*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __importStar =
          (this && this.__importStar) ||
          function(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result['default'] = mod;
            return result;
          };

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        const React = __importStar(__webpack_require__(/*! react */ 'react'));

        exports.RouterContext = React.createContext(null);

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/router/router.js':
      /*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __importDefault =
          (this && this.__importDefault) ||
          function(mod) {
            return mod && mod.__esModule
              ? mod
              : {
                  default: mod,
                };
          };

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        const url_1 = __webpack_require__(/*! url */ 'url');

        const mitt_1 = __importDefault(
          __webpack_require__(
            /*! ../mitt */ '../node_modules/next/dist/next-server/lib/mitt.js'
          )
        );

        const utils_1 = __webpack_require__(
          /*! ../utils */ '../node_modules/next/dist/next-server/lib/utils.js'
        );

        const is_dynamic_1 = __webpack_require__(
          /*! ./utils/is-dynamic */ '../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js'
        );

        const route_matcher_1 = __webpack_require__(
          /*! ./utils/route-matcher */ '../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js'
        );

        const route_regex_1 = __webpack_require__(
          /*! ./utils/route-regex */ '../node_modules/next/dist/next-server/lib/router/utils/route-regex.js'
        );

        function addBasePath(path) {
          // @ts-ignore variable is always a string
          const p = '';
          return path.indexOf(p) !== 0 ? p + path : path;
        }

        function toRoute(path) {
          return path.replace(/\/$/, '') || '/';
        }

        class Router {
          constructor(
            pathname,
            query,
            as,
            {
              initialProps,
              pageLoader,
              App,
              wrapApp,
              Component,
              err,
              subscription,
            }
          ) {
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
                const { pathname, query } = this;
                this.changeState(
                  'replaceState',
                  utils_1.formatWithValidation({
                    pathname,
                    query,
                  }),
                  utils_1.getURL()
                );
                return;
              } // Make sure we don't re-render on initial load,
              // can be caused by navigating back from an external site

              if (
                e.state &&
                this.isSsr &&
                e.state.url === this.pathname &&
                e.state.as === this.asPath
              ) {
                return;
              } // If the downstream application returns falsy, return.
              // They will then be responsible for handling the event.

              if (this._bps && !this._bps(e.state)) {
                return;
              }

              const { url, as, options } = e.state;

              if (true) {
                if (typeof url === 'undefined' || typeof as === 'undefined') {
                  console.warn(
                    '`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty'
                  );
                }
              }

              this.replace(url, as, options);
            };

            this._getStaticData = (asPath, _cachedData) => {
              let pathname = url_1.parse(asPath).pathname;
              pathname = toRoute(
                !pathname || pathname === '/' ? '/index' : pathname
              );
              return false
                ? undefined
                : fetch(
                    // @ts-ignore __NEXT_DATA__
                    `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`
                  )
                    .then(res => {
                      if (!res.ok) {
                        throw new Error(`Failed to load static props`);
                      }

                      return res.json();
                    })
                    .then(data => {
                      this.sdc[pathname] = data;
                      return data;
                    })
                    .catch(err => {
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
                err,
              };
            }

            this.components['/_app'] = {
              Component: App,
            }; // Backwards compat for Router.router.events
            // TODO: Should be remove the following major version as it was never documented
            // @ts-ignore backwards compatibility

            this.events = Router.events;
            this.pageLoader = pageLoader;
            this.pathname = pathname;
            this.query = query; // if auto prerendered and dynamic route wait to update asPath
            // until after mount to prevent hydration mismatch

            this.asPath = // @ts-ignore this is temporarily global (attached to window)
              is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport
                ? pathname
                : as;
            this.sub = subscription;
            this.clc = null;
            this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
            // back from external site

            this.isSsr = true;

            if (false) {
            }
          } // @deprecated backwards compatibility even though it's a private method.

          static _rewriteUrlForNextExport(url) {
            if (false) {
            } else {
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
              Component,
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

              const url =
                typeof _url === 'object'
                  ? utils_1.formatWithValidation(_url)
                  : _url;
              let as =
                typeof _as === 'object'
                  ? utils_1.formatWithValidation(_as)
                  : _as; // Add the ending slash to the paths. So, we can serve the
              // "<page>/index.html" directly for the SSR page.

              if (false) {
              }

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

              const { pathname, query, protocol } = url_1.parse(url, true);

              if (!pathname || protocol) {
                if (true) {
                  throw new Error(
                    `Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`
                  );
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
              const { shallow = false } = options;

              if (is_dynamic_1.isDynamicRoute(route)) {
                const { pathname: asPathname } = url_1.parse(as);
                const routeRegex = route_regex_1.getRouteRegex(route);
                const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(
                  asPathname
                );

                if (!routeMatch) {
                  const missingParams = Object.keys(routeRegex.groups).filter(
                    param => !query[param]
                  );

                  if (missingParams.length > 0) {
                    if (true) {
                      console.warn(
                        `Mismatching \`as\` and \`href\` failed to manually provide ` +
                          `the params: ${missingParams.join(
                            ', '
                          )} in the \`href\`'s \`query\``
                      );
                    }

                    return reject(
                      new Error(
                        `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` +
                          `Read more: https://err.sh/zeit/next.js/incompatible-href-as`
                      )
                    );
                  }
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }
              }

              Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
              // @ts-ignore pathname is always a string

              this.getRouteInfo(route, pathname, query, as, shallow).then(
                routeInfo => {
                  const { error } = routeInfo;

                  if (error && error.cancelled) {
                    return resolve(false);
                  }

                  Router.events.emit('beforeHistoryChange', as);
                  this.changeState(method, url, addBasePath(as), options);
                  const hash = window.location.hash.substring(1);

                  if (true) {
                    const appComp = this.components['/_app'].Component;
                    window.next.isPrerendered =
                      appComp.getInitialProps === appComp.origGetInitialProps &&
                      !routeInfo.Component.getInitialProps;
                  } // @ts-ignore pathname is always defined

                  this.set(
                    route,
                    pathname,
                    query,
                    as,
                    Object.assign(Object.assign({}, routeInfo), {
                      hash,
                    })
                  );

                  if (error) {
                    Router.events.emit('routeChangeError', error, as);
                    throw error;
                  }

                  Router.events.emit('routeChangeComplete', as);
                  return resolve(true);
                },
                reject
              );
            });
          }

          changeState(method, url, as, options = {}) {
            if (true) {
              if (typeof window.history === 'undefined') {
                console.error(`Warning: window.history is not available.`);
                return;
              } // @ts-ignore method should always exist on history

              if (typeof window.history[method] === 'undefined') {
                console.error(
                  `Warning: window.history.${method} is not available`
                );
                return;
              }
            }

            if (method !== 'pushState' || utils_1.getURL() !== as) {
              // @ts-ignore method should always exist on history
              window.history[method](
                {
                  url,
                  as,
                  options,
                },
                null,
                as
              );
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

              this.fetchComponent(route).then(
                Component =>
                  resolve({
                    Component,
                  }),
                reject
              );
            })
              .then(routeInfo => {
                const { Component } = routeInfo;

                if (true) {
                  const { isValidElementType } = __webpack_require__(
                    /*! react-is */ '../node_modules/next/node_modules/react-is/index.js'
                  );

                  if (!isValidElementType(Component)) {
                    throw new Error(
                      `The default export is not a React Component in page: "${pathname}"`
                    );
                  }
                }

                return this._getData(() =>
                  Component.__N_SSG
                    ? this._getStaticData(as)
                    : this.getInitialProps(
                        Component, // we provide AppTree later so this needs to be `any`
                        {
                          pathname,
                          query,
                          asPath: as,
                        }
                      )
                ).then(props => {
                  routeInfo.props = props;
                  this.components[route] = routeInfo;
                  return routeInfo;
                });
              })
              .catch(err => {
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
                      error: err,
                    });
                  }

                  if (err.cancelled) {
                    // @ts-ignore TODO: fix the control flow here
                    return resolve({
                      error: err,
                    });
                  }

                  resolve(
                    this.fetchComponent('/_error').then(Component => {
                      const routeInfo = {
                        Component,
                        err,
                      };
                      return new Promise(resolve => {
                        this.getInitialProps(Component, {
                          err,
                          pathname,
                          query,
                        }).then(
                          props => {
                            routeInfo.props = props;
                            routeInfo.error = err;
                            resolve(routeInfo);
                          },
                          gipErr => {
                            console.error(
                              'Error in error page `getInitialProps`: ',
                              gipErr
                            );
                            routeInfo.error = err;
                            routeInfo.props = {};
                            resolve(routeInfo);
                          }
                        );
                      });
                    })
                  );
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

            if (
              newHash &&
              oldUrlNoHash === newUrlNoHash &&
              oldHash === newHash
            ) {
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
              const { pathname, protocol } = url_1.parse(url);

              if (!pathname || protocol) {
                if (true) {
                  throw new Error(
                    `Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`
                  );
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

            const cancel = (this.clc = () => {
              cancelled = true;
            });

            const Component = await this.pageLoader.loadPage(route);

            if (cancelled) {
              const error = new Error(
                `Abort fetching component for route: "${route}"`
              );
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
            const { Component: App } = this.components['/_app'];

            const AppTree = this._wrapApp(App);

            ctx.AppTree = AppTree;
            return utils_1.loadGetInitialProps(App, {
              AppTree,
              Component,
              router: this,
              ctx,
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

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js':
      /*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        }); // Identify /[param]/ in route string

        const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

        function isDynamicRoute(route) {
          return TEST_ROUTE.test(route);
        }

        exports.isDynamicRoute = isDynamicRoute;

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js':
      /*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        function getRouteMatcher(routeRegex) {
          const { re, groups } = routeRegex;
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
                params[slugName] = ~m.indexOf('/')
                  ? m.split('/').map(entry => decode(entry))
                  : g.repeat
                  ? [decode(m)]
                  : decode(m);
              }
            });
            return params;
          };
        }

        exports.getRouteMatcher = getRouteMatcher;

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/router/utils/route-regex.js':
      /*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        function getRouteRegex(normalizedRoute) {
          // Escape all characters that could be considered RegEx
          const escapedRoute = (
            normalizedRoute.replace(/\/$/, '') || '/'
          ).replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
          const groups = {};
          let groupIndex = 1;
          const parameterizedRoute = escapedRoute.replace(
            /\/\\\[([^/]+?)\\\](?=\/|$)/g,
            (_, $1) => {
              const isCatchAll = /^(\\\.){3}/.test($1);
              groups[
                $1 // Un-escape key
                  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')
                  .replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
              ] = {
                pos: groupIndex++,
                repeat: isCatchAll,
              };
              return isCatchAll ? '/(.+?)' : '/([^/]+?)';
            }
          );
          return {
            re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
            groups,
          };
        }

        exports.getRouteRegex = getRouteRegex;

        /***/
      },

    /***/ '../node_modules/next/dist/next-server/lib/utils.js':
      /*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        const url_1 = __webpack_require__(/*! url */ 'url');
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
          const { protocol, hostname, port } = window.location;
          return `${protocol}//${hostname}${port ? ':' + port : ''}`;
        }

        exports.getLocationOrigin = getLocationOrigin;

        function getURL() {
          const { href } = window.location;
          const origin = getLocationOrigin();
          return href.substring(origin.length);
        }

        exports.getURL = getURL;

        function getDisplayName(Component) {
          return typeof Component === 'string'
            ? Component
            : Component.displayName || Component.name || 'Unknown';
        }

        exports.getDisplayName = getDisplayName;

        function isResSent(res) {
          return res.finished || res.headersSent;
        }

        exports.isResSent = isResSent;

        async function loadGetInitialProps(App, ctx) {
          var _a;

          if (true) {
            if (
              (_a = App.prototype) === null || _a === void 0
                ? void 0
                : _a.getInitialProps
            ) {
              const message = `"${getDisplayName(
                App
              )}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
              throw new Error(message);
            }
          } // when called from _app `ctx` is nested in `ctx`

          const res = ctx.res || (ctx.ctx && ctx.ctx.res);

          if (!App.getInitialProps) {
            if (ctx.ctx && ctx.Component) {
              // @ts-ignore pageProps default
              return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
              };
            }

            return {};
          }

          const props = await App.getInitialProps(ctx);

          if (res && isResSent(res)) {
            return props;
          }

          if (!props) {
            const message = `"${getDisplayName(
              App
            )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
            throw new Error(message);
          }

          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn(
                `${getDisplayName(
                  App
                )} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`
              );
            }
          }

          return props;
        }

        exports.loadGetInitialProps = loadGetInitialProps;
        exports.urlObjectKeys = [
          'auth',
          'hash',
          'host',
          'hostname',
          'href',
          'path',
          'pathname',
          'port',
          'protocol',
          'query',
          'search',
          'slashes',
        ];

        function formatWithValidation(url, options) {
          if (true) {
            if (url !== null && typeof url === 'object') {
              Object.keys(url).forEach(key => {
                if (exports.urlObjectKeys.indexOf(key) === -1) {
                  console.warn(
                    `Unknown key passed via urlObject into url.format: ${key}`
                  );
                }
              });
            }
          }

          return url_1.format(url, options);
        }

        exports.formatWithValidation = formatWithValidation;
        exports.SP = typeof performance !== 'undefined';
        exports.ST =
          exports.SP &&
          typeof performance.mark === 'function' &&
          typeof performance.measure === 'function';

        /***/
      },

    /***/ '../node_modules/next/link.js':
      /*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ '../node_modules/next/dist/client/link.js'
        );

        /***/
      },

    /***/ '../node_modules/next/node_modules/react-is/cjs/react-is.development.js':
      /*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
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

            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for('react.element')
              : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for('react.portal')
              : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for('react.fragment')
              : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for('react.strict_mode')
              : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for('react.profiler')
              : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for('react.provider')
              : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for('react.context')
              : 0xeace;
            var REACT_ASYNC_MODE_TYPE = hasSymbol
              ? Symbol.for('react.async_mode')
              : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for('react.concurrent_mode')
              : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for('react.forward_ref')
              : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for('react.suspense')
              : 0xead1;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

            function isValidElementType(type) {
              return (
                typeof type === 'string' ||
                typeof type === 'function' ||
                // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                (typeof type === 'object' &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE))
              );
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

            var lowPriorityWarning = function() {};

            {
              var printWarning = function(format) {
                for (
                  var _len = arguments.length,
                    args = Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                var argIndex = 0;
                var message =
                  'Warning: ' +
                  format.replace(/%s/g, function() {
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

              lowPriorityWarning = function(condition, format) {
                if (format === undefined) {
                  throw new Error(
                    '`lowPriorityWarning(condition, format, ...args)` requires a warning ' +
                      'message argument'
                  );
                }
                if (!condition) {
                  for (
                    var _len2 = arguments.length,
                      args = Array(_len2 > 2 ? _len2 - 2 : 0),
                      _key2 = 2;
                    _key2 < _len2;
                    _key2++
                  ) {
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
                  lowPriorityWarning$1(
                    false,
                    'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                      'and will be removed in React 17+. Update your code to use ' +
                      'ReactIs.isConcurrentMode() instead. It has the exact same API.'
                  );
                }
              }
              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
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
              return (
                typeof object === 'object' &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
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

        /***/
      },

    /***/ '../node_modules/next/node_modules/react-is/index.js':
      /*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react-is.development.js */ '../node_modules/next/node_modules/react-is/cjs/react-is.development.js'
          );
        }

        /***/
      },

    /***/ '../node_modules/react-big-calendar/lib/css/react-big-calendar.css':
      /*!*************************************************************************!*\
  !*** ../node_modules/react-big-calendar/lib/css/react-big-calendar.css ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ '../node_modules/react-toastify/dist/ReactToastify.css':
      /*!*************************************************************!*\
  !*** ../node_modules/react-toastify/dist/ReactToastify.css ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ './assets/css/reset.css':
      /*!******************************!*\
  !*** ./assets/css/reset.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ './assets/images/avatar.jpg':
      /*!**********************************!*\
  !*** ./assets/images/avatar.jpg ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/_next/static/images/avatar-f7c0aac820d77d172d136f9d8726cca2.jpg';

        /***/
      },

    /***/ './assets/images/cart-bag.svg?include':
      /*!********************************************!*\
  !*** ./assets/images/cart-bag.svg?include ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var raw =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <path id="f110" d="M14.857-46.054,16-34.625H0L1.143-46.054H3.429V-46.2a4.263,4.263,0,0,1,1.3-3.125,4.263,4.263,0,0,1,3.125-1.3h.286a4.263,4.263,0,0,1,3.125,1.3,4.263,4.263,0,0,1,1.3,3.125v.143ZM4.571-46.2v.143h6.857V-46.2a3.165,3.165,0,0,0-.964-2.321,3.164,3.164,0,0,0-2.321-.964H7.857a3.165,3.165,0,0,0-2.321.964A3.165,3.165,0,0,0,4.571-46.2ZM1.286-35.768H14.714l-.893-9.143h-1.25v1.286a1.119,1.119,0,0,1,.571,1,1.112,1.112,0,0,1-.321.821,1.112,1.112,0,0,1-.821.321,1.112,1.112,0,0,1-.821-.321,1.112,1.112,0,0,1-.321-.821,1.119,1.119,0,0,1,.571-1v-1.286H4.571v1.286a1.119,1.119,0,0,1,.571,1,1.112,1.112,0,0,1-.321.821A1.112,1.112,0,0,1,4-41.482a1.112,1.112,0,0,1-.821-.321,1.112,1.112,0,0,1-.321-.821,1.119,1.119,0,0,1,.571-1v-1.286H2.179Zm0,0" transform="translate(0 50.625)" fill="#545454"/>\n</svg>\n';
        module.exports = raw;
        exports.default = raw;

        /***/
      },

    /***/ './assets/images/logo.svg?include':
      /*!****************************************!*\
  !*** ./assets/images/logo.svg?include ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var raw =
          '<svg xmlns="http://www.w3.org/2000/svg" width="63" height="22" viewBox="0 0 63 22">\n  <g id="Group_34" data-name="Group 34" transform="translate(-440 -24)">\n    <text id="INST" transform="translate(453 41)" font-size="22" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="-0.01em"><tspan x="0" y="0">INST</tspan></text>\n    <g id="Group_33" data-name="Group 33" transform="translate(-17 -3)">\n      <path id="Path_22" data-name="Path 22" d="M0,0,7.765,15H0Z" transform="translate(457 29)" fill="#7f4c7b"/>\n      <path id="Path_23" data-name="Path 23" d="M7.765,15,0,0H7.765Z" transform="translate(460.235 29)" fill="#f35a63"/>\n    </g>\n    <rect id="Rectangle_46" data-name="Rectangle 46" width="3" height="3" transform="translate(500 38)"/>\n  </g>\n</svg>\n';
        module.exports = raw;
        exports.default = raw;

        /***/
      },

    /***/ './components/Footer/Footer.styled.tsx':
      /*!*********************************************!*\
  !*** ./components/Footer/Footer.styled.tsx ***!
  \*********************************************/
      /*! exports provided: Text, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Text',
          function() {
            return Text;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const FooterWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('footer', {
          width: '100%',
        });
        const Text = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'p',
          ({ $theme }) =>
            _objectSpread(
              {
                width: '100%',
                margin: '0',
                textAlign: 'center',
                color: $theme.colors.contentSecondary,
                padding: '27px 0 25px',
                borderTop: `1px solid ${$theme.colors.backgroundTertiary}`,
              },
              $theme.typography.font100
            )
        );
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = FooterWrapper;

        /***/
      },

    /***/ './components/Footer/Footer.tsx':
      /*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../UiElements/Container/Container */ './components/UiElements/Container/Container.tsx'
        );
        /* harmony import */ var _Footer_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Footer.styled */ './components/Footer/Footer.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Footer/Footer.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Footer = () => {
          return __jsx(
            _Footer_styled__WEBPACK_IMPORTED_MODULE_2__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: undefined,
            },
            __jsx(
              _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                },
                __self: undefined,
              },
              __jsx(
                _Footer_styled__WEBPACK_IMPORTED_MODULE_2__['Text'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                  },
                  __self: undefined,
                },
                'Inst \xA9',
                new Date().getFullYear(),
                ' Created by RedQ, Inc'
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Footer;

        /***/
      },

    /***/ './components/Header/AuthHeader/AuthHeader.tsx':
      /*!*****************************************************!*\
  !*** ./components/Header/AuthHeader/AuthHeader.tsx ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/router */ 'next/router'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! baseui/block */ 'baseui/block'
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_block__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! baseui/button */ 'baseui/button'
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_button__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../UiElements/Logo/Logo */ './components/UiElements/Logo/Logo.tsx'
        );
        /* harmony import */ var _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../UiElements/SvgIcon/SvgIcon */ './components/UiElements/SvgIcon/SvgIcon.tsx'
        );
        /* harmony import */ var _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../UiElements/Container/Container */ './components/UiElements/Container/Container.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/AuthHeader/AuthHeader.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const AuthHeader = ({ pathname }) => {
          return __jsx(
            _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15,
              },
              __self: undefined,
            },
            __jsx(
              baseui_block__WEBPACK_IMPORTED_MODULE_2__['Block'],
              {
                overrides: {
                  Block: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '23px 0',
                    },
                  },
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                },
                __self: undefined,
              },
              __jsx(
                _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__['default'],
                {
                  path: pathname,
                  src: __jsx(
                    _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_5__[
                      'default'
                    ],
                    {
                      src: __webpack_require__(
                        /*! ../../../assets/images/logo.svg?include */ './assets/images/logo.svg?include'
                      ),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                      },
                      __self: undefined,
                    }
                  ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                  },
                  __self: undefined,
                }
              ),
              __jsx(
                baseui_block__WEBPACK_IMPORTED_MODULE_2__['Block'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                  },
                  __self: undefined,
                },
                __jsx(
                  baseui_button__WEBPACK_IMPORTED_MODULE_3__['Button'],
                  {
                    kind: 'minimal',
                    disabled: pathname === '/login',
                    onClick: () =>
                      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(
                        '/login'
                      ),
                    overrides: {
                      BaseButton: {
                        style: ({ $theme }) => {
                          return _objectSpread({}, $theme.typography.font250, {
                            ':disabled': {
                              backgroundColor: 'transparent',
                            },
                          });
                        },
                      },
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                    },
                    __self: undefined,
                  },
                  'Login'
                ),
                __jsx(
                  baseui_button__WEBPACK_IMPORTED_MODULE_3__['Button'],
                  {
                    disabled: pathname === '/signup',
                    onClick: () =>
                      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(
                        '/signup'
                      ),
                    overrides: {
                      BaseButton: {
                        style: ({ $theme }) => {
                          return _objectSpread({}, $theme.typography.font250);
                        },
                      },
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                    },
                    __self: undefined,
                  },
                  'Join Free'
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = AuthHeader;

        /***/
      },

    /***/ './components/Header/DefaultHeader/DefaultHeader.styled.tsx':
      /*!******************************************************************!*\
  !*** ./components/Header/DefaultHeader/DefaultHeader.styled.tsx ***!
  \******************************************************************/
      /*! exports provided: TopBar, MenuRight, Navbar, StickyNav, NavLeft, NavRight, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TopBar',
          function() {
            return TopBar;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuRight',
          function() {
            return MenuRight;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Navbar',
          function() {
            return Navbar;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StickyNav',
          function() {
            return StickyNav;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'NavLeft',
          function() {
            return NavLeft;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'NavRight',
          function() {
            return NavRight;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const HeaderWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          width: '100%',
          paddingTop: '23px',
        });
        const TopBar = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '15px',
          }
        );
        const MenuRight = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          {
            display: 'grid',
            gridGap: '30px',
            gridTemplateColumns: 'auto auto auto',
            alignItems: 'center',
          }
        );
        const Navbar = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'nav',
          ({ $theme }) => ({
            width: '100%',
            backgroundColor: $theme.colors.primaryB,
            borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
          })
        );
        const StickyNav = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          {
            display: 'flex',
            justifyContent: 'space-between',
          }
        );
        const NavLeft = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          {
            display: 'flex',
          }
        );
        const NavRight = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          {
            opacity: 0,
            visibility: 'hidden',
            display: 'grid',
            gridGap: '30px',
            gridTemplateColumns: 'auto auto',
            alignItems: 'center',
            transform: 'translate3d(0 ,-20px, 0)',
            transition: 'all 0.25s ease',
          }
        );
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = HeaderWrapper;

        /***/
      },

    /***/ './components/Header/DefaultHeader/DefaultHeader.tsx':
      /*!***********************************************************!*\
  !*** ./components/Header/DefaultHeader/DefaultHeader.tsx ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-stickynode */ 'react-stickynode'
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_stickynode__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _UiElements_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../UiElements/Badge/Badge */ './components/UiElements/Badge/Badge.tsx'
        );
        /* harmony import */ var _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../UiElements/Logo/Logo */ './components/UiElements/Logo/Logo.tsx'
        );
        /* harmony import */ var _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../UiElements/SvgIcon/SvgIcon */ './components/UiElements/SvgIcon/SvgIcon.tsx'
        );
        /* harmony import */ var _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../UiElements/Container/Container */ './components/UiElements/Container/Container.tsx'
        );
        /* harmony import */ var _HeaderMenu_TopMenu_TopMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../HeaderMenu/TopMenu/TopMenu */ './components/Header/HeaderMenu/TopMenu/TopMenu.tsx'
        );
        /* harmony import */ var _HeaderMenu_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../HeaderMenu/MainMenu/MainMenu */ './components/Header/HeaderMenu/MainMenu/MainMenu.tsx'
        );
        /* harmony import */ var _HeaderMenu_AvatarMenu_AvatarMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../HeaderMenu/AvatarMenu/AvatarMenu */ './components/Header/HeaderMenu/AvatarMenu/AvatarMenu.tsx'
        );
        /* harmony import */ var _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./DefaultHeader.styled */ './components/Header/DefaultHeader/DefaultHeader.styled.tsx'
        );
        /* harmony import */ var _contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../contexts/cart/cart.provider */ './contexts/cart/cart.provider.ts'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/DefaultHeader/DefaultHeader.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const DefaultHeader = () => {
          const cartItems = Object(
            _contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_10__[
              'useCartState'
            ]
          )('cartItems');
          return __jsx(
            _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__['default'],
            {
              className: 'default',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24,
              },
              __self: undefined,
            },
            __jsx(
              _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_5__[
                'default'
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                },
                __self: undefined,
              },
              __jsx(
                _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__['TopBar'],
                {
                  className: 'top-bar',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                  },
                  __self: undefined,
                },
                __jsx(
                  _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__['default'],
                  {
                    path: '/',
                    src: __jsx(
                      _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_4__[
                        'default'
                      ],
                      {
                        src: __webpack_require__(
                          /*! ../../../assets/images/logo.svg?include */ './assets/images/logo.svg?include'
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30,
                        },
                        __self: undefined,
                      }
                    ),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                    },
                    __self: undefined,
                  }
                ),
                __jsx(
                  _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__[
                    'MenuRight'
                  ],
                  {
                    className: 'menu-right',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    _HeaderMenu_TopMenu_TopMenu__WEBPACK_IMPORTED_MODULE_6__[
                      'default'
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                      },
                      __self: undefined,
                    }
                  ),
                  __jsx(
                    _UiElements_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__[
                      'default'
                    ],
                    {
                      path: '/shop/checkout',
                      icon: __jsx(
                        _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_4__[
                          'default'
                        ],
                        {
                          src: __webpack_require__(
                            /*! ../../../assets/images/cart-bag.svg?include */ './assets/images/cart-bag.svg?include'
                          ),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                          },
                          __self: undefined,
                        }
                      ),
                      count: cartItems.length,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                      },
                      __self: undefined,
                    }
                  ),
                  __jsx(
                    _HeaderMenu_AvatarMenu_AvatarMenu__WEBPACK_IMPORTED_MODULE_8__[
                      'default'
                    ],
                    {
                      name: 'Jane Doe',
                      src: __webpack_require__(
                        /*! ../../../assets/images/avatar.jpg */ './assets/images/avatar.jpg'
                      ),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                      },
                      __self: undefined,
                    }
                  )
                )
              )
            ),
            __jsx(
              react_stickynode__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                },
                __self: undefined,
              },
              __jsx(
                _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__['Navbar'],
                {
                  className: 'navbar',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                  },
                  __self: undefined,
                },
                __jsx(
                  _UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__[
                      'StickyNav'
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                      },
                      __self: undefined,
                    },
                    __jsx(
                      _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__[
                        'NavLeft'
                      ],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59,
                        },
                        __self: undefined,
                      },
                      __jsx(
                        _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_3__[
                          'default'
                        ],
                        {
                          path: '/',
                          src: __jsx(
                            _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_4__[
                              'default'
                            ],
                            {
                              src: __webpack_require__(
                                /*! ../../../assets/images/logo.svg?include */ './assets/images/logo.svg?include'
                              ),
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63,
                              },
                              __self: undefined,
                            }
                          ),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60,
                          },
                          __self: undefined,
                        }
                      ),
                      __jsx(
                        _HeaderMenu_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_7__[
                          'default'
                        ],
                        {
                          className: 'main-nav',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                          },
                          __self: undefined,
                        }
                      )
                    ),
                    __jsx(
                      _DefaultHeader_styled__WEBPACK_IMPORTED_MODULE_9__[
                        'NavRight'
                      ],
                      {
                        className: 'cart-and-avatar',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70,
                        },
                        __self: undefined,
                      },
                      __jsx(
                        _UiElements_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__[
                          'default'
                        ],
                        {
                          path: '/shop/checkout',
                          icon: __jsx(
                            _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_4__[
                              'default'
                            ],
                            {
                              src: __webpack_require__(
                                /*! ../../../assets/images/cart-bag.svg?include */ './assets/images/cart-bag.svg?include'
                              ),
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74,
                              },
                              __self: undefined,
                            }
                          ),
                          count: cartItems.length,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71,
                          },
                          __self: undefined,
                        }
                      ),
                      __jsx(
                        _HeaderMenu_AvatarMenu_AvatarMenu__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ],
                        {
                          name: 'Jane Doe',
                          src: __webpack_require__(
                            /*! ../../../assets/images/avatar.jpg */ './assets/images/avatar.jpg'
                          ),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80,
                          },
                          __self: undefined,
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = DefaultHeader;

        /***/
      },

    /***/ './components/Header/Header.styled.tsx':
      /*!*********************************************!*\
  !*** ./components/Header/Header.styled.tsx ***!
  \*********************************************/
      /*! exports provided: ShowInMobile, HideInMobile, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ShowInMobile',
          function() {
            return ShowInMobile;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HideInMobile',
          function() {
            return HideInMobile;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const HeaderWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('header', ({ $theme }) => ({
          width: '100%',
          backgroundColor: $theme.colors.primaryB,
          zIndex: 2,
        }));
        const ShowInMobile = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          display: 'none',
          visibility: 'hidden',
          '@media only screen and (max-width: 991px)': {
            display: 'block',
            visibility: 'visible',
          },
        });
        const HideInMobile = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          display: 'block',
          visibility: 'visible',
          '@media only screen and (max-width: 991px)': {
            display: 'none',
            visibility: 'hidden',
          },
        });
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = HeaderWrapper;

        /***/
      },

    /***/ './components/Header/Header.tsx':
      /*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _DefaultHeader_DefaultHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./DefaultHeader/DefaultHeader */ './components/Header/DefaultHeader/DefaultHeader.tsx'
        );
        /* harmony import */ var _MobileHeader_MobileHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./MobileHeader/MobileHeader */ './components/Header/MobileHeader/MobileHeader.tsx'
        );
        /* harmony import */ var _Header_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Header.styled */ './components/Header/Header.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/Header.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Header = () => {
          return __jsx(
            _Header_styled__WEBPACK_IMPORTED_MODULE_3__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
              },
              __self: undefined,
            },
            __jsx(
              _Header_styled__WEBPACK_IMPORTED_MODULE_3__['HideInMobile'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                },
                __self: undefined,
              },
              __jsx(
                _DefaultHeader_DefaultHeader__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                  },
                  __self: undefined,
                }
              )
            ),
            __jsx(
              _Header_styled__WEBPACK_IMPORTED_MODULE_3__['ShowInMobile'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                },
                __self: undefined,
              },
              __jsx(
                _MobileHeader_MobileHeader__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                  },
                  __self: undefined,
                }
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Header;

        /***/
      },

    /***/ './components/Header/HeaderMenu/AvatarMenu/AvatarMenu.styled.tsx':
      /*!***********************************************************************!*\
  !*** ./components/Header/HeaderMenu/AvatarMenu/AvatarMenu.styled.tsx ***!
  \***********************************************************************/
      /*! exports provided: Line, MenuItem, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Line',
          function() {
            return Line;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return MenuItem;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const MenuWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('ul', {
          width: '200px',
          listStyle: 'none',
          padding: '8px 0',
          '@media only screen and (max-width: 991px)': {
            width: '100%',
          },
        });
        const Line = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          ({ $theme }) => ({
            width: '100%',
            height: '1px',
            margin: '8px 0',
            backgroundColor: $theme.colors.backgroundTertiary,
          })
        );
        const MenuItem = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          ({ $theme }) =>
            _objectSpread(
              {
                display: 'flex',
                alignItems: 'center',
                padding: '8px 20px',
                cursor: 'pointer',
                color: $theme.colors.contentSecondary,
              },
              $theme.typography.font200,
              {
                transition: 'all 0.3s ease',
                '@media only screen and (max-width: 991px)': _objectSpread(
                  {},
                  $theme.typography.font300
                ),
                ':hover': {
                  color: $theme.colors.primary,
                  backgroundColor: $theme.colors.backgroundSecondary,
                },
              }
            )
        );
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = MenuWrapper;

        /***/
      },

    /***/ './components/Header/HeaderMenu/AvatarMenu/AvatarMenu.tsx':
      /*!****************************************************************!*\
  !*** ./components/Header/HeaderMenu/AvatarMenu/AvatarMenu.tsx ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/router */ 'next/router'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! baseui/block */ 'baseui/block'
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_block__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! baseui/avatar */ 'baseui/avatar'
        );
        /* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_avatar__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var baseui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! baseui/popover */ 'baseui/popover'
        );
        /* harmony import */ var baseui_popover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_popover__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _UiElements_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../UiElements/NavLink/NavLink */ './components/UiElements/NavLink/NavLink.tsx'
        );
        /* harmony import */ var _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./AvatarMenu.styled */ './components/Header/HeaderMenu/AvatarMenu/AvatarMenu.styled.tsx'
        );
        /* harmony import */ var _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../contexts/theme/theme.provider */ './contexts/theme/theme.provider.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/HeaderMenu/AvatarMenu/AvatarMenu.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Menu = ({ onClick }) => {
          const { theme, setTheme } = Object(
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__[
              'useThemeSwitcherCtx'
            ]
          )();
          return __jsx(
            _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28,
              },
              __self: undefined,
            },
            __jsx(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: undefined,
              },
              __jsx(
                _UiElements_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  activeClassName: 'active',
                  href: '/',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                  __self: undefined,
                },
                __jsx(
                  _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['MenuItem'],
                  {
                    onClick: onClick,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                    },
                    __self: undefined,
                  },
                  'Dashboard'
                )
              )
            ),
            __jsx(_AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['Line'], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
              },
              __self: undefined,
            }),
            __jsx(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                },
                __self: undefined,
              },
              __jsx(
                _UiElements_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  activeClassName: 'active',
                  href: '/settings',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                  },
                  __self: undefined,
                },
                __jsx(
                  _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['MenuItem'],
                  {
                    onClick: onClick,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                    },
                    __self: undefined,
                  },
                  'Settings'
                )
              )
            ),
            __jsx(_AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['Line'], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
              },
              __self: undefined,
            }),
            __jsx(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                },
                __self: undefined,
              },
              __jsx(
                _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['MenuItem'],
                {
                  onClick: () => {
                    let getTheme =
                      theme ===
                      _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__[
                        'THEME'
                      ].light
                        ? _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__[
                            'THEME'
                          ].dark
                        : _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__[
                            'THEME'
                          ].light;
                    setTheme(getTheme);
                    localStorage.setItem('theme', getTheme);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                  },
                  __self: undefined,
                },
                theme ===
                  _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_7__[
                    'THEME'
                  ].light
                  ? 'Dark Mode'
                  : 'Light Mode'
              )
            ),
            __jsx(_AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['Line'], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52,
              },
              __self: undefined,
            }),
            __jsx(
              'li',
              {
                onClick: () =>
                  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(
                    '/login'
                  ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                },
                __self: undefined,
              },
              __jsx(
                _AvatarMenu_styled__WEBPACK_IMPORTED_MODULE_6__['MenuItem'],
                {
                  onClick: onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                  },
                  __self: undefined,
                },
                'Logout'
              )
            )
          );
        };

        const AvatarMenu = ({
          name,
          src,
          placement,
          showOnlyMenu,
          onClick,
        }) => {
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            showOnlyMenu
              ? __jsx(Menu, {
                  onClick: onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                  },
                  __self: undefined,
                })
              : __jsx(
                  baseui_popover__WEBPACK_IMPORTED_MODULE_4__[
                    'StatefulPopover'
                  ],
                  {
                    content: __jsx(Menu, {
                      onClick: onClick,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                      },
                      __self: undefined,
                    }),
                    placement: placement ? placement : 'bottomRight',
                    overrides: {
                      Inner: {
                        style: ({ $theme }) => {
                          return {
                            backgroundColor: $theme.colors.primaryB,
                          };
                        },
                      },
                    },
                    showArrow: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    baseui_block__WEBPACK_IMPORTED_MODULE_2__['Block'],
                    {
                      overrides: {
                        Block: {
                          style: {
                            cursor: 'pointer',
                          },
                        },
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                      },
                      __self: undefined,
                    },
                    __jsx(
                      baseui_avatar__WEBPACK_IMPORTED_MODULE_3__['Avatar'],
                      {
                        src: src,
                        name: name ? name : 'Jon Doe',
                        size: 'scale1000',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                        },
                        __self: undefined,
                      }
                    )
                  )
                )
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = AvatarMenu;

        /***/
      },

    /***/ './components/Header/HeaderMenu/MainMenu/MainMenu.styled.tsx':
      /*!*******************************************************************!*\
  !*** ./components/Header/HeaderMenu/MainMenu/MainMenu.styled.tsx ***!
  \*******************************************************************/
      /*! exports provided: MenuItem, MenuLink, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return MenuItem;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuLink',
          function() {
            return MenuLink;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const Menu = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'ul',
          {
            display: 'flex',
            alignItems: 'center',
            transition: 'padding 0.25s ease',
            '@media only screen and (max-width: 991px)': {
              width: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          }
        );
        const MenuItem = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'li',
          ({ $theme }) => ({
            listStyle: 'none',
            marginRight: '25px',
            '@media only screen and (max-width: 991px)': {
              margin: 0,
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
            },
          })
        );
        const MenuLink = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          ({ $theme }) =>
            _objectSpread(
              {
                display: 'inline-flex',
                color: $theme.colors.contentSecondary,
                textDecoration: 'none',
                padding: `${$theme.sizing.scale600} 0`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              },
              $theme.typography.font200,
              {
                ':hover': {
                  color: $theme.colors.primary,
                },
                '@media only screen and (max-width: 991px)': _objectSpread(
                  {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: '100%',
                  },
                  $theme.typography.font300,
                  {
                    ':hover': {
                      backgroundColor: $theme.colors.backgroundSecondary,
                    },
                  }
                ),
              }
            )
        );
        /* harmony default export */ __webpack_exports__['default'] = Menu;

        /***/
      },

    /***/ './components/Header/HeaderMenu/MainMenu/MainMenu.tsx':
      /*!************************************************************!*\
  !*** ./components/Header/HeaderMenu/MainMenu/MainMenu.tsx ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _UiElements_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../UiElements/NavLink/NavLink */ './components/UiElements/NavLink/NavLink.tsx'
        );
        /* harmony import */ var _MainMenu_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./MainMenu.styled */ './components/Header/HeaderMenu/MainMenu/MainMenu.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/HeaderMenu/MainMenu/MainMenu.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const menuItems = [
          {
            id: 1,
            label: 'Overview',
            path: '/',
          },
          {
            id: 2,
            label: 'Apps',
            path: '/apps',
          },
          {
            id: 3,
            label: 'Shop',
            path: '/shop',
          }, // {
          //   id: 4,
          //   label: 'Integrations',
          //   path: '/integrations',
          // },
          {
            id: 4,
            label: 'Charts',
            path: '/charts',
          },
          {
            id: 5,
            label: 'Forms',
            path: '/forms',
          },
          {
            id: 6,
            label: 'UI Elements',
            path: '/uielements',
          },
          {
            id: 7,
            label: 'Pricing',
            path: '/pricing',
          },
          {
            id: 8,
            label: 'Profile',
            path: '/profile',
          },
          {
            id: 9,
            label: 'Settings',
            path: '/settings',
          },
        ];

        const MainMenu = ({ className, onClick }) => {
          return __jsx(
            _MainMenu_styled__WEBPACK_IMPORTED_MODULE_2__['default'],
            {
              className: className,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65,
              },
              __self: undefined,
            },
            menuItems.map(item =>
              __jsx(
                _MainMenu_styled__WEBPACK_IMPORTED_MODULE_2__['MenuItem'],
                {
                  key: `top-menu--item${item.id}`,
                  onClick: onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                  },
                  __self: undefined,
                },
                __jsx(
                  _UiElements_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                  {
                    activeClassName: 'active',
                    href: item.path,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    _MainMenu_styled__WEBPACK_IMPORTED_MODULE_2__['MenuLink'],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                      },
                      __self: undefined,
                    },
                    item.label
                  )
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = MainMenu;

        /***/
      },

    /***/ './components/Header/HeaderMenu/TopMenu/TopMenu.style.tsx':
      /*!****************************************************************!*\
  !*** ./components/Header/HeaderMenu/TopMenu/TopMenu.style.tsx ***!
  \****************************************************************/
      /*! exports provided: MenuItem, MenuLink, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return MenuItem;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuLink',
          function() {
            return MenuLink;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const Menu = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'ul',
          {
            display: 'flex',
            alignItems: 'center',
            '@media only screen and (max-width: 991px)': {
              width: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          }
        );
        const MenuItem = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'li',
          ({ $theme }) => ({
            listStyle: 'none',
            marginRight: '20px',
            '@media only screen and (max-width: 991px)': {
              margin: 0,
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
            },
            ':last-child': {
              marginRight: '0',
            },
          })
        );
        const MenuLink = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          ({ $theme }) =>
            _objectSpread(
              {
                display: 'inline-flex',
                color: $theme.colors.contentSecondary,
                textDecoration: 'none',
                paddingTop: '10px',
                paddingBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              },
              $theme.typography.font200,
              {
                '@media only screen and (max-width: 991px)': _objectSpread(
                  {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: '100%',
                  },
                  $theme.typography.font300
                ),
                ':hover': {
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  color: $theme.colors.primary,
                  backgroundColor: $theme.colors.backgroundTertiary,
                  '@media only screen and (max-width: 991px)': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    backgroundColor: $theme.colors.backgroundSecondary,
                  },
                },
              }
            )
        );
        /* harmony default export */ __webpack_exports__['default'] = Menu;

        /***/
      },

    /***/ './components/Header/HeaderMenu/TopMenu/TopMenu.tsx':
      /*!**********************************************************!*\
  !*** ./components/Header/HeaderMenu/TopMenu/TopMenu.tsx ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _TopMenu_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./TopMenu.style */ './components/Header/HeaderMenu/TopMenu/TopMenu.style.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/HeaderMenu/TopMenu/TopMenu.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const menuItems = [
          {
            id: 1,
            label: 'Blog',
            path: '#',
          },
          {
            id: 2,
            label: 'Privacy',
            path: '/privacy',
          },
          {
            id: 3,
            label: 'Terms',
            path: '/terms',
          },
        ];

        const TopMenu = ({ className, onClick }) => {
          return __jsx(
            _TopMenu_style__WEBPACK_IMPORTED_MODULE_1__['default'],
            {
              className: className,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29,
              },
              __self: undefined,
            },
            menuItems.map(item =>
              __jsx(
                _TopMenu_style__WEBPACK_IMPORTED_MODULE_1__['MenuItem'],
                {
                  key: `top-menu--item${item.id}`,
                  onClick: onClick,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                  },
                  __self: undefined,
                },
                __jsx(
                  _TopMenu_style__WEBPACK_IMPORTED_MODULE_1__['MenuLink'],
                  {
                    href: item.path,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                    },
                    __self: undefined,
                  },
                  item.label
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = TopMenu;

        /***/
      },

    /***/ './components/Header/MobileHeader/MobileHeader.styled.tsx':
      /*!****************************************************************!*\
  !*** ./components/Header/MobileHeader/MobileHeader.styled.tsx ***!
  \****************************************************************/
      /*! exports provided: PageTitle, TopMenuWrapper, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PageTitle',
          function() {
            return PageTitle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TopMenuWrapper',
          function() {
            return TopMenuWrapper;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const HeaderWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', ({ $theme }) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `10px ${$theme.sizing.scale200} 6px`,
          borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
          backgroundColor: $theme.colors.primaryB,
        }));
        const PageTitle = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          ({ $theme }) =>
            _objectSpread({}, $theme.typography.font550, {
              fontWeight: 600,
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                color: $theme.colors.borderInverseOpaque,
              },
            })
        );
        const TopMenuWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        });
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = HeaderWrapper;

        /***/
      },

    /***/ './components/Header/MobileHeader/MobileHeader.tsx':
      /*!*********************************************************!*\
  !*** ./components/Header/MobileHeader/MobileHeader.tsx ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-icons/fi */ 'react-icons/fi'
        );
        /* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_icons_fi__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-stickynode */ 'react-stickynode'
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_stickynode__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/router */ 'next/router'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! baseui/button */ 'baseui/button'
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_button__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var baseui_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! baseui/drawer */ 'baseui/drawer'
        );
        /* harmony import */ var baseui_drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_drawer__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! baseui/block */ 'baseui/block'
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_block__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _UiElements_Badge_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../UiElements/Badge/Badge */ './components/UiElements/Badge/Badge.tsx'
        );
        /* harmony import */ var _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../UiElements/Logo/Logo */ './components/UiElements/Logo/Logo.tsx'
        );
        /* harmony import */ var _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../UiElements/SvgIcon/SvgIcon */ './components/UiElements/SvgIcon/SvgIcon.tsx'
        );
        /* harmony import */ var _HeaderMenu_TopMenu_TopMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../HeaderMenu/TopMenu/TopMenu */ './components/Header/HeaderMenu/TopMenu/TopMenu.tsx'
        );
        /* harmony import */ var _HeaderMenu_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../HeaderMenu/MainMenu/MainMenu */ './components/Header/HeaderMenu/MainMenu/MainMenu.tsx'
        );
        /* harmony import */ var _HeaderMenu_AvatarMenu_AvatarMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../HeaderMenu/AvatarMenu/AvatarMenu */ './components/Header/HeaderMenu/AvatarMenu/AvatarMenu.tsx'
        );
        /* harmony import */ var _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../contexts/theme/theme.provider */ './contexts/theme/theme.provider.tsx'
        );
        /* harmony import */ var _MobileHeader_styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./MobileHeader.styled */ './components/Header/MobileHeader/MobileHeader.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Header/MobileHeader/MobileHeader.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const MobileHeader = () => {
          const { 0: isOpen, 1: setIsOpen } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )(false);
          const { 0: menu, 1: setMenu } = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useState']
          )('main');
          const { pathname } = Object(
            next_router__WEBPACK_IMPORTED_MODULE_3__['useRouter']
          )();
          const { theme } = Object(
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_13__[
              'useThemeSwitcherCtx'
            ]
          )();
          let pageName = pathname.split('/').slice(1, 2);
          let titleColor = '#000000';

          if (
            theme ===
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_13__[
              'THEME'
            ].dark
          ) {
            titleColor = '#ffffff';
          }

          pageName =
            pathname !== '/' && pathname !== '/_error'
              ? __jsx(
                  _MobileHeader_styled__WEBPACK_IMPORTED_MODULE_14__[
                    'PageTitle'
                  ],
                  {
                    $style: {
                      color: titleColor,
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                    },
                    __self: undefined,
                  },
                  pageName
                )
              : __jsx(
                  _UiElements_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__['default'],
                  {
                    style: {
                      marginTop: '3px',
                    },
                    path: '/',
                    src: __jsx(
                      _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ],
                      {
                        src: __webpack_require__(
                          /*! ../../../assets/images/logo.svg?include */ './assets/images/logo.svg?include'
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                        },
                        __self: undefined,
                      }
                    ),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                    },
                    __self: undefined,
                  }
                );
          let placement;

          if (menu === 'main') {
            placement = 'left';
          }

          if (menu === 'top') {
            placement = 'right';
          }

          return __jsx(
            react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57,
              },
              __self: undefined,
            },
            __jsx(
              _MobileHeader_styled__WEBPACK_IMPORTED_MODULE_14__['default'],
              {
                className: 'mobile',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                },
                __self: undefined,
              },
              __jsx(
                baseui_button__WEBPACK_IMPORTED_MODULE_4__['Button'],
                {
                  onClick: () => {
                    setIsOpen(true);
                    setMenu('main');
                  },
                  kind: 'minimal',
                  size: 'compact',
                  overrides: {
                    BaseButton: {
                      style: ({ $theme }) => {
                        return {
                          fontSize: '22px',
                          width: '104px',
                          justifyContent: 'flex-start',
                          ':hover': {
                            backgroundColor: $theme.colors.primaryB,
                          },
                          ':focus': {
                            backgroundColor: $theme.colors.primaryB,
                          },
                        };
                      },
                    },
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                  },
                  __self: undefined,
                },
                __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__['FiMenu'], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                  },
                  __self: undefined,
                })
              ),
              pageName,
              __jsx(
                baseui_block__WEBPACK_IMPORTED_MODULE_6__['Block'],
                {
                  overrides: {
                    Block: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                      },
                    },
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                  },
                  __self: undefined,
                },
                __jsx(
                  _UiElements_Badge_Badge__WEBPACK_IMPORTED_MODULE_7__[
                    'default'
                  ],
                  {
                    path: '/shop/checkout',
                    icon: __jsx(
                      _UiElements_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ],
                      {
                        src: __webpack_require__(
                          /*! ../../../assets/images/cart-bag.svg?include */ './assets/images/cart-bag.svg?include'
                        ),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                        },
                        __self: undefined,
                      }
                    ),
                    count: 10,
                    style: {
                      margin: '0 20px',
                    },
                    onClick: () => setIsOpen(false),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                    },
                    __self: undefined,
                  }
                ),
                __jsx(
                  baseui_button__WEBPACK_IMPORTED_MODULE_4__['Button'],
                  {
                    onClick: () => {
                      setIsOpen(true);
                      setMenu('top');
                    },
                    kind: 'minimal',
                    size: 'compact',
                    overrides: {
                      BaseButton: {
                        style: ({ $theme }) => {
                          return {
                            fontSize: '24px',
                            ':hover': {
                              backgroundColor: $theme.colors.primaryB,
                            },
                            ':focus': {
                              backgroundColor: $theme.colors.primaryB,
                            },
                          };
                        },
                      },
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[
                      'FiMoreHorizontal'
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                      },
                      __self: undefined,
                    }
                  )
                )
              ),
              __jsx(
                baseui_drawer__WEBPACK_IMPORTED_MODULE_5__['Drawer'],
                {
                  isOpen: isOpen,
                  onClose: () => setIsOpen(false),
                  anchor: placement,
                  size: 'full',
                  overrides: {
                    Root: {
                      style: () => {
                        return {
                          zIndex: 9999,
                        };
                      },
                    },
                    Close: {
                      style: {
                        width: '30px',
                        height: '30px',
                        ':focus': {
                          borderColor: 'transparent',
                        },
                      },
                    },
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                  },
                  __self: undefined,
                },
                menu === 'main' &&
                  __jsx(
                    _HeaderMenu_MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_11__[
                      'default'
                    ],
                    {
                      className: 'mobile-menu',
                      onClick: () => setIsOpen(false),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                      },
                      __self: undefined,
                    }
                  ),
                menu === 'top' &&
                  __jsx(
                    _MobileHeader_styled__WEBPACK_IMPORTED_MODULE_14__[
                      'TopMenuWrapper'
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                      },
                      __self: undefined,
                    },
                    __jsx(
                      _HeaderMenu_TopMenu_TopMenu__WEBPACK_IMPORTED_MODULE_10__[
                        'default'
                      ],
                      {
                        onClick: () => setIsOpen(false),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                        },
                        __self: undefined,
                      }
                    ),
                    __jsx(
                      _HeaderMenu_AvatarMenu_AvatarMenu__WEBPACK_IMPORTED_MODULE_12__[
                        'default'
                      ],
                      {
                        showOnlyMenu: true,
                        onClick: () => setIsOpen(false),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 167,
                        },
                        __self: undefined,
                      }
                    )
                  )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = MobileHeader;

        /***/
      },

    /***/ './components/Layout/Layout.styled.tsx':
      /*!*********************************************!*\
  !*** ./components/Layout/Layout.styled.tsx ***!
  \*********************************************/
      /*! exports provided: ContentWrapper, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ContentWrapper',
          function() {
            return ContentWrapper;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const AppWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('main', {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        });
        const ContentWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', ({ $theme }) => ({
          flex: '1 1 auto',
          overflow: 'hidden',
          paddingBottom: $theme.sizing.scale1400,
          '@media only screen and (max-width: 991px)': {
            paddingBottom: $theme.sizing.scale1000,
          },
          '@media only screen and (max-width: 767px)': {
            paddingBottom: $theme.sizing.scale900,
          },
        }));
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = AppWrapper;

        /***/
      },

    /***/ './components/Layout/Layout.tsx':
      /*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/router */ 'next/router'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Header/Header */ './components/Header/Header.tsx'
        );
        /* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../Footer/Footer */ './components/Footer/Footer.tsx'
        );
        /* harmony import */ var _Header_AuthHeader_AuthHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../Header/AuthHeader/AuthHeader */ './components/Header/AuthHeader/AuthHeader.tsx'
        );
        /* harmony import */ var _Layout_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Layout.styled */ './components/Layout/Layout.styled.tsx'
        );
        /* harmony import */ var _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../contexts/theme/theme.provider */ './contexts/theme/theme.provider.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/Layout/Layout.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Layout = ({ router, children }) => {
          const pathname = router.pathname;
          const { theme } = Object(
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_6__[
              'useThemeSwitcherCtx'
            ]
          )();
          let layoutBg = '#ffffff';

          if (
            theme ===
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_6__['THEME']
              .dark
          ) {
            layoutBg = '#000000';
          }

          if (
            theme ===
              _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_6__[
                'THEME'
              ].light &&
            pathname === '/'
          ) {
            layoutBg = '#fcfcfc';
          }

          if (
            theme ===
              _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_6__[
                'THEME'
              ].dark &&
            pathname === '/'
          ) {
            layoutBg = '#0c0c0c';
          }

          return __jsx(
            _Layout_styled__WEBPACK_IMPORTED_MODULE_5__['default'],
            {
              className: theme,
              style: {
                backgroundColor: layoutBg,
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33,
              },
              __self: undefined,
            },
            pathname === '/login' || pathname === '/signup'
              ? __jsx(
                  _Header_AuthHeader_AuthHeader__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                  {
                    pathname: pathname,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                    },
                    __self: undefined,
                  }
                )
              : __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__['default'], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                  },
                  __self: undefined,
                }),
            __jsx(
              _Layout_styled__WEBPACK_IMPORTED_MODULE_5__['ContentWrapper'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                },
                __self: undefined,
              },
              children
            ),
            pathname === '/login' || pathname === '/signup'
              ? ''
              : __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__['default'], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                  },
                  __self: undefined,
                })
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Object(
          next_router__WEBPACK_IMPORTED_MODULE_1__['withRouter']
        )(Layout);

        /***/
      },

    /***/ './components/UiElements/Badge/Badge.style.tsx':
      /*!*****************************************************!*\
  !*** ./components/UiElements/Badge/Badge.style.tsx ***!
  \*****************************************************/
      /*! exports provided: Count, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Count',
          function() {
            return Count;
          }
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          {
            position: 'relative',
            cursor: 'pointer',
            display: 'inline-flex',
          }
        );
        const Count = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'span',
          props => ({
            position: 'absolute',
            top: '-8px',
            right: '-14px',
            minWidth: '16px',
            minHeight: '14px',
            borderRadius: '50%',
            padding: '2px',
            backgroundColor: props.$bgColor
              ? props.$bgColor
              : props.$theme.colors.primary,
            color: props.$color ? props.$color : props.$theme.colors.primaryB,
            fontSize: props.$theme.sizing.scale500,
            lineHeight: '14px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          })
        );
        /* harmony default export */ __webpack_exports__['default'] = Wrapper;

        /***/
      },

    /***/ './components/UiElements/Badge/Badge.tsx':
      /*!***********************************************!*\
  !*** ./components/UiElements/Badge/Badge.tsx ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ '../node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _Badge_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Badge.style */ './components/UiElements/Badge/Badge.style.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Badge/Badge.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Badge = ({
          path,
          icon,
          count,
          color,
          bgColor,
          style,
          onClick,
        }) => {
          return __jsx(
            next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              href: path ? path : '',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25,
              },
              __self: undefined,
            },
            __jsx(
              _Badge_style__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                className: 'badge',
                style: style,
                onClick: onClick,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                },
                __self: undefined,
              },
              icon,
              __jsx(
                _Badge_style__WEBPACK_IMPORTED_MODULE_2__['Count'],
                {
                  $color: color && color,
                  $bgColor: bgColor && bgColor,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                  },
                  __self: undefined,
                },
                count
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Badge;

        /***/
      },

    /***/ './components/UiElements/Container/Container.styled.tsx':
      /*!**************************************************************!*\
  !*** ./components/UiElements/Container/Container.styled.tsx ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const ContainerArea = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          width: '100%',
          maxWidth: '1070px',
          paddingLeft: '15px',
          paddingRight: '15px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          '@media screen and (max-width: 1200px)': {
            maxWidth: '970px',
          }, // '@media screen and (max-width: 991px)': {
          //   maxWidth: '750px',
          // },
        });
        /* harmony default export */ __webpack_exports__[
          'default'
        ] = ContainerArea;

        /***/
      },

    /***/ './components/UiElements/Container/Container.tsx':
      /*!*******************************************************!*\
  !*** ./components/UiElements/Container/Container.tsx ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _Container_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Container.styled */ './components/UiElements/Container/Container.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Container/Container.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Container = ({ children }) => {
          return __jsx(
            _Container_styled__WEBPACK_IMPORTED_MODULE_1__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5,
              },
              __self: undefined,
            },
            children
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Container;

        /***/
      },

    /***/ './components/UiElements/Logo/Logo.styled.tsx':
      /*!****************************************************!*\
  !*** ./components/UiElements/Logo/Logo.styled.tsx ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_0__
        );

        const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          {
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
          }
        );
        /* harmony default export */ __webpack_exports__['default'] = Wrapper;

        /***/
      },

    /***/ './components/UiElements/Logo/Logo.tsx':
      /*!*********************************************!*\
  !*** ./components/UiElements/Logo/Logo.tsx ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ '../node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _Logo_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Logo.styled */ './components/UiElements/Logo/Logo.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Logo/Logo.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Logo = ({ path, src, style }) => {
          return __jsx(
            next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              href: path,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
              },
              __self: undefined,
            },
            __jsx(
              _Logo_styled__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                className: 'logo',
                style: style,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                },
                __self: undefined,
              },
              src
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Logo;

        /***/
      },

    /***/ './components/UiElements/NavLink/NavLink.tsx':
      /*!***************************************************!*\
  !*** ./components/UiElements/NavLink/NavLink.tsx ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/router */ 'next/router'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ '../node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/NavLink/NavLink.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }

        const ActiveLink = _ref => {
          let { children, activeClassName, href } = _ref,
            props = _objectWithoutProperties(_ref, [
              'children',
              'activeClassName',
              'href',
            ]);

          const { pathname } = Object(
            next_router__WEBPACK_IMPORTED_MODULE_1__['useRouter']
          )();
          const child = react__WEBPACK_IMPORTED_MODULE_0__['Children'].only(
            children
          );
          const childClassName = child.props.className || '';
          const newpathname = pathname.split('/').slice(1, 2);
          const path = `/${newpathname[0]}`;
          const className =
            path === href
              ? `${childClassName} ${activeClassName}`.trim()
              : childClassName;
          return __jsx(
            next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
            _extends(
              {
                href: href,
              },
              props,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: undefined,
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
              className: className || null,
            })
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = ActiveLink;

        /***/
      },

    /***/ './components/UiElements/SvgIcon/SvgIcon.tsx':
      /*!***************************************************!*\
  !*** ./components/UiElements/SvgIcon/SvgIcon.tsx ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/SvgIcon/SvgIcon.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const SvgIcon = ({ src, style }) => {
          return __jsx('span', {
            style: style,
            className: 'svg-icon',
            dangerouslySetInnerHTML: {
              __html: src,
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10,
            },
            __self: undefined,
          });
        };

        /* harmony default export */ __webpack_exports__['default'] = SvgIcon;

        /***/
      },

    /***/ './contexts/cart/cart.provider.ts':
      /*!****************************************!*\
  !*** ./contexts/cart/cart.provider.ts ***!
  \****************************************/
      /*! exports provided: useCartState, useCartDispatch, CartProvider */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'useCartState',
          function() {
            return useCartState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'useCartDispatch',
          function() {
            return useCartDispatch;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CartProvider',
          function() {
            return CartProvider;
          }
        );
        /* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../context.utils */ './contexts/context.utils.tsx'
        );
        /* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./cart.reducer */ './contexts/cart/cart.reducer.ts'
        );

        const [useCartState, useCartDispatch, CartProvider] = Object(
          _context_utils__WEBPACK_IMPORTED_MODULE_0__['createCtxWithReducer']
        )(
          _cart_reducer__WEBPACK_IMPORTED_MODULE_1__['default'],
          _cart_reducer__WEBPACK_IMPORTED_MODULE_1__['initialState']
        );
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

        /***/
      },

    /***/ './contexts/cart/cart.reducer.ts':
      /*!***************************************!*\
  !*** ./contexts/cart/cart.reducer.ts ***!
  \***************************************/
      /*! exports provided: initialState, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'initialState',
          function() {
            return initialState;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return cartReducer;
          }
        );
        /* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./cart.utils */ './contexts/cart/cart.utils.ts'
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const initialState = {
          hidden: true,
          cartItems: [],
          address: null,
        }; // type State = typeof initialState;

        function cartReducer(state, action) {
          console.log(state, 'context state');

          switch (action.type) {
            case 'TOGGLE_CART_HIDDEN':
              return _objectSpread({}, state, {
                hidden: !state.hidden,
              });

            case 'ADD_ITEM':
              return _objectSpread({}, state, {
                cartItems: Object(
                  _cart_utils__WEBPACK_IMPORTED_MODULE_0__['addItemToCart']
                )(state.cartItems, action.payload),
              });

            case 'REMOVE_ITEM':
              return _objectSpread({}, state, {
                cartItems: Object(
                  _cart_utils__WEBPACK_IMPORTED_MODULE_0__['removeItemFromCart']
                )(state.cartItems, action.payload),
              });

            case 'CLEAR_ITEM_FROM_CART':
              return _objectSpread({}, state, {
                cartItems: state.cartItems.filter(
                  cartItem => cartItem.id !== action.payload.id
                ),
              });

            case 'CLEAR_CART':
              return _objectSpread({}, state, {
                cartItems: [],
              });

            default:
              return state;
            // default: {
            //   throw new Error(`Unhandled action type: ${action.type}`);
            // }
          }
        }

        /***/
      },

    /***/ './contexts/cart/cart.utils.ts':
      /*!*************************************!*\
  !*** ./contexts/cart/cart.utils.ts ***!
  \*************************************/
      /*! exports provided: addItemToCart, removeItemFromCart, calcCartItemsTotal */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'addItemToCart',
          function() {
            return addItemToCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'removeItemFromCart',
          function() {
            return removeItemFromCart;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'calcCartItemsTotal',
          function() {
            return calcCartItemsTotal;
          }
        );
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        const addItemToCart = (cartItems, cartItemToAdd) => {
          const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id
          );

          if (existingCartItem) {
            return cartItems.map(cartItem =>
              cartItem.id === cartItemToAdd.id
                ? _objectSpread({}, cartItem, {
                    quantity: cartItem.quantity + 1,
                  })
                : cartItem
            );
          }

          return [
            ...cartItems,
            _objectSpread({}, cartItemToAdd, {
              quantity: 1,
            }),
          ];
        };
        const removeItemFromCart = (cartItems, cartItemToRemove) => {
          const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToRemove.id
          );

          if (existingCartItem.quantity === 1) {
            return cartItems.filter(
              cartItem => cartItem.id !== cartItemToRemove.id
            );
          }

          return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
              ? _objectSpread({}, cartItem, {
                  quantity: cartItem.quantity - 1,
                })
              : cartItem
          );
        };
        function calcCartItemsTotal(cartItems) {
          return cartItems.reduce(
            (prev, cur) => prev + cur.quantity * cur.price,
            0
          );
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

        /***/
      },

    /***/ './contexts/context.utils.tsx':
      /*!************************************!*\
  !*** ./contexts/context.utils.tsx ***!
  \************************************/
      /*! exports provided: createCtxWithReducer, createCtx */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createCtxWithReducer',
          function() {
            return createCtxWithReducer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createCtx',
          function() {
            return createCtx;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/contexts/context.utils.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function createCtxWithReducer(reducer, initialState) {
          const defaultDispatch = () => initialState;

          const stateCtx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
            initialState
          );
          const dispatchCtx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
            defaultDispatch
          );

          function useStateCtx(property) {
            const state = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(
              stateCtx
            );

            if (state === undefined) {
              throw new Error(
                'useCountState must be used within a CountProvider'
              );
            }

            return state[property]; // only one depth selector for comparison
          }

          function useDispatchCtx() {
            const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(
              dispatchCtx
            );

            if (context === undefined) {
              throw new Error(
                'useCountDispatch must be used within a CountProvider'
              );
            }

            return context;
          }

          function Provider({ children }) {
            const [
              state,
              dispatch,
            ] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(
              reducer,
              initialState
            );
            return __jsx(
              dispatchCtx.Provider,
              {
                value: dispatch,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                },
                __self: this,
              },
              __jsx(
                stateCtx.Provider,
                {
                  value: state,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                  },
                  __self: this,
                },
                children
              )
            );
          } // return [ctx, Provider] as const;

          return [useStateCtx, useDispatchCtx, Provider];
        } // create context with no upfront defaultValue
        // without having to do undefined check all the time

        function createCtx() {
          const ctx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
            undefined
          );

          function useCtx() {
            const c = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(
              ctx
            );
            if (!c)
              throw new Error('useCtx must be inside a Provider with a value');
            return c;
          }

          return [useCtx, ctx.Provider]; // make TypeScript infer a tuple, not an array of union types
        }

        /***/
      },

    /***/ './contexts/theme/theme.provider.tsx':
      /*!*******************************************!*\
  !*** ./contexts/theme/theme.provider.tsx ***!
  \*******************************************/
      /*! exports provided: THEME, useThemeSwitcherCtx, ThemeSwitcherProvider */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'THEME',
          function() {
            return THEME;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'useThemeSwitcherCtx',
          function() {
            return useThemeSwitcherCtx;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ThemeSwitcherProvider',
          function() {
            return ThemeSwitcherProvider;
          }
        );
        /* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../context.utils */ './contexts/context.utils.tsx'
        );

        const THEME = {
          light: 'light',
          dark: 'dark',
        };
        const [useThemeSwitcherCtx, ThemeSwitcherProvider] = Object(
          _context_utils__WEBPACK_IMPORTED_MODULE_0__['createCtx']
        )();

        /***/
      },

    /***/ './pages/_app.tsx':
      /*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styletron-react */ 'styletron-react'
        );
        /* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styletron_react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! baseui */ 'baseui'
        );
        /* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          baseui__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../styletron */ './styletron.js'
        );
        /* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/Layout/Layout */ './components/Layout/Layout.tsx'
        );
        /* harmony import */ var _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../contexts/theme/theme.provider */ './contexts/theme/theme.provider.tsx'
        );
        /* harmony import */ var _contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../contexts/cart/cart.provider */ './contexts/cart/cart.provider.ts'
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @glidejs/glide/dist/css/glide.core.min.css */ '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
        );
        /* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! react-toastify/dist/ReactToastify.css */ '../node_modules/react-toastify/dist/ReactToastify.css'
        );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! react-big-calendar/lib/css/react-big-calendar.css */ '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
        );
        /* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../assets/css/reset.css */ './assets/css/reset.css'
        );
        /* harmony import */ var _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          _assets_css_reset_css__WEBPACK_IMPORTED_MODULE_10__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/pages/_app.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        // external css

        const App = ({ Component, pageProps }) => {
          const [
            theme,
            setTheme,
          ] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_5__['THEME']
              .light
          );
          react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
            let SAVED_THEME = localStorage.getItem('theme');

            if (SAVED_THEME === null) {
              SAVED_THEME =
                _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_5__[
                  'THEME'
                ].light;
            }

            setTheme(SAVED_THEME);
          }, []);
          return __jsx(
            _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_5__[
              'ThemeSwitcherProvider'
            ],
            {
              value: {
                theme,
                setTheme,
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28,
              },
              __self: undefined,
            },
            __jsx(
              styletron_react__WEBPACK_IMPORTED_MODULE_1__['Provider'],
              {
                value: _styletron__WEBPACK_IMPORTED_MODULE_3__['styletron'],
                debug: _styletron__WEBPACK_IMPORTED_MODULE_3__['debug'],
                debugAfterHydration: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                },
                __self: undefined,
              },
              __jsx(
                baseui__WEBPACK_IMPORTED_MODULE_2__['BaseProvider'],
                {
                  theme:
                    theme ===
                    _contexts_theme_theme_provider__WEBPACK_IMPORTED_MODULE_5__[
                      'THEME'
                    ].light
                      ? _objectSpread(
                          {},
                          baseui__WEBPACK_IMPORTED_MODULE_2__['LightTheme'],
                          {
                            direction: 'ltr',
                          }
                        )
                      : _objectSpread(
                          {},
                          baseui__WEBPACK_IMPORTED_MODULE_2__['DarkTheme'],
                          {
                            direction: 'ltr',
                          }
                        ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                  __self: undefined,
                },
                __jsx(
                  _contexts_cart_cart_provider__WEBPACK_IMPORTED_MODULE_6__[
                    'CartProvider'
                  ],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                    },
                    __self: undefined,
                  },
                  __jsx(
                    _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__[
                      'default'
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                      },
                      __self: undefined,
                    },
                    __jsx(
                      Component,
                      _extends({}, pageProps, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                        },
                        __self: undefined,
                      })
                    )
                  )
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = App;

        /***/
      },

    /***/ './styletron.js':
      /*!**********************!*\
  !*** ./styletron.js ***!
  \**********************/
      /*! exports provided: styletron, debug */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'styletron',
          function() {
            return styletron;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'debug',
          function() {
            return debug;
          }
        );
        /* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styletron-engine-atomic */ 'styletron-engine-atomic'
        );
        /* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styletron-react */ 'styletron-react'
        );
        /* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styletron_react__WEBPACK_IMPORTED_MODULE_1__
        );

        const getHydrateClass = () =>
          document.getElementsByClassName('_styletron_hydrate_');

        const styletron = true
          ? new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__['Server']()
          : undefined;
        const debug = false
          ? undefined
          : new styletron_react__WEBPACK_IMPORTED_MODULE_1__['DebugEngine']();

        /***/
      },

    /***/ 0:
      /*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! private-next-pages/_app.tsx */ './pages/_app.tsx'
        );

        /***/
      },

    /***/ baseui:
      /*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui');

        /***/
      },

    /***/ 'baseui/avatar':
      /*!********************************!*\
  !*** external "baseui/avatar" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui/avatar');

        /***/
      },

    /***/ 'baseui/block':
      /*!*******************************!*\
  !*** external "baseui/block" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui/block');

        /***/
      },

    /***/ 'baseui/button':
      /*!********************************!*\
  !*** external "baseui/button" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui/button');

        /***/
      },

    /***/ 'baseui/drawer':
      /*!********************************!*\
  !*** external "baseui/drawer" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui/drawer');

        /***/
      },

    /***/ 'baseui/popover':
      /*!*********************************!*\
  !*** external "baseui/popover" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('baseui/popover');

        /***/
      },

    /***/ 'core-js/library/fn/object/define-property':
      /*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/object/define-property');

        /***/
      },

    /***/ 'core-js/library/fn/object/get-own-property-descriptor':
      /*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/object/get-own-property-descriptor');

        /***/
      },

    /***/ 'core-js/library/fn/symbol':
      /*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/symbol');

        /***/
      },

    /***/ 'core-js/library/fn/symbol/iterator':
      /*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/symbol/iterator');

        /***/
      },

    /***/ 'core-js/library/fn/weak-map':
      /*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/weak-map');

        /***/
      },

    /***/ 'next/router':
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('next/router');

        /***/
      },

    /***/ 'prop-types':
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('prop-types');

        /***/
      },

    /***/ 'prop-types-exact':
      /*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('prop-types-exact');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'react-icons/fi':
      /*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-icons/fi');

        /***/
      },

    /***/ 'react-stickynode':
      /*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-stickynode');

        /***/
      },

    /***/ 'styletron-engine-atomic':
      /*!******************************************!*\
  !*** external "styletron-engine-atomic" ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('styletron-engine-atomic');

        /***/
      },

    /***/ 'styletron-react':
      /*!**********************************!*\
  !*** external "styletron-react" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('styletron-react');

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('url');

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=_app.js.map
