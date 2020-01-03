const operandAElement = document.querySelector('#operandA');
const operandBElement = document.querySelector('#operandB');
const resultElement = document.querySelector('#result');

document.getElementById('sumBtn').addEventListener('click', onSumBtnClick);
document.getElementById('subBtn').addEventListener('click', onSubBtnClick);

function onSumBtnClick() {
    calculateSum();
    clear();
    focus();
}

function onSubBtnClick() {
    calculateSub();
    clear();
    focus();
}

function calculateSub() {
    const operands = getOperands(); // {a: num, b:num}

    const result = getSub(operands.a, operands.b);

    showResult(operands, result, '-');
}

function calculateSum() {
    const operands = getOperands(); // {a: num, b:num}

    const result = getSum(operands.a, operands.b);

    showResult(operands, result, '+');
}

function getOperands() {
    return {
        a: +operandAElement.value,
        b: +operandBElement.value
    };
}

function getSum(a, b) {
    return a + b;
}
function getSub(a, b) {
    return a - b;
}

function showResult(operands, result, operator) {
    resultElement.innerHTML = `${operands.a} ${operator} ${operands.b} = ${result}`;
}

function clear() {
    operandAElement.value = '';
    operandBElement.value = '';
}

function focus() {
    operandAElement.focus();
}
