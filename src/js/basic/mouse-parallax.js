"use strict"

// Ждем загрузку контента
	const mouse_parallax = (container, up, down) => {

		const parallax = document.querySelector(container);
		const img_up = document.querySelector(up);
		const img_down = document.querySelector(down);

		if (parallax && img_up && img_down) {

			const firstUp = 60;
			const firstDown = 30;

			const speed = 0.1;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setMouseParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				if(img_up.classList.contains('second-up') || img_down.classList.contains('second-down')){
					img_up.style.cssText += `transform: translate(${positionX / firstUp}%,${(positionY / firstUp) - 30}%);`;
					img_down.style.cssText += `transform: translate(${positionX / firstDown}%,${(positionY / firstDown) - 40}%);`;
				} else {
					img_up.style.cssText += `transform: translate(${positionX / firstUp}%,${(positionY / firstUp) - 50}%);`;
					img_down.style.cssText += `transform: translate(${positionX / firstDown}%,${(positionY / firstDown) - 50}%);`;
				}

				window.requestAnimationFrame(setMouseParallaxStyle);
			}
			setMouseParallaxStyle();

			parallax.addEventListener("mousemove", (e) => {
				const parallaxWidth = parallax.offsetWidth;
				const parallaxHeight = parallax.offsetHeight;

				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - parallaxHeight / 2;

				coordXprocent = coordX / parallaxWidth * 100;
				coordYprocent = coordY / parallaxHeight * 100;
			});
		}
	};

export default mouse_parallax;
