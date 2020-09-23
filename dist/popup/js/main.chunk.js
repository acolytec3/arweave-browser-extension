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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/App.tsx";







const comboTheme = { ..._chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["theme"],
  ..._theme__WEBPACK_IMPORTED_MODULE_6__["default"]
};

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: comboTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["CSSReset"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/mainpage",
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_browserpage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      route: "pages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
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
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview */ "./src/components/preview.tsx");
/* harmony import */ var _transfers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transfers */ "./src/components/transfers.tsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ "./src/components/settings.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _transferModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transferModal */ "./src/components/transferModal.tsx");
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
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55.36 20.772a2.503 2.503 0 0 1-.174-.47 6.211 6.211 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.961 3.961 0 0 1-.817.255 4.37 4.37 0 0 1-.97.103 4.791 4.791 0 0 1-1.563-.245 3.711 3.711 0 0 1-1.215-.685 3.13 3.13 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1 .126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.909-1.112.402-.32.888-.572 1.46-.756.579-.19 1.24-.286 1.981-.286.667 0 1.287.082 1.858.245a4.465 4.465 0 0 1 1.501.725c.422.32.753.725.99 1.215.24.483.358 1.045.358 1.685v4.738c0 .592.038 1.082.113 1.47.074.388.183.722.326 1v.174h-2.88zm-2.706-1.99c.286 0 .551-.035.796-.103.245-.068.467-.156.664-.265.198-.11.368-.232.51-.368a2.06 2.06 0 0 0 .338-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.766.357-.197.15-.343.334-.439.552a1.667 1.667 0 0 0-.142.694c0 .381.132.697.398.95.272.251.68.377 1.225.377zM68.95 9.52c.43 0 .824.03 1.185.092.367.054.664.116.888.184l-.418 2.828a9.058 9.058 0 0 0-1.154-.194 9.132 9.132 0 0 0-1.113-.071c-.797 0-1.436.153-1.92.46-.476.305-.834.744-1.072 1.316v6.637h-2.839V9.724h2.645l.133 1.807a5.014 5.014 0 0 1 1.613-1.47 4.04 4.04 0 0 1 2.052-.541zM80.642 17.31l.96-7.586h2.603l-1.98 11.048h-2.492l-1.45-7.025-1.399 7.025h-2.491L72.412 9.724h2.593l.96 7.617 1.389-7.617h1.9l1.388 7.587zM91.496 20.977c-.851 0-1.624-.14-2.318-.42a5.527 5.527 0 0 1-1.787-1.133 5.1 5.1 0 0 1-1.154-1.694 5.507 5.507 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.354 5.354 0 0 1 1.113-1.807 5.02 5.02 0 0 1 1.695-1.174 5.376 5.376 0 0 1 2.134-.419c.797 0 1.505.133 2.124.398a4.307 4.307 0 0 1 1.583 1.103c.436.476.766 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205H88.72c.054.375.163.718.326 1.031.17.307.385.572.644.797.258.225.554.398.888.52.333.123.698.184 1.092.184.28 0 .555-.027.828-.081.279-.055.544-.133.796-.235.252-.109.487-.242.704-.398.218-.157.409-.34.572-.552l1.42 1.532c-.177.252-.409.5-.695.745-.279.239-.612.453-1 .644a6.53 6.53 0 0 1-1.277.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.06 2.06 0 0 0-.705.48 2.863 2.863 0 0 0-.5.755c-.136.293-.238.62-.306.98h4.656v-.224a2.684 2.684 0 0 0-.174-.847 1.939 1.939 0 0 0-.439-.684 1.947 1.947 0 0 0-.704-.46 2.413 2.413 0 0 0-.95-.174zM105.597 20.772a2.538 2.538 0 0 1-.174-.47 6.463 6.463 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.99 3.99 0 0 1-.817.255c-.3.069-.623.103-.97.103a4.798 4.798 0 0 1-1.563-.245 3.716 3.716 0 0 1-1.215-.685 3.128 3.128 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1.001.126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.91-1.112.401-.32.887-.572 1.459-.756.579-.19 1.239-.286 1.981-.286.667 0 1.287.082 1.859.245a4.465 4.465 0 0 1 1.5.725c.423.32.753.725.991 1.215.238.483.357 1.045.357 1.685v4.738c0 .592.038 1.082.113 1.47.075.388.183.722.326 1v.174h-2.879zm-2.706-1.99a2.974 2.974 0 0 0 1.46-.368 2.44 2.44 0 0 0 .511-.368 2.07 2.07 0 0 0 .337-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.765.357-.198.15-.344.334-.439.552a1.656 1.656 0 0 0-.143.694c0 .381.132.697.398.95.272.251.681.377 1.225.377zM115.951 17.495l.143.796.143-.766 2.43-7.8h2.961l-4.197 11.047h-2.665l-4.217-11.048h2.961l2.441 7.77zM129.174 20.977c-.851 0-1.624-.14-2.318-.42a5.521 5.521 0 0 1-1.787-1.133 5.095 5.095 0 0 1-1.154-1.694 5.517 5.517 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.37 5.37 0 0 1 1.113-1.807 5.03 5.03 0 0 1 1.695-1.174 5.379 5.379 0 0 1 2.134-.419c.797 0 1.504.133 2.124.398a4.312 4.312 0 0 1 1.583 1.103c.435.476.765 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205h-7.495c.055.375.164.718.327 1.031.17.307.385.572.643.797.259.225.555.398.889.52.333.123.697.184 1.092.184.279 0 .555-.027.827-.081a4.32 4.32 0 0 0 .797-.235 3.76 3.76 0 0 0 .704-.398c.218-.157.409-.34.572-.552l1.419 1.532c-.177.252-.408.5-.694.745a4.779 4.779 0 0 1-1.001.644 6.514 6.514 0 0 1-1.276.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.055 2.055 0 0 0-.705.48 2.87 2.87 0 0 0-.5.755c-.136.293-.239.62-.307.98h4.656v-.224a2.67 2.67 0 0 0-.173-.847 1.945 1.945 0 0 0-.439-.684 1.954 1.954 0 0 0-.705-.46 2.411 2.411 0 0 0-.949-.174z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 26,
      columnNumber: 4526
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.114 21.29a2.623 2.623 0 0 1-.182-.49 6.511 6.511 0 0 1-.128-.588 3.897 3.897 0 0 1-.566.502 4.097 4.097 0 0 1-.716.417 4.141 4.141 0 0 1-.854.267 4.574 4.574 0 0 1-1.015.107 5.01 5.01 0 0 1-1.634-.257 3.88 3.88 0 0 1-1.271-.716 3.274 3.274 0 0 1-.834-1.089c-.199-.427-.299-.89-.299-1.389 0-1.217.453-2.157 1.357-2.82.911-.669 2.268-1.004 4.07-1.004h1.655v-.683c0-.556-.181-.994-.545-1.314-.363-.328-.886-.491-1.57-.491-.605 0-1.047.131-1.324.395-.278.256-.417.602-.417 1.036h-2.97c0-.491.107-.958.321-1.4.22-.44.538-.829.95-1.163.42-.335.93-.599 1.528-.79.605-.2 1.296-.3 2.072-.3.698 0 1.346.085 1.944.256.606.171 1.129.424 1.57.759.442.334.787.758 1.037 1.27.249.506.373 1.094.373 1.763v4.956c0 .62.04 1.133.118 1.538.078.406.192.755.342 1.047v.182h-3.012zm-2.83-2.082c.298 0 .576-.036.832-.107.257-.071.488-.164.695-.278.206-.114.384-.242.534-.384.15-.15.267-.3.352-.449v-1.986H17.18c-.462 0-.858.046-1.185.138-.328.086-.595.21-.801.374a1.44 1.44 0 0 0-.46.577c-.1.22-.15.463-.15.726 0 .4.14.73.417.994.285.263.712.395 1.282.395z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4606
    }
  }));
};

