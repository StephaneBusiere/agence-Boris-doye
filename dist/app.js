/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminLogin/adminLogin.sass":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminLogin/adminLogin.sass ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/AdminLogin/adminLogin.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminPage/adminPage.sass":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminPage/adminPage.sass ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/AdminPage/adminPage.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/**\\n * Import\\n */\\n/* Colors */\\n/**\\n * Styles\\n */\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Aventures/aventures.sass":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Aventures/aventures.sass ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.aventureTitle {\\n  margin: 0% 0% 2% 0%; }\\n\\n.documentaireTitle {\\n  margin: 4% 0% 0% 2.5%;\\n  font-size: 25px; }\\n\\n.documentaireContainer1 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: auto;\\n  display: flex; }\\n\\n.caphornText {\\n  width: 60em;\\n  color: white;\\n  margin: 5% 0% 0% 3%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px; }\\n\\n.caphornTitle {\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 35px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px; }\\n\\n.caphornPoster {\\n  width: 30em;\\n  height: auto;\\n  margin: 8% 0% 20% 10%; }\\n\\n.caphornTitle {\\n  margin-bottom: 0.7em; }\\n\\n.caphornAutor {\\n  margin-bottom: 1em; }\\n\\n.caphornDispo {\\n  margin: 0% 0% 3% 0%; }\\n\\n.caphornPresentationTexte {\\n  margin: 0% 3% 3% 0%;\\n  font-size: 17px; }\\n\\n.voirFilm {\\n  padding: 1em 4em 1em 4em;\\n  border: 2px solid #32A1CE;\\n  border-radius: 10px;\\n  font-family: 'roboto';\\n  font-size: 15px;\\n  margin-left: 15em;\\n  position: absolute;\\n  top: 1050px;\\n  left: 780px; }\\n\\n.voirFilm:hover {\\n  background-color: #94B3D2; }\\n\\n.separation {\\n  width: 100%;\\n  height: 0.3em;\\n  background-color: #94B3D2; }\\n\\n.voirFilm2 {\\n  padding: 1em 4em 1em 4em;\\n  border: 2px solid #32A1CE;\\n  border-radius: 10px;\\n  font-family: 'roboto';\\n  font-size: 15px;\\n  margin-left: 15em;\\n  position: absolute;\\n  top: 1950px;\\n  left: 400px; }\\n\\n.documentaireContainer2 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: 900px;\\n  display: flex; }\\n\\n.appurimacPoster {\\n  width: 100%;\\n  height: auto;\\n  margin: 15% 0% 20% 25%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Aventures/aventures.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Clients/clients.sass":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Clients/clients.sass ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.clients {\\n  height: 500px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Clients/clients.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Contact/contact.sass":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Contact/contact.sass ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.contact {\\n  height: 500px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Contact/contact.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Equipements/equipements.sass":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Equipements/equipements.sass ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.equipement {\\n  height: 500px; }\\n\\n.stuffTitleContainer {\\n  background-color: #282828;\\n  width: 100%;\\n  height: 10em; }\\n\\n.stuffContainer {\\n  background-color: #282828;\\n  width: 100%;\\n  height: auto;\\n  display: flex; }\\n\\n.stuffText {\\n  width: 60em;\\n  color: white;\\n  margin: 2.5% 0% 0% 6%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px; }\\n\\n.stuffTitle {\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 40px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  padding-top: 2%;\\n  text-align: center;\\n  color: white; }\\n\\n.phantom {\\n  margin: 12% 0% 15% 40%;\\n  border: 1px solid #ff5ccfd5; }\\n\\n.phantomTitle {\\n  margin: 0% 0% 0% 5%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 40px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: white; }\\n\\n.phantomTexte {\\n  margin: 4% 0% 0% 5%; }\\n\\n.separationLigne2 {\\n  border-bottom: thick double #32a1ce;\\n  width: 35em;\\n  margin-top: 2%;\\n  margin-left: 35%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Equipements/equipements.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/styles.sass":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/styles.sass ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.blog-footer {\\n  padding: 2em;\\n  background: black;\\n  color: white;\\n  text-align: center;\\n  position: absolute;\\n  margin: 0% 0% 0% 0%;\\n  width: 100%;\\n  height: 25em; }\\n\\n.borisLogoBlanc {\\n  width: 20em;\\n  height: auto; }\\n\\n.footerText {\\n  margin-top: 4.8%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Footer/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.sass":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.sass ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.header {\\n  position: relative;\\n  width: 100%;\\n  background-color: #2c2c38ab;\\n  border-bottom: 1.5px solid  #D5A6BD; }\\n  @media only screen and (max-width: 640px) {\\n    .header {\\n      width: 100%;\\n      height: 5em; } }\\n  @media only screen and (min-width: 640px) {\\n    .header {\\n      width: 100%;\\n      height: 6em;\\n      position: fixed;\\n      hoverflow: hidden;\\n      z-index: 999; } }\\n\\n.navMenu {\\n  margin-left: 24%;\\n  margin-top: 1.5em;\\n  display: inline-block;\\n  font-size: 1.5em;\\n  font-family: \\\"Roboto\\\", Sans-serif;\\n  color: #6d8397ed; }\\n\\n@media only screen and (max-width: 640px) {\\n  .logoWhite {\\n    margin: 2% 0% 0% 1%;\\n    width: 5em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .logoWhite {\\n    margin: 1.5% 0% 0% 1%;\\n    padding: 0em;\\n    border-radius: 50px;\\n    width: 6em;\\n    position: fixed; } }\\n\\n.svg-inline--fa.fa-bars.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.burgerIcon {\\n  font-size: 2.5em;\\n  color: #D5A6BD; }\\n  @media only screen and (max-width: 640px) {\\n    .svg-inline--fa.fa-bars.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.burgerIcon {\\n      margin: 5% 0% 0% 150px;\\n      color: #D5A6BD; } }\\n  @media only screen and (min-width: 640px) {\\n    .svg-inline--fa.fa-bars.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.burgerIcon {\\n      display: none; } }\\n\\n.svg-inline--fa.fa-window-close.fa-w-16.fa-null.fa-rotate-null.fa-pull-null.burgerCross {\\n  font-size: 2.5em;\\n  color: #D5A6BD; }\\n  @media only screen and (max-width: 640px) {\\n    .svg-inline--fa.fa-window-close.fa-w-16.fa-null.fa-rotate-null.fa-pull-null.burgerCross {\\n      margin: 2% 0% 0% 150px; } }\\n  @media only screen and (min-width: 640px) {\\n    .svg-inline--fa.fa-window-close.fa-w-16.fa-null.fa-rotate-null.fa-pull-null.burgerCross {\\n      display: none; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .svg-inline--fa.fa-bars.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.burgerIcon:hover {\\n    color: white; } }\\n\\n.userAccount {\\n  position: absolute;\\n  right: 8%;\\n  top: 25%; }\\n\\n.userAccount .userIcon {\\n  color: white; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Header/header.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Home/home.sass":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Home/home.sass ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n/* Colors */\\n.main {\\n  width: 100%; }\\n\\n.bigReal {\\n  width: 100%;\\n  height: 150%;\\n  margin-top: 0px; }\\n\\n.separationLine {\\n  border-bottom: 2px solid  #D5A6BD; }\\n  @media only screen and (max-width: 640px) {\\n    .separationLine {\\n      height: 1em;\\n      width: 2em; } }\\n  @media only screen and (min-width: 640px) {\\n    .separationLine {\\n      height: 4em;\\n      width: 30%;\\n      margin-left: 35%; } }\\n\\n.backgroungImage {\\n  width: 100%;\\n  height: 100px; }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices1 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices1 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 2% 2% 2% 35%;\\n    font-size: 1.5em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices2 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices2 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 2% 2% 2% 34%;\\n    font-size: 1.5em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices3 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices3 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 2% 2% 2% 40%;\\n    font-size: 1.5em; } }\\n\\n.borisDoye {\\n  width: 50%;\\n  margin-left: 25%;\\n  margin-left: 30%;\\n  border: 0.5em solid pink;\\n  border-radius: 100%;\\n  margin-bottom: 5em; }\\n  @media only screen and (max-width: 640px) {\\n    .borisDoye {\\n      width: 50%;\\n      margin-left: 25%;\\n      border: 0.2em solid pink;\\n      border-radius: 100%;\\n      margin-bottom: 5em; } }\\n  @media only screen and (min-width: 640px) {\\n    .borisDoye {\\n      width: 40%; } }\\n\\n.presentationAgenceTitle {\\n  font-family: 'News Cycle', sans-serif;\\n  font-size: 56px;\\n  line-height: 21px;\\n  color: #ffffff;\\n  font-weight: 700; }\\n  @media only screen and (max-width: 640px) {\\n    .presentationAgenceTitle {\\n      font-size: 0.85em;\\n      letter-spacing: 7px;\\n      margin: 5% 2% 2% 2%;\\n      text-align: center; } }\\n  @media only screen and (min-width: 640px) {\\n    .presentationAgenceTitle {\\n      letter-spacing: 0.2rem;\\n      text-transform: uppercase;\\n      margin: 3% 2% 2% 30%;\\n      font-size: 3em;\\n      padding-top: 2.5em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .hautesAlpesTitle {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    font-size: 0.8em;\\n    letter-spacing: 7px;\\n    margin: 0% 2% 2% 35%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .hautesAlpesTitle {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    font-size: 2em; } }\\n\\n.logoBorisNoir {\\n  height: auto;\\n  margin: 1.8% 0% 0% 38%;\\n  overflow: hidden; }\\n\\n@media only screen and (max-width: 640px) {\\n  .iconeMontagne {\\n    width: 70%;\\n    margin: 15% 0% 3% 15%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .iconeMontagne {\\n    width: 60em;\\n    margin: 5% 0% 3% 24%; } }\\n\\n.quisommesnous {\\n  height: 950px;\\n  background-color: #282828; }\\n  @media only screen and (max-width: 640px) {\\n    .quisommesnous {\\n      width: 100%;\\n      height: 2000px;\\n      background-color: #282828; } }\\n  @media only screen and (min-width: 640px) {\\n    .quisommesnous {\\n      width: 100%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices1 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices1 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 1.5% 0% 0% 40%;\\n    font-size: 0.8em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices2 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices2 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 1% 2% 0% 39.5%;\\n    font-size: 0.8em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .presentationAgenceServices3 {\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    text-align: center;\\n    letter-spacing: 3px;\\n    font-size: 0.6em;\\n    margin: 0.1em 2em 1em 2em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .presentationAgenceServices3 {\\n    letter-spacing: 0.2rem;\\n    text-transform: uppercase;\\n    font-family: \\\"Roboto\\\", Sans-serif;\\n    margin: 1% 2% 2% 45%;\\n    font-size: 0.8em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .photosPresentations {\\n    display: block; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .photosPresentations {\\n    display: flex;\\n    margin: 0% 0% 0% 5%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .borisBateau {\\n    width: 20em;\\n    height: 20em;\\n    margin: 10% 2% 0% 7%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .borisBateau {\\n    width: 25em;\\n    height: 20em;\\n    margin: 0% 2% 0% 22%;\\n    float: left; } }\\n\\n.borisBateau .textPresentation1 {\\n  margin: 0% 0% 0% 10%; }\\n\\n@media only screen and (min-width: px) {\\n  .borisPhotocarre {\\n    width: 10%;\\n    height: 20em; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .borisPhotocarre {\\n    width: 20em;\\n    height: auto;\\n    margin: 0% 2% 0% 8%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .borisPhotocarre {\\n    width: 25em;\\n    height: 20em;\\n    margin: 0% 8em 0% 42%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .borisDrone {\\n    width: 20em;\\n    height: auto;\\n    margin: 0% 0% 0% 8%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .borisDrone {\\n    width: 25em;\\n    height: 20em;\\n    margin: 0% 21em 0% 0%; } }\\n\\n.titrepresentation {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 55px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 1px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  display: flex;\\n  position: relative;\\n  margin-bottom: 10px; }\\n\\n@media only screen and (max-width: 640px) {\\n  .quitexte {\\n    margin: 0px 0% 5% 29px;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    position: relative; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .quitexte {\\n    margin: 0% 0% 5% 220px;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    display: flex;\\n    position: relative;\\n    margin-bottom: 10px; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .sommestexte {\\n    margin: 0px 0% 0% 6%;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    position: relative; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .sommestexte {\\n    margin: 320px 0px 5% 110px;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    display: flex;\\n    position: relative; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .noustexte {\\n    margin: 0% 0% 5% 7%;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    margin-bottom: 10px; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .noustexte {\\n    margin: 0% 0% 0% 0px;\\n    font-family: 'TeXGyreAdventorRegular';\\n    font-weight: normal;\\n    font-style: normal;\\n    font-size: 55px;\\n    font-weight: 600;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    height: 30px;\\n    line-height: 1px;\\n    color: #dd9933;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    display: flex; } }\\n\\n.smallTitrePresentation1 {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  margin: 0% 0% 0% 42%;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  margin-bottom: 10px; }\\n  @media only screen and (max-width: 640px) {\\n    .smallTitrePresentation1 {\\n      margin: 0% 0% 0% 9%; } }\\n  @media only screen and (min-width: 640px) {\\n    .smallTitrePresentation1 {\\n      display: flex; } }\\n\\n.smallTitrePresentation2 {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  margin: 0% 0% 0% 20%;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold; }\\n  @media only screen and (max-width: 640px) {\\n    .smallTitrePresentation2 {\\n      margin: 0% 0% 0% 0%; } }\\n  @media only screen and (min-width: 640px) {\\n    .smallTitrePresentation2 {\\n      display: flex; } }\\n\\n.smallTitrePresentation3 {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  margin: 0% 0% 0% 0%;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  height: 30px;\\n  line-height: 40px;\\n  color: #dd9933;\\n  font-weight: bold;\\n  margin-bottom: 10px; }\\n  @media only screen and (max-width: 640px) {\\n    .smallTitrePresentation3 {\\n      margin: 0% 0% 0% 0%; } }\\n  @media only screen and (min-width: 640px) {\\n    .smallTitrePresentation3 {\\n      display: flex; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .videoTitle {\\n    margin: 0% 0% 0% 0%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .videoTitle {\\n    margin: 0% 0% 20em 0%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .conseilsTitle {\\n    margin: 0% 0% 0% 10%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .conseilsTitle {\\n    margin: 0px 0em 0% 0%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .videoTitleText {\\n    width: 300px;\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 5% 0% 0% 9%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .videoTitleText {\\n    width: 400px;\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 0% 0% 0% 42%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .conseilsTitleText {\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 5% 0% 10% 10%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .conseilsTitleText {\\n    width: 400px;\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 1em 0% 0% 109px; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .dronesTitleText {\\n    width: 300px;\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 0% 0% 0% 10%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .dronesTitleText {\\n    width: 470px;\\n    color: #E5E5E5;\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 16px;\\n    font-family: \\\"Raleway\\\";\\n    line-height: 24.99px;\\n    text-transform: none;\\n    letter-spacing: 0px;\\n    text-align: left;\\n    margin: 0% 0% 0% 0%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .compétences {\\n    width: 100%;\\n    height: 3000px;\\n    background-color: white; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .compétences {\\n    width: 100%;\\n    height: 800px;\\n    background-color: white; } }\\n\\n.competencesTitle {\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 22px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 45.1px;\\n  text-transform: uppercase;\\n  letter-spacing: 5px;\\n  color: #28262b;\\n  text-align: center;\\n  margin-top: 1em; }\\n\\n@media only screen and (max-width: 640px) {\\n  .iconCamera {\\n    width: 4em;\\n    margin: 0% 0% 0% 44%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .iconCamera {\\n    width: 4em;\\n    margin: 0% 0% 0% 49%; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .separationLigne {\\n    border-bottom: thick double #32a1ce;\\n    width: 12em;\\n    margin-top: 2%;\\n    margin-left: 32%; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .separationLigne {\\n    border-bottom: thick double #32a1ce;\\n    width: 40em;\\n    margin-top: 2%;\\n    margin-left: 35%; } }\\n\\n.competencesGauche {\\n  float: left;\\n  margin: 3% 0% 0% 22%;\\n  height: auto; }\\n\\n.scenarisation-title {\\n  margin: 8% 0% 0% 3%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: inline-block;\\n  text-align: right; }\\n\\n.scenarisation-title2 {\\n  margin: 15% 0% 0% 28%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: inline-block;\\n  text-align: right; }\\n\\n.scenarisation-title3 {\\n  margin: 15% 0% 0% 47%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: inline-block;\\n  text-align: right; }\\n\\n.scenarisation-title4 {\\n  margin: 15% 0% 0% 49%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: inline-block;\\n  text-align: right; }\\n\\n.scenarisation-title5 {\\n  margin: 15% 0% 0% 55%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: inline-block;\\n  text-align: right; }\\n\\n.scenarisation {\\n  margin: 0% 0% 0% 0%;\\n  width: 100%;\\n  display: flex; }\\n\\n.scenarisation-text {\\n  width: 15em;\\n  text-align: right;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  font-family: \\\"Raleway\\\";\\n  line-height: 24.99px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #565656;\\n  margin: 5% 0% 0% 0%; }\\n\\n.svg-inline--fa {\\n  font-size: 50px;\\n  margin: 0% 0% 0% 35%;\\n  color: #32A1CE;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911; }\\n\\n@media only screen and (max-width: 640px) {\\n  .photoCadrage {\\n    height: 40em;\\n    margin: 5% 0% 40px 25px;\\n    bottom: 70px;\\n    left: 800px; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .photoCadrage {\\n    margin: 5% 0% 77px 80px;\\n    bottom: 70px;\\n    left: 800px; } }\\n\\n@media only screen and (max-width: 640px) {\\n  .competencesDroite {\\n    margin: 3.5% 20% 10% 10%;\\n    height: auto;\\n    width: 18em; } }\\n\\n@media only screen and (min-width: 640px) {\\n  .competencesDroite {\\n    float: right;\\n    margin: 3.5% 20% 0% 0%;\\n    height: auto;\\n    width: 18em; } }\\n\\n.title-droite1 {\\n  margin: 8% 40% 0% 0%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: block;\\n  text-align: right; }\\n\\n.title-droite2 {\\n  margin: 10% 40% 0% 0%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: block;\\n  text-align: right; }\\n\\n.title-droite3 {\\n  margin: 10% 40% 0% 0%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: block;\\n  text-align: right; }\\n\\n.title-droite4 {\\n  margin: 27% 35% 0% 0%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: block;\\n  text-align: right; }\\n\\n.title-droite5 {\\n  margin: 18% 40% 0% 0%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #28262b;\\n  display: block;\\n  text-align: right; }\\n\\n.text-droite1 {\\n  text-align: left;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  font-family: \\\"Raleway\\\";\\n  line-height: 24.99px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  color: #565656;\\n  margin: 4% 0% 0% 8%;\\n  width: 40em; }\\n\\n.iconPenRight {\\n  margin-right: 60px;\\n  text-align: left; }\\n\\n.competencesDroite1 {\\n  width: 80%; }\\n\\n.svg-inline--fa.fa-laptop-code.fa-w-20.fa-null.fa-rotate-null.fa-pull-null {\\n  color: #32A1CE;\\n  font-size: 50px;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911;\\n  margin: 0% 30% 0% 0%; }\\n\\n.svg-inline--fa.fa-photo-video.fa-w-20.fa-null.fa-rotate-null.fa-pull-null {\\n  color: #32A1CE;\\n  font-size: 50px;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911;\\n  margin: 0% 30% 0% 0%; }\\n\\n.svg-inline--fa.fa-camera-retro.fa-w-16.fa-null.fa-rotate-null.fa-pull-null {\\n  color: #32A1CE;\\n  font-size: 50px;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911;\\n  margin: 0% 30% 0% 0%; }\\n\\n.svg-inline--fa.fa-thumbs-up.fa-w-16.fa-null.fa-rotate-null.fa-pull-null {\\n  color: #32A1CE;\\n  font-size: 50px;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911;\\n  margin: 0% 30% 0% 0%; }\\n\\n.svg-inline--fa.fa-music.fa-w-16.fa-null.fa-rotate-null.fa-pull-null {\\n  color: #32A1CE;\\n  font-size: 50px;\\n  padding: 0.2em;\\n  border: thin solid  #6b787911;\\n  border-radius: 100px;\\n  background-color: #6b787911;\\n  margin: 0% 30% 0% 0%; }\\n\\n.scenarisationDroite {\\n  width: 150%;\\n  display: flex;\\n  text-align: left; }\\n\\n.latestVideosContainer {\\n  width: 100%;\\n  height: 500px; }\\n\\n.teaserTitleContainer {\\n  width: 100%;\\n  height: 60px;\\n  background-color: rgba(137, 204, 230, 0.459); }\\n\\n.teaserTitle {\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 40px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  text-align: center;\\n  color: black;\\n  margin: 0% 0% 7% 0%;\\n  padding-top: 1%; }\\n\\n.TeaserContainer {\\n  width: 100%;\\n  height: 300px;\\n  background-color: #bdb7d3e0; }\\n\\n.iframe {\\n  display: flex;\\n  padding-top: 3%; }\\n\\n.video-Link {\\n  color: white;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  display: block; }\\n\\n.video-Link:hover {\\n  color: #7607f5;\\n  transform: scale(1.4); }\\n\\n.videoLink-Regarder {\\n  margin: 50px 0% 0% 0px;\\n  font-size: 12px; }\\n\\n.videoLink-Une {\\n  display: block;\\n  margin: 5px 0% 0% 15px;\\n  font-size: 12px; }\\n\\n.videoLink-Video {\\n  display: block;\\n  margin: 4px 0% 0% 3px;\\n  font-size: 18px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Home/home.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Nav/nav.sass":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Nav/nav.sass ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n/**\\n * Styles\\n */\\n.nav {\\n  margin-top: 0em;\\n  margin-left: 10em; }\\n\\n.nav-link {\\n  margin-left: 6.5%; }\\n  @media only screen and (max-width: 640px) {\\n    .nav-link {\\n      display: none; } }\\n  @media only screen and (min-width: 640px) {\\n    .nav-link {\\n      font-size: 1em;\\n      font-family: 'TeXGyreAdventorRegular';\\n      font-weight: normal;\\n      font-style: normal;\\n      font-size: 16px;\\n      font-weight: 600;\\n      text-transform: uppercase;\\n      letter-spacing: 2px;\\n      height: 30px;\\n      line-height: 30px;\\n      color: white;\\n      font-weight: bold; } }\\n\\n.nav-link:hover {\\n  color: #D5A6BD; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Nav/nav.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/NavBurger/navburger.sass":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/NavBurger/navburger.sass ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n/**\\n * Styles\\n */\\n.navburgerlink {\\n  display: flex;\\n  margin: 0em 0em 0em 0em;\\n  border: thin solid black;\\n  height: 2.5em;\\n  width: 100%;\\n  font-size: 2em;\\n  padding-top: 0.6em;\\n  padding-left: 4em;\\n  font-family: \\\"Roboto\\\", Sans-serif;\\n  font-weight: bold;\\n  background-color: #577D89; }\\n  @media only screen and (max-width: 640px) {\\n    .navburgerlink {\\n      display: flex; } }\\n\\n/*\\n  @media only screen and (min-width : 640px)\\n     visibility: hidden */\\n.navburgerlink:hover {\\n  color: #D5A6BD;\\n  background-color: #577D89; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/NavBurger/navburger.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/News/news.sass":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/News/news.sass ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.news {\\n  height: 500px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/News/news.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/NotFound/notFound.sass":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/NotFound/notFound.sass ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.not-found {\\n  text-align: center; }\\n  .not-found-alert {\\n    font-size: 8em;\\n    font-weight: 700;\\n    color: black;\\n    padding: 4rem 0; }\\n  .not-found-text {\\n    margin: 2rem 0;\\n    color: black; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/NotFound/notFound.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Slider/slider.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Slider/slider.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".aws-sld__container figure, .aws-sld__content, .aws-sld__box {\\n  display: block;\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0; }\\n\\n.aws-sld__controls button, .aws-sld__bullets button {\\n  outline-color: 0;\\n  outline-style: none;\\n  outline-width: 0; }\\n\\n.aws-sld {\\n  --organic-arrow-thickness: 5px;\\n  --organic-arrow-height: 60px;\\n  --slider-height-percentage: 50%;\\n  --loader-bar-color: #851515;\\n  --loader-bar-height: 6px;\\n  --control-button-width: 10%;\\n  --control-button-height: 15%;\\n  --control-button-opacity: 0.7;\\n  --control-button-hover-opacity: 0.75;\\n  --control-button-background: transparent;\\n  --transition-bezier: cubic-bezier(0.5, 0.075, 0.25, 0.95);\\n  --slider-transition-duration: 500ms;\\n  --organic-arrow-color: violet;\\n  --organic-arrow-border-radius: 0;\\n  --control-bullet-color: rgba(238, 130, 238, 0.753);\\n  --control-bullet-active-color: rgba(238, 130, 238, 0.753);\\n  --content-background-color: #2f2f2f; }\\n\\n.aws-sld {\\n  display: block;\\n  position: relative;\\n  width: 100%;\\n  max-width: 100%; }\\n\\n.aws-sld__wrapper {\\n  display: block;\\n  overflow: hidden;\\n  position: relative;\\n  height: 100%;\\n  width: 100%; }\\n\\n.aws-sld__container {\\n  display: block;\\n  width: 100%;\\n  height: 0;\\n  padding-bottom: var(--slider-height-percentage); }\\n\\n@media (max-width: 500px) {\\n  .aws-sld__container {\\n    padding-bottom: calc(var(--slider-height-percentage) * 1.25); } }\\n\\n.aws-sld__startUp {\\n  background-color: red;\\n  height: 100%;\\n  width: 100%; }\\n\\n.aws-sld__startUp > div {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.aws-sld__startUp img {\\n  width: 35%;\\n  height: auto; }\\n\\n.aws-sld__content {\\n  background-color: var(--content-background-color);\\n  overflow: hidden;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.aws-sld__content > img, .aws-sld__content > video {\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0; }\\n\\n.aws-sld__controls button {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: var(--control-button-width);\\n  height: var(--control-button-height);\\n  position: absolute;\\n  z-index: 10;\\n  top: calc(50% - (0.5 * var(--control-button-height)));\\n  border: none;\\n  background-color: var(--control-button-background);\\n  color: #fff;\\n  cursor: pointer; }\\n\\n.aws-sld__controls button .aws-sld__controls__arrow-left, .aws-sld__controls button .aws-sld__controls__arrow-right {\\n  opacity: var(--control-button-opacity); }\\n\\n.aws-sld__controls button:hover .aws-sld__controls__arrow-left, .aws-sld__controls button:hover .aws-sld__controls__arrow-right {\\n  opacity: var(--control-button-opacity-hover); }\\n\\n.aws-sld__controls--active .aws-sld__controls__arrow-left {\\n  opacity: var(--control-button-opacity-hover);\\n  transform: translate3d(-100%, 0, 0); }\\n\\n.aws-sld__controls--active .aws-sld__controls__arrow-right {\\n  opacity: var(--control-button-opacity-hover);\\n  transform: translate3d(100%, 0, 0); }\\n\\n@media (max-width: 520px) {\\n  .aws-sld__controls {\\n    visibility: hidden; } }\\n\\n.aws-sld__bar {\\n  display: block;\\n  width: 100%;\\n  height: var(--loader-bar-height);\\n  background-color: var(--loader-bar-color);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  transition: transform 3000ms var(--transition-bezier);\\n  transform: translate3d(-100%, 0, 0); }\\n\\n.aws-sld__bar--active {\\n  transform: translate3d(-20%, 0, 0); }\\n\\n.aws-sld__bar--end {\\n  transition-duration: 300ms;\\n  transform: translate3d(0, 0, 0); }\\n\\n.aws-sld__next {\\n  right: 0; }\\n\\n.aws-sld__prev {\\n  left: 0; }\\n\\n.aws-sld__box {\\n  z-index: 1; }\\n\\n.aws-sld--animated {\\n  will-change: transform; }\\n\\n.aws-sld--animated-mobile {\\n  will-change: transform;\\n  transition: transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1); }\\n\\n.aws-sld--active {\\n  z-index: 2;\\n  transform: translate3d(0, 0, 0); }\\n\\n.aws-sld--moveRight, .aws-sld--moveLeft {\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden; }\\n\\n.aws-sld--moveRight {\\n  -webkit-animation: slideFromRight var(--slider-transition-duration) both var(--transition-bezier);\\n          animation: slideFromRight var(--slider-transition-duration) both var(--transition-bezier); }\\n\\n.aws-sld--moveLeft {\\n  -webkit-animation: slideFromLeft var(--slider-transition-duration) both var(--transition-bezier);\\n          animation: slideFromLeft var(--slider-transition-duration) both var(--transition-bezier); }\\n\\n.aws-sld--exit {\\n  z-index: 0; }\\n\\n.aws-sld--exit.aws-sld--moveLeft {\\n  -webkit-animation: slideToLeft var(--slider-transition-duration) both var(--transition-bezier);\\n          animation: slideToLeft var(--slider-transition-duration) both var(--transition-bezier); }\\n\\n.aws-sld--exit.aws-sld--moveRight {\\n  -webkit-animation: slideToRight var(--slider-transition-duration) both var(--transition-bezier);\\n          animation: slideToRight var(--slider-transition-duration) both var(--transition-bezier); }\\n\\n.aws-sld--first .aws-sld__prev {\\n  visibility: hidden; }\\n\\n.aws-sld--last .aws-sld__next {\\n  visibility: hidden; }\\n\\n.aws-sld--fill-parent {\\n  position: absolute !important;\\n  width: 100% !important;\\n  height: 100% !important;\\n  top: 0;\\n  left: 0; }\\n\\n.aws-sld--fill-parent .aws-sld__container {\\n  height: 100%;\\n  padding: 0; }\\n\\n.aws-sld__bullets {\\n  position: absolute;\\n  bottom: -40px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.aws-sld__bullets button {\\n  padding: 0;\\n  display: block;\\n  width: 16px;\\n  height: 16px;\\n  margin: 5px;\\n  border-radius: 50%;\\n  background: var(--control-bullet-color);\\n  text-indent: -9999px;\\n  overflow: hidden;\\n  cursor: pointer;\\n  border: none;\\n  transition: transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45), background-color 0.175s ease-out; }\\n\\n.aws-sld__bullets button:hover {\\n  transform: scale(1.2); }\\n\\n.aws-sld__bullets .aws-sld__bullets--loading {\\n  transform: scale(1.2); }\\n\\n.aws-sld__bullets .aws-sld__bullets--active {\\n  transform: scale(1.5);\\n  background: var(--control-bullet-active-color); }\\n\\n.aws-sld__bullets .aws-sld__bullets--active:hover {\\n  transform: scale(1.5); }\\n\\n.aws-sld__controls__arrow-left, .aws-sld__controls__arrow-right {\\n  width: 100%;\\n  height: var(--organic-arrow-height);\\n  position: relative;\\n  display: block;\\n  transition: transform 0.2s ease-out 0.125s, opacity 0.2s ease-out; }\\n\\n.aws-sld__controls__arrow-left:before, .aws-sld__controls__arrow-right:before, .aws-sld__controls__arrow-left:after, .aws-sld__controls__arrow-right:after {\\n  content: ' ';\\n  position: absolute;\\n  right: calc(50% - ( 0.7071 * (var(--organic-arrow-height) + var(--organic-arrow-thickness)) ) / 2);\\n  height: 100%;\\n  border-radius: var(--organic-arrow-border-radius);\\n  width: var(--organic-arrow-thickness);\\n  background-color: var(--organic-arrow-color);\\n  transition: transform 0.15s ease-out, background-color 0.15s ease-out; }\\n\\n.aws-sld__controls__arrow-left:before, .aws-sld__controls__arrow-right:before {\\n  transform-origin: 100% 100% 0;\\n  top: -50%;\\n  transform: rotate(-45deg); }\\n\\n.aws-sld__controls__arrow-left:after, .aws-sld__controls__arrow-right:after {\\n  transform-origin: 100% 0% 0;\\n  top: 50%;\\n  transform: rotate(45deg); }\\n\\n.aws-sld__controls__arrow-right--active {\\n  transform: translate3d(100%, 0, 0); }\\n\\n.aws-sld__controls__arrow-right--active:after {\\n  transform: rotate(90deg) translate3d(50%, 0, 0) !important; }\\n\\n.aws-sld__controls__arrow-right--active:before {\\n  transform: rotate(-90deg) translate3d(50%, 0, 0) !important; }\\n\\n.aws-sld__controls__arrow-left:before, .aws-sld__controls__arrow-left:after {\\n  right: auto;\\n  left: calc(50% - ( 0.7071 * (var(--organic-arrow-height) + var(--organic-arrow-thickness)) ) / 2); }\\n\\n.aws-sld__controls__arrow-left:before {\\n  transform-origin: 0 100% 0;\\n  top: -50%;\\n  transform: rotate(45deg); }\\n\\n.aws-sld__controls__arrow-left:after {\\n  transform-origin: 0 0 0;\\n  top: 50%;\\n  transform: rotate(-45deg); }\\n\\n.aws-sld__controls__arrow-left--active {\\n  transform: translate3d(-100%, 0, 0); }\\n\\n.aws-sld__controls__arrow-left--active:after {\\n  transform: rotate(-90deg) translate3d(-50%, 0, 0) !important; }\\n\\n.aws-sld__controls__arrow-left--active:before {\\n  transform: rotate(90deg) translate3d(-50%, 0, 0) !important; }\\n\\n.aws-sld__controls button:hover .aws-sld__controls__arrow-left:before {\\n  opacity: 1;\\n  transform: rotate(30deg); }\\n\\n.aws-sld__controls button:hover .aws-sld__controls__arrow-left:after {\\n  opacity: 1;\\n  transform: rotate(-30deg); }\\n\\n.aws-sld__controls button:hover .aws-sld__controls__arrow-right:before {\\n  opacity: 1;\\n  transform: rotate(-30deg); }\\n\\n.aws-sld__controls button:hover .aws-sld__controls__arrow-right:after {\\n  opacity: 1;\\n  transform: rotate(30deg); }\\n\\n@-webkit-keyframes slideFromLeft {\\n  from {\\n    transform: translate3d(-100%, 0, 0); }\\n  to {\\n    transform: translate3d(0, 0, 0); } }\\n\\n@keyframes slideFromLeft {\\n  from {\\n    transform: translate3d(-100%, 0, 0); }\\n  to {\\n    transform: translate3d(0, 0, 0); } }\\n\\n@-webkit-keyframes slideFromRight {\\n  from {\\n    transform: translate3d(100%, 0, 0); }\\n  to {\\n    transform: translate3d(0, 0, 0); } }\\n\\n@keyframes slideFromRight {\\n  from {\\n    transform: translate3d(100%, 0, 0); }\\n  to {\\n    transform: translate3d(0, 0, 0); } }\\n\\n@-webkit-keyframes slideToLeft {\\n  from {\\n    transform: translate3d(0, 0, 0); }\\n  to {\\n    transform: translate3d(-100%, 0, 0); } }\\n\\n@keyframes slideToLeft {\\n  from {\\n    transform: translate3d(0, 0, 0); }\\n  to {\\n    transform: translate3d(-100%, 0, 0); } }\\n\\n@-webkit-keyframes slideToRight {\\n  from {\\n    transform: translate3d(0, 0, 0); }\\n  to {\\n    transform: translate3d(100%, 0, 0); } }\\n\\n@keyframes slideToRight {\\n  from {\\n    transform: translate3d(0, 0, 0); }\\n  to {\\n    transform: translate3d(100%, 0, 0); } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Slider/slider.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Team/team.sass":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Team/team.sass ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.team {\\n  height: 500px; }\\n\\n.teamtitle {\\n  font-family: 'News Cycle', sans-serif;\\n  line-height: 20px;\\n  color: #3b17da9b;\\n  font-weight: 900;\\n  letter-spacing: 0.5rem;\\n  text-transform: uppercase;\\n  margin: 3% 0% 2% 40%;\\n  font-size: 4em;\\n  padding-top: 2.5em; }\\n\\n.teamContainer1 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: auto;\\n  display: flex; }\\n\\n.borisPhoto {\\n  width: 40em;\\n  height: auto;\\n  margin: 6% 0% 2% 10%;\\n  border: 5px solid white; }\\n\\n.hugoPhoto {\\n  width: 40em;\\n  height: 30em;\\n  margin: 6% 0% 2% 10%;\\n  border: 5px solid white; }\\n\\n.cleoPhoto {\\n  width: 40em;\\n  height: auto;\\n  margin: 6% 0% 2% 10%;\\n  border: 5px solid white; }\\n\\n.borisText {\\n  width: 60em;\\n  color: white;\\n  margin: 2.5% 0% 0% 6%;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 15px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px; }\\n\\n.borisTitle {\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 40px;\\n  font-family: \\\"texgyreadventorregular\\\";\\n  line-height: 25.65px;\\n  text-transform: none;\\n  letter-spacing: 0px;\\n  margin-bottom: 3%; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Team/team.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Work/styles.sass":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/components/Work/styles.sass ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n.presentationVideos {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 4px;\\n  height: 30px;\\n  line-height: 1px;\\n  font-weight: bold;\\n  color: #e2d2ce; }\\n  @media only screen and (max-width: 640px) {\\n    .presentationVideos {\\n      font-size: 0.85em;\\n      letter-spacing: 7px;\\n      margin: 5% 2% 2% 2%;\\n      text-align: center; } }\\n  @media only screen and (min-width: 640px) {\\n    .presentationVideos {\\n      letter-spacing: 0.2rem;\\n      text-transform: uppercase;\\n      margin: 1.5% 0% 2% 34%;\\n      font-size: 4em;\\n      padding-top: 2.5em; } }\\n\\n.presentationVideos2 {\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-weight: 600;\\n  text-transform: none;\\n  letter-spacing: 4px;\\n  height: 30px;\\n  line-height: 1px;\\n  font-weight: bold;\\n  color: #e2d2ce; }\\n  @media only screen and (max-width: 640px) {\\n    .presentationVideos2 {\\n      font-size: 0.85em;\\n      letter-spacing: 7px;\\n      margin: 5% 2% 2% 2%;\\n      text-align: center; } }\\n  @media only screen and (min-width: 640px) {\\n    .presentationVideos2 {\\n      letter-spacing: 0.2rem;\\n      margin: 1.2% 0% 2% 50%;\\n      font-size: 2em;\\n      padding-top: 0.5em; } }\\n\\n.falseMargin {\\n  width: 100%;\\n  height: 2em;\\n  background-color: #282828; }\\n\\n.videoPresentContainer1 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: 620px;\\n  display: flex; }\\n\\n.videoPresentContainer2 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: 620px;\\n  display: flex; }\\n\\n.videoPresentContainer3 {\\n  background-color: #282828;\\n  width: 100%;\\n  height: 620px;\\n  display: flex; }\\n\\n.showReelContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #dd9933; }\\n\\n.showReelContainer {\\n  width: 900px;\\n  height: 600px; }\\n\\n.showReelContainer:hover .showReelContent {\\n  opacity: 1;\\n  margin: 10% 0% 0% 26%;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.showReel {\\n  width: 100%;\\n  height: 100%; }\\n\\n.showReelIframe {\\n  margin: 0% 0% 0% 0%;\\n  z-index: 900; }\\n\\n.queyrasIframe {\\n  margin: 0% 100px 0% 0%;\\n  transform: none;\\n  z-index: 900;\\n  hoverflow: hidden; }\\n\\n.vietnamIframe {\\n  margin: 0% 0% 0% 0%;\\n  z-index: 900; }\\n\\n.outdoormixIframe {\\n  margin: 0% 100px 0% 0%;\\n  transform: none;\\n  z-index: 900;\\n  hoverflow: hidden; }\\n\\n.iconCross {\\n  margin: 0% 0% 0% 48%; }\\n\\n.showReelContainer:hover .showReel {\\n  transition: all .5s; }\\n\\n.queyrasContainer {\\n  width: 900px;\\n  height: 600px;\\n  top: 0; }\\n\\n.queyrasContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #32a1ce; }\\n\\n.queyrasContainer:hover .queyrasContent {\\n  opacity: 1;\\n  margin: 10% 0% 0% 25%;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.queyras {\\n  width: 100%;\\n  height: 100%; }\\n\\n.queyrasContainer:hover .queyras {\\n  position: static;\\n  transition: all .5s; }\\n\\n.vietnamContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #32a1ce;\\n  padding-top: 5%; }\\n\\n.vietnamContainer:hover .vietnamContent {\\n  opacity: 1;\\n  margin: 0% 0% 0% 26.5%;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.outdoormixContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #dd9933;\\n  padding-top: 33%; }\\n\\n.outdoormixContainer:hover .outdoormixContent {\\n  opacity: 1;\\n  margin: 0% 0% 0% 26.5%;\\n  transition: 0.35s 0.1s; }\\n\\n.fasboaContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #32a1ce;\\n  padding-top: 20%;\\n  margin-left: 18%; }\\n\\n.fasboaContainer:hover .fasboaContent {\\n  opacity: 1;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.indeContent {\\n  opacity: 0;\\n  font-family: 'TeXGyreAdventorRegular';\\n  font-size: 100px;\\n  font-weight: 600;\\n  height: 30px;\\n  line-height: 70px;\\n  color: #dd9933;\\n  padding-top: 2%;\\n  margin-left: 18%; }\\n\\n.indeContainer:hover .indeContent {\\n  opacity: 1;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.svg-inline--fa.fa-play.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.iconPlay1 {\\n  font-size: 150px;\\n  margin: 1% 0% 0% 25%; }\\n\\n.svg-inline--fa.fa-play.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.iconPlay2 {\\n  font-size: 150px;\\n  margin: 1% 0% 0% 25%;\\n  color: #dd9933; }\\n\\n.svg-inline--fa.fa-play.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.iconPlay1:hover {\\n  color: black;\\n  transition: all 0.35s 0.1s linear; }\\n\\n.svg-inline--fa.fa-play.fa-w-14.fa-null.fa-rotate-null.fa-pull-null.iconPlay2:hover {\\n  color: black;\\n  transition: all 0.35s 0.1s linear; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/Work/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Colors */\\n/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Reset perso */\\na, del, ins {\\n  text-decoration: none; }\\n\\na {\\n  color: inherit; }\\n\\nlabel, button {\\n  cursor: pointer; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*, *:before, *:after {\\n  box-sizing: inherit; }\\n\\ninput, button {\\n  outline: 0; }\\n\\n#root {\\n  width: 100%;\\n  height: auto; }\\n\\nbody {\\n  width: 100%;\\n  height: auto; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/assets/images/AfficheCaphorn.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/AfficheCaphorn.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/6fb73ef433f6278d8be303eb0627c9f7.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/AfficheCaphorn.jpg?");

/***/ }),

