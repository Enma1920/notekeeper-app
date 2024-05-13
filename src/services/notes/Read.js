import { useEffect, useState } from "react";

const Read = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/notes")
        .then((response) => response.json())
        .then((notes) => setNotes(notes));
    
    }, []);
    return notes;
    

    
};
export default Read;

