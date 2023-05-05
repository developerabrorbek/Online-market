import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { storeApi } from "./API";

export const store = configureStore({
    reducer: {
        [storeApi.reducerPath] : storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})

setupListeners(store.dispatch)