const USERS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const LS_KEY = 'usersList';
const userForm = document.querySelector('#newUserForm');
const usersList = document.querySelector('#usersList');
const userTemplate = document.querySelector('#userTemplate').innerHTML;
const formInputs = document.querySelectorAll('.form-input');

let list = [];
userForm.addEventListener('submit', onUserFormSubmit);

userForm.addEventListener('focus', onUserFormFocus, true);
userForm.addEventListener('blur', onUserFormBlur, true);

usersList.addEventListener('click', onUsersListClick);

init();

function init() {
    getUsers();
}

function onUserFormSubmit(e) {
    e.preventDefault();
    submitUser();
}

function onUsersListClick(event) {
    if (event.target.classList.contains('delete-btn')) {
        removeUser(event.target.closest('.user-item').dataset.id);
    }
    if (event.target.classList.contains('edit-btn')) {
        editUser(event.target.closest('.user-item').dataset.id);
    }
}

function onUserFormBlur(e) {
    if (!validate(e.target.value)) {
        makeInvalid(e.target);
    }
}

function onUserFormFocus(e) {
    makeValid(e.target);
}

function makeInvalid(el) {
    el.classList.add('invalid');
}

function makeValid(el) {
    el.classList.remove('invalid');
}

function validate(value) {
    return !!value.trim();
}

function getUsers() {
    // let data = localStorage.getItem(LS_KEY);
    // data = data ? JSON.parse(data) : [];

    // setUsers(data);
    // renderUsersList(data);
    fetch(USERS_URL, {
        method: 'GET',
        headers: {
            'X-CSRF': 'alkghflakdhflkajshf'
        }
    })
        .then(resp => resp.json())
        .then(setUsers)
        .then(renderUsersList);
}

function setUsers(data) {
    return (list = data);
}

function renderUsersList(data) {
    usersList.innerHTML = '';

    data.forEach(renderUser);
}

function removeUser(id) {
    // fetch(`${USERS_URL}/${id}`, {
    //     method: 'DELETE'
    // });

    list = list.filter(item => item.id !== id);
    renderUsersList(list);
    localStorage.setItem(LS_KEY, JSON.stringify(list));
}

function editUser(id) {
    const user = list.find(item => item.id == id);
    console.log(id, list, user);

    fillForm(user);
}

function fillForm(user) {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].value = user[formInputs[i].name];
    }
}

function submitUser() {
    if (validateInputs()) {
        const user = getFormData();

        if (user.id) {
            updateUser(user);
        } else {
            createUser(user);
        }
        console.log(user);
        resetUserForm();
    }
}

function updateUser(user) {
    // fetch(`${USERS_URL}/${user.id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // });

    list = list.map(item => (item.id == user.id ? user : item));
    localStorage.setItem(LS_KEY, JSON.stringify(list));

    renderUsersList(list);
}

function createUser(user) {
    user.id = Date.now();
    list.push(user);
    renderUsersList(list);

    localStorage.setItem(LS_KEY, JSON.stringify(list));

    // fetch(`${USERS_URL}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         list.push(data);
    //         renderUsersList(list);
    //     });
}

function validateInputs() {
    let isValid = true;

    for (let i = 0; i < formInputs.length; i++) {
        if (!validate(formInputs[i].value) && formInputs[i].type !== 'hidden') {
            makeInvalid(formInputs[i]);

            isValid = false;
        }
    }

    return isValid;
}

function getFormData() {
    const obj = {};

    for (let i = 0; i < formInputs.length; i++) {
        obj[formInputs[i].name] = formInputs[i].value;
    }

    return obj;
}

function renderUser(user) {
    const userTr = generateUserEl(user);

    usersList.append(userTr);
}

function generateUserEl(user) {
    return htmlToElement(
        userTemplate
            .replace('{{id}}', user.id)
            .replace('{{name}}', user.name)
            .replace('{{email}}', user.email)
            .replace('{{surname}}', user.surname || '-')
    );
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function resetUserForm() {
    userForm.reset();
    document.getElementById('idInput').value = '';
}
