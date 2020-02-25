$(function() {
    let notes = [];
    const noteTemplate = $('#noteTemplate').html();
    const $field = $('#field');
    const form = dialog.find('form').on('submit', onFormSubmit);
    const dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            'Create Note': addNote,
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            form[0].reset();
        }
    });

    $('#addNoteBtn').on('click', () => dialog.dialog('open'));
    $('#clearAllBtn').on('click', clearAll);
    $field.on('click', '.delete-note', onDeleteNoteClick);

    init();

    function init() {
        restoreNotes();
        renderNotes();
    }

    function restoreNotes() {
        notes = getNotes();
    }

    function renderNotes() {
        notes.forEach(renderNote);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        addNote();
    }

    function onDeleteNoteClick() {
        const $note = $(this).closest('.note');
        const noteId = $note.data('id');

        deleteNoteElement(noteId);

        deleteNote(noteId);
    }

    function deleteNoteElement(id) {
        const $note = $(`.note[data-id="${id}"]`);
        $note && $note.remove();
    }

    function clearAll() {
        localStorage.clear();
        location.reload();

        // notes=[];
        // $('.note').remove();
    }

    function addNote() {
        const note = {};

        form.serializeArray().forEach(v => (note[v.name] = v.value));
        note.id = Date.now();
        notes.push(note);
        saveNotes();
        renderNote(note);
        dialog.dialog('close');
    }

    function deleteNote(id) {
        notes = notes.filter(note => note.id !== id);
        saveNotes();
    }

    function renderNote(note) {
        const $note = $(
            noteTemplate
                .replace('{{title}}', note.title)
                .replace('{{description}}', note.description)
        )
            .css({
                left: note.left,
                top: note.top,
                width: note.width,
                height: note.height
            })
            .data('id', note.id);
        $field.append($note);

        $note
            .draggable({
                handle: 'h5',
                stop: function(e, ui) {
                    updateNote(note.id, ui.position);
                }
            })
            .resizable({
                stop: function(e, ui) {
                    updateNote(note.id, ui.size);
                }
            });
    }

    function updateNote(id, changes) {
        notes = notes.map(note =>
            note.id != id ? note : { ...note, ...changes }
        );
        saveNotes();
    }

    // LocalStorage
    function saveNotes() {
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function getNotes() {
        const notes = localStorage.getItem('notes');

        return notes ? JSON.parse(notes) : [];
    }
});
