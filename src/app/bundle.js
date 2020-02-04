/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"src/app/bundle": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "src/app/" + chunkId + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@syncfusion/ej2-base/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/index.js ***!
  \****************************************************/
/*! exports provided: blazorCultureFormats, IntlBase, Ajax, Animation, rippleEffect, isRippleEnabled, enableRipple, Base, getComponent, removeChildInstance, Browser, Component, ChildProperty, Position, Draggable, Droppable, EventHandler, onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, Internationalization, setCulture, setCurrencyCode, loadCldr, enableRtl, getNumericObject, getNumberDependable, getDefaultDateObject, KeyboardEvents, L10n, ModuleLoader, Property, Complex, ComplexFactory, Collection, CollectionFactory, Event, NotifyPropertyChanges, CreateBuilder, SwipeSettings, Touch, HijriParser, blazorTemplates, getRandomId, compile, updateBlazorTemplate, resetBlazorTemplate, setTemplateEngine, getTemplateEngine, disableBlazorMode, createInstance, setImmediate, getValue, setValue, deleteObject, isObject, getEnumValue, merge, extend, isNullOrUndefined, isUndefined, getUniqueID, debounce, queryParams, isObjectArray, compareElementParent, throwError, print, formatUnit, enableBlazorMode, isBlazor, getElement, getInstance, addInstance, uniqueID, createElement, addClass, removeClass, isVisible, prepend, append, detach, remove, attributes, select, selectAll, closest, siblings, getAttributeOrDefault, setStyleAttribute, classList, matches, Observer, SanitizeHtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@syncfusion/ej2-base/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorCultureFormats", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["blazorCultureFormats"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlBase", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["IntlBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Ajax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["enableRipple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChildInstance", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["removeChildInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChildProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Droppable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["EventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["onIntlChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["rightToLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["cldrData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["defaultCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["defaultCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Internationalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["loadCldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["enableRtl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getNumericObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberDependable", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getNumberDependable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getDefaultDateObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["KeyboardEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["L10n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ModuleLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Complex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ComplexFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CollectionFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CreateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["SwipeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Touch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HijriParser", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["HijriParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorTemplates", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["blazorTemplates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getRandomId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateBlazorTemplate", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["updateBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetBlazorTemplate", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["resetBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setTemplateEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getTemplateEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBlazorMode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["disableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["createInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["deleteObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getEnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["queryParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isObjectArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["compareElementParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["throwError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["formatUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBlazorMode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["enableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlazor", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isBlazor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["addInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["uniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["attributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["siblings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getAttributeOrDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setStyleAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["classList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlHelper", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"]; });

/**
 * index
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/ajax.js":
/*!*******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/ajax.js ***!
  \*******************************************************/
/*! exports provided: Ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return Ajax; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
/**
 * Ajax class provides ability to make asynchronous HTTP request to the server
 * ```typescript
 *   var ajax = new Ajax("index.html", "GET", true);
 *   ajax.send().then(
 *               function (value) {
 *                   console.log(value);
 *               },
 *               function (reason) {
 *                   console.log(reason);
 *               });
 * ```
 */
var Ajax = /** @class */ (function () {
    /**
     * Constructor for Ajax class
     * @param  {string|Object} options?
     * @param  {string} type?
     * @param  {boolean} async?
     * @returns defaultType
     */
    function Ajax(options, type, async, contentType) {
        /**
         * A boolean value indicating whether the request should be sent asynchronous or not.
         * @default true
         */
        this.mode = true;
        /**
         * A boolean value indicating whether to ignore the promise reject.
         * @private
         * @default true
         */
        this.emitError = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
        this.contentType = (this.contentType !== undefined) ? this.contentType : contentType;
    }
    /**
     * Send the request to server.
     * @param {any} data - To send the user data
     * @return {Promise}
     */
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data) ? this.data : data;
        var eventArgs = {
            cancel: false,
            httpRequest: null
        };
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onLoad)) {
                _this.httpRequest.onload = _this.onLoad;
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onProgress)) {
                _this.httpRequest.onprogress = _this.onProgress;
            }
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onAbort)) {
                _this.httpRequest.onabort = _this.onAbort;
            }
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onError)) {
                _this.httpRequest.onerror = _this.onError;
            }
            //** Upload Events **/
            /* istanbul ignore next */
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.onUploadProgress)) {
                _this.httpRequest.upload.onprogress = _this.onUploadProgress;
            }
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            // Set default headers
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.data) && _this.contentType !== null) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                eventArgs.httpRequest = _this.httpRequest;
                _this.beforeSend(eventArgs);
            }
            if (!eventArgs.cancel) {
                _this.httpRequest.send(!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.data) ? _this.data : null);
            }
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    // no exception handle
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            //success range should be 200 to 299
            if ((this.httpRequest.status >= 200 && this.httpRequest.status <= 299) || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                if (this.emitError) {
                    reject(new Error(this.failureHandler(this.httpRequest.statusText)));
                }
                else {
                    resolve();
                }
            }
        }
    };
    /**
     * To get the response header from XMLHttpRequest
     * @param  {string} key Key to search in the response header
     * @returns {string}
     */
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/animation.js":
/*!************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/animation.js ***!
  \************************************************************/
/*! exports provided: Animation, rippleEffect, isRippleEnabled, enableRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return rippleEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return isRippleEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return enableRipple; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./node_modules/@syncfusion/ej2-base/src/browser.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * The Animation framework provide options to animate the html DOM elements
 * ```typescript
 *   let animeObject = new Animation({
 *      name: 'SlideLeftIn',
 *      duration: 1000
 *   });
 *   animeObject.animate('#anime1');
 *   animeObject.animate('#anime2', { duration: 500 });
 * ```
 */
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        /**
         * @private
         */
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation_1 = Animation;
    /**
     * Applies animation to the current element.
     * @param {string | HTMLElement} element - Element which needs to be animated.
     * @param {AnimationModel} options - Overriding default animation settings.
     * @return {void}
     */
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(Object(_dom__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    /**
     * Stop the animation effect on animated element.
     * @param {HTMLElement} element - Element which needs to be stop the animation.
     * @param {AnimationOptions} model - Handling the animation model at stop function.
     * @return {void}
     */
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    /**
     * Set delay to animation element
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    /**
     * Triggers animation
     * @param {AnimationModel} model
     * @returns {void}
     */
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    // let step: number = model.timeStamp = timeStamp - startTime;
                    /** phantomjs workaround for timestamp fix */
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    /** phantomjs workaround end */
                    // trigger animation begin event
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        // apply animation effect to the current element                
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        // repeat requestAnimationFrame 
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        // clear requestAnimationFrame
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    // set initial requestAnimationFrame
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    /**
     * Returns Animation Model
     * @param {AnimationModel} options
     * @returns {AnimationModel}
     */
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    /**
     * @private
     */
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
        // no code needed
    };
    /**
     * Returns module name as animation
     * @private
     */
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    /**
     * @private
     */
    Animation.prototype.destroy = function () {
        //Override base destroy;
    };
    var Animation_1;
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])('FadeIn')
    ], Animation.prototype, "name", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])(400)
    ], Animation.prototype, "duration", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])('ease')
    ], Animation.prototype, "timingFunction", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Property"])(0)
    ], Animation.prototype, "delay", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "progress", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "begin", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "end", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_4__["Event"])()
    ], Animation.prototype, "fail", void 0);
    Animation = Animation_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_4__["NotifyPropertyChanges"]
    ], Animation);
    return Animation;
}(_base__WEBPACK_IMPORTED_MODULE_1__["Base"]));

/**
 * Ripple provides material theme's wave effect when an element is clicked
 * ```html
 * <div id='ripple'></div>
 * <script>
 *   rippleEffect(document.getElementById('ripple'));
 * </script>
 * ```
 * @private
 * @param HTMLElement element - Target element
 * @param RippleOptions rippleOptions - Ripple options .
 */
function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].isPointer) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mousedown', rippleHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseup', rippleUpHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseleave', rippleLeaveHandler);
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
/**
 * Handler for ripple event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, selector) : target;
    if (!element || (this.rippleOptions && Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - ((!document.body.scrollTop && document.documentElement) ?
        document.documentElement.scrollTop : document.body.scrollTop);
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
/**
 * Handler for ripple element mouse up event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleUpHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for ripple element mouse move event
 * @param {MouseEvent} e
 * @returns {void}
 * @private
 */
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
/**
 * Handler for removing ripple element
 * @param {MouseEvent} e
 * @param {rippleArgs} eventArgs
 * @returns {void}
 * @private
 */
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? Object(_dom__WEBPACK_IMPORTED_MODULE_0__["closest"])(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["selectAll"])('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        _event_handler__WEBPACK_IMPORTED_MODULE_3__["EventHandler"].remove(element, 'mouseleave', rippleLeaveHandler);
    }
    /* tslint:disable:align */
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
/**
 * Animation Module provides support to enable ripple effect functionality to Essential JS 2 components.
 * @param {boolean} isRipple Specifies the boolean value to enable or disable ripple effect.
 * @returns {boolean}
 */
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/base.js":
/*!*******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/base.js ***!
  \*******************************************************/
/*! exports provided: Base, getComponent, removeChildInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildInstance", function() { return removeChildInstance; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./node_modules/@syncfusion/ej2-base/src/observer.js");



var isColEName = new RegExp('\]');
/* tslint:enable:no-any */
/**
 * Base library module is common module for Framework modules like touch,keyboard and etc.,
 * @private
 */
var Base = /** @class */ (function () {
    /**
     * Base constructor accept options and element
     */
    function Base(options, element) {
        this.isRendered = false;
        this.isComplexArraySetter = false;
        this.isServerRendered = false;
        this.allowServerDataBinding = true;
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.bulkChanges = {};
        this.refreshing = false;
        this.ignoreCollectionWatch = false;
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](this);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    /** Property base section */
    /**
     * Function used to set bunch of property at a time.
     * @private
     * @param  {Object} prop - JSON object which holds components properties.
     * @param  {boolean} muteOnChange? - Specifies to true when we set properties.
     */
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
        if (muteOnChange !== true) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.changedProperties, prop);
            this.dataBind();
        }
        else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isRendered) {
            this.serverDataBind(prop);
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    /**
     * Calls for child element data bind
     * @param {Object} obj
     * @param {Object} parent
     * @returns {void}
     */
    // tslint:disable-next-line:no-any
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    /**
     * Bind property changes immediately to components
     */
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    /* tslint:disable:no-any */
    Base.prototype.serverDataBind = function (newChanges) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            return;
        }
        newChanges = newChanges ? newChanges : {};
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.bulkChanges, {}, newChanges, true);
        if (this.allowServerDataBinding) {
            var ejsInterop = 'ejsInterop';
            window[ejsInterop].updateModel(this);
            this.bulkChanges = {};
        }
    };
    /* tslint:enable:no-any */
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            // tslint:disable-next-line:no-any
            var newChanges = {};
            newChanges[key] = newValue;
            this.serverDataBind(newChanges);
        }
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(this.dataBind.bind(this));
    };
    ;
    /** Event Base Section */
    /**
     * Adds the handler to the given event listener.
     * @param {string} eventName - A String that specifies the name of the event
     * @param {Function} listener - Specifies the call to run when the event occurs.
     * @return {void}
     */
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    /**
     * Removes the handler from the given event listener.
     * @param {string} eventName - A String that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    /**
     * Triggers the handlers in the specified event.
     * @private
     * @param {string} eventName - Specifies the event to trigger for the specified component properties.
     * Can be a custom event, or any of the standard events.
     * @param {Event} eventProp - Additional parameters to pass on to the event properties
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it failured to call.
     * @return {void}
     */
    Base.prototype.trigger = function (eventName, eventProp, successHandler, errorHandler) {
        var _this = this;
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            var data = this.modelObserver.notify(eventName, eventProp, successHandler, errorHandler);
            if (isColEName.test(eventName)) {
                var handler = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(eventName, this);
                if (handler) {
                    var blazor = 'Blazor';
                    if (window[blazor]) {
                        var promise = handler.call(this, eventProp);
                        if (promise && typeof promise.then === 'function') {
                            if (!successHandler) {
                                data = promise;
                            }
                            else {
                                promise.then(function (data) {
                                    if (successHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ?
                                            JSON.parse(data) : data;
                                        successHandler.call(_this, data);
                                    }
                                }).catch(function (data) {
                                    if (errorHandler) {
                                        data = typeof data === 'string' && _this.modelObserver.isJson(data) ? JSON.parse(data) : data;
                                        errorHandler.call(_this, data);
                                    }
                                });
                            }
                        }
                        else if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                    else {
                        handler.call(this, eventProp);
                        if (successHandler) {
                            successHandler.call(this, eventProp);
                        }
                    }
                }
                else if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            this.isProtectedOnChange = prevDetection;
            return data;
        }
    };
    /**
     * To maintain instance in base class
     */
    Base.prototype.addInstance = function () {
        // Add module class to the root element
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        Object(_dom__WEBPACK_IMPORTED_MODULE_1__["addClass"])([this.element], ['e-lib', moduleClass]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])('ej2_instances', [this], this.element);
        }
    };
    /**
     * To remove the instance from the element
     */
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        Object(_dom__WEBPACK_IMPORTED_MODULE_1__["removeClass"])([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            // Remove module class from the root element
            Object(_dom__WEBPACK_IMPORTED_MODULE_1__["removeClass"])([this.element], ['e-lib']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());

/**
 * Global function to get the component instance from the rendered element.
 * @param elem Specifies the HTMLElement or element id string.
 * @param comp Specifies the component module name or Component.
 */
// tslint:disable-next-line:no-any
function getComponent(elem, comp) {
    var instance;
    var i;
    var ele = typeof elem === 'string' ? document.getElementById(elem) : elem;
    for (i = 0; i < ele.ej2_instances.length; i++) {
        instance = ele.ej2_instances[i];
        if (typeof comp === 'string') {
            var compName = instance.getModuleName();
            if (comp === compName) {
                return instance;
            }
        }
        else {
            // tslint:disable-next-line:no-any
            if (instance instanceof comp) {
                return instance;
            }
        }
    }
    return undefined;
}
/**
 * Function to remove the child instances.
 * @return {void}
 * @private
 */
// tslint:disable-next-line:no-any
function removeChildInstance(element) {
    // tslint:disable-next-line:no-any
    var childEle = [].slice.call(element.getElementsByClassName('e-control'));
    for (var i = 0; i < childEle.length; i++) {
        var compName = childEle[i].classList[1].split('e-')[1];
        // tslint:disable-next-line:no-any
        var compInstance = getComponent(childEle[i], compName);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(compInstance)) {
            compInstance.destroy();
        }
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/browser.js ***!
  \**********************************************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
    window.browserDetails = window.browserDetails || {};
}
/**
 * Get configuration details for Browser
 * @private
 */
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    /**
     * To get events from the browser
     * @param {string} event - type of event triggered.
     * @returns {Boolean}
     */
    Browser.getEvent = function (event) {
        // tslint:disable-next-line:no-any
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            },
            cancel: {
                isPointer: 'pointercancel', isTouch: 'touchcancel', isDevice: 'mouseleave'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    /**
     * To get the Touch start event from browser
     * @returns {string}
     */
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    /**
     * To get the Touch end event from browser
     * @returns {string}
     */
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    /**
     * To get the Touch move event from browser
     * @returns {string}
     */
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    /**
     * To cancel the touch event from browser
     * @returns {string}
     */
    Browser.getTouchCancelEvent = function () {
        return Browser.getEvent('cancel');
    };
    /**
     * To get the value based on provided key and regX
     * @param {string} key
     * @param {RegExp} regX
     * @returns {Object}
     */
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        //Properties 
        /**
         * Property specifies the userAgent of the browser. Default userAgent value is based on the browser.
         * Also we can set our own userAgent.
         */
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        //Read Only Properties
        /**
         * Property is to get the browser information like Name, Version and Language
         * @returns BrowserInfo
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        /**
         * Property is to get whether the userAgent is based IE.
         */
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        /**
         * Property is to get whether the browser has touch support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isTouch)) {
                return window.browserDetails.isTouch = ('ontouchstart' in window);
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        /**
         * Property is to get whether the browser has Pointer support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        /**
         * Property is to get whether the browser has MSPointer support.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        /**
         * Property is to get whether the userAgent is device based.
         */
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        /**
         * Property is to get whether the userAgent is IOS.
         */
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        /**
         * Property is to get whether the userAgent is Ios7.
         */
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        /**
         * Property is to get whether the userAgent is Android.
         */
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        /**
         * Property is to identify whether application ran in web view.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.cordova) && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.PhoneGap)
                    && Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        /**
         * Property is to get whether the userAgent is Windows.
         */
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        /**
         * Property is to get the touch start event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        /**
         * Property is to get the touch move event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        /**
         * Property is to get the touch end event. It returns event name based on browser.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchCancelEvent", {
        /**
         * Property is to cancel the touch end event.
         */
        get: function () {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.browserDetails.touchCancelEvent)) {
                return window.browserDetails.touchCancelEvent = Browser.getTouchCancelEvent();
            }
            return window.browserDetails.touchCancelEvent;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    Browser.uA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    return Browser;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/child-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/child-property.js ***!
  \*****************************************************************/
/*! exports provided: ChildProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return ChildProperty; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");


/**
 * To detect the changes for inner properties.
 * @private
 */
var ChildProperty = /** @class */ (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.isComplexArraySetter = false;
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        // tslint:disable-next-line:no-empty
        this.finalUpdate = function () { };
        this.callChildDataBind = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('callChildDataBind', _base__WEBPACK_IMPORTED_MODULE_1__["Base"]);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.isParentArray = isArray;
        this.setProperties(defaultValue, true);
    }
    /**
     * Updates the property changes
     * @param {boolean} val
     * @param {string} propName
     * @returns {void}
     */
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    /**
     * Updates time out duration
     */
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            var changeTime_1 = setTimeout(this.parentObj.dataBind.bind(this.parentObj));
            var clearUpdate = function () {
                clearTimeout(changeTime_1);
            };
            this.finalUpdate = clearUpdate;
        }
    };
    /**
     * Clears changed properties
     */
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    /**
     * Set property changes
     * @param {Object} prop
     * @param {boolean} muteOnChange
     * {void}
     */
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(this, prop);
        }
    };
    /**
     * Binds data
     */
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    /**
     * Saves changes to newer values
     * @param {string} key
     * @param {Object} newValue
     * @param {Object} oldValue
     * @returns {void}
     */
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue, restrictServerDataBind) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        if (!restrictServerDataBind) {
            this.serverDataBind(key, newValue, true);
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    ChildProperty.prototype.serverDataBind = function (key, value, isSaveChanges, action) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && !this.parentObj.isComplexArraySetter) {
            // tslint:disable-next-line:no-any
            var parent_1;
            var newChanges = {};
            var parentKey = isSaveChanges ? this.getParentKey(true) + '.' + key : key;
            /* istanbul ignore else  */
            if (parentKey.indexOf('.') !== -1) {
                var complexKeys = parentKey.split('.');
                parent_1 = newChanges;
                for (var i = 0; i < complexKeys.length; i++) {
                    var isFinal = i === complexKeys.length - 1;
                    parent_1[complexKeys[i]] = isFinal ? value : {};
                    parent_1 = isFinal ? parent_1 : parent_1[complexKeys[i]];
                }
            }
            else {
                newChanges[parentKey] = {};
                parent_1 = newChanges[parentKey];
                newChanges[parentKey][key] = value;
            }
            /* istanbul ignore next */
            if (this.isParentArray) {
                var actionProperty = 'ejsAction';
                parent_1[actionProperty] = action ? action : 'none';
            }
            this.controlParent.serverDataBind(newChanges);
        }
    };
    ChildProperty.prototype.getParentKey = function (isSaveChanges) {
        // tslint:disable-next-line:no-any
        var index = '';
        var propName = this.propName;
        /* istanbul ignore next */
        if (this.isParentArray) {
            index = this.parentObj[this.propName].indexOf(this);
            var valueLength = this.parentObj[this.propName].length;
            valueLength = isSaveChanges ? valueLength : (valueLength > 0 ? valueLength - 1 : 0);
            index = index !== -1 ? '-' + index : '-' + valueLength;
            propName = propName + index;
        }
        if (this.controlParent !== this.parentObj) {
            propName = this.parentObj.getParentKey() + '.' + this.propName + index;
        }
        return propName;
    };
    return ChildProperty;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/component.js ***!
  \************************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-loader */ "./node_modules/@syncfusion/ej2-base/src/module-loader.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ "./node_modules/@syncfusion/ej2-base/src/observer.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./node_modules/@syncfusion/ej2-base/src/child-property.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internationalization */ "./node_modules/@syncfusion/ej2-base/src/internationalization.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var componentCount = 0;
var lastPageID;
var lastHistoryLen = 0;
/**
 * Base class for all Essential JavaScript components
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * Initialize the constructor for component base
     */
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.randomId = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uniqueID"])();
        /**
         * string template option for Blazor template rendering
         * @private
         */
        _this.isStringTemplate = false;
        _this.needsID = false;
        /**
         * This is a instance method to create an element.
         * @private
         */
        _this.createElement = _dom__WEBPACK_IMPORTED_MODULE_7__["createElement"];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': _internationalization__WEBPACK_IMPORTED_MODULE_6__["rightToLeft"] }, true);
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(_this.locale)) {
            _this.setProperties({ 'locale': _internationalization__WEBPACK_IMPORTED_MODULE_6__["defaultCulture"] }, true);
        }
        _this.moduleLoader = new _module_loader__WEBPACK_IMPORTED_MODULE_1__["ModuleLoader"](_this);
        _this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](_this);
        // tslint:disable-next-line:no-function-constructor-with-string-args
        _internationalization__WEBPACK_IMPORTED_MODULE_6__["onIntlChange"].on('notifyExternalChange', _this.detectFunction, _this, _this.randomId);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    /**
     * Destroys the sub modules while destroying the widget
     */
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.enablePersistence) {
            this.setPersistData();
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        Object(_dom__WEBPACK_IMPORTED_MODULE_7__["removeClass"])([this.element], ['e-control']);
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        _internationalization__WEBPACK_IMPORTED_MODULE_6__["onIntlChange"].off('notifyExternalChange', this.detectFunction, this.randomId);
    };
    /**
     * Applies all the pending property changes and render the component again.
     */
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    /**
     * Appends the control within the given HTML element
     * @param {string | HTMLElement} selector - Target element where control needs to be appended
     */
    Component.prototype.appendTo = function (selector) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selector) && typeof (selector) === 'string') {
            this.element = document.querySelector(selector);
        }
        else if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selector)) {
            this.element = selector;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.element)) {
            var moduleClass = 'e-' + this.getModuleName().toLowerCase();
            Object(_dom__WEBPACK_IMPORTED_MODULE_7__["addClass"])([this.element], ['e-control', moduleClass]);
            this.isProtectedOnChange = false;
            if (this.needsID && !this.element.id) {
                this.element.id = this.getUniqueID(this.getModuleName());
            }
            if (this.enablePersistence) {
                this.mergePersistData();
                window.addEventListener('unload', this.setPersistData.bind(this));
            }
            var inst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            this.injectModules();
            this.render();
            this.trigger('created');
        }
    };
    /**
     * It is used to process the post rendering functionalities to a component.
     */
    Component.prototype.renderComplete = function (wrapperElement) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            var ejsInterop = 'ejsInterop';
            // tslint:disable-next-line:no-any
            window[ejsInterop].renderComplete(this.element, wrapperElement);
        }
        this.isRendered = true;
    };
    /**
     * When invoked, applies the pending property changes immediately to the component.
     */
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    /**
     * Attach one or more  event handler to the current component context.
     * It is used for internal handling event internally within the component only.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the handler to run when the event occurs
     * @param {Object} context - optional parameter Specifies the context to be bind in the handler.
     * @return {void}
     * @private
     */
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    /**
     * To remove one or more event handler that has been attached with the on() method.
     * @param {BoundOptions[]| string} event - It is  optional type either to  Set the collection of event list or the eventName.
     * @param {Function} handler - optional parameter Specifies the function to run when the event occurs
     * @return {void}
     * @private
     */
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} argument - Additional parameters to pass while calling the handler.
     * @return {void}
     * @private
     */
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    /**
     * Get injected modules
     * @private
     */
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    /**
     * Dynamically injects the required modules to the component.
     */
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.detectFunction = function (args) {
        var prop = Object.keys(args);
        if (prop.length) {
            this[prop[0]] = args[prop[0]];
        }
    };
    Component.prototype.mergePersistData = function () {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        if (!this.isDestroyed) {
            window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
        }
    };
    //tslint:disable-next-line
    Component.prototype.clearTemplate = function (templateName, index) {
        //No Code
    };
    Component.prototype.getUniqueID = function (definedName) {
        if (this.isHistoryChanged()) {
            componentCount = 0;
        }
        lastPageID = this.pageID(location.href);
        lastHistoryLen = history.length;
        return definedName + '_' + lastPageID + '_' + componentCount++;
    };
    Component.prototype.pageID = function (url) {
        var hash = 0;
        if (url.length === 0) {
            return hash;
        }
        for (var i = 0; i < url.length; i++) {
            var char = url.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    Component.prototype.isHistoryChanged = function () {
        return lastPageID !== this.pageID(location.href) || lastHistoryLen !== history.length;
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(key, this);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(objValue)) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof _child_property__WEBPACK_IMPORTED_MODULE_4__["ChildProperty"]) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                // tslint:disable-next-line:no-any
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])(false)
    ], Component.prototype, "enablePersistence", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])()
    ], Component.prototype, "enableRtl", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_5__["Property"])()
    ], Component.prototype, "locale", void 0);
    Component = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_5__["NotifyPropertyChanges"]
    ], Component);
    return Component;
}(_base__WEBPACK_IMPORTED_MODULE_2__["Base"]));

