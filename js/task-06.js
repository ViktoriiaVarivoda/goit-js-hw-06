const input = document.querySelector('#validation-input')
const totalLenght = input.getAttribute("data-length");
const totalLenghtEl = parseInt(totalLenght);

input.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (input.value.length === totalLenghtEl) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
    input.classList.remove('valid');
        input.classList.add('invalid');
    };
};


