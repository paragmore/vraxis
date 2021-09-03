import { LOADING } from "../constants/actionTypes";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action?.data;
    default:
      return state;
  }
};

export default loadingReducer;
