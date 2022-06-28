/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Tangerine.ttf */ "./src/styles/Tangerine.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins.ttf */ "./src/styles/Poppins.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Tangerine;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: Poppins;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: Poppins, sans-serif;\n  color: #fefefe;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: bottom center;\n  background-size: cover;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  gap: 50px;\n  grid-template-rows: repeat(2, min-content);\n}\n#container .header {\n  display: grid;\n  background-color: rgba(3, 3, 3, 0.8);\n  grid-row: 1/-1;\n  padding: 10px;\n  gap: 5px;\n  color: white;\n  place-items: center;\n}\n#container .header .title {\n  padding: 0;\n  margin: 0;\n  font-size: 5rem;\n  font-family: Tangerine, cursive;\n  font-weight: 700;\n}\n#container .header .navbar {\n  display: flex;\n  justify-content: space-evenly;\n  font-family: sans-serif;\n  width: 100%;\n}\n#container .header .navbar .btn {\n  transition: 0.3s ease;\n  font-size: 1.5rem;\n  font-weight: 300;\n  padding: 8px 20px;\n  color: #fefefe;\n  border: none;\n  background: none;\n}\n#container .header .navbar .btn:hover {\n  cursor: pointer;\n  transform: translateY(-8%);\n}\n#container .header .navbar .active {\n  border-bottom: 1px solid #fefefe;\n}\n#container .content {\n  display: grid;\n  justify-content: center;\n  padding: 10px 0px;\n}\n#container .content .homeDiv {\n  height: fit-content;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  background-color: rgba(3, 3, 3, 0.8);\n  padding: 50px;\n  border-radius: 10px;\n  text-align: center;\n}\n#container .content .homeDiv .chefImg {\n  width: 400px;\n}\n#container .content .homeDiv .titlecontent {\n  font-family: Tangerine, sans-serif;\n  font-size: 4rem;\n}\n#container .content .homeDiv p {\n  font-size: 1.7rem;\n}\n#container .content .menuDiv {\n  height: fit-content;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  background-color: rgba(3, 3, 3, 0.8);\n  padding: 10px;\n  border-radius: 10px;\n  gap: 10px;\n}\n#container .content .menuDiv .grid-item {\n  padding: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  display: grid;\n  grid-template-rows: 5fr 1fr;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n#container .content .menuDiv .grid-item img {\n  width: 200px;\n}\n#container .content .menuDiv .grid-item p {\n  margin: 0;\n  padding: 0;\n}\n#container .content .menuDiv .grid-item:hover {\n  cursor: pointer;\n  background-color: rgba(50, 50, 50, 0.3);\n}\n#container .content .contactDiv {\n  background-color: rgba(3, 3, 3, 0.8);\n  height: fit-content;\n  padding: 20px 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n#container .content .contactDiv div {\n  display: flex;\n  justify-items: center;\n  gap: 5px;\n}\n#container .content .contactDiv div img {\n  filter: invert(44%) sepia(62%) saturate(2282%) hue-rotate(191deg) brightness(100%) contrast(103%);\n}\n#container .content .contactDiv p {\n  padding: 0;\n  margin: 0;\n}\n#container .content .contactDiv .mapImg {\n  width: 600px;\n}\n\n@media screen and (max-width: 850px) {\n  body {\n    background-position: top right;\n    background-size: cover;\n  }\n  #container .header .navbar .btn {\n    font-size: 1.2rem;\n  }\n  #container .header .title {\n    font-size: 4rem;\n  }\n  #container .content {\n    padding: 0;\n  }\n  #container .content .homeDiv {\n    grid-template-columns: 1fr;\n    padding: 10px;\n  }\n  #container .content .homeDiv .chefImg {\n    width: 300px;\n  }\n  #container .content .homeDiv .homeDivRight {\n    grid-row: 1;\n  }\n  #container .content .homeDiv p {\n    font-size: 1.25rem;\n  }\n  #container .content .menuDiv {\n    grid-template-columns: auto;\n    padding: 20px;\n  }\n  #container .content .menuDiv .grid-item {\n    padding: 30px;\n  }\n  #container .content .contactDiv .mapImg {\n    width: 350px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAGA;EACI,sBAAA;EACA,4CAAA;AAFJ;AAKA;EACI,oBAAA;EACA,4CAAA;AAHJ;AAOA;EACI,SAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EACA,cApBQ;EAqBR,mDAAA;EACA,kCAAA;EACA,sBAAA;EACA,4BAAA;EACA,4BAAA;AALJ;;AAQA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,0CAAA;AALJ;AAMI;EACI,aAAA;EACA,oCApCQ;EAqCR,cAAA;EACA,aAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;AAJR;AAMQ;EACI,UAAA;EACA,SAAA;EACA,eAAA;EACA,+BAAA;EACA,gBAAA;AAJZ;AAMQ;EACI,aAAA;EACA,6BAAA;EACA,uBAAA;EACA,WAAA;AAJZ;AAMY;EACI,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cA9DJ;EA+DI,YAAA;EACA,gBAAA;AAJhB;AAMgB;EACI,eAAA;EACA,0BAAA;AAJpB;AAOY;EACI,gCAAA;AALhB;AAUI;EACI,aAAA;EACA,uBAAA;EACA,iBAAA;AARR;AASQ;EACI,mBAAA;EACA,aAAA;EACA,sCAAA;EACA,oCApFI;EAqFJ,aAAA;EACA,mBAAA;EACA,kBAAA;AAPZ;AAQY;EACI,YAAA;AANhB;AAQY;EACI,kCAAA;EACA,eAAA;AANhB;AAQY;EACI,iBAAA;AANhB;AAUQ;EACI,mBAAA;EACA,aAAA;EACA,sCAAA;EACA,oCAxGI;EAyGJ,aAAA;EACA,mBAAA;EACA,SAAA;AARZ;AASY;EACI,UAAA;EACA,0CAAA;EACA,aAAA;EACA,2BAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AAPhB;AAQgB;EACI,YAAA;AANpB;AASgB;EACI,SAAA;EACA,UAAA;AAPpB;AAUgB;EACI,eAAA;EACA,uCAAA;AARpB;AAaQ;EACI,oCArII;EAsIJ,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAXZ;AAYY;EACI,aAAA;EACA,qBAAA;EACA,QAAA;AAVhB;AAWgB;EACI,iGAAA;AATpB;AAcY;EACI,UAAA;EACA,SAAA;AAZhB;AAeY;EACI,YAAA;AAbhB;;AAqBA;EACI;IACI,8BAAA;IACA,sBAAA;EAlBN;EAwBc;IACI,iBAAA;EAtBlB;EAyBU;IACI,eAAA;EAvBd;EA2BM;IACI,UAAA;EAzBV;EA0BU;IACI,0BAAA;IACA,aAAA;EAxBd;EAyBc;IACI,YAAA;EAvBlB;EAyBc;IACI,WAAA;EAvBlB;EA0Bc;IACI,kBAAA;EAxBlB;EA2BU;IACI,2BAAA;IACA,aAAA;EAzBd;EA0Bc;IACI,aAAA;EAxBlB;EA4Bc;IACI,YAAA;EA1BlB;AACF","sourcesContent":["$fontColor: #fefefe;\n$DivBackground: rgba(3, 3, 3, .8);\n\n@font-face {\n    font-family: Tangerine;\n    src: url('./Tangerine.ttf');\n}\n\n@font-face {\n    font-family: Poppins;\n    src: url('./Poppins.ttf');\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100vw;\n    font-family: Poppins, sans-serif;\n    color: $fontColor;\n    background: url('../img/background.jpg');\n    background-position: bottom center;\n    background-size: cover;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n}\n\n#container{\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    gap:  50px;\n    grid-template-rows: repeat(2, min-content);\n    .header{\n        display: grid;\n        background-color: $DivBackground;\n        grid-row: 1/-1;\n        padding: 10px;\n        gap: 5px;\n        color: white;\n        place-items: center;\n\n        .title{\n            padding: 0;\n            margin: 0;\n            font-size: 5rem;\n            font-family: Tangerine, cursive;\n            font-weight: 700;\n        }\n        .navbar{\n            display: flex;\n            justify-content: space-evenly;\n            font-family: sans-serif;\n            width: 100%;\n       \n            .btn {\n                transition: .3s ease;\n                font-size: 1.50rem;\n                font-weight: 300;\n                padding: 8px 20px;\n                color: $fontColor;\n                border: none;\n                background: none;\n\n                &:hover {\n                    cursor: pointer;\n                    transform: translateY(-8%);\n                }\n            }\n            .active {\n                border-bottom: 1px solid $fontColor;\n            }\n        }\n    }\n\n    .content {\n        display: grid;\n        justify-content: center;\n        padding: 10px 0px;\n        .homeDiv {\n            height: fit-content;\n            display: grid;\n            grid-template-columns: repeat(2, auto);\n            background-color: $DivBackground;\n            padding: 50px;\n            border-radius: 10px;\n            text-align: center;\n            .chefImg {\n                width: 400px;\n            }\n            .titlecontent {\n                font-family: Tangerine, sans-serif;\n                font-size: 4rem;\n            }\n            p {\n                font-size: 1.70rem;\n            }\n        }\n\n        .menuDiv {\n            height: fit-content;\n            display: grid;\n            grid-template-columns: repeat(3, auto);\n            background-color: $DivBackground;\n            padding: 10px;\n            border-radius: 10px;\n            gap: 10px;\n            .grid-item {\n                padding: 0;\n                background-color: rgba(255, 255, 255, .1);\n                display: grid;\n                grid-template-rows: 5fr 1fr;\n                text-align: center;\n                justify-content: center;\n                align-items: center;\n                img {\n                    width: 200px;\n                }\n\n                p {\n                    margin: 0;\n                    padding: 0;\n                }\n\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(50, 50, 50, .3);\n                }\n            }\n        }\n\n        .contactDiv {\n            background-color: $DivBackground;\n            height: fit-content;\n            padding: 20px 10px;\n            border-radius: 10px;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            div {\n                display: flex;\n                justify-items: center;\n                gap: 5px;\n                img {\n                    filter: invert(44%) sepia(62%) saturate(2282%) hue-rotate(191deg) brightness(100%) contrast(103%);\n                    \n                }\n            }\n\n            p {\n                padding: 0;\n                margin: 0;\n            }\n\n            .mapImg {\n                width: 600px;\n            }\n        }\n\n    }\n}\n\n\n@media screen and (max-width: 850px){\n    body {\n        background-position: top right;\n        background-size: cover;\n    }\n\n    #container{\n        .header{\n            .navbar{\n                .btn{\n                    font-size: 1.20rem;\n                }\n            }\n            .title{\n                font-size: 4rem;\n            }\n        }\n\n        .content {\n            padding: 0;\n            .homeDiv {\n                grid-template-columns: 1fr;\n                padding: 10px;\n                .chefImg {\n                    width: 300px;\n                }\n                .homeDivRight {\n                    grid-row: 1;\n                }\n\n                p {\n                    font-size: 1.25rem;\n                }\n            }\n            .menuDiv {\n                grid-template-columns: auto;\n                padding: 20px;\n                .grid-item {\n                    padding: 30px;\n                }\n            }\n            .contactDiv {\n                .mapImg {\n                    width: 350px;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const App = (() => {
    const container = document.querySelector('#container')
    
    const init = () => {
        const content = document.createElement('div')
        const header = document.createElement('header')
        const title = document.createElement('h1')

        title.textContent = 'Burger Fiesta'

        title.className = 'title'
        content.className = 'content'
        header.className = 'header'

        header.appendChild(title)
        header.appendChild(createNav())
        container.appendChild(header)
        container.appendChild(content)
        setActive(document.querySelector('.btn'))
        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

    }

    const createNav = () => {
        const nav = document.createElement('nav')
        nav.className = 'navbar'

        const homeButton = document.createElement('button')
        homeButton.classList.add('btn', 'homebtn')
        homeButton.textContent = "Home"
        homeButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return
            
            setActive(homeButton)
            ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
        })

        const menuButton = document.createElement('button')
        menuButton.classList.add('btn')
        menuButton.textContent = "Menu"
        menuButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return

            setActive(menuButton)
            ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
        })

        const contactButton = document.createElement('button')
        contactButton.classList.add('btn')
        contactButton.textContent = "Contact"
        contactButton.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')) return

            setActive(contactButton)
            ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
        })

        nav.appendChild(homeButton)
        nav.appendChild(menuButton)
        nav.appendChild(contactButton)

        return nav
    }

    const setActive = (button) => {
        const buttons = container.querySelectorAll('.btn')
        buttons.forEach((button) => {
            button.classList.remove('active')
        })

        button.classList.add('active')
    }

    return {init}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _img_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/phone.svg */ "./src/img/phone.svg");
