import { useState } from "react";
import TaskForm from "./Components/TaskForm";
import { TaskList } from "./Components/TaskList";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [addedList, setAddedList] = useState([]);
  const [startedList, setStartedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addTaskToList = (task) => {
    setAddedList((prevList) => [...prevList, { task, id: Date.now() }]);
  };

  const handleManouvre = (result) => {
    console.log(result);

    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // identify source and destination arrays

    let sourceArray =
      source.droppableId === "added"
        ? "addedList"
        : source.droppableId === "started"
        ? "startedList"
        : source.droppableId === "completed"
        ? "completedList"
        : undefined;

    let destinationArray =
      destination.droppableId === "added"
        ? "addedList"
        : destination.droppableId === "started"
        ? "startedList"
        : destination.droppableId === "completed"
        ? "completedList"
        : undefined;

    // remove task from source index and add to destination index
    console.log(sourceArray, destinationArray);

    let sourceIndex = source.index;
    let destinationIndex = destination.index;
    let task = eval(sourceArray)[sourceIndex];

    console.log(sourceArray, sourceIndex);

    if (sourceArray === "addedList") {
      setAddedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        return updatedList;
      });
    }

    if (sourceArray === "startedList") {
      setStartedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        return updatedList;
      });
    }

    if (sourceArray === "completedList") {
      setCompletedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        return updatedList;
      });
    }

    if (destinationArray === "addedList") {
      setAddedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        console.log(task);

        return updatedList;
      });
    }

    if (destinationArray === "startedList") {
      setStartedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        console.log(task);
        return updatedList;
      });
    }

    if (destinationArray === "completedList") {
      setCompletedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        console.log(task);
        return updatedList;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleManouvre}>
      <div className="App">
        <TaskForm addTaskToList={addTaskToList} />
        <TaskList
          addedList={addedList}
          startedList={startedList}
          completedList={completedList}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