//Function handling for page navigation detection 
/* istanbul ignore next */
(function () {
    if (typeof window !== 'undefined') {
        window.addEventListener('popstate', 
        /* istanbul ignore next */
        function () {
            componentCount = 0;
        });
    }
})();


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/dom.js ***!
  \******************************************************/
/*! exports provided: createElement, addClass, removeClass, isVisible, prepend, append, detach, remove, attributes, select, selectAll, closest, siblings, getAttributeOrDefault, setStyleAttribute, classList, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return getAttributeOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return setStyleAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return classList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/**
 * Functions related to dom operations.
 */


var SVG_REG = /^svg|^path|^g/;
/**
 * Function to create Html element.
 * @param tagName - Name of the tag, id and class names.
 * @param properties - Object to set properties in the element.
 * @param properties.id - To set the id to the created element.
 * @param properties.className - To add classes to the element.
 * @param properties.innerHTML - To set the innerHTML to element.
 * @param properties.styles - To set the some custom styles to element.
 * @param properties.attrs - To set the attributes to element.
 * @private
 */
function createElement(tagName, properties) {
    //tslint:disable-next-line
    var element = (SVG_REG.test(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName));
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to add a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (!ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        }
    }
    return elements;
}
/**
 * The function used to add the classes to array of elements
 * @param  {Element[]|NodeList} elements - An array of elements that need to remove a list of classes
 * @param  {string|string[]} classes - String or array of string that need to add an individual element as a class
 * @private
 */
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele.className !== '') {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                ele.classList.remove(className);
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
/**
 * The function used to check element is visible or not.
 * @param  {Element|Node} element - An element the need to check visibility
 * @private
 */
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
/**
 * The function used to insert an array of elements into a first of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to prepend.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
function prepend(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function used to insert an array of elements into last of the element.
 * @param  {Element[]|NodeList} fromElements - An array of elements that need to append.
 * @param  {Element} toElement - An element that is going to prepend.
 * @private
 */
function append(fromElements, toElement, isEval) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.appendChild(docFrag);
    if (isEval) {
        executeScript(toElement);
    }
    return fromElements;
}
/**
 * The function is used to evaluate script from Ajax request
 * @param ele - An element is going to evaluate the script
 */
function executeScript(ele) {
    var eleArray = ele.querySelectorAll('script');
    eleArray.forEach(function (element) {
        var script = document.createElement('script');
        script.text = element.innerHTML;
        document.head.appendChild(script);
        detach(script);
    });
}
/**
 * The function used to remove the element from the
 * @param  {Element|Node|HTMLElement} element - An element that is going to detach from the Dom
 * @private
 */
function detach(element) {
    var parentNode = element.parentNode;
    return parentNode.removeChild(element);
}
/**
 * The function used to remove the element from Dom also clear the bounded events
 * @param  {Element|Node|HTMLElement} element - An element remove from the Dom
 * @private
 */
function remove(element) {
    var parentNode = element.parentNode;
    _event_handler__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].clearEvents(element);
    parentNode.removeChild(element);
}
/**
 * The function helps to set multiple attributes to an element
 * @param  {Element|Node} element - An element that need to set attributes.
 * @param  {{[key:string]:string}} attributes - JSON Object that is going to as attributes.
 * @private
 */
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        ele.setAttribute(key, attributes[key]);
    }
    return ele;
}
/**
 * The function selects the element from giving context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
function select(selector, context) {
    if (context === void 0) { context = document; }
    return context.querySelector(selector);
}
/**
 * The function selects an array of element from the given context.
 * @param  {string} selector - Selector string need fetch element from the
 * @param  {Document|Element=document} context - It is an optional type, That specifies a Dom context.
 * @private
 */
function selectAll(selector, context) {
    if (context === void 0) { context = document; }
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
/**
 * Returns single closest parent element based on class selector.
 * @param  {Element} element - An element that need to find the closest element.
 * @param  {string} selector - A classSelector of closest element.
 * @private
 */
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
/**
 * Returns all sibling elements of the given element.
 * @param  {Element|Node} element - An element that need to get siblings.
 * @private
 */
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
/**
 * set the value if not exist. Otherwise set the existing value
 * @param  {HTMLElement} element - An element to which we need to set value.
 * @param  {string} property - Property need to get or set.
 * @param  {string} value - value need to set.
 * @private
 */
function getAttributeOrDefault(element, property, value) {
    var attrVal = element.getAttribute(property);
    if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(attrVal)) {
        element.setAttribute(property, value.toString());
        attrVal = value;
    }
    return attrVal;
}
/**
 * Set the style attributes to Html element.
 * @param {HTMLElement} element - Element which we want to set attributes
 * @param {any} attrs - Set the given attributes to element
 * @return {void}
 * @private
 */
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            // tslint:disable-next-line:no-any
            element.style[key] = attrs[key];
        });
    }
}
/**
 * Method for add and remove classes to a dom element.
 * @param {Element} element - Element for add and remove classes
 * @param {string[]} addClasses - List of classes need to be add to the element
 * @param {string[]} removeClasses - List of classes need to be remove from the element
 * @return {void}
 * @private
 */
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
/**
 * Method to check whether the element matches the given selector.
 * @param {Element} element - Element to compare with the selector.
 * @param {string} selector - String selector which element will satisfy.
 * @return {void}
 * @private
 */
function matches(element, selector) {
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/draggable.js":
/*!************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/draggable.js ***!
  \************************************************************/
/*! exports provided: Position, Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@syncfusion/ej2-base/src/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child-property */ "./node_modules/@syncfusion/ej2-base/src/child-property.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var isDraggedObject = { isDragged: false };
/**
 * Specifies the position coordinates
 */
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(0)
    ], Position.prototype, "left", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(0)
    ], Position.prototype, "top", void 0);
    return Position;
}(_child_property__WEBPACK_IMPORTED_MODULE_5__["ChildProperty"]));

/**
 * Draggable Module provides support to enable draggable functionality in Dom Elements.
 * ```html
 * <div id='drag'>Draggable</div>
 * <script>
 * var ele = document.getElementById('drag');
 * var drag:Draggable = new Draggable(ele,{
 *     clone:false,
 *     drag: function(e) {
 *      //drag handler code.
 *      },
 *     handle:'.class'
 * });
 * </script>
 * ```
 */
var Draggable = /** @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.prevLeft = 0;
        _this.prevTop = 0;
        _this.dragProcessStarted = false;
        /* tslint:disable no-any */
        _this.tapHoldTimer = 0;
        _this.externalInitialize = false;
        _this.diffY = 0;
        _this.parentScrollX = 0;
        _this.parentScrollY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable_1 = Draggable;
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isIE) {
            Object(_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return Object(_util__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(this.handle)) {
            ele = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["select"])(this.handle, this.element);
        }
        var handler = (this.enableTapHold && _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isDevice && _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].isTouch) ? this.mobileInitialize : this.initialize;
        if (isUnWire) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, handler);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(ele || this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, handler, this);
        }
    };
    /* istanbul ignore next */
    Draggable.prototype.mobileInitialize = function (evt) {
        var _this = this;
        var target = evt.currentTarget;
        this.tapHoldTimer = setTimeout(function () {
            _this.externalInitialize = true;
            _this.removeTapholdTimer();
            _this.initialize(evt, target);
        }, this.tapHoldThreshold);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.removeTapholdTimer, this);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.removeTapholdTimer, this);
    };
    /* istanbul ignore next */
    Draggable.prototype.removeTapholdTimer = function () {
        clearTimeout(this.tapHoldTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.removeTapholdTimer);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.removeTapholdTimer);
    };
    /* istanbul ignore next */
    Draggable.prototype.getScrollableParent = function (element, axis) {
        var scroll = { 'vertical': 'scrollHeight', 'horizontal': 'scrollWidth' };
        var client = { 'vertical': 'clientHeight', 'horizontal': 'clientWidth' };
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(element)) {
            return null;
        }
        if (element[scroll[axis]] > element[client[axis]]) {
            if (axis === 'vertical' ? element.scrollTop > 0 : element.scrollLeft > 0) {
                if (axis === 'vertical') {
                    this.parentScrollY = this.parentScrollY +
                        (this.parentScrollY === 0 ? element.scrollTop : element.scrollTop - this.parentScrollY);
                }
                else {
                    this.parentScrollX = this.parentScrollX +
                        (this.parentScrollX === 0 ? element.scrollLeft : element.scrollLeft - this.parentScrollX);
                }
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(element)) {
                    return this.getScrollableParent(element.parentNode, axis);
                }
                else {
                    return element;
                }
            }
            else {
                return this.getScrollableParent(element.parentNode, axis);
            }
        }
        else {
            return this.getScrollableParent(element.parentNode, axis);
        }
    };
    Draggable.prototype.getScrollableValues = function () {
        this.parentScrollX = 0;
        this.parentScrollY = 0;
        var isModalDialog = this.element.classList.contains('e-dialog') && this.element.classList.contains('e-dlg-modal');
        var verticalScrollParent = this.getScrollableParent(this.element.parentNode, 'vertical');
        var horizontalScrollParent = this.getScrollableParent(this.element.parentNode, 'horizontal');
    };
    Draggable.prototype.initialize = function (evt, curTarget) {
        this.currentStateTarget = evt.target;
        if (this.isDragStarted()) {
            return;
        }
        else {
            this.isDragStarted(true);
            this.externalInitialize = false;
        }
        this.target = (evt.currentTarget || curTarget);
        this.dragProcessStarted = false;
        if (this.abort) {
            /* tslint:disable no-any */
            var abortSelectors = this.abort;
            if (typeof abortSelectors === 'string') {
                abortSelectors = [abortSelectors];
            }
            for (var i = 0; i < abortSelectors.length; i++) {
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(evt.target, abortSelectors[i]))) {
                    /* istanbul ignore next */
                    if (this.isDragStarted()) {
                        this.isDragStarted(true);
                    }
                    return;
                }
            }
        }
        if (this.preventDefault && !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches)) {
            evt.preventDefault();
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.getScrollableValues();
            if (evt.clientX === evt.pageX) {
                this.parentScrollX = 0;
            }
            if (evt.clientY === evt.pageY) {
                this.parentScrollY = 0;
            }
            this.relativeXPosition = intCoord.pageX - (pos.left + this.parentScrollX);
            this.relativeYPosition = intCoord.pageY - (pos.top + this.parentScrollY);
        }
        if (this.externalInitialize) {
            this.intDragStart(evt);
        }
        else {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy, this);
        }
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        this.externalInitialize = false;
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].trigger(document.documentElement, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        this.removeTapholdTimer();
        var isChangeTouch = !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        if (isChangeTouch) {
            evt.preventDefault();
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(evt.target, this.dragTarget);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if ((distance >= this.distance || this.externalInitialize)) {
            var ele = this.getHelperElement(evt);
            if (!ele || Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                var args = {
                    event: evt,
                    element: element,
                    target: curTarget,
                    bindEvents: Object(_util__WEBPACK_IMPORTED_MODULE_6__["isBlazor"])() ? this.bindDragEvents.bind(this) : null,
                    dragElement: dragTargetElement
                };
                this.trigger('dragStart', args);
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            this.getScrollableValues();
            var posValue = this.getProcessedPositionValue({
                top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px'
            });
            this.dragElePosition = { top: pos.top, left: pos.left };
            Object(_dom__WEBPACK_IMPORTED_MODULE_2__["setStyleAttribute"])(dragTargetElement, this.getDragPosition({ position: 'absolute', left: posValue.left, top: posValue.top }));
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isBlazor"])()) {
                this.bindDragEvents(dragTargetElement);
            }
        }
    };
    Draggable.prototype.bindDragEvents = function (dragTargetElement) {
        if (Object(_dom__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(dragTargetElement)) {
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDrag, this);
            _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDragStop, this);
            this.setGlobalDroppables(false, this.element, dragTargetElement);
        }
        else {
            this.toggleEvents();
            document.body.classList.remove('e-prevent-select');
        }
    };
    Draggable.prototype.elementInViewport = function (el) {
        this.top = el.offsetTop;
        this.left = el.offsetLeft;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            this.top += el.offsetTop;
            this.left += el.offsetLeft;
        }
        return (this.top >= window.pageYOffset &&
            this.left >= window.pageXOffset &&
            (this.top + this.height) <= (window.pageYOffset + window.innerHeight) &&
            (this.left + this.width) <= (window.pageXOffset + window.innerWidth));
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt, this.isDragScroll);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            /* tslint:disable no-any */
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intOver(evt, eleObj.target);
            this.hoverObject = eleObj;
        }
        else if (this.hoverObject) {
            this.hoverObject.instance.intOut(evt, eleObj.target);
            this.hoverObject.instance.dragData[this.scope] = null;
            this.hoverObject = null;
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft && dLeft > 0) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right + window.pageXOffset < dLeft + helperWidth && dLeft > 0) {
                    left = dLeft - (dLeft - this.dragLimit.right) + window.pageXOffset - helperWidth;
                }
                else {
                    left = dLeft < 0 ? this.dragLimit.left : dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop && dTop > 0) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom + window.pageYOffset < dTop + helperHeight && dTop > 0) {
                    top = dTop - (dTop - this.dragLimit.bottom) + window.pageYOffset - helperHeight;
                }
                else {
                    top = dTop < 0 ? this.dragLimit.top : dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        if (this.dragProcessStarted) {
            if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(top)) {
                top = this.prevTop;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(left)) {
                left = this.prevLeft;
            }
        }
        var draEleTop;
        var draEleLeft;
        if (this.dragArea) {
            draEleTop = (top - iTop) < 0 ? this.dragLimit.top : (top - iTop);
            draEleLeft = (left - iLeft) < 0 ? this.dragElePosition.left : (left - iLeft);
        }
        else {
            draEleTop = top - iTop;
            draEleLeft = left - iLeft;
        }
        var dragValue = this.getProcessedPositionValue({ top: draEleTop + 'px', left: draEleLeft + 'px' });
        Object(_dom__WEBPACK_IMPORTED_MODULE_2__["setStyleAttribute"])(helperElement, this.getDragPosition(dragValue));
        if (!this.elementInViewport(helperElement) && this.enableAutoScroll) {
            this.helperElement.scrollIntoView();
        }
        this.dragProcessStarted = true;
        this.prevLeft = left;
        this.prevTop = top;
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getDragPosition = function (dragValue) {
        var temp = Object(_util__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, dragValue);
        if (this.axis) {
            if (this.axis === 'x') {
                delete temp.top;
            }
            else if (this.axis === 'y') {
                delete temp.left;
            }
        }
        return temp;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        this.dragProcessStarted = false;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    /**
     * @private
     */
    Draggable.prototype.intDestroy = function (evt) {
        this.dragProcessStarted = false;
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDragStart);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDragStop);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDestroy);
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(document, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchMoveEvent, this.intDrag);
        if (this.isDragStarted()) {
            this.isDragStarted(true);
        }
    };
    // triggers when property changed
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.isDragStarted = function (change) {
        if (change) {
            isDraggedObject.isDragged = !isDraggedObject.isDragged;
        }
        return isDraggedObject.isDragged;
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["select"])(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = ele.scrollWidth ? ele.scrollWidth : elementArea.right - elementArea.left;
            eleHeightBound = ele.scrollHeight ? ele.scrollHeight : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = ele.offsetTop + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.pointerEvents || '';
        if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["compareElementParent"])(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.pointerEvents = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.pointerEvents = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt, isdragscroll) {
        /* tslint:disable no-any */
        var dragEle = evt.srcElement;
        var intCoord = this.getCoordinates(evt);
        var pageX;
        var pageY;
        var isOffsetParent = Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(dragEle.offsetParent);
        /* istanbul ignore next */
        if (isdragscroll) {
            pageX = this.clone ? intCoord.pageX :
                (intCoord.pageX + (isOffsetParent ? 0 : dragEle.offsetParent.scrollLeft)) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY :
                (intCoord.pageY + (isOffsetParent ? 0 : dragEle.offsetParent.scrollTop)) - this.relativeYPosition;
        }
        else {
            pageX = this.clone ? intCoord.pageX : (intCoord.pageX + window.pageXOffset) - this.relativeXPosition;
            pageY = this.clone ? intCoord.pageY : (intCoord.pageY + window.pageYOffset) - this.relativeYPosition;
        }
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !Object(_util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(target.parentNode)) {
            var parent_1 = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["closest"])(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    var Draggable_1;
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Complex"])({}, Position)
    ], Draggable.prototype, "cursorAt", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(true)
    ], Draggable.prototype, "clone", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "dragArea", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "isDragScroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "drag", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "dragStart", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Draggable.prototype, "dragStop", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(1)
    ], Draggable.prototype, "distance", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "handle", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "abort", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "helper", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('default')
    ], Draggable.prototype, "scope", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('')
    ], Draggable.prototype, "dragTarget", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "axis", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Draggable.prototype, "queryPositionInfo", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableTailMode", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "skipDistanceCheck", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(true)
    ], Draggable.prototype, "preventDefault", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableAutoScroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(false)
    ], Draggable.prototype, "enableTapHold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])(750)
    ], Draggable.prototype, "tapHoldThreshold", void 0);
    Draggable = Draggable_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__["NotifyPropertyChanges"]
    ], Draggable);
    return Draggable;
}(_base__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/droppable.js":
/*!************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/droppable.js ***!
  \************************************************************/
/*! exports provided: Droppable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return Droppable; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@syncfusion/ej2-base/src/browser.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Droppable Module provides support to enable droppable functionality in Dom Elements.
 * ```html
 * <div id='drop'>Droppable</div>
 * <script>
 * let ele:HTMLElement = document.getElementById('drop');
 * var drag:Droppable = new Droppable(ele,{
 *     accept:'.drop',
 *     drop: function(e) {
 *      //drop handler code.
 *     }
 * });
 * </script>
 * ```
 */
var Droppable = /** @class */ (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].add(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDrop, this);
    };
    // triggers when property changed
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            var drag = this.dragData[this.scope];
            this.trigger('over', { event: event, target: element, dragData: drag });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && Object(_dom__WEBPACK_IMPORTED_MODULE_2__["isVisible"])(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["matches"])(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
        this.mouseOver = false;
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = Object(_util__WEBPACK_IMPORTED_MODULE_5__["compareElementParent"])(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_1__["Browser"].touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])()
    ], Droppable.prototype, "accept", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Property"])('default')
    ], Droppable.prototype, "scope", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "drop", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "over", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_3__["Event"])()
    ], Droppable.prototype, "out", void 0);
    Droppable = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_3__["NotifyPropertyChanges"]
    ], Droppable);
    return Droppable;
}(_base__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/event-handler.js":
/*!****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/event-handler.js ***!
  \****************************************************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");

/**
 * EventHandler class provides option to add, remove, clear and trigger events to a HTML DOM element
 * @private
 * ```html
 * <div id="Eventdiv">  </div>
 * <script>
 *   let node: HTMLElement = document.querySelector("#Eventdiv");
 *   EventHandler.addEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   EventHandler.addEventListener(node, "onmouseover", function(){
 *       // mouseover handler function code
 *   });
 *   EventHandler.removeEventListener(node, "click", function(){
 *       // click handler function code
 *   });
 *   eventObj.clearEvents();
 * </script>
 * ```
 */
var EventHandler = /** @class */ (function () {
    function EventHandler() {
    }
    // to get the event data based on element
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    /**
     * Add an event to the specified DOM element.
     * @param {any} element - Target HTML DOM element
     * @param {string} eventName - A string that specifies the name of the event
     * @param {Function} listener - Specifies the function to run when the event occurs
     * @param {Object} bindTo - A object that binds 'this' variable in the event handler
     * @param {number} debounce - Specifies at what interval given event listener should be triggered.
     * @return {Function}
     */
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = Object(_util__WEBPACK_IMPORTED_MODULE_0__["debounce"])(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            element.addEventListener(event[i], debounceListener);
        }
        return debounceListener;
    };
    /**
     * Remove an event listener that has been attached before.
     * @param {any} element - Specifies the target html element to remove the event
     * @param {string} eventName - A string that specifies the name of the event to remove
     * @param {Function} listener - Specifies the function to remove
     * @return {void}
     */
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            if (debounceListener) {
                element.removeEventListener(event[j], debounceListener);
            }
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    /**
     * Clear all the event listeners that has been previously attached to the element.
     * @param {any} element - Specifies the target html element to clear the events
     * @return {void}
     */
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    /**
     * Trigger particular event of the element.
     * @param {any} element - Specifies the target html element to trigger the events
     * @param {string} eventName - Specifies the event to trigger for the specified element.
     * Can be a custom event, or any of the standard events.
     * @param {any} eventProp - Additional parameters to pass on to the event properties
     * @return {void}
     */
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        var fn = null;
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/hijri-parser.js":
/*!***************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/hijri-parser.js ***!
  \***************************************************************/
/*! exports provided: HijriParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HijriParser", function() { return HijriParser; });
/***
 * Hijri parser
 */
var HijriParser;
(function (HijriParser) {
    /* tslint:disable */
    var dateCorrection = [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167,
        29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759,
        29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348,
        30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939,
        30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530,
        31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120,
        32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711,
        32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302,
        33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893,
        33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483,
        34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074,
        35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665,
        35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254,
        36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845,
        36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436,
        37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027,
        38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617,
        38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208,
        39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798,
        39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389,
        40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980,
        41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570,
        41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161,
        42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751,
        42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342,
        43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932,
        43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523,
        44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114,
        45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704,
        45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295,
        46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885,
        46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476,
        47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066,
        48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657,
        48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248,
        49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838,
        49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429,
        50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019,
        51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611,
        51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200,
        52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792,
        52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383,
        53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973,
        54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564,
        54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154,
        55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745,
        55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335,
        56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926,
        56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517,
        57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107,
        58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698,
        58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288,
        59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879,
        59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469,
        60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061,
        61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651,
        61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242,
        62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832,
        62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423,
        63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014,
        64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603,
        64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195,
        65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785,
        65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376,
        66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967,
        66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557,
        67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148,
        68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738,
        68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330,
        69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919,
        69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510,
        70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101,
        71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691,
        71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282,
        72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872,
        72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464,
        73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053,
        74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645,
        74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235,
        75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826,
        75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416,
        76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007,
        77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598,
        77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188,
        78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779,
        78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369,
        79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960,
        79990];
    /* tslint:enable */
    function getHijriDate(gDate) {
        var day = gDate.getDate();
        var month = gDate.getMonth();
        var year = gDate.getFullYear();
        var tMonth = month + 1;
        var tYear = year;
        if (tMonth < 3) {
            tYear -= 1;
            tMonth += 12;
        }
        var yPrefix = Math.floor(tYear / 100.);
        var julilanOffset = yPrefix - Math.floor(yPrefix / 4.) - 2;
        var julianNumber = Math.floor(365.25 * (tYear + 4716)) + Math.floor(30.6001 * (tMonth + 1)) + day - julilanOffset - 1524;
        yPrefix = Math.floor((julianNumber - 1867216.25) / 36524.25);
        julilanOffset = yPrefix - Math.floor(yPrefix / 4.) + 1;
        var b = julianNumber + julilanOffset + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var tempMonth = Math.floor((b - d) / 30.6001);
        day = (b - d) - Math.floor(30.6001 * tempMonth);
        month = Math.floor((b - d) / 20.6001);
        if (month > 13) {
            c += 1;
            month -= 12;
        }
        month -= 1;
        year = c - 4716;
        var modifiedJulianDate = julianNumber - 2400000;
        // date calculation for year after 2077
        var iyear = 10631. / 30.;
        var z = julianNumber - 1948084;
        var cyc = Math.floor(z / 10631.);
        z = z - 10631 * cyc;
        var j = Math.floor((z - 0.1335) / iyear);
        var iy = 30 * cyc + j;
        z = z - Math.floor(j * iyear + 0.1335);
        var im = Math.floor((z + 28.5001) / 29.5);
        /* istanbul ignore next */
        if (im === 13) {
            im = 12;
        }
        var tempDay = z - Math.floor(29.5001 * im - 29);
        var i = 0;
        for (; i < dateCorrection.length; i++) {
            if (dateCorrection[i] > modifiedJulianDate) {
                break;
            }
        }
        var iln = i + 16260;
        var ii = Math.floor((iln - 1) / 12);
        var hYear = ii + 1;
        var hmonth = iln - 12 * ii;
        var hDate = modifiedJulianDate - dateCorrection[i - 1] + 1;
        if ((hDate + '').length > 2) {
            hDate = tempDay;
            hmonth = im;
            hYear = iy;
        }
        return { year: hYear, month: hmonth, date: hDate };
    }
    HijriParser.getHijriDate = getHijriDate;
    function toGregorian(year, month, day) {
        var iy = year;
        var im = month;
        var id = day;
        var ii = iy - 1;
        var iln = (ii * 12) + 1 + (im - 1);
        var i = iln - 16260;
        var mcjdn = id + dateCorrection[i - 1] - 1;
        var julianDate = mcjdn + 2400000;
        var z = Math.floor(julianDate + 0.5);
        var a = Math.floor((z - 1867216.25) / 36524.25);
        a = z + 1 + a - Math.floor(a / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(365.25 * c);
        var e = Math.floor((b - d) / 30.6001);
        var gDay = b - d - Math.floor(e * 30.6001);
        var gMonth = e - (e > 13.5 ? 13 : 1);
        var gYear = c - (gMonth > 2.5 ? 4716 : 4715);
        /* istanbul ignore next */
        if (gYear <= 0) {
            gMonth--;
        } // No year zero
        return new Date(gYear + '/' + (gMonth) + '/' + gDay);
    }
    HijriParser.toGregorian = toGregorian;
})(HijriParser || (HijriParser = {}));


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/index.js ***!
  \********************************************************/
/*! exports provided: blazorCultureFormats, IntlBase, Ajax, Animation, rippleEffect, isRippleEnabled, enableRipple, Base, getComponent, removeChildInstance, Browser, Component, ChildProperty, Position, Draggable, Droppable, EventHandler, onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, Internationalization, setCulture, setCurrencyCode, loadCldr, enableRtl, getNumericObject, getNumberDependable, getDefaultDateObject, KeyboardEvents, L10n, ModuleLoader, Property, Complex, ComplexFactory, Collection, CollectionFactory, Event, NotifyPropertyChanges, CreateBuilder, SwipeSettings, Touch, HijriParser, blazorTemplates, getRandomId, compile, updateBlazorTemplate, resetBlazorTemplate, setTemplateEngine, getTemplateEngine, disableBlazorMode, createInstance, setImmediate, getValue, setValue, deleteObject, isObject, getEnumValue, merge, extend, isNullOrUndefined, isUndefined, getUniqueID, debounce, queryParams, isObjectArray, compareElementParent, throwError, print, formatUnit, enableBlazorMode, isBlazor, getElement, getInstance, addInstance, uniqueID, createElement, addClass, removeClass, isVisible, prepend, append, detach, remove, attributes, select, selectAll, closest, siblings, getAttributeOrDefault, setStyleAttribute, classList, matches, Observer, SanitizeHtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorCultureFormats", function() { return _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__["blazorCultureFormats"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntlBase", function() { return _intl_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"]; });

/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./node_modules/@syncfusion/ej2-base/src/ajax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["Ajax"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./node_modules/@syncfusion/ej2-base/src/animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["rippleEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["isRippleEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return _animation__WEBPACK_IMPORTED_MODULE_2__["enableRipple"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["Base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["getComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChildInstance", function() { return _base__WEBPACK_IMPORTED_MODULE_3__["removeChildInstance"]; });

/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser */ "./node_modules/@syncfusion/ej2-base/src/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./node_modules/@syncfusion/ej2-base/src/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_5__["Component"]; });

/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child-property */ "./node_modules/@syncfusion/ej2-base/src/child-property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return _child_property__WEBPACK_IMPORTED_MODULE_6__["ChildProperty"]; });

/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable */ "./node_modules/@syncfusion/ej2-base/src/draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _draggable__WEBPACK_IMPORTED_MODULE_7__["Position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _draggable__WEBPACK_IMPORTED_MODULE_7__["Draggable"]; });

/* harmony import */ var _droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./droppable */ "./node_modules/@syncfusion/ej2-base/src/droppable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return _droppable__WEBPACK_IMPORTED_MODULE_8__["Droppable"]; });

/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _event_handler__WEBPACK_IMPORTED_MODULE_9__["EventHandler"]; });

