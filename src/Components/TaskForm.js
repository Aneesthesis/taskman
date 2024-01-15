import React, { useState } from "react";
import Add from "../UI/Add";

const TaskForm = ({ addTaskToList }) => {
  const [taskFormInput, setTaskFormInput] = useState(" ");

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
        className="form flex justify-between w-1/2 mx-auto border border-blue-300 focus:shadow-md"
      >
        <input
          className="flex-grow text-lg text-center outline-none"
          onChange={(e) => setTaskFormInput(e.target.value)}
          value={taskFormInput}
          type="text"
        />
        <button>
          <Add />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
