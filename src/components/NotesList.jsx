// import {useState, useEffect} from "react";
import Read from "../services/notes/Read";
export const NotesList = () =>{
    // const [notes, setNotes] = useState([]);
    // useEffect(() =>{
    //     fetch('http://localhost:8080/notes')
    //     .then((response) => response.json())
    //     .then((notes) => setNotes(notes));
        
    // }, [])
    


    return(
        <div>
            <h1>Notes List: </h1>
            <ul>

            {Read().notes.map((note) => (
                <li key={note.id}>{note.description}</li>
            ))}
            </ul>
        </div>
    )
}
