import dayjs from "dayjs";
//tyo data lerako part lai useState bata use garera store garcha
export function saveNote({
  noteText,
  setnoteText,
  textColor,
  setNotes,
  currentTheme,
}) {
    if(noteText.trim() === '')return;

  const currentDate = dayjs().format("YYYY MMM DD ");

  
  const defaultColor = currentTheme === "White" ? "#ffffff" : "#000000";

  const newNote = {
    text: noteText,
    currentDate: currentDate,
    color: textColor || defaultColor,
  };
  setNotes((preNotes) => [...preNotes, newNote]);
  setnoteText("");
}
