const inputFontSize = document.querySelector('#font-size-control')
const textElement = document.querySelector('#text')

inputFontSize.addEventListener("input", changeFontSize)

function changeFontSize(e) {
    textElement.style.fontSize = inputFontSize.value + "px";
    console.log(inputFontSize.value)
}

