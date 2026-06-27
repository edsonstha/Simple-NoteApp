import { useState, useRef } from "react";
import { saveNote } from "./NoteSave";
import "./Note.css";

export function InputNoteData({ notes, setNotes, currentTheme }) {
  const [textColor, setTextColor] = useState("");
  const [noteText, setnoteText] = useState(""); //This is only for getting data then send to the array

  const textareaRef = useRef(null);
  const colorSelect = (color) => {
    setTextColor(color);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    // document.querySelect/or(".InputDataText").style.color = color;
  };

  function handleChange(event) {
    let InputValue = event.target.value;
    setnoteText(InputValue);
  }

  const boxBackground = currentTheme === "White" ? "#1E2022" : "#EAE8E4";
  const elementTextColor = currentTheme === "White" ? "#ffffff" : "#000000";

  return (
    <div className="InputData" style={{ backgroundColor: boxBackground }}>
      <div className="InputData-Content">
        <textarea
          ref={textareaRef}
          placeholder="Type Your Notes Here......"
          className="InputDataText"
          style={{ color: textColor || elementTextColor, backgroundColor: boxBackground }}
          value={noteText}
          onChange={handleChange}
        />

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
            onClick={() =>
              saveNote({
                noteText,
                setnoteText,
                textColor,
                notes,
                setNotes,
                currentTheme,
              }
              )
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
