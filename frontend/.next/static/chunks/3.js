(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "../node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/baseui/esm/button/button-internals.js":
/*!*************************************************************!*\
  !*** ../node_modules/baseui/esm/button/button-internals.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonInternals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/button/styled-components.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../node_modules/baseui/esm/button/utils.js");
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




function ButtonInternals(props) {
  var children = props.children,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      startEnhancer = props.startEnhancer,
      endEnhancer = props.endEnhancer;

  var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__["getOverrides"])(overrides.StartEnhancer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["StartEnhancer"]),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      StartEnhancer = _getOverrides2[0],
      startEnhancerProps = _getOverrides2[1];

  var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__["getOverrides"])(overrides.EndEnhancer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["EndEnhancer"]),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      EndEnhancer = _getOverrides4[0],
      endEnhancerProps = _getOverrides4[1];

  var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getSharedProps"])(props);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, startEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StartEnhancer, _extends({}, sharedProps, startEnhancerProps), typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer), children, endEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EndEnhancer, _extends({}, sharedProps, endEnhancerProps), typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer));
}

/***/ }),

/***/ "../node_modules/baseui/esm/button/button.js":
/*!***************************************************!*\
  !*** ../node_modules/baseui/esm/button/button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/button/styled-components.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../node_modules/baseui/esm/button/utils.js");
/* harmony import */ var _button_internals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-internals.js */ "../node_modules/baseui/esm/button/button-internals.js");
/* harmony import */ var _default_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-props.js */ "../node_modules/baseui/esm/button/default-props.js");
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/







// eslint-disable-next-line flowtype/no-weak-types
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "internalOnClick", function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          onClick = _this$props.onClick;

      if (isLoading) {
        return;
      }

      onClick && onClick.apply(void 0, arguments);
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          size = _this$props2.size,
          kind = _this$props2.kind,
          shape = _this$props2.shape,
          isLoading = _this$props2.isLoading,
          isSelected = _this$props2.isSelected,
          startEnhancer = _this$props2.startEnhancer,
          endEnhancer = _this$props2.endEnhancer,
          children = _this$props2.children,
          forwardedRef = _this$props2.forwardedRef,
          restProps = _objectWithoutProperties(_this$props2, ["overrides", "size", "kind", "shape", "isLoading", "isSelected", "startEnhancer", "endEnhancer", "children", "forwardedRef"]); // Get overrides


      var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.BaseButton, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["BaseButton"]),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          BaseButton = _getOverrides2[0],
          baseButtonProps = _getOverrides2[1];

      var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.LoadingSpinner, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinner"]),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          LoadingSpinner = _getOverrides4[0],
          loadingSpinnerProps = _getOverrides4[1];

      var _getOverrides5 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.LoadingSpinnerContainer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinnerContainer"]),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          LoadingSpinnerContainer = _getOverrides6[0],
          loadingSpinnerContainerProps = _getOverrides6[1];

      var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getSharedProps"])(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseButton, _extends({
        ref: forwardedRef,
        "data-baseweb": "button"
      }, sharedProps, restProps, baseButtonProps, {
        // Applies last to override passed in onClick
        onClick: this.internalOnClick
      }), isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          opacity: 0,
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_internals_js__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingSpinnerContainer, loadingSpinnerContainerProps, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingSpinner, _extends({}, sharedProps, loadingSpinnerProps)))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_internals_js__WEBPACK_IMPORTED_MODULE_3__["default"], this.props));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Button, "defaultProps", _default_props_js__WEBPACK_IMPORTED_MODULE_4__["defaultProps"]);

var ForwardedButton = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, _extends({
    forwardedRef: ref
  }, props));
});
ForwardedButton.displayName = 'Button';
/* harmony default export */ __webpack_exports__["default"] = (ForwardedButton);

/***/ }),

/***/ "../node_modules/baseui/esm/button/constants.js":
/*!******************************************************!*\
  !*** ../node_modules/baseui/esm/button/constants.js ***!
  \******************************************************/
/*! exports provided: KIND, SHAPE, SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return KIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return SIZE; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var KIND = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  minimal: 'minimal'
};
var SHAPE = {
  default: 'default',
  pill: 'pill',
  round: 'round',
  square: 'square'
};
var SIZE = {
  mini: 'mini',
  default: 'default',
  compact: 'compact',
  large: 'large'
};

/***/ }),

/***/ "../node_modules/baseui/esm/button/default-props.js":
/*!**********************************************************!*\
  !*** ../node_modules/baseui/esm/button/default-props.js ***!
  \**********************************************************/
/*! exports provided: defaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/button/constants.js");
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var defaultProps = {
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: _constants_js__WEBPACK_IMPORTED_MODULE_0__["KIND"].primary,
  overrides: {},
  shape: _constants_js__WEBPACK_IMPORTED_MODULE_0__["SHAPE"].default,
  size: _constants_js__WEBPACK_IMPORTED_MODULE_0__["SIZE"].default
};

/***/ }),

/***/ "../node_modules/baseui/esm/button/index.js":
/*!**************************************************!*\
  !*** ../node_modules/baseui/esm/button/index.js ***!
  \**************************************************/
/*! exports provided: Button, KIND, SIZE, SHAPE, StyledBaseButton, StyledStartEnhancer, StyledEndEnhancer, StyledLoadingSpinner, StyledLoadingSpinnerContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "../node_modules/baseui/esm/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/button/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"]; });

/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/button/styled-components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledBaseButton", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["BaseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledStartEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["StartEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledEndEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["EndEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLoadingSpinner", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLoadingSpinnerContainer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerContainer"]; });

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
 // Constants

 // Styled elements

 // Types

/***/ }),

/***/ "../node_modules/baseui/esm/button/styled-components.js":
/*!**************************************************************!*\
  !*** ../node_modules/baseui/esm/button/styled-components.js ***!
  \**************************************************************/
/*! exports provided: BaseButton, EndEnhancer, StartEnhancer, LoadingSpinnerContainer, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndEnhancer", function() { return EndEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEnhancer", function() { return StartEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerContainer", function() { return LoadingSpinnerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.js */ "../node_modules/baseui/esm/styles/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/button/constants.js");
function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var BaseButton = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', function (_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $kind = _ref.$kind,
      $shape = _ref.$shape,
      $isLoading = _ref.$isLoading,
      $isSelected = _ref.$isSelected,
      $disabled = _ref.$disabled;
  return _objectSpread2({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    textDecoration: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: $theme.colors.buttonDisabledFill,
      color: $theme.colors.buttonDisabledText
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  }, getFontStyles({
    $theme: $theme,
    $size: $size
  }), {}, getBorderRadiiStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getPaddingStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getKindStyles({
    $theme: $theme,
    $kind: $kind,
    $isLoading: $isLoading,
    $isSelected: $isSelected,
    $disabled: $disabled
  }));
});
BaseButton.displayName = "BaseButton";
var EndEnhancer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', $theme.sizing.scale500);
});
EndEnhancer.displayName = "EndEnhancer";
var StartEnhancer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight', $theme.sizing.scale500);
});
StartEnhancer.displayName = "StartEnhancer";
var LoadingSpinnerContainer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  // To center within parent
  position: 'absolute'
});
LoadingSpinnerContainer.displayName = "LoadingSpinnerContainer";
var LoadingSpinner = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $kind = _ref6.$kind,
      $disabled = _ref6.$disabled;

  var _getLoadingSpinnerCol = getLoadingSpinnerColors({
    $theme: $theme,
    $kind: $kind,
    $disabled: $disabled
  }),
      foreground = _getLoadingSpinnerCol.foreground,
      background = _getLoadingSpinnerCol.background;

  return {
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: $theme.sizing.scale0,
    borderTopWidth: $theme.sizing.scale0,
    borderRightWidth: $theme.sizing.scale0,
    borderBottomWidth: $theme.sizing.scale0,
    borderTopColor: foreground,
    borderLeftColor: background,
    borderBottomColor: background,
    borderRightColor: background,
    animationDuration: $theme.animation.timing700,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: {
      to: {
        transform: 'rotate(360deg)'
      },
      from: {
        transform: 'rotate(0deg)'
      }
    }
  };
});
LoadingSpinner.displayName = "LoadingSpinner";

function getLoadingSpinnerColors(_ref7) {
  var $theme = _ref7.$theme,
      $kind = _ref7.$kind,
      $disabled = _ref7.$disabled;

  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground
    };
  }

  switch ($kind) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].secondary:
      {
        return {
          foreground: $theme.colors.buttonSecondarySpinnerForeground,
          background: $theme.colors.buttonSecondarySpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].tertiary:
      {
        return {
          foreground: $theme.colors.buttonTertiarySpinnerForeground,
          background: $theme.colors.buttonTertiarySpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].minimal:
      {
        return {
          foreground: $theme.colors.buttonMinimalSpinnerForeground,
          background: $theme.colors.buttonMinimalSpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].primary:
    default:
      {
        return {
          foreground: $theme.colors.buttonPrimarySpinnerForeground,
          background: $theme.colors.buttonPrimarySpinnerBackground
        };
      }
  }
}

function getBorderRadiiStyles(_ref8) {
  var $theme = _ref8.$theme,
      $size = _ref8.$size,
      $shape = _ref8.$shape;
  var value = $theme.borders.buttonBorderRadius;

  if ($shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].pill) {
    if ($size === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact) {
      value = '30px';
    } else if ($size === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  };
}

function getFontStyles(_ref9) {
  var $theme = _ref9.$theme,
      $size = _ref9.$size;

  switch ($size) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].mini:
      return $theme.typography.font150;

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact:
      return $theme.typography.font250;

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large:
      return $theme.typography.font450;

    default:
      return $theme.typography.font350;
  }
}

function getPaddingStyles(_ref10) {
  var $theme = _ref10.$theme,
      $size = _ref10.$size,
      $shape = _ref10.$shape;
  var iconShape = $shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].square || $shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].round;

  switch ($size) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].mini:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale300,
        paddingRight: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale300
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact:
      return {
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
        paddingLeft: iconShape ? $theme.sizing.scale400 : $theme.sizing.scale500,
        paddingRight: iconShape ? $theme.sizing.scale400 : $theme.sizing.scale500
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large:
      return {
        paddingTop: $theme.sizing.scale600,
        paddingBottom: $theme.sizing.scale600,
        paddingLeft: iconShape ? $theme.sizing.scale600 : $theme.sizing.scale700,
        paddingRight: iconShape ? $theme.sizing.scale600 : $theme.sizing.scale700
      };

    default:
      return {
        paddingTop: $theme.sizing.scale550,
        paddingBottom: $theme.sizing.scale550,
        paddingLeft: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale600,
        paddingRight: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale600
      };
  }
}

function getKindStyles(_ref11) {
  var $theme = _ref11.$theme,
      $isLoading = _ref11.$isLoading,
      $isSelected = _ref11.$isSelected,
      $kind = _ref11.$kind,
      $disabled = _ref11.$disabled;

  if ($disabled) {
    return {};
  }

  switch ($kind) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].primary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimarySelectedText,
          backgroundColor: $theme.colors.buttonPrimarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonPrimaryText,
        backgroundColor: $theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonPrimaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].secondary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonSecondarySelectedText,
          backgroundColor: $theme.colors.buttonSecondarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonSecondaryText,
        backgroundColor: $theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonSecondaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].tertiary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonTertiarySelectedText,
          backgroundColor: $theme.colors.buttonTertiarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonTertiaryText,
        backgroundColor: $theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonTertiaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].minimal:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonMinimalSelectedText,
          backgroundColor: $theme.colors.buttonMinimalSelectedFill
        };
      }

      return {
        color: $theme.colors.buttonMinimalText,
        backgroundColor: $theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonMinimalActive
        }
      };

    default:
      return {};
  }
}

/***/ }),

/***/ "../node_modules/baseui/esm/button/utils.js":
/*!**************************************************!*\
  !*** ../node_modules/baseui/esm/button/utils.js ***!
  \**************************************************/
/*! exports provided: getSharedProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedProps", function() { return getSharedProps; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function getSharedProps(_ref) {
  var disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      isSelected = _ref.isSelected,
      kind = _ref.kind,
      shape = _ref.shape,
      size = _ref.size;
  return {
    $disabled: disabled,
    $isLoading: isLoading,
    $isSelected: isSelected,
    $kind: kind,
    $shape: shape,
    $size: size
  };
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/delete-alt.js":
/*!*****************************************************!*\
  !*** ../node_modules/baseui/esm/icon/delete-alt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteAlt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "../node_modules/baseui/esm/icon/icon.js");
/* harmony import */ var _omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omit-dollar-prefixed-keys.js */ "../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js");
/* harmony import */ var _styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme-provider.js */ "../node_modules/baseui/esm/styles/theme-provider.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md




