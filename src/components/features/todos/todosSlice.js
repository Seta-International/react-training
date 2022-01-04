import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, title } = action.payload;
      state.push({ id, title, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action) {
      state.filter((todo) => todo.id === action.payload);
    },
    updateTodo(state, action) {
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
