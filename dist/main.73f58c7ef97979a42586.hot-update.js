/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/connect.js":
/*!********************************!*\
  !*** ./src/modules/connect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar connect = function connect() {\n  var forms = document.querySelector('body'); //let inputEmail = forms.querySelectorAll('.form-email').setAttribute('required', true);\n  //inputEmail.setAttribute('required', true);\n  //console.log(inputEmail);\n\n  forms.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('input[name = \"user_phone\"]')) {\n      target.value = target.value.replace(/[^+0-9 ]$/, '');\n    } else if (target.matches('input[name = \"user_message\"]')) {\n      target.value = target.value.replace(/[^?!:;\",.а-яА-ЯёЁ0-9\\s]+$/, '');\n    } else if (target.matches('input[name = \"user_name\"]')) {\n      target.value = target.value.replace(/[^а-яА-ЯёЁ0-9 ]/, '');\n    } else if (target.matches('input[name = \"user_email\"]')) {\n      //target.setAttribute('required', true);\n      target.value = target.value.replace(/[^A-Za-z0-9/!~.*@'_-]/, '');\n    }\n  }, true);\n  forms.addEventListener('blur', function (event) {\n    var target = event.target;\n\n    if (target.matches('input[name = \"user_name\"]')) {\n      target.value = target.value.replace(/ +/g, ' ').trim();\n      target.value = target.value.replace(/([А-ЯЁ])/g, function (x) {\n        return x.toLowerCase();\n      });\n      target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, function (x) {\n        return x.toUpperCase();\n      });\n    }\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n\n//# sourceURL=webpack://3dGlo/./src/modules/connect.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b95d5196fffa56cd363f")
/******/ })();
/******/ 
/******/ }
);