/***/ "./src/assets/images/BorisBateau.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/BorisBateau.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/abf0fcfd24510e8bc2503fdc08c59e9b.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/BorisBateau.jpg?");

/***/ }),

/***/ "./src/assets/images/BorisLogoBlanc.png":
/*!**********************************************!*\
  !*** ./src/assets/images/BorisLogoBlanc.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/61eeef899101949552fc8a2f70064fb8.png\";\n\n//# sourceURL=webpack:///./src/assets/images/BorisLogoBlanc.png?");

/***/ }),

/***/ "./src/assets/images/Fasboa.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/Fasboa.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/1fc2e1fe8f9c227e730baaa32cb54271.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Fasboa.jpg?");

/***/ }),

/***/ "./src/assets/images/Go-pro.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/Go-pro.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/845199273f55c299bfa1d0ffd6b77b64.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Go-pro.jpg?");

/***/ }),

/***/ "./src/assets/images/HugoClouzeau.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/HugoClouzeau.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/877e2b21bf7ad0ddf6f69ee30d9904ba.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/HugoClouzeau.jpg?");

/***/ }),

/***/ "./src/assets/images/Inde.png":
/*!************************************!*\
  !*** ./src/assets/images/Inde.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/7ca879d7925cb4d1ac1516e16db66903.png\";\n\n//# sourceURL=webpack:///./src/assets/images/Inde.png?");

/***/ }),

