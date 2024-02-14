//usando query com configuração de cache
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonsResponse } from '../types/types';

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonsResponse, number>({
      query: (limit = 10) => `pokemon?limit=${limit}`,
      // config de cache opcional ...
      keepUnusedDataFor: 60, // vai manter os dados em cache por 60 segundos;
    }),
  }),
});

export const { useGetPokemonsQuery } = pokeApi;
