

const counterEl = document.getElementById('value');

const incrementBtn = document.querySelector('[data-action = "increment"]');

const decrementBtn = document.querySelector('[data-action = "decrement"]');

let counterValue = 0; 

incrementBtn.addEventListener('click', onIncrementBtnClick);

decrementBtn.addEventListener('click', onDecrementBtnClick)

function onIncrementBtnClick() {
    counterEl.textContent = counterValue += 1;
}

function onDecrementBtnClick() {
    counterEl.textContent = counterValue -= 1;
}