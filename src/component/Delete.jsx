
export function deleteNote(index, notes, setNotes) {
//   const updatedNotes = notes.filter((_, i) => i !== index);
//   setNotes(updatedNotes);
const updatedNotes = [...notes];
updatedNotes.splice(index,1);
setNotes(updatedNotes);
}