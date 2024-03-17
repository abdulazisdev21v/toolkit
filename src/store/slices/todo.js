import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todo: [],
};
export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo = [...state.todo, action.payload];
    },

    deleteTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
