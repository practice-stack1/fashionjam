const modal = (triggers, overlay, modal) => {
  const button = document.querySelectorAll(triggers),
        lay = document.querySelector(overlay),
        modal_icon = document.querySelector(modal);

    button.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        lay.classList.add('active');
        modal_icon.classList.add('active');
      });
    });

    lay.addEventListener('click', (e) => {
      console.log(e.target);
      if(e.target.classList.contains('overlay')){
        modal_icon.classList.remove('active');
        lay.classList.remove('active');
      }
    });
}

export default modal;