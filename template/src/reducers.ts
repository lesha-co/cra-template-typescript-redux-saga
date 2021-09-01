import { combineReducers } from "redux";
import { CounterReducer } from "./modules/counter/reducer";
import { Selector } from "@reduxjs/toolkit";

export const reducer = combineReducers({
  counter: CounterReducer,
});
export type RootStore = ReturnType<typeof reducer>;

export type RootSelector<T> = Selector<RootStore, T>;
