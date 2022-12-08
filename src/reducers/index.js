import { combineReducers } from "redux";
import todosReducer from "../components/features/todos/todosSlice";

export default combineReducers({
  todos: todosReducer,
});
