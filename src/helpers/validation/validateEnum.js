/**Returns true if the note status corresponds to one of the allowed values, otherwise returns false
 * 
 * @param {object} notes
 * @returns boolean
 */
export const validateEnum = ({note}) =>{
    const allowedStatus = ["pending" , "in progress", "done"];
    for (let status of allowedStatus) {
        if(note.status === status){
            return true;
        }
    }
    return false;
}