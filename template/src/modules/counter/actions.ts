import { createAction } from "@reduxjs/toolkit";

// config load
export const countUp = createAction<void, "+1">("+1");
export const countDown = createAction<void, "-1">("-1");
