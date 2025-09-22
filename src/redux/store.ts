import { configureStore } from "@reduxjs/toolkit";
import counter_slice from "./counter/counter_slice";
import calculator_slice from "./counter/calculation_slice";

export const store = configureStore({
  reducer: {
    counters: counter_slice,
    calculator: calculator_slice,
  },
});

export type TRoot_State = ReturnType<typeof store.getState>;
export type TApp_Dispatch = typeof store.dispatch;
