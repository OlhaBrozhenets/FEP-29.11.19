'use strict';

// const numbers = prompt('Enter numbers')
//     .split(',')
//     .filter(val => !isNaN(val) && val.trim() !== '')
//     .map(Number);

// console.log(numbers);

// const maxNumber = Math.max.apply(null, numbers);

// numbers.sort();
// const maxNumberUsingSort = numbe[numbers.length - 1];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log('max', maxNumber, maxNumberUsingSort);
// console.log('evenNumbers', evenNumbers);
// console.log('sum', sum);

let maxValue = null;
let sum = 0;
const evenNumbers = [];

const numbers = '1,2,34,667,,,,0,-10,qkefdg,100'
    .split(',')
    .forEach(prepareValue);

console.log('max', maxValue);
console.log('evenNumbers', evenNumbers);
console.log('sum', sum);

function prepareValue(val) {
    if (!isNaN(val) && val.trim() !== '') {
        val = Number(val);
        sum += val;

        if (maxValue === null || maxValue < val) {
            maxValue = val;
        }

        if (val % 2 === 0) {
            evenNumbers.push(val);
        }
    }
}
