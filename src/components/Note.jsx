import { UpdateButton}  from "./UpdateButton";
import { DeleteButton}  from "./DeleteButton";

// 
export const Note = ({ note }) => {
    return(
        
            <article className="section-article" key={note.id}>
            <h2 className="section_article__title">Note name: {note.name}</h2>
            <p className="section_article__description">Description: {note.description}</p>
            <p className="section_article__important">Important: {note.important.toString()}</p>
            <p className="section_article__status">Status: {note.status
            }</p>
            <p className="section_article__duedate">Due date: {note.due_date}</p>
            <p>Created at: {new Date(note.created_at).toLocaleString()}</p>
            <UpdateButton />
            <DeleteButton noteId={note.id} noteName= {note.name} />
            <br />  
            </article> 
    );
};