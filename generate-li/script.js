const ENTER_KEY_CODE = 13;

const listElement = document.getElementById('list');
const countInput = document.getElementById('count');
const errorMessage = document.getElementById('errorMessage');
const liTemplate = document.getElementById('liTemplate').innerHTML;

// document
//     .getElementById('countForm')
//     .addEventListener('submit', onCountFormSubmit);

document.getElementById('addBtn').addEventListener('click', onCountFormSubmit);
countInput.addEventListener('keydown', e => {
    if (e.keyCode === ENTER_KEY_CODE) {
        onCountFormSubmit(e);
    }
});

document.getElementById('addFiveBtn').addEventListener('click', e => {
    console.log('click', e);

    generateNewList(5);
});

function onCountFormSubmit(e) {
    e.preventDefault();
    console.log('submit', e);

    clear();
    const count = getCount();

    if (validateCount(count)) {
        generateNewList(count);
    } else {
        showError();
    }
}

function clear() {
    listElement.innerHTML = '';

    hideError();
}

function validateCount(count) {
    return !isNaN(count) && count >= 0;
}

function getCount() {
    return +countInput.value;
}

function showError() {
    errorMessage.hidden = false;
}

function hideError() {
    errorMessage.hidden = true;
}

function generateNewList(count) {
    let template = '';

    for (let i = 0; i < count; i++) {
        template += generateLi(i);
    }

    listElement.innerHTML = template;
}

function generateLi(index) {
    return liTemplate
        .replace('{{index}}', index + 1)
        .replace('{{name}}', 'Hello');
}
