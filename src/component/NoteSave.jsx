import dayjs from "dayjs";

//tyo data lerako part lai useState bata use garera store garcha
export function saveNote({
  noteText,
  setnoteText,
  textColor,
  setNotes,
  currentTheme,
}) {

  const currentDate = dayjs().format("YYYY MMM DD ");

  const defaultColor = currentTheme === "White" ? "White" : "Black";
  if(noteText.trim() === ''){
    alert("Enter Some Text......");
    return;
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
