import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducers from "./reducers";

const combinedReducer = combineReducers({ ...reducers });

const logger = (store) => (next) => (action) => {
  console.log("store:", store.getState());
  console.log("action:", action);
  next(action);
  console.log("store:", store.getState());
};

const middlewareOptions = { serializableCheck: false };

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (m) =>
    process.env.NODE_ENV === "development"
      ? m(middlewareOptions).concat(logger)
      : m(middlewareOptions),
  devTools: process.env.NODE_ENV !== "production",
});