/* harmony import */ var _img_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/map-marker.svg */ "./src/img/map-marker.svg");
/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/map.png */ "./src/img/map.png");





function Contact() {
    const content = document.querySelector('.content')
    const contactDiv = document.createElement('div')
    const mapImg = document.createElement('img')
    contactDiv.className = 'contactDiv'
    content.textContent = ''
    mapImg.src = _img_map_png__WEBPACK_IMPORTED_MODULE_2__
    mapImg.className = 'mapImg'
    
    contactDiv.appendChild(createInfo(_img_phone_svg__WEBPACK_IMPORTED_MODULE_0__, '012 3456 789'))
    contactDiv.appendChild(createInfo(_img_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__, 'Los Angeles, California'))
    contactDiv.appendChild(mapImg)
    content.append(contactDiv)
}

function createInfo(img, text) {
    const p = document.createElement('p')
    const image = document.createElement('img')
    const div = document.createElement('div')
    image.src = img
    p.innerHTML = text
    
    div.appendChild(image)
    div.appendChild(p)
    return div
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _img_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chef.png */ "./src/img/chef.png");


function Home() {
    const content = document.querySelector('.content')
    const homeDiv = document.createElement('div')
    const chefImg = document.createElement('img')
    const homeDivLeft = document.createElement('div')
    const homeDivRight = document.createElement('div')

    chefImg.className = 'chefImg'
    chefImg.src = _img_chef_png__WEBPACK_IMPORTED_MODULE_0__

    homeDiv.className = 'homeDiv'
    homeDivRight.className = 'homeDivRight'
    content.textContent = ''

    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    
    h1.innerHTML = "<span class='titlecontent'>Burger fiesta</span> serving since 1958"

    homeDivLeft.appendChild(chefImg)
    homeDivRight.appendChild(h1)
    homeDivRight.appendChild(createText('Made with Perfection in mind'))
    
    homeDiv.appendChild(homeDivLeft)
    homeDiv.appendChild(homeDivRight)
    content.appendChild(homeDiv)
}

