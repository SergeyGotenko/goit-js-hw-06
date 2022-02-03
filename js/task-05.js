const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", enterTextInput);


function enterTextInput (event)  {
    if (event.currentTarget.value) {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = 'Anonymous!'
    }
    console.log(event.currentTarget.value)
}
