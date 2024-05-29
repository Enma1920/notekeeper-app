import { useState, useEffect } from "react";
import {notesServices} from "../services/notes/notesServices";

export const useNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        notesServices.readNote().then((data) => {
            setNotes(data.notes)
        })
    }, []);
    
    const createNote = (newNote) => {
        const create = notesServices.createNote(newNote).then((newNote) => {
            return newNote;
        })
        return create;
    }

    const handleDeleteNote = (noteId, noteName) => {
        const response = window.confirm(`Are you sure you want to delete this note? ${noteName}`);

        if (response) {
            notesServices.deleteNote(noteId)
            .then(() => {
                notesServices.readNote().then((data) => {
                    setNotes(data.notes);
                });
            })
        }
    }


    const handleUpdateNote = (id, updatedNote) =>{
        const noteExists = notes.some((note) => note.id === id);
        if(noteExists){
            const response = window.confirm("Are you sure you want to update this note?");
            if(response){
                
                notesServices.updateNote(id, updatedNote).then((updatedNote)=>{
                    setNotes(notes.map((note)=> note.id !==id? note: updatedNote));
                })
                .catch((error) => console.error("Error:", error));
            }
            
        }
    };


    return{
        notes,
        setNotes,
        createNote,
        handleDeleteNote,
        handleUpdateNote,
    };
};