function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBackgroundColor() {
  const body = document.querySelector('body');
  const colorSpan = document.querySelector('.color');

  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', changeBackgroundColor);