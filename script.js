function Person(name, surname) {
    this.surname = surname;
    this._name = name;
}
Person.prototype.getName = () => {
    return 'Mr. ' + this._name;
};

Person.prototype.setName = neWname => {
    console.log('Blocked');
};

const bob = new Person('Bob', 'Smith');

// bob.name = 'John';

console.log(`${bob.name} ${bob.surname}`);
