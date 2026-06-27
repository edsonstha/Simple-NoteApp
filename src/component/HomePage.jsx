import { useState, useEffect } from "react";
import { InputNoteData } from "./NoteForm";
import { DisplayNote } from "./NoteList";
import "./HomePage.css";

export function HomePage() {
  const [notes, setNotes] = useState(() => {
    const saveNotes = localStorage.getItem("notesData");
    return saveNotes ? JSON.parse(saveNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notesData', JSON.stringify(notes));
  }, [notes]);

  const [light, setLight] = useState("Black");

  function toggleLight() {
    if (light === "White") {
      document.body.style.background = "White";
      setLight("Black");
    } else {
      document.body.style.background = "Black";
      setLight("White");
    }
  }

  return (
    <div className={`main-app-container-${light === "Black" ? "dark" : "light"}`}>
      <div className="Header-part">
        <p className="Header-title">Notes</p>
        <span className="toggle-theme" onClick={toggleLight}>
          Toggle Theme
        </span>
      </div>

      <div className="Search-bar-container">
        <span className="search-container-Inside">
          <img src="/icon/searchIcon.png" alt="Search Icon" className="searchIcon" />
          <input type="text" className="SearchBar-Input" placeholder="type to search" />
        </span>
      </div>

      {/* Put the input container and note list together */}
      <div className="notesContainer">
        <div className="noteContainer-inside">
          <InputNoteData notes={notes} setNotes={setNotes} currentTheme={light} />
          <DisplayNote notes={notes} currentTheme={light} setNotes={setNotes}/>
        </div>
      </div>
    </div>
  );
}