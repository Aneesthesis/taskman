import React, { useState, useMemo } from "react";
import TaskItem from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

const TaskList = React.memo(({ addedList, startedList, completedList }) => {
  const memoizedAddedList = useMemo(
    () =>
      addedList.map((task, index) => (
        <TaskItem index={index} key={index} task={task} status="added" />
      )),
    [addedList]
  );

  const memoizedStartedList = useMemo(
    () =>
      startedList.map((task, index) => (
        <TaskItem index={index} key={index} task={task} status="started" />
      )),
    [startedList]
  );

  const memoizedCompletedList = useMemo(
    () =>
      completedList.map((task, index) => (
        <TaskItem index={index} key={index} task={task} status="completed" />
      )),
    [completedList]
  );

  return (
    <div>
      <main className="flex  flex-col md:flex-row justify-center md:justify-around my-8">
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
              {addedList.length > 0 ? (
                memoizedAddedList
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No Task in this Category
                </div>
              )}
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
              {startedList.length > 0 ? (
                memoizedStartedList
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No Task in this Category
                </div>
              )}
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
              {completedList.length > 0 ? (
                memoizedCompletedList
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No Task in this Category
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </main>
    </div>
  );
});

export default TaskList;
