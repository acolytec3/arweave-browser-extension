(this["webpackJsonppopup"] = this["webpackJsonppopup"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_browserpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/browserpage */ "./src/components/browserpage.tsx");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup */ "./src/components/popup.tsx");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/App.tsx";






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    render: () =>
    /*#__PURE__*/
    //@ts-ignore
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/mainpage",
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_browserpage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      route: "pages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/browserpage.tsx":
/*!****************************************!*\
  !*** ./src/components/browserpage.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallets */ "./src/components/wallets.tsx");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./src/components/pages.tsx");
/* harmony import */ var _pdfs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdfs */ "./src/components/pdfs.tsx");
/* harmony import */ var _transfers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfers */ "./src/components/transfers.tsx");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/browserpage.tsx";









const ArweaveLogo = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "184",
    height: "32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55.36 20.772a2.503 2.503 0 0 1-.174-.47 6.211 6.211 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.961 3.961 0 0 1-.817.255 4.37 4.37 0 0 1-.97.103 4.791 4.791 0 0 1-1.563-.245 3.711 3.711 0 0 1-1.215-.685 3.13 3.13 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1 .126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.909-1.112.402-.32.888-.572 1.46-.756.579-.19 1.24-.286 1.981-.286.667 0 1.287.082 1.858.245a4.465 4.465 0 0 1 1.501.725c.422.32.753.725.99 1.215.24.483.358 1.045.358 1.685v4.738c0 .592.038 1.082.113 1.47.074.388.183.722.326 1v.174h-2.88zm-2.706-1.99c.286 0 .551-.035.796-.103.245-.068.467-.156.664-.265.198-.11.368-.232.51-.368a2.06 2.06 0 0 0 .338-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.766.357-.197.15-.343.334-.439.552a1.667 1.667 0 0 0-.142.694c0 .381.132.697.398.95.272.251.68.377 1.225.377zM68.95 9.52c.43 0 .824.03 1.185.092.367.054.664.116.888.184l-.418 2.828a9.058 9.058 0 0 0-1.154-.194 9.132 9.132 0 0 0-1.113-.071c-.797 0-1.436.153-1.92.46-.476.305-.834.744-1.072 1.316v6.637h-2.839V9.724h2.645l.133 1.807a5.014 5.014 0 0 1 1.613-1.47 4.04 4.04 0 0 1 2.052-.541zM80.642 17.31l.96-7.586h2.603l-1.98 11.048h-2.492l-1.45-7.025-1.399 7.025h-2.491L72.412 9.724h2.593l.96 7.617 1.389-7.617h1.9l1.388 7.587zM91.496 20.977c-.851 0-1.624-.14-2.318-.42a5.527 5.527 0 0 1-1.787-1.133 5.1 5.1 0 0 1-1.154-1.694 5.507 5.507 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.354 5.354 0 0 1 1.113-1.807 5.02 5.02 0 0 1 1.695-1.174 5.376 5.376 0 0 1 2.134-.419c.797 0 1.505.133 2.124.398a4.307 4.307 0 0 1 1.583 1.103c.436.476.766 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205H88.72c.054.375.163.718.326 1.031.17.307.385.572.644.797.258.225.554.398.888.52.333.123.698.184 1.092.184.28 0 .555-.027.828-.081.279-.055.544-.133.796-.235.252-.109.487-.242.704-.398.218-.157.409-.34.572-.552l1.42 1.532c-.177.252-.409.5-.695.745-.279.239-.612.453-1 .644a6.53 6.53 0 0 1-1.277.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.06 2.06 0 0 0-.705.48 2.863 2.863 0 0 0-.5.755c-.136.293-.238.62-.306.98h4.656v-.224a2.684 2.684 0 0 0-.174-.847 1.939 1.939 0 0 0-.439-.684 1.947 1.947 0 0 0-.704-.46 2.413 2.413 0 0 0-.95-.174zM105.597 20.772a2.538 2.538 0 0 1-.174-.47 6.463 6.463 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.99 3.99 0 0 1-.817.255c-.3.069-.623.103-.97.103a4.798 4.798 0 0 1-1.563-.245 3.716 3.716 0 0 1-1.215-.685 3.128 3.128 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1.001.126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.91-1.112.401-.32.887-.572 1.459-.756.579-.19 1.239-.286 1.981-.286.667 0 1.287.082 1.859.245a4.465 4.465 0 0 1 1.5.725c.423.32.753.725.991 1.215.238.483.357 1.045.357 1.685v4.738c0 .592.038 1.082.113 1.47.075.388.183.722.326 1v.174h-2.879zm-2.706-1.99a2.974 2.974 0 0 0 1.46-.368 2.44 2.44 0 0 0 .511-.368 2.07 2.07 0 0 0 .337-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.765.357-.198.15-.344.334-.439.552a1.656 1.656 0 0 0-.143.694c0 .381.132.697.398.95.272.251.681.377 1.225.377zM115.951 17.495l.143.796.143-.766 2.43-7.8h2.961l-4.197 11.047h-2.665l-4.217-11.048h2.961l2.441 7.77zM129.174 20.977c-.851 0-1.624-.14-2.318-.42a5.521 5.521 0 0 1-1.787-1.133 5.095 5.095 0 0 1-1.154-1.694 5.517 5.517 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.37 5.37 0 0 1 1.113-1.807 5.03 5.03 0 0 1 1.695-1.174 5.379 5.379 0 0 1 2.134-.419c.797 0 1.504.133 2.124.398a4.312 4.312 0 0 1 1.583 1.103c.435.476.765 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205h-7.495c.055.375.164.718.327 1.031.17.307.385.572.643.797.259.225.555.398.889.52.333.123.697.184 1.092.184.279 0 .555-.027.827-.081a4.32 4.32 0 0 0 .797-.235 3.76 3.76 0 0 0 .704-.398c.218-.157.409-.34.572-.552l1.419 1.532c-.177.252-.408.5-.694.745a4.779 4.779 0 0 1-1.001.644 6.514 6.514 0 0 1-1.276.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.055 2.055 0 0 0-.705.48 2.87 2.87 0 0 0-.5.755c-.136.293-.239.62-.307.98h4.656v-.224a2.67 2.67 0 0 0-.173-.847 1.945 1.945 0 0 0-.439-.684 1.954 1.954 0 0 0-.705-.46 2.411 2.411 0 0 0-.949-.174z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 87
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "16.376",
    cy: "15.992",
    r: "14.664",
    stroke: "#222326",
    strokeWidth: "2.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4526
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.114 21.29a2.623 2.623 0 0 1-.182-.49 6.511 6.511 0 0 1-.128-.588 3.897 3.897 0 0 1-.566.502 4.097 4.097 0 0 1-.716.417 4.141 4.141 0 0 1-.854.267 4.574 4.574 0 0 1-1.015.107 5.01 5.01 0 0 1-1.634-.257 3.88 3.88 0 0 1-1.271-.716 3.274 3.274 0 0 1-.834-1.089c-.199-.427-.299-.89-.299-1.389 0-1.217.453-2.157 1.357-2.82.911-.669 2.268-1.004 4.07-1.004h1.655v-.683c0-.556-.181-.994-.545-1.314-.363-.328-.886-.491-1.57-.491-.605 0-1.047.131-1.324.395-.278.256-.417.602-.417 1.036h-2.97c0-.491.107-.958.321-1.4.22-.44.538-.829.95-1.163.42-.335.93-.599 1.528-.79.605-.2 1.296-.3 2.072-.3.698 0 1.346.085 1.944.256.606.171 1.129.424 1.57.759.442.334.787.758 1.037 1.27.249.506.373 1.094.373 1.763v4.956c0 .62.04 1.133.118 1.538.078.406.192.755.342 1.047v.182h-3.012zm-2.83-2.082c.298 0 .576-.036.832-.107.257-.071.488-.164.695-.278.206-.114.384-.242.534-.384.15-.15.267-.3.352-.449v-1.986H17.18c-.462 0-.858.046-1.185.138-.328.086-.595.21-.801.374a1.44 1.44 0 0 0-.46.577c-.1.22-.15.463-.15.726 0 .4.14.73.417.994.285.263.712.395 1.282.395z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4606
    }
  }));
};

