const URL_NOTES = import.meta.env.VITE_ENV;

export const readNote = () => {
    const request=  fetch(`${URL_NOTES}/notes`)
    .then((response) => {
        return response.json()
    })
    return request;
    
};


export const createNote = (newNote) => {
    const request= fetch(`${URL_NOTES}/notes`, {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
    })
    .then((response)=>  {
        return response.json()
    })

    return request;
}

export const updateNote = (noteIdToUpdate, updatedNote) => {
    const request= fetch(`${URL_NOTES}/notes/${noteIdToUpdate}`, {
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNote)
    })
    .then((response)=>  {
        return response.json()
    })
    return request;
}
export const deleteNote = ((noteIdToDelete) =>{
    const request = fetch(`${URL_NOTES}/notes/${noteIdToDelete}`, {
        method: "DELETE",
    })
    .then((response) => {
        return response.json();
    })
    return request;
})

export const notesServices = {
    readNote,
    createNote,
    updateNote,
    deleteNote,
}