const BrowserPage = route => {
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [drawer, setDrawer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(rootState => rootState);
  const [modal, openModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [arModal, setArModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  const headerLabel = {
    'transfers': 'Transfers',
    'pdfs': 'PDFs',
    'pages': 'Archived Pages'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.runtime.onMessage.addListener(message => {
      if (message.hasOwnProperty('success')) {
        toast({
          title: `Transaction submitted successfully.  You should see it shortly`,
          status: 'success',
          duration: 5000,
          position: 'bottom',
          isClosable: true
        });
      }

      if (message.hasOwnProperty('failure')) {
        toast({
          title: `Error submitting transaction.  Please check your connection and try again`,
          status: 'error',
          duration: 5000,
          position: 'bottom',
          isClosable: true
        });
      }
    });
  }, []);

  const handleClose = () => {
    onClose();
  };

  function closeTransferModal() {
    setArModal(false);
  }

  const NetworkModal = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: modal,
      onClose: () => openModal(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, "Network Info", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      borderTop: "1px",
      color: "black",
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#888",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, "Last Updated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#333",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, state.lastUpdated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#888",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, "Height"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#333",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, state.network.height))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, "Node"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, state.settings.gateway)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, "Response"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      defaultValue: JSON.stringify(state.network.response, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }))))));
  };

  const handleOpen = route => {
    if (history.location.pathname === "/mainpage/wallets/open") {
      onOpen();
      history.replace('transfers'); //Redirect main page to transfers if wallets is selected from popup
    }

    switch (route) {
      case 'wallets':
        setDrawer('wallets');
        onOpen();
        break;

      case 'settings':
        setDrawer('settings');
        onOpen();
        break;
    }

    return null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/preview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_preview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    overflow: "none",
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
      lineNumber: 131,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArweaveLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    pr: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/pdfs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
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
      lineNumber: 137,
      columnNumber: 45
    }
  }, "PDFs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
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
      lineNumber: 139,
      columnNumber: 46
    }
  }, "Pages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/transfers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
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
      lineNumber: 141,
      columnNumber: 50
    }
  }, "Transfers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaWallet"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    onClick: () => handleOpen('wallets'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Wallets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    leftIcon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCog"],
    bg: "white",
    color: "grey",
    border: "none",
    size: "lg",
    onClick: () => handleOpen('settings'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    bg: "#4a4a4a",
    px: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-around",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    justifySelf: "start",
    color: "white",
    fontSize: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, headerLabel[history.location.pathname.split('/')[2].toString()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    marginLeft: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, state.activeWallet ? state.activeWallet : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, state.activeWallet ? parseFloat(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance).toFixed(6) : 0, " AR ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    marginLeft: 2,
    color: "black",
    bg: "white",
    onClick: () => setArModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "Send AR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    bg: "#f6f6f7",
    w: "100%",
    h: "90%",
    px: 8,
    pt: 4,
    justifyContent: "space between",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pdfs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/transfers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transfers__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/wallets/open",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, () => handleOpen('wallets')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/preview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_preview__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    bg: "#434750",
    color: "white",
    cursor: "pointer",
    onClick: () => openModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    align: "center",
    px: "5px",
    py: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, state.network.connected ? "Connected" : "Disconnected"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCircle"], {
    color: state.network.connected ? "#86dc22" : "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transferModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: arModal,
    close: closeTransferModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NetworkModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    onClose: handleClose,
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["DrawerOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }), drawer === 'wallets' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wallets__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 35
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  })))));
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/pages.tsx";







const Pages = () => {
  const [pageModal, setPageOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    page: {} || null
  });
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(rootState => rootState);
  const [debugResponse, setRes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [debugLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getDebugInfo = async page => {
    setLoading(true);
    let txn = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${state.settings.gateway}/tx/${page.txnId}`);
    setRes(txn);
    setLoading(false);
  };

  const PageTable = () => {
    let pages = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].pages;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    }, pages && pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, "Time")), pages && pages.length > 0 && pages.map(page => {
      return PageRow(page);
    }));
  };

  const PageRow = page => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      background: "white",
      my: 1,
      columns: 4,
      cursor: "pointer",
      key: page.txnId + '1',
      onClick: () => {
        getDebugInfo(page);
        setPageOpen({
          open: true,
          page: page
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      overflow: "hidden",
      key: page.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, page.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      overflow: "hidden",
      key: page.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, page.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      key: page.fee,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, parseFloat(page.fee).toFixed(6).toLocaleString(), " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      key: page.timestamp,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }
    }, Date.now() - parseInt(page.timestamp), " ago"), page.status === 'pending' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      size: "md",
      color: "red.500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 38
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCheckDouble"], {
      color: "green",
      size: 24,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 78
      }
    })));
  };

  const PageModal = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: pageModal.open,
      onClose: () => setPageOpen({
        open: false,
        page: {}
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, "Archived Page", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      paddingTop: 3,
      borderTop: "1px",
      borderColor: "black",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, pageModal.page.txnId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, "Page Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, pageModal.page.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, "Page URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, pageModal.page.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Page Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, pageModal.page.size / 1000, " KB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, pageModal.page.fee, " AR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      borderBottom: "1px",
      marginBottom: "20px",
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, pageModal.page.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, pageModal.page.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, "Raw Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      isExternal: true,
      href: state.settings.gateway + '/tx/' + pageModal.page.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, "View raw transaction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }, "Block Explorers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      isExternal: true,
      href: 'https://viewblock.io/arweave/tx/' + pageModal.page.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, "View on ViewBlock")), state.settings.debug && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, "Debug Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      readOnly: true,
      fontSize: "xs",
      defaultValue: JSON.stringify(pageModal.page.debug, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, "Debug Response"), debugLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      alignSelf: "center",
      justifySelf: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 33
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 87
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      fontSize: "xs",
      readOnly: true,
      overflow: "auto",
      maxHeight: "30px",
      defaultValue: JSON.stringify(debugResponse, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 93
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      width: "99%",
      bg: "#333",
      color: "white",
      onClick: () => window.open(state.settings.gateway + '/' + pageModal.page.txnId, '_blank'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, "View Page"))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pages",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }))));
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/pdfs.tsx";








const Pdfs = () => {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(rootState => rootState);
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [fee, setFee] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [pdfModal, setPdfModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    pdf: {}
  });
  const [debugResponse, setRes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [debugLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.head(window.location.hash.substr(16).split('#')[0]).then(res => {
      let size = parseInt(res.headers["content-length"]);
      setSize(size.toString());
      return Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["getFee"])(size);
    }).then(res => {
      setFee(res);
      setOpen(true);
    }).catch(() => toast({
      title: 'Error',
      status: 'error',
      duration: 3000,
      position: 'bottom-left',
      description: 'Error getting fee, check your network connection and try again'
    }));
  }, []);

  const pdfSaver = async () => {
    let pdfDeets = {
      'url': window.location.hash.substr(16).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'source': null,
      'debug': {},
      'size': parseInt(size)
    }; //let res = await archivePdf(pdfDeets, password)

    chrome.runtime.sendMessage({
      action: 'archive.pdf',
      payload: {
        pdf: pdfDeets,
        password: password
      }
    });
    let res = false;
    res ? toast({
      title: 'PDF archived',
      status: 'success',
      duration: 3000,
      position: 'bottom-left'
    }) : toast({
      title: 'Error archiving PDF',
      status: 'error',
      duration: 3000,
      position: 'bottom-left'
    });
  };

  const getDebugInfo = async pdf => {
    setLoading(true);
    let txn = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${state.settings.gateway}/tx/${pdf.txnId}`);
    setRes(txn);
    setLoading(false);
  };

  const PdfModal = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: pdfModal.open,
      onClose: () => setPdfModal({
        open: false,
        pdf: {}
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, "Archived Page", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      paddingTop: 3,
      borderTop: "1px",
      borderColor: "black",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, pdfModal.pdf.txnId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "From"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "PDF URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, pdfModal.pdf.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
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
    }, "PDF Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, parseInt(size) / 1000, " KB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, pdfModal.pdf.fee, " AR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      borderBottom: "1px",
      marginBottom: "20px",
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, pdfModal.pdf.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, pdfModal.pdf.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 15
      }
    }, "Raw Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      isExternal: true,
      href: state.settings.gateway + '/tx/' + pdfModal.pdf.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, "View raw transaction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, "Block Explorers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      isExternal: true,
      href: 'https://viewblock.io/arweave/tx/' + pdfModal.pdf.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, "View on ViewBlock")), state.settings.debug && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, "Debug Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      readOnly: true,
      fontSize: "xs",
      defaultValue: JSON.stringify(pdfModal.pdf.debug, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, "Debug Response"), debugLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      alignSelf: "center",
      justifySelf: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 35
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 89
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      fontSize: "xs",
      readOnly: true,
      overflow: "auto",
      maxHeight: "30px",
      defaultValue: JSON.stringify(debugResponse, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 95
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      width: "99%",
      bg: "#333",
      color: "white",
      onClick: () => window.open(state.settings.gateway + '/' + pdfModal.pdf.txnId, '_blank'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }, "View PDF"))));
  };

  const PdfRow = pdf => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: 3,
      background: "white",
      my: 1,
      cursor: "pointer",
      key: pdf.txnId + '1',
      onClick: () => {
        getDebugInfo(pdf);
        setPdfModal({
          open: true,
          pdf: pdf
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      key: pdf.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }
    }, pdf.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      key: pdf.fee,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, parseFloat(pdf.fee).toFixed(6).toLocaleString(), " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      key: pdf.timestamp,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, Date.now() - parseInt(pdf.timestamp), " ago"), pdf.status === 'pending' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      size: "md",
      color: "red.500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 39
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCheckDouble"], {
      color: "green",
      size: 24,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 79
      }
    })));
  };

  const PdfTable = () => {
    let pdfs = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].pdfs;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 22
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
      columns: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }
    }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      mx: 5,
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, "Time")), pdfs && pdfs.map(pdf => {
      return PdfRow(pdf);
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    basename: "/mainpage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PdfTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PdfModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pdfs/",
    exact: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: "100%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, "Confirm Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, "From: ", state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, "Page URL: ", window.location.hash.substr(16).split('#')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, "Page Size: ", parseInt(size) / 1000, " kb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, "Fee: ", fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, "Balance after transaction: ", parseFloat(typeof balance === 'string' ? balance : '0') - parseFloat(fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 208,
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
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/popup.tsx";







const Popup = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(rootState => rootState);
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.activeWallet ? state.wallets.filter(wallet => wallet.address === state.activeWallet)[0] : {
    address: '',
    nickname: '',
    balance: ''
  });
  const {
    onCopy,
    hasCopied
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useClipboard"])(wallet.address);
  const [hover, setHover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [copied, setCopied] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["updateWallets"])();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.tabs.query({
      'active': true,
      'windowId': chrome.windows.WINDOW_ID_CURRENT
    }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'archive.page'
      });
    });
  }, []);

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
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, state.activeWallet === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: "400px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('wallets'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 51,
      columnNumber: 53
    }
  }, "Load Wallet"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    w: "400px",
    alignContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "4xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, parseFloat(wallet.balance).toFixed(3).toLocaleString(), " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    cursor: "pointer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => {
      onCopy();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, !hover && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 26
    }
  }, wallet.address), hover && !copied && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaClone"], {
    color: "grey",
    size: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 69
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 102
    }
  }, "Click to copy")), hover && copied && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaClone"], {
    color: "grey",
    size: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 68
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 101
    }
  }, "Copied!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, wallet.nickname), url.type !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])(url.type === 'page' ? 'preview/' : 'pdfs/' + url.url),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, "Archive this ", url.type) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    background: "gray",
    color: "white",
    fontSize: "xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Content type not currently supported"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    bg: "white",
    border: "none",
    as: "button",
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('pdfs'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFilePdf"], {
    color: "grey",
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 95
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 131
    }
  }, "PDFs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    bg: "white",
    border: "none",
    as: "button",
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('pages'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaRegFileAlt"], {
    color: "grey",
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 96
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 135
    }
  }, "Pages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    bg: "white",
    border: "none",
    as: "button",
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('transfers'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMoneyCheckAlt"], {
    color: "grey",
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 100
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 142
    }
  }, "Transfers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["PseudoBox"], {
    bg: "white",
    border: "none",
    as: "button",
    onClick: () => Object(_providers_browser__WEBPACK_IMPORTED_MODULE_3__["openTab"])('wallets/open'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaWallet"], {
    color: "grey",
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 103
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 138
    }
  }, "Wallets"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/components/preview.tsx":