/***/ "./src/assets/images/Lens.jpg":
/*!************************************!*\
  !*** ./src/assets/images/Lens.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/93ab74bfc9f17dfe3d80db8a21ac47a3.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Lens.jpg?");

/***/ }),

/***/ "./src/assets/images/LogoBorisNoirPetit.png":
/*!**************************************************!*\
  !*** ./src/assets/images/LogoBorisNoirPetit.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/98f030ae8cd5f1a29c9b833de4e20637.png\";\n\n//# sourceURL=webpack:///./src/assets/images/LogoBorisNoirPetit.png?");

/***/ }),

/***/ "./src/assets/images/Outdoormix.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Outdoormix.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/36774c519e70da3d748aad72f8e596a0.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Outdoormix.jpg?");

/***/ }),

/***/ "./src/assets/images/Phantom.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/Phantom.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/505456d5f68911ed0464d05f45604b85.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Phantom.jpg?");

/***/ }),

/***/ "./src/assets/images/Queyras.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/Queyras.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/358cecf0fd20f6c2bb0e3eb0406556bc.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Queyras.jpg?");

/***/ }),

/***/ "./src/assets/images/Showreel.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/Showreel.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/e708f59d76e1a0e1fe7d2106377d195d.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Showreel.jpg?");

/***/ }),