const BrowserPage = route => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    w: "100%",
    px: 5,
    py: 4,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px",
    borderBottomColor: "gray.200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArweaveLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    pr: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/pdfs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFilePdf"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 43
    }
  }, "PDFs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegFileAlt"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 44
    }
  }, "Pages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/transfers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMoneyCheckAlt"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 48
    }
  }, "Transfers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/wallets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaWallet"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 46
    }
  }, "Wallets")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    w: "100%",
    px: 8,
    pt: 4,
    justifyContent: "space between",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pdfs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/transfers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transfers__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/wallets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wallets__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BrowserPage);

/***/ }),

/***/ "./src/components/pages.tsx":
/*!**********************************!*\
  !*** ./src/components/pages.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/inline */ "./src/providers/inline.js");
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/pages.tsx";







var pageSource = {
  title: '',
  size: 0,
  html: undefined
};
var fee = '0';

const PagePreview = () => {
  const [source, setSource] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(window.location.hash.substr(17).split('#')[0]).then(res => _providers_inline__WEBPACK_IMPORTED_MODULE_4__["default"].html(res.data, window.location.hash.substr(17).split('#')[0])).then(res => {
    pageSource = res;
    setSource(res.html);
  });
  Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["getFee"])(pageSource.size).then(res => fee = res);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "column",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 49
    }
  }, "Preview of ", window.location.hash.substr(17).split('#')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    height: "100%",
    width: "80%",
    srcDoc: source ? source : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }));
};

