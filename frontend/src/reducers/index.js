import { combineReducers } from "redux";
import auth from "./auth";
import loading from "./loading";

export const reducers = combineReducers({
  auth,
  loading
});
