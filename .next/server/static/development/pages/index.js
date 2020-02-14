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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Footer = () => __jsx("div", {
  className: "jsx-3837485898" + " " + "main_footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
  md: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3837485898" + " " + "cmpny_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("img", {
  src: "/logo.svg",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("p", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Cashfree is a next generation payment gateway that helps Indian businesses both collect and disburse payments via almost 100 payment methods including Visa, MasterCard, Rupay, UPI, IMPS, NEFT, Paytm & other wallets, Pay Later and various EMI options. 15,000+ businesses have processed more than Rs 6000 Crores of payments using Cashfree offerings. Cashfree is backed by Silicon Valley investor Y Combinator and was incubated by Paypal."), __jsx("ul", {
  className: "jsx-3837485898" + " " + "social-logos",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.facebook.com/gocashfree/",
  target: "_blank",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("img", {
  src: "/icons/fb.png",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.instagram.com/gocashfree/",
  target: "_blank",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("img", {
  src: "/icons/insta.png",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.linkedin.com/company/cashfree/?originalSubdomain=in",
  target: "_blank",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("img", {
  src: "/icons/linkedin.png",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "https://twitter.com/gocashfree",
  target: "_blank",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("img", {
  src: "/icons/twitter.png",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})))))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
  md: 2,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Company"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  href: "/careers",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Careers")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("a", {
  href: "/partner-program",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Partner with us")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("a", {
  href: "/contact-us",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Contact us")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("a", {
  href: "/presskit",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Press Kit"))), __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Legal"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("a", {
  href: "/tnc",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Terms and Condition")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  href: "https://cashfree.com/privacypolicy.html",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Privacy Policy"))), __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Developers"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  href: "https://docs.cashfree.com/docs",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Documentation")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/cashfree",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Github")))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
  md: 3,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Products"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("a", {
  href: "/payment-gateway-india",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "Payment Gateway")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("a", {
  href: "/auto-collect",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "Auto Collect")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("a", {
  href: "/payouts",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Payouts")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  href: "/marketplace-settlements",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "Marketplace Settlement"))), __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Solutions"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("a", {
  href: "/shopify-payment-gateway-india",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Shopify Payment Gateway")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("a", {
  href: "/woocommerce-payment-gateway-india",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Woocommerce Payment Gateway")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("a", {
  href: "/magento-payment-gateway-india",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Magento Payment Gateway")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("a", {
  href: "https://docs.cashfree.com/docs/opencart/guide/",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Opencart Payment Gateway")))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
  md: 3,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Knowledge Base"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("a", {
  href: "http://help.cashfree.com/",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Help Center")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.cashfree.com/roundtable",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Community for Payment Enthusiasts"))), __jsx("h3", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "Blog"), __jsx("ul", {
  className: "jsx-3837485898" + " " + "footmenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("a", {
  href: "https://blog.cashfree.com/cod-refunds-cashgram/",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Check the future of refunds in India")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("a", {
  href: "https://blog.cashfree.com/enet-hdfc/",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "Smarter alternative to Enet HDFC & other corporate banking solutions")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("a", {
  href: "https://blog.cashfree.com/how-to-choose-best-payment-gateway-india/",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "How to choose the best payment gateway in India")), __jsx("li", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("a", {
  href: "https://blog.cashfree.com/upi-integration/?utm_source=website&utm_medium=content_m&utm_campaign=upi_integration&utm_term=upi%20integration",
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "UPI integration guide"))))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3837485898" + " " + "bootom_footer text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3837485898",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "Cashfree Payments India Private Limited \xA9 2019"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3837485898",
  __self: undefined
}, ".main_footer.jsx-3837485898{background:#7d44f0;padding-top:50px;}.cmpny_info.jsx-3837485898{color:white;padding-right:30px;}img.jsx-3837485898{margin-bottom:10px;max-width:180px;}h3.jsx-3837485898{font-size:18px;font-weight:600;position:relative;width:auto;display:inline-block;padding-bottom:0;margin:10px 0;color:white;}p.jsx-3837485898{font-weight:400;padding:5px 0;line-height:22px;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-size:14px;color:rgba(255,255,255,.7);}a.jsx-3837485898{color:rgba(255,255,255,.7);font-size:14px;}a.jsx-3837485898:hover{color:white;}.footmenu.jsx-3837485898{list-style:none;padding:10px 0;}.footmenu.jsx-3837485898 li.jsx-3837485898{padding:5px 0;color:white;}.social-logos.jsx-3837485898{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:0;padding:0;}.social-logos.jsx-3837485898 li.jsx-3837485898{padding-right:10px;}.social-logos.jsx-3837485898 li.jsx-3837485898 img.jsx-3837485898{width:30px;}.bootom_footer.jsx-3837485898{color:white;border-top:1px solid #cccccc85;padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZvQixBQUdnQyxBQUlSLEFBSVEsQUFJSixBQVVDLEFBU08sQUFLWixBQUlLLEFBSU4sQUFJVSxBQVNGLEFBR1IsQUFHQyxXQUZmLENBeER1QixBQWdDcEIsQUEyQmdDLEVBbkJ2QixDQWhDUSxDQVVGLEFBa0JDLEdBeENFLEFBUUQsQUFpRHBCLE9BWkEsQ0FkZ0IsR0FSSyxDQWxCckIsQUFRc0IsQUE0QnRCLElBaENBLENBUkEsTUErQkEsQ0FnQ3FCLElBeENHLEVBVlQsV0FDVSxBQWtEekIscUJBakRxQixpQkFDSixJQStCRyxVQTlCTCxNQStCZ0IsTUE5Qi9CLG9CQU1tQixlQUNXLDJCQUU5QixxQ0FzQnVCLDZGQUNSLFdBQ0YsU0FDQyxVQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2Zvb3RlclwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY21wbnlfaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28uc3ZnXCIvPlxuICAgICAgICAgICAgICAgIDxwPkNhc2hmcmVlIGlzIGEgbmV4dCBnZW5lcmF0aW9uIHBheW1lbnQgZ2F0ZXdheSB0aGF0IGhlbHBzIEluZGlhbiBidXNpbmVzc2VzIGJvdGggY29sbGVjdCBhbmQgZGlzYnVyc2UgcGF5bWVudHMgdmlhIGFsbW9zdCAxMDAgcGF5bWVudCBtZXRob2RzIGluY2x1ZGluZyBWaXNhLCBNYXN0ZXJDYXJkLCBSdXBheSwgVVBJLCBJTVBTLCBORUZULCBQYXl0bSAmYW1wOyBvdGhlciB3YWxsZXRzLCBQYXkgTGF0ZXIgYW5kIHZhcmlvdXMgRU1JIG9wdGlvbnMuIDE1LDAwMCsgYnVzaW5lc3NlcyBoYXZlIHByb2Nlc3NlZCBtb3JlIHRoYW4gUnMgNjAwMCBDcm9yZXMgb2YgcGF5bWVudHMgdXNpbmcgQ2FzaGZyZWUgb2ZmZXJpbmdzLiBDYXNoZnJlZSBpcyBiYWNrZWQgYnkgU2lsaWNvbiBWYWxsZXkgaW52ZXN0b3IgWSBDb21iaW5hdG9yIGFuZCB3YXMgaW5jdWJhdGVkIGJ5IFBheXBhbC48L3A+ICBcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxvZ29zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dvY2FzaGZyZWUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvaWNvbnMvZmIucG5nXCIvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ29jYXNoZnJlZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi9pY29ucy9pbnN0YS5wbmdcIi8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvY2FzaGZyZWUvP29yaWdpbmFsU3ViZG9tYWluPWluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvaWNvbnMvbGlua2VkaW4ucG5nXCIvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZ29jYXNoZnJlZVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2ljb25zL3R3aXR0ZXIucG5nXCIvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17Mn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8aDM+Q29tcGFueTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3RtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2NhcmVlcnNcIj5DYXJlZXJzPC9hPjwvbGk+IFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9wYXJ0bmVyLXByb2dyYW1cIj5QYXJ0bmVyIHdpdGggdXM8L2E+PC9saT4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jb250YWN0LXVzXCI+Q29udGFjdCB1czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9wcmVzc2tpdFwiPlByZXNzIEtpdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGgzPkxlZ2FsPC9oMz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdG5jXCI+VGVybXMgYW5kIENvbmRpdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vY2FzaGZyZWUuY29tL3ByaXZhY3lwb2xpY3kuaHRtbFwiPlByaXZhY3kgUG9saWN5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDM+RGV2ZWxvcGVyczwvaDM+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3RtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmNhc2hmcmVlLmNvbS9kb2NzXCI+RG9jdW1lbnRhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jYXNoZnJlZVwiPkdpdGh1YjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17M30geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8aDM+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290bWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9wYXltZW50LWdhdGV3YXktaW5kaWFcIj5QYXltZW50IEdhdGV3YXk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYXV0by1jb2xsZWN0XCI+QXV0byBDb2xsZWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3BheW91dHNcIj5QYXlvdXRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21hcmtldHBsYWNlLXNldHRsZW1lbnRzXCI+TWFya2V0cGxhY2UgU2V0dGxlbWVudDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGgzPlNvbHV0aW9uczwvaDM+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3RtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Nob3BpZnktcGF5bWVudC1nYXRld2F5LWluZGlhXCI+U2hvcGlmeSBQYXltZW50IEdhdGV3YXk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvd29vY29tbWVyY2UtcGF5bWVudC1nYXRld2F5LWluZGlhXCI+V29vY29tbWVyY2UgUGF5bWVudCBHYXRld2F5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21hZ2VudG8tcGF5bWVudC1nYXRld2F5LWluZGlhXCI+TWFnZW50byBQYXltZW50IEdhdGV3YXk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2RvY3MuY2FzaGZyZWUuY29tL2RvY3Mvb3BlbmNhcnQvZ3VpZGUvXCI+T3BlbmNhcnQgUGF5bWVudCBHYXRld2F5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPXszfSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxoMz5Lbm93bGVkZ2UgQmFzZTwvaDM+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3RtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2hlbHAuY2FzaGZyZWUuY29tL1wiPkhlbHAgQ2VudGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FzaGZyZWUuY29tL3JvdW5kdGFibGVcIj5Db21tdW5pdHkgZm9yIFBheW1lbnQgRW50aHVzaWFzdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxoMz5CbG9nPC9oMz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2Jsb2cuY2FzaGZyZWUuY29tL2NvZC1yZWZ1bmRzLWNhc2hncmFtL1wiPkNoZWNrIHRoZSBmdXR1cmUgb2YgcmVmdW5kcyBpbiBJbmRpYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmxvZy5jYXNoZnJlZS5jb20vZW5ldC1oZGZjL1wiPlNtYXJ0ZXIgYWx0ZXJuYXRpdmUgdG8gRW5ldCBIREZDICZhbXA7IG90aGVyIGNvcnBvcmF0ZSBiYW5raW5nIHNvbHV0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmxvZy5jYXNoZnJlZS5jb20vaG93LXRvLWNob29zZS1iZXN0LXBheW1lbnQtZ2F0ZXdheS1pbmRpYS9cIj5Ib3cgdG8gY2hvb3NlIHRoZSBiZXN0IHBheW1lbnQgZ2F0ZXdheSBpbiBJbmRpYTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmxvZy5jYXNoZnJlZS5jb20vdXBpLWludGVncmF0aW9uLz91dG1fc291cmNlPXdlYnNpdGUmYW1wO3V0bV9tZWRpdW09Y29udGVudF9tJmFtcDt1dG1fY2FtcGFpZ249dXBpX2ludGVncmF0aW9uJmFtcDt1dG1fdGVybT11cGklMjBpbnRlZ3JhdGlvblwiPlVQSSBpbnRlZ3JhdGlvbiBndWlkZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vdG9tX2Zvb3RlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkNhc2hmcmVlIFBheW1lbnRzIEluZGlhIFByaXZhdGUgTGltaXRlZCDCqSAyMDE5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFpbl9mb290ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2Q0NGYwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNtcG55X2luZm8ge1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7XG5cbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgYTpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZm9vdG1lbnUge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdG1lbnUgbGl7XG4gICAgICAgICBwYWRkaW5nOjVweCAwO1xuICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1sb2dvcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtbG9nb3MgbGl7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1sb2dvcyBsaSBpbWd7XG4gICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib290b21fZm9vdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M4NTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=/Users/deepakkumar/Documents/cashfree-next-web/components/Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "react-bootstrap/NavDropdown");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Header = () => __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
  collapseOnSelect: true,
  expand: "lg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Brand, {
  href: "#home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default.a, {
  src: "/logo.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Toggle, {
  "aria-controls": "responsive-navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Collapse, {
  id: "responsive-navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "ml-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#features",
  className: "navi",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Products"), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
  title: "Resources",
  id: "collasible-nav-dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
  href: "#action/3.1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Preauthorization Guide"), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
  href: "#action/3.2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Merchant Discount Rate"), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
  href: "#action/3.3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "NACH Mandate"), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
  href: "#action/3.4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "API Banking")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#docs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Documentation"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#pricing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Pricing"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#support",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Support"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#career",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Careers")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#deets",
  className: "nav_signup_btn btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Create Account"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a.Link, {
  href: "#memes",
  className: "nav_login_btn btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Login")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "794805128",
  __self: undefined
}, ".dropdown-toggle.jsx-794805128:after{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NZLEFBR2UsYUFDZCIsImZpbGUiOiIvVXNlcnMvZGVlcGFra3VtYXIvRG9jdW1lbnRzL2Nhc2hmcmVlLW5leHQtd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcblxuXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGV4cGFuZD1cImxnXCI+XG4gIDxDb250YWluZXI+XG4gIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+PEltYWdlIHNyYz1cIi9sb2dvLnN2Z1wiLz48L05hdmJhci5CcmFuZD5cbiAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIC8+XG4gIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIj5cbiAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgIDxOYXYuTGluayBocmVmPVwiI2ZlYXR1cmVzXCIgY2xhc3NOYW1lPVwibmF2aVwiPlByb2R1Y3RzPC9OYXYuTGluaz5cbiAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIlJlc291cmNlc1wiIGlkPVwiY29sbGFzaWJsZS1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+UHJlYXV0aG9yaXphdGlvbiBHdWlkZTwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4yXCI+TWVyY2hhbnQgRGlzY291bnQgUmF0ZTwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4zXCI+TkFDSCBNYW5kYXRlPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIj5BUEkgQmFua2luZzwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNkb2NzXCI+RG9jdW1lbnRhdGlvbjwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNwcmljaW5nXCI+UHJpY2luZzwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNzdXBwb3J0XCI+U3VwcG9ydDwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNjYXJlZXJcIj5DYXJlZXJzPC9OYXYuTGluaz5cbiAgICA8L05hdj5cbiAgICA8TmF2PlxuICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjZGVldHNcIiBjbGFzc05hbWU9XCJuYXZfc2lnbnVwX2J0biBidG5cIj5DcmVhdGUgQWNjb3VudDwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj1cIiNtZW1lc1wiIGNsYXNzTmFtZT1cIm5hdl9sb2dpbl9idG4gYnRuXCI+XG4gICAgICAgTG9naW5cbiAgICAgIDwvTmF2Lkxpbms+XG4gICAgPC9OYXY+XG4gIDwvTmF2YmFyLkNvbGxhcHNlPlxuICA8L0NvbnRhaW5lcj5cbjxzdHlsZSBqc3g+e2Bcbi5kcm9wZG93bi10b2dnbGU6YWZ0ZXJ7XG4gIGRpc3BsYXk6bm9uZTtcbn1cbmB9PC9zdHlsZT5cbiAgICAgIFxuPC9OYXZiYXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/deepakkumar/Documents/cashfree-next-web/components/Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HomeFaqs.js":
/*!********************************!*\
  !*** ./components/HomeFaqs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Accordion */ "react-bootstrap/Accordion");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/components/HomeFaqs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomeFaqs = () => __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a, {
  defaultActiveKey: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Why should I choose Cashfree?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Cashfree is a full stack payments solution. It helps Indian businesses accept and send money and is used by 15000 businesses for vendor payouts, wage payouts, bulk refunds etc."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Cashfree is next generation payment gateway that is easy to integrate and supports instant refunds. Cashfree is also India\u2019s leading API banking platform that lets businesses send money round-the-clock and instantly to bank accounts and cards with a simple API that can be integrated with their product, instead of uploading complicated files on their corporate banking portal."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Cashfree also offers a split payment solution for marketplaces, a Bank Account Verification API and Auto Collect -- a virtual account solution to match inbound payments to customers."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Cashfree is integrated with major platforms like Shopify, Wix, Paypal, Amazon Pay, Google Pay and Ola."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "How is Cashfree payment gateway different from other payment gateways in India?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Cashfree offers the highest number of payment modes in India via a single integration -- including Pay Later, Paytm, Cardless EMI and even recurring subscription payments. Cashfree is the only payment gateway that offers instant refunds versus the industry standard of 5-7 working days -- this ensures Cashfree merchants are able to delight their customers while running business operations smoothly."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Can I start accepting international payments instantly?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Yes, it is possible to enable international payments on Cashfree's payment gateway -- talk to us and help us understand your business for quick activation. If you have a Paypal account, ", __jsx("a", {
  href: "https://blog.cashfree.com/paypal-integration/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "connect Paypal to Cashfree "), " and start offering Paypal as a checkout option on the payment page instantly."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "What is Payouts?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Payouts is a very simple and fast way for a business to make outward payments in bulk. For example, a marketplace can payout its vendors instantly, in an automated manner via an API or uploading a simple Excel file on the dashboard. Payouts is used by delivery companies to pay wages to their delivery partners instantly, lending companies for instant loan disbursals and e-commerce companies to process refunds quickly for cash on delivery orders."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "Can I get a tailored pricing for my business?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "Yes, we do provide tailored pricing depending on the nature of your business and volume of transactions. For more details, contact us or visit the Pricing page."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "How long does it take to approve my account?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, "Once your documents are submitted for review, you should get approved and hear from us in 24 hours. Please reach us over chat or email support@cashfree.com to request a quicker approval and we can try and expedite."))))), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
  as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Header,
  eventKey: "6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("h5", {
  className: "faq_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "How to get started on Cashfree?")), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
  eventKey: "6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default.a.Body, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("div", {
  className: "faq_content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "We do 100% paperless onboarding for merchants on Cashfree. Following are the steps for integration"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, " 1. ", __jsx("a", {
  href: "https://merchant.cashfree.com/merchant/sign-up",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, "Signup on Cashfree")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, "2. Update your business profile and upload scanned copies of business documents"), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, "3. Choose the product you are interested in. You can try out the products yourself. Login and switch to Test Account.   ", __jsx("a", {
  href: "https://docs.cashfree.com/docs/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, "Check integration documentation"), "."), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "4. Our Payment expert will call you in the next 24 hours, share your business requirement and we will help you pick the right set of features."), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, "5. Once account is verified, our Product team will help you with the integration."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "Refer ", __jsx("a", {
  href: "http://help.cashfree.com/en/collections/350039-how-to-get-started",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "here"), "  for quick account activation")))))));