const Pages = () => {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(rootState => rootState);
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const pageSaver = () => {
    let pageDeets = {
      'title': pageSource.title,
      'url': window.location.hash.substr(17).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'html': pageSource.html
    };
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["archivePage"])(pageDeets, password);
  };

  const PageTable = () => {
    let pages = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].pages;
    console.log(pages);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, "Timestamp")), pages ? pages.map(page => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
        columns: 4,
        key: page.txnId + '1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: page.title,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, page.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: page.url,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, page.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: page.fee,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, page.fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: page.timestamp,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, page.timestamp));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, "You shouldn't be seeing this")));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pages",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pages/",
    exact: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "100%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PagePreview, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    width: "200px",
    onClick: () => setOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, " Archive Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Confirm Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "From: ", state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Page Title: ", pageSource.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Page URL: ", window.location.hash.substr(17).split('#')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "Page Size: ", pageSource.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Fee: ", fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Balance after transaction: ", parseFloat(typeof balance === 'string' ? balance : '0') - parseFloat(fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function () {
      pageSaver();
      history.push('/pages');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Archive Page"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./src/components/pdfs.tsx":
/*!*********************************!*\
  !*** ./src/components/pdfs.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/pdfs.tsx";







const Pdfs = () => {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(rootState => rootState);
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [source, setSource] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [fee, setFee] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(window.location.hash.substr(16));
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      url: window.location.hash.substr(16).split('#')[0],
      method: 'get',
      responseType: 'blob',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/pdf',
        mode: 'no-cors'
      }
    }).then(response => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');

      reader.onerror = () => console.log('file reading has failed');

      reader.onload = file => {
        setSource(file.target.result);
      };

      setSize(response.data.size);
      Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_4__["getFee"])(response.data.size).then(res => {
        setFee(res);
        setOpen(true);
      });
      reader.readAsArrayBuffer(response.data);
    });
  }, []);

  const pdfSaver = () => {
    let pdfDeets = {
      'url': window.location.hash.substr(16).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'source': source
    };
    console.log(source);
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_4__["archivePdf"])(pdfDeets, password);
  };

  const PdfTable = () => {
    console.log(state);
    let pdfs = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].pdfs;
    console.log(pdfs);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      mx: 5,
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, "Timestamp")), pdfs ? pdfs.map(pdf => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
        columns: 3,
        key: pdf.txnId + '1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: pdf.url,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, pdf.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        mx: 5,
        key: pdf.fee,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, pdf.fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        key: pdf.timestamp,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }, pdf.timestamp));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, "You shouldn't be seeing this")));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PdfTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs/",
    exact: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "100%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, "Confirm Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "From: ", state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Page URL: ", window.location.hash.substr(16).split('#')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Page Size: ", parseInt(size) / 1000, " kb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Fee: ", fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "Balance after transaction: ", parseFloat(typeof balance === 'string' ? balance : '0') - parseFloat(fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function () {
      pdfSaver();
      history.push('/pdfs');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "Confirm and Archive Pdf"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pdfs);

/***/ }),

