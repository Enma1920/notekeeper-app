import { useNotes } from "../hooks/useNotes";


export const DeleteButton = ({noteId, noteName}) =>{
    const {handleDeleteNote} = useNotes();
    
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
    const handleDelete= () =>{
        handleDeleteNote(noteId, noteName);
    }
        

        return (
            <button onClick={handleDelete} style={styles.btnDelete} className="section-article__delete">Delete</button>
        )
    
    

    
}