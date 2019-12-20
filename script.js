const constactsList = [
    {
        name: 'Alex',
        surname: 'Smith'
    },
    {
        name: 'Bob',
        surname: 'Thomson'
    },
    {
        name: 'Tim',
        surname: 'Thomson'
    },
    {
        name: 'Tom',
        surname: 'Thomson'
    }
];

constactsList.forEach(item => console.log(item));

const namesList = constactsList.map(item => {
    return item.name;
});

namesList.join();