/***/ "./src/components/popup.tsx":
/*!**********************************!*\
  !*** ./src/components/popup.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _providers_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/browser */ "./src/providers/browser.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/popup.tsx";






const Popup = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(rootState => rootState);
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.activeWallet ? state.wallets.filter(wallet => wallet.address === state.activeWallet)[0] : {
    address: '',
    nickname: '',
    balance: ''
  });

  const urlChecker = url => {
    if (url !== '') {
      if (url.substring(url.length - 3) === 'pdf') {
        setUrl({
          type: 'pdf',
          url: url
        });
      } else if (url.split(':')[0] === 'http' || url.split(':')[0] === 'https') {
        setUrl({
          type: 'page',
          url: url
        });
      }
    }
  };

  chrome.tabs.query({
    'active': true,
    'windowId': chrome.windows.WINDOW_ID_CURRENT
  }, tabs => tabs[0].url ? urlChecker(tabs[0].url) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, state.activeWallet === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: "400px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('wallets'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaWallet"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 53
    }
  }, "Load Wallet"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: "400px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "4xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, wallet.balance, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, wallet.address, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, wallet.nickname), url.type !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])(url.type === 'page' ? 'pages/' + url.url : 'pdfs/' + url.url),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, "Archive this ", url.type) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    background: "gray",
    color: "white",
    fontSize: "2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Archiving this page not supported"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('pdfs'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "PDFs",
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFilePdf"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 149
    }
  }, "PDFs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('pages'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "pages",
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaRegFileAlt"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 53
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 154
    }
  }, "Pages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('transfers'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "transfers",
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMoneyCheckAlt"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 57
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 165
    }
  }, "Transfers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('wallets'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "wallets",
    icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaWallet"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 55
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 154
    }
  }, "Wallets"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/components/transfers.tsx":
/*!**************************************!*\
  !*** ./src/components/transfers.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/transfers.tsx";





const Transfers = () => {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(rootState => rootState);
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
  const [amount, setAmount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [fee, setFee] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [to, setToAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const updateFee = () => {
    let messageSize = message === '' ? 0 : new Blob([message]).size;
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["getFee"])(messageSize).then(cost => {
      console.log('Fee is now ' + cost);
      setFee(cost);
    });
  };

  const initiateTransfer = async () => {
    let transfterDeets = {
      'to': to,
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'amount': amount,
      'message': message
    };
    console.log(amount);
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["sendTransfer"])(transfterDeets, password);
  };

  const TransfersTable = () => {
    console.log(state);
    let transfers = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].transfers;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, transfers != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, "Sendee Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mx: 5,
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, "Timestamp")), transfers.map(transfer => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
        columns: 4,
        key: transfer.txnId + '1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.to,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, transfer.to), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        mx: 5,
        key: transfer.fee,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, transfer.fee, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.amount,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, transfer.amount, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.timestamp,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, transfer.timestamp));
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 3,
    minWidth: "90%",
    bg: "blue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    alignSelf: "start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Transfers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    alignSelf: "end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, balance, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    alignSelf: "end",
    onClick: () => setOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Send AR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransfersTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Send AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "From: ", state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Send to Arweave wallet address",
    value: to,
    onChange: e => setToAddress(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Amount",
    value: amount,
    onChange: e => setAmount(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Message (optional)",
    value: message,
    onChange: evt => setMessage(evt.target.value),
    onBlur: updateFee,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "Fee: ", fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "Balance after transaction: ", parseFloat(typeof balance === 'string' ? balance : '0') - parseFloat(fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function () {
      initiateTransfer();
      setOpen(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "Next"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Transfers);

/***/ }),

