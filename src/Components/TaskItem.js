import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = ({ task, status, index }) => {
  console.log(task);
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-item ${status} ${
            snapshot.isDragging ? "text-lg" : "text-md"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.task}
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
