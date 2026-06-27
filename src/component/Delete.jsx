
//tyo list wala data lai delete garcha
export function deleteNote(index, notes, setNotes) {

const updatedNotes = [...notes];
updatedNotes.splice(index,1);
setNotes(updatedNotes);
}