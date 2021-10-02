import { combineReducers } from "redux";
import auth from "./auth";
import loading from "./loading";
import project from "./project";
export const reducers = combineReducers({
  auth,
  loading,
  project,
});