function DeleteAlt(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
    return theme.icons && theme.icons.DeleteAlt ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](theme.icons.DeleteAlt, _extends({
      title: "Delete Alt",
      viewBox: "0 0 24 24"
    }, Object(_omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(props))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      title: "Delete Alt",
      viewBox: "0 0 24 24"
    }, props), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12C4 16.4183 7.58173 20 12 20ZM10.0303 8.96967C9.73743 8.67679 9.26257 8.67679 8.96967 8.96967C8.67676 9.26257 8.67676 9.73743 8.96967 10.0303L10.9393 12L8.96967 13.9697C8.67676 14.2626 8.67676 14.7374 8.96967 15.0303C9.26257 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L13.0607 12L15.0303 10.0303C15.3232 9.73743 15.3232 9.26257 15.0303 8.96967C14.7374 8.67679 14.2626 8.67679 13.9697 8.96967L12 10.9393L10.0303 8.96967Z"
    }));
  });
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/hide.js":
/*!***********************************************!*\
  !*** ../node_modules/baseui/esm/icon/hide.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "../node_modules/baseui/esm/icon/icon.js");
/* harmony import */ var _omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omit-dollar-prefixed-keys.js */ "../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js");
/* harmony import */ var _styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme-provider.js */ "../node_modules/baseui/esm/styles/theme-provider.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md




function Hide(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
    return theme.icons && theme.icons.Hide ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](theme.icons.Hide, _extends({
      title: "Hide",
      viewBox: "0 0 20 20"
    }, Object(_omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(props))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      title: "Hide",
      viewBox: "0 0 20 20"
    }, props), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
    }));
  });
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/icon.js":
/*!***********************************************!*\
  !*** ../node_modules/baseui/esm/icon/icon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/icon/styled-components.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



function Icon(props) {
  var children = props.children,
      title = props.title,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      size = props.size,
      color = props.color,
      restProps = _objectWithoutProperties(props, ["children", "title", "overrides", "size", "color"]);

  var sharedProps = {
    $size: size,
    $color: color
  };

  var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.Svg, _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Svg"]),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Svg = _getOverrides2[0],
      overrideProps = _getOverrides2[1];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Svg, _extends({
    "data-baseweb": "icon"
  }, restProps, sharedProps, overrideProps), title ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title) : null, children);
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js":
/*!********************************************************************!*\
  !*** ../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omitDollarPrefixedKeys; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// eslint-disable-next-line flowtype/no-weak-types
function omitDollarPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== '$') {
      result[key] = source[key];
    }
  }

  return result;
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/show.js":
/*!***********************************************!*\
  !*** ../node_modules/baseui/esm/icon/show.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Show; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "../node_modules/baseui/esm/icon/icon.js");
/* harmony import */ var _omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omit-dollar-prefixed-keys.js */ "../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js");
/* harmony import */ var _styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme-provider.js */ "../node_modules/baseui/esm/styles/theme-provider.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md




function Show(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
    return theme.icons && theme.icons.Show ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](theme.icons.Show, _extends({
      title: "Show",
      viewBox: "0 0 20 20"
    }, Object(_omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(props))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      title: "Show",
      viewBox: "0 0 20 20"
    }, props), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
    }));
  });
}

/***/ }),

/***/ "../node_modules/baseui/esm/icon/styled-components.js":
/*!************************************************************!*\
  !*** ../node_modules/baseui/esm/icon/styled-components.js ***!
  \************************************************************/
/*! exports provided: getSvgStyles, Svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgStyles", function() { return getSvgStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.js */ "../node_modules/baseui/esm/styles/index.js");
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

function getSvgStyles(_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $color = _ref.$color;

  if ($size) {
    if ($theme.sizing[$size]) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = "".concat($size, "px");
    }
  } else {
    $size = $theme.sizing.scale600;
  }

  if ($color && $theme.colors[$color]) {
    $color = $theme.colors[$color];
  }

  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size
  };
}
var Svg = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('svg', getSvgStyles);
Svg.displayName = "Svg";

/***/ }),

/***/ "../node_modules/baseui/esm/input/base-input.js":
/*!******************************************************!*\
  !*** ../node_modules/baseui/esm/input/base-input.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/input/constants.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/input/styled-components.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "../node_modules/baseui/esm/input/utils.js");
/* harmony import */ var _button_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/index.js */ "../node_modules/baseui/esm/button/index.js");
/* harmony import */ var _icon_hide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/hide.js */ "../node_modules/baseui/esm/icon/hide.js");
/* harmony import */ var _icon_show_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/show.js */ "../node_modules/baseui/esm/icon/show.js");
/* harmony import */ var _utils_create_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/create-event.js */ "../node_modules/baseui/esm/utils/create-event.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window */










var NullComponent = function NullComponent() {
  return null;
};

var BaseInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseInput, _React$Component);

  function BaseInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "inputRef", _this.props.inputRef || react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: _this.props.autoFocus || false,
      isMasked: _this.props.type === 'password',
      initialType: _this.props.type
    });

    _defineProperty(_assertThisInitialized(_this), "onInputKeyDown", function (e) {
      if (_this.props.clearable && e.key === 'Escape' && _this.inputRef.current) {
        _this.clearValue(); // prevent event from closing modal or doing something unexpected


        e.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClearIconClick", function () {
      if (_this.inputRef.current) _this.clearValue(); // return focus to the input after click

      if (_this.inputRef.current) _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur(e);
    });

    return _this;
  }

  _createClass(BaseInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          clearable = _this$props.clearable;

      if (this.inputRef.current) {
        if (autoFocus) {
          this.inputRef.current.focus();
        }

        if (clearable) {
          this.inputRef.current.addEventListener('keydown', this.onInputKeyDown);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearable = this.props.clearable;

      if (clearable && this.inputRef.current) {
        this.inputRef.current.removeEventListener('keydown', this.onInputKeyDown);
      }
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      // trigger a fake input change event (as if all text was deleted)
      var input = this.inputRef.current;

      if (input) {
        var nativeInputValue = Object.getOwnPropertyDescriptor(this.props.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_INPUT_TYPE"].textarea ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, 'value');

        if (nativeInputValue) {
          var nativeInputValueSetter = nativeInputValue.set;

          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(input, '');
            var event = Object(_utils_create_event_js__WEBPACK_IMPORTED_MODULE_8__["default"])('input');
            input.dispatchEvent(event);
          }
        }
      }
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      // If the type prop is equal to "password" we allow the user to toggle between
      // masked and non masked text. Internally, we toggle between type "password"
      // and "text".
      if (this.props.type === 'password') {
        return this.state.isMasked ? 'password' : 'text';
      } else {
        return this.props.type;
      }
    }
  }, {
    key: "renderMaskToggle",
    value: function renderMaskToggle() {
      var _SIZE$mini$SIZE$compa,
          _this2 = this;

      if (this.props.type !== 'password') return null;

      var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(this.props.overrides.MaskToggleButton, _button_index_js__WEBPACK_IMPORTED_MODULE_5__["Button"]),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          MaskToggleButton = _getOverrides2[0],
          maskToggleButtonProps = _getOverrides2[1];

      var baseButtonOverrides = {
        BaseButton: {
          style: function style(_ref) {
            var $theme = _ref.$theme;
            return {
              color: $theme.colors.contentPrimary
            };
          }
        }
      }; // $FlowFixMe

      maskToggleButtonProps.overrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["mergeOverrides"])(baseButtonOverrides, // $FlowFixMe
      maskToggleButtonProps.overrides);

      var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(this.props.overrides.MaskToggleShowIcon, _icon_show_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          MaskToggleShowIcon = _getOverrides4[0],
          maskToggleIconShowProps = _getOverrides4[1];

      var _getOverrides5 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(this.props.overrides.MaskToggleHideIcon, _icon_hide_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          MaskToggleHideIcon = _getOverrides6[0],
          maskToggleIconHideProps = _getOverrides6[1];

      var label = this.state.isMasked ? 'Show password text' : 'Hide password text';
      var iconSize = (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_2__["SIZE"].mini, '12px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_2__["SIZE"].compact, '16px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_2__["SIZE"].default, '20px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_2__["SIZE"].large, '24px'), _SIZE$mini$SIZE$compa)[this.props.size];
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MaskToggleButton, _extends({
        "aria-label": label,
        kind: _button_index_js__WEBPACK_IMPORTED_MODULE_5__["KIND"].minimal,
        onClick: function onClick() {
          return _this2.setState({
            isMasked: !_this2.state.isMasked
          });
        },
        title: label,
        type: "button",
        size: this.props.size
      }, maskToggleButtonProps), this.state.isMasked ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MaskToggleShowIcon, _extends({
        size: iconSize,
        title: label
      }, maskToggleIconShowProps)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MaskToggleHideIcon, _extends({
        size: iconSize,
        title: label
      }, maskToggleIconHideProps)));
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var _this$props2 = this.props,
          clearable = _this$props2.clearable,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override;

      if (!clearable || !value || !value.length || disabled) {
        return null;
      }

      var _getOverrides7 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.ClearIconContainer, _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["StyledClearIconContainer"]),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          ClearIconContainer = _getOverrides8[0],
          clearIconContainerProps = _getOverrides8[1];

      var _getOverrides9 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.ClearIcon, _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["StyledClearIcon"]),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          ClearIcon = _getOverrides10[0],
          clearIconProps = _getOverrides10[1];

      var ariaLabel = 'Clear value';
      var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["getSharedProps"])(this.props, this.state);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClearIconContainer, _extends({
        $alignTop: this.props.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_INPUT_TYPE"].textarea
      }, sharedProps, clearIconContainerProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClearIcon, _extends({
        size: 16,
        title: ariaLabel,
        "aria-label": ariaLabel,
        onClick: this.onClearIconClick,
        role: "button"
      }, sharedProps, clearIconProps)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          type = _this$props3.type,
          _this$props3$override = _this$props3.overrides,
          InputContainerOverride = _this$props3$override.InputContainer,
          InputOverride = _this$props3$override.Input,
          BeforeOverride = _this$props3$override.Before,
          AfterOverride = _this$props3$override.After; // more here https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#Preventing_autofilling_with_autocompletenew-password

      var autoComplete = this.state.initialType === 'password' && this.props.autoComplete === BaseInput.defaultProps.autoComplete ? 'new-password' : this.props.autoComplete;
      var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["getSharedProps"])(this.props, this.state);

      var _getOverrides11 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(InputContainerOverride, _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["InputContainer"]),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          InputContainer = _getOverrides12[0],
          inputContainerProps = _getOverrides12[1];

      var _getOverrides13 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(InputOverride, _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["Input"]),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          Input = _getOverrides14[0],
          inputProps = _getOverrides14[1];

      var _getOverrides15 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(BeforeOverride, NullComponent),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          Before = _getOverrides16[0],
          beforeProps = _getOverrides16[1];

      var _getOverrides17 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(AfterOverride, NullComponent),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          After = _getOverrides18[0],
          afterProps = _getOverrides18[1];

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputContainer, _extends({
        "data-baseweb": this.props['data-baseweb'] || 'base-input'
      }, sharedProps, inputContainerProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Before, _extends({}, sharedProps, beforeProps)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Input, _extends({
        ref: this.inputRef,
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-describedby": this.props['aria-describedby'],
        "aria-invalid": this.props.error,
        "aria-required": this.props.required,
        autoComplete: autoComplete,
        disabled: this.props.disabled,
        id: this.props.id,
        inputMode: this.props.inputMode,
        name: this.props.name,
        onBlur: this.onBlur,
        onChange: this.props.onChange,
        onFocus: this.onFocus,
        onKeyDown: this.props.onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        pattern: this.props.pattern,
        placeholder: this.props.placeholder,
        type: this.getInputType(),
        required: this.props.required,
        value: this.props.value,
        min: this.props.min,
        max: this.props.max,
        rows: this.props.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_INPUT_TYPE"].textarea ? this.props.rows : null
      }, sharedProps, inputProps), type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_INPUT_TYPE"].textarea ? value : null), this.renderClear(), this.renderMaskToggle(), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](After, _extends({}, sharedProps, afterProps)));
    }
  }]);

  return BaseInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BaseInput, "defaultProps", {
  'aria-label': null,
  'aria-labelledby': null,
  'aria-describedby': null,
  adjoined: _constants_js__WEBPACK_IMPORTED_MODULE_2__["ADJOINED"].none,
  autoComplete: 'on',
  autoFocus: false,
  disabled: false,
  error: false,
  positive: false,
  name: '',
  inputMode: 'text',
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onFocus: function onFocus() {},
  onClear: function onClear() {},
  clearable: false,
  overrides: {},
  pattern: null,
  placeholder: '',
  required: false,
  size: _constants_js__WEBPACK_IMPORTED_MODULE_2__["SIZE"].default,
  type: 'text'
});

/* harmony default export */ __webpack_exports__["default"] = (BaseInput);

/***/ }),

/***/ "../node_modules/baseui/esm/input/constants.js":
/*!*****************************************************!*\
  !*** ../node_modules/baseui/esm/input/constants.js ***!
  \*****************************************************/
