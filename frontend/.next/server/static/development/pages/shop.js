module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // object to store loaded chunks // "0" means "already loaded"
  /******/
  /******/ /******/ /******/ var installedChunks = {
    /******/ 'static/development/pages/shop.js': 0,
    /******/
  }; // The require function
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
  /******/ /******/ __webpack_require__.p = ''; // uncaught error handler for webpack runtime
  /******/
  /******/ /******/ __webpack_require__.oe = function(err) {
    /******/ process.nextTick(function() {
      /******/ throw err; // catch this error by using import().catch()
      /******/
    });
    /******/
  }; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 9));
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

    /***/ '../node_modules/flexboxgrid2/flexboxgrid2.css':
      /*!*****************************************************!*\
  !*** ../node_modules/flexboxgrid2/flexboxgrid2.css ***!
  \*****************************************************/
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

    /***/ '../node_modules/react-flexbox-grid/lib/classNames.js':
      /*!************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/classNames.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = getClass;

        var _flexboxgrid = __webpack_require__(
          /*! flexboxgrid2/flexboxgrid2.css */ '../node_modules/flexboxgrid2/flexboxgrid2.css'
        );

        var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        function getClass(className) {
          return _flexboxgrid2.default && _flexboxgrid2.default[className]
            ? _flexboxgrid2.default[className]
            : className;
        }

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/components/Col.js':
      /*!****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Col.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.getColumnProps = getColumnProps;
        exports.default = Col;

        var _react = __webpack_require__(/*! react */ 'react');

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(/*! prop-types */ 'prop-types');

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _createProps = __webpack_require__(
          /*! ../createProps */ '../node_modules/react-flexbox-grid/lib/createProps.js'
        );

        var _createProps2 = _interopRequireDefault(_createProps);

        var _classNames = __webpack_require__(
          /*! ../classNames */ '../node_modules/react-flexbox-grid/lib/classNames.js'
        );

        var _classNames2 = _interopRequireDefault(_classNames);

        var _types = __webpack_require__(
          /*! ../types */ '../node_modules/react-flexbox-grid/lib/types.js'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
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
          children: _propTypes2.default.node,
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
          xlOffset: 'col-xl-offset',
        };

        function isInteger(value) {
          return (
            typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value
          );
        }

        function getColClassNames(props) {
          var extraClasses = [];

          if (props.className) {
            extraClasses.push(props.className);
          }

          if (props.first) {
            extraClasses.push(
              (0, _classNames2.default)('first-' + props.first)
            );
          }

          if (props.last) {
            extraClasses.push((0, _classNames2.default)('last-' + props.last));
          }

          return Object.keys(props)
            .filter(function(key) {
              return classMap[key];
            })
            .map(function(key) {
              return (0,
              _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
            })
            .concat(extraClasses);
        }

        function getColumnProps(props) {
          return (0, _createProps2.default)(
            propTypes,
            props,
            getColClassNames(props)
          );
        }

        function Col(props) {
          var tagName = props.tagName,
            columnProps = _objectWithoutProperties(props, ['tagName']);

          return _react2.default.createElement(
            tagName || 'div',
            getColumnProps(columnProps)
          );
        }

        Col.propTypes = propTypes;

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/components/Grid.js':
      /*!*****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Grid.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = Grid;

        var _react = __webpack_require__(/*! react */ 'react');

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(/*! prop-types */ 'prop-types');

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _createProps = __webpack_require__(
          /*! ../createProps */ '../node_modules/react-flexbox-grid/lib/createProps.js'
        );

        var _createProps2 = _interopRequireDefault(_createProps);

        var _classNames = __webpack_require__(
          /*! ../classNames */ '../node_modules/react-flexbox-grid/lib/classNames.js'
        );

        var _classNames2 = _interopRequireDefault(_classNames);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var propTypes = {
          fluid: _propTypes2.default.bool,
          className: _propTypes2.default.string,
          tagName: _propTypes2.default.string,
          children: _propTypes2.default.node,
        };

        function Grid(props) {
          var containerClass = (0, _classNames2.default)(
            props.fluid ? 'container-fluid' : 'container'
          );
          var classNames = [props.className, containerClass];
          return _react2.default.createElement(
            props.tagName || 'div',
            (0, _createProps2.default)(propTypes, props, classNames)
          );
        }

        Grid.propTypes = propTypes;

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/components/Row.js':
      /*!****************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/components/Row.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.getRowProps = getRowProps;
        exports.default = Row;

        var _classNames = __webpack_require__(
          /*! ../classNames */ '../node_modules/react-flexbox-grid/lib/classNames.js'
        );

        var _classNames2 = _interopRequireDefault(_classNames);

        var _react = __webpack_require__(/*! react */ 'react');

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(/*! prop-types */ 'prop-types');

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _createProps = __webpack_require__(
          /*! ../createProps */ '../node_modules/react-flexbox-grid/lib/createProps.js'
        );

        var _createProps2 = _interopRequireDefault(_createProps);

        var _types = __webpack_require__(
          /*! ../types */ '../node_modules/react-flexbox-grid/lib/types.js'
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var rowKeys = [
          'start',
          'center',
          'end',
          'top',
          'middle',
          'bottom',
          'around',
          'between',
        ];
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
          children: _propTypes2.default.node,
        };

        function getRowClassNames(props) {
          var modificators = [
            props.className,
            (0, _classNames2.default)('row'),
          ];

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
          return (0, _createProps2.default)(
            propTypes,
            props,
            getRowClassNames(props)
          );
        }

        function Row(props) {
          return _react2.default.createElement(
            props.tagName || 'div',
            getRowProps(props)
          );
        }

        Row.propTypes = propTypes;

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/createProps.js':
      /*!*************************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/createProps.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = createProps;

        function createProps(propTypes, props, classNames) {
          var newProps = {};
          Object.keys(props)
            .filter(function(key) {
              return key === 'children' || !propTypes[key];
            })
            .forEach(function(key) {
              return (newProps[key] = props[key]);
            });
          var className = classNames
            .filter(function(cn) {
              return cn;
            })
            .join(' ');
          return Object.assign({}, newProps, {
            className: className,
          });
        }

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/index.js':
      /*!*******************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/index.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

        var _Row2 = __webpack_require__(
          /*! ./components/Row */ '../node_modules/react-flexbox-grid/lib/components/Row.js'
        );

        Object.defineProperty(exports, 'getRowProps', {
          enumerable: true,
          get: function get() {
            return _Row2.getRowProps;
          },
        });

        var _Col2 = __webpack_require__(
          /*! ./components/Col */ '../node_modules/react-flexbox-grid/lib/components/Col.js'
        );

        Object.defineProperty(exports, 'getColumnProps', {
          enumerable: true,
          get: function get() {
            return _Col2.getColumnProps;
          },
        });

        var _Grid2 = __webpack_require__(
          /*! ./components/Grid */ '../node_modules/react-flexbox-grid/lib/components/Grid.js'
        );

        var _Grid3 = _interopRequireDefault(_Grid2);

        var _Row3 = _interopRequireDefault(_Row2);

        var _Col3 = _interopRequireDefault(_Col2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        exports.Grid = _Grid3.default;
        exports.Row = _Row3.default;
        exports.Col = _Col3.default;

        /***/
      },

    /***/ '../node_modules/react-flexbox-grid/lib/types.js':
      /*!*******************************************************!*\
  !*** ../node_modules/react-flexbox-grid/lib/types.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.ViewportSizeType = exports.ColumnSizeType = undefined;

        var _propTypes = __webpack_require__(/*! prop-types */ 'prop-types');

        var _propTypes2 = _interopRequireDefault(_propTypes);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var ColumnSizeType = (exports.ColumnSizeType = _propTypes2.default.oneOfType(
          [_propTypes2.default.number, _propTypes2.default.bool]
        ));

        var ViewportSizeType = (exports.ViewportSizeType = _propTypes2.default.oneOf(
          ['xs', 'sm', 'md', 'lg', 'xl']
        ));

        /***/
      },

    /***/ './apollo/client.js':
      /*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
      /*! exports provided: withApollo */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'withApollo',
          function() {
            return withApollo;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ 'next/head'
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @apollo/react-hooks */ '@apollo/react-hooks'
        );
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! apollo-client */ 'apollo-client'
        );
        /* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          apollo_client__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! apollo-cache-inmemory */ 'apollo-cache-inmemory'
        );
        /* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! apollo-link-http */ 'apollo-link-http'
        );
        /* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          apollo_link_http__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! isomorphic-unfetch */ 'isomorphic-unfetch'
        );
        /* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/apollo/client.js';
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

        let globalApolloClient = null;
        /**
         * Creates and provides the apolloContext
         * to a next.js PageTree. Use it by wrapping
         * your PageComponent via HOC pattern.
         * @param {Function|Class} PageComponent
         * @param {Object} [config]
         * @param {Boolean} [config.ssr=true]
         */

        function withApollo(PageComponent, { ssr = true } = {}) {
          const WithApollo = _ref => {
            let { apolloClient, apolloState } = _ref,
              pageProps = _objectWithoutProperties(_ref, [
                'apolloClient',
                'apolloState',
              ]);

            const client = apolloClient || initApolloClient(apolloState);
            return __jsx(
              _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[
                'ApolloProvider'
              ],
              {
                client: client,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                },
                __self: this,
              },
              __jsx(
                PageComponent,
                _extends({}, pageProps, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                  },
                  __self: this,
                })
              )
            );
          }; // Set the correct displayName in development

          if (true) {
            const displayName =
              PageComponent.displayName || PageComponent.name || 'Component';

            if (displayName === 'App') {
              console.warn(
                'This withApollo HOC only works with PageComponents.'
              );
            }

            WithApollo.displayName = `withApollo(${displayName})`;
          }

          if (ssr || PageComponent.getInitialProps) {
            WithApollo.getInitialProps = async ctx => {
              const { AppTree } = ctx; // Initialize ApolloClient, add it to the ctx object so
              // we can use it in `PageComponent.getInitialProp`.

              const apolloClient = (ctx.apolloClient = initApolloClient()); // Run wrapped getInitialProps methods

              const pageProps = PageComponent.getInitialProps
                ? await PageComponent.getInitialProps(ctx)
                : {}; // Only on the server:

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
                      getDataFromTree,
                    } = await Promise.resolve(/*! import() */).then(
                      __webpack_require__.t.bind(
                        null,
                        /*! @apollo/react-ssr */ '@apollo/react-ssr',
                        7
                      )
                    );
                    await getDataFromTree(
                      __jsx(AppTree, {
                        pageProps: _objectSpread({}, pageProps, {
                          apolloClient,
                        }),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69,
                        },
                        __self: this,
                      })
                    );
                  } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error(
                      'Error while running `getDataFromTree`',
                      error
                    );
                  } // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually

                  next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
                }
              } // Extract query data from the Apollo store

              const apolloState = apolloClient.cache.extract();
              return _objectSpread({}, pageProps, {
                apolloState,
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
          const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__[
            'HttpLink'
          ]({
            uri: 'http://localhost:4000/graphql',
            // Server URL (must be absolute)
            credentials: 'same-origin',
            fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default(),
          });
          const ssrMode = true;
          const cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__[
            'InMemoryCache'
          ]().restore(initialState);
          return new apollo_client__WEBPACK_IMPORTED_MODULE_3__['ApolloClient'](
            {
              ssrMode,
              link: httpLink,
              cache,
            }
          );
        }

        /***/
      },

    /***/ './assets/images/placeholder.jpg':
      /*!***************************************!*\
  !*** ./assets/images/placeholder.jpg ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAFPAUwDASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAMHAQIEBgUICv/EAEEQAAIBAwAFCAYIBQMFAAAAAAABAgMEEQUSITFRBhNBYZGh0fAVInGBseEHFBcyVJPB1CNCUmKUJIPVQ1NyhPH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/twAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABq5Jdb4H0NGaLv9MV3Rs6axHDq1p5jRoxe51JpSeXh6sYRc5YbUWk2g4QWXQ5BWagvrd9d1am+XMKlRgnjclUhcSeH/M2tZbdWOcHJfcg3GDno29nOcVlULtRWvjojWpxjGL6EpUtVv704raBX4M16Ve0rVLe5pSpVqUnGcJrVkmu5prDjKPqyi1KLaaZqmnufu6QMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpKWNi3/A3IJPLb87gMwhKpOFOCcpzlGEIrfKUmoxS622kX7orRtHRVjRs6KWYRUq00sOtXklztWT3tyaxFNvVgowWyKKM0bUhT0no6U2lCF/ZzqZ3KEbinKTb3JYW3PQfoQAAAPE8tdF07iw9I04JXFm4KpJL1qltOag4ya2vmpyjUi3sjHnOOypk8PK6C9eUc4U9B6UlNpJ2dWCz/XUSp0/e6kopLpeEUQnlZ7faB0KSkjJFBpPHH5koAAAAZSbzhN4Tbwm8JLLbx0JbW9yW8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAazeF7XghJZ7l7SICBvLb68+fYXfyY5QUNMWkKM6iWkbanGNzSk0pVVFKP1mmtmtCbxzmqv4dRuLSjKm5UeaU6ta3qxq0KtSjVpy1oVaU5QqQfQ4zg1JPD3preB+mwUZS5c8oqEVF1re5SWFKvbRc1hYWXRdHW460taTectnNe8rtPX9OVKreKhSmsSp2tONDWTWGpVEnXw02pR53Uktji0B6rltygo3C9D2dRVFTqKd9Ug04OcH6lvGSbUnTn69bCxGpGnDOtGcVXkHt9q8/qc8Flt8O/PHzvwTw+8urIExOtqT4pEBvrpRSW1439HldH6gSNpb2aOedkV2/DCNG2957bkdoP67c+krmGbW0n/BjJbK1zHEk8dNOhlSfRKpqR2qNSIHruS+g1o6yda6pr65eQTrRnHbSoSScbdp52vZKsnjM8Qknzab8Byl0RPQ98+bjmyuXKpbS2vUw050JP+qk5JRby5U3CTblrYuo+ZpfRlHS1jVs63quS16NXGXRrRT5uouKy3GcdmtTlKKabTQUQpp9T8+eg2MXNtWs7ita3EHTrUJunUi+hrpT3OMliUZLZKLUllNEcZ42Pdx4eIEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw1lNdntIDoIprb7QOeaw2+h/EglFvavejraTWGROLXWuIHKCWbS6E37M488PLixwQHZY21a9uaNnbQ161eahHOcR6ZTlhNqFOCc5y/lipPBbN5yStZaHja2sIRvbeHOUrnVjGpcVtXNSNWW16ld7IxlJqi1Tw9WLUoeR2gHYW3pC6hq3d3Bc3CSxKhbPEoxae2M6zSnNP1lFQg1GSmn7kD85yjUU5U6ilGUJOE4yTi4yi2pRksbJJppprKaw9xvlJcEe/5aaDlSb0zawxCpKML6EYv1ZvZC5xuUamVTqv/ALmpPa6k5Kuc5eNspNpKKWZNvcklty9yXsQH1tFaPr6Xv6Njb7Nd61WrjKo0Itc7Vf8A4p4im1r1JQhlOSL6tLWjY21G0t46lGhTjTgt7aW+Unha05yzOcsZlNuT3nwOS2g1oewUq0Ur66Ualy97pxWXTt0938NNupjY6spbZRjBnpwAAA8Jy00G7qh6Vtaebi2hi6hFetWto/8AU2LbO3WW3jLo6ybfNwRVKaayj9ItJpprKexp7muDKT5VaDeh77nqEcWF5KU6KS9WjU31LZ7dij9+i3jNN6vrOnNsPPwl0dn6+fkSHOn0r3E0Zay6+kDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyi11riRylhdb3eJ1N42s55JSbbXZ58sDmaT2tJ9bPW8kdB+k7z63Wh/oLOcZSTWy4uFiVOik1iUIbKlffmOpTaxUyvgWOj62k7yhY2ybqVp6rk/uwgk3UqTwtkKcFKUul4xFOTSd+aO0bbaMs6FlbRapUY4y8a1SbeZ1JtJZnOTcn0LOrFKKSQTkkYdL7PE3SS3IyBHWpU69KpQrQjUpVoSp1KclmM4Ti4yjJcJRbTPBaF5FLR+mKt7cVIVrW2m56Oh96cpSbcKlwnFRUrZNKOrnXrKNVaigoysEAAAAAAA+fpTRtDStlWsrherUjmnUwnKjWinzdaG71oN7Vla0XKDerJn0AB+dLq1r6Pu69lcx1atCo4S36rxtjODaTcKkXGcJYWtGSeNpHF4ee32Fs8stBekLX0hbQzeWcHzkYr1q9rHWlKKS2yqUW3OmltlF1IJSk4JVHGWV1rv6/P6gdW8EcJdD93h5/UkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwm+AEc30dvnz3EMnhdb85Nt57HkdoL0jd+kbmObOyqLm4yWY3FzHEordh06OY1J9EpunBqUXNIPX8kNBei7N3VzDVvryMXJSXrW9DOtTo8YynsqVls9bUhJZpZfsAAAAAAAAAAAAAAAAUzyu0F6KvPrltDFjeTlJRisRt679adHZsUJ7alFbEkpU0sUsu5jj0hYW+krOvZXMdalWg1lfepzW2FWD6J05JSi9zaxJOLaYfntPc17UTxeVn3P2m99Y3GjLuvY3McVKE8KS+7Ug9sKsM74Ti1JPes6skpRaUEHh44+fl7wJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0m9ntfn9DcjqdHv/QCJ7E3wTLNs+WugNH2lC0oWek4UrenGEUqNo23/ADTk/rkdac5NznLC1pNvCzgrJ7n7Gc8llNAW4/pE0Ill2ulPyLT98Rv6SNBrfaaW/Is/3xT0llde9EEo5WOno6n53gXM/pL0Et9ppf8AIs/35r9pugfwml/8ey/flKuL2prZ3EbgujZ3+e0C7vtN0D+E0v8A49l+/H2m6B/CaX/x7L9+UhzfX3fMc3193zAu9/SboH8Hph/7Fl+ukEY+07QP4LTH5Fj/AMiUjzfX3fMOm+hr37PEC7vtO0D+C0x+RY/8iPtO0D+D0wv9iy/TSDKQ1HxXf4Geb6+75gXf9pugfwml/wDHsv35svpK0E1n6ppbbxoWf78o9QS6/gTKDe/Yu/3AXavpH0G1n6rpX8iz/fEi+kPQrx/pdKbcb6Fp0/8AulKRWWl0fodMVmS6tvZ8wPd8pdPaI03C3na295SvaMnB1a9OhCEraSlKVOTp3FWUpRqKMqeYpRUqu31jyRDD7y9/wJgOgGI7l7F8DIAAAAAAAAAAAAAAAAAAAAAAAAAAADSa2Z4fr5RuGs7GBzkMlh9XQTtYbXZ7DVpPYwOSUN7XZ4eH/wAIpRT3rD49PvOxwfRt+Pnzg0ceK7V5wBxOD6MPufn3mvNv+ldx2uEete/xyY1Fxfd4AcfN/wBq7jHNf29/zO3UXF93gNRcX3eAHFzX9vf8xzX9vf8AM7dRcX3eA1Fxfd4AcXNf29/zM81j+Ve9p/FnZqLi+7wGouL7vADkVN/0pdn6GyhxfuXidOouL7vAyoLhl9e3u3dwEMY9CXnrZNGOqbqL6E/gSKCW/b8PmAgsLPS93sNwSQXS17AJFsSXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGk1hkbg1u2/H5+dhKAOfDW9YB0GNVcF2Ac+E96T9wwuC7ET6keHe/EakeHe/ECDC4LsQwuC7ET6keHe/EakeHe/ECDC4LsQwuC7ET6keHe/EakeHe/ECDC4LsQwuC7ET6keHe/EakeHe/ECDC4LsRkm1I8O9+I1Y8PiBCZSb3J+esmwuC7DIGihjft6uj5m4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==';

        /***/
      },

    /***/ './assets/images/shop-banner.png':
      /*!***************************************!*\
  !*** ./assets/images/shop-banner.png ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/_next/static/images/shop-banner-a2ad8a4b5f40c3c0b1f141adca43c13d.png';

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

    /***/ './components/UiElements/Image/Image.tsx':
      /*!***********************************************!*\
  !*** ./components/UiElements/Image/Image.tsx ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return Image;
          }
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-image */ 'react-image'
        );
        /* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_image__WEBPACK_IMPORTED_MODULE_1__
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/Image/Image.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const Placeholder = () =>
          __jsx('img', {
            src: __webpack_require__(
              /*! ../../../assets/images/placeholder.jpg */ './assets/images/placeholder.jpg'
            ),
            alt: 'product img loder',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 5,
            },
            __self: undefined,
          });

        function Image({ url, alt = 'placeholder', className, style }) {
          return __jsx(react_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            draggable: false,
            style: style,
            src: url,
            alt: alt,
            loader: __jsx(Placeholder, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28,
              },
              __self: this,
            }),
            unloader: __jsx(Placeholder, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29,
              },
              __self: this,
            }),
            className: className,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
            },
            __self: this,
          });
        }

        /***/
      },

    /***/ './components/UiElements/PageTitle/PageTitle.styled.tsx':
      /*!**************************************************************!*\
  !*** ./components/UiElements/PageTitle/PageTitle.styled.tsx ***!
  \**************************************************************/
      /*! exports provided: Title, Subtitle, Backdrop, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Title',
          function() {
            return Title;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Subtitle',
          function() {
            return Subtitle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Backdrop',
          function() {
            return Backdrop;
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

        const Section = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'section',
          {
            width: '100%',
            padding: '46px 0 50px',
            position: 'relative',
            '@media only screen and (max-width: 991px)': {
              padding: '30px 0 40px',
            },
            '@media only screen and (max-width: 480px)': {
              padding: '30px 0',
            },
          }
        );
        const Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'h2',
          ({ $theme }) =>
            _objectSpread({}, $theme.typography.font950, {
              color: $theme.colors.primaryA,
              marginBottom: $theme.sizing.scale600,
              '@media only screen and (max-width: 991px)': _objectSpread(
                {},
                $theme.typography.font850
              ),
              '@media only screen and (max-width: 767px)': _objectSpread(
                {},
                $theme.typography.font750,
                {
                  marginBottom: $theme.sizing.scale500,
                }
              ),
              '@media only screen and (max-width: 480px)': _objectSpread(
                {},
                $theme.typography.font650,
                {
                  marginBottom: $theme.sizing.scale400,
                }
              ),
            })
        );
        const Subtitle = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'p',
          ({ $theme }) =>
            _objectSpread({}, $theme.typography.font200, {
              color: $theme.colors.contentSecondary,
            })
        );
        const Backdrop = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'div',
          ({ $theme }) => ({
            width: '100%',
            height: '286px',
            backgroundColor: $theme.colors.backgroundSecondary,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
          })
        );
        /* harmony default export */ __webpack_exports__['default'] = Section;

        /***/
      },

    /***/ './components/UiElements/PageTitle/PageTitle.tsx':
      /*!*******************************************************!*\
  !*** ./components/UiElements/PageTitle/PageTitle.tsx ***!
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
        /* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Container/Container */ './components/UiElements/Container/Container.tsx'
        );
        /* harmony import */ var _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./PageTitle.styled */ './components/UiElements/PageTitle/PageTitle.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/PageTitle/PageTitle.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const PageTitle = ({ title, subtitle, backdrop, bgColor }) => {
          return __jsx(
            _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__['default'],
            {
              style: {
                backgroundColor: bgColor,
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14,
              },
              __self: undefined,
            },
            __jsx(
              _Container_Container__WEBPACK_IMPORTED_MODULE_1__['default'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                },
                __self: undefined,
              },
              __jsx(
                _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__['Title'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                  },
                  __self: undefined,
                },
                title
              ),
              subtitle &&
                __jsx(
                  _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__['Subtitle'],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                    },
                    __self: undefined,
                  },
                  subtitle
                )
            ),
            backdrop &&
              __jsx(
                _PageTitle_styled__WEBPACK_IMPORTED_MODULE_2__['Backdrop'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                  },
                  __self: undefined,
                }
              )
          );
        };

        PageTitle.defaultProps = {
          backdrop: true,
        };
        /* harmony default export */ __webpack_exports__['default'] = PageTitle;

        /***/
      },

    /***/ './components/UiElements/ProductCard/ProductCard.styled.tsx':
      /*!******************************************************************!*\
  !*** ./components/UiElements/ProductCard/ProductCard.styled.tsx ***!
  \******************************************************************/
      /*! exports provided: Product, ImageWrapper, Title, Price */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Product',
          function() {
            return Product;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImageWrapper',
          function() {
            return ImageWrapper;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Title',
          function() {
            return Title;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Price',
          function() {
            return Price;
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

        const Product = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'a',
          props => ({
            display: 'block',
            minHeight: '200px',
            textAlign: props.$alignItem ? props.alignItem : 'center',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            marginTop: '20px',
            marginBottom: '10px',
            ':hover': {
              opacity: 0.8,
            },
          })
        );
        const ImageWrapper = Object(
          baseui__WEBPACK_IMPORTED_MODULE_0__['styled']
        )('div', {
          marginBottom: '10px',
        });
        const Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'h4',
          ({ $theme }) =>
            _objectSpread({}, $theme.typography.font250, {
              color: $theme.colors.primaryA,
              fontWeight: 600,
              marginBottom: $theme.sizing.scale200,
            })
        );
        const Price = Object(baseui__WEBPACK_IMPORTED_MODULE_0__['styled'])(
          'p',
          ({ $theme }) =>
            _objectSpread({}, $theme.typography.font300, {
              color: $theme.colors.contentSecondary,
            })
        );

        /***/
      },

    /***/ './components/UiElements/ProductCard/ProductCard.tsx':
      /*!***********************************************************!*\
  !*** ./components/UiElements/ProductCard/ProductCard.tsx ***!
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ '../node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Image/Image */ './components/UiElements/Image/Image.tsx'
        );
        /* harmony import */ var _ProductCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ProductCard.styled */ './components/UiElements/ProductCard/ProductCard.styled.tsx'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/components/UiElements/ProductCard/ProductCard.tsx';
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        const ProductCard = ({ href, as, thumb, title, price, alignItem }) => {
          return __jsx(
            next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              href: href,
              as: as,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24,
              },
              __self: undefined,
            },
            __jsx(
              _ProductCard_styled__WEBPACK_IMPORTED_MODULE_3__['Product'],
              {
                className: 'product',
                $alignItem: alignItem,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                },
                __self: undefined,
              },
              __jsx(
                _ProductCard_styled__WEBPACK_IMPORTED_MODULE_3__[
                  'ImageWrapper'
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                  },
                  __self: undefined,
                },
                __jsx(_Image_Image__WEBPACK_IMPORTED_MODULE_2__['default'], {
                  url: thumb,
                  alt: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                  },
                  __self: undefined,
                })
              ),
              __jsx(
                _ProductCard_styled__WEBPACK_IMPORTED_MODULE_3__['Title'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                  },
                  __self: undefined,
                },
                title
              ),
              __jsx(
                _ProductCard_styled__WEBPACK_IMPORTED_MODULE_3__['Price'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                  },
                  __self: undefined,
                },
                '$',
                price
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = ProductCard;

        /***/
      },

    /***/ './pages/shop/index.tsx':
      /*!******************************!*\
  !*** ./pages/shop/index.tsx ***!
  \******************************/
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
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ 'next/head'
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-flexbox-grid */ '../node_modules/react-flexbox-grid/lib/index.js'
        );
        /* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! graphql-tag */ 'graphql-tag'
        );
        /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          graphql_tag__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @apollo/react-hooks */ '@apollo/react-hooks'
        );
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! baseui/block */ 'baseui/block'
        );
        /* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_block__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! baseui/button */ 'baseui/button'
        );
        /* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          baseui_button__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../components/UiElements/Container/Container */ './components/UiElements/Container/Container.tsx'
        );
        /* harmony import */ var _components_UiElements_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../components/UiElements/PageTitle/PageTitle */ './components/UiElements/PageTitle/PageTitle.tsx'
        );
        /* harmony import */ var _components_UiElements_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../components/UiElements/ProductCard/ProductCard */ './components/UiElements/ProductCard/ProductCard.tsx'
        );
        /* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../apollo/client */ './apollo/client.js'
        );
        var _jsxFileName =
          '/Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/pages/shop/index.tsx';
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

        const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query getProducts($limit: Int, $offset: Int) {
    products(limit: $limit, offset: $offset) {
      items {
        id
        name
        slug
        price
        thumbnail
      }
      total
      hasMore
    }
  }
