/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

let app;
window.addEventListener('DOMContentLoaded', ev => {
    console.log('DOMContentLoaded');
    app = new App();
});
class App {
    constructor() {
        console.log('new App');
        // this.updateHTMLDisplay();
        this.refreshIframe(null);
        this.registerEvents();
    }
    registerEvents() {
        console.log('register events');
        let htmlDisplay = this.getHTMLDisplay();
        let html = this.getHTMLInput();
        // htmlDisplay.addEventListener('focus', ev => html.focus());
        // html.addEventListener('keyup', ev => this.updateHTMLDisplay());
        let style = this.getStyle();
    }
    // updateHTMLDisplay() {
    //     let display = this.getHTMLDisplay();
    //     let input = this.getHTMLInput()
    //     display.innerHTML = input.innerHTML;
    // }
    refreshIframe(ev) {
        console.log('refreshIFrame', ev);
        let iframe = this.getDisplay();
        if (iframe.hasChildNodes())
            iframe.removeChild(iframe.firstChild);
        let newStyle = document.createElement('style');
        let styleInput = this.getStyle();
        let styleText = document.createTextNode(styleInput.value);
        newStyle.appendChild(styleText);
        let htmlInput = this.getHTMLInput();
        let newDoc = new DOMParser().parseFromString(htmlInput.innerText.replace(/\n/g, '').replace(/>\s+</g, ''), 'text/html');
        newDoc.head.appendChild(newStyle);
        iframe.contentDocument.head.innerHTML = newDoc.head.innerHTML;
        iframe.contentDocument.body.innerHTML = newDoc.body.innerHTML;
        setTimeout(ev => this.refreshIframe(ev), 500);
    }
    getHTMLDisplay() {
        return document.getElementById('html-code');
    }
    getHTMLInput() {
        return document.getElementById('html');
    }
    getStyle() {
        return document.getElementById('style');
    }
    getDisplay() {
        return document.getElementById('display');
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map