/*! exports provided: STATE_CHANGE_TYPE, CUSTOM_INPUT_TYPE, ADJOINED, SIZE, ENHANCER_POSITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_CHANGE_TYPE", function() { return STATE_CHANGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_TYPE", function() { return CUSTOM_INPUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJOINED", function() { return ADJOINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENHANCER_POSITION", function() { return ENHANCER_POSITION; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var STATE_CHANGE_TYPE = {
  change: 'change'
};
var CUSTOM_INPUT_TYPE = {
  textarea: 'textarea'
};
var ADJOINED = {
  none: 'none',
  left: 'left',
  right: 'right',
  both: 'both'
};
var SIZE = {
  mini: 'mini',
  default: 'default',
  compact: 'compact',
  large: 'large'
};
var ENHANCER_POSITION = {
  start: 'start',
  end: 'end'
};

/***/ }),

/***/ "../node_modules/baseui/esm/input/index.js":
/*!*************************************************!*\
  !*** ../node_modules/baseui/esm/input/index.js ***!
  \*************************************************/
/*! exports provided: StatefulInput, StatefulContainer, Input, BaseInput, MaskedInput, StyledRoot, StyledInputEnhancer, StyledStartEnhancer, StyledEndEnhancer, StyledInputContainer, StyledInput, STATE_CHANGE_TYPE, ADJOINED, SIZE, CUSTOM_INPUT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateful_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateful-input.js */ "../node_modules/baseui/esm/input/stateful-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatefulInput", function() { return _stateful_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _stateful_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateful-container.js */ "../node_modules/baseui/esm/input/stateful-container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatefulContainer", function() { return _stateful_container_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "../node_modules/baseui/esm/input/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _base_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-input.js */ "../node_modules/baseui/esm/input/base-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseInput", function() { return _base_input_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _masked_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked-input.js */ "../node_modules/baseui/esm/input/masked-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedInput", function() { return _masked_input_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/input/styled-components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledRoot", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["Root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledInputEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["InputEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledStartEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["InputEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledEndEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["InputEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledInputContainer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["InputContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_5__["Input"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/input/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_CHANGE_TYPE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_6__["STATE_CHANGE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADJOINED", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_6__["ADJOINED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_6__["SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_TYPE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_INPUT_TYPE"]; });

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




 // Styled elements




/***/ }),

/***/ "../node_modules/baseui/esm/input/input.js":
/*!*************************************************!*\
  !*** ../node_modules/baseui/esm/input/input.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../node_modules/baseui/esm/input/utils.js");
/* harmony import */ var _base_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-input.js */ "../node_modules/baseui/esm/input/base-input.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/input/styled-components.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/input/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/







var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: _this.props.autoFocus || false
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur(e);
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          startEnhancer = _this$props.startEnhancer,
          endEnhancer = _this$props.endEnhancer,
          _this$props$overrides = _this$props.overrides,
          RootOverride = _this$props$overrides.Root,
          StartEnhancerOverride = _this$props$overrides.StartEnhancer,
          EndEnhancerOverride = _this$props$overrides.EndEnhancer,
          restOverrides = _objectWithoutProperties(_this$props$overrides, ["Root", "StartEnhancer", "EndEnhancer"]),
          restProps = _objectWithoutProperties(_this$props, ["startEnhancer", "endEnhancer", "overrides"]);

      var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(RootOverride, _styled_components_js__WEBPACK_IMPORTED_MODULE_4__["Root"]),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(StartEnhancerOverride, _styled_components_js__WEBPACK_IMPORTED_MODULE_4__["InputEnhancer"]),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          StartEnhancer = _getOverrides4[0],
          startEnhancerProps = _getOverrides4[1];

      var _getOverrides5 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(EndEnhancerOverride, _styled_components_js__WEBPACK_IMPORTED_MODULE_4__["InputEnhancer"]),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          EndEnhancer = _getOverrides6[0],
          endEnhancerProps = _getOverrides6[1];

      var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getSharedProps"])(this.props, this.state);

      if (true) {
        if (this.props.error && this.props.positive) {
          // eslint-disable-next-line no-console
          console.warn("[Input] `error` and `positive` are both set to `true`. `error` will take precedence but this may not be what you want.");
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, _extends({
        "data-baseweb": "input"
      }, sharedProps, rootProps), startEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StartEnhancer, _extends({}, sharedProps, startEnhancerProps, {
        $position: _constants_js__WEBPACK_IMPORTED_MODULE_5__["ENHANCER_POSITION"].start
      }), typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_base_input_js__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, restProps, {
        overrides: restOverrides,
        adjoined: getAdjoinedProp(startEnhancer, endEnhancer),
        onFocus: this.onFocus,
        onBlur: this.onBlur
      })), endEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EndEnhancer, _extends({}, sharedProps, endEnhancerProps, {
        $position: _constants_js__WEBPACK_IMPORTED_MODULE_5__["ENHANCER_POSITION"].end
      }), typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Input, "defaultProps", {
  autoComplete: 'on',
  autoFocus: false,
  disabled: false,
  name: '',
  error: false,
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  overrides: {},
  required: false,
  size: _constants_js__WEBPACK_IMPORTED_MODULE_5__["SIZE"].default,
  startEnhancer: null,
  endEnhancer: null
});

function getAdjoinedProp(startEnhancer, endEnhancer) {
  if (startEnhancer && endEnhancer) {
    return _constants_js__WEBPACK_IMPORTED_MODULE_5__["ADJOINED"].both;
  } else if (startEnhancer) {
    return _constants_js__WEBPACK_IMPORTED_MODULE_5__["ADJOINED"].left;
  } else if (endEnhancer) {
    return _constants_js__WEBPACK_IMPORTED_MODULE_5__["ADJOINED"].right;
  }

  return _constants_js__WEBPACK_IMPORTED_MODULE_5__["ADJOINED"].none;
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../node_modules/baseui/esm/input/masked-input.js":
/*!********************************************************!*\
  !*** ../node_modules/baseui/esm/input/masked-input.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-input-mask */ "../node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "../node_modules/baseui/esm/input/input.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/input/styled-components.js");
function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




var MaskOverride = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (_ref, ref) {
  var startEnhancer = _ref.startEnhancer,
      endEnhancer = _ref.endEnhancer,
      error = _ref.error,
      positive = _ref.positive,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      value = _ref.value,
      disabled = _ref.disabled,
      restProps = _objectWithoutProperties(_ref, ["startEnhancer", "endEnhancer", "error", "positive", "onChange", "onFocus", "onBlur", "value", "disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_input_mask__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    value: value,
    disabled: disabled
  }, restProps), function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled_components_js__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
      ref: ref,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      value: value,
      disabled: disabled
    }, props));
  });
});
function MaskedInput(_ref2) {
  var mask = _ref2.mask,
      maskChar = _ref2.maskChar,
      _ref2$overrides = _ref2.overrides;
  _ref2$overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides;

  var _ref2$overrides$Input = _ref2$overrides.Input,
      inputOverride = _ref2$overrides$Input === void 0 ? {} : _ref2$overrides$Input,
      restOverrides = _objectWithoutProperties(_ref2$overrides, ["Input"]),
      restProps = _objectWithoutProperties(_ref2, ["mask", "maskChar", "overrides"]);

  var componentOverride = MaskOverride;
  var propsOverride = {};
  var styleOverride = {};

  if (typeof inputOverride === 'function') {
    componentOverride = inputOverride;
  } else if (_typeof(inputOverride) === 'object') {
    componentOverride = inputOverride.component || componentOverride;
    propsOverride = inputOverride.props || {};
    styleOverride = inputOverride.style || {};
  }

  var nextOverrides = _objectSpread2({
    Input: {
      component: componentOverride,
      props: _objectSpread2({
        mask: mask,
        maskChar: maskChar
      }, propsOverride),
      style: styleOverride
    }
  }, restOverrides);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_input_js__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, restProps, {
    overrides: nextOverrides
  }));
}
MaskedInput.defaultProps = {
  maskChar: ' '
};

/***/ }),

/***/ "../node_modules/baseui/esm/input/stateful-container.js":
/*!**************************************************************!*\
  !*** ../node_modules/baseui/esm/input/stateful-container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/input/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



var defaultStateReducer = function defaultStateReducer(type, nextState) {
  return nextState;
};

var StatefulContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatefulContainer, _React$Component);

  function StatefulContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StatefulContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StatefulContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread2({
      value: ''
    }, _this.props.initialState));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var nextState = {
        value: e.target.value
      };

      _this.internalSetState(_constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_CHANGE_TYPE"].change, nextState);

      _this.props.onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "internalSetState", function (type, nextState) {
      var newState = _this.props.stateReducer(type, nextState, _this.state);

      _this.setState(newState);
    });

    return _this;
  }

  _createClass(StatefulContainer, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          children = _this$props.children,
          initialState = _this$props.initialState,
          stateReducer = _this$props.stateReducer,
          restProps = _objectWithoutProperties(_this$props, ["children", "initialState", "stateReducer"]);

      var onChange = this.onChange;
      return children(_objectSpread2({}, restProps, {}, this.state, {
        onChange: onChange
      }));
    }
  }]);

  return StatefulContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(StatefulContainer, "defaultProps", {
  initialState: {},
  stateReducer: defaultStateReducer,
  onChange: function onChange() {},
  onClear: function onClear() {}
});

/* harmony default export */ __webpack_exports__["default"] = (StatefulContainer);

/***/ }),

/***/ "../node_modules/baseui/esm/input/stateful-input.js":
/*!**********************************************************!*\
  !*** ../node_modules/baseui/esm/input/stateful-input.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatefulInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stateful_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateful-container.js */ "../node_modules/baseui/esm/input/stateful-container.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "../node_modules/baseui/esm/input/input.js");
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



function StatefulInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_stateful_container_js__WEBPACK_IMPORTED_MODULE_1__["default"], props, function (childrenProps) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_input_js__WEBPACK_IMPORTED_MODULE_2__["default"], childrenProps);
  });
}

/***/ }),

/***/ "../node_modules/baseui/esm/input/styled-components.js":
/*!*************************************************************!*\
  !*** ../node_modules/baseui/esm/input/styled-components.js ***!
  \*************************************************************/
/*! exports provided: StyledClearIconContainer, StyledClearIcon, Root, InputEnhancer, getInputContainerStyles, InputContainer, getInputStyles, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledClearIconContainer", function() { return StyledClearIconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledClearIcon", function() { return StyledClearIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEnhancer", function() { return InputEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputContainerStyles", function() { return getInputContainerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputStyles", function() { return getInputStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.js */ "../node_modules/baseui/esm/styles/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/input/constants.js");
/* harmony import */ var _icon_delete_alt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/delete-alt.js */ "../node_modules/baseui/esm/icon/delete-alt.js");
function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



var StyledClearIconContainer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref) {
  var _ref2;

  var _ref$$alignTop = _ref.$alignTop,
      $alignTop = _ref$$alignTop === void 0 ? false : _ref$$alignTop,
      $theme = _ref.$theme;
  return _ref2 = {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center'
  }, _defineProperty(_ref2, $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight', $theme.sizing.scale500), _defineProperty(_ref2, "paddingTop", $alignTop ? $theme.sizing.scale500 : '0px'), _defineProperty(_ref2, "color", $theme.colors.contentPrimary), _ref2;
});
StyledClearIconContainer.displayName = "StyledClearIconContainer";
var StyledClearIcon = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])(_icon_delete_alt_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  cursor: 'pointer'
});
StyledClearIcon.displayName = "StyledClearIcon";

function getInputPadding(size, sizing) {
  var _SIZE$mini$SIZE$compa;

  return (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].mini, {
    paddingTop: sizing.scale100,
    paddingBottom: sizing.scale100,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200
  }), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact, {
    paddingTop: sizing.scale200,
    paddingBottom: sizing.scale200,
    paddingLeft: sizing.scale400,
    paddingRight: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].default, {
    paddingTop: sizing.scale400,
    paddingBottom: sizing.scale400,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _defineProperty(_SIZE$mini$SIZE$compa, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large, {
    paddingTop: sizing.scale550,
    paddingBottom: sizing.scale550,
    paddingLeft: sizing.scale650,
    paddingRight: sizing.scale650
  }), _SIZE$mini$SIZE$compa)[size];
}

function getFont(size, typography) {
  var _SIZE$mini$SIZE$compa2;

  return (_SIZE$mini$SIZE$compa2 = {}, _defineProperty(_SIZE$mini$SIZE$compa2, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].mini, typography.font100), _defineProperty(_SIZE$mini$SIZE$compa2, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact, typography.font200), _defineProperty(_SIZE$mini$SIZE$compa2, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].default, typography.font300), _defineProperty(_SIZE$mini$SIZE$compa2, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large, typography.font400), _SIZE$mini$SIZE$compa2)[size];
}

var Root = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  var $size = props.$size,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      typography = _props$$theme.typography;
  return _objectSpread2({}, getFont($size, typography), {
    color: colors.contentPrimary,
    display: 'flex',
    width: '100%'
  });
}); // InputEnhancer

Root.displayName = "Root";

function getInputEnhancerBorderRadius(position, radius) {
  var _ENHANCER_POSITION$st;

  return (_ENHANCER_POSITION$st = {}, _defineProperty(_ENHANCER_POSITION$st, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ENHANCER_POSITION"].start, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _defineProperty(_ENHANCER_POSITION$st, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ENHANCER_POSITION"].end, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _ENHANCER_POSITION$st)[position];
}