/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internationalization */ "./node_modules/@syncfusion/ej2-base/src/internationalization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["onIntlChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["rightToLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["cldrData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["defaultCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["defaultCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["Internationalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["setCulture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["setCurrencyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["loadCldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["enableRtl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getNumericObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberDependable", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getNumberDependable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return _internationalization__WEBPACK_IMPORTED_MODULE_10__["getDefaultDateObject"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keyboard */ "./node_modules/@syncfusion/ej2-base/src/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_11__["KeyboardEvents"]; });

/* harmony import */ var _l10n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./l10n */ "./node_modules/@syncfusion/ej2-base/src/l10n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return _l10n__WEBPACK_IMPORTED_MODULE_12__["L10n"]; });

/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module-loader */ "./node_modules/@syncfusion/ej2-base/src/module-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return _module_loader__WEBPACK_IMPORTED_MODULE_13__["ModuleLoader"]; });

/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Complex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["ComplexFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["CollectionFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["Event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["NotifyPropertyChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return _notify_property_change__WEBPACK_IMPORTED_MODULE_14__["CreateBuilder"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touch */ "./node_modules/@syncfusion/ej2-base/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return _touch__WEBPACK_IMPORTED_MODULE_15__["SwipeSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_15__["Touch"]; });

/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hijri-parser */ "./node_modules/@syncfusion/ej2-base/src/hijri-parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HijriParser", function() { return _hijri_parser__WEBPACK_IMPORTED_MODULE_16__["HijriParser"]; });

/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./template-engine */ "./node_modules/@syncfusion/ej2-base/src/template-engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazorTemplates", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["blazorTemplates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["getRandomId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateBlazorTemplate", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["updateBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetBlazorTemplate", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["resetBlazorTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["setTemplateEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return _template_engine__WEBPACK_IMPORTED_MODULE_17__["getTemplateEngine"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBlazorMode", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["disableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["createInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["setValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["deleteObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getEnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getUniqueID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["queryParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isObjectArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["compareElementParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["throwError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["formatUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBlazorMode", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["enableBlazorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlazor", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["isBlazor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["getInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["addInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return _util__WEBPACK_IMPORTED_MODULE_18__["uniqueID"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["attributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["selectAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["siblings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["getAttributeOrDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["setStyleAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["classList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _dom__WEBPACK_IMPORTED_MODULE_19__["matches"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./observer */ "./node_modules/@syncfusion/ej2-base/src/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_20__["Observer"]; });

/* harmony import */ var _sanitize_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sanitize-helper */ "./node_modules/@syncfusion/ej2-base/src/sanitize-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlHelper", function() { return _sanitize_helper__WEBPACK_IMPORTED_MODULE_21__["SanitizeHtmlHelper"]; });

/**
 * Base modules
 */
























/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/internationalization.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/internationalization.js ***!
  \***********************************************************************/
/*! exports provided: onIntlChange, rightToLeft, cldrData, defaultCulture, defaultCurrencyCode, Internationalization, setCulture, setCurrencyCode, loadCldr, enableRtl, getNumericObject, getNumberDependable, getDefaultDateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return onIntlChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return rightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return cldrData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return defaultCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return defaultCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return Internationalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return setCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return setCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return loadCldr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return enableRtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return getNumericObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberDependable", function() { return getNumberDependable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return getDefaultDateObject; });
/* harmony import */ var _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl/date-formatter */ "./node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js");
/* harmony import */ var _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl/number-formatter */ "./node_modules/@syncfusion/ej2-base/src/intl/number-formatter.js");
/* harmony import */ var _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl/date-parser */ "./node_modules/@syncfusion/ej2-base/src/intl/date-parser.js");
/* harmony import */ var _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intl/number-parser */ "./node_modules/@syncfusion/ej2-base/src/intl/number-parser.js");
/* harmony import */ var _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intl/intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observer */ "./node_modules/@syncfusion/ej2-base/src/observer.js");







/**
 * Specifies the observer used for external change detection.
 */
var onIntlChange = new _observer__WEBPACK_IMPORTED_MODULE_6__["Observer"]();
/**
 * Specifies the default rtl status for EJ2 components.
 */
var rightToLeft = false;
/**
 * Specifies the CLDR data loaded for internationalization functionalities.
 * @private
 */
var cldrData = {};
/**
 * Specifies the default culture value to be considered.
 * @private
 */
var defaultCulture = 'en-US';
/**
 * Specifies default currency code to be considered
 * @private
 */
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
/**
 * Internationalization class provides support to parse and format the number and date object to the desired format.
 * ```typescript
 * // To set the culture globally
 * setCulture('en-GB');
 *
 * // To set currency code globally
 * setCurrencyCode('EUR');
 *
 * //Load cldr data
 * loadCldr(gregorainData);
 * loadCldr(timeZoneData);
 * loadCldr(numbersData);
 * loadCldr(numberSystemData);
 *
 * // To use formatter in component side
 * let Intl:Internationalization = new Internationalization();
 *
 * // Date formatting
 * let dateFormatter: Function = Intl.getDateFormat({skeleton:'long',type:'dateTime'});
 * dateFormatter(new Date('11/2/2016'));
 * dateFormatter(new Date('25/2/2030'));
 * Intl.formatDate(new Date(),{skeleton:'E'});
 *
 * //Number formatting
 * let numberFormatter: Function = Intl.getNumberFormat({skeleton:'C5'})
 * numberFormatter(24563334);
 * Intl.formatNumber(123123,{skeleton:'p2'});
 *
 * // Date parser
 * let dateParser: Function = Intl.getDateParser({skeleton:'short',type:'time'});
 * dateParser('10:30 PM');
 * Intl.parseDate('10',{skeleton:'H'});
 * ```
 */
var Internationalization = /** @class */ (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    /**
     * Returns the format function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateFormat = function (options) {
        return _intl_date_formatter__WEBPACK_IMPORTED_MODULE_0__["DateFormat"].dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    /**
     * Returns the format function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the format function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        return _intl_number_formatter__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {DateFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getDateParser = function (options) {
        return _intl_date_parser__WEBPACK_IMPORTED_MODULE_2__["DateParser"].dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    /**
     * Returns the parser function for given options.
     * @param {NumberFormatOptions} options - Specifies the format options in which the parser function will return.
     * @returns {Function}
     */
    Internationalization.prototype.getNumberParser = function (options) {
        return _intl_number_parser__WEBPACK_IMPORTED_MODULE_3__["NumberParser"].numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    /**
     * Returns the formatted string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {NumberFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    /**
     * Returns the formatted date string based on format options.
     * @param {Number} value - Specifies the number to format.
     * @param {DateFormatOptions} option - Specifies the format options in which the number will be formatted.
     * @returns {string}
     */
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    /**
     * Returns the date object for given date string and options.
     * @param {string} value - Specifies the string to parse.
     * @param {DateFormatOptions} option - Specifies the parse options in which the date string will be parsed.
     * @returns {Date}
     */
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    /**
     * Returns the number object from the given string value and options.
     * @param {string} value - Specifies the string to parse.
     * @param {NumberFormatOptions} option - Specifies the parse options in which the  string number  will be parsed.
     * @returns {number}
     */
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    /**
     * Returns Native Date Time Pattern
     * @param {DateFormatOptions} option - Specifies the parse options for resultant date time pattern.
     * @param {boolean} isExcelFormat - Specifies format value to be converted to excel pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    /**
     * Returns Native Number Pattern
     * @param {NumberFormatOptions} option - Specifies the parse options for resultant number pattern.
     * @returns {string}
     * @private
     */
    Internationalization.prototype.getNumberPattern = function (option) {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getActualNumberFormat(this.getCulture(), option, cldrData);
    };
    /**
     * Returns the First Day of the Week
     * @returns {number}
     */
    Internationalization.prototype.getFirstDayOfWeek = function () {
        return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getWeekData(this.getCulture(), cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

/**
 * Set the default culture to all EJ2 components
 * @param {string} cultureName - Specifies the culture name to be set as default culture.
 */
function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
/**
 * Set the default currency code to all EJ2 components
 * @param {string} currencyCode Specifies the culture name to be set as default culture.
 * @returns {void}
 */
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
    onIntlChange.notify('notifyExternalChange', { 'currencyCode': defaultCurrencyCode });
}
/**
 * Load the CLDR data into context
 * @param {Object[]} obj Specifies the CLDR data's to be used for formatting and parser.
 * @returns {void}
 */
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        Object(_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(cldrData, obj, {}, true);
    }
}
/**
 * To enable or disable RTL functionality for all components globally.
 * @param {boolean} status - Optional argument Specifies the status value to enable or disable rtl option.
 * @returns {void}
 */
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
/**
 * To get the numeric CLDR object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @ignore
 * @private
 */
function getNumericObject(locale, type) {
    /* tslint:disable no-any */
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '', true)[mapper[0]];
    var dateObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '')[mapper[1]];
    var numSystem = Object(_util__WEBPACK_IMPORTED_MODULE_5__["getValue"])('defaultNumberingSystem', numObject);
    var symbPattern = Object(_util__WEBPACK_IMPORTED_MODULE_5__["getValue"])('symbols-numberSystem-' + numSystem, numObject);
    var pattern = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return Object(_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(symbPattern, _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getFormatData(pattern, true, '', true), { 'dateSeparator': _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDateSeparator(dateObject) });
}
/**
 * To get the numeric CLDR  number base object for given culture
 * @param {string} locale - Specifies the locale for which numericObject to be returned.
 * @param {string} currency - Specifies the currency for which numericObject to be returned.
 * @ignore
 * @private
 */
function getNumberDependable(locale, currency) {
    var numObject = _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, locale, '', true);
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getCurrencySymbol(numObject.numericObject, currency);
}
/**
 * To get the default date CLDR object.
 * @ignore
 * @private
 */
function getDefaultDateObject(mode) {
    return _intl_intl_base__WEBPACK_IMPORTED_MODULE_4__["IntlBase"].getDependables(cldrData, '', mode, false)[mapper[1]];
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js ***!
  \**********************************************************************/
/*! exports provided: basicPatterns, datePartMatcher, DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicPatterns", function() { return basicPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datePartMatcher", function() { return datePartMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-base */ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hijri-parser */ "./node_modules/@syncfusion/ej2-base/src/hijri-parser.js");





var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|cccc|ccc|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
    f: 'getMilliseconds'
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era',
    'f': 'milliseconds'
};
var timeSeparator = 'timeSeparator';
/* tslint:disable no-any */
/**
 * Date Format is a framework provides support for date formatting.
 * @private
 */
var DateFormat = /** @class */ (function () {
    function DateFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which date  will format.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getDependables(cldr, culture, option.calendar);
        var formatOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].islamicRegex.test(option.calendar) };
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format || _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        formatOptions.dateSeperator = _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].getDateSeparator(dependable.dateObject);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(resPattern)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Format options or type given must be invalid');
        }
        else {
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                /* tslint:disable no-any */
                var charKey = datePartMatcher[char];
                switch (char) {
                    case 'E':
                    case 'c':
                        formatOptions.weekday = dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].days][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len]];
                        break;
                    case 'M':
                    case 'L':
                        formatOptions.month = dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].month][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].monthIndex[len]];
                        break;
                    case 'a':
                        formatOptions.designator = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods.format.wide', dependable.dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    /**
     * Returns formatted date string based on options passed.
     * @param {Date} value
     * @param {FormatOptions} options
     */
    // tslint:disable-next-line:max-func-body-length
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].dateParseRegex);
        var dObject = this.getCurrentDateValue(value, options.isIslamic);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var curvalstr = '';
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = dObject.month;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                case 'f':
                    isNumber = true;
                    if (char === 'd') {
                        curval = dObject.date;
                    }
                    else if (char === 'f') {
                        isNumber = false;
                        processNumber = true;
                        curvalstr = value[timeSetter[char]]().toString();
                        curvalstr = curvalstr.substring(0, length_1);
                        var curlength = curvalstr.length;
                        if (length_1 !== curlength) {
                            if (length_1 > 3) {
                                continue;
                            }
                            for (var i = 0; i < length_1 - curlength; i++) {
                                curvalstr = '0' + curvalstr.toString();
                            }
                        }
                        curstr += curvalstr;
                    }
                    else {
                        curval = value[timeSetter[char]]();
                    }
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += dObject.year;
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    var retu = options.era[dec];
                    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(retu)) {
                        retu = options.era[dec ? 0 : 1];
                    }
                    ret += retu || '';
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    /* tslint:enable no-any */
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += _parser_base__WEBPACK_IMPORTED_MODULE_0__["ParserBase"].convertValueParts(curstr, _intl_base__WEBPACK_IMPORTED_MODULE_1__["IntlBase"].latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.getCurrentDateValue = function (value, isIslamic) {
        if (isIslamic) {
            return _hijri_parser__WEBPACK_IMPORTED_MODULE_3__["HijriParser"].getHijriDate(value);
        }
        return { year: value.getFullYear(), month: value.getMonth() + 1, date: value.getDate() };
    };
    /**
     * Returns two digit numbers for given value and length
     */
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    /**
     * Returns the value of the Time Zone.
     * @param {number} tVal
     * @param {string} pattern
     * @private
     */
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/date-parser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/date-parser.js ***!
  \*******************************************************************/
/*! exports provided: DateParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParser", function() { return DateParser; });
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js");
/* harmony import */ var _hijri_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hijri-parser */ "./node_modules/@syncfusion/ej2-base/src/hijri-parser.js");





var number = 'numbers';
var defNoSystem = 'defaultNumberingSystem';
var noSystem = 'numberingSystem';
var standalone = 'stand-alone';
var curWeekDay = 'curWeekDay';
var latnRegex = /^[0-9]*$/;
var abbreviateRegex = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|ccc/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth',
    milliseconds: 'setMilliseconds'
};
var month = 'months';
/* tslint:disable no-any */
/**
 * Date Parser.
 * @private
 */
var DateParser = /** @class */ (function () {
    function DateParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {DateFormatOptions} - Specific the format in which string date  will be parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     *  @return Function.
     */
    // tslint:disable-next-line:max-func-body-length
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].getDependables(cldr, culture, option.calendar);
        var numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr));
        var parseOptions = {};
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && option.isServerRendered) {
            option = _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].compareBlazorDateFormats(option, culture);
        }
        var resPattern = option.format || _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        var regexString = '';
        var hourOnly;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(resPattern)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Format options or type given must be invalid');
        }
        else {
            parseOptions = { isIslamic: _intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].islamicRegex.test(option.calendar), pattern: resPattern, evalposition: {} };
            var patternMatch = resPattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var gmtCorrection = 0;
            var zCorrectTemp = 0;
            var isgmtTraversed = false;
            var nRegx = numOptions.numericRegex;
            var numMapper = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr));
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                var charKey = _date_formatter__WEBPACK_IMPORTED_MODULE_3__["datePartMatcher"][char];
                var optional = (len === 2) ? '' : '?';
                if (isgmtTraversed) {
                    gmtCorrection = zCorrectTemp;
                    isgmtTraversed = false;
                }
                switch (char) {
                    case 'E':
                    case 'c':
                        // tslint:disable-next-line
                        var weekObject = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(dependable.dateObject[_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].days][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len]]);
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                    case 'f':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            // tslint:disable-next-line
                            parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(dependable.dateObject[month][standalone][_intl_base__WEBPACK_IMPORTED_MODULE_0__["IntlBase"].monthIndex[len]]);
                            /* tslint:disable no-any */
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else if (char === 'f') {
                            if (len > 3) {
                                continue;
                            }
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + '?' + nRegx + '?' + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '{' + len + ',})';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dayPeriods.format.wide', dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions[charKey] = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].reverseObject(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions[charKey] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        hpattern = hpattern.replace(/:/g, numMapper.timeSeparator);
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        isgmtTraversed = true;
                        zCorrectTemp = hourOnly ? 6 : 12;
                        break;
                    case '\'':
                        var iString = str.replace(/\'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '([\\D])';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1 + gmtCorrection, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$', 'i');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            if (parseOptions.isIslamic) {
                var dobj = {};
                var tYear = parsedDateParts.year;
                var tDate = parsedDateParts.day;
                var tMonth = parsedDateParts.month;
                var ystrig = tYear ? (tYear + '') : '';
                var is2DigitYear = (ystrig.length === 2);
                if (!tYear || !tMonth || !tDate || is2DigitYear) {
                    dobj = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__["HijriParser"].getHijriDate(new Date());
                }
                if (is2DigitYear) {
                    tYear = parseInt((dobj.year + '').slice(0, 2) + ystrig, 10);
                }
                // tslint:disable-next-line
                var dateObject = _hijri_parser__WEBPACK_IMPORTED_MODULE_4__["HijriParser"].toGregorian(tYear || dobj.year, tMonth || dobj.month, tDate || dobj.date);
                parsedDateParts.year = dateObject.getFullYear();
                parsedDateParts.month = dateObject.getMonth() + 1;
                parsedDateParts.day = dateObject.getDate();
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    /* tslint:disable */
    /**
     * Returns date object for provided date options
     * @param {DateParts} options
     * @param {Date} value
     * @returns {Date}
     */
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        res.setMilliseconds(0);
        var tKeys = ['hour', 'minute', 'second', 'milliseconds', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options[key];
            if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tValue) && key === "day") {
                res.setDate(1);
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res[timeSetter[key]](tValue);
                }
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    /**
     * Returns date parsing options for provided value along with parse and numeric options
     * @param {string} value
     * @param {ParseOptions} parseOptions
     * @param {NumericOptions} num
     * @returns {DateParts}
     */
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        var nRegx = num.numericRegex;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    /**
     * Returns parsed number for provided Numeric string and Numeric Options
     * @param {string} value
     * @param {NumericOptions} option
     * @returns {number}
     */
    DateParser.internalNumberParser = function (value, option) {
        value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    /**
     * Returns parsed time zone RegExp for provided hour format and time zone
     * @param {string} hourFormat
     * @param {base.TimeZoneOptions} tZone
     * @param {string} nRegex
     * @returns {string}
     */
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var result;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    /**
     * Returns zone based value.
     * @param {boolean} flag
     * @param {string} val1
     * @param {string} val2
     * @param {NumericOptions} num
     * @returns {number}
     */
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var ival = flag ? val1 : val2;
        if (!ival) {
            return 0;
        }
        var value = this.internalNumberParser(ival, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());

/* tslint:enable */


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js ***!
  \*****************************************************************/
/*! exports provided: blazorCultureFormats, IntlBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blazorCultureFormats", function() { return blazorCultureFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntlBase", function() { return IntlBase; });
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internationalization */ "./node_modules/@syncfusion/ej2-base/src/internationalization.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser-base */ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js");
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-formatter */ "./node_modules/@syncfusion/ej2-base/src/intl/date-formatter.js");
/* harmony import */ var _number_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-formatter */ "./node_modules/@syncfusion/ej2-base/src/intl/number-formatter.js");






var blazorCultureFormats = {
    'en-US': {
        'd': 'M/d/y',
        'D': 'EEEE, MMMM d, y',
        'f': 'EEEE, MMMM d, y h:mm a',
        'F': 'EEEE, MMMM d, y h:mm:s a',
        'g': 'M/d/y h:mm a',
        't': 'h:mm a',
        'T': 'h:m:s a'
    }
};
/**
 * Date base common constants and function for date parser and formatter.
 */
