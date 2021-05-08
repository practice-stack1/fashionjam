
const animItems = document.querySelectorAll('._anim-items'); //? діжурний клас для елементів із анімацією

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	//! у кожного елемента із класом _anim-items при досягненні скролом 1\4 його висоти чи висоти вікна браузера, якщо елемент більший за висоту вікна браузера йому добавляється клас .active, якщо ми не докрутили або перекрутили, то клас видаляється
		function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			//! Змінна для визначення точки старту анімації
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {//! клас призначений для заборони повторного виклику анімації
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


	setTimeout(() => {
		animOnScroll();
	}, 300);
}