function getInputEnhancerPadding($size, sizing) {
  var _SIZE$mini$SIZE$compa3;

  return (_SIZE$mini$SIZE$compa3 = {}, _defineProperty(_SIZE$mini$SIZE$compa3, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].mini, {
    paddingRight: sizing.scale200,
    paddingLeft: sizing.scale200
  }), _defineProperty(_SIZE$mini$SIZE$compa3, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact, {
    paddingRight: sizing.scale400,
    paddingLeft: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa3, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].default, {
    paddingRight: sizing.scale600,
    paddingLeft: sizing.scale600
  }), _defineProperty(_SIZE$mini$SIZE$compa3, _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large, {
    paddingRight: sizing.scale650,
    paddingLeft: sizing.scale650
  }), _SIZE$mini$SIZE$compa3)[$size];
}

function getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputEnhancerFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentInversePrimary,
      backgroundColor: colors.borderFocus
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderPositive
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputEnhancerFill
  };
}

var InputEnhancer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  var $position = props.$position,
      $size = props.$size,
      $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $positive = props.$positive,
      _props$$theme2 = props.$theme,
      borders = _props$$theme2.borders,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing,
      typography = _props$$theme2.typography,
      animation = _props$$theme2.animation;
  return _objectSpread2({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve
  }, getInputEnhancerBorderRadius($position, borders.inputBorderRadius), {}, getFont($size, typography), {}, getInputEnhancerPadding($size, sizing), {}, getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors));
}); // InputContainer

InputEnhancer.displayName = "InputEnhancer";

function getInputContainerBorderRadius(adjoined, radius) {
  var _ADJOINED$none$ADJOIN;

  return (_ADJOINED$none$ADJOIN = {}, _defineProperty(_ADJOINED$none$ADJOIN, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ADJOINED"].none, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ADJOINED"].left, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ADJOINED"].right, {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _defineProperty(_ADJOINED$none$ADJOIN, _constants_js__WEBPACK_IMPORTED_MODULE_1__["ADJOINED"].both, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }), _ADJOINED$none$ADJOIN)[adjoined];
}

function getInputContainerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    borderColor: colors.inputFill,
    backgroundColor: colors.inputFill
  };
}

var getInputContainerStyles = function getInputContainerStyles(props) {
  var $isFocused = props.$isFocused,
      $adjoined = props.$adjoined,
      $error = props.$error,
      $disabled = props.$disabled,
      $positive = props.$positive,
      $size = props.$size,
      _props$$theme3 = props.$theme,
      borders = _props$$theme3.borders,
      colors = _props$$theme3.colors,
      typography = _props$$theme3.typography,
      animation = _props$$theme3.animation;
  return _objectSpread2({
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    transitionProperty: 'border, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve
  }, getInputContainerBorderRadius($adjoined, borders.inputBorderRadius), {}, getFont($size, typography), {}, getInputContainerColors($disabled, $isFocused, $error, $positive, colors));
};
var InputContainer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', getInputContainerStyles);
InputContainer.displayName = "InputContainer";

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.contentSecondary,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputTextDisabled
      }
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.contentSecondary
    }
  };
}

var getInputStyles = function getInputStyles(props) {
  var $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $size = props.$size,
      _props$$theme4 = props.$theme,
      colors = _props$$theme4.colors,
      sizing = _props$$theme4.sizing,
      typography = _props$$theme4.typography;
  return _objectSpread2({
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0'
  }, getFont($size, typography), {}, getInputPadding($size, sizing), {}, getInputColors($disabled, $isFocused, $error, colors));
};
var Input = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('input', getInputStyles);
Input.displayName = "Input";

/***/ }),

/***/ "../node_modules/baseui/esm/input/utils.js":
/*!*************************************************!*\
  !*** ../node_modules/baseui/esm/input/utils.js ***!
  \*************************************************/
/*! exports provided: getSharedProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedProps", function() { return getSharedProps; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function getSharedProps(props, state) {
  var disabled = props.disabled,
      error = props.error,
      positive = props.positive,
      adjoined = props.adjoined,
      size = props.size,
      required = props.required;
  var isFocused = state.isFocused;
  return {
    $isFocused: isFocused,
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $adjoined: adjoined,
    $size: size,
    $required: required
  };
}

/***/ }),

/***/ "../node_modules/baseui/esm/tag/constants.js":
/*!***************************************************!*\
  !*** ../node_modules/baseui/esm/tag/constants.js ***!
  \***************************************************/
/*! exports provided: VARIANT, KIND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARIANT", function() { return VARIANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return KIND; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var VARIANT = Object.freeze({
  solid: 'solid',
  light: 'light',
  outlined: 'outlined'
});
var KIND = {
  neutral: 'neutral',
  primary: 'primary',
  accent: 'accent',
  positive: 'positive',
  warning: 'warning',
  negative: 'negative',
  custom: 'custom'
};

/***/ }),

/***/ "../node_modules/baseui/esm/tag/index.js":
/*!***********************************************!*\
  !*** ../node_modules/baseui/esm/tag/index.js ***!
  \***********************************************/
/*! exports provided: Tag, StyledRoot, StyledAction, StyledActionIcon, StyledText, KIND, VARIANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.js */ "../node_modules/baseui/esm/tag/tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/tag/styled-components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledRoot", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["Root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledAction", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["Action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledActionIcon", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["ActionIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledText", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["Text"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/tag/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VARIANT", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["VARIANT"]; });

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
 // Styled elements




/***/ }),

/***/ "../node_modules/baseui/esm/tag/styled-components.js":
/*!***********************************************************!*\
  !*** ../node_modules/baseui/esm/tag/styled-components.js ***!
  \***********************************************************/
/*! exports provided: customOnRamp, Action, ActionIcon, Text, Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customOnRamp", function() { return customOnRamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionIcon", function() { return ActionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony import */ var polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished/lib/color/darken.js */ "../node_modules/polished/lib/color/darken.js");
/* harmony import */ var polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished/lib/color/lighten.js */ "../node_modules/polished/lib/color/lighten.js");
/* harmony import */ var polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.js */ "../node_modules/baseui/esm/styles/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/tag/constants.js");
function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




function customOnRamp(color, unit) {
  switch (unit) {
    case '50':
      return polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1___default()(0.4, color);

    case '100':
      return polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1___default()(0.32, color);

    case '200':
      return polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1___default()(0.2, color);

    case '300':
      return polished_lib_color_lighten_js__WEBPACK_IMPORTED_MODULE_1___default()(0.12, color);

    case '500':
      return polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0___default()(0.24, color);

    case '600':
      return polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0___default()(0.3, color);

    case '700':
      return polished_lib_color_darken_js__WEBPACK_IMPORTED_MODULE_0___default()(0.4, color);

    case '400':
    default:
      return color;
  }
}

function fontColor(props, isHovered, isActionText) {
  if (props.$disabled) {
    switch (props.$kind) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
        return props.$theme.colors.tagNeutralFontDisabled;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
        return props.$theme.colors.tagAccentFontDisabled;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
        return props.$theme.colors.tagPositiveFontDisabled;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
        return props.$theme.colors.tagWarningFontDisabled;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
        return props.$theme.colors.tagNegativeFontDisabled;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
        return customOnRamp(props.$color, props.$theme.colors.tagFontDisabledRampUnit);

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
      default:
        return props.$theme.colors.tagPrimaryFontDisabled;
    }
  }

  switch (props.$variant) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].solid:
      switch (props.$kind) {
        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
          if (!isHovered) return props.$theme.colors.tagNeutralSolidFont;
          return props.$theme.colors.tagNeutralSolidFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
          if (!isHovered) return props.$theme.colors.tagAccentSolidFont;
          return props.$theme.colors.tagAccentSolidFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
          if (!isHovered) return props.$theme.colors.tagPositiveSolidFont;
          return props.$theme.colors.tagPositiveSolidFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
          if (!isHovered) return props.$theme.colors.tagWarningSolidFont;
          return props.$theme.colors.tagWarningSolidFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
          if (!isHovered) return props.$theme.colors.tagNegativeSolidFont;
          return props.$theme.colors.tagNegativeSolidFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
          if (!isHovered) return customOnRamp(props.$color, props.$theme.colors.tagSolidFontRampUnit);
          return customOnRamp(props.$color, props.$theme.colors.tagSolidFontHoverRampUnit);

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
        default:
          if (!isHovered) return props.$theme.colors.tagPrimarySolidFont;
          return props.$theme.colors.tagPrimarySolidFontHover;
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined:
      switch (props.$kind) {
        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagNeutralOutlinedFont;
          }

          return props.$theme.colors.tagNeutralOutlinedFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagAccentOutlinedFont;
          }

          return props.$theme.colors.tagAccentOutlinedFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagPositiveOutlinedFont;
          }

          return props.$theme.colors.tagPositiveOutlinedFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagWarningOutlinedFont;
          }

          return props.$theme.colors.tagWarningOutlinedFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagNegativeOutlinedFont;
          }

          return props.$theme.colors.tagNegativeOutlinedFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
          if (!isHovered || !isActionText) {
            return customOnRamp(props.$color, props.$theme.colors.tagOutlinedFontRampUnit);
          }

          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedFontHoverRampUnit);

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
        default:
          if (!isHovered || !isActionText) {
            return props.$theme.colors.tagPrimaryOutlinedFont;
          }

          return props.$theme.colors.tagPrimaryOutlinedFontHover;
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].light:
    default:
      switch (props.$kind) {
        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
          if (!isHovered) return props.$theme.colors.tagNeutralLightFont;
          return props.$theme.colors.tagNeutralLightFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
          if (!isHovered) return props.$theme.colors.tagAccentLightFont;
          return props.$theme.colors.tagAccentLightFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
          if (!isHovered) return props.$theme.colors.tagPositiveLightFont;
          return props.$theme.colors.tagPositiveLightFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
          if (!isHovered) return props.$theme.colors.tagWarningLightFont;
          return props.$theme.colors.tagWarningLightFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
          if (!isHovered) return props.$theme.colors.tagNegativeLightFont;
          return props.$theme.colors.tagNegativeLightFontHover;

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
          if (!isHovered) return customOnRamp(props.$color, props.$theme.colors.tagLightFontRampUnit);
          return customOnRamp(props.$color, props.$theme.colors.tagLightFontHoverRampUnit);

        case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
        default:
          if (!isHovered) return props.$theme.colors.tagPrimaryLightFont;
          return props.$theme.colors.tagPrimaryLightFontHover;
      }

  }
} // $FlowFixMe https://github.com/facebook/flow/issues/7745


