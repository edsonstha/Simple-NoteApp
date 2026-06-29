import { useState } from "react";
import "../Note.css";
//tyo save garni button and color selection are shared
export function SavedColorNotes({
  buttonText = "Save",
  saveNote,
  noteText,
  setnoteText,
  textColor,
  notes,
  setNotes,
  currentTheme,
  colorSelect,
}) {
  const [showSaved, setShowSaved] = useState(false);
  function DisplaySave() {
    setShowSaved(true);
    setTimeout(() => {
      setShowSaved(false);
    }, 1000);
  }

  return (
    <>
      {showSaved && (
        <p style={{ color: "green" }} className="saveMessage">
          {buttonText === "Update" ? "Update " : "Save "}
          Successfully!
        </p>
      )}
      <div className="submit-textColor">
        <span className="color-text" onClick={() => colorSelect("#FF9AA2")}>
          🔴
        </span>
        <span className="color-text" onClick={() => colorSelect("#B3EAFF")}>
          🔵
        </span>
        <span className="color-text" onClick={() => colorSelect("#E8CFFF")}>
          🟣
        </span>
        <span className="color-text" onClick={() => colorSelect("#FFDAC1")}>
          🟠
        </span>
        <span className="color-text" onClick={() => colorSelect("#C7CEEA")}>
          🟢
        </span>

        <button
          className="SaveButton"
          onClick={() => {
            saveNote({
              noteText,
              setnoteText,
              textColor,
              notes,
              setNotes,
              currentTheme,
            });
            DisplaySave();
          }}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
