import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import { nanoid } from "nanoid";

const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [addNote, setAddNote] = useState([]);

  const handleInputText = () => {
    if (inputText.trim()) {
      const newTodoItem = {
        id: nanoid(),
        text: inputText,
        completed: false,
      };

      setAddNote([...addNote, newTodoItem]);
    }
  };

  const handleEditNote = (id, newText) => {
    setAddNote(
      addNote.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  const handleDeleteNote = (id) => {
    setAddNote(addNote.filter((todo) => todo.id != id));
  };

  const toggleCompletion = (id) => {
    setAddNote(
      addNote.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 mt-6 md:flex md:flex-row ">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="type your task"
          className="px-10 p-2 rounded-xl outline-none "
        />
        <button
          onClick={handleInputText}
          className=" bg-gradient-to-r to-emerald-400 from-sky-400 p-2 px-7 rounded-xl font-semibold "
        >
          Add
        </button>
      </div>
      <div>
        <ToDoItem
          Notetext={addNote}
          EditText={handleEditNote}
          DeleteText={handleDeleteNote}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </div>
  );
};

export default ToDoList;
