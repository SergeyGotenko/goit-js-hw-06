const input = document.querySelector('#validation-input');

input.addEventListener('blur', onValidationInput);


function onValidationInput(event) {
    if (event.currentTarget.dataset.length == event.currentTarget.value.length) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    } else {
         event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
    }
}