/***/ "./src/components/wallets.tsx":
/*!************************************!*\
  !*** ./src/components/wallets.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/wallets.tsx";






const Wallets = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(rootState => rootState);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [wallet, updateWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [address, setAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.activeWallet);
  const [processing, setProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [nickname, setNickname] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onDrop = acceptedFiles => {
    setProcessing(true);
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');

    reader.onerror = () => console.log('file reading has failed');

    reader.onload = async function (event) {
      if (acceptedFiles[0].type === "application/json") {
        updateWallet(JSON.parse(event.target.result));
      } //Add error handling where invalid wallet

    };

    reader.readAsText(acceptedFiles[0]);
  };

  const setWalletName = evt => setNickname(evt.target.value);

  const updatePassword = evt => setPassword(evt.target.value);

  const WalletHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: 5,
      flexDirection: "row",
      alignContent: "start",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      mx: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, "Nickname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, "Balance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletTable, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }));
  };

  const WalletTable = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, state.wallets.length > 0 ? state.wallets.map(wallet => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
        columns: 5,
        key: wallet.nickname + '1',
        flexDirection: "row",
        alignContent: "start",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: wallet.address,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, wallet.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        mx: 4,
        key: wallet.nickname,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, wallet.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: wallet.balance,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, wallet.balance, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => {
          dispatch({
            type: 'REMOVE_WALLET',
            payload: {
              address: wallet.address
            }
          });
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Remove Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => {
          dispatch({
            type: 'SET_ACTIVE',
            payload: {
              address: wallet.address
            }
          });
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, "Use Wallet"));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, "No wallets"));
  };

  const loadWallet = async () => {
    //TODO: Figure out why State isn't updating after background ADD_WALLET dispatch
    let res = await Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["addWallet"])(wallet, nickname, password);
    setProcessing(false);
  };

  const WalletLoader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: "400px",
      borderStyle: "dashed",
      borderWidth: "2px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDrop: onDrop,
      accept: "application/json",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, ({
      getRootProps,
      getInputProps
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getRootProps(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flexDirection: "row",
      padding: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: 14,
      textAlign: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 54
      }
    }, "Drop a wallet file or click to load wallet"))))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, state.activeWallet && !processing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  }), !processing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletLoader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }), processing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: "400px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Enter a wallet nickname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: nickname,
    onChange: setWalletName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: password,
    onChange: updatePassword,
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: loadWallet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Load Wallet")));
};

/* harmony default export */ __webpack_exports__["default"] = (Wallets);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webext-redux */ "../../node_modules/webext-redux/lib/index.js");
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webext_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/index.tsx";







const store = new webext_redux__WEBPACK_IMPORTED_MODULE_6__["Store"]();
store.ready().then(() => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }))), document.getElementById('root'));
}); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/providers/arweaveCrypto.ts":
/*!****************************************!*\
  !*** ./src/providers/arweaveCrypto.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arweave/web */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arweave_web__WEBPACK_IMPORTED_MODULE_0__);


class ArweaveCrypto {
  constructor() {
    this.driver = void 0;
    this.crypto = void 0;
    this.config = void 0;
    this.driver = window.crypto.subtle;
    this.crypto = crypto;
    this.config = {
      keys: {
        subtle: {
          name: 'RSA-PSS',
          modulusLength: 4096,
          publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
          hash: {
            name: 'SHA-256'
          }
        }
      },
      digests: {
        hash: 'SHA-256'
      },
      signatures: {
        hash: 'SHA-256',
        subtle: {
          name: 'RSA-PSS',
          saltLength: 0
        }
      }
    };
  }
  /**
   * Generate a new JWK private key.
   * 
   * @return {Promise<Object>}
   */


