import { configureStore } from "@reduxjs/toolkit";
import { catApi } from "../services/catsApi";
import { dogsApi } from "../services/dogsApi";


export const store = configureStore({
    reducer: {
        [catApi.reducerPath]: catApi.reducer,
        [dogsApi.reducerPath]: dogsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(catApi.middleware, dogsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;