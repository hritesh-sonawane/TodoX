// Reducer functions take state from Redux and action objects and returns a new state

import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

export default combineReducers({
  todos,
  filter,
});
