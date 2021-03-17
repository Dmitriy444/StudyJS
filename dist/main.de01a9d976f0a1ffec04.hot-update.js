/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся.';\n  var form = document.querySelector('body');\n  var statusMessage = document.createElement('div'); // setTimeout(() => div.remove(), 4000);\n  //statusMessage.classList.add('status');\n\n  var formMessage = document.getElementById('form2-message');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n    color: white;\"; //alert('nen');\n\n  form.addEventListener('submit', function (event) {\n    var target = event.target;\n\n    if (target.matches('form1')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n    } else if (target.matches('form3')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n    } else if (target.matches('form2')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n      formMessage2 = target.querySelector('input[name = \"user_message\"]');\n    }\n\n    event.preventDefault();\n    target.append(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Status network not 200.');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    target.querySelector('input[name = \"user_name\"]').value = '';\n    target.querySelector('input[name = \"user_email\"]').value = '';\n    target.querySelector('input[name = \"user_phone\"]').value = '';\n\n    if (formMessage.value !== '') {\n      target.querySelector('input[name = \"user_message\"]').value = '';\n    }\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6949cd183feef84faff2")
/******/ })();
/******/ 
/******/ }
);