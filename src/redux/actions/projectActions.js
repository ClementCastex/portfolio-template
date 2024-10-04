export const addProject = (project) => ({
  type: "ADD_PROJECT",
  payload: project,
});

export const removeProject = (id) => ({
  type: "REMOVE_PROJECT",
  payload: id,
});