/* harmony default export */ __webpack_exports__["default"] = (HomeFaqs);

/***/ }),

/***/ "./components/VideoModal.js":
/*!**********************************!*\
  !*** ./components/VideoModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/components/VideoModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function VideoModal() {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClose = () => setShow(false);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    show: show,
    onHide: handleClose,
    animation: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Modal heading")), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Woohoo, you're reading this text in a modal!"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "secondary",
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "primary",
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Save Changes"))));
}

/* harmony default export */ __webpack_exports__["default"] = (VideoModal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

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

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
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


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
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
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
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

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
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

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
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
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
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
        this.changeState(method, url, as);
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
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
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
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
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
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
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
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
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
          return new _Promise(resolve => {
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
    return new _Promise((resolve, reject) => {
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


      if (true) return; // @ts-ignore pathname is always defined

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

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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

    _Object$keys(groups).forEach(slugName => {
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
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
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
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
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "react-bootstrap/ButtonToolbar");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/custom-theme.scss */ "./styles/custom-theme.scss");
/* harmony import */ var _styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_theme_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_HomeFaqs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/HomeFaqs */ "./components/HomeFaqs.js");
/* harmony import */ var _components_VideoModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/VideoModal */ "./components/VideoModal.js");
var _jsxFileName = "/Users/deepakkumar/Documents/cashfree-next-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















function clients() {
  return [{
    src: '/clients/cred.png',
    alt: 'Cred'
  }, {
    src: '/clients/delhibery.png',
    alt: 'delhibery'
  }, {
    src: '/clients/dunzo.png',
    alt: 'dunzo'
  }, {
    src: '/clients/exxo.png',
    alt: 'exxo'
  }, {
    src: '/clients/xiaomi.png',
    alt: 'xiaomi'
  }, {
    src: '/clients/zomato.png',
    alt: 'zomato'
  }];
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 6
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 6
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768
    },
    items: 3
  },
  mobile: {
    breakpoint: {
      max: 767,
      min: 320
    },
    items: 2
  }
};

function BannerClients(props) {
  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_11___default.a, {
    responsive: responsive,
    arrows: false,
    infinite: false,
    centerMode: true,
    slidesToSlide: 1,
    autoPlay: props.deviceType !== "desktop" ? true : false,
    ssr: true,
    removeArrowOnDeviceType: ["desktop", "superLargeDesktop"],
    itemClass: "client_logo_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, clients().map(slide => __jsx("img", {
    className: "d-block w-100",
    src: slide.src,
    alt: slide.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })));
}

