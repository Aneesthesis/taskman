import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

export const TaskList = ({ addedList, startedList, completedList }) => {
  return (
    <div>
      <main className="flex justify-around my-8">
        <Droppable droppableId="added">
          {(provided, snapshot) => (
            <div
              className={`task-list added ${
                snapshot.isDraggingOver ? "drag-added" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2>Added Tasks</h2>
              {addedList.map((task, index) => (
                <TaskItem
                  index={index}
                  key={index}
                  task={task}
                  status="added"
                  // onButtonClick={() => startTask(index)}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="started">
          {(provided, snapshot) => (
            <div
              className={`task-list started ${
                snapshot.isDraggingOver ? "drag-started" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2>Started Tasks</h2>
              {startedList.map((task, index) => (
                <TaskItem
                  index={index}
                  key={index}
                  task={task}
                  status="started"
                  // onButtonClick={() => completeTask(index)}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completed">
          {(provided, snapshot) => (
            <div
              className={`task-list completed ${
                snapshot.isDraggingOver ? "drag-completed" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2>Completed Tasks</h2>
              {completedList.map((task, index) => (
                <TaskItem
                  index={index}
                  key={index}
                  task={task}
                  status="completed"
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </main>
    </div>
  );
};

//   const startTask = (taskIndex) => {
//     const taskToStart = addedList[taskIndex];
//     setStartedList((prevList) => [...prevList, taskToStart]);
//     setAddedList((prevList) =>
//       prevList.filter((_, index) => index !== taskIndex)
//     );
//   };

//   const completeTask = (taskIndex) => {
//     const taskToComplete = startedList[taskIndex];
//     setCompletedList((prevList) => [...prevList, taskToComplete]);
//     setStartedList((prevList) =>
//       prevList.filter((_, index) => index !== taskIndex)
//     );
//   };
