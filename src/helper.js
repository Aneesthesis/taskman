export const getListType = (droppableId) => {
  switch (droppableId) {
    case "added":
      return "addedList";
    case "started":
      return "startedList";
    case "completed":
      return "completedList";
    default:
      return undefined;
  }
};