const Banner = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("section", {
  className: "hero_section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 6,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1785990090" + " " + "banner_cont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-1785990090" + " " + "banner_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "A Complete Payments Toolkit for India"), __jsx("p", {
  className: "jsx-1785990090",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "The fastest and easiest way to collect and disburse payments for growing businesses")), __jsx(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
  variant: "outline-light mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "Create Account"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
  variant: "primary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, "Contact Sales")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1785990090",
  __self: undefined
}, "h1.jsx-1785990090{color:white;}p.jsx-1785990090{font-size:22px;font-weight:500;padding:24px 0;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZtQixBQUcwQixBQUdJLFlBRmpCLEdBR2tCLGdCQUNELGVBQ0osWUFDYiIsImZpbGUiOiIvVXNlcnMvZGVlcGFra3VtYXIvRG9jdW1lbnRzL2Nhc2hmcmVlLW5leHQtd2ViL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvblRvb2xiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvblRvb2xiYXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLXRoZW1lLnNjc3MnO1xuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhvbWVGYXFzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZUZhcXMnXG5pbXBvcnQgVmlkZW9Nb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvTW9kYWwnXG5cblxuZnVuY3Rpb24gY2xpZW50cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHNyYzonL2NsaWVudHMvY3JlZC5wbmcnLCBhbHQ6J0NyZWQnIH0sXG4gICAgeyBzcmM6Jy9jbGllbnRzL2RlbGhpYmVyeS5wbmcnLCBhbHQ6J2RlbGhpYmVyeScgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvZHVuem8ucG5nJywgYWx0OidkdW56bycgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvZXh4by5wbmcnLCBhbHQ6J2V4eG8nIH0sXG4gICAgeyBzcmM6Jy9jbGllbnRzL3hpYW9taS5wbmcnLCBhbHQ6J3hpYW9taScgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvem9tYXRvLnBuZycsIGFsdDonem9tYXRvJyB9XG4gIF07XG59XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgaXRlbXM6IDYsXG4gIH0sXG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDYsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDc2OCB9LFxuICAgIGl0ZW1zOiAzLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNzY3LCBtaW46IDMyMCB9LFxuICAgIGl0ZW1zOiAyLFxuICB9LFxufTtcblxuZnVuY3Rpb24gQmFubmVyQ2xpZW50cyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbCByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgIGNlbnRlck1vZGU9e3RydWV9XG4gICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgIGF1dG9QbGF5PXtwcm9wcy5kZXZpY2VUeXBlICE9PSBcImRlc2t0b3BcIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgc3NyPXt0cnVlfVxuICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1wiZGVza3RvcFwiLCBcInN1cGVyTGFyZ2VEZXNrdG9wXCJdfVxuICAgICBpdGVtQ2xhc3M9XCJjbGllbnRfbG9nb19pdGVtXCJcbiAgICA+XG4gICAgICB7Y2xpZW50cygpLm1hcChzbGlkZSA9PiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxuICAgICAgICAgICAgICAgIHNyYz17c2xpZGUuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17c2xpZGUuYWx0fVxuICAgICAgICAgICAgICAgIC8+ICAgICAgICBcbiAgICAgICAgICAgICAgKSl9ICBcbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiAoXG4gIDw+XG4gICA8SGVhZGVyLz5cbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb19zZWN0aW9uXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezZ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyX2NvbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJhbm5lcl9oZWFkXCI+XG4gICAgICAgIEEgQ29tcGxldGUgUGF5bWVudHMgVG9vbGtpdCBmb3IgSW5kaWFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHA+VGhlIGZhc3Rlc3QgYW5kIGVhc2llc3Qgd2F5IHRvIGNvbGxlY3QgYW5kIGRpc2J1cnNlIHBheW1lbnRzIGZvciBncm93aW5nIGJ1c2luZXNzZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1saWdodCBtci0zXCI+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkNvbnRhY3QgU2FsZXM8L0J1dHRvbj5cbiAgICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJfc2xpZGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQ+T3VyIGN1c3RvbWVycyBpbmNsdWRlPC9oND5cbiAgICAgICAgICA8QmFubmVyQ2xpZW50cy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG4gIDwvPlxuKVxuXG5jb25zdCBDb21wZXRpdGlvbiA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uIGxpZ2h0X2JnXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlX2hlYWRcIj5cbiAgICAgICAgU3RheSBBaGVhZCBvZiBDb21wZXRpdGlvbiB3aXRoIENhc2hmcmVlXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9pbnN0YW50LXJlZnVuZHMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGlsZV9oZWFkXCI+SW5zdGFudCBSZWZ1bmQ8L2gzPlxuICAgICAgICA8cD5Gb3Igb25saW5lIHBheW1lbnRzIGFuZCBjYXNoIG9uIGRlbGl2ZXJ5IHBheW1lbnRzLiBJbmRlcGVuZGVudCBvZiBiYW5raW5nIGhvdXJzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9pbnN0YW50LWFjY291bnQtdmVyaWZpY2F0aW9uLnBuZ1wiIGZsdWlkLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPk9uLWRlbWFuZCBQYXlvdXRzPC9oMz5cbiAgICAgICAgPHA+RGlzYnVyc2UgYnVsayBwYXltZW50cyBpbnN0YW50bHkuIFNpbXBsZXIgYW5kIGZhc3RlciB0aGFuIGJhbmtzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9vbmRlbWFuZC1wYXlvdXRzLnBuZ1wiIGZsdWlkLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPkJhbmsgQWNjb3VudCBWZXJpZmljYXRpb248L2gzPlxuICAgICAgICA8cD5Lbm93IHlvdXIgY3VzdG9tZXI6IFZlcmlmeSBiYW5rIGFjY291bnQgYW5kIGhvbGRlciBuYW1lIGluc3RhbnRseSBiZWZvcmUgc2VuZGluZyBtb25leS48L3A+XG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfYm94IHRleHQtY2VudGVyIHctMTAwXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZHVjdHMvcmVjdXJyaW5nLXBheW1lbnRzLnBuZ1wiIGZsdWlkIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5SZWN1cnJpbmcgUGF5bWVudHM8L2gzPlxuICAgICAgICA8cD5VbmxvY2sgYnVzaW5lc3Mgb3Bwb3J0dW5pdGllcyB3aXRoIHN1YnNjcmlwdGlvbnMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuKVxuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvblwiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZV9oZWFkXCI+XG4gICAgICAgICAgIE91ciBQcm9kdWN0c1xuICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL3BheW1lbnQtZ2F0ZXdheS5wbmdcIiBmbHVpZC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5QYXltZW50IEdhdGV3YXk8L2gzPlxuICAgICAgICA8cD5Db2xsZWN0IGxvY2FsIGFuZCBpbnRlcm5hdGlvbmFsIHBheW1lbnRzIHdpdGggYSBzaW1wbGUgaW50ZWdyYXRpb24uIFJlY2VpdmUgbW9uZXkgd2l0aGluIDIgZGF5cy48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL3BheW91dHMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGlsZV9oZWFkXCI+UGF5b3V0czwvaDM+XG4gICAgICAgIDxwPlNlbmQgbW9uZXkgdG8gYW55IGJhbmsgYWNjb3VudCwgVVBJIGFkZHJlc3Mgb3IgUGF5VE0gd2FsbGV0IGJ5IHVwbG9hZGluZyBhIGZpbGUgb3IgdmlhIGFuIEFQSS48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL2F1dG8tY29sbGVjdC5wbmdcIiBmbHVpZC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5BdXRvIENvbGxlY3Q8L2gzPlxuICAgICAgICA8cD5BdXRvbWF0aWNhbGx5IHRyYWNrIGN1c3RvbWVyIHBheW1lbnRzIHdpdGggdmlydHVhbCBiYW5rIGFjY291bnRzLiBObyBtb3JlIG1hbnVhbCByZWNvbmNpbGlhdGlvbi48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL21hcmtldHBsYWNlLXNldHRsZW1lbnQucG5nXCIgZmx1aWQgLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPk1hcmtldHBsYWNlIFNldHRsZW1lbnRzPC9oMz5cbiAgICAgICAgPHA+QXV0b21hdGljYWxseSBzcGxpdCBjb21taXNzaW9ucyB3aXRoIHlvdXIgdmVuZG9ycyBhZnRlciBldmVyeSBwdXJjaGFzZS4gUnVuIGEgbWFya2V0cGxhY2Ugd2l0aCBlYXNlLjwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICBMZWFybiBNb3JlXG4gICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gIDwvc2VjdGlvbj47XG5jb25zdCBOZXdzU2VjdGlvbiA9ICgpID0+IDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBsaWdodF9iZ1wiPlxuPENvbnRhaW5lcj5cbiAgPFJvdz5cbiAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInBhZ2VfaGVhZFwiPlxuICAgICBDYXNoZnJlZSBpbiB0aGUgTmV3c1xuICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPC9Db2w+XG4gIDwvUm93PlxuICA8Um93PlxuICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19saW5rc1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5ld3NfbGlzdFwiPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28veWMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vdGMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vdGEucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vcGgucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vZXQucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28veXMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgXG48L0NvbnRhaW5lcj5cbjwvc2VjdGlvbj47XG5cblxuXG5jb25zdCBDdGFTZWN0aW9uID0gKCkgPT4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlX2hlYWRcIj5cbiAgICAgICAgVGFsayB0byBvdXIgUGF5bWVudCBFeHBlcnRzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPkhhdmUgYSBjb21wbGV4IHBheW1lbnQgZmxvdyBvciByZXF1aXJlIHBheW1lbnQgcmVsYXRlZCBhZHZpY2UgPzwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+O1xuXG5cbmNvbnN0IEZhcXMgPSAoKSA9PiA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb25cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17MTJ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2VfaGVhZFwiPlxuICAgICAgICBGQVFzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17MTJ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxc1wiPlxuICAgICAgICA8SG9tZUZhcXMvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPjtcblxuXG5cbmZ1bmN0aW9uIENhc2hncmFtSG9tZSgpIHsgIFxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBjYXNoZ3JhbV9zZWNcIj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtLTBcIj5cbiAgICAgICAgICA8Q29sIG1kPXs2fSB4cz17MTJ9ICBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzaGdyYW1fdmlkZW9cIj4gIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnX2ltZ1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9jZ19iZy5wbmdcIiBmbHVpZC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwbGF5X2J0blwiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PjxJbWFnZSBzcmM9XCIvaWNvbnMvcGxheWljb24ucG5nXCIgZmx1aWQvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9IHhzPXsxMn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2hncmFtX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMz5DYXNoZ3JhbSA8YnIvPiBGaXJzdCBvZiBpdHMga2luZCByZWZ1bmQgc29sdXRpb248L2gzPlxuICAgICAgICAgICAgPHA+Q2FzaGdyYW0gaXMgYSB3ZWJsaW5rIGJ1c2luZXNzZXMgY2FuIHNlbmQgdXNlcnMgdG8gY29sbGVjdCBhY2NvdW50IGRldGFpbHMgYW5kIG1ha2UgcGF5bWVudCBpbnN0YW50bHkuIDxiPiBFeHBlcmllbmNlIHRoZSBmdXR1cmUgb2YgcmVmdW5kcyBpbiBJbmRpYS48L2I+PC9wPiBcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jYXNoZnJlZS5jb20vY2FzaGdyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5MZWFybiBtb3JlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8VmlkZW9Nb2RhbCBzaG93PXtzaG93fS8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcblxufVxuXG5cblxuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMHxPcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwLDgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgIDwvSGVhZD5cbiAgICAgPEJhbm5lci8+XG4gICAgIDxDb21wZXRpdGlvbi8+XG4gICAgIDxQcm9kdWN0cy8+XG4gICAgIDxDYXNoZ3JhbUhvbWUvPlxuICAgICA8TmV3c1NlY3Rpb24vPlxuICAgICA8RmFxcy8+XG4gICAgIDxDdGFTZWN0aW9uLz5cbiAgICAgPEZvb3Rlci8+XG4gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgXG4gICAgIC5iYW5uZXJfc2xpZGUge1xuICAgICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9XG4gICAgIDwvc3R5bGU+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/deepakkumar/Documents/cashfree-next-web/pages/index.js */"))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("div", {
  className: "banner_slide text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "Our customers include"), __jsx(BannerClients, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
})))))));

