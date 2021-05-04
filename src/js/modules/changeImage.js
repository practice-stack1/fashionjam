import isMobile from '../basic/checkMobile';
import '../basic/ibg';

const imageContainers = document.querySelectorAll('.info-section__image-container');
removeImageChildren(imageContainers);
if(document.body.clientWidth >= 1440){
  imageContainers.forEach(imageContainer => {
    imageContainer.classList.remove('is-mobile');
  });
} else {
  imageContainers.forEach(imageContainer => {
    imageContainer.classList.add('is-mobile');
  });
}
  window.addEventListener('resize', () => {
    removeImageChildren(imageContainers);
    if(document.body.clientWidth >= 1440){
      imageContainers.forEach(imageContainer => {
        imageContainer.classList.remove('is-mobile');
      });
    } else {
      imageContainers.forEach(imageContainer => {
        imageContainer.classList.add('is-mobile');
      });
    }
  });
  function removeImageChildren(imageContainers){
    if(document.body.clientWidth <= 1440){
      imageContainers.forEach((imageContainer, i) => {
        while(imageContainer.firstChild){
          imageContainer.firstChild.remove();
        }
        imageContainer.appendChild(createImage(i));
      });
    }
  }
  function removeIsMobile(imageContainers){
    if(document.body.clientWidth >= 1440){
      imageContainers.forEach(imageContainer => {
        imageContainer.classList.remove('is-mobile');
      });
    }
  }
  function createImage(i){
    const img = document.createElement('img');
    img.getAttribute('alt', 'model');
    img.classList.add('info-section__image');
    img.setAttribute('src', `img/${i + 1}.png`);
    return img;
  }