var Action = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', function (props) {
  var _ref;

  var $disabled = props.$disabled,
      $variant = props.$variant,
      $theme = props.$theme;

  function backgroundColor(isHovered, isActive) {
    if (props.$disabled || !isHovered) return 'transparent';

    switch (props.$variant) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].solid:
        switch (props.$kind) {
          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
            return props.$theme.colors.tagNeutralSolidActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
            return props.$theme.colors.tagAccentSolidActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
            return props.$theme.colors.tagPositiveSolidActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
            return props.$theme.colors.tagWarningSolidActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
            return props.$theme.colors.tagNegativeSolidActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
            return customOnRamp(props.$color, props.$theme.colors.tagSolidActiveRampUnit);

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
          default:
            return props.$theme.colors.tagPrimarySolidActive;
        }

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined:
        switch (props.$kind) {
          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
            if (!isActive) return props.$theme.colors.tagNeutralOutlinedHover;
            return props.$theme.colors.tagNeutralOutlinedActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
            if (!isActive) return props.$theme.colors.tagAccentOutlinedHover;
            return props.$theme.colors.tagAccentOutlinedActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
            if (!isActive) return props.$theme.colors.tagPositiveOutlinedHover;
            return props.$theme.colors.tagPositiveOutlinedActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
            if (!isActive) return props.$theme.colors.tagWarningOutlinedHover;
            return props.$theme.colors.tagWarningOutlinedActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
            if (!isActive) return props.$theme.colors.tagNegativeOutlinedHover;
            return props.$theme.colors.tagNegativeOutlinedActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
            if (!isActive) return customOnRamp(props.$color, props.$theme.colors.tagOutlinedHoverRampUnit);
            return customOnRamp(props.$color, props.$theme.colors.tagOutlinedActiveRampUnit);

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
          default:
            if (!isActive) return props.$theme.colors.tagPrimaryOutlinedHover;
            return props.$theme.colors.tagPrimaryOutlinedActive;
        }

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].light:
      default:
        switch (props.$kind) {
          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
            return props.$theme.colors.tagNeutralLightActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
            return props.$theme.colors.tagAccentLightActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
            return props.$theme.colors.tagPositiveLightActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
            return props.$theme.colors.tagWarningLightActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
            return props.$theme.colors.tagNegativeLightActive;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
            return customOnRamp(props.$color, props.$theme.colors.tagLightActiveRampUnit);

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
          default:
            return props.$theme.colors.tagPrimaryLightActive;
        }

    }
  }

  return _ref = {
    alignItems: 'center'
  }, _defineProperty(_ref, $theme.direction === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius', $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, $theme.direction === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius', $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, "cursor", $disabled ? 'not-allowed' : 'pointer'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', '8px'), _defineProperty(_ref, "outline", 'none'), _defineProperty(_ref, "paddingTop", $variant === _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined ? '5px' : '7px'), _defineProperty(_ref, "paddingBottom", $variant === _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined ? '5px' : '7px'), _defineProperty(_ref, "paddingLeft", '8px'), _defineProperty(_ref, "paddingRight", '8px'), _defineProperty(_ref, "transitionProperty", 'all'), _defineProperty(_ref, "transitionDuration", $theme.animation.timing100), _defineProperty(_ref, "transitionTimingFunction", $theme.animation.easeOutCurve), _defineProperty(_ref, ':hover', {
    backgroundColor: backgroundColor(true, false),
    color: fontColor(props, true, true)
  }), _defineProperty(_ref, ':focus', {
    backgroundColor: backgroundColor(true, false),
    color: fontColor(props, true, true)
  }), _ref;
});
Action.displayName = "Action";
var ActionIcon = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["styled"])('svg', {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

ActionIcon.displayName = "ActionIcon";
var Text = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', function (props) {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: props.$theme.sizing.scale3200
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Text.displayName = "Text";
var Root = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', function (props) {
  var _objectSpread3;

  var $disabled = props.$disabled,
      $theme = props.$theme,
      $closeable = props.$closeable,
      $clickable = props.$clickable,
      $kind = props.$kind,
      $variant = props.$variant;
  var _$theme$sizing = $theme.sizing,
      scale0 = _$theme$sizing.scale0,
      scale800 = _$theme$sizing.scale800,
      scale500 = _$theme$sizing.scale500,
      font150 = $theme.typography.font150;

  function backgroundColor(isHovered, isActive) {
    if (props.$variant === _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined) {
      return 'transparent';
    }

    switch ($variant) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].solid:
        switch ($kind) {
          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
            if ($disabled) {
              return props.$theme.colors.tagNeutralSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNeutralSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNeutralSolidHover;
            }

            return props.$theme.colors.tagNeutralSolidBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
            if ($disabled) {
              return props.$theme.colors.tagAccentSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagAccentSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagAccentSolidHover;
            }

            return props.$theme.colors.tagAccentSolidBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
            if ($disabled) {
              return props.$theme.colors.tagPositiveSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPositiveSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPositiveSolidHover;
            }

            return props.$theme.colors.tagPositiveSolidBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
            if ($disabled) {
              return props.$theme.colors.tagWarningSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagWarningSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagWarningSolidHover;
            }

            return props.$theme.colors.tagWarningSolidBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
            if ($disabled) {
              return props.$theme.colors.tagNegativeSolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNegativeSolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNegativeSolidHover;
            }

            return props.$theme.colors.tagNegativeSolidBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
            if ($disabled) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidDisabledRampUnit);
            }

            if (isActive) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidActiveRampUnit);
            }

            if (isHovered) {
              return customOnRamp(props.$color, props.$theme.colors.tagSolidHoverRampUnit);
            }

            return customOnRamp(props.$color, props.$theme.colors.tagSolidRampUnit);

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
          default:
            if ($disabled) {
              return props.$theme.colors.tagPrimarySolidDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPrimarySolidActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPrimarySolidHover;
            }

            return props.$theme.colors.tagPrimarySolidBackground;
        }

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].light:
      default:
        switch ($kind) {
          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
            if ($disabled) {
              return props.$theme.colors.tagNeutralLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNeutralLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNeutralLightHover;
            }

            return props.$theme.colors.tagNeutralLightBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
            if ($disabled) {
              return props.$theme.colors.tagAccentLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagAccentLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagAccentLightHover;
            }

            return props.$theme.colors.tagAccentLightBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
            if ($disabled) {
              return props.$theme.colors.tagPositiveLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPositiveLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPositiveLightHover;
            }

            return props.$theme.colors.tagPositiveLightBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
            if ($disabled) {
              return props.$theme.colors.tagWarningLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagWarningLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagWarningLightHover;
            }

            return props.$theme.colors.tagWarningLightBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
            if ($disabled) {
              return props.$theme.colors.tagNegativeLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagNegativeLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagNegativeLightHover;
            }

            return props.$theme.colors.tagNegativeLightBackground;

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
            if ($disabled) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightRampUnit);
            }

            if (isActive) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightActiveRampUnit);
            }

            if (isHovered) {
              return customOnRamp(props.$color, props.$theme.colors.tagLightHoverRampUnit);
            }

            return customOnRamp(props.$color, props.$theme.colors.tagLightRampUnit);

          case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
          default:
            if ($disabled) {
              return props.$theme.colors.tagPrimaryLightDisabled;
            }

            if (isActive) {
              return props.$theme.colors.tagPrimaryLightActive;
            }

            if (isHovered) {
              return props.$theme.colors.tagPrimaryLightHover;
            }

            return props.$theme.colors.tagPrimaryLightBackground;
        }

    }
  }

  function borderColor(isHovered, isActive) {
    if (props.$variant !== _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined) {
      return null;
    }

    switch (props.$kind) {
      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].neutral:
        if ($disabled) {
          return props.$theme.colors.tagNeutralOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagNeutralOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagNeutralOutlinedHover;
        }

        return props.$theme.colors.tagNeutralOutlinedBackground;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].accent:
        if ($disabled) {
          return props.$theme.colors.tagAccentOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagAccentOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagAccentOutlinedHover;
        }

        return props.$theme.colors.tagAccentOutlinedBackground;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive:
        if ($disabled) {
          return props.$theme.colors.tagPositiveOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagPositiveOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagPositiveOutlinedHover;
        }

        return props.$theme.colors.tagPositiveOutlinedBackground;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning:
        if ($disabled) {
          return props.$theme.colors.tagWarningOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagWarningOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagWarningOutlinedHover;
        }

        return props.$theme.colors.tagWarningOutlinedBackground;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative:
        if ($disabled) {
          return props.$theme.colors.tagNegativeOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagNegativeOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagNegativeOutlinedHover;
        }

        return props.$theme.colors.tagNegativeOutlinedBackground;

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].custom:
        if ($disabled) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedRampUnit);
        }

        if (isActive) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedActiveRampUnit);
        }

        if (isHovered) {
          return customOnRamp(props.$color, props.$theme.colors.tagOutlinedHoverRampUnit);
        }

        return customOnRamp(props.$color, props.$theme.colors.tagOutlinedRampUnit);

      case _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary:
      default:
        if ($disabled) {
          return props.$theme.colors.tagPrimaryOutlinedDisabled;
        }

        if (isActive) {
          return props.$theme.colors.tagPrimaryOutlinedActive;
        }

        if (isHovered) {
          return props.$theme.colors.tagPrimaryOutlinedHover;
        }

        return props.$theme.colors.tagPrimaryOutlinedBackground;
    }
  }

  var borderRadius = $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0;
  return _objectSpread2({}, font150, (_objectSpread3 = {
    alignItems: 'center',
    backgroundColor: backgroundColor(false, false),
    borderColor: borderColor(false, false),
    borderStyle: 'solid',
    borderWidth: $variant === _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].outlined ? '2px' : 0,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    boxSizing: 'border-box',
    color: fontColor(props, false, false),
    cursor: $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default',
    display: 'inline-flex',
    height: scale800,
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    paddingTop: scale0,
    paddingBottom: scale0
  }, _defineProperty(_objectSpread3, $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft', scale500), _defineProperty(_objectSpread3, $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight', $closeable ? null : scale500), _defineProperty(_objectSpread3, "outline", 'none'), _defineProperty(_objectSpread3, ':hover', $disabled || !$clickable ? {} : {
    backgroundColor: backgroundColor(true, false),
    borderColor: borderColor(true, false),
    color: fontColor(props, true, false)
  }), _defineProperty(_objectSpread3, ':focus', $disabled || !$clickable ? {} : {
    backgroundColor: backgroundColor(true, true),
    borderColor: borderColor(true, true),
    color: fontColor(props, true, false)
  }), _objectSpread3));
});
Root.displayName = "Root";

/***/ }),

/***/ "../node_modules/baseui/esm/tag/tag.js":
/*!*********************************************!*\
  !*** ../node_modules/baseui/esm/tag/tag.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/overrides.js */ "../node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components.js */ "../node_modules/baseui/esm/tag/styled-components.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "../node_modules/baseui/esm/tag/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "../node_modules/baseui/esm/tag/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/






var Tag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.currentTarget !== event.target) {
        return;
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown;
      var key = event.key;

      if (onClick && key === 'Enter') {
        onClick(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionKeyDown", function (event) {
      var _this$props2 = _this.props,
          onActionClick = _this$props2.onActionClick,
          onActionKeyDown = _this$props2.onActionKeyDown;
      var key = event.key;

      if (onActionClick && key === 'Enter') {
        onActionClick(event);
      }

      if (onActionKeyDown) {
        onActionKeyDown(event);
      }
    });

    return _this;
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          closeable = _this$props3.closeable,
          color = _this$props3.color,
          disabled = _this$props3.disabled,
          isFocused = _this$props3.isFocused,
          isHovered = _this$props3.isHovered,
          kind = _this$props3.kind,
          title = _this$props3.title,
          onActionClick = _this$props3.onActionClick,
          onClick = _this$props3.onClick,
          _this$props3$override = _this$props3.overrides,
          overrides = _this$props3$override === void 0 ? {} : _this$props3$override,
          variant = _this$props3.variant;

      var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.Root, _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Root"]),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.Action, _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Action"]),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Action = _getOverrides4[0],
          actionProps = _getOverrides4[1];

      var _getOverrides5 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.ActionIcon, _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["ActionIcon"]),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          ActionIcon = _getOverrides6[0],
          actionIconProps = _getOverrides6[1];

      var _getOverrides7 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"])(overrides.Text, _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Text"]),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Text = _getOverrides8[0],
          textProps = _getOverrides8[1];

      var clickable = typeof onClick === 'function';
      var rootHandlers = disabled ? {} : {
        onClick: onClick,
        onKeyDown: this.handleKeyDown
      };
      var actionHandlers = disabled ? {} : {
        onClick: function onClick(event) {
          // we don't want onClick to be called when the close icon is clicked
          event.stopPropagation();
          onActionClick(event);
        },
        onKeyDown: this.handleActionKeyDown
      };
      var sharedProps = {
        $clickable: clickable,
        $closeable: closeable,
        $color: color,
        $disabled: disabled,
        $isFocused: isFocused,
        $isHovered: isHovered,
        $kind: kind,
        $variant: variant
      };
      var titleText = title || Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["getTextFromChildren"])(children);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, _extends({
        "data-baseweb": "tag",
        "aria-label": disabled ? null : 'button',
        role: disabled ? null : 'button',
        tabIndex: clickable ? 0 : null
      }, rootHandlers, sharedProps, rootProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Text, _extends({
        title: titleText
      }, textProps), children), closeable ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Action, _extends({
        "aria-label": disabled ? null : 'close button',
        role: disabled ? null : 'button',
        tabIndex: 0
      }, actionHandlers, sharedProps, actionProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ActionIcon, _extends({
        width: '10',
        height: '10',
        viewBox: '0 0 8 8',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      }, actionIconProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.861278 0.862254C1.12163 0.601905 1.54374 0.601905 1.80409 0.862254L3.99935 3.05752L6.19461 0.862254C6.45496 0.601905 6.87707 0.601905 7.13742 0.862254C7.39777 1.1226 7.39777 1.54471 7.13742 1.80506L4.94216 4.00033L7.13742 6.19559C7.39777 6.45594 7.39777 6.87805 7.13742 7.1384C6.87707 7.39875 6.45496 7.39875 6.19461 7.1384L3.99935 4.94313L1.80409 7.1384C1.54374 7.39875 1.12163 7.39875 0.861278 7.1384C0.600928 6.87805 0.600928 6.45594 0.861278 6.19559L3.05654 4.00033L0.861278 1.80506C0.600928 1.54471 0.600928 1.1226 0.861278 0.862254Z",
        fill: "currentColor"
      }))) : null);
    }
  }]);

  return Tag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Tag, "defaultProps", {
  closeable: true,
  disabled: false,
  isFocused: false,
  isHovered: false,
  onActionClick: function onActionClick() {},
  onActionKeyDown: function onActionKeyDown() {},
  onClick: null,
  onKeyDown: null,
  overrides: {},
  kind: _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].primary,
  variant: _constants_js__WEBPACK_IMPORTED_MODULE_3__["VARIANT"].light
});

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "../node_modules/baseui/esm/tag/utils.js":
/*!***********************************************!*\
  !*** ../node_modules/baseui/esm/tag/utils.js ***!
  \***********************************************/
/*! exports provided: getTextFromChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextFromChildren", function() { return getTextFromChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */

var JOINABLE_TYPES = new Set(['string', 'number']); // Checks the children of a React component to ensure every value is a number
// or a string. If they are, they are joined and returned. Useful for collecting
// text from the child of a node to use as an attribute.

