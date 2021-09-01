import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
export type CounterShape = {
  count: number;
};

const initial: CounterShape = {
  count: 0,
};
export const CounterReducer = createReducer<CounterShape>(initial, (builder) =>
  builder
    .addCase(actions.countUp, (s, a) => {
      s.count += 1;
    })
    .addCase(actions.countDown, (s, a) => {
      s.count -= 1;
    })
);
