import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {EvolutionChain, Pokemon, Pokedex, Species} from "./types.d"

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokedex: builder.query<Pokedex, void>({
      query: () => `pokedex/1`,
    }),
    getSpecies: builder.query<Species, string>({
      query: (speciesUrl) => ({
        url: speciesUrl
      })
    }),
    getEvolutionChain: builder.query<EvolutionChain, string>({
      query: (chainUrl) => ({
        url: chainUrl
      })
    }),
  }),
})

export const { useGetPokedexQuery, useGetPokemonByNameQuery, useGetSpeciesQuery, useGetEvolutionChainQuery } = pokemonApi;
