import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import counterReducer from "./Counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
