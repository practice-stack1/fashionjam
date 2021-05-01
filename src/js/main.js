import './basic/ibg';


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
			const pageSlideContent = pageSlide.querySelector('.main-screen__content-wrapper');
			if (pageSlideContent) {
				const pageSlideContentHeight = pageSlideContent.offsetHeight;
				console.log(pageSlideContentHeight, window.innerHeight);
				if (pageSlideContentHeight + 162 > window.innerHeight) {
					console.log(pageSlideContentHeight + 162 > window.innerHeight);
					wrapper.classList.add('_free');
					mainSlider.params.freeMode = true;
					break;
				}
			}
		}
	}

	mainSlider.init();


});