var IntlBase;
(function (IntlBase) {
    // tslint:disable-next-line:max-line-length
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    var defaultFirstDay = 'sun';
    IntlBase.islamicRegex = /^islamic/;
    var firstDayMapper = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6
    };
    IntlBase.formatRegex = /(^[ncpae]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.currencyFormatRegex = /(^[ca]{1})([0-1]?[0-9]|20)?$/i;
    IntlBase.curWithoutNumberRegex = /(c|a)$/ig;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    /* tslint:disable:quotemark */
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                },
                "islamic": {
                    "months": {
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Muh.",
                                "2": "Saf.",
                                "3": "Rab. I",
                                "4": "Rab. II",
                                "5": "Jum. I",
                                "6": "Jum. II",
                                "7": "Raj.",
                                "8": "Sha.",
                                "9": "Ram.",
                                "10": "Shaw.",
                                "11": "Dhuʻl-Q.",
                                "12": "Dhuʻl-H."
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4",
                                "5": "5",
                                "6": "6",
                                "7": "7",
                                "8": "8",
                                "9": "9",
                                "10": "10",
                                "11": "11",
                                "12": "12"
                            },
                            "wide": {
                                "1": "Muharram",
                                "2": "Safar",
                                "3": "Rabiʻ I",
                                "4": "Rabiʻ II",
                                "5": "Jumada I",
                                "6": "Jumada II",
                                "7": "Rajab",
                                "8": "Shaʻban",
                                "9": "Ramadan",
                                "10": "Shawwal",
                                "11": "Dhuʻl-Qiʻdah",
                                "12": "Dhuʻl-Hijjah"
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "AH"
                        },
                        "eraAbbr": {
                            "0": "AH"
                        },
                        "eraNarrow": {
                            "0": "AH"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE, MMMM d, y G",
                        "long": "MMMM d, y G",
                        "medium": "MMM d, y G",
                        "short": "M/d/y GGGGG"
                    },
                    "timeFormats": {
                        "full": "h:mm:ss a zzzz",
                        "long": "h:mm:ss a z",
                        "medium": "h:mm:ss a",
                        "short": "h:mm a"
                    },
                    "dateTimeFormats": {
                        "full": "{1} 'at' {0}",
                        "long": "{1} 'at' {0}",
                        "medium": "{1}, {0}",
                        "short": "{1}, {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "d E",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "MMM d, y G",
                            "GyMMMEd": "E, MMM d, y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "M": "L",
                            "Md": "M/d",
                            "MEd": "E, M/d",
                            "MMM": "LLL",
                            "MMMd": "MMM d",
                            "MMMEd": "E, MMM d",
                            "MMMMd": "MMMM d",
                            "ms": "mm:ss",
                            "y": "y G",
                            "yyyy": "y G",
                            "yyyyM": "M/y GGGGG",
                            "yyyyMd": "M/d/y GGGGG",
                            "yyyyMEd": "E, M/d/y GGGGG",
                            "yyyyMMM": "MMM y G",
                            "yyyyMMMd": "MMM d, y G",
                            "yyyyMMMEd": "E, MMM d, y G",
                            "yyyyMMMM": "MMMM y G",
                            "yyyyQQQ": "QQQ y G",
                            "yyyyQQQQ": "QQQQ y G"
                        }
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            },
            'scientificFormats-numberSystem-latn': {
                'standard': '#E0'
            }
        }
    };
    /* tslint:enable:quotemark */
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    /**
     *
     */
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    /**
     * Default numerber Object
     */
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency',
        E: 'scientific'
    };
    /**
     * Returns the resultant pattern based on the skeleton, dateObject and the type provided
     * @private
     * @param {string} skeleton
     * @param {Object} dateObject
     * @param {string} type
     * @returns {string}
     */
    function getResultantPattern(skeleton, dateObject, type, isIslamic) {
        var resPattern;
        var iType = type || 'date';
        if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
            resPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(iType + 'Formats.' + skeleton, dateObject);
            if (iType === 'dateTime') {
                var dPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateFormats.' + skeleton, dateObject);
                var tPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('timeFormats.' + skeleton, dateObject);
                resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
            }
        }
        else {
            resPattern = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateTimeFormats.availableFormats.' + skeleton, dateObject);
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(resPattern) && skeleton === 'yMd') {
            resPattern = 'M/d/y';
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    /**
     * Returns the dependable object for provided cldr data and culture
     * @private
     * @param {Object} cldr
     * @param {string} culture
     * @param {boolean} isNumber
     * @returns {Dependables}
     */
    function getDependables(cldr, culture, mode, isNumber) {
        var ret = {};
        var calendartype = mode || 'gregorian';
        ret.parserObject = _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getMainObject(cldr, culture) || IntlBase.defaultObject;
        if (isNumber) {
            ret.numericObject = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('numbers', ret.parserObject);
        }
        else {
            ret.dateObject = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dates.calendars.' + calendartype, ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    /**
     * Returns the symbol pattern for provided parameters
     * @private
     * @param {string} type
     * @param {string} numSystem
     * @param {Object} obj
     * @param {boolean} isAccount
     * @returns {string}
     */
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function compareBlazorDateFormats(formatOptions, culture) {
        var format = formatOptions.format || formatOptions.skeleton;
        var curFormatMapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])((culture || 'en-US') + '.' + format, blazorCultureFormats);
        if (!curFormatMapper) {
            curFormatMapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('en-US.' + format, blazorCultureFormats);
        }
        if (curFormatMapper) {
            formatOptions.format = curFormatMapper.replace(/tt/, 'a');
        }
        return formatOptions;
    }
    IntlBase.compareBlazorDateFormats = compareBlazorDateFormats;
    /**
     * Returns proper numeric skeleton
     * @private
     * @param {string} skeleton
     * @returns {NumericSkeleton}
     */
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        /* tslint:disable no-any */
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    /**
     * Returns format data for number formatting like minimum fraction, maximum fraction, etc..,
     * @private
     * @param {string} pattern
     * @param {boolean} needFraction
     * @param {string} cSymbol
     * @param {boolean} fractionOnly
     * @returns {NegativeData}
     */
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    /**
     * Changes currency symbol
     * @private
     * @param {string} val
     * @param {string} sym
     * @returns {string}
     */
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    /**
     * Returns currency symbol based on currency code
     * @private
     * @param {Object} numericObject
     * @param {string} currencyCode
     * @returns {string}
     */
    function getCurrencySymbol(numericObject, currencyCode, altSymbol) {
        var symbol = altSymbol ? ('.' + altSymbol) : '.symbol';
        var getCurrency = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('currencies.' + currencyCode + symbol, numericObject) ||
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('currencies.' + currencyCode + '.symbol-alt-narrow', numericObject) || '$';
        return getCurrency;
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    /**
     * Returns formatting options for custom number format
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Dependables} obj
     * @returns {GenericFormatOptions}
     */
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(options.nData)) {
            options.nData = Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, options.pData);
            options.nData.nlead = Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    /**
     * Returns custom formatting options
     * @private
     * @param {string} format
     * @param {CommonOptions} dOptions
     * @param {Object} numObject
     * @returns {NegativeData}
     */
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(pattern) || (pattern[5] === '' && format !== 'N/A')) {
            cOptions.type = undefined;
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(dOptions)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = _number_formatter__WEBPACK_IMPORTED_MODULE_4__["NumberFormat"].getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    /**
     * Returns formatting options for currency or percent type
     * @private
     * @param {string[]} parts
     * @param {string} actual
     * @param {string} symbol
     * @returns {NegativeData}
     */
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    /**
     * Returns culture based date separator
     * @private
     * @param {Object} dateObj
     * @returns {string}
     */
    function getDateSeparator(dateObj) {
        var value = (Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    /**
     * Returns Native Date Time pattern
     * @private
     * @param {string} culture
     * @param {DateFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture, options.calendar);
        if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBlazor"])()) {
            options = compareBlazorDateFormats(options, culture);
        }
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberingSystem(cldr));
                options_1.timeZone = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = _date_formatter__WEBPACK_IMPORTED_MODULE_3__["DateFormat"].getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    /**
     * Returns Native Number pattern
     * @private
     * @param {string} culture
     * @param {NumberFormatOptions} options
     * @param {Object} cldr
     * @returns {string}
     */
    function getActualNumberFormat(culture, options, cldr) {
        var dependable = getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var minFrac;
        var curObj = {};
        var curMatch = (options.format || '').match(IntlBase.currencyFormatRegex);
        if (curMatch) {
            var dOptions = {};
            dOptions.numberMapper = _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_2__["ParserBase"].getNumberingSystem(cldr), true);
            var curCode = getCurrencySymbol(dependable.numericObject, options.currency || _internationalization__WEBPACK_IMPORTED_MODULE_0__["defaultCurrencyCode"], options.altSymbol);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            symbolPattern = symbolPattern.replace(/\u00A4/g, curCode);
            var split = symbolPattern.split(';');
            curObj.hasNegativePattern = (split.length > 1);
            curObj.nData = getFormatData(split[1] || '-' + split[0], true, curCode);
            curObj.pData = getFormatData(split[0], false, curCode);
            if (!curMatch[2] && !options.minimumFractionDigits && !options.maximumFractionDigits) {
                minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
            }
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["extend"])(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency') {
                var cPattern = actualPattern;
                actualPattern = curObj.pData.nlead + cPattern + curObj.pData.nend;
                if (curObj.hasNegativePattern) {
                    actualPattern += ';' + curObj.nData.nlead + cPattern + curObj.nData.nend;
                }
            }
            if (parseOptions.type === 'percent') {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
    function getWeekData(culture, cldr) {
        var firstDay = defaultFirstDay;
        var mapper = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getValue"])('supplemental.weekData.firstDay', cldr);
        var iCulture = culture;
        if ((/en-/).test(iCulture)) {
            iCulture = iCulture.slice(3);
        }
        iCulture = iCulture.slice(0, 2).toUpperCase() + iCulture.substr(2);
        if (mapper) {
            firstDay = mapper[iCulture] || defaultFirstDay;
        }
        return firstDayMapper[firstDay];
    }
    IntlBase.getWeekData = getWeekData;
})(IntlBase || (IntlBase = {}));


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/number-formatter.js":
/*!************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/number-formatter.js ***!
  \************************************************************************/
/*! exports provided: NumberFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormat", function() { return NumberFormat; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internationalization */ "./node_modules/@syncfusion/ej2-base/src/internationalization.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser-base */ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js");




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal', 'exponential'];
var infinity = 'infinity';
var nan = 'nan';
/**
 * Module for number formatting.
 * @private
 */
var NumberFormat = /** @class */ (function () {
    function NumberFormat() {
    }
    /**
     * Returns the formatter function for given skeleton.
     * @param {string} culture -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} option - Specific the format in which number  will format.
     * @param {Object} object- Specifies the global cldr data collection.
     * @return Function.
     */
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getDependables(cldr, culture, '', true);
        dOptions.numberMapper = _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].getNumberMapper(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].getNumberingSystem(cldr), true);
        dOptions.currencySymbol = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getCurrencySymbol(dependable.numericObject, fOptions.currency || _internationalization__WEBPACK_IMPORTED_MODULE_1__["defaultCurrencyCode"], option.altSymbol);
        /* tslint:disable no-any */
        dOptions.percentSymbol = dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].formatRegex.test(option.format))) {
            cOptions = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(fOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            symbolPattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].defaultCurrency);
            }
            var split = symbolPattern.split(';');
            cOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
            cOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[0], false, dOptions.currencySymbol);
            if (fOptions.useGrouping) {
                fOptions.groupSeparator = symbols[mapper[2]];
                fOptions.groupData = this.getGroupingDetails(split[0]);
            }
            var minFrac = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(mfrac) && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(cOptions.nData, fOptions);
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    /**
     * Returns grouping details for the pattern provided
     * @param {string} pattern
     * @returns {GroupDetails}
     */
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    /**
     * Returns if the provided integer range is valid.
     * @param {number} val1
     * @param {number} val2
     * @param {boolean} checkbothExist
     * @param {boolean} isFraction
     * @returns {boolean}
     */
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    /**
     * Check if the provided fraction range is valid
     * @param {number} val
     * @param {string} text
     * @param {boolean} isFraction
     * @returns {void}
     */
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["throwError"])(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    /**
     * Returns formatted numeric string for provided formatting options
     * @param {number} value
     * @param {base.GenericFormatOptions} fOptions
     * @param {CommonOptions} dOptions
     * @returns {string}
     */
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(fOptions.nData.type)) {
            return undefined;
        }
        else {
            if (value < 0) {
                value = value * -1;
                curData = fOptions.nData;
            }
            else if (value === 0) {
                curData = fOptions.zeroData || fOptions.pData;
            }
            else {
                curData = fOptions.pData;
            }
            var fValue = '';
            if (curData.isPercent) {
                value = value * 100;
            }
            if (curData.groupOne) {
                fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
            }
            else {
                fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
                if (curData.minimumIntegerDigits) {
                    fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
                }
            }
            if (curData.type === 'scientific') {
                fValue = value.toExponential(curData.maximumFractionDigits);
                fValue = fValue.replace('e', dOptions.numberMapper.numberSymbols[mapper[4]]);
            }
            fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
            if (curData.useGrouping) {
                fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
            }
            fValue = _parser_base__WEBPACK_IMPORTED_MODULE_3__["ParserBase"].convertValueParts(fValue, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].latnParseRegex, dOptions.numberMapper.mapper);
            if (curData.nlead === 'N/A') {
                return curData.nlead;
            }
            else {
                return curData.nlead + fValue + curData.nend;
            }
        }
    };
    /**
     * Returns significant digits processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    /**
     * Returns grouped numeric string
     * @param {string} val
     * @param {number} level1
     * @param {string} sep
     * @param {string} decimalSymbol
     * @param {number} level2
     * @returns {string}
     */
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    /**
     * Returns fraction processed numeric string
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {string}
     */
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    /**
     * Returns integer processed numeric string
     * @param {string} value
     * @param {number} min
     * @returns {string}
     */
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/number-parser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/number-parser.js ***!
  \*********************************************************************/
/*! exports provided: NumberParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParser", function() { return NumberParser; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _parser_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-base */ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js");
/* harmony import */ var _intl_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl-base */ "./node_modules/@syncfusion/ej2-base/src/intl/intl-base.js");



var formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var latnDecimalRegex = /^[0-9]*(\.[0-9]+)?$/;
var keys = ['minusSign', 'infinity'];
/**
 * Module for Number Parser.
 * @private
 */
var NumberParser = /** @class */ (function () {
    function NumberParser() {
    }
    /**
     * Returns the parser function for given skeleton.
     * @param {string} -  Specifies the culture name to be which formatting.
     * @param {NumberFormatOptions} - Specific the format in which number  will parsed.
     * @param {cldr} - Specifies the global cldr data collection.
     * @return Function.
     */
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getDependables(cldr, culture, '', true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((_intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].formatRegex.test(option.format)) || !(option.format)) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(parseOptions, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].customFormat(option.format, null, null));
        }
        numOptions = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getCurrentNumericOptions(dependable.parserObject, _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getNumberingSystem(cldr), true);
        parseOptions.symbolRegex = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].getSymbolRegex(Object.keys(numOptions.symbolMatch));
        // tslint:disable-next-line:no-any
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
        if (symbolpattern) {
            symbolpattern = symbolpattern.replace(/\u00A4/g, _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].defaultCurrency);
            var split = symbolpattern.split(';');
            parseOptions.nData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[1] || '-' + split[0], true, '');
            parseOptions.pData = _intl_base__WEBPACK_IMPORTED_MODULE_2__["IntlBase"].getFormatData(split[0], true, '');
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    /**
     * Returns parsed number for the provided formatting options
     * @param {string} value
     * @param {NumericParts} options
     * @param {NumericOptions} numOptions
     * @returns {number}
     */
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = _parser_base__WEBPACK_IMPORTED_MODULE_1__["ParserBase"].convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    return NumberParser;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/intl/parser-base.js ***!
  \*******************************************************************/
/*! exports provided: ParserBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserBase", function() { return ParserBase; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/**
 * Parser
 */
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Interface for parser base
 * @private
 */
var ParserBase = /** @class */ (function () {
    function ParserBase() {
    }
    /**
     * Returns the cldr object for the culture specifies
     * @param {Object} obj - Specifies the object from which culture object to be acquired.
     * @param {string} cName - Specifies the culture name.
     * @returns {Object}
     */
    ParserBase.getMainObject = function (obj, cName) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('main.' + cName, obj);
    };
    /**
     * Returns the numbering system object from given cldr data.
     * @param {Object} obj - Specifies the object from which number system is acquired.
     * @returns {Object}
     */
    ParserBase.getNumberingSystem = function (obj) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    /**
     * Returns the reverse of given object keys or keys specified.
     * @param {Object} prop - Specifies the object to be reversed.
     * @param {number[]} keys - Optional parameter specifies the custom keyList for reversal.
     * @returns {Object}
     */
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            /* tslint:disable no-any */
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    /**
     * Returns the symbol regex by skipping the escape sequence.
     * @param {string[]} props - Specifies the array values to be skipped.
     * @returns {RegExp}
     */
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    /**
     * Returns regex string for provided value
     * @param {string} val
     * @returns {string}
     */
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     * @param {string} value - Specifies the  values to be replaced.
     * @param {RegExp} regex - Specifies the  regex to search.
     * @param {Object} obj - Specifies the  object matcher to be replace value parts.
     * @returns {string}
     */
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    /**
     * Returns default numbering system object for formatting from cldr data
     * @param {Object} obj
     * @returns {NumericObject}
     */
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('numbers', obj);
        ret.nSystem = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('defaultNumberingSystem', ret.obj);
        return ret;
    };
    /**
     * Returns the replaced value of matching regex and obj mapper.
     */
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cur.nSystem)) {
            var digits = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(cur.nSystem + '._digits', numberSystem);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    /**
     * Returns number mapper object for the provided cldr data
     * @param {Object} curObj
     * @param {Object} numberSystem
     * @param {boolean} isNumber
     * @returns {NumberMapper}
     */
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('timeSeparator', ret.numberSymbols);
            var digits = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(cur.nSystem + '._digits', numberSystem);
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    ParserBase.nPair = 'numericPair';
    ParserBase.nRegex = 'numericRegex';
    ParserBase.numberingSystems = defaultNumberingSystem;
    return ParserBase;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/keyboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/keyboard.js ***!
  \***********************************************************/
/*! exports provided: KeyboardEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return KeyboardEvents; });
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
/**
 * KeyboardEvents class enables you to bind key action desired key combinations for ex., Ctrl+A, Delete, Alt+Space etc.
 * ```html
 * <div id='testEle'>  </div>;
 * <script>
 *   let node: HTMLElement = document.querySelector('#testEle');
 *   let kbInstance = new KeyboardEvents({
 *       element: node,
 *       keyConfigs:{ selectAll : 'ctrl+a' },
 *       keyAction: function (e:KeyboardEvent, action:string) {
 *           // handler function code
 *       }
 *   });
 * </script>
 * ```
 */
var KeyboardEvents = /** @class */ (function (_super) {
    __extends(KeyboardEvents, _super);
    /**
     * Initializes the KeyboardEvents
     * @param {HTMLElement} element
     * @param {KeyboardEventsModel} options
     */
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        /**
         * To handle a key press event returns null
         */
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents_1 = KeyboardEvents;
    /**
     * Unwire bound events and destroy the instance.
     * @return {void}
     */
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    /**
     * Function can be used to specify certain action if a property is changed
     * @param newProp
     * @param oldProp
     * @returns {void}
     * @private
     */
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
        // No code are needed
    };
    ;
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    /**
     * To get the module name, returns 'keyboard'.
     * @private
     */
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    /**
     * Wiring event handlers to events
     */
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * Unwiring event handlers to events
     */
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    /**
     * To get the key configuration data
     * @param {string} config - configuration data
     * returns {KeyData}
     */
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    // Return the keycode value as string 
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    var KeyboardEvents_1;
    KeyboardEvents.configCache = {};
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], KeyboardEvents.prototype, "keyConfigs", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Property"])('keyup')
    ], KeyboardEvents.prototype, "eventName", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], KeyboardEvents.prototype, "keyAction", void 0);
    KeyboardEvents = KeyboardEvents_1 = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], KeyboardEvents);
    return KeyboardEvents;
}(_base__WEBPACK_IMPORTED_MODULE_1__["Base"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/l10n.js":
/*!*******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/l10n.js ***!
  \*******************************************************/
/*! exports provided: L10n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return L10n; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _internationalization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internationalization */ "./node_modules/@syncfusion/ej2-base/src/internationalization.js");


/**
 * L10n modules provides localized text for different culture.
 * ```typescript
 * import {setCulture} from '@syncfusion/ts-base-library';
 * //load global locale object common for all components.
 * L10n.load({
 *    'fr-BE': {
 *       'button': {
 *            'check': 'vérifié'
 *        }
 *    }
 * });
 * //set globale default locale culture.
 * setCulture('fr-BE');
 * let instance: L10n = new L10n('button', {
 *    check: 'checked'
 * });
 * //Get locale text for current property.
 * instance.getConstant('check');
 * //Change locale culture in a component.
 * instance.setLocale('en-US');
 * ```
 */
var L10n = /** @class */ (function () {
    /**
     * Constructor
     */
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || _internationalization__WEBPACK_IMPORTED_MODULE_1__["defaultCulture"]);
    }
    /**
     * Sets the locale text
     * @param {string} locale
     * @returns {void}
     */
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        this.currentLocale = intLocale || this.localeStrings;
    };
    /**
     * Sets the global locale for all components.
     * @param {Object} localeObject - specifies the localeObject to be set as global locale.
     */
    L10n.load = function (localeObject) {
        this.locale = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.locale, localeObject, {}, true);
    };
    /**
     * Returns current locale text for the property based on the culture name and control name.
     * @param {string} propertyName - specifies the property for which localize text to be returned.
     * @return string
     */
    L10n.prototype.getConstant = function (prop) {
        // Removed conditional operator because this method does not return correct value when passing 0 as value in localization
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.currentLocale[prop])) {
            return this.currentLocale[prop];
        }
        else {
            return this.localeStrings[prop] || '';
        }
    };
    /**
     * Returns the control constant object for current object and the locale specified.
     * @param {Object} curObject
     * @param {string} locale
     * @returns {Object}
     */
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if ((curObject)[locale]) {
            return (curObject)[locale][this.controlName];
        }
        return null;
    };
    L10n.locale = {};
    return L10n;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/module-loader.js":
/*!****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/module-loader.js ***!
  \****************************************************************/
/*! exports provided: ModuleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return ModuleLoader; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/**
 * Module loading operations
 */

var MODULE_SUFFIX = 'Module';
var ModuleLoader = /** @class */ (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    ;
    /**
     * Inject required modules in component library
     * @return {void}
     * @param {ModuleDeclaration[]} requiredModules - Array of modules to be required
     * @param {Function[]} moduleList - Array of modules to be injected from sample side
     */
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(memberName, module, this.parent);
                    }
                    else {
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["setValue"])(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    /**
     * To remove the created object while destroying the control
     * @return {void}
     */
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    /**
     * Removes all unused modules
     * @param {ModuleDeclaration[]} moduleList
     * @returns {void}
     */
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["deleteObject"])(this.parent, mod.member);
        }
    };
    /**
     * To get the name of the member.
     * @param {string} name
     * @returns {string}
     */
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    /**
     * Returns boolean based on whether the module specified is loaded or not
     * @param {string} modName
     * @returns {boolean}
     */
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/notify-property-change.js ***!
  \*************************************************************************/
/*! exports provided: Property, Complex, ComplexFactory, Collection, CollectionFactory, Event, NotifyPropertyChanges, CreateBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return Complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return ComplexFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return CollectionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return NotifyPropertyChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return CreateBuilder; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");

/**
 * Returns the Class Object
 * @param {ClassObject} instance - instance of ClassObject
 * @param {string} curKey - key of the current instance
 * @param {Object} defaultValue - default Value
 * @param {Object[]} type
 */