/*!************************************!*\
  !*** ./src/components/preview.tsx ***!
  \************************************/
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
/* harmony import */ var _providers_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/browser */ "./src/providers/browser.ts");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/preview.tsx";









const ArweaveLogo = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "184",
    height: "32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55.36 20.772a2.503 2.503 0 0 1-.174-.47 6.211 6.211 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.961 3.961 0 0 1-.817.255 4.37 4.37 0 0 1-.97.103 4.791 4.791 0 0 1-1.563-.245 3.711 3.711 0 0 1-1.215-.685 3.13 3.13 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1 .126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.909-1.112.402-.32.888-.572 1.46-.756.579-.19 1.24-.286 1.981-.286.667 0 1.287.082 1.858.245a4.465 4.465 0 0 1 1.501.725c.422.32.753.725.99 1.215.24.483.358 1.045.358 1.685v4.738c0 .592.038 1.082.113 1.47.074.388.183.722.326 1v.174h-2.88zm-2.706-1.99c.286 0 .551-.035.796-.103.245-.068.467-.156.664-.265.198-.11.368-.232.51-.368a2.06 2.06 0 0 0 .338-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.766.357-.197.15-.343.334-.439.552a1.667 1.667 0 0 0-.142.694c0 .381.132.697.398.95.272.251.68.377 1.225.377zM68.95 9.52c.43 0 .824.03 1.185.092.367.054.664.116.888.184l-.418 2.828a9.058 9.058 0 0 0-1.154-.194 9.132 9.132 0 0 0-1.113-.071c-.797 0-1.436.153-1.92.46-.476.305-.834.744-1.072 1.316v6.637h-2.839V9.724h2.645l.133 1.807a5.014 5.014 0 0 1 1.613-1.47 4.04 4.04 0 0 1 2.052-.541zM80.642 17.31l.96-7.586h2.603l-1.98 11.048h-2.492l-1.45-7.025-1.399 7.025h-2.491L72.412 9.724h2.593l.96 7.617 1.389-7.617h1.9l1.388 7.587zM91.496 20.977c-.851 0-1.624-.14-2.318-.42a5.527 5.527 0 0 1-1.787-1.133 5.1 5.1 0 0 1-1.154-1.694 5.507 5.507 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.354 5.354 0 0 1 1.113-1.807 5.02 5.02 0 0 1 1.695-1.174 5.376 5.376 0 0 1 2.134-.419c.797 0 1.505.133 2.124.398a4.307 4.307 0 0 1 1.583 1.103c.436.476.766 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205H88.72c.054.375.163.718.326 1.031.17.307.385.572.644.797.258.225.554.398.888.52.333.123.698.184 1.092.184.28 0 .555-.027.828-.081.279-.055.544-.133.796-.235.252-.109.487-.242.704-.398.218-.157.409-.34.572-.552l1.42 1.532c-.177.252-.409.5-.695.745-.279.239-.612.453-1 .644a6.53 6.53 0 0 1-1.277.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.06 2.06 0 0 0-.705.48 2.863 2.863 0 0 0-.5.755c-.136.293-.238.62-.306.98h4.656v-.224a2.684 2.684 0 0 0-.174-.847 1.939 1.939 0 0 0-.439-.684 1.947 1.947 0 0 0-.704-.46 2.413 2.413 0 0 0-.95-.174zM105.597 20.772a2.538 2.538 0 0 1-.174-.47 6.463 6.463 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.99 3.99 0 0 1-.817.255c-.3.069-.623.103-.97.103a4.798 4.798 0 0 1-1.563-.245 3.716 3.716 0 0 1-1.215-.685 3.128 3.128 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1.001.126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.91-1.112.401-.32.887-.572 1.459-.756.579-.19 1.239-.286 1.981-.286.667 0 1.287.082 1.859.245a4.465 4.465 0 0 1 1.5.725c.423.32.753.725.991 1.215.238.483.357 1.045.357 1.685v4.738c0 .592.038 1.082.113 1.47.075.388.183.722.326 1v.174h-2.879zm-2.706-1.99a2.974 2.974 0 0 0 1.46-.368 2.44 2.44 0 0 0 .511-.368 2.07 2.07 0 0 0 .337-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.765.357-.198.15-.344.334-.439.552a1.656 1.656 0 0 0-.143.694c0 .381.132.697.398.95.272.251.681.377 1.225.377zM115.951 17.495l.143.796.143-.766 2.43-7.8h2.961l-4.197 11.047h-2.665l-4.217-11.048h2.961l2.441 7.77zM129.174 20.977c-.851 0-1.624-.14-2.318-.42a5.521 5.521 0 0 1-1.787-1.133 5.095 5.095 0 0 1-1.154-1.694 5.517 5.517 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.37 5.37 0 0 1 1.113-1.807 5.03 5.03 0 0 1 1.695-1.174 5.379 5.379 0 0 1 2.134-.419c.797 0 1.504.133 2.124.398a4.312 4.312 0 0 1 1.583 1.103c.435.476.765 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205h-7.495c.055.375.164.718.327 1.031.17.307.385.572.643.797.259.225.555.398.889.52.333.123.697.184 1.092.184.279 0 .555-.027.827-.081a4.32 4.32 0 0 0 .797-.235 3.76 3.76 0 0 0 .704-.398c.218-.157.409-.34.572-.552l1.419 1.532c-.177.252-.408.5-.694.745a4.779 4.779 0 0 1-1.001.644 6.514 6.514 0 0 1-1.276.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.055 2.055 0 0 0-.705.48 2.87 2.87 0 0 0-.5.755c-.136.293-.239.62-.307.98h4.656v-.224a2.67 2.67 0 0 0-.173-.847 1.945 1.945 0 0 0-.439-.684 1.954 1.954 0 0 0-.705-.46 2.411 2.411 0 0 0-.949-.174z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 21,
      columnNumber: 4526
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.114 21.29a2.623 2.623 0 0 1-.182-.49 6.511 6.511 0 0 1-.128-.588 3.897 3.897 0 0 1-.566.502 4.097 4.097 0 0 1-.716.417 4.141 4.141 0 0 1-.854.267 4.574 4.574 0 0 1-1.015.107 5.01 5.01 0 0 1-1.634-.257 3.88 3.88 0 0 1-1.271-.716 3.274 3.274 0 0 1-.834-1.089c-.199-.427-.299-.89-.299-1.389 0-1.217.453-2.157 1.357-2.82.911-.669 2.268-1.004 4.07-1.004h1.655v-.683c0-.556-.181-.994-.545-1.314-.363-.328-.886-.491-1.57-.491-.605 0-1.047.131-1.324.395-.278.256-.417.602-.417 1.036h-2.97c0-.491.107-.958.321-1.4.22-.44.538-.829.95-1.163.42-.335.93-.599 1.528-.79.605-.2 1.296-.3 2.072-.3.698 0 1.346.085 1.944.256.606.171 1.129.424 1.57.759.442.334.787.758 1.037 1.27.249.506.373 1.094.373 1.763v4.956c0 .62.04 1.133.118 1.538.078.406.192.755.342 1.047v.182h-3.012zm-2.83-2.082c.298 0 .576-.036.832-.107.257-.071.488-.164.695-.278.206-.114.384-.242.534-.384.15-.15.267-.3.352-.449v-1.986H17.18c-.462 0-.858.046-1.185.138-.328.086-.595.21-.801.374a1.44 1.44 0 0 0-.46.577c-.1.22-.15.463-.15.726 0 .4.14.73.417.994.285.263.712.395 1.282.395z",
    fill: "#222326",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4606
    }
  }));
};