const Competition = () => __jsx("section", {
  className: "page_section light_bg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("h2", {
  className: "page_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "Stay Ahead of Competition with Cashfree")))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, __jsx("div", {
  className: "product_box text-center w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/instant-refunds.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, "Instant Refund"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, "For online payments and cash on delivery payments. Independent of banking hours."))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("div", {
  className: "product_box text-center w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/instant-account-verification.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, "On-demand Payouts"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, "Disburse bulk payments instantly. Simpler and faster than banks."))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, __jsx("div", {
  className: "product_box text-center w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/ondemand-payouts.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, "Bank Account Verification"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, "Know your customer: Verify bank account and holder name instantly before sending money."))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx("div", {
  className: "product_box text-center w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/recurring-payments.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}, "Recurring Payments"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}, "Unlock business opportunities with subscriptions."))))));

const Products = () => __jsx("section", {
  className: "page_section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, __jsx("h1", {
  className: "page_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, "Our Products")))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, __jsx("div", {
  className: "main_product w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/payment-gateway.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, "Payment Gateway"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, "Collect local and international payments with a simple integration. Receive money within 2 days."), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}, "Learn More"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187
  },
  __self: undefined
}, __jsx("div", {
  className: "main_product w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/payouts.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}, "Payouts"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, "Send money to any bank account, UPI address or PayTM wallet by uploading a file or via an API."), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, "Learn More"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
}, __jsx("div", {
  className: "main_product w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/auto-collect.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, "Auto Collect"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
}, "Automatically track customer payments with virtual bank accounts. No more manual reconciliation."), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, "Learn More"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 3,
  sm: 4,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207
  },
  __self: undefined
}, __jsx("div", {
  className: "main_product w-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/products/marketplace-settlement.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}), __jsx("h3", {
  className: "tile_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, "Marketplace Settlements"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, "Automatically split commissions with your vendors after every purchase. Run a marketplace with ease."), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}, "Learn More"))))));

const NewsSection = () => __jsx("section", {
  className: "page_section light_bg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224
  },
  __self: undefined
}, __jsx("h1", {
  className: "page_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}, "Cashfree in the News")))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232
  },
  __self: undefined
}, __jsx("div", {
  className: "news_links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}, __jsx("ul", {
  className: "news_list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/yc.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236
  },
  __self: undefined
})), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/tc.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
})), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/ta.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  },
  __self: undefined
})), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/ph.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245
  },
  __self: undefined
})), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/et.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248
  },
  __self: undefined
})), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250
  },
  __self: undefined
}, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
  src: "/newslogo/ys.png",
  fluid: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251
  },
  __self: undefined
}))))))));

