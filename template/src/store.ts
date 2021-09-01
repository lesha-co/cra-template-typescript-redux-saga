import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import { rootSaga } from "./sagas";

import { configureStore } from "@reduxjs/toolkit";
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  createLogger({
    predicate: () => {
      return true;
    },
  }),
];

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
