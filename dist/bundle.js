/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_teamImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/teamImage */ \"./src/modules/teamImage.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculate */ \"./src/modules/calculate.js\");\n/* harmony import */ var _modules_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/connect */ \"./src/modules/connect.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('19 march 2021'); // Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // Popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); // Tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); // Slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); // Team\n\n(0,_modules_teamImage__WEBPACK_IMPORTED_MODULE_5__.default)(); // Calculator\n\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_6__.default)(100); // Connect\n\n(0,_modules_connect__WEBPACK_IMPORTED_MODULE_7__.default)(); // send-ajax-form   \n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://3dGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculate.js":
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculate = function calculate() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var square = document.querySelector('.calc-square'),\n      premises = document.querySelector('.calc-count'),\n      workDays = document.querySelector('.calc-day'),\n      calcType = document.querySelector('.calc-type'),\n      calcCount = document.querySelector('.calc-count'),\n      calcBlock = document.querySelector('.calc-block'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +square.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (workDays.value && workDays.value < 5) {\n      dayValue *= 2;\n    } else if (workDays.value && workDays.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = Math.round(total);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target === square) {\n      target.value = square.value.replace(/\\D/g, '');\n    } else if (target === premises) {\n      premises.value = premises.value.replace(/\\D/g, '');\n    } else if (target === workDays) {\n      workDays.value = workDays.value.replace(/\\D/g, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack://3dGlo/./src/modules/calculate.js?");

/***/ }),

/***/ "./src/modules/connect.js":
/*!********************************!*\
  !*** ./src/modules/connect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar connect = function connect() {\n  var forms = document.querySelector('body');\n  var inputEmail = document.querySelectorAll('input[name = \"user_email\"]');\n  inputEmail.forEach(function (item) {\n    item.setAttribute('required', true);\n  });\n  forms.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('input[name = \"user_phone\"]')) {\n      target.value = target.value.replace(/[^+0-9 ]$/, '');\n    } else if (target.matches('input[name = \"user_message\"]')) {\n      target.value = target.value.replace(/[^?!:;\",.а-яА-ЯёЁ0-9\\s]+$/, '');\n    } else if (target.matches('input[name = \"user_name\"]')) {\n      target.value = target.value.replace(/[^а-яА-ЯёЁ0-9 ]/, '');\n    } else if (target.matches('input[name = \"user_email\"]')) {\n      target.value = target.value.replace(/[^A-Za-z0-9/!~.*@'_-]/, '');\n    }\n  }, true);\n  forms.addEventListener('blur', function (event) {\n    var target = event.target;\n\n    if (target.matches('input[name = \"user_name\"]')) {\n      target.value = target.value.replace(/ +/g, ' ').trim();\n      target.value = target.value.replace(/([А-ЯЁ])/g, function (x) {\n        return x.toLowerCase();\n      });\n      target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, function (x) {\n        return x.toUpperCase();\n      });\n    }\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n\n//# sourceURL=webpack://3dGlo/./src/modules/connect.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.textContent = timer.hours;\n      timerMinutes.textContent = timer.minutes;\n      timerSeconds.textContent = timer.seconds;\n    } else if (timer.timeRemaining <= 0) {\n      clearInterval(idInterval);\n      timerHours.textContent = 0;\n      timerMinutes.textContent = 0;\n      timerSeconds.textContent = 0;\n    }\n\n    if (timerHours.textContent < 10) {\n      timerHours.textContent = '0' + timerHours.textContent;\n    }\n\n    if (timerMinutes.textContent < 10) {\n      timerMinutes.textContent = '0' + timerMinutes.textContent;\n    }\n\n    if (timerSeconds.textContent < 10) {\n      timerSeconds.textContent = '0' + timerSeconds.textContent;\n    }\n  }\n\n  updateClock();\n  var idInterval = setInterval(updateClock, 1000);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dGlo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся.';\n  var form = document.querySelector('body');\n  var statusMessage = document.createElement('div'); // setTimeout(() => div.remove(), 4000);\n  //statusMessage.classList.add('status');\n\n  var formMessage = document.getElementById('form2-message');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n    color: white;\"; //alert('nen');\n\n  form.addEventListener('submit', function (event) {\n    var target = event.target;\n\n    if (target.matches('form1')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n    } else if (target.matches('form3')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n    } else if (target.matches('form2')) {\n      formName = target.querySelector('input[name = \"user_name\"]');\n      formEmail = target.querySelector('input[name = \"user_email\"]');\n      formPhone = target.querySelector('input[name = \"user_phone\"]');\n      formMessage2 = target.querySelector('input[name = \"user_message\"]');\n    }\n\n    event.preventDefault();\n    target.append(statusMessage);\n    setTimeout(function () {\n      return statusMessage.remove();\n    }, 3000);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(target);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Status network not 200.');\n      }\n\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n    target.querySelector('input[name = \"user_name\"]').value = '';\n    target.querySelector('input[name = \"user_email\"]').value = '';\n    target.querySelector('input[name = \"user_phone\"]').value = '';\n\n    if (formMessage.value !== '') {\n      target.querySelector('input[name = \"user_message\"]').value = '';\n    }\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      portfolioDots = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var dotsPlus = function dotsPlus() {\n    for (var i = 0; i < slide.length; i++) {\n      var pDots = document.createElement('li');\n      pDots.classList.add('dot');\n      portfolioDots.append(pDots);\n    }\n  };\n\n  dotsPlus();\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dGlo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dGlo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/teamImage.js":
/*!**********************************!*\
  !*** ./src/modules/teamImage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar teamImage = function teamImage() {\n  var command = document.querySelector('.command');\n  command.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    var photoOne = event.target.src;\n\n    if (target.closest('.command__photo')) {\n      event.target.src = event.target.dataset.img;\n      event.target.dataset.img = photoOne;\n    }\n  });\n  command.addEventListener('mouseout', function (event) {\n    var target = event.target;\n    var photoTwo = event.target.src;\n\n    if (target.closest('.command__photo')) {\n      event.target.src = event.target.dataset.img;\n      event.target.dataset.img = photoTwo;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamImage);\n\n//# sourceURL=webpack://3dGlo/./src/modules/teamImage.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu'),\n      closeBtn = document.querySelector('.close-btn'),\n      menuElems = document.querySelectorAll('.active-menu');\n\n  var actionMenu = function actionMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close-btn')) {\n      menu.classList.remove('active-menu');\n    } else {\n      target = target.closest('a');\n\n      if (target) {\n        menu.classList.remove('active-menu');\n      }\n    }\n  });\n  btnMenu.addEventListener('click', actionMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dGlo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n  var count = 0;\n\n  var popupDown = function popupDown() {\n    count++;\n\n    if (count < 60 && screen.width > 768) {\n      popupContent.style.top = count + 'px';\n      setTimeout(popupDown);\n    }\n  };\n\n  var popupUp = function popupUp() {\n    count--;\n\n    if (count > 0) {\n      popupContent.style.top = count + 'px';\n      setTimeout(popupUp);\n    }\n  };\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      popupUp();\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      popupDown();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dGlo/./src/modules/togglePopup.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;