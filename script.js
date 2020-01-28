const acc = new Accordeon(document.getElementById('myAccordeon'));

document
    .getElementById('btn')
    .addEventListener('click', () => acc.showIndex(2));

console.log(acc);