function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey) || !(instance.properties[curKey] instanceof type)) {
        instance.properties[curKey] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
/**
 * Returns object array
 * @param {ClassObject} instance
 * @param {string} curKey
 * @param {Object[]} defaultValue
 * @param type
 * @param {boolean} isSetter
 * @returns {Object[]}
 */
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue ? defaultValue.length : 0;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i], instance);
        }
        if (isSetter) {
            var inst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createInstance"])(curType, [instance, curKey, defaultValue[i], false]));
        }
    }
    return result;
}
/**
 * Returns the properties of the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
/**
 * Set the properties for the object
 * @param {Object} defaultValue
 * @param {string} curKey
 */
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
/**
 * Returns complex objects
 */
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
/**
 * Sets complex objects
 */
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (this.properties.hasOwnProperty(curKey)) {
            return this.properties[curKey];
        }
        else {
            return getObject(this, curKey, defaultValue, curType);
        }
    };
}
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue, this);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        var _this = this;
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        var ignore = ((this.controlParent !== undefined && this.controlParent.ignoreCollectionWatch)
            || this.ignoreCollectionWatch);
        if (!this.properties[curKey].hasOwnProperty('push') && !ignore) {
            ['push', 'pop'].forEach(function (extendFunc) {
                var descriptor = {
                    value: complexArrayDefinedCallback(extendFunc, curKey, type, _this.properties[curKey]).bind(_this),
                    configurable: true
                };
                Object.defineProperty(_this.properties[curKey], extendFunc, descriptor);
            });
        }
        if (!this.properties[curKey].hasOwnProperty('isComplexArray')) {
            Object.defineProperty(this.properties[curKey], 'isComplexArray', { value: true });
        }
        return this.properties[curKey];
    };
}
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        this.isComplexArraySetter = true;
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.isComplexArraySetter = false;
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function complexArrayDefinedCallback(dFunc, curKey, type, prop) {
    /* tslint:disable no-function-expression */
    return function () {
        var newValue = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newValue[_i] = arguments[_i];
        }
        var keyString = this.propName ? this.getParentKey() + '.' + curKey + '-' : curKey + '-';
        switch (dFunc) {
            case 'push':
                for (var i = 0; i < newValue.length; i++) {
                    Array.prototype[dFunc].apply(prop, [newValue[i]]);
                    var model_1 = getArrayModel(keyString + (prop.length - 1), newValue[i], !this.controlParent, dFunc);
                    this.serverDataBind(model_1, newValue[i], false, dFunc);
                }
                break;
            case 'pop':
                Array.prototype[dFunc].apply(prop);
                var model = getArrayModel(keyString + prop.length, null, !this.controlParent, dFunc);
                this.serverDataBind(model, { ejsAction: 'pop' }, false, dFunc);
                break;
        }
        return prop;
    };
    /* tslint:enable no-function-expression */
}
function getArrayModel(keyString, value, isControlParent, arrayFunction) {
    var modelObject = keyString;
    if (isControlParent) {
        modelObject = {};
        modelObject[keyString] = value;
        if (value && typeof value === 'object') {
            var action = 'ejsAction';
            modelObject[keyString][action] = arrayFunction;
        }
    }
    return modelObject;
}
/**
 * Method used to create property. General syntax below.
 * @param  {T} defaultValue? - Specifies the default value of property.
 * ```
 * @Property('TypeScript')
 * propertyName: Type;
 * ```
 * @private
 */
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
/**
 * Method used to create complex property. General syntax below.
 * @param  {T} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Complex<Type>({},Type)
 * propertyName: Type;
 * ```
 * @private
 */
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
/**
 * Method used to create complex Factory property. General syntax below.
 * @param  {Function} defaultType - Specifies the default value of property.
 * @param  {Function} type - Specifies the class factory type of complex object.
 * ```
 * @ComplexFactory(defaultType, factoryFunction)
 * propertyName: Type1 | Type2;
 * ```
 * @private
 */
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
/**
 * Method used to create complex array property. General syntax below.
 * @param  {T[]} defaultValue - Specifies the default value of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
/**
 * Method used to create complex factory array property. General syntax below.
 * @param  {T[]} defaultType - Specifies the default type of property.
 * @param  {Function} type - Specifies the class type of complex object.
 * ```
 * @Collection([], Type);
 * propertyName: Type;
 * ```
 * @private
 */
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        //new property creation
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
/**
 * Method used to create event property. General syntax below.
 * @param  {Function} defaultValue? - Specifies the default value of property.
 * @param  {boolean} isComplex? - Specifies the whether it is complex object.
 * ```
 * @Event(()=>{return true;})
 * ```
 * @private
 */
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
/**
 * NotifyPropertyChanges is triggers the call back when the property has been changed.
 *
 * ```
 *  @NotifyPropertyChanges
 * class DemoClass implements INotifyPropertyChanged {
 *
 *     @Property()
 *     property1: string;
 *
 *     dataBind: () => void;
 *
 *     constructor() { }
 *
 *     onPropertyChanged(newProp: any, oldProp: any) {
 *         // Called when property changed
 *     }
 * }
 * ```
 * @private
 */
function NotifyPropertyChanges(classConstructor) {
    /** Need to code */
}
/**
 * Method  used to create the builderObject for the target component.
 * @private
 */
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    /* tslint:disable no-any */
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
    /* tslint:enable no-any */
}
/**
 * Returns an object containing the builder properties
 * @param {Function} component
 * @private
 */
function getBuilderProperties(component) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        Object(_util__WEBPACK_IMPORTED_MODULE_0__["merge"])(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
/**
 * Method used to create builder for the components
 * @param {any} component -specifies the target component for which builder to be created.
 * @private
 */
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
/**
 * Returns parent options for the object
 * @param {Object} context
 * @param {string} prefix
 * @private
 */
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])('parentObj', context), prefix);
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/observer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/observer.js ***!
  \***********************************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");

var Observer = /** @class */ (function () {
    function Observer(context) {
        this.ranArray = [];
        this.boundedEvents = {};
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(context)) {
            return;
        }
        this.context = context;
    }
    ;
    /**
     * To attach handler for given property in current context.
     * @param {string} property - specifies the name of the event.
     * @param {Function} handler - Specifies the handler function to be called while event notified.
     * @param {Object} context - Specifies the context binded to the handler.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.on = function (property, handler, context, id) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(id)) {
            if (this.ranArray.indexOf(id) === -1) {
                this.ranArray.push(id);
                this.boundedEvents[property].push({ handler: handler, context: cntxt, id: id });
            }
        }
        else if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    /**
     * To remove handlers from a event attached using on() function.
     * @param {string} eventName - specifies the name of the event.
     * @param {Function} handler - Optional argument specifies the handler function to be called while event notified.
     * @param {string} id - specifies the random generated id.
     * @return {void}
     */
    Observer.prototype.off = function (property, handler, id) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (id) {
                    if (curObject[i].id === id) {
                        curObject.splice(i, 1);
                        var indexLocation = this.ranArray.indexOf(id);
                        if (indexLocation !== -1) {
                            this.ranArray.splice(indexLocation, 1);
                        }
                        break;
                    }
                }
                else if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    /**
     * To notify the handlers in the specified event.
     * @param {string} property - Specifies the event to be notify.
     * @param {Object} args - Additional parameters to pass while calling the handler.
     * @param {Function} successHandler - this function will invoke after event successfully triggered
     * @param {Function} errorHandler - this function will invoke after event if it was failure to call.
     * @return {void}
     */
    Observer.prototype.notify = function (property, argument, successHandler, errorHandler) {
        if (this.notExist(property)) {
            if (successHandler) {
                successHandler.call(this, argument);
            }
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var blazor = 'Blazor';
        var curObject = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getValue"])(property, this.boundedEvents).slice(0);
        if (window[blazor]) {
            return this.blazorCallback(curObject, argument, successHandler, errorHandler, 0);
        }
        else {
            for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
                var cur = curObject_1[_i];
                cur.handler.call(cur.context, argument);
            }
            if (successHandler) {
                successHandler.call(this, argument);
            }
        }
    };
    Observer.prototype.blazorCallback = function (objs, argument, successHandler, errorHandler, index) {
        var _this = this;
        var isTrigger = index === objs.length - 1;
        if (index < objs.length) {
            var obj_1 = objs[index];
            var promise = obj_1.handler.call(obj_1.context, argument);
            if (promise && typeof promise.then === 'function') {
                if (!successHandler) {
                    return promise;
                }
                promise.then(function (data) {
                    data = typeof data === 'string' && _this.isJson(data) ? JSON.parse(data) : data;
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(argument, argument, data, true);
                    if (successHandler && isTrigger) {
                        successHandler.call(obj_1.context, argument);
                    }
                    else {
                        return _this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
                    }
                }).catch(function (data) {
                    if (errorHandler) {
                        errorHandler.call(obj_1.context, typeof data === 'string' && _this.isJson(data) ? JSON.parse(data) : data);
                    }
                });
            }
            else if (successHandler && isTrigger) {
                successHandler.call(obj_1.context, argument);
            }
            else {
                return this.blazorCallback(objs, argument, successHandler, errorHandler, index + 1);
            }
        }
    };
    Observer.prototype.isJson = function (value) {
        try {
            JSON.parse(value);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    /**
     * To destroy handlers in the event
     */
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    /**
     * Returns if the property exists.
     */
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false || this.boundedEvents[prop].length <= 0;
    };
    /**
     * Returns if the handler is present.
     */
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/sanitize-helper.js":
/*!******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/sanitize-helper.js ***!
  \******************************************************************/
/*! exports provided: SanitizeHtmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlHelper", function() { return SanitizeHtmlHelper; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/**
 * SanitizeHtmlHelper for sanitize the value.
 */

var removeTags = [
    'script',
    'style',
    'iframe[src]',
    'link[href*="javascript:"]',
    'object[type="text/x-scriptlet"]',
    'object[data^="data:text/html;base64"]',
    'img[src^="data:text/html;base64"]',
    '[src^="javascript:"]',
    '[dynsrc^="javascript:"]',
    '[lowsrc^="javascript:"]',
    '[type^="application/x-shockwave-flash"]'
];
var removeAttrs = [
    { attribute: 'href', selector: '[href*="javascript:"]' },
    { attribute: 'background', selector: '[background^="javascript:"]' },
    { attribute: 'style', selector: '[style*="javascript:"]' },
    { attribute: 'style', selector: '[style*="expression("]' },
    { attribute: 'href', selector: 'a[href^="data:text/html;base64"]' }
];
var jsEvents = ['onchange',
    'onclick',
    'onmouseover',
    'onmouseout',
    'onkeydown',
    'onload',
    'onerror',
    'onblur',
    'onfocus',
    'onbeforeload',
    'onbeforeunload',
    'onkeyup',
    'onsubmit',
    'onafterprint',
    'onbeforeonload',
    'onbeforeprint',
    'onblur',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'oncontextmenu',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onerror',
    'onfocus',
    'onformchange',
    'onforminput',
    'onhaschange',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmessage',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onoffline',
    'onoine',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpause',
    'onplay',
    'onplaying',
    'onpopstate',
    'onprogress',
    'onratechange',
    'onreadystatechange',
    'onredo',
    'onresize',
    'onscroll',
    'onseeked',
    'onseeking',
    'onselect',
    'onstalled',
    'onstorage',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'onundo',
    'onunload',
    'onvolumechange',
    'onwaiting',
    'onmouseenter',
    'onmouseleave',
    'onmousewheel',
    'onstart',
    'onpropertychange'
];
var SanitizeHtmlHelper = /** @class */ (function () {
    function SanitizeHtmlHelper() {
    }
    SanitizeHtmlHelper.beforeSanitize = function () {
        return {
            selectors: {
                tags: removeTags,
                attributes: removeAttrs
            }
        };
    };
    ;
    SanitizeHtmlHelper.sanitize = function (value) {
        var item = this.beforeSanitize();
        var output = this.serializeValue(item, value);
        return output;
    };
    SanitizeHtmlHelper.serializeValue = function (item, value) {
        this.removeAttrs = item.selectors.attributes;
        this.removeTags = item.selectors.tags;
        this.wrapElement = document.createElement('div');
        this.wrapElement.innerHTML = value;
        this.removeXssTags();
        this.removeJsEvents();
        this.removeXssAttrs();
        return this.wrapElement.innerHTML;
    };
    SanitizeHtmlHelper.removeXssTags = function () {
        var elements = this.wrapElement.querySelectorAll(this.removeTags.join(','));
        if (elements.length > 0) {
            elements.forEach(function (element) {
                Object(_dom__WEBPACK_IMPORTED_MODULE_0__["detach"])(element);
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeJsEvents = function () {
        var elements = this.wrapElement.querySelectorAll('[' + jsEvents.join('],[') + ']');
        if (elements.length > 0) {
            elements.forEach(function (element) {
                jsEvents.forEach(function (attr) {
                    if (element.hasAttribute(attr)) {
                        element.removeAttribute(attr);
                    }
                });
            });
        }
        else {
            return;
        }
    };
    SanitizeHtmlHelper.removeXssAttrs = function () {
        var _this = this;
        this.removeAttrs.forEach(function (item, index) {
            var elements = _this.wrapElement.querySelectorAll(item.selector);
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.removeAttribute(item.attribute);
                });
            }
        });
    };
    return SanitizeHtmlHelper;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/template-engine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/template-engine.js ***!
  \******************************************************************/
/*! exports provided: blazorTemplates, getRandomId, compile, updateBlazorTemplate, resetBlazorTemplate, setTemplateEngine, getTemplateEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blazorTemplates", function() { return blazorTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return getRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlazorTemplate", function() { return updateBlazorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBlazorTemplate", function() { return resetBlazorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return setTemplateEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return getTemplateEngine; });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./node_modules/@syncfusion/ej2-base/src/template.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./node_modules/@syncfusion/ej2-base/src/dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/**
 * Template Engine Bridge
 */



var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
var HAS_SVG = /^[\n\r.]+\<svg|^\<path|^\<g/;
var blazorTemplates = {};
function getRandomId() {
    return '-' + Math.random().toString(36).substr(2, 5);
}
/**
 * Compile the template string into template function.
 * @param  {string} templateString - The template string which is going to convert.
 * @param  {Object} helper? - Helper functions as an object.
 * @private
 */
//tslint:disable-next-line
function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    //tslint:disable-next-line
    return function (data, component, propName, templateId, isStringTemplate, index) {
        var result = compiler(data, component, propName);
        var blazor = 'Blazor';
        var blazorTemplateId = 'BlazorTemplateId';
        if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])() && !isStringTemplate) {
            var randomId = getRandomId();
            var blazorId = templateId + randomId;
            if (!blazorTemplates[templateId]) {
                blazorTemplates[templateId] = [];
            }
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                var keys = Object.keys(blazorTemplates[templateId][index]);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (key !== blazorTemplateId && data[key]) {
                        blazorTemplates[templateId][index][key] = data[key];
                    }
                    if (key === blazorTemplateId) {
                        blazorId = blazorTemplates[templateId][index][key];
                    }
                }
            }
            else {
                data[blazorTemplateId] = blazorId;
                blazorTemplates[templateId].push(data);
            }
            // tslint:disable-next-line:no-any
            return propName === 'rowTemplate' ? [Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('tr', { id: blazorId, className: 'e-blazor-template' })] :
                // tslint:disable-next-line:no-any
                [Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', { id: blazorId, className: 'e-blazor-template' })];
        }
        if (typeof result === 'string') {
            if (HAS_SVG.test(result)) {
                var ele = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])('svg', { innerHTML: result });
                return ele.childNodes;
            }
            else {
                var ele = Object(_dom__WEBPACK_IMPORTED_MODULE_1__["createElement"])((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
                return ele.childNodes;
            }
        }
        else {
            return result;
        }
    };
}
function updateBlazorTemplate(templateId, templateName, comp, isEmpty, callBack) {
    var blazor = 'Blazor';
    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isBlazor"])()) {
        var ejsIntrop = 'ejsInterop';
        window[ejsIntrop].updateTemplate(templateName, blazorTemplates[templateId], templateId, comp, callBack);
        if (isEmpty !== false) {
            blazorTemplates[templateId] = [];
        }
    }
}
function resetBlazorTemplate(templateId, templateName, index) {
    var templateDiv = document.getElementById(templateId);
    if (templateDiv) {
        // tslint:disable-next-line:no-any
        var innerTemplates = templateDiv.getElementsByClassName('blazor-inner-template');
        for (var i = 0; i < innerTemplates.length; i++) {
            var tempId = ' ';
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                tempId = innerTemplates[index].getAttribute('data-templateId');
            }
            else {
                tempId = innerTemplates[i].getAttribute('data-templateId');
            }
            var tempElement = document.getElementById(tempId);
            if (tempElement) {
                var length_1 = tempElement.childNodes.length;
                for (var j = 0; j < length_1; j++) {
                    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(index)) {
                        innerTemplates[index].appendChild(tempElement.childNodes[0]);
                        i = innerTemplates.length;
                    }
                    else {
                        innerTemplates[i].appendChild(tempElement.childNodes[0]);
                    }
                }
            }
        }
    }
}
/**
 * Set your custom template engine for template rendering.
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @private
 */
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
/**
 * Get current template engine for template rendering
 * @param  {ITemplateEngine} classObj - Class object for custom template.
 * @private
 */
function getTemplateEngine() {
    return engineObj.compile;
}
//Default Engine Class
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return Object(_template__WEBPACK_IMPORTED_MODULE_0__["compile"])(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/template.js":
/*!***********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/template.js ***!
  \***********************************************************/
/*! exports provided: expression, compile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expression", function() { return expression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/**
 * Template Engine
 */
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSEIF_STMT = new RegExp('else if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(\/if|\/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var WORDIF = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
// let cachedTemplate: Object = {};
var ARR_OBJ = /^\..*/gm;
var SINGLE_SLASH = /\\/gi;
var DOUBLE_SLASH = /\\\\/gi;
var WORDFUNC = new RegExp('[\\w"\'@#$.\\s+]+', 'g');
var WINDOWFUNC = /\window\./gm;
/**
 * The function to set regular expression for template expression string.
 * @param  {RegExp} value - Value expression.
 * @private
 */
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
// /**
//  * To render the template string from the given data.
//  * @param  {string} template - String Template.
//  * @param  {Object[]|JSON} data - DataSource for the template.
//  * @param  {Object} helper? - custom helper object.
//  */
// export function template(template: string, data: JSON, helper?: Object): string {
//     let hash: string = hashCode(template);
//     let tmpl: Function;
//     if (!cachedTemplate[hash]) {
//         tmpl = cachedTemplate[hash] = compile(template, helper);
//     } else {
//         tmpl = cachedTemplate[hash];
//     }
//     return tmpl(data);
// }
/**
 * Compile the template string into template function.
 * @param  {string} template - The template string which is going to convert.
 * @param  {Object} helper? - Helper functions as an object.
 * @private
 */
function compile(template, helper) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper);
    var fnCode = "var str=\"" + evalExpResult + "\"; return str;";
    // tslint:disable-next-line:no-function-constructor-with-string-args
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
// function used to evaluate the function expression
function evalExp(str, nameSpace, helper) {
    var varCOunt = 0;
    /**
     * Variable containing Local Keys
     */
    var localKeys = [];
    var isClass = str.match(/class="([^\"]+|)\s{2}/g);
    var singleSpace = '';
    if (isClass) {
        isClass.forEach(function (value) {
            singleSpace = value.replace(/\s\s+/g, ' ');
            str = str.replace(value, singleSpace);
        });
    }
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var SPECIAL_CHAR = /\@|\#|\$/gm;
        var matches = cnt.match(CALL_FUNCTION);
        // matches to detect any function calls
        if (matches) {
            var rlStr = matches[1];
            if (ELSEIF_STMT.test(cnt)) {
                //handling else-if condition
                cnt = '";} ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (IF_STMT.test(cnt)) {
                //handling if condition
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORDIF, function (strs) {
                    return HandleSpecialCharArrObj(strs, nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                //handling for condition
                var rlStr_1 = matches[1].split(' of ');
                // replace for each into actual JavaScript
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    varCOunt = varCOunt + 1;
                    // tslint:disable-next-line
                    return 'var i' + varCOunt + '=0; i' + varCOunt + ' < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys) + '.length; i' + varCOunt + '++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys)
                    + '[i' + varCOunt + ']; \n var ' + rlStr_1[0] + 'Index=i' + varCOunt + '; \n str = str + "';
            }
            else {
                //helper function handling
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                var ftArray = matches[1].split(',');
                if (matches[1].length !== 0 && !(/data/).test(ftArray[0]) && !(/window./).test(ftArray[0])) {
                    matches[1] = (fNameSpace === 'global' ? nameSpace + '.' + matches[1] : matches[1]);
                }
                var splRegexp = /\@|\$|\#/gm;
                var arrObj = /\]\./gm;
                if (WINDOWFUNC.test(cnt) && arrObj.test(cnt) || splRegexp.test(cnt)) {
                    var splArrRegexp = /\@|\$|\#|\]\./gm;
                    if (splArrRegexp.test(cnt)) {
                        // tslint:disable-next-line
                        cnt = '"+ ' + (fNameSpace === 'global' ? '' : fNameSpace) + cnt.replace(matches[1], rlStr.replace(WORDFUNC, function (strs) {
                            return HandleSpecialCharArrObj(strs, nameSpace, localKeys);
                        })) + '+ "';
                    }
                }
                else {
                    cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                        cnt.replace(rlStr, addNameSpace(matches[1].replace(/,( |)data.|,/gi, ',' + nameSpace + '.').replace(/,( |)data.window/gi, ',window'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys)) +
                        '+"';
                }
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            // handling else condition
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            // close condition 
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else if (SPECIAL_CHAR.test(cnt)) {
            // template string with double slash with special character
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
            }
            cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
        }
        else {
            // template string with double slash
            if (cnt.match(SINGLE_SLASH)) {
                cnt = SlashReplace(cnt);
                cnt = '"+' + NameSpaceForspecialChar(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '"]+"';
            }
            else {
                // evaluate normal expression
                cnt = '"+' + addNameSpace(cnt.replace(/\,/gi, '+' + nameSpace + '.'), (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '+"';
            }
        }
        return cnt;
    });
}
function addNameSpace(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '.' + str : str);
}
function NameSpaceArrObj(str, addNS, nameSpace, ignoreList) {
    var arrObjReg = /^\..*/gm;
    return ((addNS && !(NOT_NUMBER.test(str)) &&
        ignoreList.indexOf(str.split('.')[0]) === -1 && !(arrObjReg.test(str))) ? nameSpace + '.' + str : str);
}
// // Create hashCode for template string to storeCached function
// function hashCode(str: string): string {
//     return str.split('').reduce((a: number, b: string) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0).toString();
// }
function NameSpaceForspecialChar(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '["' + str : str);
}
// tslint:disable-next-line
function SlashReplace(tempStr) {
    // tslint:disable-next-line
    var double = "\\\\";
    if (tempStr.match(DOUBLE_SLASH)) {
        tempStr = tempStr;
    }
    else {
        tempStr = tempStr.replace(SINGLE_SLASH, double);
    }
    return tempStr;
}
function HandleSpecialCharArrObj(str, nameSpaceNew, keys) {
    str = str.trim();
    var windowFunc = /\window\./gm;
    if (!windowFunc.test(str)) {
        var quotes = /'|"/gm;
        var splRegexp = /\@|\$|\#/gm;
        if (splRegexp.test(str)) {
            str = NameSpaceForspecialChar(str, (keys.indexOf(str) === -1), nameSpaceNew, keys) + '"]';
        }
        if (ARR_OBJ.test(str)) {
            return NameSpaceArrObj(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
        else {
            return addNameSpace(str, !(quotes.test(str)) && (keys.indexOf(str) === -1), nameSpaceNew, keys);
        }
    }
    else {
        return str;
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/touch.js":
/*!********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/touch.js ***!
  \********************************************************/
/*! exports provided: SwipeSettings, Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return SwipeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@syncfusion/ej2-base/src/util.js");
/* harmony import */ var _notify_property_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-property-change */ "./node_modules/@syncfusion/ej2-base/src/notify-property-change.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./node_modules/@syncfusion/ej2-base/src/browser.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./node_modules/@syncfusion/ej2-base/src/base.js");
/* harmony import */ var _child_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-property */ "./node_modules/@syncfusion/ej2-base/src/child-property.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@syncfusion/ej2-base/src/event-handler.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * SwipeSettings is a framework module that provides support to handle swipe event like swipe up, swipe right, etc..,
 */
var SwipeSettings = /** @class */ (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(50)
    ], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
    return SwipeSettings;
}(_child_property__WEBPACK_IMPORTED_MODULE_4__["ChildProperty"]));

var swipeRegex = /(Up|Down)/;
/**
 * Touch class provides support to handle the touch event like tap, double tap, tap hold, etc..,
 * ```typescript
 *    let node: HTMLElement;
 * let touchObj: Touch = new Touch({
 *    element: node,
 *    tap: function (e) {
 *        // tap handler function code
 *    }
 *    tapHold: function (e) {
 *        // tap hold handler function code
 *    }
 *    scroll: function (e) {
 *        // scroll handler function code
 *    }
 *    swipe: function (e) {
 *        // swipe handler function code
 *    }
 * });
 * ```
 */
var Touch = /** @class */ (function (_super) {
    __extends(Touch, _super);
    /* End-Properties */
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.touchAction = true;
        _this.tapCount = 0;
        _this.startEvent = function (evt) {
            if (_this.touchAction === true) {
                var point = (evt.changedTouches ? evt.changedTouches[0] : evt);
                if (evt.changedTouches !== undefined) {
                    _this.touchAction = false;
                }
                _this.isTouchMoved = false;
                _this.movedDirection = '';
                _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
                _this.startEventData = point;
                _this.hScrollLocked = _this.vScrollLocked = false;
                _this.tStampStart = Date.now();
                _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, _this.moveEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, _this.endEvent, _this);
                _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent, _this);
            }
        };
        _this.moveEvent = function (evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.cancelEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            _this.tapCount = 0;
            _this.swipeFn(evt);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent);
        };
        _this.endEvent = function (evt) {
            _this.swipeFn(evt);
            if (!_this.isTouchMoved) {
                if (typeof _this.tap === 'function') {
                    _this.trigger('tap', { originalEvent: evt, tapCount: ++_this.tapCount });
                    _this.timeOutTap = setTimeout(function () {
                        _this.tapCount = 0;
                    }, _this.tapThreshold);
                }
            }
            _this.modeclear();
        };
        _this.swipeFn = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            clearTimeout(_this.timeOutTap);
            var point = evt;
            if (evt.changedTouches) {
                point = evt.changedTouches[0];
            }
            var diffX = point.clientX - _this.startPoint.clientX;
            var diffY = point.clientY - _this.startPoint.clientY;
            diffX = Math.floor(diffX < 0 ? -1 * diffX : diffX);
            diffY = Math.floor(diffY < 0 ? -1 * diffY : diffX);
            _this.isTouchMoved = diffX > 1 || diffY > 1;
            _this.endPoint = point;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (_this.isTouchMoved) {
                var eSwipeArgs = void 0;
                var tDistance = _this.swipeSettings.swipeThresholdDistance;
                eSwipeArgs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["extend"])(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.modeclear();
        };
        _this.modeclear = function () {
            _this.modeClear = setTimeout(function () {
                _this.touchAction = true;
            }, (typeof _this.tap !== 'function' ? 0 : 20));
            _this.lastTapTime = new Date().getTime();
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, _this.moveEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, _this.endEvent);
            _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(_this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, _this.cancelEvent);
        };
        _this.bind();
        return _this;
    }
    // triggers when property changed 
    /**
     * @private
     * @param newProp
     * @param oldProp
     */
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
        //No Code to handle
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (_browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    /**
     * To destroy the touch instance.
     * @return {void}
     */
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    // Need to changes the event binding once we updated the event handler.
    Touch.prototype.wireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].add(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchStartEvent, this.startEvent);
    };
    /**
     * Returns module name as touch
     * @returns {string}
     * @private
     */
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    /**
     * Returns if the HTML element is Scrollable.
     * @param {HTMLElement} element - HTML Element to check if Scrollable.
     * @returns {boolean}
     */
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        this.tapCount = 0;
        this.touchAction = true;
        var eTapArgs;
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchMoveEvent, this.moveEvent);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
        _event_handler__WEBPACK_IMPORTED_MODULE_5__["EventHandler"].remove(this.element, _browser__WEBPACK_IMPORTED_MODULE_2__["Browser"].touchCancelEvent, this.cancelEvent);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    // tslint:disable-next-line:no-any
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "tap", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "tapHold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "swipe", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Event"])()
    ], Touch.prototype, "scroll", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(350)
    ], Touch.prototype, "tapThreshold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Property"])(750)
    ], Touch.prototype, "tapHoldThreshold", void 0);
    __decorate([
        Object(_notify_property_change__WEBPACK_IMPORTED_MODULE_1__["Complex"])({}, SwipeSettings)
    ], Touch.prototype, "swipeSettings", void 0);
    Touch = __decorate([
        _notify_property_change__WEBPACK_IMPORTED_MODULE_1__["NotifyPropertyChanges"]
    ], Touch);
    return Touch;
}(_base__WEBPACK_IMPORTED_MODULE_3__["Base"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-base/src/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-base/src/util.js ***!
  \*******************************************************/
/*! exports provided: disableBlazorMode, createInstance, setImmediate, getValue, setValue, deleteObject, isObject, getEnumValue, merge, extend, isNullOrUndefined, isUndefined, getUniqueID, debounce, queryParams, isObjectArray, compareElementParent, throwError, print, formatUnit, enableBlazorMode, isBlazor, getElement, getInstance, addInstance, uniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBlazorMode", function() { return disableBlazorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return deleteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return getEnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return getUniqueID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return queryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return isObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return compareElementParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return formatUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBlazorMode", function() { return enableBlazorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlazor", function() { return isBlazor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return addInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueID", function() { return uniqueID; });
var instances = 'ej2_instances';
var uid = 0;
var isBlazorPlatform = false;
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function disableBlazorMode() {
    isBlazorPlatform = false;
}
/**
 * Create Instance from constructor function with desired parameters.
 * @param {Function} classFunction - Class function to which need to create instance
 * @param {any[]} params - Parameters need to passed while creating instance
 * @return {any}
 * @private
 */
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
/**
 * To run a callback function immediately after the browser has completed other operations.
 * @param {Function} handler - callback function to be triggered.
 * @return {Function}
 * @private
 */
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
        handler = messageHandler = secret = undefined;
    };
}
/**
 * To get nameSpace value from the desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} obj - Object to get the inner object value.
 * @return {any}
 * @private
 */
