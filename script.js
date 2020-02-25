const users = [
    {
        name: 'Alex'
    },
    {
        name: 'John'
    }
];

function render(users) {
    users.forEach(renderUser);
}

function renderUser(user) {
    const id = Symbol.for('id');
    user[id] = Math.random();

    generateHTML(user);
}

function goroskop(user) {
    const id = Symbol.for('id');
    user[id] = Date.now();

    getData(user);
}
