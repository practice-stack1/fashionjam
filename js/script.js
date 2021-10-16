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

/***/ "./src/js/basic/anim-sroll.js":
/*!************************************!*\
  !*** ./src/js/basic/anim-sroll.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener('scroll', animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
}

/***/ }),

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

/***/ "./src/js/basic/checkTextInputs.js":
/*!*****************************************!*\
  !*** ./src/js/basic/checkTextInputs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var checkTextInputs = function checkTextInputs(selector) {
  var txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(function (input) {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^A-zА-я]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

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

/***/ "./src/js/basic/mouse-parallax.js":
/*!****************************************!*\
  !*** ./src/js/basic/mouse-parallax.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 // Ждем загрузку контента

var mouse_parallax = function mouse_parallax(container, up, down) {
  var parallax = document.querySelector(container);
  var img_up = document.querySelector(up);
  var img_down = document.querySelector(down);

  if (parallax && img_up && img_down) {
    var setMouseParallaxStyle = function setMouseParallaxStyle() {
      var distX = coordXprocent - positionX;
      var distY = coordYprocent - positionY;
      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      if (img_up.classList.contains('second-up') || img_down.classList.contains('second-down')) {
        img_up.style.cssText += "transform: translate(".concat(positionX / firstUp, "%,").concat(positionY / firstUp - 30, "%);");
        img_down.style.cssText += "transform: translate(".concat(positionX / firstDown, "%,").concat(positionY / firstDown - 40, "%);");
      } else {
        img_up.style.cssText += "transform: translate(".concat(positionX / firstUp, "%,").concat(positionY / firstUp - 50, "%);");
        img_down.style.cssText += "transform: translate(".concat(positionX / firstDown, "%,").concat(positionY / firstDown - 50, "%);");
      }

      window.requestAnimationFrame(setMouseParallaxStyle);
    };

    var firstUp = 60;
    var firstDown = 30;
    var speed = 0.1;
    var positionX = 0,
        positionY = 0;
    var coordXprocent = 0,
        coordYprocent = 0;
    setMouseParallaxStyle();
    parallax.addEventListener("mousemove", function (e) {
      var parallaxWidth = parallax.offsetWidth;
      var parallaxHeight = parallax.offsetHeight;
      var coordX = e.pageX - parallaxWidth / 2;
      var coordY = e.pageY - parallaxHeight / 2;
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (mouse_parallax);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeImage */ "./src/js/modules/changeImage.js");
/* harmony import */ var _basic_mouse_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/mouse-parallax */ "./src/js/basic/mouse-parallax.js");
/* harmony import */ var _basic_anim_sroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/anim-sroll */ "./src/js/basic/anim-sroll.js");
/* harmony import */ var _basic_anim_sroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_basic_anim_sroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _basic_checkTextInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/checkTextInputs */ "./src/js/basic/checkTextInputs.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/ibg */ "./src/js/basic/ibg.js");








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
  Object(_basic_mouse_parallax__WEBPACK_IMPORTED_MODULE_1__["default"])('.parallax-2', '.second-up', '.second-down');
  Object(_basic_mouse_parallax__WEBPACK_IMPORTED_MODULE_1__["default"])('.parallax-3', '.third-up', '.third-down');
  Object(_basic_mouse_parallax__WEBPACK_IMPORTED_MODULE_1__["default"])('.parallax-1', '.first-up', '.first-down');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])('.main-btn', '.overlay', '#preregister');
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])('.sub-button', '.overlay', '#register');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('.modal__forms');
  Object(_basic_checkTextInputs__WEBPACK_IMPORTED_MODULE_5__["default"])('[type="text"]');
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
  var picture = document.createElement('picture');
  var source = document.createElement('source');
  source.setAttribute('srcset', "img/".concat(i + 1, ".webp"));
  var img = document.createElement('img');
  img.getAttribute('alt', 'model');
  img.classList.add('info-section__image');
  img.setAttribute('src', "img/".concat(i + 1, ".png"));
  picture.appendChild(source);
  picture.appendChild(img);
  return picture;
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_regulars_check_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/regulars/check-email */ "./src/js/modules/regulars/check-email.js");


var forms = function forms(current_form) {
  var forms = document.querySelectorAll(current_form),
      inputs = document.querySelectorAll('input');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sendForm(this);
    });
  });

  function sendForm(form) {
    var error = formValidate(form);

    if (error === 0) {
      clearInputs(inputs);
      inputs.forEach(function (input) {
        formRemoveError(input);
      });
    }
  }

  function formValidate(form) {
    var error = 0;
    var formReq = form.querySelectorAll('._req');

    for (var index = 0; index < formReq.length; index++) {
      var input = formReq[index];
      formRemoveError(input);

      if (input.getAttribute("name") === "email") {
        console.log('check email', Object(_modules_regulars_check_email__WEBPACK_IMPORTED_MODULE_0__["default"])(input));

        if (!Object(_modules_regulars_check_email__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  var clearInputs = function clearInputs(inputs) {
    inputs.forEach(function (input) {
      input.value = '';
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modal = function modal(triggers, overlay, _modal) {
  var button = document.querySelectorAll(triggers),
      lay = document.querySelector(overlay),
      modal_icon = document.querySelector(_modal);
  button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      lay.classList.add('active');
      modal_icon.classList.add('active');
    });
  });
  lay.addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')) {
      modal_icon.classList.remove('active');
      lay.classList.remove('active');
      var inputs = lay.querySelectorAll('input');
      inputs.forEach(function (input) {
        input.classList.remove('_error');
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/regulars/check-email.js":
/*!************************************************!*\
  !*** ./src/js/modules/regulars/check-email.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function email_test(input) {
  if (input.value !== '') {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
  } else {
    return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (email_test);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map