  async jwk() {
    let key = await this.driver.exportKey('jwk', await this.key());
    return {
      'kty': key.kty,
      'e': key.e,
      'n': key.n,
      'd': key.d,
      'p': key.p,
      'q': key.q,
      'dp': key.dp,
      'dq': key.dq,
      'qi': key.qi
    };
  }
  /**
   * Generate a hash digest of the given input data.
   * 
   * @param {ArrayBuffer} data - The string to hash
   * 
   * @return {Promise<string>} - Base64 URL encoded string will be returned
   */


  async hash(data) {
    let digest = await this.driver.digest(this.config.digests.hash, data);
    return digest;
  }
  /**
   * 
   * @param {Object} jwk - JWK object
   * @param {ArrayBuffer} buffer - ArrayBuffer of contents to sign
   * 
   * @return {Promise<ArrayBuffer>}
   */


  async sign(jwk, buffer) {
    return this.driver.sign(this.config.signatures.subtle, await this.jwkToCryptoKey(jwk), buffer);
  }
  /**
   * Generate a new CryptoKey private key using an Arweave
   * compliant configuration.
   * 
   * @return {Promise<CryptoKey>}
   */


  async key() {
    let cryptokey = await this.driver.generateKey(this.config.keys.subtle, true, ['sign']); //@ts-ignore

    return cryptokey.privateKey;
  }
  /**
   * Convert a JWK object into a CryptoKey to use with subtle functions.
   * 
   * @param {Object} jwk - JWK object
   */


  async jwkToCryptoKey(jwk) {
    return this.driver.importKey('jwk', jwk, this.config.keys.subtle, false, ['sign']);
  }
  /**
   * 
   * @param {ArrayBuffer} dataBuffer - ArrayBuffer of data to encrypt
   * @param {ArrayBuffer} passphraseBuffer - ArrayBuffer to use as key to encrypt with
   * 
   * @return {Promise<ArrayBuffer>} - Encrypted data
   */


  async encrypt(dataBuffer, passphraseBuffer) {
    let salt = arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer('Memory hole.');
    let iterations = 100000;
    let hash = 'SHA-256';
    let iv = new Uint8Array(16);
    this.crypto.getRandomValues(iv);
    let rawKey = await this.driver.importKey('raw', passphraseBuffer, {
      name: 'PBKDF2'
    }, false, ['deriveKey']);
    let key = await this.driver.deriveKey({
      name: 'PBKDF2',
      salt: salt,
      iterations: iterations,
      hash: hash
    }, rawKey, {
      name: 'AES-CBC',
      length: 256
    }, false, ['encrypt', 'decrypt']);
    let encryptedData = await this.driver.encrypt({
      name: 'AES-CBC',
      iv: iv
    }, key, dataBuffer);
    return arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.concatBuffers([iv, encryptedData]);
  }
  /**
   * @param {ArrayBuffer} encryptedBuffer - ArrayBuffer of data to decrypt
   * @param {ArrayBuffer} passphraseBuffer - ArrayBuffer to use as key to decrypt with
   * 
   * @return {Promise<ArrayBuffer>} - Decrypted data
   */


  async decrypt(encryptedBuffer, passphraseBuffer) {
    let salt = arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer('Memory hole.');
    let iter = 100000;
    let hash = 'SHA-256';
    let iv = encryptedBuffer.slice(0, 16);
    let dataBuffer = encryptedBuffer.slice(16);
    let rawKey = await this.driver.importKey('raw', passphraseBuffer, {
      name: 'PBKDF2'
    }, false, ['deriveKey']);
    let key = await this.driver.deriveKey({
      name: 'PBKDF2',
      salt: salt,
      iterations: iter,
      hash: hash
    }, rawKey, {
      name: 'AES-CBC',
      length: 256
    }, false, ['encrypt', 'decrypt']);
    let data = this.driver.decrypt({
      name: 'AES-CBC',
      iv: iv
    }, key, dataBuffer);
    return data;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ArweaveCrypto);

/***/ }),