function createText(message) {
    const p = document.createElement('p')
    p.textContent = message
    return p
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _img_hamNcheese_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hamNcheese.png */ "./src/img/hamNcheese.png");
/* harmony import */ var _img_DoublePatty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/DoublePatty.png */ "./src/img/DoublePatty.png");
/* harmony import */ var _img_classic_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/classic.png */ "./src/img/classic.png");
/* harmony import */ var _img_combo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/combo.png */ "./src/img/combo.png");
/* harmony import */ var _img_TriplePatty_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/TriplePatty.png */ "./src/img/TriplePatty.png");
/* harmony import */ var _img_chicken_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/chicken.png */ "./src/img/chicken.png");







function Menu() {
    const content = document.querySelector('.content')
    const menuDiv = document.createElement('div')
    
    menuDiv.className = 'menuDiv'
    
    content.innerText = ''

    menuDiv.appendChild(createItemBox(_img_hamNcheese_png__WEBPACK_IMPORTED_MODULE_0__, 'Ham and Cheese'))
    menuDiv.appendChild(createItemBox(_img_DoublePatty_png__WEBPACK_IMPORTED_MODULE_1__, 'Classic Bacon'))
    menuDiv.appendChild(createItemBox(_img_classic_png__WEBPACK_IMPORTED_MODULE_2__, 'Classic Burger'))
    menuDiv.appendChild(createItemBox(_img_combo_png__WEBPACK_IMPORTED_MODULE_3__, 'Ultimate combo'))
    menuDiv.appendChild(createItemBox(_img_TriplePatty_png__WEBPACK_IMPORTED_MODULE_4__, 'Triple Patty'))
    menuDiv.appendChild(createItemBox(_img_chicken_png__WEBPACK_IMPORTED_MODULE_5__, 'Chicken Burger'))
    content.appendChild(menuDiv)
}

