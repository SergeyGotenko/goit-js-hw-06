
const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
    text.style.fontSize = `${event.currentTarget.value}px`

    console.log(event.currentTarget.value)
 };