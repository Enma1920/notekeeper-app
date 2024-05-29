import { NotesList, UpdateNoteForm, CreateNoteForm } from "./components";
import { useNotes } from "./hooks/useNotes";

function App()  {

  const {notes} = useNotes();
  return (
    <>
        <main className="main-content">
        <NotesList notes={notes} />
        <UpdateNoteForm />
        <CreateNoteForm />
        </main>

    </>


  )
}

export default App
