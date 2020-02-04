const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

getTodos();

function getTodos() {
    fetch(TODOS_URL)
        .then(response => response.json())
        .then(renderTodos);
}

function renderTodos(list) {
    list.forEach(addTask);
}
function addTask(task) {
    const html = taskItemTemplate
        .replace('{{title}}', task.title)
        .replace('{{completeClass}}', task.completed ? 'done' : '');

    // taskList.innerHTML = taskList.innerHTML + html;

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
