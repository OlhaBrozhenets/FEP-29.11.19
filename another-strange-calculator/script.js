'use strict';

let operandA;
let operandB;
let operator;
let result;

do {
    operator = prompt('Enter operator (+,-,*,/)');
} while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
);

do {
    operandA = prompt('Enter operand A');
} while (isNaN(operandA) || operandA === '');

operandA = Number(operandA);

do {
    operandB = prompt('Enter operand B');
} while (isNaN(operandB) || operandB === '');

operandB = Number(operandB);

switch (operator) {
    case '+':
        result = operandA + operandB;
        break;
    case '-':
        result = operandA - operandB;
        break;
    case '*':
        result = operandA * operandB;
        break;
    case '/':
        result = operandA / operandB;
        break;
}

alert(`${operandA} ${operator} ${operandB} = ${result}`);