var fee = '0';

const PagePreview = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(rootState => rootState);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const [source, setSource] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    size: 0,
    html: ''
  });
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const updateIncognito = async incognito => {
    setLoading(true);
    await setTimeout(() => {}, 1000);
    let payload = { ...state.settings,
      incognito: incognito
    };
    let res = await dispatch({
      type: 'UPDATE_SETTINGS',
      payload: payload
    });
  };

  const handleArchive = () => {
    setOpen(true);
    toast({
      title: "Warning",
      description: "Remember to make sure there's no personal information present, as this data will be archived permanently and publicly.",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: 'top'
    });
  };

  const pageSaver = async () => {
    let pageDeets = {
      'title': source.title,
      'url': state.pageSource.url,
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'size': source.size,
      'html': source.html
    };
    chrome.runtime.sendMessage({
      action: 'archive.page',
      payload: {
        page: pageDeets,
        password: password
      }
    });
  };

  const getIncognitoRequest = async () => {
    Object(_providers_browser__WEBPACK_IMPORTED_MODULE_7__["attachIncognitoFilter"])();
    let res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(state.pageSource.url, {
      withCredentials: false
    });

    try {
      let deets = await _providers_inline__WEBPACK_IMPORTED_MODULE_4__["default"].html(res.data, state.pageSource.url);

      if (deets.size > 3145728) {
        toast({
          title: '',
          status: 'info',
          duration: 3000,
          position: 'bottom-left',
          description: `Page over 3MB, loading with embedded images disabled`
        });
        deets = await _providers_inline__WEBPACK_IMPORTED_MODULE_4__["default"].html(state.pageSource.html, state.pageSource.url, {
          embed: false
        });
      }

      Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["getFee"])(deets.size).then(res => fee = res).catch(() => toast({
        title: 'Error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error getting fee, check your network connection and try again'
      }));
      setLoading(false);
      setSource(deets);
    } catch {
      toast({
        title: 'Processing error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error fetching page, please try again'
      });
      setLoading(false);
    }
  };

  const getRegularRequest = async () => {
    try {
      let deets = await _providers_inline__WEBPACK_IMPORTED_MODULE_4__["default"].html(state.pageSource.html, state.pageSource.url);

      if (deets.size > 3145728) {
        toast({
          title: '',
          status: 'info',
          duration: 3000,
          position: 'bottom-left',
          description: `Page over 3MB, loading with embedded images disabled`
        });
        deets = await _providers_inline__WEBPACK_IMPORTED_MODULE_4__["default"].html(state.pageSource.html, state.pageSource.url, {
          embed: false
        });
      }

      Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_5__["getFee"])(deets.size).then(res => fee = res).catch(() => toast({
        title: 'Error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error getting fee, check your network connection and try again'
      }));
      setLoading(false);
      setSource(deets);
    } catch {
      toast({
        title: 'Processing error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error fetching page, please try again'
      });
      setLoading(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    state.settings.incognito ? getIncognitoRequest() : getRegularRequest();
  }, [state.settings.incognito]);

  const LoadingModal = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isCentered: true,
      isOpen: loading,
      onClose: () => setLoading(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
      bg: "none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      isInline: true,
      bg: "none",
      align: "center",
      spacing: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      color: "white",
      size: "xl",
      speed: "0.75s",
      thickness: "6px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "white",
      fontWeight: "bold",
      fontSize: "xl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, "Fetching Assets and Repackaging"))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    position: "absolute",
    width: "100%",
    height: "100%",
    p: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    px: "5%",
    direction: "row",
    justifyContent: "space-between",
    paddingBottom: "5px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArweaveLogo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, source.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    alignContent: "center",
    alignSelf: "end",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    htmlFor: "incognito",
    color: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "Safe mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    id: "incognito",
    size: "md",
    color: "green",
    value: state.settings.incognito,
    isChecked: state.settings.incognito,
    onChange: evt => {
      state.settings.incognito ? updateIncognito(false) : updateIncognito(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    px: "auto",
    width: "100%",
    height: "90%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    sandbox: "",
    width: "98%",
    height: "90%",
    srcDoc: source ? source.html : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    width: "300px",
    position: "fixed",
    bottom: "20px",
    right: "40px",
    onClick: handleArchive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, "Archive this on Arweave"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    isCentered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Confirm Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, "From: ", state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, "Page Title: ", state.pageSource.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "Page URL: ", state.pageSource.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, "Page Size: ", source.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, "Fee: ", fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, "Balance after transaction: ", parseFloat(typeof balance === 'string' ? balance : '0') - parseFloat(fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter your encryption passphrase",
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function () {
      pageSaver();
      history.push('/pages');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, "Archive Page")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PagePreview);

/***/ }),

/***/ "./src/components/settings.tsx":
/*!*************************************!*\
  !*** ./src/components/settings.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/settings.tsx";





const Settings = () => {
  var _state$settings, _state$settings2, _state$settings3, _state$settings4, _state$settings5;

  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(rootState => rootState);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  const [debug, setDebug] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_state$settings = state.settings) === null || _state$settings === void 0 ? void 0 : _state$settings.debug);
  const [silo, setSilo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_state$settings2 = state.settings) === null || _state$settings2 === void 0 ? void 0 : _state$settings2.silo);
  const [loki, setLoki] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_state$settings3 = state.settings) === null || _state$settings3 === void 0 ? void 0 : _state$settings3.loki);
  const [gateway, setGateway] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(((_state$settings4 = state.settings) === null || _state$settings4 === void 0 ? void 0 : _state$settings4.gateway) || 'https://arweave.net:443');
  const [lokiGateway, setLokiGateway] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(((_state$settings5 = state.settings) === null || _state$settings5 === void 0 ? void 0 : _state$settings5.lokiGateway) || 'http://swyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo.lokiswyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo');
  const [validGateway, setValidGateway] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const updateSettings = () => {
    let payload = {
      debug: debug,
      silo: silo,
      loki: loki,
      gateway: gateway,
      lokiGateway: lokiGateway
    };
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: payload
    }).then(() => toast({
      title: 'Settings updated',
      status: 'success',
      duration: 3000,
      position: 'bottom-left'
    }));
  };

  const validateAddress = address => {
    let parts = address.split(':');

    if (parts.length !== 3) {
      setValidGateway(false);
      return;
    }

    if (parts[0] !== 'http' && parts[0] !== 'https') {
      console.log('protocol not valid');
      setValidGateway(false);
      return;
    }

    if (parseInt(parts[2]) <= 0 && parseInt(parts[2]) >= 65555) {
      setValidGateway(false);
      console.log('port not valid');
      return;
    }

    setValidGateway(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerHeader"], {
    borderBottomWidth: "1px",
    bg: "#434750",
    color: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    align: "center",
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerBody"], {
    bg: "#282d33",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    alignContent: "center",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "debug-toggle",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Debug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    id: "debug-toggle",
    size: "md",
    color: "green",
    value: debug,
    isChecked: debug,
    onChange: () => {
      setDebug(!debug);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "small",
    color: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Show debug information on transaction receipts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    bg: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    isInvalid: !validGateway,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "host",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    isInvalid: !validGateway,
    onBlur: () => validateAddress(gateway),
    value: gateway,
    onChange: evt => setGateway(evt.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Gateway address is invalid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormHelperText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Use an alternative host when connecting to Arweave. E.g. https://arweave.net:443 or http://159.65.213.43:1984")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    bg: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    align: "center",
    bg: "#ea9c00",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaExclamationTriangle"], {
    size: "12",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 55
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 104
    }
  }, "EXPERIMENTAL FEATURE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    alignContent: "center",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "silo-toggle",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Silo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    isDisabled: true,
    id: "silo-toggle",
    size: "md",
    color: "green",
    value: silo,
    isChecked: silo,
    onChange: () => setSilo(!silo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "small",
    color: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Enable clearnet Silo protocol using web+silo:// links."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    alignContent: "center",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "loki-toggle",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Silo+Loki"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    isDisabled: true,
    id: "loki-toggle",
    size: "md",
    color: "green",
    value: loki,
    isChecked: loki,
    onChange: () => setLoki(!loki),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "small",
    color: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Use Loki when accessing Silo data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    isDisabled: !loki || !silo,
    value: lokiGateway,
    onChange: evt => setLokiGateway(evt.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "small",
    color: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Set the Silo + Loki gateway host to use."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "small",
    color: "#999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "We do not collect any user data in this web extension, this is outlined in our "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "https://docs.arweave.org/info/wallets/privacy-policy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 133
    }
  }, "privacy policy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerFooter"], {
    bg: "#282d33",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isDisabled: !validGateway,
    onClick: updateSettings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Save Changes")));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/transferModal.tsx":
/*!******************************************!*\
  !*** ./src/components/transferModal.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _providers_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/wallets */ "./src/providers/wallets.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/transferModal.tsx";






const TransferModal = open => {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(open.open);
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(rootState => rootState);
  const [balance, setBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.activeWallet ? state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance : '');
  const [amount, setAmount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [fee, setFee] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [to, setToAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [next, setNext] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [validAmount, setValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateFee();
  }, [message]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setOpen(open.open);
  }, [open]);

  const updateFee = () => {
    let messageSize = message === '' ? 0 : new Blob([message]).size;
    Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_3__["getFee"])(messageSize).then(cost => setFee(cost)).catch(() => toast({
      title: 'Error',
      status: 'error',
      duration: 3000,
      position: 'bottom-left',
      description: 'Error getting fee, check your network connection and try again'
    }));
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
    chrome.runtime.sendMessage({
      action: 'send.transfer',
      payload: {
        transfer: transfterDeets,
        password: password
      }
    });
    setOpen(false);
  };

  const validateAmount = () => {
    amount === '' ? setValid(true) : setValid(parseFloat((parseFloat(balance) - parseFloat(fee) - parseFloat(amount)).toFixed(12)) >= 0);
  };

  const setMax = async () => {
    let balance = parseFloat(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance);
    let amount = balance - parseFloat(fee);
    setAmount(amount.toString());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: isOpen,
    onClose: () => setOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Send AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "From:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 14,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, state.activeWallet)), !next && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 31
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: to === state.activeWallet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    htmlFor: "to",
    fontSize: 12,
    color: "grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, "Send to Arweave wallet address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Send to Arweave wallet address",
    value: to,
    onChange: e => setToAddress(e.target.value),
    onBlur: updateFee,
    isInvalid: to === state.activeWallet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Recipient address cannot be the same as the sending address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !validAmount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Amount",
    value: amount,
    onChange: e => setAmount(e.target.value),
    onBlur: () => validateAmount(),
    isInvalid: !validAmount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"], {
    children: "AR",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, "Amount cannot be greater than wallet balance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    border: "none",
    onClick: setMax,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "Entire Wallet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Message (optional)",
    value: message,
    onChange: evt => setMessage(evt.target.value),
    onBlur: updateFee,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 14,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, fee, " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, "Total (including fee)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 14,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, (parseFloat(fee) + parseFloat(amount ? amount : '0')).toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: fee != '0' ? fee.split('.')[1].length : 1
  }), " AR"))), next && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 30
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "To:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 14,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, to)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    isInline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, "Sending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, amount, " AR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, fee, " AR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  }, (parseFloat(fee) + parseFloat(amount ? amount : '0')).toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: fee != '0' ? fee.split('.')[1].length : 1
  }), " AR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, "Balance after transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, (parseFloat(balance) - parseFloat(fee) - parseFloat(amount)).toString(), " AR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, "Enter password to confirm transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: evt => setPassword(evt.target.value),
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, !next ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isDisabled: !validAmount || to === '',
    onClick: () => setNext(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 26
    }
  }, "Next") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function () {
      initiateTransfer();
      history.push('/transfers');
      setOpen(false);
      open.close();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }, "Confirm and Send AR"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransferModal);

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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/transfers.tsx";






