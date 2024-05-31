import { useState } from "react";

const useForm = () => {
    // const {notes, setNotes} = useState([]);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newImportant, setNewImportant] = useState(false);
    const [newStatus, setNewStatus] = useState("");
    const [newDueDate, setNewDueDate] = useState("");

    const handleChangeNewName = (event) =>{
        setNewName(event.target.value);
    }
    const handleChangeNewDescription = (event) =>{
        setNewDescription(event.target.value);
    }
    const handleChangeNewImportant = (event) =>{
        setNewImportant(event.target.value);
    }
    const handleChangeNewStatus = (event) =>{
        setNewStatus(event.target.value);
    }
    const handleChangeNewDueDate = (event) =>{
        setNewDueDate(event.target.value);
    }

    return{

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
    }
}
export default useForm;