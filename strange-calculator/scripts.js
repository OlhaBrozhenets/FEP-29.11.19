'use strict';

const a = +prompt('Argument A');
const b = +prompt('Argument B');

sum(a, b);

function sum(a, b) {
    alert(`${a} + ${b} = ${a + b}`);
}
