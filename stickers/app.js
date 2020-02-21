const LOCALSTORAGE_KEY = 'notes';

const DELETE_NOTE_CLASS = 'delete-note';
const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';

const noteTemplate = document.getElementById('noteTemplate').innerHTML;
const fieldElement = document.getElementById('field');

let notesList = [];

document
    .getElementById('addNoteBtn')
    .addEventListener('click', onAddNoteBtnClick);
document
    .getElementById('clearAllBtn')
    .addEventListener('click', onClearAllBtnClick);
fieldElement.addEventListener('click', onFieldElementClick);
fieldElement.addEventListener('focusout', onFieldElementFocusout);
init();

function onAddNoteBtnClick() {
    createNote();
}

function onClearAllBtnClick() {
    clearAll();
}

function onFieldElementClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_NOTE_CLASS):
            deleteNote(e.target.parentElement.dataset.noteIndex);
            break;
    }
}

function onFieldElementFocusout(e) {
    const element = e.target;

    switch (true) {
        case e.target.classList.contains(EDIT_NOTE_CONTROL_CLASS):
            updateNote(
                element.parentElement.dataset.noteIndex,
                element.name,
                element.value
            );
            break;
    }
}

function init() {
    restoreState();
    renderList();
}

function getNoteElement(id) {
    return fieldElement.querySelector(`[data-note-index="${id}"]`);
}

function createNote() {
    const note = {
        id: Date.now(),
        description: ''
    };

    notesList.push(note);

    saveState();
    renderNote(note);
}

function updateNote(id, name, value) {
    const note = notesList.find(el => el.id == id);

    note[name] = value;
    saveState();
}

function deleteNote(id) {
    notesList = notesList.filter(el => el.id != id);
    saveState();

    deleteNoteElement(id);
}

function deleteNoteElement(id) {
    const element = getNoteElement(id);

    element && element.remove();
}

function clearAll() {
    notesList = [];
    saveState();
    fieldElement.innerHTML = '';
}

function renderList() {
    notesList.forEach(renderNote);
}

function renderNote(note) {
    fieldElement.insertAdjacentHTML('beforeEnd', getNoteHtml(note));
}

function getNoteHtml(note) {
    return noteTemplate
        .replace('{{id}}', note.id)
        .replace('{{description}}', note.description);
}

function saveState() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notesList));
}

function restoreState() {
    notesList = localStorage.getItem(LOCALSTORAGE_KEY);

    notesList = notesList ? JSON.parse(notesList) : [];
}
