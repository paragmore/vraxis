import { PROJECT } from "../constants/actionTypes";

const projectReducer = (state={project:null}, action) => {
  switch (action.type) {
    case PROJECT:
      localStorage.setItem('project', JSON.stringify({... action?.data}))
      return {...state, project: action?.data};
    default:
      return state;
  }
};

export default projectReducer;
