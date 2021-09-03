const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    event.currentTarget.classList = "";

    event.currentTarget.value.length === Number(event.currentTarget.dataset.length) ?
        event.currentTarget.classList.add('valid') :
        event.currentTarget.classList.add('invalid')
}

