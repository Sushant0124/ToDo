// src/features/todoSlice.js

import { createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, task: "Client Review & Feedback",  isDone:false},
   
    // You can add more default todos here if needed
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        let newtodo={
            id:nanoid(),
            task:action.payload,
            isDone:false
        };
      state.todos.push(newtodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