const CtaSection = () => __jsx("section", {
  className: "page_section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 267
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268
  },
  __self: undefined
}, __jsx("h2", {
  className: "page_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269
  },
  __self: undefined
}, "Talk to our Payment Experts"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 272
  },
  __self: undefined
}, "Have a complex payment flow or require payment related advice ?"), __jsx("a", {
  href: "#",
  className: "btn-primary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 273
  },
  __self: undefined
}, "Get In Touch"))))));

const Faqs = () => __jsx("section", {
  className: "page_section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283
  },
  __self: undefined
}, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
}, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286
  },
  __self: undefined
}, __jsx("div", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287
  },
  __self: undefined
}, __jsx("h2", {
  className: "page_head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288
  },
  __self: undefined
}, "FAQs")))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294
  },
  __self: undefined
}, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
  md: 12,
  xs: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295
  },
  __self: undefined
}, __jsx("div", {
  className: "faqs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296
  },
  __self: undefined
}, __jsx(_components_HomeFaqs__WEBPACK_IMPORTED_MODULE_15__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 297
  },
  __self: undefined
}))))));

function CashgramHome() {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return __jsx("section", {
    className: "page_section cashgram_sec",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: "m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 6,
    xs: 12,
    className: "p-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx("div", {
    className: "cashgram_video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx("div", {
    className: "bg_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
    src: "/images/cg_bg.png",
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  })), __jsx("a", {
    className: "play_btn",
    onClick: handleShow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
    src: "/icons/playicon.png",
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  })))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 6,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx("div", {
    className: "cashgram_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Cashgram ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), " First of its kind refund solution"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Cashgram is a weblink businesses can send users to collect account details and make payment instantly. ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, " Experience the future of refunds in India.")), __jsx("a", {
    href: "https://www.cashfree.com/cashgram",
    target: "_blank",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "Learn more")))), __jsx(_components_VideoModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    show: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }));
}

