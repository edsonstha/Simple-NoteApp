import { useState } from "react";
import { deleteNote } from "./Delete";
import { SavedColorNotes } from "./sharedFile/ColorSaved";
import "./Note.css";

// tyo save garye ko data lai display garcha
export function DisplayNote({ notes, currentTheme, setNotes }) {
  const boxBackground =
    currentTheme === "White" ? "#1E2022" : "#EAE8E4";

  const defaultTextColor =
    currentTheme === "White" ? "#ffffff" : "#000000";

  const [editingIndex, setEditingIndex] = useState(null);
  const [editNotes, setEditNotes] = useState("");

  const saveEdit = (index) => {
    const updateNotes = [...notes];

    updateNotes[index].text = editNotes;

    setNotes(updateNotes);

    setTimeout(() => {
      setEditingIndex(null);
    }, 1000);
  };

  

  return (
    <>
      {notes.map((note, index) => {
        return (
          <div
            key={index}
            className="note"
            style={{ backgroundColor: boxBackground }}
          >
            {editingIndex === index ? (
              <>
                <textarea
                  placeholder="Type Your Notes Here......"
                  className="InputDataText"
                  style={{
                    color: note.color || defaultTextColor,
                    backgroundColor: boxBackground,
                  }}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                />
{/* 
                {updateMessage && (
                  <p style={{ color: "green" }} className="saveMessage">
                    {buttonText === 'Update'? 
                    "Update" : "Save "
                  }"Successfully!"
                  </p>
                )} */}
              </>
            ) : (
              <pre
                className="note-text-content"
                style={{
                  color: note.color || defaultTextColor,
                }}
              >
                {note.text}
              </pre>
            )}

            {editingIndex === index ? (
              <SavedColorNotes
                buttonText="Update"
                saveNote={() => saveEdit(index)}
                colorSelect={(color) => {
                  const updateNotes = [...notes];
                  updateNotes[index].color = color;
                  setNotes(updateNotes);
                }}
              />
            ) : (
              <div
                className={`note-date ${
                  currentTheme === "White"
                    ? "dark"
                    : "white"
                }`}
              >
                {note.currentDate}

                <img
                  src="/icon/edit.png"
                  alt="Edit Pic"
                  className={`edit-icon ${
                    currentTheme === "White"
                      ? "dark"
                      : "white"
                  }`}
                  onClick={() => {
                    setEditingIndex(index);
                    setEditNotes(note.text);
                  }}
                />

                <img
                  src="/icon/bin.png"
                  alt="delete pic"
                  className={`trash-pic ${
                    currentTheme === "White"
                      ? "dark"
                      : "white"
                  }`}
                  onClick={() => {
                    deleteNote(index, notes, setNotes);
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}