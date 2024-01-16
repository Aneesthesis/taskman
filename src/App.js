import { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { DragDropContext } from "react-beautiful-dnd";
import { getListType } from "./helper";

const App = () => {
  const [addedList, setAddedList] = useState(
    JSON.parse(localStorage.getItem("addedList")) || []
  );
  const [startedList, setStartedList] = useState(
    JSON.parse(localStorage.getItem("startedList")) || []
  );
  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem("completedList")) || []
  );

  const addTaskToList = (task) => {
    setAddedList((prevList) => {
      const updatedList = [...prevList, { task, id: Date.now() }];
      localStorage.setItem("addedList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const handleManeuver = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // identify source and destination arrays
    let sourceArray = getListType(source.droppableId);
    let destinationArray = getListType(destination.droppableId);

    // remove task from source index and add to destination index

    let sourceIndex = source.index;
    let destinationIndex = destination.index;
    let task = eval(sourceArray)[sourceIndex];

    // handle source list

    if (sourceArray === "addedList") {
      setAddedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        localStorage.setItem("addedList", JSON.stringify(updatedList));
        return updatedList;
      });
    }

    if (sourceArray === "startedList") {
      setStartedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        localStorage.setItem("startedList", JSON.stringify(updatedList));
        return updatedList;
      });
    }

    if (sourceArray === "completedList") {
      setCompletedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(sourceIndex, 1);
        localStorage.setItem("completedList", JSON.stringify(updatedList));
        return updatedList;
      });
    }

    // handle destination list

    if (destinationArray === "addedList") {
      setAddedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        localStorage.setItem("addedList", JSON.stringify(updatedList));
        console.log(task);

        return updatedList;
      });
    }

    if (destinationArray === "startedList") {
      setStartedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        localStorage.setItem("startedList", JSON.stringify(updatedList));
        return updatedList;
      });
    }

    if (destinationArray === "completedList") {
      setCompletedList((prevList) => {
        const updatedList = [...prevList];
        updatedList.splice(destinationIndex, 0, task);
        localStorage.setItem("completedList", JSON.stringify(updatedList));
        return updatedList;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleManeuver}>
      <div className="App">
        <header className="header">TASKMAN</header>
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
