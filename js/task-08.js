const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('#controls input');
const boxesEl = document.getElementById('boxes');

inputEl.addEventListener('input', onInputChange)
renderBtn.addEventListener('click', onRenderBtnClick)
destroyBtn.addEventListener('click', destroyBoxes)

let boxesNumber = 0;

function onInputChange(event) {
    boxesNumber = Number(event.currentTarget.value);
}

function onRenderBtnClick() {
    createBoxes(boxesNumber)
}

function createBoxes(amount) {
    const boxes = [];

    if (amount > 0) {
        for (let i = 0; i <= amount - 1; i += 1) {
        boxes.push(createBox(i))
    };
    boxesEl.append(...boxes)
    }
}

function createBox(itterationNumber) {
    const size = `${30 + (10 * itterationNumber)}px`

    const box = document.createElement('div');
    box.style.backgroundColor = getRandomColor();
    box.style.width = size;
    box.style.height = size;

    return box;
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)})`;
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}