/***/ "./src/assets/images/StuffVideo.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/StuffVideo.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/6e7713c98d87bdd03ff002e074c36cd0.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/StuffVideo.jpg?");

/***/ }),

/***/ "./src/assets/images/Vietnam.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/Vietnam.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/f1d4acc94ea045116fe44cd8ae2c22c7.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/Vietnam.jpg?");

/***/ }),

/***/ "./src/assets/images/afficheAppurimac.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/afficheAppurimac.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/c23eba85b1f331beb2924ffb14ebafe7.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/afficheAppurimac.jpg?");

/***/ }),

/***/ "./src/assets/images/alpesRealisateur.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/alpesRealisateur.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/d52824e754bca6ad5e9b77b29c5b7214.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/alpesRealisateur.jpg?");

/***/ }),

/***/ "./src/assets/images/avion.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/avion.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/7b65040ac009479f6d3a2551d1b3b7fc.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/avion.jpg?");

/***/ }),

/***/ "./src/assets/images/boris-doyeRond.png":
/*!**********************************************!*\
  !*** ./src/assets/images/boris-doyeRond.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/5cd07ce6ca1be827adef8e5a3449f83a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/boris-doyeRond.png?");

/***/ }),

/***/ "./src/assets/images/borisBureau.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/borisBureau.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/e5466d105ed8cd8056b35b234ad6b995.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/borisBureau.jpg?");

/***/ }),

/***/ "./src/assets/images/borisdoyelogo_mini_white.png":
/*!********************************************************!*\
  !*** ./src/assets/images/borisdoyelogo_mini_white.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/44b5f04bf2e68aaadb24bf84a36ddce2.png\";\n\n//# sourceURL=webpack:///./src/assets/images/borisdoyelogo_mini_white.png?");

/***/ }),

/***/ "./src/assets/images/camera.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/camera.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/eb37cba0271276fb49fea291aba0939c.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/camera.jpg?");

/***/ }),

/***/ "./src/assets/images/caphorn.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/caphorn.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/dd51320e6f67519d2e0bfa2f07050a90.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/caphorn.jpg?");

/***/ }),

/***/ "./src/assets/images/captureHomeBoris.png":
/*!************************************************!*\
  !*** ./src/assets/images/captureHomeBoris.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/3e61291a727107fe19e378f37576da5f.png\";\n\n//# sourceURL=webpack:///./src/assets/images/captureHomeBoris.png?");

/***/ }),

/***/ "./src/assets/images/cleo.jpg":
/*!************************************!*\
  !*** ./src/assets/images/cleo.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/11023a4290be82a25747dcd657919ed4.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/cleo.jpg?");

/***/ }),

/***/ "./src/assets/images/fasboaVideo.mp4":
/*!*******************************************!*\
  !*** ./src/assets/images/fasboaVideo.mp4 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fasboaVideo.mp4\";\n\n//# sourceURL=webpack:///./src/assets/images/fasboaVideo.mp4?");

/***/ }),

/***/ "./src/assets/images/filtres.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/filtres.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/2a9012c1874928a7a9ec17093f6b17c2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/filtres.jpg?");

/***/ }),

/***/ "./src/assets/images/gimbal.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/gimbal.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/c546355c5b0018827d072733ea475306.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/gimbal.jpg?");

/***/ }),

/***/ "./src/assets/images/iconCamera.png":
/*!******************************************!*\
  !*** ./src/assets/images/iconCamera.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/a60113fa1e47521a94698dae66029d06.png\";\n\n//# sourceURL=webpack:///./src/assets/images/iconCamera.png?");

/***/ }),

/***/ "./src/assets/images/iconeMontagne.png":
/*!*********************************************!*\
  !*** ./src/assets/images/iconeMontagne.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/52d2dbdf12d5e5136eef189d25b86de5.png\";\n\n//# sourceURL=webpack:///./src/assets/images/iconeMontagne.png?");

/***/ }),

/***/ "./src/assets/images/micros.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/micros.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/d56a2f1731ace46fd678cd90d3390fb5.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/micros.jpg?");

/***/ }),

/***/ "./src/assets/images/montagne.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/montagne.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/7cd8c3c281f2711ef166523e791066dd.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/montagne.jpg?");

/***/ }),

/***/ "./src/assets/images/photoBorisCarre.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/photoBorisCarre.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/d0f4918a62a2d6e0c6b0f876d53f2734.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/photoBorisCarre.jpg?");

/***/ }),

/***/ "./src/assets/images/photoBorisDrone.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/photoBorisDrone.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/b46074f2991aebc289558bba79f8b2fd.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/photoBorisDrone.jpg?");

/***/ }),

/***/ "./src/assets/images/photoCadrage.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/photoCadrage.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/e4ddd5109f6db71a922dfdafdd59b1af.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/photoCadrage.jpg?");

/***/ }),

/***/ "./src/assets/images/slider.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/slider.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/ab140b38f9bbc0621a42d98e1811756e.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/slider.jpg?");

/***/ }),

/***/ "./src/assets/images/teamdauphins.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/teamdauphins.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/52ba90d3d89219dcb113b8cbd01b1c6f.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/teamdauphins.jpg?");

/***/ }),

/***/ "./src/components/AdminLogin/adminLogin.sass":
/*!***************************************************!*\
  !*** ./src/components/AdminLogin/adminLogin.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./adminLogin.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminLogin/adminLogin.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/AdminLogin/adminLogin.sass?");

/***/ }),

/***/ "./src/components/AdminLogin/index.js":
/*!********************************************!*\
  !*** ./src/components/AdminLogin/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _adminLogin_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminLogin.sass */ \"./src/components/AdminLogin/adminLogin.sass\");\n/* harmony import */ var _adminLogin_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adminLogin_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar AdminLogin = function AdminLogin() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"work\"\n  }, \"Se connecter !\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLogin);\n\n//# sourceURL=webpack:///./src/components/AdminLogin/index.js?");

/***/ }),

/***/ "./src/components/AdminPage/adminPage.sass":
/*!*************************************************!*\
  !*** ./src/components/AdminPage/adminPage.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./adminPage.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/AdminPage/adminPage.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/AdminPage/adminPage.sass?");

/***/ }),

/***/ "./src/components/AdminPage/index.js":
/*!*******************************************!*\
  !*** ./src/components/AdminPage/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _adminPage_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminPage.sass */ \"./src/components/AdminPage/adminPage.sass\");\n/* harmony import */ var _adminPage_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adminPage_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar AdminPage = function AdminPage() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, \"Bienvenue Admin !\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPage);\n\n//# sourceURL=webpack:///./src/components/AdminPage/index.js?");

/***/ }),

/***/ "./src/components/App/app.sass":
/*!*************************************!*\
  !*** ./src/components/App/app.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./app.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/App/app.sass?");

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var src_data_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/data/categories */ \"./src/data/categories.js\");\n/* harmony import */ var src_data_categories__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_data_categories__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_data_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/data/posts */ \"./src/data/posts.js\");\n/* harmony import */ var src_data_posts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_data_posts__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var src_components_NavBurger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/NavBurger */ \"./src/components/NavBurger/index.js\");\n/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var src_components_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/Home */ \"./src/components/Home/index.js\");\n/* harmony import */ var src_components_Work__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/Work */ \"./src/components/Work/index.js\");\n/* harmony import */ var src_containers_NavBurger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/containers/NavBurger */ \"./src/containers/NavBurger.js\");\n/* harmony import */ var src_components_Team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/Team */ \"./src/components/Team/index.js\");\n/* harmony import */ var src_components_Clients__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/Clients */ \"./src/components/Clients/index.js\");\n/* harmony import */ var src_components_Equipements__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/Equipements */ \"./src/components/Equipements/index.js\");\n/* harmony import */ var src_components_Aventures__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/Aventures */ \"./src/components/Aventures/index.js\");\n/* harmony import */ var src_components_NotFound__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/NotFound */ \"./src/components/NotFound/index.js\");\n/* harmony import */ var src_components_News__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/News */ \"./src/components/News/index.js\");\n/* harmony import */ var src_components_Contact__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/Contact */ \"./src/components/Contact/index.js\");\n/* harmony import */ var src_components_AdminLogin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/AdminLogin */ \"./src/components/AdminLogin/index.js\");\n/* harmony import */ var src_components_AdminPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/components/AdminPage */ \"./src/components/AdminPage/index.js\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.sass */ \"./src/components/App/app.sass\");\n/* harmony import */ var _app_sass__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_app_sass__WEBPACK_IMPORTED_MODULE_23__);\n\n\n/**\n * Import\n */\n\n\n\n\n/**\n * Local import\n */\n\n\n\n // Composants enfants éventuels\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Styles et assets\n\n\n\nvar App = function App(_ref) {\n  var burgerOn = _ref.burgerOn,\n      onClick = _ref.onClick;\n  var menuSlide;\n\n  if (burgerOn) {\n    menuSlide = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"main\", {\n      className: \"app-main\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Switch\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: src_components_Home__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/work/\",\n      component: src_components_Work__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/team/\",\n      component: src_components_Team__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/aventures/\",\n      component: src_components_Aventures__WEBPACK_IMPORTED_MODULE_17__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/clients/\",\n      component: src_components_Clients__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/equipements/\",\n      component: src_components_Equipements__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/news/\",\n      component: src_components_News__WEBPACK_IMPORTED_MODULE_19__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/contact/\",\n      component: src_components_Contact__WEBPACK_IMPORTED_MODULE_20__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/adminlogin/\",\n      component: src_components_AdminLogin__WEBPACK_IMPORTED_MODULE_21__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      path: \"/adminpage/\",\n      component: src_components_AdminPage__WEBPACK_IMPORTED_MODULE_22__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n      component: src_components_NotFound__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n    })));\n  } else {\n    menuSlide = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_NavBurger__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null));\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    id: \"app\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), menuSlide, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null));\n};\n\nApp.propTypes = {\n  /** Titre de l'application React */\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired\n};\n/**\n * Export\n */\n// Étape 1 : on définit des stratégies de connexion au store de l'app.\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state, ownProps) {\n  return {\n    burgerOn: state.burgerOn\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    onClick: function onClick(event) {\n      console.log('ok');\n      var action = {\n        type: 'BURGER_ON'\n      };\n      dispatch(action);\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar AppContainer = connectionStrategies(App); // Étape 3 : on exporte le composant connecté qui a été généré\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContainer);\n\n//# sourceURL=webpack:///./src/components/App/index.js?");

/***/ }),

