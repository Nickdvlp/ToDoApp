import React from "react";
import ToDoList from "./ToDoList";

const Header = () => {
  return (
    <div className="bg-gradient-to-r to-emerald-300 from-sky-100 h-screen">
      <div className="flex justify-center gap-5 items-start  ">
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl m-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            To-Do{" "}
          </span>
          List
        </h1>
      </div>
      <div>
        <ToDoList />
      </div>
    </div>
  );
};

export default Header;
