const logElement = document.getElementById('log');

document.querySelector('input').addEventListener(
    'change',
    () => {
        console.log('change on input');
    },
    false
);
document.querySelector('#container').addEventListener(
    'change',
    () => {
        console.log('change on container bubling');
    },
    false
);

document.getElementById('container').addEventListener(
    'change',
    e => {
        // e.stopPropagation();
        console.log('change on container');

        logElement.innerHTML += `<li>${e.target.name} => ${e.target.value}</li>`;
    },
    true
);
