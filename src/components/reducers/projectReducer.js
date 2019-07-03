const initState = {
  tasks: [
    { id: "1", title: "task-1", content: "doing the task-1" },
    { id: "2", title: "task-1", content: "doing the task-1" },
    { id: "3", title: "task-1", content: "doing the task-1" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERR":
      console.log("error: ", action.err);
      return state;
    default:
      return state;
  }
  return state;
};
export default projectReducer;
