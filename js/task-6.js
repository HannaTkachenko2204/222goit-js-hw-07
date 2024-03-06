function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const element = document.createElement('div');
    console.log(element);
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxesEl.append(element);
    //console.log(boxesEl);
  }
}

createBtn.addEventListener('click', () => {
    const amount = Number(inputEl.value);
    console.log(amount);
    createBoxes(amount);
});

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

destroyBtn.addEventListener('click', () => destroyBoxes());