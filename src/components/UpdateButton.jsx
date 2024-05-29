export const UpdateButton = () => {
    const styles = {
        btnUpdate: {
            backgroundColor: 'rgb(148 218 129)',
            color: 'rgb(23 108 0)',
            fontWeight: 'bold',

            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '10px',
            margin: '10px'
        }
    }
    return (
        <button style={styles.btnUpdate} className="section_article__update">Edit note</button>
    )
}