function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorValue = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color')

changeBtn.addEventListener('click', onClickBtnChangeColor);

function onClickBtnChangeColor() {
  const bgcolor = getRandomHexColor();
  body.style.backgroundColor = bgcolor;
  colorValue.textContent = bgcolor;
}

