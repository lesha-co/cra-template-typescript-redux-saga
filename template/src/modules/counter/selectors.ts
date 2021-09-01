import { createSelector } from "reselect";
import { RootSelector } from "../../reducers";
import { CounterShape } from "./reducer";
export const counterSelector: RootSelector<CounterShape> = createSelector(
  (r) => r,
  (r) => r.counter
);
