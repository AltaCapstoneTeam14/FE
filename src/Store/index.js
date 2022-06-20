import { configureStore } from "@reduxjs/toolkit";
/** Reducer */
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    counter: userSlice,
  },
});
