import { configureStore } from "@reduxjs/toolkit";
import { catApi } from "../services/catsApi";
import { dogsApi } from "../services/dogsApi";
import { pokeApi } from "../services/pokeApi";

export const store = configureStore({
    reducer: {
      [catApi.reducerPath]: catApi.reducer,
      [dogsApi.reducerPath]: dogsApi.reducer,
      [pokeApi.reducerPath]: pokeApi.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catApi.middleware, dogsApi.middleware, pokeApi.middleware), 
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;