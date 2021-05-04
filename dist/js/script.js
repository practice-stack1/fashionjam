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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (isMobile);

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.querySelector('.wrapper').classList.add('loaded');

function ibg() {
  var ibgs = document.querySelectorAll('.ibg');
  ibgs.forEach(function (value) {
    if (value.querySelector('img')) {
      value.style.cssText = "background-image: url(".concat(value.querySelector('img').getAttribute('src'), ")");
    }
  });
}

ibg();
/* harmony default export */ __webpack_exports__["default"] = (ibg);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/ibg */ "./src/js/basic/ibg.js");
/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeImage */ "./src/js/modules/changeImage.js");


window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var innerSlider = new Swiper('.inner-slider__container', {
    wrapperClass: "inner-slider__wrapper",
    slideClass: "inner-slider__slide",
    navigation: {
      nextEl: '.main-screen__arrow_next',
      prevEl: '.main-screen__arrow_prev'
    },
    slidesPerView: 1,
    direction: 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    simulateTouch: true
  });
  var mainSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',
    parallax: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },
    mousewheel: {
      sensitivity: 1
    },
    watchOverflow: true,
    simulateTouch: false,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active"
    },
    scrollbar: {
      el: '.page__scroll',
      dragClass: "page__drag-scroll",
      draggable: true
    },
    init: false,
    on: {
      init: function init() {
        setScrollType();
        wrapper.classList.add('_loaded');
      },
      resize: function resize() {
        setScrollType();
      }
    }
  });
  var wrapper = document.querySelector('.wrapper');

  function setScrollType() {
    if (wrapper.classList.contains('_free')) {
      wrapper.classList.remove('_free');
      mainSlider.params.freeMode = false;
    }

    for (var index = 0; index < mainSlider.slides.length; index++) {
      var pageSlide = mainSlider.slides[index];
      var pageSlideContent = pageSlide.querySelector('.wrapper-container');

      if (pageSlideContent) {
        var paddingTop = parseInt(getComputedStyle(pageSlideContent.parentElement, true).paddingTop);
        var paddingBottom = parseInt(getComputedStyle(pageSlideContent.parentElement, true).paddingBottom);
        var pageSlideContentHeight = pageSlideContent.offsetHeight;
        var padding = paddingTop + paddingBottom;

        if (document.body.clientWidth <= 1440) {
          if (pageSlideContentHeight + padding + 100 > window.innerHeight) {
            wrapper.classList.add('_free');
            mainSlider.params.freeMode = true;
            break;
          }
        } else {
          if (pageSlideContentHeight + padding > window.innerHeight) {
            wrapper.classList.add('_free');
            mainSlider.params.freeMode = true;
            break;
          }
        }
      }
    }
  }

  mainSlider.init();
});

/***/ }),

/***/ "./src/js/modules/changeImage.js":
/*!***************************************!*\
  !*** ./src/js/modules/changeImage.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/ibg */ "./src/js/basic/ibg.js");


var imageContainers = document.querySelectorAll('.info-section__image-container');
removeImageChildren(imageContainers);

if (document.body.clientWidth >= 1440) {
  imageContainers.forEach(function (imageContainer) {
    imageContainer.classList.remove('is-mobile');
  });
} else {
  imageContainers.forEach(function (imageContainer) {
    imageContainer.classList.add('is-mobile');
  });
}

window.addEventListener('resize', function () {
  removeImageChildren(imageContainers);

  if (document.body.clientWidth >= 1440) {
    imageContainers.forEach(function (imageContainer) {
      imageContainer.classList.remove('is-mobile');
    });
  } else {
    imageContainers.forEach(function (imageContainer) {
      imageContainer.classList.add('is-mobile');
    });
  }
});

function removeImageChildren(imageContainers) {
  if (document.body.clientWidth <= 1440) {
    imageContainers.forEach(function (imageContainer, i) {
      while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
      }

      imageContainer.appendChild(createImage(i));
    });
  }
}

function removeIsMobile(imageContainers) {
  if (document.body.clientWidth >= 1440) {
    imageContainers.forEach(function (imageContainer) {
      imageContainer.classList.remove('is-mobile');
    });
  }
}

function createImage(i) {
  var img = document.createElement('img');
  img.getAttribute('alt', 'model');
  img.classList.add('info-section__image');
  img.setAttribute('src', "img/".concat(i + 1, ".png"));
  return img;
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map