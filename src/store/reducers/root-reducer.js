import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "../slices/todos-slice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
