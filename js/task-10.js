function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesListRef = document.querySelector('#boxes');


createBtnRef.addEventListener('click', () => {
  const amount = inputRef.value;
  createBoxes(amount);
  
});

destroyBtnRef.addEventListener('click', () => {
  boxesListRef.innerHTML = '';
});

function createBoxes(amount) {
  
  const arrayOfBox = [];

  for (let i = 0; i < amount; i += 1) {
    const boxElement = document.createElement('div');

    boxElement.style.width = `${30 + i * 10}px`;
    boxElement.style.height = `${30 + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    arrayOfBox.push(boxElement);
  }

  boxesListRef.append(...arrayOfBox);
}

function destroyBoxes() {
  boxesListRef.innerHTML = '';
}