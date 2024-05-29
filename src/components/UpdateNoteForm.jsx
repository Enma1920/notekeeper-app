export const UpdateNoteForm = () => {
    return (
        <form className="article__form">
            <h2 className="article__title">Edit note</h2>

            <label htmlFor="article__name">Note name:</label>
            <input type="text" id="article__name" name="title" />

            <label htmlFor="article__description">Description:</label>
            <input type="text" id="article__description" name="description" />

            <label htmlFor="article__important">Important:</label>
            <input type="text" id="article__important" name="important" />

            <label htmlFor="article__status">Status:</label>
            <select id="article__status" name="status">
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
            </select>

            <label htmlFor="article__duedate">Due date:</label>
            <input type="date" id="article__duedate" name="duedate" />

            <button className="article__submit">Update note</button>
        </form>
    )
}