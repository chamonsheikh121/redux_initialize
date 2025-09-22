import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter_slice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    increment_by_amount: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, increment_by_amount } =
  counter_slice.actions;

export default counter_slice.reducer;
