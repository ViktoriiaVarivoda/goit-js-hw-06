let value = 0;
let counterValue = document.querySelector('#value');

const decrement = document.querySelector('#counter').firstElementChild;
const increment = document.querySelector('#counter').lastElementChild;

increment.addEventListener('click', event => {
    value += 1;
    counterValue.innerText = value;
});

decrement.addEventListener('click', event => {
    value -= 1;
    counterValue.innerText = value;
});