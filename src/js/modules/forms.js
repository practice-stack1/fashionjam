import email_test from '../modules/regulars/check-email';
const forms = (current_form) => {
  const forms = document.querySelectorAll(current_form),
        inputs = document.querySelectorAll('input');


  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      sendForm(this);
    });
  });

  function sendForm(form) {
    let error = formValidate(form);
		if(error === 0){
			clearInputs(inputs);
			inputs.forEach(input => {
				formRemoveError(input);
			});
		}
  }

  function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.getAttribute("name") === "email") {
				console.log('check email', email_test(input));
				if(!email_test(input)){
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
  const clearInputs = (inputs) => {
    inputs.forEach(input => {
      input.value = '';
    });
  };

};

export default forms;