/***/ "./src/components/Aventures/aventures.sass":
/*!*************************************************!*\
  !*** ./src/components/Aventures/aventures.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./aventures.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Aventures/aventures.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Aventures/aventures.sass?");

/***/ }),

/***/ "./src/components/Aventures/index.js":
/*!*******************************************!*\
  !*** ./src/components/Aventures/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_assets_images_caphorn_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/caphorn.jpg */ \"./src/assets/images/caphorn.jpg\");\n/* harmony import */ var src_assets_images_caphorn_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_caphorn_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_assets_images_AfficheCaphorn_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/AfficheCaphorn.jpg */ \"./src/assets/images/AfficheCaphorn.jpg\");\n/* harmony import */ var src_assets_images_AfficheCaphorn_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_AfficheCaphorn_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_afficheAppurimac_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/afficheAppurimac.jpg */ \"./src/assets/images/afficheAppurimac.jpg\");\n/* harmony import */ var src_assets_images_afficheAppurimac_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_afficheAppurimac_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _aventures_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aventures.sass */ \"./src/components/Aventures/aventures.sass\");\n/* harmony import */ var _aventures_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aventures_sass__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Aventures = function Aventures() {\n  var sectionStyle1 = {\n    width: \"100%\",\n    height: \"550px\",\n    backgroundImage: \"url(\".concat(src_assets_images_caphorn_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, \")\"),\n    backgroundSize: 'cover',\n    overflow: 'hidden'\n  };\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"aventurePicture\",\n    style: sectionStyle1\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"presentationVideos\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    ClassName: \"aventureTitle\"\n  }, \"NOS AVENTURES\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"documentaireTitle\"\n  }, \"Films documentaires\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"documentaireContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"caphornTitle\"\n  }, \"Projet Cap Horn\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornAutor\"\n  }, \"de Boris Doye Films, le 20 d\\xE9cembre 2018\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornGender\"\n  }, \"Genre: Action et Aventure, Sports \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornDuration\"\n  }, \"Dur\\xE9e : 47 minutes\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornDispo\"\n  }, \"Disponibilit\\xE9 : Monde\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornPresentationTexte\"\n  }, \"Embarquez avec nous dans nos kayaks charg\\xE9s \\xE0 plus de 80 kg, venez pagayer de longues heures en regardant autour de nous ces grands espaces vierges de civilisation, nos rencontres avec les pingouins, les baleines, les dauphins, les lions de mer. Vous participerez aux diff\\xE9rents choix que prendra l\\u2019\\xE9quipe en pleine temp\\xEAte, aux difficult\\xE9s que nous rencontrerons, au choix des bivouacs et aux montages des tentes parfois catastrophiques \\xE0 cause du vent. Venez vous balader sur les \\xEEles de la Terre de Feu avec nous. Venez craquer avec nous lorsque nous aurons du vent de face, de l\\u2019eau plein la figure et juste une envie : retrouver nos familles et se mettre au chaud. Venez frissonner avec nous lorsque nous verrons se dessiner \\xE0 l\\u2019horizon le Cap Horn et exploser de joie lorsque nous le franchirons.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    className: \"voirFilm\",\n    href: \"https://vimeo.com/ondemand/projetcaphorn\"\n  }, \"Voir le film \\xE0 partir de 4.99\\u20AC\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    className: \"iframeCap\",\n    src: \"https://player.vimeo.com/video/211654779?autoplay=1&loop=1&title=0&background=1\",\n    width: \"400\",\n    height: \"700\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornPosterContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"caphornPoster\",\n    src: src_assets_images_AfficheCaphorn_jpg__WEBPACK_IMPORTED_MODULE_3___default.a\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"separation\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"documentaireContainer2\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"caphornTitle\"\n  }, \"Appurimac-l'appel de la rivi\\xE8re\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornAutor\"\n  }, \"de Hugo Clouzeau, St\\xE9phane Pion, Boris Doye, Mathieu Coldebella, Guillaume Fievez, le 25 avril 2019\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornGender\"\n  }, \"Genre: Action et Aventure, documentaire \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornDuration\"\n  }, \"Dur\\xE9e : 54 minutes\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornDispo\"\n  }, \"Disponibilit\\xE9 : Monde\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"caphornPresentationTexte\"\n  }, \"Des sources les plus lointaines de l\\u2019Amazone jusqu\\u2019aux eaux calmes de la jungle p\\xE9ruvienne, 6 kayakistes fran\\xE7ais s\\u2019\\xE9lancent pour une descente de 17 jours en autonomie sur le Rio Apurimac. Guid\\xE9s par leur passion pour la rivi\\xE8re et leur d\\xE9sir d\\u2019aventure, les 6 amis vont s\\u2019enfoncer progressivement dans les profondeurs de la cordill\\xE8re des Andes. Un parcours \\xE0 travers les eaux tourment\\xE9es de la rivi\\xE8re sacr\\xE9e des Incas. Ce voyage interrogent la possibilit\\xE9 de vivre avec peu, ensemble, dans un environnement rest\\xE9 intact, inexploit\\xE9 par l\\u2019Homme. Des montagnes p\\xE9ruviennes jusqu\\u2019aux pr\\xE9mices de la for\\xEAt Amazonienne, ce film retrace un long et difficile parcours \\xE0 travers les entrailles des Andes, l\\xE0 o\\xF9 seul les kayakistes peuvent aller.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    className: \"voirFilm2\",\n    href: \"https://vimeo.com/ondemand/apurimac\"\n  }, \"Voir le film \\xE0 partir de 2.69\\u20AC\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    src: \"https://player.vimeo.com/video/314961890?autoplay=1&loop=1&title=0\",\n    width: \"500\",\n    height: \"200\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornPosterContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"appurimacPoster\",\n    src: src_assets_images_afficheAppurimac_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"borisDrone\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Aventures);\n\n//# sourceURL=webpack:///./src/components/Aventures/index.js?");

/***/ }),

/***/ "./src/components/Clients/clients.sass":
/*!*********************************************!*\
  !*** ./src/components/Clients/clients.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./clients.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Clients/clients.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Clients/clients.sass?");

/***/ }),

/***/ "./src/components/Clients/index.js":
/*!*****************************************!*\
  !*** ./src/components/Clients/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clients_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.sass */ \"./src/components/Clients/clients.sass\");\n/* harmony import */ var _clients_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clients_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Clients = function Clients() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"clients\"\n  }, \"Ils nous font confiance !\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clients);\n\n//# sourceURL=webpack:///./src/components/Clients/index.js?");

/***/ }),

/***/ "./src/components/Contact/contact.sass":
/*!*********************************************!*\
  !*** ./src/components/Contact/contact.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./contact.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Contact/contact.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Contact/contact.sass?");

/***/ }),

/***/ "./src/components/Contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/Contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.sass */ \"./src/components/Contact/contact.sass\");\n/* harmony import */ var _contact_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Contact = function Contact() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"contact\"\n  }, \"Nous contacter >\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/components/Contact/index.js?");

/***/ }),

/***/ "./src/components/Equipements/equipements.sass":
/*!*****************************************************!*\
  !*** ./src/components/Equipements/equipements.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./equipements.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Equipements/equipements.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Equipements/equipements.sass?");

/***/ }),

/***/ "./src/components/Equipements/index.js":
/*!*********************************************!*\
  !*** ./src/components/Equipements/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_assets_images_avion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/avion.jpg */ \"./src/assets/images/avion.jpg\");\n/* harmony import */ var src_assets_images_avion_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_avion_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_assets_images_Phantom_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/Phantom.jpg */ \"./src/assets/images/Phantom.jpg\");\n/* harmony import */ var src_assets_images_Phantom_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Phantom_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/camera.jpg */ \"./src/assets/images/camera.jpg\");\n/* harmony import */ var src_assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_assets_images_gimbal_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/gimbal.jpg */ \"./src/assets/images/gimbal.jpg\");\n/* harmony import */ var src_assets_images_gimbal_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_gimbal_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_assets_images_Lens_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/Lens.jpg */ \"./src/assets/images/Lens.jpg\");\n/* harmony import */ var src_assets_images_Lens_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Lens_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_assets_images_filtres_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/images/filtres.jpg */ \"./src/assets/images/filtres.jpg\");\n/* harmony import */ var src_assets_images_filtres_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_filtres_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_slider_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/images/slider.jpg */ \"./src/assets/images/slider.jpg\");\n/* harmony import */ var src_assets_images_slider_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_slider_jpg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var src_assets_images_micros_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/images/micros.jpg */ \"./src/assets/images/micros.jpg\");\n/* harmony import */ var src_assets_images_micros_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_micros_jpg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var src_assets_images_Go_pro_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/assets/images/Go-pro.jpg */ \"./src/assets/images/Go-pro.jpg\");\n/* harmony import */ var src_assets_images_Go_pro_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Go_pro_jpg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var src_assets_images_StuffVideo_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/assets/images/StuffVideo.jpg */ \"./src/assets/images/StuffVideo.jpg\");\n/* harmony import */ var src_assets_images_StuffVideo_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_StuffVideo_jpg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _equipements_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./equipements.sass */ \"./src/components/Equipements/equipements.sass\");\n/* harmony import */ var _equipements_sass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_equipements_sass__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Equipements = function Equipements() {\n  var sectionStyle1 = {\n    width: \"100%\",\n    height: \"480px\",\n    backgroundImage: \"url(\".concat(src_assets_images_StuffVideo_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, \")\"),\n    backgroundSize: 'cover',\n    overflow: 'hidden'\n  };\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamPicture\",\n    style: sectionStyle1\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffTitleContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"stuffTitle\"\n  }, \"Equipement de pro pour vid\\xE9os de pro\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"separationLigne2\"\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_Phantom_jpg__WEBPACK_IMPORTED_MODULE_3___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Phamtom 4 pro\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Homologu\\xE9 avec 5 batteries\\u2026 Enregistre en 4k 60fps.\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_camera_jpg__WEBPACK_IMPORTED_MODULE_4___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Sony FS7\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Cam\\xE9ra Sony FS7, avec le capteur Exmor CMOS 4K Super 35 mm. Permet de filmer en 180 FPS ou encore en 4K 60P.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_gimbal_jpg__WEBPACK_IMPORTED_MODULE_5___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Movi M10\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Le Movi M10 est un stabilisateur sur 3 axes pour cam\\xE9ra. Il est d\\u2019une grande flexibilit\\xE9 et tr\\xE8s facile d\\u2019utilisation. Ultra l\\xE9ger, il permet d\\u2019embarquer des bo\\xEEtiers type GH5 jusqu\\u2019\\xE0 notre red EPIC W. Il est fourni avec 6 batteries\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_Lens_jpg__WEBPACK_IMPORTED_MODULE_6___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Lens DJI X7\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Kit de d\\u2019optique pour DJI X7 : 1 x Objectif DL-S 16 mm F2.8 ND ASPH 1 x Objectif DL 24 mm F2.8 1 x Objectif DL 35 mm F2.8 1 x Objectif DL 50 mm F2.8 4 x Protection d\\u2019objectif\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_filtres_jpg__WEBPACK_IMPORTED_MODULE_7___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Filtres\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Diff\\xE9rents types de filtres sont dispos ( circulaire, 4X5.5 ) , nous consulter pour la liste. Ainsi que des zip box et matebox wooden.\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_slider_jpg__WEBPACK_IMPORTED_MODULE_8___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Slider Edelkrone\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Version de 1m avec d\\xE9port, nous poss\\xE9dons l\\u2019option motoris\\xE9e, qui permet de contr\\xF4ler le temps et l\\u2019axe de la cam\\xE9ra. Id\\xE9al pour un timelapse ou des plans studios tr\\xE8s lents.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_micros_jpg__WEBPACK_IMPORTED_MODULE_9___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Micros\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Plusieurs type de solution micros disponible : Micro HF, directionnel, enregistreur, micros gopro\\u2026 etc\\u2026\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"phantom\",\n    src: src_assets_images_Go_pro_jpg__WEBPACK_IMPORTED_MODULE_10___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"stuffText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"phantomTitle\"\n  }, \"Gopro 7 Black edition\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"phantomTexte\"\n  }, \"Plusieurs GOpro 7 black dispos, nous consulter pour les accessoires\\u2026 fixations, karma, batteries\\u2026 \"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equipements);\n\n//# sourceURL=webpack:///./src/components/Equipements/index.js?");

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_assets_images_BorisLogoBlanc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/BorisLogoBlanc.png */ \"./src/assets/images/BorisLogoBlanc.png\");\n/* harmony import */ var src_assets_images_BorisLogoBlanc_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_BorisLogoBlanc_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.sass */ \"./src/components/Footer/styles.sass\");\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Footer = function Footer() {\n  var now = new Date();\n  var year = now.getFullYear();\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"footer\", {\n    className: \"blog-footer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"borisLogoBlanc\",\n    src: src_assets_images_BorisLogoBlanc_png__WEBPACK_IMPORTED_MODULE_2___default.a\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"footerText\"\n  }, \"BorisDoye - \\xA9 \", year));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/index.js?");

/***/ }),

/***/ "./src/components/Footer/styles.sass":
/*!*******************************************!*\
  !*** ./src/components/Footer/styles.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/styles.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Footer/styles.sass?");

/***/ }),

