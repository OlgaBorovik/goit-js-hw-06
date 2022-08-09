const inputRef = document.querySelector("#validation-input");
const inputRefLength = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", inputBlurVerification)

function inputBlurVerification(e) {
  if (e.currentTarget.value.length === inputRefLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}



