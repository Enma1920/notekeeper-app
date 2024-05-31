import useNotes  from "../hooks/useNotes";
import {notesServices} from "../services/notes/notesServices";


export const DeleteButton = ({noteId, noteName}) =>{
    const {handleUpdateNote} = useNotes();    
    const styles = {
        btnDelete : {
            backgroundColor: '#ff8787',
            color: '#860000',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '10px',
            margin: '10px'
        }
    }
    const handleDeleteNote = (noteId, noteName) => {
        const response = window.confirm(`Are you sure you want to delete this note? ${noteName}`);

        if (response) {
            notesServices.deleteNote(noteId)
            .then(() => {notesServices.readNote()})
            .then((data) => {handleUpdateNote(data.notes)})
            .catch((error) => {console.error(error)});
            
        }
    }


        return (
            <button onClick={()=>handleDeleteNote(noteId, noteName)} style={styles.btnDelete} className="section-article__delete">Delete</button>
        )
    
    

    
}