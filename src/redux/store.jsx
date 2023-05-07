import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { storeApi } from "./API";
import { basketReducer, favoriteReducer } from "./slice";

export const store = configureStore({
    reducer: {
        [storeApi.reducerPath] : storeApi.reducer,
        basket : basketReducer,
        favorite : favoriteReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})

setupListeners(store.dispatch)