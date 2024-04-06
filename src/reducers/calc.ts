import { createSlice } from "@reduxjs/toolkit";
import { resultCalc } from "../actions/result";
import { executeOperationBasedOnLast } from "../actions/appendValue";
import { dotAction } from "../actions/dot";
import { operators } from "../actions/operators";
import { switchPlusMinus } from "../actions/plusMinus";

type INITIAL_STATE_TYPE = {
  buffer: Array<string>;
  showErrorFlag: boolean;
};
const calculatorSlice = createSlice({
  name: "calc",
  initialState: <INITIAL_STATE_TYPE>{
    buffer: [],
    showErrorFlag: false,
  },
  reducers: {
    appendValue: (state, { payload }) => {
      if (!state.showErrorFlag) {
        state.buffer = executeOperationBasedOnLast([...state.buffer], payload);
      }
    },
    dot: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = dotAction(state.buffer);
      }
    },
    plus: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = operators(state.buffer, "+");
      }
    },
    minus: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = operators(state.buffer, "-");
      }
    },
    multiplied: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = operators(state.buffer, "*");
      }
    },
    divided: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = operators(state.buffer, "/");
      }
    },
    clear: (state) => {
      state.buffer.length = 0;
      state.showErrorFlag = false;
    },
    equal: (state) => {
      if (!state.showErrorFlag) {
        const { result, errorFlag } = resultCalc(state.buffer);
        state.buffer = result;
        state.showErrorFlag = errorFlag;
      }
    },
    plusMinus: (state) => {
      if (!state.showErrorFlag) {
        state.buffer = switchPlusMinus(state.buffer);
      }
    },
  },
});

export const {
  appendValue,
  dot,
  plus,
  minus,
  multiplied,
  divided,
  clear,
  equal,
  plusMinus,
} = calculatorSlice.actions;
export const calcReducer = calculatorSlice.reducer;
