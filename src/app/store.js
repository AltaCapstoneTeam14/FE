import { configureStore } from "@reduxjs/toolkit";
import topUpReducer from "../features/TopUpSlice";
import pulsaReducer from "../features/PulsaSlice";
import quotaReducer from "../features/QuotaSlice";
import cashOutReducer from "../features/CashOutSlice";
import adminReducer from "../features/AdminSlice";
import subscribeReducer from "../features/SubscribeSlice";


export const store = configureStore({
    reducer: {
        topup: topUpReducer,
        pulsa: pulsaReducer,
        quota: quotaReducer,
        cashout: cashOutReducer,
        admin: adminReducer,
        subscribe: subscribeReducer,

    },
});