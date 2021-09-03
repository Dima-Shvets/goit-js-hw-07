const inputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value === "" ?
        nameOutputEl.textContent = 'незнакомец' :
        nameOutputEl.textContent = inputEl.value;
}