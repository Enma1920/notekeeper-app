import { useState, useEffect } from "react";
import { notesServices } from "../services/notes/notesServices";

const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleUpdateNote = (newNotes) => {
    setNotes(newNotes);
  };

  useEffect(() => {
    notesServices.readNote().then((data) => {
      handleUpdateNote(data.notes);
    });
  }, []);

  const createNote = (newNote) => {
    const create = notesServices.createNote(newNote).then((newNote) => {
      return newNote;
    });
    return create;
  };

  return {
    notes,
    setNotes,
    createNote,
    handleUpdateNote,
  };
};
export default useNotes;