/***/ "./src/providers/browser.ts":
/*!**********************************!*\
  !*** ./src/providers/browser.ts ***!
  \**********************************/
/*! exports provided: openTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const openTab = async page => {
  let url = window.location.hash.substr(17);
  let source = (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url)).data;
  localStorage.setItem('pageSource', source);
  console.log(source);
  chrome.tabs.create({
    url: chrome.extension.getURL('popup/index.html#mainpage/' + page)
  });
};

/***/ }),

/***/ "./src/providers/inline.js":
/*!*********************************!*\
  !*** ./src/providers/inline.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arweave/web */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(arweave_web__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  async html(htmlString, url, features = {
    embed: true
  }) {
    let parser = new DOMParser();
    let document = parser.parseFromString(htmlString, 'text/html');
    let styleSheets = document.querySelectorAll('link[rel="stylesheet"],link[rel="preload"][as="style"]');
    let scripts = document.querySelectorAll('script,noscript');
    let images = document.querySelectorAll('img');
    let iframes = document.querySelectorAll('iframe');
    let rebase = document.createElement('base');
    rebase.setAttribute('href', url);
    document.head.appendChild(rebase);
    let promises = [];
    let replacements = {};
    let encodedImages = {};
    styleSheets.forEach(styleSheet => {
      let href = styleSheet.getAttribute('href');
      let absoluteURL = new URL(href, url);
      promises.push(new Promise(resolve => {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.create().get(absoluteURL).then(response => {
          replacements[href] = response.data;
          resolve(response.data);
        }).catch(err => {
          resolve();
        });
      }));
    });
    images.forEach(image => {
      if (features.embed == true) {
        image.removeAttribute('sizes');
        image.removeAttribute('srcset');
        image.removeAttribute('data-src');
      }

      let src = image.getAttribute('src');
      let absoluteURL = new URL(src, url);

      if (features.embed == false) {
        image.setAttribute('src', absoluteURL);
        return;
      }

      promises.push(new Promise(resolve => {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.create().get(absoluteURL, {
          responseType: 'blob',
          timeout: 10000
        }).then(response => {
          var reader = new FileReader();
          reader.readAsDataURL(response.data);

          reader.onload = function () {
            encodedImages[src] = reader.result;
            resolve();
          };
        }).catch(err => {
          resolve();
        });
      }));
    });
    await Promise.all(promises);
    scripts.forEach(script => {
      script.remove();
    });
    iframes.forEach(iframe => {
      iframe.remove();
    });
    styleSheets.forEach(styleSheet => {
      let href = styleSheet.getAttribute('href');
      let styleTag = document.createElement('style');
      styleTag.textContent = replacements[href];
      styleSheet.replaceWith(styleTag);
    });

    if (features.embed == true) {
      images.forEach(image => {
        let src = image.getAttribute('src');
        let replace = encodedImages[src];

        if (typeof replace != 'string') {
          return;
        }

        image.setAttribute('src', replace);
      });
    }

    let html = this.documentToString(document);
    return {
      title: document.title,
      html: html,
      size: arweave_web__WEBPACK_IMPORTED_MODULE_1___default.a.utils.b64UrlEncode(arweave_web__WEBPACK_IMPORTED_MODULE_1___default.a.utils.bufferTob64(arweave_web__WEBPACK_IMPORTED_MODULE_1___default.a.utils.stringToBuffer(html))).length
    };
  },

  documentToString(domDocument) {
    return domDocument.all[0].outerHTML;
  }

});

/***/ }),

/***/ "./src/providers/wallets.ts":
/*!**********************************!*\
  !*** ./src/providers/wallets.ts ***!
  \**********************************/