function getValue(nameSpace, obj) {
    /* tslint:disable no-any */
    var value = obj;
    var splits = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
/**
 * To set value for the nameSpace in desired object.
 * @param {string} nameSpace - String value to the get the inner object
 * @param {any} value - Value that you need to set.
 * @param {any} obj - Object to get the inner object value.
 * @return {void}
 * @private
 */
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
/**
 * Delete an item from Object
 * @param {any} obj - Object in which we need to delete an item.
 * @param {string} params - String value to the get the inner object
 * @return {void}
 * @private
 */
function deleteObject(obj, key) {
    delete obj[key];
}
/**
 * Check weather the given argument is only object.
 * @param {any} obj - Object which is need to check.
 * @return {boolean}
 * @private
 */
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
/**
 * To get enum value by giving the string.
 * @param {any} enumObject - Enum object.
 * @param {string} enumValue - Enum value to be searched
 * @return {any}
 * @private
 */
function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
/**
 * Merge the source object into destination object.
 * @param {any} source - source object which is going to merge with destination object
 * @param {any} destination - object need to be merged
 * @return {void}
 * @private
 */
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        var deepmerge = 'deepMerge';
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!isNullOrUndefined(temrObj[deepmerge]) && (temrObj[deepmerge].indexOf(key) !== -1) &&
                (isObject(tempProp[key]) || Array.isArray(tempProp[key]))) {
                extend(temrObj[key], temrObj[key], tempProp[key], true);
            }
            else {
                temrObj[key] = tempProp[key];
            }
        }
    }
}
/**
 * Extend the two object with newer one.
 * @param {any} copied - Resultant object after merged
 * @param {Object} first - First object need to merge
 * @param {Object} second - Second object need to merge
 * @return {Object}
 * @private
 */
function extend(copied, first, second, deep) {
    var result = copied && typeof copied === 'object' ? copied : {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            var blazorEventExtend = isBlazor() ? !(src instanceof Event) : true;
            if (deep && blazorEventExtend && (isObject(copy) || Array.isArray(copy))) {
                if (isObject(copy)) {
                    clone = src ? src : {};
                    if (Array.isArray(clone) && clone.hasOwnProperty('isComplexArray')) {
                        extend(clone, {}, copy, deep);
                    }
                    else {
                        result[key] = extend(clone, {}, copy, deep);
                    }
                }
                else {
                    clone = src ? src : [];
                    result[key] = extend([], clone, copy, deep);
                }
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * To check whether the object is null or undefined.
 * @param {Object} value - To check the object is null or undefined
 * @return {boolean}
 * @private
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * To check whether the object is undefined.
 * @param {Object} value - To check the object is undefined
 * @return {boolean}
 * @private
 */
function isUndefined(value) {
    return ('undefined' === typeof value);
}
/**
 * To return the generated unique name
 * @param {string} definedName - To concatenate the unique id to provided name
 * @return {string}
 * @private
 */
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
/**
 * It limits the rate at which a function can fire. The function will fire only once every provided second instead of as quickly.
 * @param {Function} eventFunction - Specifies the function to run when the event occurs
 * @param {number} delay - A number that specifies the milliseconds for function delay call option
 * @return {Function}
 * @private
 */
function debounce(eventFunction, delay) {
    var out;
    // tslint:disable-next-line
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
// Added since lint ignored after added '//tslint:disable-next-line' 
/* tslint:disable:no-any */
/**
 * To convert the object to string for query url
 * @param  {Object} data
 * @returns string
 * @private
 */
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
/**
 * To check whether the given array contains object.
 * @param {T[]} value- Specifies the T type array to be checked.
 * @private
 */
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
/**
 * To check whether the  child element is descendant to parent element or parent and child are same element.
 * @param{Element} - Specifies the child element to compare with parent.
 * @param{Element} - Specifies the parent element.
 * @return boolean
 * @private
 */
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
/**
 * To throw custom error message.
 * @param{string} - Specifies the error message to be thrown.
 * @private
 */
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
/**
 * This function is used to print given element
 * @param{Element} element - Specifies the print content element.
 * @param{Window} printWindow - Specifies the print window.
 * @private
 */
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('base, link, style'));
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    // tslint:disable-next-line
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
/**
 * Function to normalize the units applied to the element.
 * @param  {number|string} value
 * @return {string} result
 * @private
 */
function formatUnit(value) {
    var result = value + '';
    if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
        return result;
    }
    return result + 'px';
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function enableBlazorMode() {
    isBlazorPlatform = true;
}
/**
 * Function to check whether the platform is blazor or not.
 * @return {boolean} result
 * @private
 */
function isBlazor() {
    return isBlazorPlatform;
}
/**
 * Function to convert xPath to DOM element in blazor platform
 * @return {HTMLElement} result
 * @param {HTMLElement | object} element
 * @private
 */
function getElement(element) {
    var xPath = 'xPath';
    if (!(element instanceof Node) && isBlazor() && !isNullOrUndefined(element[xPath])) {
        return document.evaluate(element[xPath], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    return element;
}
/**
 * Function to fetch the Instances of a HTML element for the given component.
 * @param {string | HTMLElement} element
 * @param {any} component
 * @return {Object} inst
 * @private
 */
// tslint:disable-next-line
function getInstance(element, component) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
/**
 * Function to add instances for the given element.
 * @param {string | HTMLElement} element
 * @param {Object} instance
 * @return {void}
 * @private
 */
function addInstance(element, instance) {
    // tslint:disable-next-line:no-any
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
/**
 * Function to generate the unique id.
 * @return {any}
 * @private
 */
// tslint:disable-next-line:no-any
function uniqueID() {
    // tslint:disable-next-line:no-any
    if ((typeof window) === 'undefined') {
        return;
    }
    // tslint:disable-next-line:no-any
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    return intCrypto.getRandomValues(num);
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/index.js ***!
  \*******************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, buttonObserver, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@syncfusion/ej2-buttons/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["wrapperInitialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["getTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["preRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["rippleMouseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["setHiddenInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["buttonObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["RadioButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["classNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["ChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Chip"]; });

/**
 * index
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/button/button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/button/button.js ***!
  \*******************************************************************/
/*! exports provided: buttonObserver, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return buttonObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var buttonObserver = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Observer"]();
var cssClassName = {
    RTL: 'e-rtl',
    BUTTON: 'e-btn',
    PRIMARY: 'e-primary',
    ICONBTN: 'e-icon-btn'
};
/**
 * The Button is a graphical user interface element that triggers an event on its click action. It can contain a text, an image, or both.
 * ```html
 * <button id="button">Button</button>
 * ```
 * ```typescript
 * <script>
 * var btnObj = new Button();
 * btnObj.appendTo("#button");
 * </script>
 * ```
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * Constructor for creating the widget
     * @param  {ButtonModel} options?
     * @param  {string|HTMLButtonElement} element?
     */
    function Button(options, element) {
        return _super.call(this, options, element) || this;
    }
    Button.prototype.preRender = function () {
        // pre render code snippets
    };
    /**
     * Initialize the control rendering
     * @returns void
     * @private
     */
    Button.prototype.render = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (!this.disabled) {
                this.wireEvents();
            }
            buttonObserver.notify('component-rendered', { id: this.element.id, instance: this });
        }
        else {
            this.initialize();
        }
        this.removeRippleEffect = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.element, { selector: '.' + cssClassName.BUTTON });
        this.renderComplete();
    };
    Button.prototype.initialize = function () {
        if (this.cssClass) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], this.cssClass.split(' '));
        }
        if (this.isPrimary) {
            this.element.classList.add(cssClassName.PRIMARY);
        }
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() || (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.getModuleName() !== 'progress-btn')) {
            if (this.content) {
                var tempContent = (this.enableHtmlSanitizer) ? _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"].sanitize(this.content) : this.content;
                this.element.innerHTML = tempContent;
            }
            this.setIconCss();
        }
        if (this.enableRtl) {
            this.element.classList.add(cssClassName.RTL);
        }
        if (this.disabled) {
            this.controlStatus(this.disabled);
        }
        else {
            this.wireEvents();
        }
    };
    Button.prototype.controlStatus = function (disabled) {
        this.element.disabled = disabled;
    };
    Button.prototype.setIconCss = function () {
        if (this.iconCss) {
            var span = this.createElement('span', { className: 'e-btn-icon ' + this.iconCss });
            if (!this.element.textContent.trim()) {
                this.element.classList.add(cssClassName.ICONBTN);
            }
            else {
                span.classList.add('e-icon-' + this.iconPosition.toLowerCase());
                if (this.iconPosition === 'Top' || this.iconPosition === 'Bottom') {
                    this.element.classList.add('e-' + this.iconPosition.toLowerCase() + '-icon-btn');
                }
            }
            var node = this.element.childNodes[0];
            if (node && (this.iconPosition === 'Left' || this.iconPosition === 'Top')) {
                this.element.insertBefore(span, node);
            }
            else {
                this.element.appendChild(span);
            }
        }
    };
    Button.prototype.wireEvents = function () {
        if (this.isToggle) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'click', this.btnClickHandler, this);
        }
    };
    Button.prototype.unWireEvents = function () {
        if (this.isToggle) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'click', this.btnClickHandler);
        }
    };
    Button.prototype.btnClickHandler = function () {
        if (this.element.classList.contains('e-active')) {
            this.element.classList.remove('e-active');
        }
        else {
            this.element.classList.add('e-active');
        }
    };
    /**
     * Destroys the widget.
     * @returns void
     */
    Button.prototype.destroy = function () {
        if (!(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered)) {
            var span = void 0;
            var classList = [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success', 'e-info', 'e-danger',
                'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round',
                'e-top-icon-btn', 'e-bottom-icon-btn'];
            if (this.cssClass) {
                classList = classList.concat(this.cssClass.split(' '));
            }
            _super.prototype.destroy.call(this);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], classList);
            if (!this.element.getAttribute('class')) {
                this.element.removeAttribute('class');
            }
            if (this.disabled) {
                this.element.removeAttribute('disabled');
            }
            if (this.content) {
                this.element.innerHTML = this.element.innerHTML.replace(this.content, '');
            }
            span = this.element.querySelector('span.e-btn-icon');
            if (span) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
            }
        }
        this.unWireEvents();
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            this.removeRippleEffect();
        }
    };
    /**
     * Get component name.
     * @returns string
     * @private
     */
    Button.prototype.getModuleName = function () {
        return 'btn';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     * @private
     */
    Button.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Dynamically injects the required modules to the component.
     * @private
     */
    Button.Inject = function () {
        // Inject code snippets
    };
    /**
     * Called internally if any of the property value changed.
     * @param  {ButtonModel} newProp
     * @param  {ButtonModel} oldProp
     * @returns void
     * @private
     */
    Button.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'isPrimary':
                    if (newProp.isPrimary) {
                        this.element.classList.add(cssClassName.PRIMARY);
                    }
                    else {
                        this.element.classList.remove(cssClassName.PRIMARY);
                    }
                    break;
                case 'disabled':
                    this.controlStatus(newProp.disabled);
                    this.unWireEvents();
                    break;
                case 'iconCss':
                    var span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        if (newProp.iconCss) {
                            span.className = 'e-btn-icon ' + newProp.iconCss;
                            if (this.element.textContent.trim()) {
                                if (this.iconPosition === 'Left') {
                                    span.classList.add('e-icon-left');
                                }
                                else {
                                    span.classList.add('e-icon-right');
                                }
                            }
                        }
                        else {
                            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
                        }
                    }
                    else {
                        this.setIconCss();
                    }
                    break;
                case 'iconPosition':
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], ['e-top-icon-btn', 'e-bottom-icon-btn']);
                    span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
                    }
                    this.setIconCss();
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(cssClassName.RTL);
                    }
                    else {
                        this.element.classList.remove(cssClassName.RTL);
                    }
                    break;
                case 'content':
                    var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["getTextNode"])(this.element);
                    if (!node) {
                        this.element.classList.remove(cssClassName.ICONBTN);
                    }
                    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
                        if (this.enableHtmlSanitizer) {
                            newProp.content = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"].sanitize(newProp.content);
                        }
                        this.element.innerHTML = newProp.content;
                        this.setIconCss();
                    }
                    break;
                case 'isToggle':
                    if (newProp.isToggle) {
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'click', this.btnClickHandler, this);
                    }
                    else {
                        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'click', this.btnClickHandler);
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], ['e-active']);
                    }
                    break;
            }
        }
    };
    /**
     * Click the button element
     * its native method
     * @public
     */
    Button.prototype.click = function () {
        this.element.click();
    };
    /**
     * Sets the focus to Button
     * its native method
     * @public
     */
    Button.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('Left')
    ], Button.prototype, "iconPosition", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Button.prototype, "iconCss", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Button.prototype, "isPrimary", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Button.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Button.prototype, "content", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Button.prototype, "isToggle", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])()
    ], Button.prototype, "locale", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Button.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], Button.prototype, "created", void 0);
    Button = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], Button);
    return Button;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/button/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/button/index.js ***!
  \******************************************************************/
/*! exports provided: buttonObserver, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/@syncfusion/ej2-buttons/src/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["buttonObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/**
 * Button modules
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/check-box/check-box.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/check-box/check-box.js ***!
  \*************************************************************************/
/*! exports provided: CheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/common */ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CHECK = 'e-check';
var DISABLED = 'e-checkbox-disabled';
var FRAME = 'e-frame';
var INDETERMINATE = 'e-stop';
var LABEL = 'e-label';
var RIPPLE = 'e-ripple-container';
var RIPPLECHECK = 'e-ripple-check';
var RIPPLEINDETERMINATE = 'e-ripple-stop';
var RTL = 'e-rtl';
var WRAPPER = 'e-checkbox-wrapper';
var containerAttr = ['title', 'class', 'style', 'disabled', 'readonly', 'name', 'value'];
/**
 * The CheckBox is a graphical user interface element that allows you to select one or more options from the choices.
 * It contains checked, unchecked, and indeterminate states.
 * ```html
 * <input type="checkbox" id="checkbox"/>
 * <script>
 * var checkboxObj = new CheckBox({ label: "Default" });
 * checkboxObj.appendTo("#checkbox");
 * </script>
 * ```
 */
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    /**
     * Constructor for creating the widget
     * @private
     */
    function CheckBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isFocused = false;
        _this.isMouseClick = false;
        return _this;
    }
    CheckBox.prototype.changeState = function (state) {
        var ariaState;
        var rippleSpan;
        var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        }
        if (state === 'check') {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            if (rippleSpan) {
                rippleSpan.classList.remove(RIPPLEINDETERMINATE);
                rippleSpan.classList.add(RIPPLECHECK);
            }
            ariaState = 'true';
            this.element.checked = true;
        }
        else if (state === 'uncheck') {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([frameSpan], [CHECK, INDETERMINATE]);
            if (rippleSpan) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([rippleSpan], [RIPPLECHECK, RIPPLEINDETERMINATE]);
            }
            ariaState = 'false';
            this.element.checked = false;
        }
        else {
            frameSpan.classList.remove(CHECK);
            frameSpan.classList.add(INDETERMINATE);
            if (rippleSpan) {
                rippleSpan.classList.remove(RIPPLECHECK);
                rippleSpan.classList.add(RIPPLEINDETERMINATE);
            }
            ariaState = 'mixed';
            this.element.indeterminate = true;
        }
        this.getWrapper().setAttribute('aria-checked', ariaState);
    };
    CheckBox.prototype.clickHandler = function (event) {
        if (this.isMouseClick) {
            this.focusOutHandler();
            this.isMouseClick = false;
        }
        if (this.indeterminate) {
            this.changeState(this.checked ? 'check' : 'uncheck');
            this.indeterminate = false;
            this.element.indeterminate = false;
        }
        else if (this.checked) {
            this.changeState('uncheck');
            this.checked = false;
        }
        else {
            this.changeState('check');
            this.checked = true;
        }
        var changeEventArgs = { checked: this.element.checked, event: event };
        this.trigger('change', changeEventArgs);
    };
    /**
     * Destroys the widget.
     * @returns void
     */
    CheckBox.prototype.destroy = function () {
        var _this = this;
        var wrapper = this.getWrapper();
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (!this.disabled) {
                this.unWireEvents();
            }
        }
        else {
            _super.prototype.destroy.call(this);
            if (!this.disabled) {
                this.unWireEvents();
            }
            if (this.tagName === 'INPUT') {
                wrapper.parentNode.insertBefore(this.element, wrapper);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(wrapper);
                this.element.checked = false;
                if (this.indeterminate) {
                    this.element.indeterminate = false;
                }
                ['name', 'value', 'disabled'].forEach(function (key) {
                    _this.element.removeAttribute(key);
                });
            }
            else {
                ['role', 'aria-checked', 'class'].forEach(function (key) {
                    wrapper.removeAttribute(key);
                });
                wrapper.innerHTML = '';
            }
        }
    };
    CheckBox.prototype.focusHandler = function () {
        this.isFocused = true;
    };
    CheckBox.prototype.focusOutHandler = function () {
        this.getWrapper().classList.remove('e-focus');
        this.isFocused = false;
    };
    /**
     * Gets the module name.
     * @private
     */
    CheckBox.prototype.getModuleName = function () {
        return 'checkbox';
    };
    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    CheckBox.prototype.getPersistData = function () {
        return this.addOnPersist(['checked', 'indeterminate']);
    };
    CheckBox.prototype.getWrapper = function () {
        return this.element.parentElement.parentElement;
    };
    CheckBox.prototype.initialize = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.initialCheckedValue)) {
            this.initialCheckedValue = this.checked;
        }
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.changeState('check');
        }
        if (this.indeterminate) {
            this.changeState();
        }
        if (this.disabled) {
            this.setDisabled();
        }
    };
    CheckBox.prototype.initWrapper = function () {
        var wrapper = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = this.createElement('div', {
                className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
            });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var label = this.createElement('label', { attrs: { for: this.element.id } });
        var frameSpan = this.createElement('span', { className: 'e-icons ' + FRAME });
        wrapper.classList.add('e-wrapper');
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        if (this.cssClass) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], this.cssClass.split(' '));
        }
        wrapper.appendChild(label);
        label.appendChild(this.element);
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["setHiddenInput"])(this, label);
        label.appendChild(frameSpan);
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            var rippleSpan = this.createElement('span', { className: RIPPLE });
            if (this.labelPosition === 'Before') {
                label.appendChild(rippleSpan);
            }
            else {
                label.insertBefore(rippleSpan, frameSpan);
            }
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(rippleSpan, { duration: 400, isCenterRipple: true });
        }
        if (this.label) {
            this.setText(this.label);
        }
    };
    CheckBox.prototype.keyUpHandler = function () {
        if (this.isFocused) {
            this.getWrapper().classList.add('e-focus');
        }
    };
    CheckBox.prototype.labelMouseHandler = function (e) {
        this.isMouseClick = true;
        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["rippleMouseHandler"])(e, rippleSpan);
    };
    /**
     * Called internally if any of the property value changes.
     * @private
     */
    CheckBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrapper = this.getWrapper();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'checked':
                    this.indeterminate = false;
                    this.element.indeterminate = false;
                    this.changeState(newProp.checked ? 'check' : 'uncheck');
                    break;
                case 'indeterminate':
                    if (newProp.indeterminate) {
                        this.changeState();
                    }
                    else {
                        this.element.indeterminate = false;
                        this.changeState(this.checked ? 'check' : 'uncheck');
                    }
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    }
                    else {
                        this.element.disabled = false;
                        wrapper.classList.remove(DISABLED);
                        wrapper.setAttribute('aria-disabled', 'false');
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([wrapper], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        wrapper.classList.add(RTL);
                    }
                    else {
                        wrapper.classList.remove(RTL);
                    }
                    break;
                case 'label':
                    this.setText(newProp.label);
                    break;
                case 'labelPosition':
                    var label = wrapper.getElementsByClassName(LABEL)[0];
                    var labelWrap = wrapper.getElementsByTagName('label')[0];
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(label);
                    if (newProp.labelPosition === 'After') {
                        labelWrap.appendChild(label);
                    }
                    else {
                        labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
                    }
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
                case 'htmlAttributes':
                    this.updateHtmlAttributeToWrapper();
                    break;
            }
        }
    };
    /**
     * Initialize Angular, React and Unique ID support.
     * @private
     */
    CheckBox.prototype.preRender = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            return;
        }
        var element = this.element;
        this.formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.element, 'form');
        this.tagName = this.element.tagName;
        element = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["wrapperInitialize"])(this.createElement, 'EJS-CHECKBOX', 'checkbox', element, WRAPPER, 'checkbox');
        this.element = element;
        if (this.element.getAttribute('type') !== 'checkbox') {
            this.element.setAttribute('type', 'checkbox');
        }
        if (!this.element.id) {
            this.element.id = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('e-' + this.getModuleName());
        }
    };
    /**
     * Initialize the control rendering.
     * @private
     */
    CheckBox.prototype.render = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.getWrapper().getElementsByClassName(RIPPLE)[0], { duration: 400, isCenterRipple: true });
            }
        }
        else {
            this.initWrapper();
            this.initialize();
        }
        if (!this.disabled) {
            this.wireEvents();
        }
        this.updateHtmlAttributeToWrapper();
        this.renderComplete();
    };
    CheckBox.prototype.setDisabled = function () {
        var wrapper = this.getWrapper();
        this.element.disabled = true;
        wrapper.classList.add(DISABLED);
        wrapper.setAttribute('aria-disabled', 'true');
    };
    CheckBox.prototype.setText = function (text) {
        var label = this.getWrapper().getElementsByClassName(LABEL)[0];
        if (label) {
            label.textContent = text;
        }
        else {
            text = (this.enableHtmlSanitizer) ? _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"].sanitize(text) : text;
            label = this.createElement('span', { className: LABEL, innerHTML: text });
            var labelWrap = this.getWrapper().getElementsByTagName('label')[0];
            if (this.labelPosition === 'Before') {
                labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName(FRAME)[0]);
            }
            else {
                labelWrap.appendChild(label);
            }
        }
    };
    CheckBox.prototype.changeHandler = function (e) {
        e.stopPropagation();
    };
    CheckBox.prototype.formResetHandler = function () {
        this.checked = this.initialCheckedValue;
        this.element.checked = this.initialCheckedValue;
    };
    CheckBox.prototype.unWireEvents = function () {
        var wrapper = this.getWrapper();
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'click', this.clickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'keyup', this.keyUpHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focus', this.focusHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
        var label = wrapper.getElementsByTagName('label')[0];
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(label, 'mousedown', this.labelMouseHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(label, 'mouseup', this.labelMouseHandler);
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.formElement, 'reset', this.formResetHandler);
        }
        if (this.tagName === 'EJS-CHECKBOX') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'change', this.changeHandler);
        }
    };
    CheckBox.prototype.wireEvents = function () {
        var wrapper = this.getWrapper();
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'click', this.clickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'keyup', this.keyUpHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focus', this.focusHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
        var label = wrapper.getElementsByTagName('label')[0];
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(label, 'mousedown', this.labelMouseHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(label, 'mouseup', this.labelMouseHandler, this);
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.formElement, 'reset', this.formResetHandler, this);
        }
        if (this.tagName === 'EJS-CHECKBOX') {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'change', this.changeHandler, this);
        }
    };
    CheckBox.prototype.updateHtmlAttributeToWrapper = function () {
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.htmlAttributes)) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var key = _a[_i];
                if (containerAttr.indexOf(key) > -1) {
                    var wrapper = this.getWrapper();
                    if (key === 'class') {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], this.htmlAttributes[key].split(' '));
                    }
                    else if (key === 'title') {
                        wrapper.setAttribute(key, this.htmlAttributes[key]);
                    }
                    else if (key === 'style') {
                        var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
                        frameSpan.setAttribute(key, this.htmlAttributes[key]);
                    }
                    else {
                        this.element.setAttribute(key, this.htmlAttributes[key]);
                    }
                }
            }
        }
    };
    /**
     * Click the CheckBox element
     * its native method
     * @public
     */
    CheckBox.prototype.click = function () {
        this.element.click();
    };
    /**
     * Sets the focus to CheckBox
     * its native method
     * @public
     */
    CheckBox.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CheckBox.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], CheckBox.prototype, "created", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CheckBox.prototype, "checked", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], CheckBox.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CheckBox.prototype, "disabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CheckBox.prototype, "indeterminate", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], CheckBox.prototype, "label", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('After')
    ], CheckBox.prototype, "labelPosition", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], CheckBox.prototype, "name", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], CheckBox.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], CheckBox.prototype, "enableHtmlSanitizer", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])({})
    ], CheckBox.prototype, "htmlAttributes", void 0);
    CheckBox = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], CheckBox);
    return CheckBox;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/check-box/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/check-box/index.js ***!
  \*********************************************************************/
