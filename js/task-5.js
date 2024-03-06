function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = widgetEl.parentNode;

btnEl.addEventListener('click', (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});