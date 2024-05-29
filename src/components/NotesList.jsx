import { Note } from "./Note";

export const NotesList = ({ notes }) => {
    return (
        <>
        <div>
            {notes.map((note) => (
                <Note key={note.id} note={note}  />
            ))}
        </div>

        </>
    )
}
