import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { catApi } from "../services/catsApi";
import { dogsApi } from "../services/dogsApi";
import { pokeApi } from "../services/pokeApi";
import { jsonPlaceholderApi } from '../services/jsonPlaceholderApi';
import reqresReducer from '../services/slice/reqresSlice';


export const store = configureStore({
    reducer: {
      reqres: reqresReducer,
      [catApi.reducerPath]: catApi.reducer,
      [dogsApi.reducerPath]: dogsApi.reducer,
      [pokeApi.reducerPath]: pokeApi.reducer, 
      [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
     
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catApi.middleware, dogsApi.middleware, pokeApi.middleware, jsonPlaceholderApi.middleware), 
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
