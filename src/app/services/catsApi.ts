//usando query com configuração de re-fetching
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cat } from '../types/types';
import { useEffect } from 'react';

export const catApi = createApi({
    reducerPath: 'catApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/'}),
    tagTypes: ['Cat'],
    endpoints: (builder) => ({
        getCats: builder.query<Cat[], void>({
            query: () => 'images/search?limit=10',
            providesTags: ['Cat'],
        }),
    }),
});

export const { useGetCatsQuery } = catApi;

//criação do hook personalizado para tratar o re-fetching automático
export const useGetCatsWithAutoRefresh = () => {
    const { data, error, isFetching, refetch } = useGetCatsQuery();

    useEffect(() => {
        const refetchInterval = setInterval(() => {
            refetch();
        }, 120000); // 2 minutos

        return () => clearInterval(refetchInterval);
    }, [refetch]);

    return { data, error, isFetching, refetch };
};