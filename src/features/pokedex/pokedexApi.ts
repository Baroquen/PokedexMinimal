import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Pokemon, PokemonList} from "./types.d"

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string | undefined>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemon: builder.query<PokemonList, void>({
      query: () => `pokemon/?limit=1154`,
    }),
  }),
})

export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi;