const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-3664128902",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343
  },
  __self: undefined
}, "Home"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-3664128902",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap",
  rel: "stylesheet",
  className: "jsx-3664128902",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 345
  },
  __self: undefined
})), __jsx(Banner, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347
  },
  __self: undefined
}), __jsx(Competition, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 348
  },
  __self: undefined
}), __jsx(Products, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349
  },
  __self: undefined
}), __jsx(CashgramHome, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350
  },
  __self: undefined
}), __jsx(NewsSection, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 351
  },
  __self: undefined
}), __jsx(Faqs, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 352
  },
  __self: undefined
}), __jsx(CtaSection, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 353
  },
  __self: undefined
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 354
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3664128902",
  __self: undefined
}, ".banner_slide.jsx-3664128902{margin:50px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWtrdW1hci9Eb2N1bWVudHMvY2FzaGZyZWUtbmV4dC13ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1dpQixBQUl1QixjQUNoQiIsImZpbGUiOiIvVXNlcnMvZGVlcGFra3VtYXIvRG9jdW1lbnRzL2Nhc2hmcmVlLW5leHQtd2ViL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvblRvb2xiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvblRvb2xiYXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLXRoZW1lLnNjc3MnO1xuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhvbWVGYXFzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZUZhcXMnXG5pbXBvcnQgVmlkZW9Nb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1ZpZGVvTW9kYWwnXG5cblxuZnVuY3Rpb24gY2xpZW50cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHNyYzonL2NsaWVudHMvY3JlZC5wbmcnLCBhbHQ6J0NyZWQnIH0sXG4gICAgeyBzcmM6Jy9jbGllbnRzL2RlbGhpYmVyeS5wbmcnLCBhbHQ6J2RlbGhpYmVyeScgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvZHVuem8ucG5nJywgYWx0OidkdW56bycgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvZXh4by5wbmcnLCBhbHQ6J2V4eG8nIH0sXG4gICAgeyBzcmM6Jy9jbGllbnRzL3hpYW9taS5wbmcnLCBhbHQ6J3hpYW9taScgfSxcbiAgICB7IHNyYzonL2NsaWVudHMvem9tYXRvLnBuZycsIGFsdDonem9tYXRvJyB9XG4gIF07XG59XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgaXRlbXM6IDYsXG4gIH0sXG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDYsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDc2OCB9LFxuICAgIGl0ZW1zOiAzLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNzY3LCBtaW46IDMyMCB9LFxuICAgIGl0ZW1zOiAyLFxuICB9LFxufTtcblxuZnVuY3Rpb24gQmFubmVyQ2xpZW50cyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbCByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICBpbmZpbml0ZT17ZmFsc2V9XG4gICAgIGNlbnRlck1vZGU9e3RydWV9XG4gICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgIGF1dG9QbGF5PXtwcm9wcy5kZXZpY2VUeXBlICE9PSBcImRlc2t0b3BcIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgc3NyPXt0cnVlfVxuICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1wiZGVza3RvcFwiLCBcInN1cGVyTGFyZ2VEZXNrdG9wXCJdfVxuICAgICBpdGVtQ2xhc3M9XCJjbGllbnRfbG9nb19pdGVtXCJcbiAgICA+XG4gICAgICB7Y2xpZW50cygpLm1hcChzbGlkZSA9PiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxuICAgICAgICAgICAgICAgIHNyYz17c2xpZGUuc3JjfVxuICAgICAgICAgICAgICAgIGFsdD17c2xpZGUuYWx0fVxuICAgICAgICAgICAgICAgIC8+ICAgICAgICBcbiAgICAgICAgICAgICAgKSl9ICBcbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiAoXG4gIDw+XG4gICA8SGVhZGVyLz5cbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVyb19zZWN0aW9uXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezZ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyX2NvbnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJhbm5lcl9oZWFkXCI+XG4gICAgICAgIEEgQ29tcGxldGUgUGF5bWVudHMgVG9vbGtpdCBmb3IgSW5kaWFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHA+VGhlIGZhc3Rlc3QgYW5kIGVhc2llc3Qgd2F5IHRvIGNvbGxlY3QgYW5kIGRpc2J1cnNlIHBheW1lbnRzIGZvciBncm93aW5nIGJ1c2luZXNzZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1saWdodCBtci0zXCI+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkNvbnRhY3QgU2FsZXM8L0J1dHRvbj5cbiAgICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJfc2xpZGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQ+T3VyIGN1c3RvbWVycyBpbmNsdWRlPC9oND5cbiAgICAgICAgICA8QmFubmVyQ2xpZW50cy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG4gIDwvPlxuKVxuXG5jb25zdCBDb21wZXRpdGlvbiA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uIGxpZ2h0X2JnXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlX2hlYWRcIj5cbiAgICAgICAgU3RheSBBaGVhZCBvZiBDb21wZXRpdGlvbiB3aXRoIENhc2hmcmVlXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9pbnN0YW50LXJlZnVuZHMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGlsZV9oZWFkXCI+SW5zdGFudCBSZWZ1bmQ8L2gzPlxuICAgICAgICA8cD5Gb3Igb25saW5lIHBheW1lbnRzIGFuZCBjYXNoIG9uIGRlbGl2ZXJ5IHBheW1lbnRzLiBJbmRlcGVuZGVudCBvZiBiYW5raW5nIGhvdXJzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9pbnN0YW50LWFjY291bnQtdmVyaWZpY2F0aW9uLnBuZ1wiIGZsdWlkLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPk9uLWRlbWFuZCBQYXlvdXRzPC9oMz5cbiAgICAgICAgPHA+RGlzYnVyc2UgYnVsayBwYXltZW50cyBpbnN0YW50bHkuIFNpbXBsZXIgYW5kIGZhc3RlciB0aGFuIGJhbmtzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXszfSAgc209ezR9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9ib3ggdGV4dC1jZW50ZXIgdy0xMDBcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9wcm9kdWN0cy9vbmRlbWFuZC1wYXlvdXRzLnBuZ1wiIGZsdWlkLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPkJhbmsgQWNjb3VudCBWZXJpZmljYXRpb248L2gzPlxuICAgICAgICA8cD5Lbm93IHlvdXIgY3VzdG9tZXI6IFZlcmlmeSBiYW5rIGFjY291bnQgYW5kIGhvbGRlciBuYW1lIGluc3RhbnRseSBiZWZvcmUgc2VuZGluZyBtb25leS48L3A+XG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfYm94IHRleHQtY2VudGVyIHctMTAwXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZHVjdHMvcmVjdXJyaW5nLXBheW1lbnRzLnBuZ1wiIGZsdWlkIC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5SZWN1cnJpbmcgUGF5bWVudHM8L2gzPlxuICAgICAgICA8cD5VbmxvY2sgYnVzaW5lc3Mgb3Bwb3J0dW5pdGllcyB3aXRoIHN1YnNjcmlwdGlvbnMuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuKVxuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvblwiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZV9oZWFkXCI+XG4gICAgICAgICAgIE91ciBQcm9kdWN0c1xuICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL3BheW1lbnQtZ2F0ZXdheS5wbmdcIiBmbHVpZC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5QYXltZW50IEdhdGV3YXk8L2gzPlxuICAgICAgICA8cD5Db2xsZWN0IGxvY2FsIGFuZCBpbnRlcm5hdGlvbmFsIHBheW1lbnRzIHdpdGggYSBzaW1wbGUgaW50ZWdyYXRpb24uIFJlY2VpdmUgbW9uZXkgd2l0aGluIDIgZGF5cy48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL3BheW91dHMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGlsZV9oZWFkXCI+UGF5b3V0czwvaDM+XG4gICAgICAgIDxwPlNlbmQgbW9uZXkgdG8gYW55IGJhbmsgYWNjb3VudCwgVVBJIGFkZHJlc3Mgb3IgUGF5VE0gd2FsbGV0IGJ5IHVwbG9hZGluZyBhIGZpbGUgb3IgdmlhIGFuIEFQSS48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL2F1dG8tY29sbGVjdC5wbmdcIiBmbHVpZC8+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aWxlX2hlYWRcIj5BdXRvIENvbGxlY3Q8L2gzPlxuICAgICAgICA8cD5BdXRvbWF0aWNhbGx5IHRyYWNrIGN1c3RvbWVyIHBheW1lbnRzIHdpdGggdmlydHVhbCBiYW5rIGFjY291bnRzLiBObyBtb3JlIG1hbnVhbCByZWNvbmNpbGlhdGlvbi48L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17M30gIHNtPXs0fSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcHJvZHVjdCB3LTEwMFwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Byb2R1Y3RzL21hcmtldHBsYWNlLXNldHRsZW1lbnQucG5nXCIgZmx1aWQgLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbGVfaGVhZFwiPk1hcmtldHBsYWNlIFNldHRsZW1lbnRzPC9oMz5cbiAgICAgICAgPHA+QXV0b21hdGljYWxseSBzcGxpdCBjb21taXNzaW9ucyB3aXRoIHlvdXIgdmVuZG9ycyBhZnRlciBldmVyeSBwdXJjaGFzZS4gUnVuIGEgbWFya2V0cGxhY2Ugd2l0aCBlYXNlLjwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICBMZWFybiBNb3JlXG4gICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gIDwvc2VjdGlvbj47XG5jb25zdCBOZXdzU2VjdGlvbiA9ICgpID0+IDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBsaWdodF9iZ1wiPlxuPENvbnRhaW5lcj5cbiAgPFJvdz5cbiAgICA8Q29sIG1kPXsxMn0geHM9ezEyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInBhZ2VfaGVhZFwiPlxuICAgICBDYXNoZnJlZSBpbiB0aGUgTmV3c1xuICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPC9Db2w+XG4gIDwvUm93PlxuICA8Um93PlxuICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19saW5rc1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5ld3NfbGlzdFwiPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28veWMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vdGMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vdGEucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vcGgucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28vZXQucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3c2xvZ28veXMucG5nXCIgZmx1aWQvPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG5cbiAgXG48L0NvbnRhaW5lcj5cbjwvc2VjdGlvbj47XG5cblxuXG5jb25zdCBDdGFTZWN0aW9uID0gKCkgPT4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZV9zZWN0aW9uXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9ezEyfSB4cz17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlX2hlYWRcIj5cbiAgICAgICAgVGFsayB0byBvdXIgUGF5bWVudCBFeHBlcnRzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPkhhdmUgYSBjb21wbGV4IHBheW1lbnQgZmxvdyBvciByZXF1aXJlIHBheW1lbnQgcmVsYXRlZCBhZHZpY2UgPzwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L3NlY3Rpb24+O1xuXG5cbmNvbnN0IEZhcXMgPSAoKSA9PiA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlX3NlY3Rpb25cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17MTJ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2VfaGVhZFwiPlxuICAgICAgICBGQVFzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17MTJ9IHhzPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxc1wiPlxuICAgICAgICA8SG9tZUZhcXMvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPjtcblxuXG5cbmZ1bmN0aW9uIENhc2hncmFtSG9tZSgpIHsgIFxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Vfc2VjdGlvbiBjYXNoZ3JhbV9zZWNcIj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtLTBcIj5cbiAgICAgICAgICA8Q29sIG1kPXs2fSB4cz17MTJ9ICBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzaGdyYW1fdmlkZW9cIj4gIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnX2ltZ1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9jZ19iZy5wbmdcIiBmbHVpZC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwbGF5X2J0blwiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PjxJbWFnZSBzcmM9XCIvaWNvbnMvcGxheWljb24ucG5nXCIgZmx1aWQvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9IHhzPXsxMn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2hncmFtX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMz5DYXNoZ3JhbSA8YnIvPiBGaXJzdCBvZiBpdHMga2luZCByZWZ1bmQgc29sdXRpb248L2gzPlxuICAgICAgICAgICAgPHA+Q2FzaGdyYW0gaXMgYSB3ZWJsaW5rIGJ1c2luZXNzZXMgY2FuIHNlbmQgdXNlcnMgdG8gY29sbGVjdCBhY2NvdW50IGRldGFpbHMgYW5kIG1ha2UgcGF5bWVudCBpbnN0YW50bHkuIDxiPiBFeHBlcmllbmNlIHRoZSBmdXR1cmUgb2YgcmVmdW5kcyBpbiBJbmRpYS48L2I+PC9wPiBcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jYXNoZnJlZS5jb20vY2FzaGdyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5MZWFybiBtb3JlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8VmlkZW9Nb2RhbCBzaG93PXtzaG93fS8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcblxufVxuXG5cblxuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMHxPcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwLDgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgIDwvSGVhZD5cbiAgICAgPEJhbm5lci8+XG4gICAgIDxDb21wZXRpdGlvbi8+XG4gICAgIDxQcm9kdWN0cy8+XG4gICAgIDxDYXNoZ3JhbUhvbWUvPlxuICAgICA8TmV3c1NlY3Rpb24vPlxuICAgICA8RmFxcy8+XG4gICAgIDxDdGFTZWN0aW9uLz5cbiAgICAgPEZvb3Rlci8+XG4gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgXG4gICAgIC5iYW5uZXJfc2xpZGUge1xuICAgICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9XG4gICAgIDwvc3R5bGU+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/deepakkumar/Documents/cashfree-next-web/pages/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/custom-theme.scss":
/*!**********************************!*\
  !*** ./styles/custom-theme.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deepakkumar/Documents/cashfree-next-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-bootstrap/Accordion":
/*!********************************************!*\
  !*** external "react-bootstrap/Accordion" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/ButtonToolbar":
/*!************************************************!*\
  !*** external "react-bootstrap/ButtonToolbar" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ButtonToolbar");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/NavDropdown":
/*!**********************************************!*\
  !*** external "react-bootstrap/NavDropdown" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/NavDropdown");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=index.js.map