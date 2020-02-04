const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

getTodos();

function getTodos() {
    fetch(TODOS_URL)
        .then(response => response.json())
        .then(renderTodos);
}

function renderTodos(list) {
    list.forEach(addTask);
}

function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
}

function onTaskListClick(e) {
    const classList = e.target.classList;

    switch (true) {
        case classList.contains('task-item'):
            toggleTaskState(e.target);
            break;
        case classList.contains('delete-btn'):
            deleteTask(e.target.parentNode);
            break;
    }
}

function submitForm() {
    const task = { title: taskNameInput.value };

    addTask(task);
    resetForm();
}

function addTask(task) {
    const html = taskItemTemplate
        .replace('{{id}}', task.id)
        .replace('{{title}}', task.title)
        .replace('{{completeClass}}', task.completed ? 'done' : '');

    // taskList.innerHTML = taskList.innerHTML + html;

    const newTaskEl = htmlToElement(html);
    taskList.appendChild(newTaskEl);
}

function deleteTask(el) {
    console.log(el.dataset.id);
    fetch(`${TODOS_URL}/${el.dataset.id}`, {
        method: 'DELETE'
    });

    el.remove();
}

function resetForm() {
    addTaskForm.reset();
}

function toggleTaskState(el) {
    el.classList.toggle('done');
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
