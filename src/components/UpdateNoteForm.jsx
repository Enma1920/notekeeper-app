import { notesServices } from "../services/notes/notesServices";
import useUpdate from "../hooks/useUpdate";
import useNotes from "../hooks/useNotes";

export const UpdateNoteForm = ({
  noteId,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDueDate,
  visibleUpdateForm,
}) => {
  const { notes, handleUpdateNote } = useNotes();
  const {
    updateName,
    updateDescription,
    updateImportant,
    updateStatus,
    updateDueDate,
    handleNameValueUpdate,
    handleDescriptionValueUpdate,
    handleImportantValueUpdate,
    handleStatusValueUpdate,
    handleDueDateValueUpdate,
  } = useUpdate({
    name: noteName,
    description: noteDescription,
    important: Boolean(noteImportant),
    status: noteStatus,
    due_date: noteDueDate,
  });

  const updateNoteEvent = (event) => {
    event.preventDefault();
    const updatedNote = {
      name: updateName,
      description: updateDescription,
      important: Boolean(updateImportant),
      status: updateStatus,
      due_date: updateDueDate,
    };
    handleUpdate(noteId, updatedNote);
  };
  const handleUpdate = (id, updatedNote) => {
    const noteExists = notes.some((note) => note.id === id);
    if (noteExists) {
      const response = window.confirm(
        "Are you sure you want to update this note?",
      );
      if (response) {
        notesServices
          .updateNote(id, updatedNote)
          .then((updatedNote) => {
            handleUpdateNote(
              notes.map((note) => (note.id !== id ? note : updatedNote)),
            );
            notesServices.readNote().then((notes) => {
              handleUpdateNote(notes);
            });
          })

          .finally(() => {
            visibleUpdateForm(false);
          });
      }
    }
  };

  return (
    <form onSubmit={updateNoteEvent} className="article__form">
      <h2 className="article__title">Edit note</h2>

      <label htmlFor="article__name">Note name:</label>
      <input
        type="text"
        id="article__name"
        name="title"
        value={updateName}
        onChange={handleNameValueUpdate}
      />

      <label htmlFor="article__description">Description:</label>
      <input
        type="text"
        id="article__description"
        name="description"
        value={updateDescription}
        onChange={handleDescriptionValueUpdate}
      />

      <label htmlFor="article__important">Important:</label>
      <input
        type="text"
        id="article__important"
        name="important"
        value={updateImportant}
        onChange={handleImportantValueUpdate}
      />

      <label htmlFor="article__status">Status:</label>
      <select
        id="article__status"
        name="status"
        value={updateStatus}
        onChange={handleStatusValueUpdate}
      >
        <option value="pending">Pending</option>
        <option value="in progress">In progress</option>
        <option value="done">Done</option>
      </select>

      <label htmlFor="article__duedate">Due date:</label>
      <input
        type="date"
        id="article__duedate"
        value={updateDueDate}
        onChange={handleDueDateValueUpdate}
      />

      <button className="article__submit">Update note</button>
    </form>
  );
};