`;
        const TITLE = 'Shopping Store';
        const SUB_TITLE = 'Awesome GitHub T-shirts and other cool swag';

        const Shop = () => {
          const { data, loading, error, fetchMore } = Object(
            _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__['useQuery']
          )(GET_PRODUCTS, {
            notifyOnNetworkStatusChange: true,
          });

          if (error) {
            return __jsx(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                },
                __self: undefined,
              },
              'Error! ',
              error.message
            );
          }

          if (!data) return null;
          const { items, total } = data.products;

          function loadMore() {
            fetchMore({
              variables: {
                offset: data.products.items.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                  products: {
                    __typename: prev.products.__typename,
                    items: [
                      ...prev.products.items,
                      ...fetchMoreResult.products.items,
                    ],
                    hasMore: fetchMoreResult.products.hasMore,
                  },
                });
              },
            });
          }

          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                },
                __self: undefined,
              },
              __jsx(
                'title',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                  },
                  __self: undefined,
                },
                'Shop | INST.'
              ),
              __jsx('meta', {
                name: 'Description',
                content: 'Inst shop page',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                },
                __self: undefined,
              })
            ),
            __jsx(
              _components_UiElements_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_8__[
                'default'
              ],
              {
                title: TITLE,
                subtitle: SUB_TITLE,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                },
                __self: undefined,
              }
            ),
            __jsx(
              _components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_7__[
                'default'
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                },
                __self: undefined,
              },
              __jsx(
                baseui_block__WEBPACK_IMPORTED_MODULE_5__['Block'],
                {
                  paddingBottom: '20px',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                  },
                  __self: undefined,
                },
                __jsx('img', {
                  src: __webpack_require__(
                    /*! ../../assets/images/shop-banner.png */ './assets/images/shop-banner.png'
                  ),
                  width: '100%',
                  alt: 'Banner',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                  },
                  __self: undefined,
                })
              ),
              __jsx(
                react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__['Row'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                  },
                  __self: undefined,
                },
                items.map(item =>
                  __jsx(
                    react_flexbox_grid__WEBPACK_IMPORTED_MODULE_2__['Col'],
                    {
                      sm: 6,
                      md: 4,
                      key: `product-key${item.id}`,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                      },
                      __self: undefined,
                    },
                    __jsx(
                      _components_UiElements_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ],
                      {
                        href: `/shop/[slug]`,
                        as: `/shop/${item.slug}`,
                        thumb: item.thumbnail,
                        title: item.name,
                        price: item.price,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                        },
                        __self: undefined,
                      }
                    )
                  )
                )
              ),
              __jsx(
                baseui_block__WEBPACK_IMPORTED_MODULE_5__['Block'],
                {
                  paddingTop: ['30px', '30px', '40px', '50px'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                  },
                  __self: undefined,
                },
                total > items.length
                  ? __jsx(
                      baseui_button__WEBPACK_IMPORTED_MODULE_6__['Button'],
                      {
                        isLoading: loading,
                        onClick: loadMore,
                        kind: 'secondary',
                        size: 'large',
                        overrides: {
                          BaseButton: {
                            style: ({ $theme }) => {
                              return _objectSpread(
                                {},
                                $theme.typography.font250
                              );
                            },
                          },
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102,
                        },
                        __self: undefined,
                      },
                      'Load more ',
                      total - items.length,
                      ' products'
                    )
                  : 'No more product'
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__['default'] = Object(
          _apollo_client__WEBPACK_IMPORTED_MODULE_10__['withApollo']
        )(Shop);

        /***/
      },

    /***/ 9:
      /*!************************************!*\
  !*** multi ./pages/shop/index.tsx ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/proprietaire/Desktop/Inst - React Minimalist GraphQL Dashboard/LTL Maps Admin/frontend/pages/shop/index.tsx */ './pages/shop/index.tsx'
        );

        /***/
      },

    /***/ '@apollo/react-hooks':
      /*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('@apollo/react-hooks');

        /***/
      },

    /***/ '@apollo/react-ssr':
      /*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('@apollo/react-ssr');

        /***/
      },

    /***/ 'apollo-cache-inmemory':
      /*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('apollo-cache-inmemory');

        /***/
      },

    /***/ 'apollo-client':
      /*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('apollo-client');

        /***/
      },

    /***/ 'apollo-link-http':
      /*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('apollo-link-http');

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

    /***/ 'graphql-tag':
      /*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('graphql-tag');

        /***/
      },

    /***/ 'isomorphic-unfetch':
      /*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('isomorphic-unfetch');

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('next/head');

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

    /***/ 'react-image':
      /*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react-image');

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
//# sourceMappingURL=shop.js.map
