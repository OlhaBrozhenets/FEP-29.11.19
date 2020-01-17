// function createCounter() {
//     let counts = 0;

//     return {
//         count: () => ++counts,
//         set: value => (counts = value),
//         get: () => counts,
//         reset: () => (counts = 0)
//     };
// }

// const counter = createCounter();

// console.log(counter.count());
// console.log(counter.count());
// console.log(counter.set(10));
// console.log(counter.get());
// console.log(counter.count());
// console.log(counter.reset());
// console.log(counter.get());

'use strict';

function say(greeting) {
    console.log(greeting + this.name);
}

const person = {
    name: 'Alex'
};

say.call(person, 'Hello');
say.apply(person, ['Hello']);
