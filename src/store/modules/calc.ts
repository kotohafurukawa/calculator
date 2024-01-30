import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calc",
  initialState: 0,
  reducers: {
    carryUp: (state, { payload }) => {
      return state * 10 + payload;
    },
    clear: () => {
      return 0;
    },
  },
});

export const { carryUp, clear } = calculatorSlice.actions;
export const calcReducer = calculatorSlice.reducer;