function getTextFromChildren(children) {
  var childList = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).filter(function (child) {
    return child !== null && child !== undefined;
  });

  if (!childList.length) {
    return null;
  }

  var isJoinable = childList.every(function (child) {
    return JOINABLE_TYPES.has(_typeof(child));
  });

  if (!isJoinable) {
    return null;
  } // Join on an empty string to preserve React's whitespace handling:
  // <Tag>foo{'bar'}baz</Tag> => 'foobar'
  // <Tag>foo {'bar'} baz</Tag> => 'foo bar baz'


  return childList.join('');
}

/***/ }),

/***/ "../node_modules/baseui/esm/utils/create-event.js":
/*!********************************************************!*\
  !*** ../node_modules/baseui/esm/utils/create-event.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEvent; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window document */

/** A safe way to create event objects down to IE11 */
function createEvent(eventName) {
  var event;

  if (typeof window.Event === 'function') {
    event = new window.Event(eventName, {
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }

  return event;
}

/***/ }),

/***/ "../node_modules/core-js/library/fn/date/now.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/library/fn/date/now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "../node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.date.now.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.date.now.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "../node_modules/elizabot/elizabot.js":
/*!********************************************!*\
  !*** ../node_modules/elizabot/elizabot.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
  Eliza is a mock Rogerian psychotherapist.
  Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
  cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
      Communication Between Man and Machine"
      in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
  JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>

  synopsis:

         new ElizaBot( <random-choice-disable-flag> )
         ElizaBot.prototype.transform( <inputstring> )
         ElizaBot.prototype.getInitial()
         ElizaBot.prototype.getFinal()
         ElizaBot.prototype.reset()

  usage: var eliza = new ElizaBot();
         var initial = eliza.getInitial();
         var reply = eliza.transform(inputstring);
         if (eliza.quit) {
             // last user input was a quit phrase
         }

         // method `transform()' returns a final phrase in case of a quit phrase
         // but you can also get a final phrase with:
         var final = eliza.getFinal();

         // other methods: reset memory and internal state
         eliza.reset();

         // to set the internal memory size override property `memSize':
         eliza.memSize = 100; // (default: 20)

         // to reproduce the example conversation given by J. Weizenbaum
         // initialize with the optional random-choice-disable flag
         var originalEliza = new ElizaBot(true);

  `ElizaBot' is also a general chatbot engine that can be supplied with any rule set.
  (for required data structures cf. "elizadata.js" and/or see the documentation.)
  data is parsed and transformed for internal use at the creation time of the
  first instance of the `ElizaBot' constructor.

  vers 1.1: lambda functions in RegExps are currently a problem with too many browsers.
            changed code to work around.
*/

var elizaData = __webpack_require__(/*! ./elizadata */ "../node_modules/elizabot/elizadata.js");

function ElizaBot(noRandomFlag) {
	this.noRandom= (noRandomFlag)? true:false;
	this.capitalizeFirstLetter=true;
	this.debug=false;
	this.memSize=20;
	this.version="1.1 (original)";
	if (!this._dataParsed) this._init();
	this.reset();
}

ElizaBot.prototype.reset = function() {
	this.quit=false;
	this.mem=[];
	this.lastchoice=[];
	for (var k=0; k<elizaData.elizaKeywords.length; k++) {
		this.lastchoice[k]=[];
		var rules=elizaData.elizaKeywords[k][2];
		for (var i=0; i<rules.length; i++) this.lastchoice[k][i]=-1;
	}
}

ElizaBot.prototype._dataParsed = false;

ElizaBot.prototype._init = function() {
	// parse data and convert it from canonical form to internal use
	// produce synonym list
	var synPatterns={};
	if ((elizaData.elizaSynons) && (typeof elizaData.elizaSynons == 'object')) {
		for (var i in elizaData.elizaSynons) synPatterns[i]='('+i+'|'+elizaData.elizaSynons[i].join('|')+')';
	}
	// check for keywords or install empty structure to prevent any errors
	if ((!elizaData.elizaKeywords) || (typeof elizaData.elizaKeywords.length == 'undefined')) {
		elizaData.elizaKeywords=[['###',0,[['###',[]]]]];
	}
	// 1st convert rules to regexps
	// expand synonyms and insert asterisk expressions for backtracking
	var sre=/@(\S+)/;
	var are=/(\S)\s*\*\s*(\S)/;
	var are1=/^\s*\*\s*(\S)/;
	var are2=/(\S)\s*\*\s*$/;
	var are3=/^\s*\*\s*$/;
	var wsre=/\s+/g;
	for (var k=0; k<elizaData.elizaKeywords.length; k++) {
		var rules=elizaData.elizaKeywords[k][2];
		elizaData.elizaKeywords[k][3]=k; // save original index for sorting
		for (var i=0; i<rules.length; i++) {
			var r=rules[i];
			// check mem flag and store it as decomp's element 2
			if (r[0].charAt(0)=='$') {
				var ofs=1;
				while (r[0].charAt[ofs]==' ') ofs++;
				r[0]=r[0].substring(ofs);
				r[2]=true;
			}
			else {
				r[2]=false;
			}
			// expand synonyms (v.1.1: work around lambda function)
			var m=sre.exec(r[0]);
			while (m) {
				var sp=(synPatterns[m[1]])? synPatterns[m[1]]:m[1];
				r[0]=r[0].substring(0,m.index)+sp+r[0].substring(m.index+m[0].length);
				m=sre.exec(r[0]);
			}
			// expand asterisk expressions (v.1.1: work around lambda function)
			if (are3.test(r[0])) {
				r[0]='\\s*(.*)\\s*';
			}
			else {
				m=are.exec(r[0]);
				if (m) {
					var lp='';
					var rp=r[0];
					while (m) {
						lp+=rp.substring(0,m.index+1);
						if (m[1]!=')') lp+='\\b';
						lp+='\\s*(.*)\\s*';
						if ((m[2]!='(') && (m[2]!='\\')) lp+='\\b';
						lp+=m[2];
						rp=rp.substring(m.index+m[0].length);
						m=are.exec(rp);
					}
					r[0]=lp+rp;
				}
				m=are1.exec(r[0]);
				if (m) {
					var lp='\\s*(.*)\\s*';
					if ((m[1]!=')') && (m[1]!='\\')) lp+='\\b';
					r[0]=lp+r[0].substring(m.index-1+m[0].length);
				}
				m=are2.exec(r[0]);
				if (m) {
					var lp=r[0].substring(0,m.index+1);
					if (m[1]!='(') lp+='\\b';
					r[0]=lp+'\\s*(.*)\\s*';
				}
			}
			// expand white space
			r[0]=r[0].replace(wsre, '\\s+');
			wsre.lastIndex=0;
		}
	}
	// now sort keywords by rank (highest first)
	elizaData.elizaKeywords.sort(this._sortKeywords);
	// and compose regexps and refs for pres and posts
	ElizaBot.prototype.pres={};
	ElizaBot.prototype.posts={};
	if ((elizaData.elizaPres) && (elizaData.elizaPres.length)) {
		var a=new Array();
		for (var i=0; i<elizaData.elizaPres.length; i+=2) {
			a.push(elizaData.elizaPres[i]);
			ElizaBot.prototype.pres[elizaData.elizaPres[i]]=elizaData.elizaPres[i+1];
		}
		ElizaBot.prototype.preExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		ElizaBot.prototype.preExp = /####/;
		ElizaBot.prototype.pres['####']='####';
	}
	if ((elizaData.elizaPosts) && (elizaData.elizaPosts.length)) {
		var a=new Array();
		for (var i=0; i<elizaData.elizaPosts.length; i+=2) {
			a.push(elizaData.elizaPosts[i]);
			ElizaBot.prototype.posts[elizaData.elizaPosts[i]]=elizaData.elizaPosts[i+1];
		}
		ElizaBot.prototype.postExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		ElizaBot.prototype.postExp = /####/;
		ElizaBot.prototype.posts['####']='####';
	}
	// check for elizaQuits and install default if missing
	if ((!elizaData.elizaQuits) || (typeof elizaData.elizaQuits.length == 'undefined')) {
		elizaData.elizaQuits=[];
	}
	// done
	ElizaBot.prototype._dataParsed=true;
}

ElizaBot.prototype._sortKeywords = function(a,b) {
	// sort by rank
	if (a[1]>b[1]) return -1
	else if (a[1]<b[1]) return 1
	// or original index
	else if (a[3]>b[3]) return 1
	else if (a[3]<b[3]) return -1
	else return 0;
}

ElizaBot.prototype.transform = function(text) {
	var rpl='';
	this.quit=false;
	// unify text string
	text=text.toLowerCase();
	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
	text=text.replace(/\s+-+\s+/g, '.');
	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
	text=text.replace(/\s*\bbut\b\s*/g, '.');
	text=text.replace(/\s{2,}/g, ' ');
	// split text in part sentences and loop through them
	var parts=text.split('.');
	for (var i=0; i<parts.length; i++) {
		var part=parts[i];
		if (part!='') {
			// check for quit expression
			for (var q=0; q<elizaData.elizaQuits.length; q++) {
				if (elizaData.elizaQuits[q]==part) {
					this.quit=true;
					return this.getFinal();
				}
			}
			// preprocess (v.1.1: work around lambda function)
			var m=this.preExp.exec(part);
			if (m) {
				var lp='';
				var rp=part;
				while (m) {
					lp+=rp.substring(0,m.index)+this.pres[m[1]];
					rp=rp.substring(m.index+m[0].length);
					m=this.preExp.exec(rp);
				}
				part=lp+rp;
			}
			this.sentence=part;
			// loop trough keywords
			for (var k=0; k<elizaData.elizaKeywords.length; k++) {
				if (part.search(new RegExp('\\b'+elizaData.elizaKeywords[k][0]+'\\b', 'i'))>=0) {
					rpl = this._execRule(k);
				}
				if (rpl!='') return rpl;
			}
		}
	}
	// nothing matched try mem
	rpl=this._memGet();
	// if nothing in mem, so try xnone
	if (rpl=='') {
		this.sentence=' ';
		var k=this._getRuleIndexByKey('xnone');
		if (k>=0) rpl=this._execRule(k);
	}
	// return reply or default string
	return (rpl!='')? rpl : 'I am at a loss for words.';
}

ElizaBot.prototype._execRule = function(k) {
	var rule=elizaData.elizaKeywords[k];
	var decomps=rule[2];
	var paramre=/\(([0-9]+)\)/;
	for (var i=0; i<decomps.length; i++) {
		var m=this.sentence.match(decomps[i][0]);
		if (m!=null) {
			var reasmbs=decomps[i][1];
			var memflag=decomps[i][2];
			var ri= (this.noRandom)? 0 : Math.floor(Math.random()*reasmbs.length);
			if (((this.noRandom) && (this.lastchoice[k][i]>ri)) || (this.lastchoice[k][i]==ri)) {
				ri= ++this.lastchoice[k][i];
				if (ri>=reasmbs.length) {
					ri=0;
					this.lastchoice[k][i]=-1;
				}
			}
			else {
				this.lastchoice[k][i]=ri;
			}
			var rpl=reasmbs[ri];
			if (this.debug) alert('match:\nkey: '+elizaData.elizaKeywords[k][0]+
				'\nrank: '+elizaData.elizaKeywords[k][1]+
				'\ndecomp: '+decomps[i][0]+
				'\nreasmb: '+rpl+
				'\nmemflag: '+memflag);
			if (rpl.search('^goto ', 'i')==0) {
				ki=this._getRuleIndexByKey(rpl.substring(5));
				if (ki>=0) return this._execRule(ki);
			}
			// substitute positional params (v.1.1: work around lambda function)
			var m1=paramre.exec(rpl);
			if (m1) {
				var lp='';
				var rp=rpl;
				while (m1) {
					var param = m[parseInt(m1[1])];
					// postprocess param
					var m2=this.postExp.exec(param);
					if (m2) {
						var lp2='';
						var rp2=param;
						while (m2) {
							lp2+=rp2.substring(0,m2.index)+this.posts[m2[1]];
							rp2=rp2.substring(m2.index+m2[0].length);
							m2=this.postExp.exec(rp2);
						}
						param=lp2+rp2;
					}
					lp+=rp.substring(0,m1.index)+param;
					rp=rp.substring(m1.index+m1[0].length);
					m1=paramre.exec(rp);
				}
				rpl=lp+rp;
			}
			rpl=this._postTransform(rpl);
			if (memflag) this._memSave(rpl);
			else return rpl;
		}
	}
	return '';
}

ElizaBot.prototype._postTransform = function(s) {
	// final cleanings
	s=s.replace(/\s{2,}/g, ' ');
	s=s.replace(/\s+\./g, '.');
	if ((elizaData.elizaPostTransforms) && (elizaData.elizaPostTransforms.length)) {
		for (var i=0; i<elizaData.elizaPostTransforms.length; i+=2) {
			s=s.replace(elizaData.elizaPostTransforms[i], elizaData.elizaPostTransforms[i+1]);
			elizaData.elizaPostTransforms[i].lastIndex=0;
		}
	}
	// capitalize first char (v.1.1: work around lambda function)
	if (this.capitalizeFirstLetter) {
		var re=/^([a-z])/;
		var m=re.exec(s);
		if (m) s=m[0].toUpperCase()+s.substring(1);
	}
	return s;
}