const Transfers = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(rootState => rootState);
  const [transferModal, setTransferModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    transfer: {}
  });
  const [debugResponse, setRes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [debugLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getDebugInfo = async transfer => {
    setLoading(true);
    let txn = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${state.settings.gateway}/tx/${transfer.txnId}`);
    setRes(txn);
    setLoading(false);
  };

  const TransferModal = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      isOpen: transferModal.open,
      onClose: () => setTransferModal({
        open: false,
        transfer: {}
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, "Archived Page", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalCloseButton"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      paddingTop: 3,
      borderTop: "1px",
      borderColor: "black",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, transferModal.transfer.txnId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, "From:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, state.activeWallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, "To:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, transferModal.transfer.to), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, transferModal.transfer.amount, " AR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, transferModal.transfer.fee, " AR"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      borderBottom: "1px",
      marginBottom: "20px",
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, transferModal.transfer.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, transferModal.transfer.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, "Raw Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      isExternal: true,
      href: state.settings.gateway + '/tx/' + transferModal.transfer.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, "View raw transaction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, "Block Explorers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      isExternal: true,
      href: 'https://viewblock.io/arweave/tx/' + transferModal.transfer.txnId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, "View on ViewBlock")), state.settings.debug && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, "Debug Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
      readOnly: true,
      fontSize: "xs",
      defaultValue: JSON.stringify(transferModal.transfer.debug, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, "Debug Response"), debugLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      alignSelf: "center",
      justifySelf: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Code"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 87
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
      fontSize: "xs",
      readOnly: true,
      overflow: "auto",
      maxHeight: "30px",
      defaultValue: JSON.stringify(debugResponse, null, '\t'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 93
      }
    })))))));
  };

  const TransfersTable = () => {
    let transfers = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].transfers;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }
    }, transfers != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 31
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      key: "url",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "Sendee Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      mx: 5,
      fontWeight: "bold",
      key: "fee",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, "Fee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontWeight: "bold",
      key: "timestamp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, "Time")), transfers.map(transfer => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
        columns: 4,
        key: transfer.txnId + '1',
        cursor: "pointer",
        onClick: () => {
          getDebugInfo(transfer);
          setTransferModal({
            open: true,
            transfer: transfer
          });
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.to,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, transfer.to), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        mx: 5,
        key: transfer.fee,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, parseFloat(transfer.fee).toFixed(6).toLocaleString(), " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.amount,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, parseFloat(transfer.amount).toFixed(6).toLocaleString(), " AR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        isInline: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: transfer.timestamp,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 33
        }
      }, Date.now() - parseInt(transfer.timestamp), " seconds ago"), transfer.status === 'pending' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
        size: "md",
        color: "red.500",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 52
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCheckDouble"], {
        color: "green",
        size: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 92
        }
      })));
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransfersTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransferModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }));
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _providers_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/csv */ "./src/providers/csv.ts");
var _jsxFileName = "/home/jim/development/ar2/src/popup/src/components/wallets.tsx";








const Wallets = () => {
  const state = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(rootState => rootState);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [wallet, updateWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [processingWallet, setProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [loadingWallet, setLoadingWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [modal, setModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [modalAddress, setModalAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loadingWalletAddress, setLoadingWalletAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useToast"])();

  const onDrop = async acceptedFiles => {
    setProcessing(true);
    setLoadingWallet(false);
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');

    reader.onerror = () => console.log('file reading has failed');

    reader.onload = async function (event) {
      if (acceptedFiles[0].type === "application/json") {
        try {
          let walletObject = JSON.parse(event.target.result);
          setLoadingWalletAddress(await Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["getAddress"])(walletObject));
          updateWallet(walletObject);
        } catch (err) {
          console.log('Invalid json in wallet file');
          setProcessing(false);
          toast({
            title: 'Error loading wallet',
            status: 'error',
            duration: 3000,
            position: 'bottom-left',
            description: 'Invalid JSON in wallet file'
          });
        }
      } else {
        console.log('Invalid file type');
        setProcessing(false);
        toast({
          title: 'Error loading wallet',
          status: 'error',
          duration: 3000,
          position: 'bottom-left',
          description: 'Invalid file type'
        });
      }
    };

    try {
      reader.readAsText(acceptedFiles[0]);
    } catch (err) {
      console.log('Invalid file type');
      setProcessing(false);
      toast({
        title: 'Error loading wallet',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Invalid file type'
      });
    }
  };

  const WalletTable = () => {
    let wallets = state.wallets;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, wallets.length > 0 && wallets.map(wallet => {
      return Wallet(wallet);
    }));
  };

  const Wallet = wallet => {
    const [nick, setNick] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(wallet.nickname);
    const [showEdit, setEdit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
      key: wallet.nickname + 'pseudo1',
      borderBottom: "1px",
      borderColor: "#44474c",
      overflow: "ellipsis",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    }, !showEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#f9f9f9",
      fontSize: "md",
      my: 2,
      key: wallet.nickname,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }
    }, wallet.nickname) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      padding: 0,
      bg: "#282d33",
      borderBottom: "1px",
      border: "white",
      color: "#f9f9f9",
      fontSize: "md",
      my: 2,
      key: wallet.nickname + '2',
      value: nick,
      onChange: evt => setNick(evt.target.value),
      onBlur: () => {
        setEdit(false);
        dispatch({
          type: 'UPDATE_NICKNAME',
          payload: {
            address: wallet.address,
            nickname: nick
          }
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#9da1ab",
      overflow: "hidden",
      key: wallet.address,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, wallet.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#6d727d",
      key: wallet.balance,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, parseFloat(wallet.balance).toFixed(5).toLocaleString(), " AR ", wallet.address === state.activeWallet && "- ACTIVE", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      isInline: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
      key: wallet.nickname + 'pseudo2',
      color: "white",
      as: "button",
      onClick: () => {
        dispatch({
          type: 'SET_ACTIVE',
          payload: {
            address: wallet.address
          }
        });
      },
      alignContent: "start",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCheck"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, "Use")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
      color: "white",
      as: "button",
      onClick: () => {
        dispatch({
          type: 'REMOVE_WALLET',
          payload: {
            address: wallet.address
          }
        });
      },
      alignContent: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrash"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, "Remove")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
      color: "white",
      as: "button",
      onClick: () => setEdit(true),
      alignContent: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaPen"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, "Rename")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], {
      color: "white",
      as: "button",
      onClick: () => {
        setModalAddress(wallet.address);
        setModal(true);
      },
      alignContent: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaKey"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, "Export Key"))));
  };

  const decryptWallet = async password => {
    let decryptedKey = await Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["decryptKey"])(password, modalAddress);
    const blob = new Blob([decryptedKey], {
      type: 'application/json'
    });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `arweave-keyfile-${modalAddress}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateWallet = async () => {
    let wallet = await Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["generateKey"])();
    const blob = new Blob([JSON.stringify(wallet.key, null, 2)], {
      type: 'application/json'
    });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `arweave-keyfile-${wallet.address}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateWallet(wallet.key);
    setLoadingWalletAddress(wallet.address);
    setProcessing(true);
  };

  const generateCSV = async () => {
    let wallet = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0];
    let file = await _providers_csv__WEBPACK_IMPORTED_MODULE_6__["default"].csv(wallet);
    const blob = new Blob([file], {
      type: 'text/csv'
    });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${wallet.address}-transactions.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadWallet = async (nickname, password) => {
    let res = await Object(_providers_wallets__WEBPACK_IMPORTED_MODULE_2__["addWallet"])(wallet, nickname, password);

    if (res === true) {
      toast({
        title: 'Success loading wallet',
        status: 'success',
        duration: 3000,
        position: 'bottom-left',
        description: `Address - ${loadingWalletAddress}`
      });
    } else {
      toast({
        title: 'Error loading wallet',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: `Address - ${loadingWalletAddress} already loaded`
      });
    }

    setProcessing(false);
  };

  const ExportModal = () => {
    const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      isOpen: modal,
      onClose: () => setModal(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalOverlay"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    }, "Export Wallet File", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalCloseButton"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      borderTop: "1px",
      color: "black",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#888",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 15
      }
    }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#333",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 15
      }
    }, modalAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Confirm your wallet password",
      type: "password",
      borderBottom: "1px",
      border: "#999",
      color: "#333",
      value: password,
      onChange: evt => setPassword(evt.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 15
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
      alignContent: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      alignSelf: "center",
      width: "100%",
      bg: "#282d33",
      color: "white",
      onClick: () => {
        decryptWallet(password);
        setPassword('');
        setModal(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }, "Download Wallet Keyfile"))));
  };

  const WalletLoader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: "200px",
      borderStyle: "dashed",
      borderWidth: "2px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDrop: onDrop,
      accept: "application/json",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }
    }, ({
      getRootProps,
      getInputProps
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getRootProps(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flexDirection: "row",
      padding: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: 14,
      textAlign: "center",
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 54
      }
    }, "Drop a wallet file or click to load wallet"))))));
  };

  const WalletProcessor = () => {
    const [nickname, setNickname] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      w: "200px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }
    }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }
    }, loadingWalletAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 9
      }
    }, "Enter a wallet nickname"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      bg: "#282d33",
      borderBottom: "1px",
      border: "white",
      color: "#f9f9f9",
      fontSize: "md",
      my: 2,
      placeholder: "Wallet name",
      value: nickname,
      onChange: evt => setNickname(evt.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      bg: "#282d33",
      borderBottom: "1px",
      border: "white",
      color: "#f9f9f9",
      fontSize: "md",
      my: 2,
      placeholder: "Set an encryption phrase",
      value: password,
      onChange: evt => setPassword(evt.target.value),
      type: "password",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }
    }, "This encryption passphrase keeps your key file secure, so you'll need it each time you send AR or archive a page. If you forget your passphrase you'll need to reimport this file again"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      direction: "column",
      position: "fixed",
      bottom: "10px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => loadWallet(nickname, password),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 11
      }
    }, "Continue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        setLoadingWallet(false);
        setProcessing(false);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 11
      }
    }, "Go Back")));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExportModal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerHeader"], {
    borderBottomWidth: "1px",
    bg: "#434750",
    color: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    isInline: true,
    align: "center",
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, "Wallets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaWallet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerBody"], {
    bg: "#282d33",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 9
    }
  }, state.activeWallet && !loadingWallet && !processingWallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletTable, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }), !loadingWallet && !processingWallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    direction: "column",
    position: "fixed",
    bottom: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setLoadingWallet(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, "Load Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: generateWallet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, "Create New Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: generateCSV,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, "Export Transactions")), loadingWallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletLoader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 31
    }
  }), processingWallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WalletProcessor, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }))));
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
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arweave */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arweave__WEBPACK_IMPORTED_MODULE_0__);


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
    let salt = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer('Memory hole.');
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
    return arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.concatBuffers([iv, encryptedData]);
  }
  /**
   * @param {ArrayBuffer} encryptedBuffer - ArrayBuffer of data to decrypt
   * @param {ArrayBuffer} passphraseBuffer - ArrayBuffer to use as key to decrypt with
   * 
   * @return {Promise<ArrayBuffer>} - Decrypted data
   */


  async decrypt(encryptedBuffer, passphraseBuffer) {
    let salt = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer('Memory hole.');
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
/*! exports provided: openTab, attachIncognitoFilter, removeIncognitoFilter, incognitoRequestFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachIncognitoFilter", function() { return attachIncognitoFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIncognitoFilter", function() { return removeIncognitoFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incognitoRequestFilter", function() { return incognitoRequestFilter; });
const openTab = async page => {
  chrome.tabs.create({
    url: chrome.extension.getURL('popup/index.html#mainpage/' + page)
  });
};
const attachIncognitoFilter = () => {
  chrome.webRequest.onBeforeSendHeaders.addListener(incognitoRequestFilter, {
    urls: ['<all_urls>']
  }, ['blocking', 'requestHeaders', 'extraHeaders']);
};
const removeIncognitoFilter = () => {
  chrome.webRequest.onBeforeSendHeaders.removeListener(incognitoRequestFilter);
};
const incognitoRequestFilter = request => {
  // Apply this filter to our requests only
  if (request.initiator != 'chrome-extension://' + chrome.runtime.id) {
    return;
  }

  if (request.url.match('^https?') == null) {
    return {
      cancel: true
    };
  }

  let headers = request.requestHeaders.filter(header => {
    return header.name == 'User-Agent';
  });
  headers.push({
    name: 'Accept',
    value: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0'
  });
  headers.push({
    name: 'Cache-Control',
    value: 'no-cache'
  });
  return {
    requestHeaders: headers
  };
};

/***/ }),

/***/ "./src/providers/csv.ts":
/*!******************************!*\
  !*** ./src/providers/csv.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arweave */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arweave__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  async csv(wallet) {
    let records = [];
    let arweave = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.init({});
    records.push('timestamp,type,from_address,id,status,to_address,amount_winston,amount_ar,fee_winston,fee_ar,url,title');

    let formatRow = fields => {
      let escaped = fields.map(field => {
        if (field == null || !field) {
          return `""`;
        }

        return `"${field.toString().replace(/"/g, '""')}"`;
      });
      return escaped.join(',');
    };

    if (wallet.pages) {
      wallet.pages.forEach(page => {
        records.push(formatRow([page.timestamp ? moment__WEBPACK_IMPORTED_MODULE_1___default()(parseInt(page.timestamp) * 1000).format() : null, 'archive', wallet.address, page.txnId, page.status, null, null, null, page.fee, arweave.ar.winstonToAr(page.fee, {
          decimals: 12,
          formatted: false
        }), page.url ? page.url : null, page.title ? page.title : null]));
      });
    }

    if (wallet.transfers) {
      wallet.transfers.forEach(transfer => {
        records.push(formatRow([transfer.timestamp ? moment__WEBPACK_IMPORTED_MODULE_1___default()(parseInt(transfer.timestamp) * 1000).format() : null, "transfer", wallet.address, transfer.txnId, transfer.status, transfer.to, transfer.amount, arweave.ar.winstonToAr(transfer.amount, {
          decimals: 12,
          formatted: false
        }), transfer.fee, arweave.ar.winstonToAr(transfer.fee, {
          decimals: 12,
          formatted: false
        }), null, null]));
      });
    }

    if (wallet.pdfs) {
      wallet.pdfs.forEach(pdf => {
        records.push(formatRow([pdf.timestamp ? moment__WEBPACK_IMPORTED_MODULE_1___default()(parseInt(pdf.timestamp) * 1000).format() : null, 'file', wallet.address, pdf.txnId, pdf.status, null, null, null, pdf.fee, arweave.ar.winstonToAr(pdf.fee, {
          decimals: 12,
          formatted: false
        }), pdf.url ? pdf.url : null, null]));
      });
    }

    return records.join('\n');
  }

});

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
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arweave */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(arweave__WEBPACK_IMPORTED_MODULE_1__);


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
      size: arweave__WEBPACK_IMPORTED_MODULE_1___default.a.utils.b64UrlEncode(arweave__WEBPACK_IMPORTED_MODULE_1___default.a.utils.bufferTob64(arweave__WEBPACK_IMPORTED_MODULE_1___default.a.utils.stringToBuffer(html))).length
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
/*! exports provided: unicodeToAscii, asciiToUnicode, decryptKey, generateKey, getAddress, addWallet, getFee, archivePage, archivePdf, sendTransfer, updateWallets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unicodeToAscii", function() { return unicodeToAscii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asciiToUnicode", function() { return asciiToUnicode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptKey", function() { return decryptKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKey", function() { return generateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWallet", function() { return addWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFee", function() { return getFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archivePage", function() { return archivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "archivePdf", function() { return archivePdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransfer", function() { return sendTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWallets", function() { return updateWallets; });
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arweave */ "../../node_modules/arweave/web/index.js");
/* harmony import */ var arweave__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arweave__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webext-redux */ "../../node_modules/webext-redux/lib/index.js");
/* harmony import */ var webext_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webext_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _arweaveCrypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arweaveCrypto */ "./src/providers/arweaveCrypto.ts");




