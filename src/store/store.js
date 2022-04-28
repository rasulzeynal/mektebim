import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { adamApi } from "./usersSlice";


export const store = configureStore({
    reducer:{
        [adamApi.reducerPath] : adamApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(adamApi.middleware)
});