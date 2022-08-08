function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color')
const colorValue = document.querySelector('span.color')
const body = document.querySelector('body')

changeColor.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})