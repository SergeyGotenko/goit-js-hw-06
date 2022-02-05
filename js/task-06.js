

const input = document.querySelector('#validation-input');


input.addEventListener('blur', onValidationInput);


// function onValidationInput(event) {
//     if (Number(event.currentTarget.dataset.length) === event.currentTarget.value.length) {
//         event.currentTarget.classList.add('valid')
//         event.currentTarget.classList.remove('invalid')
//     } else {
//          event.currentTarget.classList.remove('valid')
//         event.currentTarget.classList.add('invalid')
//     }
//     // console.log(event.currentTarget.value.length)
//     // console.log(event.currentTarget.dataset.length)
// }



function onValidationInput(event) {

    input.classList.add('valid', 'invalid');

    const defaultValue = Number(event.currentTarget.dataset.length);
    const inputValue = event.currentTarget.value.length;

    if (defaultValue === inputValue) {
        input.classList.toggle('invalid');
     }
}