function createItemBox(img, description) {
    const div = document.createElement('div')
    const itemImage = document.createElement('img')
    const descrip = document.createElement('p')
    descrip.textContent = description
    itemImage.src = img
    div.className = 'grid-item'
    div.appendChild(itemImage)
    div.appendChild(descrip)
    return div
}



/***/ }),

/***/ "./src/img/DoublePatty.png":
/*!*********************************!*\
  !*** ./src/img/DoublePatty.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "DoublePatty.png";

/***/ }),

/***/ "./src/img/TriplePatty.png":
/*!*********************************!*\
  !*** ./src/img/TriplePatty.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "TriplePatty.png";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ }),

/***/ "./src/img/chef.png":
/*!**************************!*\
  !*** ./src/img/chef.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chef.png";

/***/ }),

/***/ "./src/img/chicken.png":
/*!*****************************!*\
  !*** ./src/img/chicken.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chicken.png";

/***/ }),

/***/ "./src/img/classic.png":
/*!*****************************!*\
  !*** ./src/img/classic.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "classic.png";

/***/ }),

/***/ "./src/img/combo.png":
/*!***************************!*\
  !*** ./src/img/combo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "combo.png";

/***/ }),

/***/ "./src/img/hamNcheese.png":
/*!********************************!*\
  !*** ./src/img/hamNcheese.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamNcheese.png";

/***/ }),

/***/ "./src/img/map-marker.svg":
/*!********************************!*\
  !*** ./src/img/map-marker.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "map-marker.svg";

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "map.png";

/***/ }),

/***/ "./src/img/phone.svg":
/*!***************************!*\
  !*** ./src/img/phone.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "phone.svg";

/***/ }),

/***/ "./src/styles/Poppins.ttf":
/*!********************************!*\
  !*** ./src/styles/Poppins.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Poppins.ttf";

/***/ }),

