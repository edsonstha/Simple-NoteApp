
import { deleteNote } from "./Delete";
import "./Note.css";

export function DisplayNote({ notes, currentTheme, setNotes }) {
  const boxBackground = currentTheme === "White" ? "#1E2022" : "#EAE8E4";
  const defaultTextColor = currentTheme === "White" ? "#ffffff" : "#000000";

  return (
    <>
      {notes.map((note, index) => {
        return (
          <div 
            key={index} 
            className="note" 
            style={{ backgroundColor: boxBackground }}
          >
            <pre 
              className="note-text-content" 
              style={{ color: note.color || defaultTextColor }}
            >
              {note.text}
            </pre>
            <div className={`note-date ${currentTheme === 'White'? 'dark' : 'white'}`}>
              {note.currentDate}
              <img src="/icon/bin.png" alt="delete pic" 
              className={`trash-pic ${currentTheme === 'White'? 'dark' : 'white'}`}
              onClick={()=> {deleteNote(index, notes, setNotes)}}/>
            </div>
          </div>
        );
      })}
    </>
  );
}