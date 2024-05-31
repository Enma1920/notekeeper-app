import { useState } from 'react';
const useUpdate = (initialValue) => {
    const [updateName, setUpdateName] = useState(initialValue.name);
    const [updateDescription, setUpdateDescription] = useState(initialValue.description);
    const [updateImportant, setUpdateImportant] = useState(initialValue.important);
    const [updateStatus, setUpdateStatus] = useState(initialValue.status);
    const [updateDueDate, setUpdateDueDate] = useState(initialValue.due_Date);

    const handleNameValueUpdate = (event) =>{
        setUpdateName(event.target.value);
    }
    const handleDescriptionValueUpdate = (event) =>{
        setUpdateDescription(event.target.value);
    }
    const handleImportantValueUpdate = (event) =>{
        setUpdateImportant(event.target.value);
    }
    const handleStatusValueUpdate = (event) =>{
        setUpdateStatus(event.target.value);
    }
    const handleDueDateValueUpdate = (event) =>{
        setUpdateDueDate(event.target.value);
    }

    return{

        updateName,
        updateDescription,
        updateImportant,
        updateStatus,
        updateDueDate,
        setUpdateDueDate,
        handleNameValueUpdate,
        handleDescriptionValueUpdate,
        handleImportantValueUpdate,
        handleStatusValueUpdate,
        handleDueDateValueUpdate,
    }


}
export default useUpdate;