/***/ "./src/components/Header/header.sass":
/*!*******************************************!*\
  !*** ./src/components/Header/header.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./header.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Header/header.sass?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_containers_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/containers/Nav */ \"./src/containers/Nav.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_assets_images_borisdoyelogo_mini_white_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/assets/images/borisdoyelogo_mini_white.png */ \"./src/assets/images/borisdoyelogo_mini_white.png\");\n/* harmony import */ var src_assets_images_borisdoyelogo_mini_white_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_borisdoyelogo_mini_white_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _header_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.sass */ \"./src/components/Header/header.sass\");\n/* harmony import */ var _header_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_sass__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__[\"library\"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"fab\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faBars\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faWindowClose\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faUserCircle\"]);\n\n\n\n\nvar BurgerElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n  className: \"burgerIcon\",\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faBars\"]\n});\n\nvar windowCloseElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n  className: \"burgerCross\",\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faWindowClose\"]\n}); // Header component\n\n\nvar Header = function Header(_ref) {\n  var onClick = _ref.onClick,\n      onClick2 = _ref.onClick2,\n      burgerOn = _ref.burgerOn;\n  // conditionnal header menu\n  var menu;\n\n  if (burgerOn) {\n    menu = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick\n    }, BurgerElement);\n  } else {\n    menu = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick2\n    }, windowCloseElement);\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"header\", {\n    className: \"header\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"NavLink\"], {\n    exact: true,\n    to: \"/\",\n    activeClassName: \"nav-link--active\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"logoWhite\",\n    src: src_assets_images_borisdoyelogo_mini_white_png__WEBPACK_IMPORTED_MODULE_10___default.a,\n    alt: \"Logo\"\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_containers_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"navMenu\"\n  }, menu), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"fa-user-circle userAccount\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n    icon: \"user-circle\",\n    className: \"userIcon\"\n  })));\n};\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state, ownProps) {\n  return {\n    burgerOn: state.burgerOn\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    onClick2: function onClick2(event) {\n      console.log('yea');\n      var action = {\n        type: 'BURGER_OFF'\n      };\n      dispatch(action);\n    },\n    onClick: function onClick(event) {\n      console.log('ok');\n      var action = {\n        type: 'BURGER_ON'\n      };\n      dispatch(action);\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar HeaderContainer = connectionStrategies(Header); // Étape 3 : on exporte le composant connecté qui a été généré\n//export default AppContainer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContainer);\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Home/home.sass":
/*!***************************************!*\
  !*** ./src/components/Home/home.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./home.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Home/home.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Home/home.sass?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_assets_images_captureHomeBoris_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/captureHomeBoris.png */ \"./src/assets/images/captureHomeBoris.png\");\n/* harmony import */ var src_assets_images_captureHomeBoris_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_captureHomeBoris_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.sass */ \"./src/components/Home/home.sass\");\n/* harmony import */ var _home_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_boris_doyeRond_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/boris-doyeRond.png */ \"./src/assets/images/boris-doyeRond.png\");\n/* harmony import */ var src_assets_images_boris_doyeRond_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_boris_doyeRond_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/alpesRealisateur.jpg */ \"./src/assets/images/alpesRealisateur.jpg\");\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_assets_images_LogoBorisNoirPetit_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/LogoBorisNoirPetit.png */ \"./src/assets/images/LogoBorisNoirPetit.png\");\n/* harmony import */ var src_assets_images_LogoBorisNoirPetit_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_LogoBorisNoirPetit_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/images/montagne.jpg */ \"./src/assets/images/montagne.jpg\");\n/* harmony import */ var src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_iconeMontagne_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/images/iconeMontagne.png */ \"./src/assets/images/iconeMontagne.png\");\n/* harmony import */ var src_assets_images_iconeMontagne_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_iconeMontagne_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var src_assets_images_iconCamera_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/images/iconCamera.png */ \"./src/assets/images/iconCamera.png\");\n/* harmony import */ var src_assets_images_iconCamera_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_iconCamera_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var src_assets_images_photoBorisCarre_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/assets/images/photoBorisCarre.jpg */ \"./src/assets/images/photoBorisCarre.jpg\");\n/* harmony import */ var src_assets_images_photoBorisCarre_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_photoBorisCarre_jpg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var src_assets_images_BorisBateau_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/assets/images/BorisBateau.jpg */ \"./src/assets/images/BorisBateau.jpg\");\n/* harmony import */ var src_assets_images_BorisBateau_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_BorisBateau_jpg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var src_assets_images_photoBorisDrone_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/assets/images/photoBorisDrone.jpg */ \"./src/assets/images/photoBorisDrone.jpg\");\n/* harmony import */ var src_assets_images_photoBorisDrone_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_photoBorisDrone_jpg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var src_assets_images_photoCadrage_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/assets/images/photoCadrage.jpg */ \"./src/assets/images/photoCadrage.jpg\");\n/* harmony import */ var src_assets_images_photoCadrage_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_photoCadrage_jpg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/Slider */ \"./src/components/Slider/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  var iconPen = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconPen\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faPencilAlt\"]\n  });\n\n  var iconCalendar = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconClendar\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faCalendarAlt\"]\n  });\n\n  var iconMan = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconMan\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faUser\"]\n  });\n\n  var iconVideo = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconVideo\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faVideo\"]\n  });\n\n  var iconDrone = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconDrone\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faFighterJet\"]\n  });\n\n  var iconMontage = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faLaptopCode\"]\n  });\n\n  var iconMotion = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconMotion\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faPhotoVideo\"]\n  });\n\n  var iconMusic = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconMusic\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faMusic\"]\n  });\n\n  var iconSocial = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconSocial\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faThumbsUp\"]\n  });\n\n  var iconPhoto = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_16__[\"FontAwesomeIcon\"], {\n    className: \"iconPhoto\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__[\"faCameraRetro\"]\n  });\n\n  var sectionStyle = {\n    width: \"100%\",\n    height: \"1000px\",\n    backgroundImage: \"url(\".concat(src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, \")\"),\n    backgroundSize: 'cover',\n    overflow: 'hidden'\n  };\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, src_components_Slider__WEBPACK_IMPORTED_MODULE_15__[\"default\"]), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"quisommesnous\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"iconeMontagne\",\n    src: src_assets_images_iconeMontagne_png__WEBPACK_IMPORTED_MODULE_8___default.a,\n    alt: \"iconeMontagne\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"photosPresentations\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"textPresentation1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"borisPhotocarre\",\n    src: src_assets_images_photoBorisCarre_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,\n    alt: \"borisPhotocarre\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"quitexte\"\n  }, \" QUI\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"smallTitrePresentation1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoTitle\"\n  }, \"Vid\\xE9o\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"videoTitleText\"\n  }, \"Avec une touche artistique et cr\\xE9ative, Boris Doye Films vous offre un service global professionnel de conception et de r\\xE9alisation de films au coeur des Hautes-Alpes. R\\xE9alisateur, mais aussi concepteur du sc\\xE9nario de votre vid\\xE9o, une id\\xE9e, une envie ? Nous vous aiderons \\xE0 r\\xE9aliser votre projet, du sc\\xE9nario au montage de votre film. Nous ma\\xEEtrisons l\\u2019image et nous savons la rendre esth\\xE9tique. \\xC0 l\\u2019aide de nombreuses cam\\xE9ras, drones, stabilisateurs, nous avons la capacit\\xE9 de filmer partout et de monter vos images sur une station de montage professionnel 4K.\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"textPresentation2\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"borisBateau\",\n    src: src_assets_images_BorisBateau_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,\n    alt: \"borisBateau\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"sommestexte\"\n  }, \" SOMMES\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"smallTitrePresentation2\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"conseilsTitle\"\n  }, \"Conseils\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"conseilsTitleText\"\n  }, \"Envie d\\u2019originalit\\xE9 ? L\\u2019agence vous propose de l\\u2019animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue a\\xE9rienne en drone\\u2026 Avec le grand r\\xE9seau professionnel qui nous entoure, nous r\\xE9alisons tout support audiovisuel.Nous amor\\xE7ons ensemble une r\\xE9flexion coh\\xE9rente pour une production r\\xE9alisable et conforme \\xE0 vos attentes.\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"textPresentation3\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"borisDrone\",\n    src: src_assets_images_photoBorisDrone_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,\n    alt: \"borisDrone\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"noustexte\"\n  }, \"NOUS\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"smallTitrePresentation3\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"conseilsTitle\"\n  }, \"Drones\"), \" \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"dronesTitleText\"\n  }, \"Envie d\\u2019originalit\\xE9 ? L\\u2019agence vous propose de l\\u2019animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue a\\xE9rienne en drone\\u2026 Avec le grand r\\xE9seau professionnel qui nous entoure, nous r\\xE9alisons tout support audiovisuel.Tous les formats sont r\\xE9alisables. De la promotion institutionnelle, format court corporate pour les r\\xE9seaux sociaux, au films d\\u2019entreprise, prise de vues en drone reportages TV mais l\\u2019agence sait aussi cr\\xE9er de fabuleux documentaires t\\xE9l\\xE9vis\\xE9s.\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competences\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"competencesTitle\"\n  }, \"Comp\\xE9tences\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"iconCamera\",\n    src: src_assets_images_iconCamera_png__WEBPACK_IMPORTED_MODULE_9___default.a,\n    alt: \"iconCamera\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"separationLigne\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesGauche\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"comp\\xE9tencesGauche1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"scenarisation-title\"\n  }, \"Sc\\xE9narisation - Story-telling\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"scenarisation-text\"\n  }, \"Nos id\\xE9es sont au service d\\u2019histoires et de projets uniques : les v\\xF4tres.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconPen))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"comp\\xE9tencesGauche2\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"scenarisation-title2\"\n  }, \"Gestion de projet\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"scenarisation-text\"\n  }, \"Nous cr\\xE9ons et r\\xE9alisons des projets sur mesure en s\\xE9lectionnant nos figurants de mani\\xE8re rigoureuse.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconCalendar))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"comp\\xE9tencesGauche3\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"scenarisation-title3\"\n  }, \"Expertise\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"scenarisation-text\"\n  }, \"Nos 6 ann\\xE9es d\\u2019exp\\xE9rience nous aident \\xE0 cerner au mieux votre strat\\xE9gie, vos besoins et vos enjeux de communication\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconMan))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"comp\\xE9tencesGauche4\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"scenarisation-title4\"\n  }, \"Cadrage\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"scenarisation-text\"\n  }, \"Captation 4K jusqu\\u2019\\xE0 100im/s sur tous les terrains : d\\xE9couvrir notre mat\\xE9riel.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconVideo))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"comp\\xE9tencesGauche5\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"scenarisation-title5\"\n  }, \"Drone\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"scenarisation-text\"\n  }, \"Nous sommes agr\\xE9\\xE9s par la DGAC et assur\\xE9s pour r\\xE9aliser les prises de vues a\\xE9riennes les plus complexes.\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconDrone)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"photoCadrage\",\n    src: src_assets_images_photoCadrage_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    alt: \"borisDrone\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"title-droite1\"\n  }, \"Montage\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisationDroite\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n    className: \"iconMontage\"\n  }, iconMontage), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"text-droite1\"\n  }, \"Post-production moderne : colorim\\xE9trie, transitions dynamiques, montage captivant d\\xE8s les premi\\xE8res secondes de vid\\xE9o.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite2\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"title-droite2\"\n  }, \"Motion design\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconMotion), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"text-droite1\"\n  }, \"Ajout d\\u2019\\xE9l\\xE9ments graphiques anim\\xE9s dans nos r\\xE9alisations (titrages, dessins anim\\xE9s).\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite3\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"title-droite3\"\n  }, \"Sound Design\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconMusic), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"text-droite1\"\n  }, \"Cr\\xE9ation d\\u2019une ambiance sonore immersive pour plonger le spectateur dans votre univers.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite4\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"title-droite4\"\n  }, \"R\\xE9seaux sociaux\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconSocial), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"text-droite1\"\n  }, \"Production de contenu optimis\\xE9 pour les r\\xE9seaux sociaux et adapt\\xE9 aux attentes de votre communaut\\xE9.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"competencesDroite5\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"title-droite5\"\n  }, \"Photographie\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"scenarisation\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", null, iconPhoto), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"text-droite1\"\n  }, \"Des sommets aux open-spaces, nous captons les \\xE9motions et les instants les plus intenses.\"))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"latestVideosContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teaserTitleContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"teaserTitle\"\n  }, \"Nos derni\\xE8res vid\\xE9os\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"TeaserContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"iframe\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    src: \"https://player.vimeo.com/video/198345088?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1\",\n    width: \"1920\",\n    height: \"200\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"NavLink\"], {\n    exact: true,\n    to: \"/work\",\n    activeClassName: \"nav-link--active\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"video-Link\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Regarder\"\n  }, \"regarder\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Une\"\n  }, \"une\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Video\"\n  }, \"video\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    src: \"https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1\",\n    width: \"1920\",\n    height: \"200\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"NavLink\"], {\n    exact: true,\n    to: \"/work\",\n    activeClassName: \"nav-link--active\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"video-Link\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Regarder\"\n  }, \"regarder\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Une\"\n  }, \"une\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Video\"\n  }, \"video\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    src: \"https://player.vimeo.com/video/282989783?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1\",\n    width: \"1920\",\n    height: \"200\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"NavLink\"], {\n    exact: true,\n    to: \"/work\",\n    activeClassName: \"nav-link--active\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"video-Link\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Regarder\"\n  }, \"regarder\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Une\"\n  }, \"une\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n    className: \"videoLink-Video\"\n  }, \"video\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n    src: \"https://player.vimeo.com/video/274647795?autoplay=1&loop=1&background=1\",\n    width: \"1920\",\n    height: \"200\",\n    frameborder: \"0\",\n    allow: \"autoplay; fullscreen\",\n    allowfullscreen: true\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/url */ \"./src/utils/url.js\");\n/* harmony import */ var _nav_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.sass */ \"./src/components/Nav/nav.sass\");\n/* harmony import */ var _nav_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nav_sass__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Nav = function Nav() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"nav\", {\n    className: \"navMenu\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: \"/\",\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Home\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/work', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Work\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/team', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Team\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/aventures', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Aventures\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/equipements', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Equipements\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/news', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"News\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/clients', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Clients\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_4__[\"getURL\"])('/contact', name),\n    key: name,\n    className: \"nav-link\",\n    activeClassName: \"nav-link--active\"\n  }, \"Contact\"));\n};\n\nNav.propTypes = {\n  recipes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/components/Nav/index.js?");

/***/ }),

/***/ "./src/components/Nav/nav.sass":
/*!*************************************!*\
  !*** ./src/components/Nav/nav.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./nav.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Nav/nav.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Nav/nav.sass?");

/***/ }),

