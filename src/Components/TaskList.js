import React, { useState, useMemo } from "react";
import TaskItem from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";
import SearchItem from "./SearchItem";

const TaskList = React.memo(({ addedList, startedList, completedList }) => {
  const [addedSearchTerm, setAddedSearchTerm] = useState("");
  const [startedSearchTerm, setStartedSearchTerm] = useState("");
  const [completedSearchTerm, setCompletedSearchTerm] = useState("");

  const filteredAddedList = useMemo(
    () =>
      addedList.filter((task) =>
        task.task.toLowerCase().includes(addedSearchTerm.toLowerCase())
      ),
    [addedList, addedSearchTerm]
  );

  const filteredStartedList = useMemo(
    () =>
      startedList.filter((task) =>
        task.task.toLowerCase().includes(startedSearchTerm.toLowerCase())
      ),
    [startedList, startedSearchTerm]
  );

  const filteredCompletedList = useMemo(
    () =>
      completedList.filter((task) =>
        task.task.toLowerCase().includes(completedSearchTerm.toLowerCase())
      ),
    [completedList, completedSearchTerm]
  );

  const handleAddedSearchChange = (value) => {
    setAddedSearchTerm(value);
  };

  const handleStartedSearchChange = (value) => {
    setStartedSearchTerm(value);
  };

  const handleCompletedSearchChange = (value) => {
    setCompletedSearchTerm(value);
  };

  return (
    <div>
      <main className="flex flex-col md:flex-row justify-center md:justify-around my-8">
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
              <SearchItem
                searchTerm={addedSearchTerm}
                onSearchChange={handleAddedSearchChange}
              />
              {filteredAddedList.length > 0 ? (
                filteredAddedList.map((task, index) => (
                  <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    status="added"
                  />
                ))
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No matching tasks in this category
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
              <SearchItem
                searchTerm={startedSearchTerm}
                onSearchChange={handleStartedSearchChange}
              />
              {filteredStartedList.length > 0 ? (
                filteredStartedList.map((task, index) => (
                  <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    status="started"
                  />
                ))
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No matching tasks in this category
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
              <SearchItem
                searchTerm={completedSearchTerm}
                onSearchChange={handleCompletedSearchChange}
              />
              {filteredCompletedList.length > 0 ? (
                filteredCompletedList.map((task, index) => (
                  <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    status="completed"
                  />
                ))
              ) : (
                <div className="text-xl text-gray-300 text-center">
                  No matching tasks in this category
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