const store = new webext_redux__WEBPACK_IMPORTED_MODULE_2__["Store"]();
const arweaveCrypto = new _arweaveCrypto__WEBPACK_IMPORTED_MODULE_3__["default"]();

const getArweaveInstance = async store => {
  //await store.ready()
  let state = await store.getState();
  let protocol = state.settings.gateway.split('://')[0];
  let port = state.settings.gateway.split(':')[2];
  let host = state.settings.gateway.split('//')[1].split(':')[0];
  return arweave__WEBPACK_IMPORTED_MODULE_0___default.a.init({
    host: host,
    port: port,
    protocol: protocol
  });
};

const unicodeToAscii = string => {
  return btoa(unescape(encodeURIComponent(string)));
};
const asciiToUnicode = string => {
  return decodeURIComponent(escape(atob(string)));
};
const decryptKey = async (password, address) => {
  await store.ready();
  let state = await store.getState();
  let passBuffer = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password));
  let encryptedKeyBuffer = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(state.wallets.filter(wallet => wallet.address === address)[0].key);
  let decryptedKeyBuffer = await arweaveCrypto.decrypt(encryptedKeyBuffer, passBuffer);
  let decryptedKey = asciiToUnicode(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.bufferTob64Url(new Uint8Array(decryptedKeyBuffer)));
  return decryptedKey;
};
const generateKey = async () => {
  let key = await arweaveCrypto.jwk();
  let arweave = await getArweaveInstance(store); //@ts-ignore

  let address = await arweave.wallets.jwkToAddress(key);
  return {
    address: address,
    key: key
  };
};
const getAddress = async key => {
  let arweave = await getArweaveInstance(store); //@ts-ignore

  let address = await arweave.wallets.jwkToAddress(key);
  return address;
};
const addWallet = async (key, nickname, password) => {
  let arweave = await getArweaveInstance(store);
  let address = await arweave.wallets.jwkToAddress(key);
  if (store.getState().wallets.filter(wallet => wallet.address === address).length !== 0) return false;
  let encryptedKey = arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.bufferTob64Url(await arweaveCrypto.encrypt(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(JSON.stringify(key))), arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password))));
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
  return true;
};
const getFee = async size => {
  await store.ready();
  let state = store.getState();
  let res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${state.settings.gateway}/price/${size}`);
  let arweave = await getArweaveInstance(store);
  return arweave.ar.winstonToAr(res.data);
};
const archivePage = async (page, password, store) => {
  try {
    //await store.ready()
    let state = store.getState();
    let arweave = await getArweaveInstance(store);
    let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
    let rawKey = await arweaveCrypto.decrypt(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
    let key = JSON.parse(asciiToUnicode(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.bufferTob64Url(new Uint8Array(rawKey))));
    let transaction = await arweave.createTransaction({
      data: page.html
    }, key);
    console.log(transaction);
    transaction.addTag('Content-Type', 'text/html');
    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
    await arweave.transactions.sign(transaction, key);
    const response = await arweave.transactions.post(transaction);
    console.log(response);
    chrome.runtime.sendMessage({
      success: 'page'
    });
    transaction.data = Uint8Array.from([]); //Remove data from transaction details being stored with wallet so we don't blow up the session storage limits

    let pageDetails = {
      'title': page.title,
      'url': page.url,
      'fee': page.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction,
      'size': page.size
    };
    let result = await store.dispatch({
      type: 'ARCHIVE_PAGE',
      payload: pageDetails
    });
  } catch (err) {
    console.log(`Error in archiving page - ${err}`);
    chrome.runtime.sendMessage({
      failure: 'page'
    });
    return false;
  }

  return true;
};
const archivePdf = async (pdf, password, store) => {
  try {
    let state = store.getState();
    let arweave = await getArweaveInstance(store);
    let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
    let rawKey = await arweaveCrypto.decrypt(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
    let key = JSON.parse(asciiToUnicode(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.bufferTob64Url(new Uint8Array(rawKey))));
    let transaction = await arweave.createTransaction({
      data: pdf.source
    }, key);
    transaction.addTag('Content-Type', 'application/pdf');
    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
    await arweave.transactions.sign(transaction, key);
    const response = await arweave.transactions.post(transaction);
    console.log(response);
    transaction.data = Uint8Array.from([]); //Remove data from transaction details being stored with wallet so we don't blow up the session storage limits

    chrome.runtime.sendMessage({
      success: 'pdf'
    });
    let pdfDetails = {
      'url': pdf.url,
      'fee': pdf.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction,
      'size': pdf.size
    };
    let result = await store.dispatch({
      type: 'ARCHIVE_PDF',
      payload: pdfDetails
    });
  } catch (err) {
    console.log(`Error in archiving pdf - ${err}`);
    chrome.runtime.sendMessage({
      failure: 'pdf'
    });
    return false;
  }

  return true;
};
const sendTransfer = async (transfer, password, store) => {
  try {
    let state = store.getState();
    let arweave = await getArweaveInstance(store);
    let encryptedKey = state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].key;
    let rawKey = await arweaveCrypto.decrypt(arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(encryptedKey), arweave__WEBPACK_IMPORTED_MODULE_0___default.a.utils.b64UrlToBuffer(unicodeToAscii(password)));
    let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))));
    let transaction = await arweave.createTransaction({
      target: transfer.to,
      data: transfer.message !== '' ? Buffer.from(transfer.message) : undefined,
      quantity: arweave.ar.arToWinston(transfer.amount)
    }, key);
    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0');
    await arweave.transactions.sign(transaction, key);
    const response = await arweave.transactions.post(transaction);
    console.log(response);
    chrome.runtime.sendMessage({
      success: 'transfer'
    });
    let transferDetails = {
      'to': transfer.to,
      'amount': transfer.amount,
      'message': transfer.message,
      'fee': transfer.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction
    };
    let result = await store.dispatch({
      type: 'INITIATE_TRANSFER',
      payload: transferDetails
    });
  } catch (err) {
    console.log(`Error sending tranfer - ${err}`);
    chrome.runtime.sendMessage({
      failure: 'transfer'
    });
    return false;
  }

  return true;
};
const updateWallets = async () => {
  await store.ready();
  let state = store.getState();

  if (Date.now() - state.lastUpdated < 120000) {
    return;
  } else {
    let updatedWallets = null;
    let connected = false;
    let netInfo = {};

    try {
      let arweave = await getArweaveInstance(store);
      updatedWallets = await Promise.all(state.wallets.map(async wallet => {
        var _wallet$pages, _wallet$pdfs, _wallet$transfers;

        let balance = arweave.ar.winstonToAr(await arweave.wallets.getBalance(wallet.address));
        netInfo = await arweave.api.get(state.settings.gateway);
        connected = netInfo.status === 200;
        let pages = wallet.pages ? await Promise.all((_wallet$pages = wallet.pages) === null || _wallet$pages === void 0 ? void 0 : _wallet$pages.map(async txn => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId);
            console.log('Got status and its ' + status.status);
            return status.status === 200 ? { ...txn,
              status: 'confirmed'
            } : txn;
          } else return txn;
        })) : undefined;
        let pdfs = wallet.pdfs ? await Promise.all((_wallet$pdfs = wallet.pdfs) === null || _wallet$pdfs === void 0 ? void 0 : _wallet$pdfs.map(async txn => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId);
            return status.status === 200 ? { ...txn,
              status: 'confirmed'
            } : txn;
          }

          return txn;
        })) : undefined;
        let transfers = wallet.transfers ? await Promise.all((_wallet$transfers = wallet.transfers) === null || _wallet$transfers === void 0 ? void 0 : _wallet$transfers.map(async txn => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId);
            return status.status === 200 ? { ...txn,
              status: 'confirmed'
            } : txn;
          }

          return txn;
        })) : undefined;
        console.log(pages);
        return {
          address: wallet.address,
          balance: balance,
          pages: pages,
          pdfs: pdfs,
          transfers: transfers,
          nickname: wallet.nickname,
          key: wallet.key
        };
      }));
    } catch (error) {
      console.log(`Error updating wallets - ${error}`);
    }

    let result = store.dispatch({
      type: 'UPDATE_WALLETS',
      payload: {
        wallets: updatedWallets ? updatedWallets : state.wallets,
        activeWallet: state.activeWallet,
        lastUpdated: Date.now(),
        network: {
          connected: connected,
          response: netInfo,
          height: netInfo ? netInfo.height : undefined
        },
        settings: state.settings
      }
    });
  }
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

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fonts: {
    body: '"Roboto", san-serif',
    heading: '"Roboto", san-serif',
    mono: '"Roboto", monospace'
  }
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jim/development/ar2/src/popup/src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map