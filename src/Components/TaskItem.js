import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Hamburger from "../UI/Hamburger";

const TaskItem = ({ task, status, index }) => {
  console.log(task);
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-item flex space-x-2 ${status} ${
            snapshot.isDragging ? "text-lg" : "text-md"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{task.task}</p>
          <button className=" mr-4">
            <Hamburger />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