ElizaBot.prototype._getRuleIndexByKey = function(key) {
	for (var k=0; k<elizaData.elizaKeywords.length; k++) {
		if (elizaData.elizaKeywords[k][0]==key) return k;
	}
	return -1;
}

ElizaBot.prototype._memSave = function(t) {
	this.mem.push(t);
	if (this.mem.length>this.memSize) this.mem.shift();
}

ElizaBot.prototype._memGet = function() {
	if (this.mem.length) {
		if (this.noRandom) return this.mem.shift();
		else {
			var n=Math.floor(Math.random()*this.mem.length);
			var rpl=this.mem[n];
			for (var i=n+1; i<this.mem.length; i++) this.mem[i-1]=this.mem[i];
			this.mem.length--;
			return rpl;
		}
	}
	else return '';
}

ElizaBot.prototype.getFinal = function() {
	if (!elizaData.elizaFinals) return '';
	return elizaData.elizaFinals[Math.floor(Math.random()*elizaData.elizaFinals.length)];
}

ElizaBot.prototype.getInitial = function() {
	if (!elizaData.elizaInitials) return '';
	return elizaData.elizaInitials[Math.floor(Math.random()*elizaData.elizaInitials.length)];
}


// fix array.prototype methods (push, shift) if not implemented (MSIE fix)
if (typeof Array.prototype.push == 'undefined') {
	Array.prototype.push=function(v) { return this[this.length]=v; };
}
if (typeof Array.prototype.shift == 'undefined') {
	Array.prototype.shift=function() {
		if (this.length==0) return null;
		var e0=this[0];
		for (var i=1; i<this.length; i++) this[i-1]=this[i];
		this.length--;
		return e0;
	};
}

module.exports = ElizaBot;

// eof

/***/ }),

/***/ "../node_modules/elizabot/elizadata.js":
/*!*********************************************!*\
  !*** ../node_modules/elizabot/elizadata.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// start of file - elizadata.js
// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

exports.elizaInitials = [
	"How do you do.  Please tell me your problem.",
// additions (not original)
	"Please tell me what's been bothering you.",
	"Is something troubling you ?"
];

exports.elizaFinals = [
	"Goodbye.  It was nice talking to you.",
// additions (not original)
	"Goodbye.  This was really a nice talk.",
	"Goodbye.  I'm looking forward to our next session.",
	"This was a good session, wasn't it -- but time is over now.   Goodbye.",
	"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

exports.elizaQuits = [
	"bye",
	"goodbye",
	"done",
	"exit",
	"quit"
];

exports.elizaPres = [
	"dont", "don't",
	"cant", "can't",
	"wont", "won't",
	"recollect", "remember",
	"recall", "remember",
	"dreamt", "dreamed",
	"dreams", "dream",
	"maybe", "perhaps",
	"certainly", "yes",
	"machine", "computer",
	"machines", "computer",
	"computers", "computer",
	"were", "was",
	"you're", "you are",
	"i'm", "i am",
	"same", "alike",
	"identical", "alike",
	"equivalent", "alike"
];

exports.elizaPosts = [
	"am", "are",
	"your", "my",
	"me", "you",
	"myself", "yourself",
	"yourself", "myself",
	"i", "you",
	"you", "I",
	"my", "your",
	"i'm", "you are"
];

exports.elizaSynons = {
	"be": ["am", "is", "are", "was"],
	"belief": ["feel", "think", "believe", "wish"],
	"cannot": ["can't"],
	"desire": ["want", "need"],
	"everyone": ["everybody", "nobody", "noone"],
	"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
	"happy": ["elated", "glad", "better"],
	"sad": ["unhappy", "depressed", "sick"]
};

exports.elizaKeywords = [

	/*
	 Array of
	 ["<key>", <rank>, [
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]],
	 ["<decomp>", [
	 "<reasmb>",
	 "<reasmb>",
	 "<reasmb>"
	 ]]
	 ]]
	 */

	["xnone", 0, [
		["*", [
			"I'm not sure I understand you fully.",
			"Please go on.",
			"What does that suggest to you ?",
			"Do you feel strongly about discussing such things ?",
			"That is interesting.  Please continue.",
			"Tell me more about that.",
			"Does talking about this bother you ?"
		]]
	]],
	["sorry", 0, [
		["*", [
			"Please don't apologise.",
			"Apologies are not necessary.",
			"I've told you that apologies are not required.",
			"It did not bother me.  Please continue."
		]]
	]],
	["apologise", 0, [
		["*", [
			"goto sorry"
		]]
	]],
	["remember", 5, [
		["* i remember *", [
			"Do you often think of (2) ?",
			"Does thinking of (2) bring anything else to mind ?",
			"What else do you recollect ?",
			"Why do you remember (2) just now ?",
			"What in the present situation reminds you of (2) ?",
			"What is the connection between me and (2) ?",
			"What else does (2) remind you of ?"
		]],
		["* do you remember *", [
			"Did you think I would forget (2) ?",
			"Why do you think I should recall (2) now ?",
			"What about (2) ?",
			"goto what",
			"You mentioned (2) ?"
		]],
		["* you remember *", [
			"How could I forget (2) ?",
			"What about (2) should I remember ?",
			"goto you"
		]]
	]],
	["forget", 5, [
		["* i forget *", [
			"Can you think of why you might forget (2) ?",
			"Why can't you remember (2) ?",
			"How often do you think of (2) ?",
			"Does it bother you to forget that ?",
			"Could it be a mental block ?",
			"Are you generally forgetful ?",
			"Do you think you are suppressing (2) ?"
		]],
		["* did you forget *", [
			"Why do you ask ?",
			"Are you sure you told me ?",
			"Would it bother you if I forgot (2) ?",
			"Why should I recall (2) just now ?",
			"goto what",
			"Tell me more about (2)."
		]]
	]],
	["if", 3, [
		["* if *", [
			"Do you think it's likely that (2) ?",
			"Do you wish that (2) ?",
			"What do you know about (2) ?",
			"Really, if (2) ?",
			"What would you do if (2) ?",
			"But what are the chances that (2) ?",
			"What does this speculation lead to ?"
		]]
	]],
	["dreamed", 4, [
		["* i dreamed *", [
			"Really, (2) ?",
			"Have you ever fantasized (2) while you were awake ?",
			"Have you ever dreamed (2) before ?",
			"goto dream"
		]]
	]],
	["dream", 3, [
		["*", [
			"What does that dream suggest to you ?",
			"Do you dream often ?",
			"What persons appear in your dreams ?",
			"Do you believe that dreams have something to do with your problem ?"
		]]
	]],
	["perhaps", 0, [
		["*", [
			"You don't seem quite certain.",
			"Why the uncertain tone ?",
			"Can't you be more positive ?",
			"You aren't sure ?",
			"Don't you know ?",
			"How likely, would you estimate ?"
		]]
	]],
	["name", 15, [
		["*", [
			"I am not interested in names.",
			"I've told you before, I don't care about names -- please continue."
		]]
	]],
	["deutsch", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I don't understand German."
		]]
	]],
	["francais", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I don't understand French."
		]]
	]],
	["italiano", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I don't understand Italian."
		]]
	]],
	["espanol", 0, [
		["*", [
			"goto xforeign",
			"I told you before, I don't understand Spanish."
		]]
	]],
	["xforeign", 0, [
		["*", [
			"I speak only English."
		]]
	]],
	["hello", 0, [
		["*", [
			"How do you do.  Please state your problem.",
			"Hi.  What seems to be your problem ?"
		]]
	]],
	["computer", 50, [
		["*", [
			"Do computers worry you ?",
			"Why do you mention computers ?",
			"What do you think machines have to do with your problem ?",
			"Don't you think computers can help people ?",
			"What about machines worries you ?",
			"What do you think about machines ?",
			"You don't think I am a computer program, do you ?"
		]]
	]],
	["am", 0, [
		["* am i *", [
			"Do you believe you are (2) ?",
			"Would you want to be (2) ?",
			"Do you wish I would tell you you are (2) ?",
			"What would it mean if you were (2) ?",
			"goto what"
		]],
		["* i am *", [
			"goto i"
		]],
		["*", [
			"Why do you say 'am' ?",
			"I don't understand that."
		]]
	]],
	["are", 0, [
		["* are you *", [
			"Why are you interested in whether I am (2) or not ?",
			"Would you prefer if I weren't (2) ?",
			"Perhaps I am (2) in your fantasies.",
			"Do you sometimes think I am (2) ?",
			"goto what",
			"Would it matter to you ?",
			"What if I were (2) ?"
		]],
		["* you are *", [
			"goto you"
		]],
		["* are *", [
			"Did you think they might not be (2) ?",
			"Would you like it if they were not (2) ?",
			"What if they were not (2) ?",
			"Are they always (2) ?",
			"Possibly they are (2).",
			"Are you positive they are (2) ?"
		]]
	]],
	["your", 0, [
		["* your *", [
			"Why are you concerned over my (2) ?",
			"What about your own (2) ?",
			"Are you worried about someone else's (2) ?",
			"Really, my (2) ?",
			"What makes you think of my (2) ?",
			"Do you want my (2) ?"
		]]
	]],
	["was", 2, [
		["* was i *", [
			"What if you were (2) ?",
			"Do you think you were (2) ?",
			"Were you (2) ?",
			"What would it mean if you were (2) ?",
			"What does ' (2) ' suggest to you ?",
			"goto what"
		]],
		["* i was *", [
			"Were you really ?",
			"Why do you tell me you were (2) now ?",
			"Perhaps I already know you were (2)."
		]],
		["* was you *", [
			"Would you like to believe I was (2) ?",
			"What suggests that I was (2) ?",
			"What do you think ?",
			"Perhaps I was (2).",
			"What if I had been (2) ?"
		]]
	]],
	["i", 0, [
		["* i @desire *", [
			"What would it mean to you if you got (3) ?",
			"Why do you want (3) ?",
			"Suppose you got (3) soon.",
			"What if you never got (3) ?",
			"What would getting (3) mean to you ?",
			"What does wanting (3) have to do with this discussion ?"
		]],
		["* i am* @sad *", [
			"I am sorry to hear that you are (3).",
			"Do you think coming here will help you not to be (3) ?",
			"I'm sure it's not pleasant to be (3).",
			"Can you explain what made you (3) ?"
		]],
		["* i am* @happy *", [
			"How have I helped you to be (3) ?",
			"Has your treatment made you (3) ?",
			"What makes you (3) just now ?",
			"Can you explain why you are suddenly (3) ?"
		]],
		["* i was *", [
			"goto was"
		]],
		["* i @belief i *", [
			"Do you really think so ?",
			"But you are not sure you (3).",
			"Do you really doubt you (3) ?"
		]],
		["* i* @belief *you *", [
			"goto you"
		]],
		["* i am *", [
			"Is it because you are (2) that you came to me ?",
			"How long have you been (2) ?",
			"Do you believe it is normal to be (2) ?",
			"Do you enjoy being (2) ?",
			"Do you know anyone else who is (2) ?"
		]],
		["* i @cannot *", [
			"How do you know that you can't (3) ?",
			"Have you tried ?",
			"Perhaps you could (3) now.",
			"Do you really want to be able to (3) ?",
			"What if you could (3) ?"
		]],
		["* i don't *", [
			"Don't you really (2) ?",
			"Why don't you (2) ?",
			"Do you wish to be able to (2) ?",
			"Does that trouble you ?"
		]],
		["* i feel *", [
			"Tell me more about such feelings.",
			"Do you often feel (2) ?",
			"Do you enjoy feeling (2) ?",
			"Of what does feeling (2) remind you ?"
		]],
		["* i * you *", [
			"Perhaps in your fantasies we (2) each other.",
			"Do you wish to (2) me ?",
			"You seem to need to (2) me.",
			"Do you (2) anyone else ?"
		]],
		["*", [
			"You say (1) ?",
			"Can you elaborate on that ?",
			"Do you say (1) for some special reason ?",
			"That's quite interesting."
		]]
	]],
	["you", 0, [
		["* you remind me of *", [
			"goto alike"
		]],
		["* you are *", [
			"What makes you think I am (2) ?",
			"Does it please you to believe I am (2) ?",
			"Do you sometimes wish you were (2) ?",
			"Perhaps you would like to be (2)."
		]],
		["* you* me *", [
			"Why do you think I (2) you ?",
			"You like to think I (2) you -- don't you ?",
			"What makes you think I (2) you ?",
			"Really, I (2) you ?",
			"Do you wish to believe I (2) you ?",
			"Suppose I did (2) you -- what would that mean ?",
			"Does someone else believe I (2) you ?"
		]],
		["* you *", [
			"We were discussing you -- not me.",
			"Oh, I (2) ?",
			"You're not really talking about me -- are you ?",
			"What are your feelings now ?"
		]]
	]],
	["yes", 0, [
		["*", [
			"You seem to be quite positive.",
			"You are sure.",
			"I see.",
			"I understand."
		]]
	]],
	["no", 0, [
		["* no one *", [
			"Are you sure, no one (2) ?",
			"Surely someone (2) .",
			"Can you think of anyone at all ?",
			"Are you thinking of a very special person ?",
			"Who, may I ask ?",
			"You have a particular person in mind, don't you ?",
			"Who do you think you are talking about ?"
		]],
		["*", [
			"Are you saying no just to be negative?",
			"You are being a bit negative.",
			"Why not ?",
			"Why 'no' ?"
		]]
	]],
	["my", 2, [
		["$ * my *", [
			"Does that have anything to do with the fact that your (2) ?",
			"Lets discuss further why your (2).",
			"Earlier you said your (2).",
			"But your (2)."
		]],
		["* my* @family *", [
			"Tell me more about your family.",
			"Who else in your family (4) ?",
			"Your (3) ?",
			"What else comes to your mind when you think of your (3) ?"
		]],
		["* my *", [
			"Your (2) ?",
			"Why do you say your (2) ?",
			"Does that suggest anything else which belongs to you ?",
			"Is it important to you that your (2) ?"
		]]
	]],
	["can", 0, [
		["* can you *", [
			"You believe I can (2) don't you ?",
			"goto what",
			"You want me to be able to (2).",
			"Perhaps you would like to be able to (2) yourself."
		]],
		["* can i *", [
			"Whether or not you can (2) depends on you more than on me.",
			"Do you want to be able to (2) ?",
			"Perhaps you don't want to (2).",
			"goto what"
		]]
	]],
	["what", 0, [
		["*", [
			"Why do you ask ?",
			"Does that question interest you ?",
			"What is it you really want to know ?",
			"Are such questions much on your mind ?",
			"What answer would please you most ?",
			"What do you think ?",
			"What comes to mind when you ask that ?",
			"Have you asked such questions before ?",
			"Have you asked anyone else ?"
		]]
	]],
	["who", 0, [
		["who *", [
			"goto what"
		]]
	]],
	["when", 0, [
		["when *", [
			"goto what"
		]]
	]],
	["where", 0, [
		["where *", [
			"goto what"
		]]
	]],
	["how", 0, [
		["how *", [
			"goto what"
		]]
	]],
	["because", 0, [
		["*", [
			"Is that the real reason ?",
			"Don't any other reasons come to mind ?",
			"Does that reason seem to explain anything else ?",
			"What other reasons might there be ?"
		]]
	]],
	["why", 0, [
		["* why don't you *", [
			"Do you believe I don't (2) ?",
			"Perhaps I will (2) in good time.",
			"Should you (2) yourself ?",
			"You want me to (2) ?",
			"goto what"
		]],
		["* why can't i *", [
			"Do you think you should be able to (2) ?",
			"Do you want to be able to (2) ?",
			"Do you believe this will help you to (2) ?",
			"Have you any idea why you can't (2) ?",
			"goto what"
		]],
		["*", [
			"goto what"
		]]
	]],
	["everyone", 2, [
		["* @everyone *", [
			"Really, (2) ?",
			"Surely not (2).",
			"Can you think of anyone in particular ?",
			"Who, for example?",
			"Are you thinking of a very special person ?",
			"Who, may I ask ?",
			"Someone special perhaps ?",
			"You have a particular person in mind, don't you ?",
			"Who do you think you're talking about ?"
		]]
	]],
	["everybody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["nobody", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["noone", 2, [
		["*", [
			"goto everyone"
		]]
	]],
	["always", 1, [
		["*", [
			"Can you think of a specific example ?",
			"When ?",
			"What incident are you thinking of ?",
			"Really, always ?"
		]]
	]],
	["alike", 10, [
		["*", [
			"In what way ?",
			"What resemblence do you see ?",
			"What does that similarity suggest to you ?",
			"What other connections do you see ?",
			"What do you suppose that resemblence means ?",
			"What is the connection, do you suppose ?",
			"Could there really be some connection ?",
			"How ?"
		]]
	]],
	["like", 10, [
		["* @be *like *", [
			"goto alike"
		]]
	]],
	["different", 0, [
		["*", [
			"How is it different ?",
			"What differences do you see ?",
			"What does that difference suggest to you ?",
			"What other distinctions do you see ?",
			"What do you suppose that disparity means ?",
			"Could there be some connection, do you suppose ?",
			"How ?"
		]]
	]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
exports.elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof

/***/ }),