/***/ "./src/components/NavBurger/index.js":
/*!*******************************************!*\
  !*** ./src/components/NavBurger/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/url */ \"./src/utils/url.js\");\n/* harmony import */ var _navburger_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navburger.sass */ \"./src/components/NavBurger/navburger.sass\");\n/* harmony import */ var _navburger_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navburger_sass__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar NavBurger = function NavBurger(_ref) {\n  var onClick2 = _ref.onClick2;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"nav\", {\n    className: \"navburger\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: \"/\",\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Home\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/work', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Work\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/team', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Team\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/clients', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Clients\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/equipements', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Equipements\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/aventures', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Aventures\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/news', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"News\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n    onClick: onClick2,\n    exact: true,\n    to: Object(src_utils_url__WEBPACK_IMPORTED_MODULE_5__[\"getURL\"])('/contact', name),\n    key: name,\n    className: \"navburgerlink\",\n    activeClassName: \"nav-link--active\"\n  }, \"Contact\"));\n};\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state, ownProps) {\n  return {\n    burgerOn: state.burgerOn\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    onClick2: function onClick2(event) {\n      console.log('yea');\n      var action = {\n        type: 'BURGER_OFF'\n      };\n      dispatch(action);\n    },\n    onClick: function onClick(event) {\n      console.log('ok');\n      var action = {\n        type: 'BURGER_ON'\n      };\n      dispatch(action);\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar NavBurgerContainer = connectionStrategies(NavBurger); // Étape 3 : on exporte le composant connecté qui a été généré\n//export default AppContainer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBurgerContainer);\n\n//# sourceURL=webpack:///./src/components/NavBurger/index.js?");

/***/ }),

/***/ "./src/components/NavBurger/navburger.sass":
/*!*************************************************!*\
  !*** ./src/components/NavBurger/navburger.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./navburger.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/NavBurger/navburger.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/NavBurger/navburger.sass?");

/***/ }),

/***/ "./src/components/News/index.js":
/*!**************************************!*\
  !*** ./src/components/News/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _news_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.sass */ \"./src/components/News/news.sass\");\n/* harmony import */ var _news_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_news_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar News = function News() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"news\"\n  }, \"Nos nouveaut\\xE9es !\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./src/components/News/index.js?");

/***/ }),

/***/ "./src/components/News/news.sass":
/*!***************************************!*\
  !*** ./src/components/News/news.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./news.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/News/news.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/News/news.sass?");

/***/ }),

/***/ "./src/components/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/components/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notFound_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notFound.sass */ \"./src/components/NotFound/notFound.sass\");\n/* harmony import */ var _notFound_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notFound_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar NotFound = function NotFound() {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"not-found\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"not-found-alert\"\n  }, \"404\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"not-found-text\"\n  }, \"oups! page introuvable! mauvaise adresse! \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/components/NotFound/index.js?");

/***/ }),

/***/ "./src/components/NotFound/notFound.sass":
/*!***********************************************!*\
  !*** ./src/components/NotFound/notFound.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./notFound.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/NotFound/notFound.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/NotFound/notFound.sass?");

/***/ }),

/***/ "./src/components/Slider/index.js":
/*!****************************************!*\
  !*** ./src/components/Slider/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider */ \"./node_modules/react-awesome-slider/dist/index.js\");\n/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/montagne.jpg */ \"./src/assets/images/montagne.jpg\");\n/* harmony import */ var src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/alpesRealisateur.jpg */ \"./src/assets/images/alpesRealisateur.jpg\");\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/Showreel.jpg */ \"./src/assets/images/Showreel.jpg\");\n/* harmony import */ var src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_assets_images_fasboaVideo_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/fasboaVideo.mp4 */ \"./src/assets/images/fasboaVideo.mp4\");\n/* harmony import */ var src_assets_images_fasboaVideo_mp4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_fasboaVideo_mp4__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! video-react */ \"./node_modules/video-react/lib/index.js\");\n/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider.css */ \"./src/components/Slider/slider.css\");\n/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_slider_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar Slider = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_awesome_slider__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  cssModule: _slider_css__WEBPACK_IMPORTED_MODULE_8___default.a\n}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n  \"data-src\": src_assets_images_montagne_jpg__WEBPACK_IMPORTED_MODULE_3___default.a\n}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null), \" \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n  src: \"https://player.vimeo.com/video/198345088?loop=1&title=0&byline=0&portrait=0\",\n  width: \"1920\",\n  height: \"1080\",\n  frameborder: \"0\",\n  allow: \"autoplay; fullscreen\",\n  allowfullscreen: true\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./src/components/Slider/index.js?");

/***/ }),

/***/ "./src/components/Slider/slider.css":
/*!******************************************!*\
  !*** ./src/components/Slider/slider.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./slider.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Slider/slider.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Slider/slider.css?");

/***/ }),

/***/ "./src/components/Team/index.js":
/*!**************************************!*\
  !*** ./src/components/Team/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_assets_images_teamdauphins_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/images/teamdauphins.jpg */ \"./src/assets/images/teamdauphins.jpg\");\n/* harmony import */ var src_assets_images_teamdauphins_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_teamdauphins_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_assets_images_borisBureau_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/borisBureau.jpg */ \"./src/assets/images/borisBureau.jpg\");\n/* harmony import */ var src_assets_images_borisBureau_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_borisBureau_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_cleo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/cleo.jpg */ \"./src/assets/images/cleo.jpg\");\n/* harmony import */ var src_assets_images_cleo_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_cleo_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_assets_images_HugoClouzeau_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/HugoClouzeau.jpg */ \"./src/assets/images/HugoClouzeau.jpg\");\n/* harmony import */ var src_assets_images_HugoClouzeau_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_HugoClouzeau_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _team_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.sass */ \"./src/components/Team/team.sass\");\n/* harmony import */ var _team_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_team_sass__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Team = function Team() {\n  var sectionStyle1 = {\n    width: \"100%\",\n    height: \"550px\",\n    backgroundImage: \"url(\".concat(src_assets_images_teamdauphins_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, \")\"),\n    backgroundSize: 'cover',\n    overflow: 'hidden'\n  };\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamPicture\",\n    style: sectionStyle1\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"presentationTeam\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamtitle\"\n  }, \"Notre \\xE9quipe\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornPosterContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"borisPhoto\",\n    src: src_assets_images_borisBureau_jpg__WEBPACK_IMPORTED_MODULE_3___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"borisText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"borisTitle\"\n  }, \"Boris Doye\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"borisPresentationTexte\"\n  }, \"Originaire de l\\u2019Isle sur Sorgue dans le Vaucluse, Boris est venu s\\u2019installer dans les Hautes-Alpes pour \\xEAtre au plus proche de ses passions. Car lorsqu\\u2019il n\\u2019est pas derri\\xE8re sa cam\\xE9ra, Boris est dans un kayak, en train de d\\xE9valer les rivi\\xE8res de la Durance, du Guil, de l\\u2019Ubaye ; ou en train de survoler la vall\\xE9e du Queyras sous sa voile de parapente. Un aventurier dans l\\u2019\\xE2me \\xE0 la recherche de sensations et de nouvelles exp\\xE9riences, mais avant tout un homme qui aime partager des moments intenses. Dans chaque aventure il y a des risques, mais Boris sait qu\\u2019il peut compter sur ses camarades pour veiller sur lui, et de cette confiance jaillit de grands moments et aussi de belles amiti\\xE9s. Par ailleurs notre aventurier ne se contente pas de vivre des moments extraordinaires, il les capture, prenant des risques parfois consid\\xE9rables dans le but de nous offrir un spectacle inoubliable. Lorsqu\\u2019on regarde ses films, on ne se rend pas toujours compte que le reporter se rend dans des endroits tr\\xE8s recul\\xE9s, loin de toute civilisation et souvent inaccessibles \\xE0 n\\u2019importe quels secours. C\\u2019est donc au p\\xE9ril de sa vie que Boris enregistre ses images, et c\\u2019est ce qui rend ses films encore plus puissants.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornPosterContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"hugoPhoto\",\n    src: src_assets_images_HugoClouzeau_jpg__WEBPACK_IMPORTED_MODULE_5___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"borisText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"borisTitle\"\n  }, \"Hugo Clouzeau\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"borisPresentationTexte\"\n  }, \"Hugo fait des films comme un artisan o\\xF9 chaque objet, chaque film est unique. Hugo est investi dans tout le processus de cr\\xE9ation et de production. Aujourd'hui, en parall\\xE8le de travailler pour le secteur du documentaire il r\\xE9alise ses propres projets et fusionne sa passion pour la production avec celle pour le kayak et l'aventure. Le collectif vid\\xE9o \\xAB We are Hungry \\xBB est compos\\xE9 des kayakistes fran\\xE7ais : St\\xE9phane Pion, Mathieu Coldebella, Louis H\\xE9tier, Guillaume Fievez et Hugo Clouzeau. Ils aiment mettre en image lerus vir\\xE9es kayak.\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"teamContainer1\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"caphornPosterContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", {\n    className: \"cleoPhoto\",\n    src: src_assets_images_cleo_jpg__WEBPACK_IMPORTED_MODULE_4___default.a\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"borisText\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", {\n    className: \"borisTitle\"\n  }, \"Cl\\xE9o Lhote\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n    className: \"borisPresentationTexte\"\n  }, \"Originaire de l\\u2019Isle sur Sorgue dans le Vaucluse, Boris est venu s\\u2019installer dans les Hautes-Alpes pour \\xEAtre au plus proche de ses passions. Car lorsqu\\u2019il n\\u2019est pas derri\\xE8re sa cam\\xE9ra, Boris est dans un kayak, en train de d\\xE9valer les rivi\\xE8res de la Durance, du Guil, de l\\u2019Ubaye ; ou en train de survoler la vall\\xE9e du Queyras sous sa voile de parapente. Un aventurier dans l\\u2019\\xE2me \\xE0 la recherche de sensations et de nouvelles exp\\xE9riences, mais avant tout un homme qui aime partager des moments intenses. Dans chaque aventure il y a des risques, mais Boris sait qu\\u2019il peut compter sur ses camarades pour veiller sur lui, et de cette confiance jaillit de grands moments et aussi de belles amiti\\xE9s. Par ailleurs notre aventurier ne se contente pas de vivre des moments extraordinaires, il les capture, prenant des risques parfois consid\\xE9rables dans le but de nous offrir un spectacle inoubliable. Lorsqu\\u2019on regarde ses films, on ne se rend pas toujours compte que le reporter se rend dans des endroits tr\\xE8s recul\\xE9s, loin de toute civilisation et souvent inaccessibles \\xE0 n\\u2019importe quels secours. C\\u2019est donc au p\\xE9ril de sa vie que Boris enregistre ses images, et c\\u2019est ce qui rend ses films encore plus puissants.\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\n\n//# sourceURL=webpack:///./src/components/Team/index.js?");

/***/ }),

/***/ "./src/components/Team/team.sass":
/*!***************************************!*\
  !*** ./src/components/Team/team.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./team.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Team/team.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Team/team.sass?");

/***/ }),

