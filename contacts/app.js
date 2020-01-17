const contactFrom = document.querySelector('#newContactForm');
const contactsList = document.querySelector('#contactsList');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const formInputs = document.querySelectorAll('.form-input');

contactFrom.addEventListener('submit', onContactFormSubmit);

contactFrom.addEventListener('focus', onContactFormFocus, true);
contactFrom.addEventListener('blur', onContactFormBlur, true);

contactsList.addEventListener('click', onContactsListClick);
addContact({ name: 'Alex', phone: '111' });

function onContactFormSubmit(e) {
    e.preventDefault();
    submitContact();
}

function onContactsListClick(event) {
    if (event.target.classList.contains('delete-btn')) {
        removeContact(event.target.closest('.contact-row'));
    }
}

function onContactFormBlur(e) {
    if (!validate(e.target.value)) {
        makeInvalid(e.target);
    }
}

function onContactFormFocus(e) {
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

function removeContact(el) {
    el.remove();
}

function submitContact() {
    if (validateInputs()) {
        const contact = getNewContact();

        addContact(contact);
        resetContactForm();
    }
}

function validateInputs() {
    let isValid = true;

    for (let i = 0; i < formInputs.length; i++) {
        if (!validate(formInputs[i].value)) {
            makeInvalid(formInputs[i]);

            isValid = false;
        }
    }

    return isValid;
}

function getNewContact() {
    const obj = {};

    for (let i = 0; i < formInputs.length; i++) {
        obj[formInputs[i].name] = formInputs[i].value;
    }

    return obj;
}

function addContact(contact) {
    const contactTr = document.createElement('tr');
    contactTr.className = 'contact-row';

    contactTr.innerHTML = contactTemplate
        .replace('{{name}}', contact.name)
        .replace('{{phone}}', contact.phone)
        .replace('{{surname}}', contact.surname || '-');

    contactsList.appendChild(contactTr);
}

function resetContactForm() {
    contactFrom.reset();
}