/***/ "../node_modules/invariant/browser.js":
/*!********************************************!*\
  !*** ../node_modules/invariant/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../node_modules/polished/lib/color/darken.js":
/*!****************************************************!*\
  !*** ../node_modules/polished/lib/color/darken.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _curry =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_curry */ "../node_modules/polished/lib/internalHelpers/_curry.js"));

var _guard =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_guard */ "../node_modules/polished/lib/internalHelpers/_guard.js"));

var _parseToHsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./parseToHsl */ "../node_modules/polished/lib/color/parseToHsl.js"));

var _toColorString =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./toColorString */ "../node_modules/polished/lib/color/toColorString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = (0, _parseToHsl["default"])(color);
  return (0, _toColorString["default"])(_extends({}, hslColor, {
    lightness: (0, _guard["default"])(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
(0, _curry["default"]
/* ::<number | string, string, string> */
)(darken);
var _default = curriedDarken;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/hsl.js":
/*!*************************************************!*\
  !*** ../node_modules/polished/lib/color/hsl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = hsl;

var _hslToHex =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_hslToHex */ "../node_modules/polished/lib/internalHelpers/_hslToHex.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return (0, _hslToHex["default"])(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return (0, _hslToHex["default"])(value.hue, value.saturation, value.lightness);
  }

  throw new _errors["default"](1);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/hsla.js":
/*!**************************************************!*\
  !*** ../node_modules/polished/lib/color/hsla.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = hsla;

var _hslToHex =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_hslToHex */ "../node_modules/polished/lib/internalHelpers/_hslToHex.js"));

var _hslToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_hslToRgb */ "../node_modules/polished/lib/internalHelpers/_hslToRgb.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? (0, _hslToHex["default"])(value, saturation, lightness) : "rgba(" + (0, _hslToRgb["default"])(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? (0, _hslToHex["default"])(value.hue, value.saturation, value.lightness) : "rgba(" + (0, _hslToRgb["default"])(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new _errors["default"](2);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/lighten.js":
/*!*****************************************************!*\
  !*** ../node_modules/polished/lib/color/lighten.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _curry =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_curry */ "../node_modules/polished/lib/internalHelpers/_curry.js"));

var _guard =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_guard */ "../node_modules/polished/lib/internalHelpers/_guard.js"));

var _parseToHsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./parseToHsl */ "../node_modules/polished/lib/color/parseToHsl.js"));

var _toColorString =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./toColorString */ "../node_modules/polished/lib/color/toColorString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = (0, _parseToHsl["default"])(color);
  return (0, _toColorString["default"])(_extends({}, hslColor, {
    lightness: (0, _guard["default"])(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
(0, _curry["default"]
/* ::<number | string, string, string> */
)(lighten);
var _default = curriedLighten;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/parseToHsl.js":
/*!********************************************************!*\
  !*** ../node_modules/polished/lib/color/parseToHsl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = parseToHsl;

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./parseToRgb */ "../node_modules/polished/lib/color/parseToRgb.js"));

var _rgbToHsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_rgbToHsl */ "../node_modules/polished/lib/internalHelpers/_rgbToHsl.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return (0, _rgbToHsl["default"])((0, _parseToRgb["default"])(color));
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/parseToRgb.js":
/*!********************************************************!*\
  !*** ../node_modules/polished/lib/color/parseToRgb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = parseToRgb;

var _hslToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_hslToRgb */ "../node_modules/polished/lib/internalHelpers/_hslToRgb.js"));

var _nameToHex =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_nameToHex */ "../node_modules/polished/lib/internalHelpers/_nameToHex.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new _errors["default"](3);
  }

  var normalizedColor = (0, _nameToHex["default"])(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + (0, _hslToRgb["default"])(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new _errors["default"](4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + (0, _hslToRgb["default"])(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new _errors["default"](4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new _errors["default"](5);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/rgb.js":
/*!*************************************************!*\
  !*** ../node_modules/polished/lib/color/rgb.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = rgb;

var _reduceHexValue =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_reduceHexValue */ "../node_modules/polished/lib/internalHelpers/_reduceHexValue.js"));

var _numberToHex =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_numberToHex */ "../node_modules/polished/lib/internalHelpers/_numberToHex.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return (0, _reduceHexValue["default"])("#" + (0, _numberToHex["default"])(value) + (0, _numberToHex["default"])(green) + (0, _numberToHex["default"])(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return (0, _reduceHexValue["default"])("#" + (0, _numberToHex["default"])(value.red) + (0, _numberToHex["default"])(value.green) + (0, _numberToHex["default"])(value.blue));
  }

  throw new _errors["default"](6);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/rgba.js":
/*!**************************************************!*\
  !*** ../node_modules/polished/lib/color/rgba.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = rgba;

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./parseToRgb */ "../node_modules/polished/lib/color/parseToRgb.js"));

var _rgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./rgb */ "../node_modules/polished/lib/color/rgb.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = (0, _parseToRgb["default"])(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? (0, _rgb["default"])(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? (0, _rgb["default"])(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new _errors["default"](7);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/color/toColorString.js":
/*!***********************************************************!*\
  !*** ../node_modules/polished/lib/color/toColorString.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = toColorString;

var _hsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./hsl */ "../node_modules/polished/lib/color/hsl.js"));

var _hsla =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./hsla */ "../node_modules/polished/lib/color/hsla.js"));

var _rgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./rgb */ "../node_modules/polished/lib/color/rgb.js"));

var _rgba =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./rgba */ "../node_modules/polished/lib/color/rgba.js"));

var _errors =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ../internalHelpers/_errors */ "../node_modules/polished/lib/internalHelpers/_errors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new _errors["default"](8);
  if (isRgba(color)) return (0, _rgba["default"])(color);
  if (isRgb(color)) return (0, _rgb["default"])(color);
  if (isHsla(color)) return (0, _hsla["default"])(color);
  if (isHsl(color)) return (0, _hsl["default"])(color);
  throw new _errors["default"](8);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_curry.js":
/*!**************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_curry.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = curry;

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_errors.js":
/*!***************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_errors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (false) {} else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

exports["default"] = PolishedError;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_guard.js":
/*!**************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_guard.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

var _default = guard;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_hslToHex.js":
/*!*****************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_hslToHex.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _hslToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./_hslToRgb */ "../node_modules/polished/lib/internalHelpers/_hslToRgb.js"));

var _reduceHexValue =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./_reduceHexValue */ "../node_modules/polished/lib/internalHelpers/_reduceHexValue.js"));

var _numberToHex =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
__webpack_require__(/*! ./_numberToHex */ "../node_modules/polished/lib/internalHelpers/_numberToHex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function colorToHex(color) {
  return (0, _numberToHex["default"])(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return (0, _reduceHexValue["default"])("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return (0, _hslToRgb["default"])(hue, saturation, lightness, convertToHex);
}

var _default = hslToHex;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_hslToRgb.js":
/*!*****************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_hslToRgb.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var _default = hslToRgb;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_nameToHex.js":
/*!******************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_nameToHex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var _default = nameToHex;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_numberToHex.js":
/*!********************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_numberToHex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

var _default = numberToHex;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_reduceHexValue.js":
/*!***********************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_reduceHexValue.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var _default = reduceHexValue;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/polished/lib/internalHelpers/_rgbToHsl.js":
/*!*****************************************************************!*\
  !*** ../node_modules/polished/lib/internalHelpers/_rgbToHsl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

var _default = rgbToHsl;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "../node_modules/react-input-mask/index.js":
/*!*************************************************!*\
  !*** ../node_modules/react-input-mask/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "../node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "../node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "../node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "../node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : undefined;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : undefined : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : undefined : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : undefined;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "../node_modules/warning/warning.js":
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

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
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elizabot */ "../node_modules/elizabot/elizabot.js");
/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(elizabot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ShowChats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShowChats */ "./containers/Chatbot/ShowChats.tsx");


var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Chatbot/Chat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var eliza = new elizabot__WEBPACK_IMPORTED_MODULE_4___default.a();

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
    if (e.key === 'Enter') {
      chats.push({
        id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()(),
        message: value
      });
      setChats(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(chats));
      setValue('');
      setListen(true);
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_ShowChats__WEBPACK_IMPORTED_MODULE_5__["default"], {
    chats: chats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
      lineNumber: 36
    },
    __self: this
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/tag */ "../node_modules/baseui/esm/tag/index.js");
var _jsxFileName = "/Users/merin/dashboard-apps/inst/frontend/containers/Chatbot/ShowChats.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ShowChats = function ShowChats(_ref) {
  var chats = _ref.chats;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, chats && chats.length ? chats.map(function (chat, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(baseui_tag__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, chat.message));
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ShowChats);

/***/ })

}]);
//# sourceMappingURL=3.js.map