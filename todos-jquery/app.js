const LOCALSTORAGE_KEY = 'todos';
const TODO_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';

const $addTaskForm = $('#addTaskForm');
const $taskNameInput = $('#taskNameInput');
const $taskList = $('#taskList');
const taskItemTemplate = $('#taskItemTemplate').html();
let dialog;
let todos = [];
// $addTaskForm.on('submit', onAddTaskFormSubmit);
$taskList.on('click', '.task-item', onTaskItemClick);
$taskList.on('click', '.delete-btn', onDeleteBtnClick);

$('#addTodoBtn').on('click', onAddTodoBtnClick);

init();

function onAddTodoBtnClick() {
    console.log('clicked');

    dialog.dialog('open');
}
function onTaskItemClick(e) {
    toggleTodo($(e.target).data('id'));
}

function onDeleteBtnClick(e) {
    e.stopPropagation();
    deleteTodo(
        $(e.target)
            .parent()
            .data('id')
    );
}

function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
}

function init() {
    initDialog();
    getTodos();
}

function initDialog() {
    dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 200,
        width: 350,
        modal: true,
        buttons: {
            Create: function() {
                submitForm();
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            $taskNameInput.val('');
        }
    });
}

function getTodos() {
    restoreState();
    renderTodos(todos);
}

function renderTodos(data) {
    $taskList.html(data.map(generateTodoHtml).join('\n'));
}

function generateTodoHtml(todo) {
    return taskItemTemplate
        .replace('{{id}}', todo.id)
        .replace('{{title}}', todo.title)
        .replace('{{completeClass}}', todo.isDone ? 'done' : '');
}

function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    todo.isDone = !todo.isDone;

    saveState();

    renderTodos(todos);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveState();

    renderTodos(todos);
}

function submitForm() {
    const todo = {
        id: Date.now(),
        title: $taskNameInput.val(),
        isDone: false
    };

    $addTaskForm.serializeArray().forEach(({ name, value }) => {
        todo[name] = value;
    });

    addTodo(todo);

    saveState();
}

function addTodo(todo) {
    todos.push(todo);

    renderTodos(todos);
}

function saveState() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
}

function restoreState() {
    todos = localStorage.getItem(LOCALSTORAGE_KEY);

    todos = todos ? JSON.parse(todos) : [];
}
