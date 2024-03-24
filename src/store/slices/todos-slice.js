import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    updateToDo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
        };
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateToDo } = todosSlice.actions;
export default todosSlice.reducer;
