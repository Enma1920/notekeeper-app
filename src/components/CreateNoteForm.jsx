// import { useState} from "react";
import useNotes from "../hooks/useNotes";
import useForm from "../hooks/useForm";

export const CreateNoteForm = () =>{
    const {createNote, notes, handleUpdateNote} = useNotes();

    const{
        newName,
        setNewName,
        newDescription,
        setNewDescription,
        newImportant,
        setNewImportant,
        newStatus,
        setNewStatus,
        newDueDate,
        setNewDueDate,
        handleChangeNewName,
        handleChangeNewDescription,
        handleChangeNewImportant,
        handleChangeNewStatus,
        handleChangeNewDueDate,
    } = useForm();
    


    const handleNewNote = (event) =>{
        event.preventDefault();

        const newNote = {
            name: newName,
            description: newDescription,
            important: Boolean(newImportant),
            status: newStatus,
            due_date: newDueDate,
        }
        handleUpdateNote([...notes, createNote(newNote)]);
        setNewName("");
        setNewDescription("");
        setNewImportant(false);
        setNewStatus("");
        setNewDueDate("");
    }

    

    return (
        <form onSubmit={handleNewNote}>
            <h2>Create new note:</h2>
            <label htmlFor="noteName"> Name: </label>
            <input type="text" id="noteName" name="noteName" value={newName} onChange={handleChangeNewName} required/>
            <br/>
            <label htmlFor="noteDescription"> Description: </label>
            <input type="text" id="noteDescription" name="noteDescription" value={newDescription} onChange={handleChangeNewDescription} required/>
            <br/>
            <label htmlFor="noteImportant"> Important: </label>
            <input type="text" id="noteImportant" name="noteImportant" value={newImportant} onChange={handleChangeNewImportant}/>
            <br/>
            <label htmlFor="noteStatus"> Status: </label>
            <select name="Status" id="noteStatus" value={newStatus} onChange={handleChangeNewStatus}>
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <br/>
            <label htmlFor="noteDueDate"> Due Date: </label>
            <input type="date" id="noteDueDate" name="noteDueDate" value={newDueDate} onChange={handleChangeNewDueDate} required/>
            <br/>
            <button type="submit">Create</button>
        </form>
    )
}