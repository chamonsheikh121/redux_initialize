import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const calculation_slice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    sum: (state, action) => {
        console.log(action)
      state.value = state.value + action.payload.input_value;
    },
    substraction: (state, action) => {
      state.value = state.value - action.payload.input_value;
    },
    multiply: (state, action) => {
      state.value = state.value * action.payload.input_value;
    },
  },
});

export const { sum, substraction, multiply } = calculation_slice.actions;

export default calculation_slice.reducer;