/*! exports provided: addWallet, getFee, archivePage, archivePdf, sendTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWallet", function() { return addWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFee", function() { return getFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archivePage", function() { return archivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archivePdf", function() { return archivePdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransfer", function() { return sendTransfer; });
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arweave/web */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arweave_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webext-redux */ "../../node_modules/webext-redux/lib/index.js");
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webext_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _arweaveCrypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arweaveCrypto */ "./src/providers/arweaveCrypto.ts");




const arweave = arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  //TODO: Import node address from settings
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});
const store = new webext_redux__WEBPACK_IMPORTED_MODULE_2__["Store"]();
const arweaveCrypto = new _arweaveCrypto__WEBPACK_IMPORTED_MODULE_3__["default"]();

function unicodeToAscii(string) {
  return btoa(unescape(encodeURIComponent(string)));
}

function asciiToUnicode(string) {
  return decodeURIComponent(escape(atob(string)));
}

const addWallet = async (key, nickname, password) => {
  let address = await arweave.wallets.jwkToAddress(key);
  let encryptedKey = arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.bufferTob64Url(await arweaveCrypto.encrypt(arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(JSON.stringify(key))), arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password))));
  let balance = await arweave.wallets.getBalance(address);
  await store.ready();
  let result = await store.dispatch({
    type: 'ADD_WALLET',
    payload: {
      key: encryptedKey,
      address: address,
      nickname: nickname,
      balance: arweave.ar.winstonToAr(balance)
    }
  });
  return result;
};
const getFee = async size => {
  //TODO: Change out URL for node from settings
  let res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://arweave.net/price/${size}`);
  return arweave.ar.winstonToAr(res.data);
};
const archivePage = async (page, password) => {
  await store.ready();
  let state = store.getState();
  let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
  let rawKey = await arweaveCrypto.decrypt(arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
  let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))));
  console.log(key);
  let transaction = await arweave.createTransaction({
    data: page.html
  }, key);
  console.log(transaction);
  transaction.addTag('Content-Type', 'text/html');
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
  await arweave.transactions.sign(transaction, key);
  let pageDetails = {
    'title': page.title,
    'url': page.url,
    'fee': page.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString()
  };
  await store.ready();
  let result = await store.dispatch({
    type: 'ARCHIVE_PAGE',
    payload: pageDetails
  });
  /*const response = await arweave.transactions.post(transaction);
  console.log(response.status);
  if (response.status === 200) {
    localStorage.setItem('transaction', JSON.stringify({ 'title': page.title, 'fee': transaction.reward }))
  }*/
};
const archivePdf = async (pdf, password) => {
  await store.ready();
  let state = store.getState();
  let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
  let rawKey = await arweaveCrypto.decrypt(arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
  let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))));
  let transaction = await arweave.createTransaction({
    data: pdf.source
  }, key);
  console.log(transaction);
  console.log(pdf);
  transaction.addTag('Content-Type', 'application/pdf');
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
  await arweave.transactions.sign(transaction, key);
  let pdfDetails = {
    'url': pdf.url,
    'fee': pdf.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString()
  };
  let result = await store.dispatch({
    type: 'ARCHIVE_PDF',
    payload: pdfDetails
  }); //  const response = await arweave.transactions.post(transaction);
  // console.log(response.status); 
};
const sendTransfer = async (transfer, password) => {
  await store.ready();
  let state = store.getState();
  let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
  let rawKey = await arweaveCrypto.decrypt(arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave_web__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
  let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))));
  let transaction = await arweave.createTransaction({
    target: transfer.to,
    data: transfer.message !== '' ? Buffer.from(transfer.message) : undefined,
    quantity: arweave.ar.arToWinston(transfer.amount)
  }, key);
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
  await arweave.transactions.sign(transaction, key);
  let transferDetails = {
    'to': transfer.to,
    'amount': transfer.amount,
    'message': transfer.message,
    'fee': transfer.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString()
  };
  let result = await store.dispatch({
    type: 'INITIATE_TRANSFER',
    payload: transferDetails
  }); //  const response = await arweave.transactions.post(transaction);
  // console.log(response.status); 
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jim/development/ar2/src/popup/src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map