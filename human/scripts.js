'use strict';

function createPerson() {
    const person = {
        name: prompt('What is you name?'),
        surname: prompt('What is you surname?'),
        age: prompt('What is you age?')
    };

    alert(
        `${person.name.toUpperCase()} ${person.surname.toUpperCase()} age: ${
            person.age
        }`
    );
}

createPerson();
