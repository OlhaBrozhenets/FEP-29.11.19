let serverData;

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log('first');
        return response.json();
    })
    .then(data => {
        serverData = data;
        console.log('second', msg);
    });
