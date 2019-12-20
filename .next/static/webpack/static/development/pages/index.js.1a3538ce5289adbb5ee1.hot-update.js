webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-bootstrap/esm/ButtonToolbar.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ButtonToolbar.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var defaultProps = {
  role: 'toolbar'
};
var ButtonToolbar = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn-toolbar');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix)
  }));
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ButtonToolbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/esm/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/custom-theme.scss */ "./styles/custom-theme.scss");
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Banner = function Banner() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("section", {
    className: "hero_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "welcome to cashfree")))));
};

var Products = function Products() {
  return __jsx("section", {
    className: "page_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "welcome to cashfree"), __jsx(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Primary"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Secondary"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Success"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Warning"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Danger"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Info"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Light"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Dark"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Link")))));
};

var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-841099073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-841099073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap",
    rel: "stylesheet",
    className: "jsx-841099073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(Products, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "841099073",
    __self: this
  }, ".bootom_footer.jsx-841099073{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VpQixBQUdrQyxrQkFDckIiLCJmaWxlIjoiL1VzZXJzL2RlZXBha2t1bWFyL0RvY3VtZW50cy9jYXNoZnJlZS1uZXh0LXdlYi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvblRvb2xiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvblRvb2xiYXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLXRoZW1lLnNjc3MnXG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IChcbiAgPD5cbiAgIDxIZWFkZXIvPlxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvX3NlY3Rpb25cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxPlxuICAgICAgd2VsY29tZSB0byBjYXNoZnJlZVxuICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIHsvKiA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYmFubmVyX2NvbnR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjIwMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT4gKi99XG4gIDwvc2VjdGlvbj5cbiAgPC8+XG4pXG5cbmNvbnN0IFByb2R1Y3RzID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb25cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxPlxuICAgICAgd2VsY29tZSB0byBjYXNoZnJlZVxuICAgICAgPC9oMT5cbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlByaW1hcnk8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiPlNlY29uZGFyeTwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3M8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIndhcm5pbmdcIj5XYXJuaW5nPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIj5EYW5nZXI8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImluZm9cIj5JbmZvPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiPkxpZ2h0PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYXJrXCI+RGFyazwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlua1wiPkxpbms8L0J1dHRvbj5cbiAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuKVxuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG48PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwfE9wZW4rU2FuczozMDAsNDAwLDYwMCw3MDAsODAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgPC9IZWFkPlxuICAgICA8QmFubmVyLz5cbiAgICAgXG4gICAgIDxQcm9kdWN0cy8+XG4gICAgIDxGb290ZXIvPlxuICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYm9vdG9tX2Zvb3RlcntcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/deepakkumar/Documents/cashfree-next-web/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.1a3538ce5289adbb5ee1.hot-update.js.map