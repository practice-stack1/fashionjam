import './basic/ibg';
import './modules/changeImage';
import './basic/mouse-parallax';
import mouse_parallax from './basic/mouse-parallax';
import './basic/anim-sroll';


window.addEventListener('DOMContentLoaded', () => {
	'use strict'
	let innerSlider = new Swiper('.inner-slider__container', {
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
			pageUpDown: true,
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

		simulateTouch: true,



	});


	let mainSlider = new Swiper('.page', {
		wrapperClass: "page__wrapper",
		slideClass: "page__screen",

		direction: 'vertical',

		slidesPerView: 'auto',

		parallax: true,

		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},

		mousewheel: {
			sensitivity: 1,
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
			bulletActiveClass: "page__bullet_active",
		},

		scrollbar: {
			el: '.page__scroll',
			dragClass: "page__drag-scroll",
			draggable: true
		},

		init: false,

		on: {
			init: function () {
				setScrollType();
				wrapper.classList.add('_loaded');
			},
			resize: function () {
				setScrollType();
			}
		},
	});

	let wrapper = document.querySelector('.wrapper');
	function setScrollType() {
		if (wrapper.classList.contains('_free')) {
			wrapper.classList.remove('_free');
			mainSlider.params.freeMode = false;
		}
		for (let index = 0; index < mainSlider.slides.length; index++) {
			const pageSlide = mainSlider.slides[index];
			const pageSlideContent = pageSlide.querySelector('.wrapper-container');
			if (pageSlideContent) {

				const paddingTop = parseInt(getComputedStyle(pageSlideContent.parentElement, true).paddingTop);
				const paddingBottom = parseInt(getComputedStyle(pageSlideContent.parentElement, true).paddingBottom);
				const pageSlideContentHeight = pageSlideContent.offsetHeight;
				const padding = paddingTop + paddingBottom;
				if(document.body.clientWidth <= 1440){
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


	mouse_parallax('.parallax-2', '.second-up', '.second-down');
	mouse_parallax('.parallax-3', '.third-up', '.third-down');
	mouse_parallax('.parallax-1', '.first-up', '.first-down');
});

