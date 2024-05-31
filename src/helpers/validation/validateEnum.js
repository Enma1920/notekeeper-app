/**Returns true if the note status corresponds to one of the allowed values, otherwise returns false
 *
 * @param {object} notes
 * @returns boolean
 */
export const validateEnum = (note) => {
  const allowedStatus = ["pending", "in progress", "done"];
  if (allowedStatus.includes(note.status)) {
    return true;
  }
  return false;
};
