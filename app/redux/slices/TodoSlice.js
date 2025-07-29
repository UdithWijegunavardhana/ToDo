import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    editTodo: (state, action) => {
      const {index, newValue} = action.payload;
      state.items[index] = newValue;
    },
  },
});

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