/***/ "./src/styles/Tangerine.ttf":
/*!**********************************!*\
  !*** ./src/styles/Tangerine.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Tangerine.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].init()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxrSEFBa0M7QUFDOUUsNENBQTRDLDhHQUFnQztBQUM1RSw0Q0FBNEMsc0hBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMkJBQTJCLHlEQUF5RCxHQUFHLGNBQWMseUJBQXlCLHlEQUF5RCxHQUFHLFFBQVEsY0FBYyxlQUFlLGtCQUFrQixpQkFBaUIscUNBQXFDLG1CQUFtQixnRUFBZ0UsdUNBQXVDLDJCQUEyQixpQ0FBaUMsaUNBQWlDLEdBQUcsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLCtDQUErQyxHQUFHLHNCQUFzQixrQkFBa0IseUNBQXlDLG1CQUFtQixrQkFBa0IsYUFBYSxpQkFBaUIsd0JBQXdCLEdBQUcsNkJBQTZCLGVBQWUsY0FBYyxvQkFBb0Isb0NBQW9DLHFCQUFxQixHQUFHLDhCQUE4QixrQkFBa0Isa0NBQWtDLDRCQUE0QixnQkFBZ0IsR0FBRyxtQ0FBbUMsMEJBQTBCLHNCQUFzQixxQkFBcUIsc0JBQXNCLG1CQUFtQixpQkFBaUIscUJBQXFCLEdBQUcseUNBQXlDLG9CQUFvQiwrQkFBK0IsR0FBRyxzQ0FBc0MscUNBQXFDLEdBQUcsdUJBQXVCLGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcsZ0NBQWdDLHdCQUF3QixrQkFBa0IsMkNBQTJDLHlDQUF5QyxrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLHlDQUF5QyxpQkFBaUIsR0FBRyw4Q0FBOEMsdUNBQXVDLG9CQUFvQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLGtCQUFrQiwyQ0FBMkMseUNBQXlDLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLDJDQUEyQyxlQUFlLCtDQUErQyxrQkFBa0IsZ0NBQWdDLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLEdBQUcsK0NBQStDLGlCQUFpQixHQUFHLDZDQUE2QyxjQUFjLGVBQWUsR0FBRyxpREFBaUQsb0JBQW9CLDRDQUE0QyxHQUFHLG1DQUFtQyx5Q0FBeUMsd0JBQXdCLHVCQUF1Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsdUNBQXVDLGtCQUFrQiwwQkFBMEIsYUFBYSxHQUFHLDJDQUEyQyxzR0FBc0csR0FBRyxxQ0FBcUMsZUFBZSxjQUFjLEdBQUcsMkNBQTJDLGlCQUFpQixHQUFHLDBDQUEwQyxVQUFVLHFDQUFxQyw2QkFBNkIsS0FBSyxxQ0FBcUMsd0JBQXdCLEtBQUssK0JBQStCLHNCQUFzQixLQUFLLHlCQUF5QixpQkFBaUIsS0FBSyxrQ0FBa0MsaUNBQWlDLG9CQUFvQixLQUFLLDJDQUEyQyxtQkFBbUIsS0FBSyxnREFBZ0Qsa0JBQWtCLEtBQUssb0NBQW9DLHlCQUF5QixLQUFLLGtDQUFrQyxrQ0FBa0Msb0JBQW9CLEtBQUssNkNBQTZDLG9CQUFvQixLQUFLLDZDQUE2QyxtQkFBbUIsS0FBSyxHQUFHLE9BQU8sd0ZBQXdGLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLDZDQUE2QyxvQ0FBb0MsZ0JBQWdCLDZCQUE2QixrQ0FBa0MsR0FBRyxnQkFBZ0IsMkJBQTJCLGdDQUFnQyxHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQixvQkFBb0IsbUJBQW1CLHVDQUF1Qyx3QkFBd0IsK0NBQStDLHlDQUF5Qyw2QkFBNkIsbUNBQW1DLG1DQUFtQyxHQUFHLGVBQWUseUJBQXlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLGlCQUFpQixpREFBaUQsY0FBYyx3QkFBd0IsMkNBQTJDLHlCQUF5Qix3QkFBd0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLHlCQUF5Qix3QkFBd0IsOEJBQThCLDhDQUE4QywrQkFBK0IsV0FBVyxrQkFBa0IsNEJBQTRCLDRDQUE0QyxzQ0FBc0MsMEJBQTBCLDZCQUE2Qix1Q0FBdUMscUNBQXFDLG1DQUFtQyxvQ0FBb0Msb0NBQW9DLCtCQUErQixtQ0FBbUMsNkJBQTZCLHNDQUFzQyxpREFBaUQsbUJBQW1CLGVBQWUsdUJBQXVCLHNEQUFzRCxlQUFlLFdBQVcsT0FBTyxrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsb0JBQW9CLGtDQUFrQyw0QkFBNEIscURBQXFELCtDQUErQyw0QkFBNEIsa0NBQWtDLGlDQUFpQyx3QkFBd0IsK0JBQStCLGVBQWUsNkJBQTZCLHFEQUFxRCxrQ0FBa0MsZUFBZSxpQkFBaUIscUNBQXFDLGVBQWUsV0FBVyxzQkFBc0Isa0NBQWtDLDRCQUE0QixxREFBcUQsK0NBQStDLDRCQUE0QixrQ0FBa0Msd0JBQXdCLDBCQUEwQiw2QkFBNkIsNERBQTRELGdDQUFnQyw4Q0FBOEMscUNBQXFDLDBDQUEwQyxzQ0FBc0MsdUJBQXVCLG1DQUFtQyxtQkFBbUIsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsbUJBQW1CLDZCQUE2QixzQ0FBc0MsNkRBQTZELG1CQUFtQixlQUFlLFdBQVcseUJBQXlCLCtDQUErQyxrQ0FBa0MsaUNBQWlDLGtDQUFrQyw0QkFBNEIscUNBQXFDLHdCQUF3QixtQkFBbUIsZ0NBQWdDLHdDQUF3QywyQkFBMkIsdUJBQXVCLHdIQUF3SCx5Q0FBeUMsZUFBZSxtQkFBbUIsNkJBQTZCLDRCQUE0QixlQUFlLHlCQUF5QiwrQkFBK0IsZUFBZSxXQUFXLFNBQVMsR0FBRywyQ0FBMkMsWUFBWSx5Q0FBeUMsaUNBQWlDLE9BQU8sbUJBQW1CLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlDQUF5QyxtQkFBbUIsZUFBZSxxQkFBcUIsa0NBQWtDLGVBQWUsV0FBVyxzQkFBc0IseUJBQXlCLHdCQUF3Qiw2Q0FBNkMsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsbUJBQW1CLGlDQUFpQyxrQ0FBa0MsbUJBQW1CLHVCQUF1Qix5Q0FBeUMsbUJBQW1CLGVBQWUsd0JBQXdCLDhDQUE4QyxnQ0FBZ0MsOEJBQThCLG9DQUFvQyxtQkFBbUIsZUFBZSwyQkFBMkIsMkJBQTJCLG1DQUFtQyxtQkFBbUIsZUFBZSxXQUFXLE9BQU8sR0FBRyxtQkFBbUI7QUFDOTZWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QjtBQUNBO0FBQ007O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBSTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFJO0FBQ2hCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkscURBQUk7QUFDaEIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx3REFBTztBQUNuQixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGa0I7QUFDUTtBQUNWOzs7QUFHaEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlDQUFHO0FBQ3BCO0FBQ0E7QUFDQSxzQ0FBc0MsMkNBQUc7QUFDekMsc0NBQXNDLGdEQUFNO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnVDOztBQUV4QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVU7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEM2QztBQUNFO0FBQ1I7QUFDSjtBQUNPO0FBQ0g7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxnREFBVTtBQUNoRCxzQ0FBc0MsaURBQVc7QUFDakQsc0NBQXNDLDZDQUFPO0FBQzdDLHNDQUFzQywyQ0FBSztBQUMzQyxzQ0FBc0MsaURBQU07QUFDNUMsc0NBQXNDLDZDQUFPO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNGOztBQUUxQixvREFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vVGFuZ2VyaW5lLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFRhbmdlcmluZTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUG9wcGlucztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmZWZlZmU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxufVxcbiNjb250YWluZXIgLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAzLCAzLCAwLjgpO1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5oZWFkZXIgLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LWZhbWlseTogVGFuZ2VyaW5lLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2NvbnRhaW5lciAuaGVhZGVyIC5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRhaW5lciAuaGVhZGVyIC5uYXZiYXIgLmJ0biB7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGNvbG9yOiAjZmVmZWZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuI2NvbnRhaW5lciAuaGVhZGVyIC5uYXZiYXIgLmJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTglKTtcXG59XFxuI2NvbnRhaW5lciAuaGVhZGVyIC5uYXZiYXIgLmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlZmVmZTtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAuaG9tZURpdiB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAzLCAzLCAwLjgpO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmNvbnRlbnQgLmhvbWVEaXYgLmNoZWZJbWcge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4jY29udGFpbmVyIC5jb250ZW50IC5ob21lRGl2IC50aXRsZWNvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFRhbmdlcmluZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAuaG9tZURpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4jY29udGFpbmVyIC5jb250ZW50IC5tZW51RGl2IHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDMsIDAuOCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAubWVudURpdiAuZ3JpZC1pdGVtIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5jb250ZW50IC5tZW51RGl2IC5ncmlkLWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAubWVudURpdiAuZ3JpZC1pdGVtIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAubWVudURpdiAuZ3JpZC1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC4zKTtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAuY29udGFjdERpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDMsIDAuOCk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jY29udGFpbmVyIC5jb250ZW50IC5jb250YWN0RGl2IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNjb250YWluZXIgLmNvbnRlbnQgLmNvbnRhY3REaXYgZGl2IGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg0NCUpIHNlcGlhKDYyJSkgc2F0dXJhdGUoMjI4MiUpIGh1ZS1yb3RhdGUoMTkxZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG4jY29udGFpbmVyIC5jb250ZW50IC5jb250YWN0RGl2IHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI2NvbnRhaW5lciAuY29udGVudCAuY29udGFjdERpdiAubWFwSW1nIHtcXG4gIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICAjY29udGFpbmVyIC5oZWFkZXIgLm5hdmJhciAuYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuICAjY29udGFpbmVyIC5oZWFkZXIgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbiAgI2NvbnRhaW5lciAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAjY29udGFpbmVyIC5jb250ZW50IC5ob21lRGl2IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAjY29udGFpbmVyIC5jb250ZW50IC5ob21lRGl2IC5jaGVmSW1nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcbiAgI2NvbnRhaW5lciAuY29udGVudCAuaG9tZURpdiAuaG9tZURpdlJpZ2h0IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICB9XFxuICAjY29udGFpbmVyIC5jb250ZW50IC5ob21lRGl2IHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuICAjY29udGFpbmVyIC5jb250ZW50IC5tZW51RGl2IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbiAgI2NvbnRhaW5lciAuY29udGVudCAubWVudURpdiAuZ3JpZC1pdGVtIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gIH1cXG4gICNjb250YWluZXIgLmNvbnRlbnQgLmNvbnRhY3REaXYgLm1hcEltZyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSxvQkFBQTtFQUNBLDRDQUFBO0FBSEo7QUFPQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBcEJRO0VBcUJSLG1EQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FBTEo7QUFNSTtFQUNJLGFBQUE7RUFDQSxvQ0FwQ1E7RUFxQ1IsY0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSlo7QUFNWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0E5REo7RUErREksWUFBQTtFQUNBLGdCQUFBO0FBSmhCO0FBTWdCO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBSnBCO0FBT1k7RUFDSSxnQ0FBQTtBQUxoQjtBQVVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFSUjtBQVNRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FwRkk7RUFxRkosYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVFZO0VBQ0ksWUFBQTtBQU5oQjtBQVFZO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0FBTmhCO0FBUVk7RUFDSSxpQkFBQTtBQU5oQjtBQVVRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0F4R0k7RUF5R0osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVJaO0FBU1k7RUFDSSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQaEI7QUFRZ0I7RUFDSSxZQUFBO0FBTnBCO0FBU2dCO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFQcEI7QUFVZ0I7RUFDSSxlQUFBO0VBQ0EsdUNBQUE7QUFScEI7QUFhUTtFQUNJLG9DQXJJSTtFQXNJSixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWFo7QUFZWTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7QUFWaEI7QUFXZ0I7RUFDSSxpR0FBQTtBQVRwQjtBQWNZO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFaaEI7QUFlWTtFQUNJLFlBQUE7QUFiaEI7O0FBcUJBO0VBQ0k7SUFDSSw4QkFBQTtJQUNBLHNCQUFBO0VBbEJOO0VBd0JjO0lBQ0ksaUJBQUE7RUF0QmxCO0VBeUJVO0lBQ0ksZUFBQTtFQXZCZDtFQTJCTTtJQUNJLFVBQUE7RUF6QlY7RUEwQlU7SUFDSSwwQkFBQTtJQUNBLGFBQUE7RUF4QmQ7RUF5QmM7SUFDSSxZQUFBO0VBdkJsQjtFQXlCYztJQUNJLFdBQUE7RUF2QmxCO0VBMEJjO0lBQ0ksa0JBQUE7RUF4QmxCO0VBMkJVO0lBQ0ksMkJBQUE7SUFDQSxhQUFBO0VBekJkO0VBMEJjO0lBQ0ksYUFBQTtFQXhCbEI7RUE0QmM7SUFDSSxZQUFBO0VBMUJsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRmb250Q29sb3I6ICNmZWZlZmU7XFxuJERpdkJhY2tncm91bmQ6IHJnYmEoMywgMywgMywgLjgpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogVGFuZ2VyaW5lO1xcbiAgICBzcmM6IHVybCgnLi9UYW5nZXJpbmUudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgc3JjOiB1cmwoJy4vUG9wcGlucy50dGYnKTtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6ICA1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJERpdkJhY2tncm91bmQ7XFxuICAgICAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAudGl0bGV7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUYW5nZXJpbmUsIGN1cnNpdmU7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5uYXZiYXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgXFxuICAgICAgICAgICAgLmJ0biB7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNTByZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnRDb2xvcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hY3RpdmUge1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGZvbnRDb2xvcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgICAgICAuaG9tZURpdiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICREaXZCYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgLmNoZWZJbWcge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50aXRsZWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVGFuZ2VyaW5lLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzByZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1lbnVEaXYge1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkRGl2QmFja2dyb3VuZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgLjMpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRhY3REaXYge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICREaXZCYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBkaXYge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDQlKSBzZXBpYSg2MiUpIHNhdHVyYXRlKDIyODIlKSBodWUtcm90YXRlKDE5MWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDMlKTtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tYXBJbWcge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KXtcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxuICAgICNjb250YWluZXJ7XFxuICAgICAgICAuaGVhZGVye1xcbiAgICAgICAgICAgIC5uYXZiYXJ7XFxuICAgICAgICAgICAgICAgIC5idG57XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjByZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxle1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgLmhvbWVEaXYge1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgLmNoZWZJbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5ob21lRGl2UmlnaHQge1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm1lbnVEaXYge1xcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuY29udGFjdERpdiB7XFxuICAgICAgICAgICAgICAgIC5tYXBJbWcge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5jb25zdCBBcHAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKVxuICAgIFxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCdXJnZXIgRmllc3RhJ1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSdcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCdcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICBzZXRBY3RpdmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpKVxuICAgICAgICBIb21lKClcblxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICAgICAgbmF2LmNsYXNzTmFtZSA9ICduYXZiYXInXG5cbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2hvbWVidG4nKVxuICAgICAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICAgICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0QWN0aXZlKGhvbWVCdXR0b24pXG4gICAgICAgICAgICBIb21lKClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm5cblxuICAgICAgICAgICAgc2V0QWN0aXZlKG1lbnVCdXR0b24pXG4gICAgICAgICAgICBNZW51KClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICAgICAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcbiAgICAgICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm5cblxuICAgICAgICAgICAgc2V0QWN0aXZlKGNvbnRhY3RCdXR0b24pXG4gICAgICAgICAgICBDb250YWN0KClcbiAgICAgICAgfSlcblxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxuXG4gICAgICAgIHJldHVybiBuYXZcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBY3RpdmUgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcblxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICByZXR1cm4ge2luaXR9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCB0ZWwgZnJvbSAnLi9pbWcvcGhvbmUuc3ZnJ1xuaW1wb3J0IG1hcmtlciBmcm9tICcuL2ltZy9tYXAtbWFya2VyLnN2ZydcbmltcG9ydCBtYXAgZnJvbSAnLi9pbWcvbWFwLnBuZydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb250YWN0RGl2LmNsYXNzTmFtZSA9ICdjb250YWN0RGl2J1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIG1hcEltZy5zcmMgPSBtYXBcbiAgICBtYXBJbWcuY2xhc3NOYW1lID0gJ21hcEltZydcbiAgICBcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUluZm8odGVsLCAnMDEyIDM0NTYgNzg5JykpXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKG1hcmtlciwgJ0xvcyBBbmdlbGVzLCBDYWxpZm9ybmlhJykpXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChtYXBJbWcpXG4gICAgY29udGVudC5hcHBlbmQoY29udGFjdERpdilcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhpbWcsIHRleHQpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW1hZ2Uuc3JjID0gaW1nXG4gICAgcC5pbm5lckhUTUwgPSB0ZXh0XG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuICAgIHJldHVybiBkaXZcbn0iLCJpbXBvcnQgY2hlZkltZ1NyYyBmcm9tICcuL2ltZy9jaGVmLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbnN0IGhvbWVEaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBob21lRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY2hlZkltZy5jbGFzc05hbWUgPSAnY2hlZkltZydcbiAgICBjaGVmSW1nLnNyYyA9IGNoZWZJbWdTcmNcblxuICAgIGhvbWVEaXYuY2xhc3NOYW1lID0gJ2hvbWVEaXYnXG4gICAgaG9tZURpdlJpZ2h0LmNsYXNzTmFtZSA9ICdob21lRGl2UmlnaHQnXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgaDEuaW5uZXJIVE1MID0gXCI8c3BhbiBjbGFzcz0ndGl0bGVjb250ZW50Jz5CdXJnZXIgZmllc3RhPC9zcGFuPiBzZXJ2aW5nIHNpbmNlIDE5NThcIlxuXG4gICAgaG9tZURpdkxlZnQuYXBwZW5kQ2hpbGQoY2hlZkltZylcbiAgICBob21lRGl2UmlnaHQuYXBwZW5kQ2hpbGQoaDEpXG4gICAgaG9tZURpdlJpZ2h0LmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ01hZGUgd2l0aCBQZXJmZWN0aW9uIGluIG1pbmQnKSlcbiAgICBcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZMZWZ0KVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdlJpZ2h0KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdilcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dChtZXNzYWdlKSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHAudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgcmV0dXJuIHBcbn0iLCJpbXBvcnQgaGFtTmNoZWVzZSBmcm9tICcuL2ltZy9oYW1OY2hlZXNlLnBuZydcbmltcG9ydCBkb3VibGVQYXR0eSBmcm9tICcuL2ltZy9Eb3VibGVQYXR0eS5wbmcnXG5pbXBvcnQgY2xhc3NpYyBmcm9tICcuL2ltZy9jbGFzc2ljLnBuZydcbmltcG9ydCBjb21ibyBmcm9tICcuL2ltZy9jb21iby5wbmcnXG5pbXBvcnQgdHJpcGxlIGZyb20gJy4vaW1nL1RyaXBsZVBhdHR5LnBuZydcbmltcG9ydCBjaGlja2VuIGZyb20gJy4vaW1nL2NoaWNrZW4ucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgXG4gICAgbWVudURpdi5jbGFzc05hbWUgPSAnbWVudURpdidcbiAgICBcbiAgICBjb250ZW50LmlubmVyVGV4dCA9ICcnXG5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1Cb3goaGFtTmNoZWVzZSwgJ0hhbSBhbmQgQ2hlZXNlJykpXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVJdGVtQm94KGRvdWJsZVBhdHR5LCAnQ2xhc3NpYyBCYWNvbicpKVxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUJveChjbGFzc2ljLCAnQ2xhc3NpYyBCdXJnZXInKSlcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1Cb3goY29tYm8sICdVbHRpbWF0ZSBjb21ibycpKVxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUJveCh0cmlwbGUsICdUcmlwbGUgUGF0dHknKSlcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1Cb3goY2hpY2tlbiwgJ0NoaWNrZW4gQnVyZ2VyJykpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtQm94KGltZywgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXAudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuICAgIGl0ZW1JbWFnZS5zcmMgPSBpbWdcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2dyaWQtaXRlbSdcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKVxuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwKVxuICAgIHJldHVybiBkaXZcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2NzcydcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnXG5cbkFwcC5pbml0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=