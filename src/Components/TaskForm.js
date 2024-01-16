import React, { useState } from "react";
import Add from "../UI/Add";

const TaskForm = ({ addTaskToList }) => {
  const [taskFormInput, setTaskFormInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (taskFormInput.trim().length === 0) return;
    addTaskToList(taskFormInput);
    setTaskFormInput(" ");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="form flex items-center sm:justify-between w-full sm:w-1/2 mx-auto mt-4"
      >
        <input
          className="flex-grow text-center outline-none p-2 rounded-md border border-blue-300 focus:shadow-md mb-2 sm:mb-0"
          onChange={(e) => setTaskFormInput(e.target.value)}
          value={taskFormInput}
          type="text"
          placeholder="Add new task..."
        />

        <button type="submit" className="w-full sm:w-auto">
          <Add />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
