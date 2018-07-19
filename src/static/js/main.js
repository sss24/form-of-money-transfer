"use strict";

const color = ``;
const currency = 'USD';

let number = document.querySelector('#card-num');
let brand = document.querySelector('.form__brand');

function colorButton(color = 'black') {
    const button = document.querySelector('.input__button');
    button.style.background = color;
}

colorButton(color);

function changeCurrency(currency = 'BYN') {
    const elem = document.querySelectorAll('.currency');
    elem.forEach((el) => el.innerHTML = currency);
}

changeCurrency(currency);

number.addEventListener('keyup', function () {
    let pattern = /^([456])/;
    let result = this.value.match(pattern);
    if (result != null) {
        switch (result[0]) {
            case "4":
                brand.classList.add("form__brand--visa");
                break;
            case "5":
                brand.classList.add("form__brand--maestro");
                break;
            case "6":
                brand.classList.add("form__brand--mastercard");
                break;
        }
    } else {
        brand.classList.remove('form__brand--visa');
        brand.classList.remove('form__brand--maestro');
        brand.classList.remove('form__brand--mastercard');
    }
});