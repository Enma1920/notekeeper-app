import { UpdateNoteForm } from "./UpdateNoteForm";
import {useState} from 'react';
export const UpdateButton = ({setNote, noteId, noteName, noteDescription, noteImportant, noteStatus, noteDueDate}) => {
    const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
    const handleVisibleUpdateForm = (newValue )=> {
        setVisibleUpdateForm(newValue);
    }

    const handleUpdate=()=>{
        handleVisibleUpdateForm(true);
    }


    const styles = {
        btnUpdate: {
            backgroundColor: 'rgb(148 218 129)',
            color: 'rgb(23 108 0)',
            fontWeight: 'bold',

            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '10px',
            margin: '10px'
        }
    }
    return (
        <>
                <button onClick={handleUpdate} style={styles.btnUpdate} className="section_article__update">Edit note</button>
                {
                    visibleUpdateForm &&
                    <UpdateNoteForm
                        noteId={noteId}
                        setNote={setNote}
                        noteName={noteName}
                        noteDescription={noteDescription}
                        noteImportant={noteImportant}
                        noteStatus={noteStatus}
                        noteDueDate={noteDueDate}
                        visibleUpdateForm={handleVisibleUpdateForm}
                    />
                }
        </>
    )
}