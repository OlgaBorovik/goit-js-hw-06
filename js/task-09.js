function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const colorName = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')

const changColor = (evt) => {
  body.style.backgroundColor = getRandomHexColor()
  colorName.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  console.log(colorName)
}

changeColorBtn.addEventListener('click', changColor)