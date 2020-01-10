const listElement = document.getElementById('list');
const countInput = document.getElementById('count');
const errorMessage = document.getElementById('errorMessage');

document.getElementById('addBtn').addEventListener('click', onAddButtonClick);
document.getElementById('addFiveBtn').addEventListener('click', () => {
    generateNewList(5);
});

function onAddButtonClick() {
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
    return `<li>${index + 1}</li>`;
}
