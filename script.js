const logElement = document.getElementById('log');

document.getElementById('sendBtn').addEventListener('click', onBtnClick);

function onBtnClick(e) {
    e.target.classList.add('loading');

    setTimeout(() => {
        e.target.classList.remove('loading');
    }, 3000);
}

document
    .querySelector('#container')
    .addEventListener('click', onContainerClick);

function onContainerClick(e) {
    if (this !== e.target) {
        e.target.remove();
    } else {
        console.log('Container');
    }
    // console.log('change on container bubling', this, e.target);
}