/*! exports provided: CheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "./node_modules/@syncfusion/ej2-buttons/src/check-box/check-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _check_box__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/**
 * CheckBox modules
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/chips/chip-list.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/chips/chip-list.js ***!
  \*********************************************************************/
/*! exports provided: classNames, ChipList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return ChipList; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var classNames = {
    chipSet: 'e-chip-set',
    chip: 'e-chip',
    avatar: 'e-chip-avatar',
    text: 'e-chip-text',
    icon: 'e-chip-icon',
    delete: 'e-chip-delete',
    deleteIcon: 'e-dlt-btn',
    multiSelection: 'e-multi-selection',
    singleSelection: 'e-selection',
    active: 'e-active',
    chipWrapper: 'e-chip-avatar-wrap',
    iconWrapper: 'e-chip-icon-wrap',
    focused: 'e-focused',
    disabled: 'e-disabled',
    rtl: 'e-rtl',
};
/**
 * A chip component is a small block of essential information, mostly used on contacts or filter tags.
 * ```html
 * <div id="chip"></div>
 * ```
 * ```typescript
 * <script>
 * var chipObj = new ChipList();
 * chipObj.appendTo("#chip");
 * </script>
 * ```
 */
var ChipList = /** @class */ (function (_super) {
    __extends(ChipList, _super);
    function ChipList(options, element) {
        return _super.call(this, options, element) || this;
    }
    /**
     * Initialize the event handler
     * @private
     */
    ChipList.prototype.preRender = function () {
        //prerender
    };
    /**
     * To Initialize the control rendering.
     * @returns void
     * @private
     */
    ChipList.prototype.render = function () {
        this.type = this.chips.length ? 'chipset' : (this.text || this.element.innerText ? 'chip' : 'chipset');
        if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() || !this.isServerRendered) {
            this.setAttributes();
            this.createChip();
            this.setRtl();
            this.select(this.selectedChips);
        }
        this.wireEvent(false);
        this.rippleFunctin = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.element, {
            selector: '.e-chip'
        });
        this.renderComplete();
    };
    ChipList.prototype.createChip = function () {
        this.innerText = this.element.innerText.trim();
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            var childElement = this.element.querySelectorAll('.e-chip');
            for (var i = 0; i < childElement.length; i++) {
                if (childElement[i] != null) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(childElement[i]);
                }
            }
        }
        else {
            this.element.innerHTML = '';
        }
        this.chipCreation(this.type === 'chip' ? [this.innerText ? this.innerText : this.text] : this.chips);
    };
    ChipList.prototype.setAttributes = function () {
        if (this.type === 'chip') {
            this.element.tabIndex = 0;
            this.element.setAttribute('role', 'option');
        }
        else {
            this.element.classList.add(classNames.chipSet);
            this.element.setAttribute('role', 'listbox');
            if (this.selection === 'Multiple') {
                this.element.classList.add(classNames.multiSelection);
                this.element.setAttribute('aria-multiselectable', 'true');
            }
            else if (this.selection === 'Single') {
                this.element.classList.add(classNames.singleSelection);
                this.element.setAttribute('aria-multiselectable', 'false');
            }
            else {
                this.element.setAttribute('aria-multiselectable', 'false');
            }
        }
    };
    ChipList.prototype.setRtl = function () {
        this.element.classList[this.enableRtl ? 'add' : 'remove'](classNames.rtl);
    };
    ChipList.prototype.chipCreation = function (data) {
        var chipListArray = [];
        for (var i = 0; i < data.length; i++) {
            var fieldsData = this.getFieldValues(data[i]);
            var chipArray = this.elementCreation(fieldsData);
            var className = (classNames.chip + ' ' + (fieldsData.enabled ? ' ' : classNames.disabled) + ' ' +
                (fieldsData.avatarIconCss || fieldsData.avatarText ? classNames.chipWrapper : (fieldsData.leadingIconCss ?
                    classNames.iconWrapper : ' ')) + ' ' + fieldsData.cssClass).split(' ').filter(function (css) { return css; });
            if (this.type === 'chip') {
                chipListArray = chipArray;
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], className);
                this.element.setAttribute('aria-label', fieldsData.text);
            }
            else {
                var wrapper = this.createElement('DIV', {
                    className: className.join(' '), attrs: {
                        tabIndex: '0', role: 'option',
                        'aria-label': fieldsData.text, 'aria-selected': 'false'
                    }
                });
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])(chipArray, wrapper);
                chipListArray.push(wrapper);
            }
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["append"])(chipListArray, this.element);
    };
    ChipList.prototype.getFieldValues = function (data) {
        var chipEnabled = this.enabled.toString() === 'false' ? false : true;
        var fields = {
            text: typeof data === 'object' ? (data.text ? data.text.toString() : this.text.toString()) :
                (this.type === 'chip' ? (this.innerText ? this.innerText : this.text.toString()) : data.toString()),
            cssClass: typeof data === 'object' ? (data.cssClass ? data.cssClass.toString() : this.cssClass.toString()) :
                (this.cssClass.toString()),
            leadingIconCss: typeof data === 'object' ? (data.leadingIconCss ? data.leadingIconCss.toString() :
                this.leadingIconCss.toString()) : (this.leadingIconCss.toString()),
            avatarIconCss: typeof data === 'object' ? (data.avatarIconCss ? data.avatarIconCss.toString() :
                this.avatarIconCss.toString()) : (this.avatarIconCss.toString()),
            avatarText: typeof data === 'object' ? (data.avatarText ? data.avatarText.toString() : this.avatarText.toString()) :
                (this.avatarText.toString()),
            trailingIconCss: typeof data === 'object' ? (data.trailingIconCss ? data.trailingIconCss.toString() :
                this.trailingIconCss.toString()) : (this.trailingIconCss.toString()),
            enabled: typeof data === 'object' ? (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(data.enabled) ? (data.enabled.toString() === 'false' ? false : true) :
                chipEnabled) : (chipEnabled)
        };
        return fields;
    };
    ChipList.prototype.elementCreation = function (fields) {
        var chipArray = [];
        if (fields.avatarText || fields.avatarIconCss) {
            var className = (classNames.avatar + ' ' + fields.avatarIconCss).trim();
            var chipAvatarElement = this.createElement('span', { className: className });
            chipAvatarElement.innerText = fields.avatarText;
            chipArray.push(chipAvatarElement);
        }
        else if (fields.leadingIconCss) {
            var className = (classNames.icon + ' ' + fields.leadingIconCss).trim();
            var chipIconElement = this.createElement('span', { className: className });
            chipArray.push(chipIconElement);
        }
        var chipTextElement = this.createElement('span', { className: classNames.text });
        chipTextElement.innerText = fields.text;
        chipArray.push(chipTextElement);
        if (fields.trailingIconCss || (this.type !== 'chip' && this.enableDelete)) {
            var className = (classNames.delete + ' ' +
                (fields.trailingIconCss ? fields.trailingIconCss : classNames.deleteIcon)).trim();
            var chipdeleteElement = this.createElement('span', { className: className });
            chipArray.push(chipdeleteElement);
        }
        return chipArray;
    };
    /**
     * A function that finds chip based on given input.
     * @param  {number | HTMLElement } fields - We can pass index number or element of chip.
     */
    ChipList.prototype.find = function (fields) {
        var chipData;
        var chipElement = fields instanceof HTMLElement ?
            fields : this.element.querySelectorAll('.' + classNames.chip)[fields];
        if (chipElement && this.type !== 'chip') {
            chipData = { text: undefined, index: undefined, element: undefined, data: undefined };
            chipData.index = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.chip)).indexOf(chipElement);
            chipData.text = typeof this.chips[chipData.index] === 'object' ?
                (this.chips[chipData.index].text ?
                    this.chips[chipData.index].text.toString() : '') :
                this.chips[chipData.index].toString();
            chipData.data = this.chips[chipData.index];
            chipData.element = chipElement;
        }
        return chipData;
    };
    /**
     * A function that adds chip items based on given input.
     * @param  {string[] | number[] | ChipModel[] | string | number | ChipModel} chipsData - We can pass array of string or
     *  array of number or array of chip model or string data or number data or chip model.
     */
    ChipList.prototype.add = function (chipsData) {
        var _a;
        if (this.type !== 'chip') {
            var fieldData = chipsData instanceof Array ?
                chipsData : [chipsData];
            (_a = this.chips).push.apply(_a, fieldData);
            this.chipCreation(fieldData);
        }
    };
    /**
     * A function that selects chip items based on given input.
     * @param  {number | number[] | HTMLElement | HTMLElement[]} fields - We can pass number or array of number
     *  or chip element or array of chip element.
     */
    ChipList.prototype.select = function (fields) {
        this.onSelect(fields, false);
    };
    ChipList.prototype.onSelect = function (fields, callFromProperty) {
        if (this.type !== 'chip' && this.selection !== 'None') {
            if (callFromProperty) {
                var chipElements = this.element.querySelectorAll('.' + classNames.chip);
                for (var i = 0; i < chipElements.length; i++) {
                    chipElements[i].setAttribute('aria-selected', 'false');
                    chipElements[i].classList.remove(classNames.active);
                }
            }
            var fieldData = fields instanceof Array ? fields : [fields];
            for (var i = 0; i < fieldData.length; i++) {
                var chipElement = fieldData[i] instanceof HTMLElement ? fieldData[i]
                    : this.element.querySelectorAll('.' + classNames.chip)[fieldData[i]];
                if (chipElement instanceof HTMLElement) {
                    this.selectionHandler(chipElement);
                }
            }
        }
    };
    /**
     * A function that removes chip items based on given input.
     * @param  {number | number[] | HTMLElement | HTMLElement[]} fields - We can pass number or array of number
     *  or chip element or array of chip element.
     */
    ChipList.prototype.remove = function (fields) {
        var _this = this;
        if (this.type !== 'chip') {
            var fieldData = fields instanceof Array ? fields : [fields];
            var chipElements_1 = [];
            var chipCollection_1 = this.element.querySelectorAll('.' + classNames.chip);
            fieldData.forEach(function (data) {
                var chipElement = data instanceof HTMLElement ? data
                    : chipCollection_1[data];
                if (chipElement instanceof HTMLElement) {
                    chipElements_1.push(chipElement);
                }
            });
            chipElements_1.forEach(function (element) {
                var chips = _this.element.querySelectorAll('.' + classNames.chip);
                var index = Array.prototype.slice.call(chips).indexOf(element);
                _this.deleteHandler(element, index);
            });
        }
    };
    /**
     * A function that returns selected chips data.
     */
    ChipList.prototype.getSelectedChips = function () {
        var selectedChips;
        if (this.type !== 'chip' && this.selection !== 'None') {
            var selectedItems = { texts: [], Indexes: [], data: [], elements: [] };
            var items = this.element.querySelectorAll('.' + classNames.active);
            for (var i = 0; i < items.length; i++) {
                var chip = items[i];
                selectedItems.elements.push(chip);
                var index = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.chip)).indexOf(chip);
                selectedItems.Indexes.push(index);
                selectedItems.data.push(this.chips[index]);
                var text = typeof this.chips[index] === 'object' ?
                    this.chips[index].text.toString() : this.chips[index].toString();
                selectedItems.texts.push(text);
            }
            var selectedItem = {
                text: selectedItems.texts[0], index: selectedItems.Indexes[0],
                data: selectedItems.data[0], element: selectedItems.elements[0]
            };
            selectedChips = !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(selectedItem.index) ?
                (this.selection === 'Multiple' ? selectedItems : selectedItem) : undefined;
        }
        return selectedChips;
    };
    ChipList.prototype.wireEvent = function (unWireEvent) {
        if (!unWireEvent) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'click', this.clickHandler, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'keydown', this.keyHandler, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'keyup', this.keyHandler, this);
        }
        else {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'click', this.clickHandler);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'keydown', this.keyHandler);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'keyup', this.keyHandler);
        }
    };
    ChipList.prototype.keyHandler = function (e) {
        if (e.target.classList.contains(classNames.chip)) {
            if (e.type === 'keydown') {
                if (e.keyCode === 13) {
                    this.clickHandler(e);
                }
                else if (e.keyCode === 46 && this.enableDelete) {
                    this.clickHandler(e, true);
                }
            }
            else if (e.keyCode === 9) {
                this.focusInHandler(e.target);
            }
        }
    };
    ChipList.prototype.focusInHandler = function (chipWrapper) {
        if (!chipWrapper.classList.contains(classNames.focused)) {
            chipWrapper.classList.add(classNames.focused);
        }
    };
    ChipList.prototype.focusOutHandler = function (e) {
        var chipWrapper = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(e.target, '.' + classNames.chip);
        var focusedElement = this.type === 'chip' ? (this.element.classList.contains(classNames.focused) ?
            this.element : null) : this.element.querySelector('.' + classNames.focused);
        if (chipWrapper && focusedElement) {
            focusedElement.classList.remove(classNames.focused);
        }
    };
    ChipList.prototype.clickHandler = function (e, del) {
        var _this = this;
        if (del === void 0) { del = false; }
        var chipWrapper = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(e.target, '.' + classNames.chip);
        if (chipWrapper) {
            var chipDataArgs = void 0;
            if (this.type !== 'chip') {
                chipDataArgs = this.find(chipWrapper);
            }
            else {
                var index = Array.prototype.slice.call(this.element.querySelectorAll('.' + classNames.chip)).indexOf(chipWrapper);
                chipDataArgs = {
                    text: this.innerText ? this.innerText : this.text,
                    element: chipWrapper, data: this.text, index: index
                };
            }
            chipDataArgs.event = e;
            chipDataArgs.cancel = false;
            this.trigger('beforeClick', chipDataArgs, function (observedArgs) {
                if (!observedArgs.cancel) {
                    observedArgs.element = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(observedArgs.element) : observedArgs.element;
                    _this.clickEventHandler(observedArgs.element, e, del);
                }
            });
        }
    };
    ChipList.prototype.clickEventHandler = function (chipWrapper, e, del) {
        var _this = this;
        if (this.type !== 'chip') {
            var chipData = this.find(chipWrapper);
            chipData.event = e;
            var deleteElement = e.target.classList.contains(classNames.delete) ?
                e.target : (del ? chipWrapper.querySelector('.' + classNames.delete) : undefined);
            if (deleteElement && this.enableDelete) {
                chipData.cancel = false;
                var deletedItemArgs = chipData;
                this.trigger('delete', deletedItemArgs, function (observedArgs) {
                    if (!observedArgs.cancel) {
                        observedArgs.element = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() ? Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(observedArgs.element) : observedArgs.element;
                        _this.deleteHandler(observedArgs.element, observedArgs.index);
                    }
                });
            }
            else if (this.selection !== 'None') {
                this.selectionHandler(chipWrapper);
                chipData.selected = chipWrapper.classList.contains(classNames.active);
                var selectedItemArgs = chipData;
                this.trigger('click', selectedItemArgs);
            }
            else {
                this.focusInHandler(chipWrapper);
                var clickedItemArgs = chipData;
                this.trigger('click', clickedItemArgs);
            }
        }
        else {
            this.focusInHandler(chipWrapper);
            var clickedItemArgs = {
                text: this.innerText ? this.innerText : this.text,
                element: chipWrapper, data: this.text, event: e
            };
            this.trigger('click', clickedItemArgs);
        }
    };
    ChipList.prototype.selectionHandler = function (chipWrapper) {
        if (this.selection === 'Single') {
            var activeElement = this.element.querySelector('.' + classNames.active);
            if (activeElement && activeElement !== chipWrapper) {
                activeElement.classList.remove(classNames.active);
                activeElement.setAttribute('aria-selected', 'false');
            }
            this.setProperties({ selectedChips: null }, true);
        }
        else {
            this.setProperties({ selectedChips: [] }, true);
        }
        if (chipWrapper.classList.contains(classNames.active)) {
            chipWrapper.classList.remove(classNames.active);
            chipWrapper.setAttribute('aria-selected', 'false');
        }
        else {
            chipWrapper.classList.add(classNames.active);
            chipWrapper.setAttribute('aria-selected', 'true');
        }
        this.updateSelectedChips();
    };
    ChipList.prototype.updateSelectedChips = function () {
        var chipListEle = this.element.querySelectorAll('.e-chip');
        var chipColl = [];
        var chip;
        for (var i = 0; i < chipListEle.length; i++) {
            if (this.element.querySelectorAll('.e-chip')[i].getAttribute('aria-selected') === 'true') {
                if (this.selection === 'Single' && this.element.querySelectorAll('.e-chip')[i].classList.contains('e-active')) {
                    chip = i;
                    break;
                }
                else {
                    chipColl.push(i);
                }
            }
        }
        this.setProperties({ selectedChips: this.selection === 'Single' ? chip : chipColl }, true);
    };
    ChipList.prototype.deleteHandler = function (chipWrapper, index) {
        this.chips.splice(index, 1);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(chipWrapper);
    };
    /**
     * It is used to destroy the ChipList component.
     */
    ChipList.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], [classNames.chipSet, classNames.chip, classNames.rtl,
            classNames.multiSelection, classNames.singleSelection, classNames.disabled, classNames.chipWrapper, classNames.iconWrapper,
            classNames.active, classNames.focused].concat(this.cssClass.toString().split(' ').filter(function (css) { return css; })));
        this.removeMultipleAttributes(['tabindex', 'role', 'aria-label', 'aria-multiselectable'], this.element);
        this.wireEvent(true);
        this.rippleFunctin();
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])()) {
            var chipChildElement = this.element.querySelectorAll('.e-chip');
            for (var i = 0; i < chipChildElement.length; i++) {
                if (chipChildElement[i] != null) {
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(chipChildElement[i]);
                }
            }
        }
        else {
            this.element.innerHTML = '';
            this.element.innerText = this.innerText;
        }
    };
    ChipList.prototype.removeMultipleAttributes = function (attributes, element) {
        attributes.forEach(function (attr) {
            element.removeAttribute(attr);
        });
    };
    ChipList.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    ChipList.prototype.getModuleName = function () {
        return 'chip-list';
    };
    /**
     * Called internally if any of the property value changed.
     * @returns void
     * @private
     */
    ChipList.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'chips':
                case 'text':
                case 'avatarText':
                case 'avatarIconCss':
                case 'leadingIconCss':
                case 'trailingIconCss':
                case 'selection':
                case 'enableDelete':
                case 'enabled':
                    this.isServerRendered = false;
                    this.refresh();
                    this.isServerRendered = true;
                    break;
                case 'cssClass':
                    if (this.type === 'chip') {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([this.element], oldProp.cssClass.toString().split(' ').filter(function (css) { return css; }));
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([this.element], newProp.cssClass.toString().split(' ').filter(function (css) { return css; }));
                    }
                    else {
                        this.isServerRendered = false;
                        this.refresh();
                        this.isServerRendered = true;
                    }
                    break;
                case 'selectedChips':
                    Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element.querySelectorAll('.e-active'), 'e-active');
                    this.onSelect(newProp.selectedChips, true);
                    break;
                case 'enableRtl':
                    this.setRtl();
                    break;
            }
        }
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])([])
    ], ChipList.prototype, "chips", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "text", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "avatarText", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "avatarIconCss", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "leadingIconCss", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "trailingIconCss", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], ChipList.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(true)
    ], ChipList.prototype, "enabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])([])
    ], ChipList.prototype, "selectedChips", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('None')
    ], ChipList.prototype, "selection", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], ChipList.prototype, "enableDelete", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ChipList.prototype, "created", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ChipList.prototype, "click", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ChipList.prototype, "beforeClick", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], ChipList.prototype, "delete", void 0);
    ChipList = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], ChipList);
    return ChipList;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/chips/chip.js":
/*!****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/chips/chip.js ***!
  \****************************************************************/
/*! exports provided: Chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return Chip; });
/**
 * Represents ChipList `Chip` model class.
 */
var Chip = /** @class */ (function () {
    function Chip() {
    }
    return Chip;
}());



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/chips/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/chips/index.js ***!
  \*****************************************************************/
/*! exports provided: classNames, ChipList, Chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chip_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip-list */ "./node_modules/@syncfusion/ej2-buttons/src/chips/chip-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _chip_list__WEBPACK_IMPORTED_MODULE_0__["classNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return _chip_list__WEBPACK_IMPORTED_MODULE_0__["ChipList"]; });

/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip */ "./node_modules/@syncfusion/ej2-buttons/src/chips/chip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return _chip__WEBPACK_IMPORTED_MODULE_1__["Chip"]; });

/**
 * Chip modules
 */




/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/common/common.js ***!
  \*******************************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return wrapperInitialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return getTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return preRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return createCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return rippleMouseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return setHiddenInput; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");


/**
 * Initialize wrapper element for angular.
 * @private
 */
function wrapperInitialize(createElement, tag, type, element, WRAPPER, role) {
    var input = element;
    if (element.tagName === tag) {
        var ejInstance = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getValue"])('ej2_instances', element);
        input = createElement('input', { attrs: { 'type': type } });
        var props = ['change', 'cssClass', 'label', 'labelPosition', 'id'];
        for (var index = 0, len = element.attributes.length; index < len; index++) {
            if (props.indexOf(element.attributes[index].nodeName) === -1) {
                input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            }
        }
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(element, { 'class': WRAPPER, 'role': role, 'aria-checked': 'false' });
        element.appendChild(input);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["setValue"])('ej2_instances', ejInstance, input);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["deleteObject"])(element, 'ej2_instances');
    }
    return input;
}
function getTextNode(element) {
    var node;
    var childnode = element.childNodes;
    for (var i = 0; i < childnode.length; i++) {
        node = childnode[i];
        if (node.nodeType === 3) {
            return node;
        }
    }
    return null;
}
/**
 * Destroy the button components.
 * @private
 */