/***/ "./src/components/Work/index.js":
/*!**************************************!*\
  !*** ./src/components/Work/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/Showreel.jpg */ \"./src/assets/images/Showreel.jpg\");\n/* harmony import */ var src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_assets_images_Outdoormix_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/images/Outdoormix.jpg */ \"./src/assets/images/Outdoormix.jpg\");\n/* harmony import */ var src_assets_images_Outdoormix_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Outdoormix_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_assets_images_Queyras_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/images/Queyras.jpg */ \"./src/assets/images/Queyras.jpg\");\n/* harmony import */ var src_assets_images_Queyras_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Queyras_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/images/alpesRealisateur.jpg */ \"./src/assets/images/alpesRealisateur.jpg\");\n/* harmony import */ var src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_assets_images_Vietnam_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/images/Vietnam.jpg */ \"./src/assets/images/Vietnam.jpg\");\n/* harmony import */ var src_assets_images_Vietnam_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Vietnam_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var src_assets_images_Fasboa_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/images/Fasboa.jpg */ \"./src/assets/images/Fasboa.jpg\");\n/* harmony import */ var src_assets_images_Fasboa_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Fasboa_jpg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var src_assets_images_Inde_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/images/Inde.png */ \"./src/assets/images/Inde.png\");\n/* harmony import */ var src_assets_images_Inde_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_assets_images_Inde_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.sass */ \"./src/components/Work/styles.sass\");\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_sass__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Work = function Work(_ref) {\n  var onClick = _ref.onClick,\n      videoShowreellOn = _ref.videoShowreellOn,\n      onClick2 = _ref.onClick2,\n      onClick3 = _ref.onClick3,\n      onClick4 = _ref.onClick4,\n      onClick5 = _ref.onClick5,\n      onClick6 = _ref.onClick6,\n      onClick7 = _ref.onClick7,\n      onClick8 = _ref.onClick8,\n      videoQueyrasOn = _ref.videoQueyrasOn,\n      videoVietnamOn = _ref.videoVietnamOn,\n      videoOutdoormixOn = _ref.videoOutdoormixOn;\n\n  var iconPlay1 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__[\"FontAwesomeIcon\"], {\n    className: \"iconPlay1\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__[\"faPlay\"]\n  });\n\n  var iconPlay2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__[\"FontAwesomeIcon\"], {\n    className: \"iconPlay2\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__[\"faPlay\"]\n  });\n\n  var cross = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__[\"FontAwesomeIcon\"], {\n    className: \"iconCross\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__[\"faWindowClose\"]\n  });\n\n  var sectionStyle1 = {\n    width: \"100%\",\n    height: \"550px\",\n    backgroundImage: \"url(\".concat(src_assets_images_alpesRealisateur_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, \")\"),\n    backgroundSize: 'cover',\n    overflow: 'hidden'\n  };\n  var sectionStyle2 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 8% 0% 5%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Showreel_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n    backgroundSize: \"cover\",\n    display: \"inline-block\",\n    position: \"static\"\n  };\n  var sectionStyle3 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 0% 0% 7%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Queyras_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, \")\"),\n    backgroundSize: \"cover\",\n    display: \"inline-block\"\n  };\n  var sectionStyle4 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 0% 0% 5%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Vietnam_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, \")\"),\n    backgroundSize: \"cover\",\n    display: \"inline-bloc\"\n  };\n  var sectionStyle5 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 0% 0% 7%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Outdoormix_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\"),\n    backgroundSize: \"cover\",\n    display: \"inline-bloc\"\n  };\n  var sectionStyle6 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 0% 0% 5%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Fasboa_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, \")\"),\n    backgroundSize: \"cover\"\n  };\n  var sectionStyle7 = {\n    width: \"900px\",\n    height: \"600px\",\n    margin: \"0% 0% 0% 7%\",\n    backgroundImage: \"url(\".concat(src_assets_images_Inde_png__WEBPACK_IMPORTED_MODULE_9___default.a, \")\"),\n    backgroundSize: \"cover\",\n    display: \"inline-block\"\n  };\n  var showReellShow;\n\n  if (videoShowreellOn) {\n    showReellShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"videoPresentContainer1\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"showReelContainer\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"showReel\",\n      style: sectionStyle2\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"showReelContent\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Show reel\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Best-off\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick\n    }, iconPlay1)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"queyrasContainer\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"queyras\",\n      style: sectionStyle3\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"queyrasContent\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Queyras-\\xE9t\\xE9\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Office du tourisme du Queyras\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick3,\n      className: \"iconPlay2\"\n    }, iconPlay2)))));\n  } else {\n    showReellShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"showReelIframe\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n      src: \"https://player.vimeo.com/video/198345088?loop=1&autoplay=1&title=0&byline=0&portrait=0\",\n      width: \"1920\",\n      height: \"900\",\n      frameborder: \"0\",\n      allow: \"autoplay; fullscreen\",\n      allowfullscreen: true\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick2\n    }, \"  \", cross, \" \"));\n  }\n\n  if (videoQueyrasOn) {\n    showReellShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"queyrasIframe\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n      src: \"https://player.vimeo.com/video/274647795?autoplay=1&loop=1\",\n      width: \"1920\",\n      height: \"900\",\n      frameborder: \"0\",\n      allow: \"autoplay; fullscreen\",\n      allowfullscreen: true\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick4\n    }, \"  \", cross, \" \"));\n  } else {}\n\n  var vietnamShow;\n\n  if (videoVietnamOn) {\n    vietnamShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"videoPresentContainer2\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"vietnamContainer\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"vietnam\",\n      style: sectionStyle4\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"vietnamContent\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Vietnam\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Marque de v\\xEAtement\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick5,\n      className: \"iconPlay2\"\n    }, iconPlay2)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"outdoormixContainer\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"outdoormix\",\n      style: sectionStyle5\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"outdoormixContent\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Outdoormix\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Festival\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick7,\n      className: \"iconPlay2\"\n    }, iconPlay1)))));\n  } else {\n    showReellShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"vietnamIframe\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n      src: \"https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0\",\n      width: \"1920\",\n      height: \"900\",\n      frameborder: \"0\",\n      allow: \"autoplay; fullscreen\",\n      allowfullscreen: true\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick6\n    }, \"  \", cross, \" \"));\n  }\n\n  if (videoOutdoormixOn) {\n    showReellShow = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n      className: \"outdoormixIframe\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"iframe\", {\n      src: \"https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0\",\n      width: \"1920\",\n      height: \"900\",\n      frameborder: \"0\",\n      allow: \"autoplay; fullscreen\",\n      allowfullscreen: true\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n      onClick: onClick8\n    }, \"  \", cross, \" \"));\n  } else {}\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"mainPicture\",\n    style: sectionStyle1\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"presentationVideos\"\n  }, \"NOS PRODUCTIONS \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"presentationVideos2\"\n  }, \"Film\\xE9es avec passion \")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"falseMargin\"\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"videoPresentContainer1\"\n  }, showReellShow), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"videoPresentContainer2\"\n  }, vietnamShow), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"videoPresentContainer3\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"fasboaContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"fasboa\",\n    style: sectionStyle6\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"fasboaContent\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Fasboa\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Sports Extr\\xEAmes\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n    className: \"iconPlay2\"\n  }, iconPlay2)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"indeContainer\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"inde\",\n    style: sectionStyle7\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    className: \"indeContent\"\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Inde\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", null, \"Kayak Extr\\xEAme\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"image\", {\n    className: \"iconPlay2\"\n  }, iconPlay1))))));\n};\n\nvar connectionStrategies = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])( // 1er argument : stratégie de lecture (dans le state privé global)\nfunction (state, ownProps) {\n  return {\n    videoShowreellOn: state.videoShowreellOn,\n    videoQueyrasOn: state.videoQueyrasOn,\n    videoVietnamOn: state.videoVietnamOn,\n    videoOutdoormixOn: state.videoOutdoormixOn\n  };\n}, // 2d argument : stratégie d'écriture (dans le state privé global)\nfunction (dispatch, ownProps) {\n  return {\n    onClick: function onClick(event) {\n      console.log('ok');\n      var action = {\n        type: 'VIDEO1_ON'\n      };\n      dispatch(action);\n    },\n    onClick2: function onClick2(event) {\n      var action = {\n        type: 'VIDEO1_OFF'\n      };\n      dispatch(action);\n    },\n    onClick3: function onClick3(event) {\n      var action = {\n        type: 'VIDEO2_ON'\n      };\n      dispatch(action);\n    },\n    onClick4: function onClick4(event) {\n      var action = {\n        type: 'VIDEO2_OFF'\n      };\n      dispatch(action);\n    },\n    onClick5: function onClick5(event) {\n      var action = {\n        type: 'VIDEO3_ON'\n      };\n      dispatch(action);\n    },\n    onClick6: function onClick6(event) {\n      var action = {\n        type: 'VIDEO3_OFF'\n      };\n      dispatch(action);\n    },\n    onClick7: function onClick7(event) {\n      var action = {\n        type: 'VIDEO4_ON'\n      };\n      dispatch(action);\n    },\n    onClick8: function onClick8(event) {\n      var action = {\n        type: 'VIDEO4_OFF'\n      };\n      dispatch(action);\n    }\n  };\n}); // Étape 2 : on applique ces stratégies à un composant spécifique.\n\nvar WorkContainer = connectionStrategies(Work); // Étape 3 : on exporte le composant connecté qui a été généré\n//export default AppContainer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkContainer);\n\n//# sourceURL=webpack:///./src/components/Work/index.js?");

/***/ }),

/***/ "./src/components/Work/styles.sass":
/*!*****************************************!*\
  !*** ./src/components/Work/styles.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/Work/styles.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/Work/styles.sass?");

/***/ }),

/***/ "./src/components/scroll/index.js":
/*!****************************************!*\
  !*** ./src/components/scroll/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar ScrollToTop = function ScrollToTop(_ref) {\n  var children = _ref.children,\n      pathname = _ref.location.pathname;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.scrollTo(0, 0);\n  }, [pathname]);\n  return children || null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ScrollToTop));\n\n//# sourceURL=webpack:///./src/components/scroll/index.js?");

/***/ }),

/***/ "./src/containers/Nav.js":
/*!*******************************!*\
  !*** ./src/containers/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Nav */ \"./src/components/Nav/index.js\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    recipes: state.recipes\n  };\n};\n\nvar mapDispatchToProps = {};\nvar NavContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(NavContainer));\n\n//# sourceURL=webpack:///./src/containers/Nav.js?");

/***/ }),

/***/ "./src/containers/NavBurger.js":
/*!*************************************!*\
  !*** ./src/containers/NavBurger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_NavBurger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/NavBurger */ \"./src/components/NavBurger/index.js\");\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    recipes: state.recipes\n  };\n};\n\nvar mapDispatchToProps = {};\nvar NavBurgerContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_NavBurger__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(NavBurgerContainer));\n\n//# sourceURL=webpack:///./src/containers/NavBurger.js?");

/***/ }),

/***/ "./src/data/categories.js":
/*!********************************!*\
  !*** ./src/data/categories.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/data/categories.js?");

/***/ }),

/***/ "./src/data/posts.js":
/*!***************************!*\
  !*** ./src/data/posts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/data/posts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var src_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/App */ \"./src/components/App/index.js\");\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/store */ \"./src/store/index.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var src_components_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/scroll */ \"./src/components/scroll/index.js\");\n\n\n/**\n * NPM import\n */\n\n\n\n\n\n/**\n * Local import\n */\n\n\n\n\n\n/**\n * Code\n */\n\nvar reactRootElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n  store: src_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"BrowserRouter\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_scroll__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(src_components_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))));\n\nvar renderingArea = document.querySelector('#root');\nObject(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"render\"])(reactRootElement, renderingArea); // Exemple d'action interceptée par un middleware.\n\nsrc_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_8__[\"sideEffect\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var src_store_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/middleware */ \"./src/store/middleware.js\");\n// La librairie redux s'occupe de nous fournir un système de\n// gestion d'état (state management). Il n'est pas question ici\n// de React !\n\n\n\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]; // On crée LE store de CETTE application. Un castor sympa :)\n\nvar kastore = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(src_store_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n/* harmony default export */ __webpack_exports__[\"default\"] = (kastore);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/middleware.js":
/*!*********************************!*\
  !*** ./src/store/middleware.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n // On implémente un middleware. Son rôle est d'intercepter des actions\n// dont le but premier n'est pas d'arriver jusqu'au reducer.\n// Un middleware s'occupe avant tout des effets de bord. Il décide si\n// certaines actions doivent être traitées autrement que par une\n// mise-à-jour du state.\n// Il est possible de déclencher à la fois un effet de bord & une màj.\n\nvar url = 'http://localhost:27017/api/posts';\n\nvar middleware = function middleware(store) {\n  return function (next) {\n    return function (action) {\n      console.log('middleware:', action); // La douane examine nos papiers d'identité.\n\n      switch (action.type) {\n        // La douane intercepte spécifiquement les actions de type\n        // 'SIDE_EFFECT'. Ces actions ne doivent pas aller au reducer,\n        // mais déclencher des effets de bord.\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_0__[\"SIDE_EFFECT\"]:\n          {\n            console.log('middleware/SIDE_EFFECT'); // Ici, on peut faire du logging, lancer des requêtes AJAX, etc.\n\n            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(function (response) {\n              var action = {\n                type: 'RESPONSE_ON',\n                value: response.data\n              };\n              store.dispatch(action);\n            })[\"catch\"](function (error) {\n              console.error(error);\n            });\n          }\n\n        default:\n          {\n            console.log('middleware/default');\n            next(action);\n          }\n      }\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);\n\n//# sourceURL=webpack:///./src/store/middleware.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: UPDATE_INPUT_VALUE, SIDE_EFFECT, default, updateInputValue, sideEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_INPUT_VALUE\", function() { return UPDATE_INPUT_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIDE_EFFECT\", function() { return SIDE_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateInputValue\", function() { return updateInputValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideEffect\", function() { return sideEffect; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';\nvar SIDE_EFFECT = 'SIDE_EFFECT';\nvar initialState = {\n  burgerOn: true,\n  response: [],\n  videoShowreellOn: true,\n  videoQueyrasOn: false,\n  videoVietnamOn: true,\n  videoOutdoormixOn: false\n};\nvar defaultAction = {};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;\n  console.log(action.value);\n\n  switch (action.type) {\n    case 'BURGER_ON':\n      {\n        return _objectSpread({}, state, {\n          burgerOn: false\n        });\n      }\n\n    case 'BURGER_OFF':\n      {\n        return _objectSpread({}, state, {\n          burgerOn: true\n        });\n      }\n\n    case 'RESPONSE_ON':\n      {\n        return _objectSpread({}, state, {\n          response: action.value[0]\n        });\n      }\n\n    case 'VIDEO1_ON':\n      {\n        return _objectSpread({}, state, {\n          videoShowreellOn: false\n        });\n      }\n\n    case 'VIDEO1_OFF':\n      {\n        return _objectSpread({}, state, {\n          videoShowreellOn: true\n        });\n      }\n\n    case 'VIDEO2_ON':\n      {\n        return _objectSpread({}, state, {\n          videoQueyrasOn: true\n        });\n      }\n\n    case 'VIDEO2_OFF':\n      {\n        return _objectSpread({}, state, {\n          videoQueyrasOn: false\n        });\n      }\n\n    case 'VIDEO3_ON':\n      {\n        return _objectSpread({}, state, {\n          videoVietnamOn: false\n        });\n      }\n\n    case 'VIDEO3_OFF':\n      {\n        return _objectSpread({}, state, {\n          videoVietnamOn: true\n        });\n      }\n\n    case 'VIDEO4_ON':\n      {\n        return _objectSpread({}, state, {\n          videoOutdoormixOn: true\n        });\n      }\n\n    case 'VIDEO4_OFF':\n      {\n        return _objectSpread({}, state, {\n          videoOutdoormixOn: false\n        });\n      }\n\n    default:\n      {\n        // return state;\n        // Dans le cas où on ne comprend pas quelle est l'action à\n        // effecture (action.type n'est pas reconnu), on retourne\n        // une copie non-altérée du state courant, reçu en paramètre.\n        return _objectSpread({}, state);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\nvar updateInputValue = function updateInputValue(value) {\n  return {\n    type: UPDATE_INPUT_VALUE,\n    value: value\n  };\n};\nvar sideEffect = function sideEffect() {\n  return {\n    type: SIDE_EFFECT\n  };\n};\n\n//# sourceURL=webpack:///./src/store/reducer.js?");

/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/styles/index.sass?");

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/*! exports provided: getSlug, getURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSlug\", function() { return getSlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getURL\", function() { return getURL; });\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);\n // Transformation d'une string en slug avec la lib slugify\n// Objet de config pour :\n// - passer en minuscules\n// - supprimer les caractères en trop : `*_+~.()'\"!-:@`\n\nvar getSlug = function getSlug(string) {\n  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(string, {\n    lower: true,\n    remove: /[$*_+~.()'\"!\\-:@]/g\n  });\n}; // Recomposition d'une URL avec un prefix + le travail de getSlug()\n\nvar getURL = function getURL(prefix, name) {\n  return \"\".concat(prefix, \"/\").concat(getSlug(name));\n};\n\n//# sourceURL=webpack:///./src/utils/url.js?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/styles/index.sass ./src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/styles/index.sass */\"./src/styles/index.sass\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/styles/index.sass_./src/index.js?");

/***/ })

/******/ });