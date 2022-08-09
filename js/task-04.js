const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener("click", decrement)
incrementBtn.addEventListener("click", increment)

function decrement(evt, step = 1) {
  counterValue -= step;
  valueEl.textContent = counterValue;
}

function increment(evt, step = 1) {
  counterValue += step;
  valueEl.textContent = counterValue;}

