import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/types'

// service utilizando createApi
export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getPosts: builder.query<Post[], { limit?: number }>({
        query: ({ limit = 4 }) => `posts?_limit=${limit}`, 
      }),
    }),
  });
  
export const { useGetPostsQuery } = jsonPlaceholderApi;
