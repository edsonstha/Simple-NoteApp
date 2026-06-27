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

  
  const defaultColor = currentTheme === "White" ? "White" : "Black";
  if(noteText.trim() === ''){
    alert("Enter Some Text......");
  }
  
  const newNote = {
    text: noteText,
    currentDate: currentDate,
    color: textColor || defaultColor,
    currentTheme: currentTheme
  };
  setNotes((preNotes) => [...preNotes, newNote]);
  setnoteText("");
}
