import { configureStore } from "@reduxjs/toolkit";
import topUpReducer from "../features/userSlice";

export const store = configureStore({
    reducer: {
        topup: topUpReducer
    },
});