function destroy(ejInst, wrapper, tagName) {
    if (tagName === 'INPUT') {
        wrapper.parentNode.insertBefore(ejInst.element, wrapper);
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(wrapper);
        ejInst.element.checked = false;
        ['name', 'value', 'disabled'].forEach(function (key) {
            ejInst.element.removeAttribute(key);
        });
    }
    else {
        ['role', 'aria-checked', 'class'].forEach(function (key) {
            wrapper.removeAttribute(key);
        });
        wrapper.innerHTML = '';
    }
}
function preRender(proxy, control, wrapper, element, moduleName) {
    element = wrapperInitialize(proxy.createElement, control, 'checkbox', element, wrapper, moduleName);
    proxy.element = element;
    if (proxy.element.getAttribute('type') !== 'checkbox') {
        proxy.element.setAttribute('type', 'checkbox');
    }
    if (!proxy.element.id) {
        proxy.element.id = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('e-' + moduleName);
    }
}
/**
 * Creates CheckBox component UI with theming and ripple support.
 * @private
 */
function createCheckBox(createElement, enableRipple, options) {
    if (enableRipple === void 0) { enableRipple = false; }
    if (options === void 0) { options = {}; }
    var wrapper = createElement('div', { className: 'e-checkbox-wrapper e-css' });
    if (options.cssClass) {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], options.cssClass.split(' '));
    }
    if (options.enableRtl) {
        wrapper.classList.add('e-rtl');
    }
    if (enableRipple) {
        var rippleSpan = createElement('span', { className: 'e-ripple-container' });
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(rippleSpan, { isCenterRipple: true, duration: 400 });
        wrapper.appendChild(rippleSpan);
    }
    var frameSpan = createElement('span', { className: 'e-frame e-icons' });
    if (options.checked) {
        frameSpan.classList.add('e-check');
    }
    wrapper.appendChild(frameSpan);
    if (options.label) {
        var labelSpan = createElement('span', { className: 'e-label', innerHTML: options.label });
        wrapper.appendChild(labelSpan);
    }
    return wrapper;
}
function rippleMouseHandler(e, rippleSpan) {
    if (rippleSpan) {
        var event_1 = document.createEvent('MouseEvents');
        event_1.initEvent(e.type, false, true);
        rippleSpan.dispatchEvent(event_1);
    }
}
/**
 * Append hidden input to given element
 * @private
 */
function setHiddenInput(proxy, wrap) {
    if (proxy.element.getAttribute('ejs-for')) {
        wrap.appendChild(proxy.createElement('input', {
            attrs: { 'name': proxy.name || proxy.element.name, 'value': 'false', 'type': 'hidden' }
        }));
    }
}


/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/common/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/common/index.js ***!
  \******************************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["wrapperInitialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["getTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["preRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["rippleMouseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["setHiddenInput"]; });

/**
 * Common modules
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/index.js ***!
  \***********************************************************/
/*! exports provided: wrapperInitialize, getTextNode, destroy, preRender, createCheckBox, rippleMouseHandler, setHiddenInput, buttonObserver, Button, CheckBox, RadioButton, Switch, classNames, ChipList, Chip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/index */ "./node_modules/@syncfusion/ej2-buttons/src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapperInitialize", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["wrapperInitialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextNode", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["getTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preRender", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["preRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCheckBox", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["createCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rippleMouseHandler", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["rippleMouseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHiddenInput", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["setHiddenInput"]; });

/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/index */ "./node_modules/@syncfusion/ej2-buttons/src/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonObserver", function() { return _button_index__WEBPACK_IMPORTED_MODULE_1__["buttonObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_index__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _check_box_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-box/index */ "./node_modules/@syncfusion/ej2-buttons/src/check-box/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _check_box_index__WEBPACK_IMPORTED_MODULE_2__["CheckBox"]; });

/* harmony import */ var _radio_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-button/index */ "./node_modules/@syncfusion/ej2-buttons/src/radio-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _radio_button_index__WEBPACK_IMPORTED_MODULE_3__["RadioButton"]; });

/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch/index */ "./node_modules/@syncfusion/ej2-buttons/src/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch_index__WEBPACK_IMPORTED_MODULE_4__["Switch"]; });

/* harmony import */ var _chips_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chips/index */ "./node_modules/@syncfusion/ej2-buttons/src/chips/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _chips_index__WEBPACK_IMPORTED_MODULE_5__["classNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipList", function() { return _chips_index__WEBPACK_IMPORTED_MODULE_5__["ChipList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return _chips_index__WEBPACK_IMPORTED_MODULE_5__["Chip"]; });

/**
 * Button all modules
 */








/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/radio-button/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/radio-button/index.js ***!
  \************************************************************************/
/*! exports provided: RadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button */ "./node_modules/@syncfusion/ej2-buttons/src/radio-button/radio-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _radio_button__WEBPACK_IMPORTED_MODULE_0__["RadioButton"]; });

/**
 * RadioButton modules
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/radio-button/radio-button.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/radio-button/radio-button.js ***!
  \*******************************************************************************/
/*! exports provided: RadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/common */ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LABEL = 'e-label';
var RIPPLE = 'e-ripple-container';
var RTL = 'e-rtl';
var WRAPPER = 'e-radio-wrapper';
/**
 * The RadioButton is a graphical user interface element that allows you to select one option from the choices.
 * It contains checked and unchecked states.
 * ```html
 * <input type="radio" id="radio"/>
 * <script>
 * var radioObj = new RadioButton({ label: "Default" });
 * radioObj.appendTo("#radio");
 * </script>
 * ```
 */
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    /**
     * Constructor for creating the widget
     * @private
     */
    function RadioButton(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isFocused = false;
        return _this;
    }
    RadioButton_1 = RadioButton;
    RadioButton.prototype.changeHandler = function (event) {
        this.checked = true;
        this.dataBind();
        var changeEventArgs = { value: this.value, event: event };
        this.trigger('change', changeEventArgs);
        if (this.tagName === 'EJS-RADIOBUTTON') {
            event.stopPropagation();
        }
    };
    RadioButton.prototype.updateChange = function (state) {
        var input;
        var instance;
        var radioGrp = this.getRadioGroup();
        for (var i = 0; i < radioGrp.length; i++) {
            input = radioGrp[i];
            if (input !== this.element) {
                instance = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getInstance"])(input, RadioButton_1);
                instance.checked = false;
                if (this.tagName === 'EJS-RADIOBUTTON') {
                    instance.angularValue = this.value;
                }
            }
        }
    };
    /**
     * Destroys the widget.
     * @returns void
     */
    RadioButton.prototype.destroy = function () {
        var _this = this;
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (!this.disabled) {
                this.unWireEvents();
            }
        }
        else {
            var radioWrap_1 = this.element.parentElement;
            _super.prototype.destroy.call(this);
            if (!this.disabled) {
                this.unWireEvents();
            }
            if (this.tagName === 'INPUT') {
                radioWrap_1.parentNode.insertBefore(this.element, radioWrap_1);
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["detach"])(radioWrap_1);
                this.element.checked = false;
                ['name', 'value', 'disabled'].forEach(function (key) {
                    _this.element.removeAttribute(key);
                });
            }
            else {
                ['role', 'aria-checked', 'class'].forEach(function (key) {
                    radioWrap_1.removeAttribute(key);
                });
                radioWrap_1.innerHTML = '';
            }
        }
    };
    RadioButton.prototype.focusHandler = function () {
        this.isFocused = true;
    };
    RadioButton.prototype.focusOutHandler = function () {
        this.getLabel().classList.remove('e-focus');
    };
    RadioButton.prototype.getModuleName = function () {
        return 'radio';
    };
    /**
     * To get the value of selected radio button in a group.
     * @method getSelectedValue
     * @return {string}
     */
    RadioButton.prototype.getSelectedValue = function () {
        var input;
        var radioGrp = this.getRadioGroup();
        for (var i = 0, len = radioGrp.length; i < len; i++) {
            input = radioGrp[i];
            if (input.checked) {
                return input.value;
            }
        }
        return '';
    };
    RadioButton.prototype.getRadioGroup = function () {
        return document.querySelectorAll('input.e-radio[name="' + this.element.getAttribute('name') + '"]');
    };
    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    RadioButton.prototype.getPersistData = function () {
        return this.addOnPersist(['checked']);
    };
    RadioButton.prototype.getLabel = function () {
        return this.element.nextElementSibling;
    };
    RadioButton.prototype.initialize = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.initialCheckedValue)) {
            this.initialCheckedValue = this.checked;
        }
        this.initWrapper();
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.element.checked = true;
        }
        if (this.disabled) {
            this.setDisabled();
        }
    };
    RadioButton.prototype.initWrapper = function () {
        var rippleSpan;
        var wrapper = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = this.createElement('div', { className: WRAPPER });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var label = this.createElement('label', { attrs: { for: this.element.id } });
        wrapper.appendChild(this.element);
        wrapper.appendChild(label);
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            rippleSpan = this.createElement('span', { className: (RIPPLE) });
            label.appendChild(rippleSpan);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(rippleSpan, {
                duration: 400,
                isCenterRipple: true
            });
        }
        wrapper.classList.add('e-wrapper');
        if (this.enableRtl) {
            label.classList.add(RTL);
        }
        if (this.cssClass) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], this.cssClass.split(' '));
        }
        if (this.label) {
            this.setText(this.label);
        }
    };
    RadioButton.prototype.keyUpHandler = function () {
        if (this.isFocused) {
            this.getLabel().classList.add('e-focus');
        }
    };
    RadioButton.prototype.labelRippleHandler = function (e) {
        var ripple = this.getLabel().getElementsByClassName(RIPPLE)[0];
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["rippleMouseHandler"])(e, ripple);
    };
    RadioButton.prototype.formResetHandler = function () {
        this.checked = this.initialCheckedValue;
        if (this.initialCheckedValue) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["attributes"])(this.element, { 'checked': 'true' });
        }
    };
    /**
     * Called internally if any of the property value changes.
     * @private
     */
    RadioButton.prototype.onPropertyChanged = function (newProp, oldProp) {
        var label = this.getLabel();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'checked':
                    if (newProp.checked) {
                        this.updateChange(newProp.checked);
                    }
                    this.element.checked = newProp.checked;
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    }
                    else {
                        this.element.disabled = false;
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([label], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([label], newProp.cssClass.split(' '));
                    }
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        label.classList.add(RTL);
                    }
                    else {
                        label.classList.remove(RTL);
                    }
                    break;
                case 'label':
                    this.setText(newProp.label);
                    break;
                case 'labelPosition':
                    if (newProp.labelPosition === 'Before') {
                        label.classList.add('e-right');
                    }
                    else {
                        label.classList.remove('e-right');
                    }
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
            }
        }
    };
    /**
     * Initialize checked Property, Angular and React and Unique ID support.
     * @private
     */
    RadioButton.prototype.preRender = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            return;
        }
        var element = this.element;
        this.formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.element, 'form');
        this.tagName = this.element.tagName;
        element = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["wrapperInitialize"])(this.createElement, 'EJS-RADIOBUTTON', 'radio', element, WRAPPER, 'radio');
        this.element = element;
        if (this.element.getAttribute('type') !== 'radio') {
            this.element.setAttribute('type', 'radio');
        }
        if (!this.element.id) {
            this.element.id = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["getUniqueID"])('e-' + this.getModuleName());
        }
        if (this.tagName === 'EJS-RADIOBUTTON') {
            var formControlName = this.element.getAttribute('formcontrolname');
            if (formControlName) {
                this.setProperties({ 'name': formControlName }, true);
                this.element.setAttribute('name', formControlName);
            }
        }
    };
    /**
     * Initialize the control rendering
     * @private
     */
    RadioButton.prototype.render = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
                var rippleSpan = this.element.parentElement.getElementsByClassName(RIPPLE)[0];
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(rippleSpan, { duration: 400, isCenterRipple: true });
            }
        }
        else {
            this.initialize();
        }
        if (!this.disabled) {
            this.wireEvents();
        }
        this.renderComplete();
    };
    RadioButton.prototype.setDisabled = function () {
        this.element.disabled = true;
    };
    RadioButton.prototype.setText = function (text) {
        var label = this.getLabel();
        var textLabel = label.getElementsByClassName(LABEL)[0];
        if (textLabel) {
            textLabel.textContent = text;
        }
        else {
            text = (this.enableHtmlSanitizer) ? _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["SanitizeHtmlHelper"].sanitize(text) : text;
            textLabel = this.createElement('span', { className: LABEL, innerHTML: text });
            label.appendChild(textLabel);
        }
        if (this.labelPosition === 'Before') {
            this.getLabel().classList.add('e-right');
        }
        else {
            this.getLabel().classList.remove('e-right');
        }
    };
    RadioButton.prototype.unWireEvents = function () {
        var label = this.getLabel();
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'change', this.changeHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focus', this.focusHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'keyup', this.keyUpHandler);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(rippleLabel, 'mousedown', this.labelRippleHandler);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(rippleLabel, 'mouseup', this.labelRippleHandler);
        }
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.formElement, 'reset', this.formResetHandler);
        }
    };
    RadioButton.prototype.wireEvents = function () {
        var label = this.getLabel();
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'change', this.changeHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'keyup', this.keyUpHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focus', this.focusHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
        }
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.formElement, 'reset', this.formResetHandler, this);
        }
    };
    /**
     * Click the RadioButton element
     * its native method
     * @public
     */
    RadioButton.prototype.click = function () {
        this.element.click();
    };
    /**
     * Sets the focus to RadioButton
     * its native method
     * @public
     */
    RadioButton.prototype.focusIn = function () {
        this.element.focus();
    };
    var RadioButton_1;
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], RadioButton.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], RadioButton.prototype, "created", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], RadioButton.prototype, "checked", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], RadioButton.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], RadioButton.prototype, "disabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], RadioButton.prototype, "label", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('After')
    ], RadioButton.prototype, "labelPosition", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], RadioButton.prototype, "name", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], RadioButton.prototype, "value", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], RadioButton.prototype, "enableHtmlSanitizer", void 0);
    RadioButton = RadioButton_1 = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], RadioButton);
    return RadioButton;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/switch/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/switch/index.js ***!
  \******************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./node_modules/@syncfusion/ej2-buttons/src/switch/switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/**
 * Switch modules
 */



/***/ }),

/***/ "./node_modules/@syncfusion/ej2-buttons/src/switch/switch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@syncfusion/ej2-buttons/src/switch/switch.js ***!
  \*******************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/common */ "./node_modules/@syncfusion/ej2-buttons/src/common/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CHECK = 'e-check';
var DISABLED = 'e-switch-disabled';
var RIPPLE = 'e-ripple-container';
var RIPPLE_CHECK = 'e-ripple-check';
var RTL = 'e-rtl';
var WRAPPER = 'e-switch-wrapper';
var ACTIVE = 'e-switch-active';
/**
 * The Switch is a graphical user interface element that allows you to toggle between checked and unchecked states.
 * ```html
 * <input type="checkbox" id="switch"/>
 * <script>
 * var switchObj = new Switch({});
 * switchObj.appendTo("#switch");
 * </script>
 * ```
 */
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    /**
     * Constructor for creating the widget.
     * @private
     */
    function Switch(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isFocused = false;
        _this.isDrag = false;
        return _this;
    }
    Switch.prototype.changeState = function (state) {
        var ariaState;
        var rippleSpan;
        var wrapper = this.getWrapper();
        var bar = wrapper.querySelector('.e-switch-inner');
        var handle = wrapper.querySelector('.e-switch-handle');
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            rippleSpan = wrapper.getElementsByClassName(RIPPLE)[0];
        }
        if (state) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([bar, handle], ACTIVE);
            ariaState = 'true';
            this.element.checked = true;
            this.checked = true;
            if (rippleSpan) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([rippleSpan], [RIPPLE_CHECK]);
            }
        }
        else {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([bar, handle], ACTIVE);
            ariaState = 'false';
            this.element.checked = false;
            this.checked = false;
            if (rippleSpan) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([rippleSpan], [RIPPLE_CHECK]);
            }
        }
        wrapper.setAttribute('aria-checked', ariaState);
    };
    Switch.prototype.clickHandler = function (evt) {
        this.isDrag = false;
        this.focusOutHandler();
        this.changeState(!this.checked);
        this.element.focus();
        var changeEventArgs = { checked: this.element.checked, event: evt };
        this.trigger('change', changeEventArgs);
    };
    /**
     * Destroys the Switch widget.
     * @returns void
     */
    Switch.prototype.destroy = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (!this.disabled) {
                this.unWireEvents();
            }
        }
        else {
            _super.prototype.destroy.call(this);
            if (!this.disabled) {
                this.unWireEvents();
            }
            Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["destroy"])(this, this.getWrapper(), this.tagName);
        }
    };
    Switch.prototype.focusHandler = function () {
        this.isFocused = true;
    };
    Switch.prototype.focusOutHandler = function () {
        this.getWrapper().classList.remove('e-focus');
    };
    /**
     * Gets the module name.
     * @private
     */
    Switch.prototype.getModuleName = function () {
        return 'switch';
    };
    /**
     * Gets the properties to be maintained in the persistence state.
     * @private
     */
    Switch.prototype.getPersistData = function () {
        return this.addOnPersist(['checked']);
    };
    Switch.prototype.getWrapper = function () {
        return this.element.parentElement;
    };
    Switch.prototype.initialize = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(this.initialSwitchCheckedValue)) {
            this.initialSwitchCheckedValue = this.checked;
        }
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.changeState(true);
        }
        if (this.disabled) {
            this.setDisabled();
        }
        if (this.onLabel || this.offLabel) {
            this.setLabel(this.onLabel, this.offLabel);
        }
    };
    Switch.prototype.initWrapper = function () {
        var wrapper = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = this.createElement('div', {
                className: WRAPPER, attrs: { 'role': 'switch', 'aria-checked': 'false' }
            });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var switchInner = this.createElement('span', { className: 'e-switch-inner' });
        var onLabel = this.createElement('span', { className: 'e-switch-on' });
        var offLabel = this.createElement('span', { className: 'e-switch-off' });
        var handle = this.createElement('span', { className: 'e-switch-handle' });
        wrapper.appendChild(this.element);
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["setHiddenInput"])(this, wrapper);
        switchInner.appendChild(onLabel);
        switchInner.appendChild(offLabel);
        wrapper.appendChild(switchInner);
        wrapper.appendChild(handle);
        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
            var rippleSpan = this.createElement('span', { className: RIPPLE });
            handle.appendChild(rippleSpan);
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(rippleSpan, { duration: 400, isCenterRipple: true });
        }
        wrapper.classList.add('e-wrapper');
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        if (this.cssClass) {
            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], this.cssClass.split(' '));
        }
    };
    /**
     * Called internally if any of the property value changes.
     * @private
     */
    Switch.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrapper = this.getWrapper();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'checked':
                    this.changeState(newProp.checked);
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    }
                    else {
                        this.element.disabled = false;
                        wrapper.classList.remove(DISABLED);
                        wrapper.setAttribute('aria-disabled', 'false');
                        this.wireEvents();
                    }
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'onLabel':
                case 'offLabel':
                    this.setLabel(newProp.onLabel, newProp.offLabel);
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        wrapper.classList.add(RTL);
                    }
                    else {
                        wrapper.classList.remove(RTL);
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["removeClass"])([wrapper], oldProp.cssClass.split(' '));
                    }
                    if (newProp.cssClass) {
                        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["addClass"])([wrapper], newProp.cssClass.split(' '));
                    }
                    break;
            }
        }
    };
    /**
     * Initialize Angular, React and Unique ID support.
     * @private
     */
    Switch.prototype.preRender = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            return;
        }
        var element = this.element;
        this.formElement = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["closest"])(this.element, 'form');
        this.tagName = this.element.tagName;
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["preRender"])(this, 'EJS-SWITCH', WRAPPER, element, this.getModuleName());
    };
    /**
     * Initialize control rendering.
     * @private
     */
    Switch.prototype.render = function () {
        if (Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isBlazor"])() && this.isServerRendered) {
            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["isRippleEnabled"]) {
                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["rippleEffect"])(this.element.parentElement, { duration: 400, isCenterRipple: true });
            }
        }
        else {
            this.initWrapper();
            this.initialize();
        }
        if (!this.disabled) {
            this.wireEvents();
        }
        this.renderComplete();
    };
    Switch.prototype.rippleHandler = function (e) {
        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["rippleMouseHandler"])(e, rippleSpan);
        if (e.type === 'mousedown' && e.currentTarget.classList.contains('e-switch-wrapper') && e.which === 1) {
            this.isDrag = true;
            this.isFocused = false;
        }
    };
    Switch.prototype.rippleTouchHandler = function (eventType) {
        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        if (rippleSpan) {
            var event_1 = document.createEvent('MouseEvents');
            event_1.initEvent(eventType, false, true);
            rippleSpan.dispatchEvent(event_1);
        }
    };
    Switch.prototype.setDisabled = function () {
        var wrapper = this.getWrapper();
        this.element.disabled = true;
        wrapper.classList.add(DISABLED);
        wrapper.setAttribute('aria-disabled', 'true');
    };
    Switch.prototype.setLabel = function (onText, offText) {
        var wrapper = this.getWrapper();
        if (onText) {
            wrapper.querySelector('.e-switch-on').textContent = onText;
        }
        if (offText) {
            wrapper.querySelector('.e-switch-off').textContent = offText;
        }
    };
    Switch.prototype.switchFocusHandler = function () {
        if (this.isFocused) {
            this.getWrapper().classList.add('e-focus');
        }
    };
    Switch.prototype.switchMouseUp = function (e) {
        var target = e.target;
        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        if (e.type === 'touchmove') {
            e.preventDefault();
        }
        if (e.type === 'touchstart') {
            this.isDrag = true;
            this.rippleTouchHandler('mousedown');
        }
        if (this.isDrag) {
            if ((e.type === 'mouseup' && target.className.indexOf('e-switch') < 0) || e.type === 'touchend') {
                this.clickHandler(e);
                this.rippleTouchHandler('mouseup');
                e.preventDefault();
            }
        }
    };
    Switch.prototype.formResetHandler = function () {
        this.checked = this.initialSwitchCheckedValue;
        this.element.checked = this.initialSwitchCheckedValue;
    };
    /**
     * Toggle the Switch component state into checked/unchecked.
     * @returns void
     */
    Switch.prototype.toggle = function () {
        this.clickHandler();
    };
    Switch.prototype.wireEvents = function () {
        var wrapper = this.getWrapper();
        var handle = wrapper.querySelector('.e-switch-handle');
        this.delegateMouseUpHandler = this.switchMouseUp.bind(this);
        this.delegateKeyUpHandler = this.switchFocusHandler.bind(this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(wrapper, 'click', this.clickHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focus', this.focusHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'mouseup', this.delegateMouseUpHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.element, 'keyup', this.delegateKeyUpHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(wrapper, 'mousedown mouseup', this.rippleHandler, this);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(wrapper, 'touchstart touchmove touchend', this.switchMouseUp, this);
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].add(this.formElement, 'reset', this.formResetHandler, this);
        }
    };
    Switch.prototype.unWireEvents = function () {
        var wrapper = this.getWrapper();
        var handle = wrapper.querySelector('.e-switch-handle');
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(wrapper, 'click', this.clickHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focus', this.focusHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'mouseup', this.delegateMouseUpHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.element, 'keyup', this.delegateKeyUpHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(wrapper, 'mousedown mouseup', this.rippleHandler);
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(wrapper, 'touchstart touchmove touchend', this.switchMouseUp);
        if (this.formElement) {
            _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["EventHandler"].remove(this.formElement, 'reset', this.formResetHandler);
        }
    };
    /**
     * Click the switch element
     * its native method
     * @public
     */
    Switch.prototype.click = function () {
        this.element.click();
    };
    /**
     * Sets the focus to Switch
     * its native method
     * @public
     */
    Switch.prototype.focusIn = function () {
        this.element.focus();
    };
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], Switch.prototype, "change", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Event"])()
    ], Switch.prototype, "created", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Switch.prototype, "checked", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Switch.prototype, "cssClass", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])(false)
    ], Switch.prototype, "disabled", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Switch.prototype, "name", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Switch.prototype, "onLabel", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Switch.prototype, "offLabel", void 0);
    __decorate([
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Property"])('')
    ], Switch.prototype, "value", void 0);
    Switch = __decorate([
        _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["NotifyPropertyChanges"]
    ], Switch);
    return Switch;
}(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let button = new ej2_buttons_1.Button({ content: 'Button' });
    button.appendTo('#element');
    let data = [{
            OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
            ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
            ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
        },
        {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
            ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
            ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
        },];
    function check() {
        debugger;
        new Promise((resolve_1, reject_1) => { __webpack_require__.e(/*! AMD require */ 0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @syncfusion/ej2-grids */ "./node_modules/@syncfusion/ej2-grids/index.js")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then((Grid) => {
            debugger;
        });
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });