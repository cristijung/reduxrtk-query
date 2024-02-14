import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Dog } from '../types/types';

export const dogsApi = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thedogapi.com/v1/' }),
  tagTypes: ['Dog'],
  endpoints: (builder) => ({
    getDogs: builder.query<Dog[], void>({
      query: () => 'breeds', 
      providesTags: ['Dog'],
    }),
  }),
});

export const { useGetDogsQuery } = dogsApi;


