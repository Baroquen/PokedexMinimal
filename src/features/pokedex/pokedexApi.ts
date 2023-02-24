import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EvolutionChain, Pokemon, Pokedex, Species, LocationAreasEncounters, UrlBase } from "./types.d"

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokedex: builder.query<Pokedex, void>({
      query: () => `pokedex/1`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getSpecies: builder.query<Species, string>({
      query: (speciesUrl) => ({
        url: speciesUrl
      })
    }),
    getEvolutionChain: builder.query<UrlBase[], string>({
      query: (chainUrl) => ({
        url: chainUrl
      }),
      transformResponse:(response:EvolutionChain) => {
        const result = []
        
        result.push(response.chain.species)

        if (!!response.chain.evolves_to){
          result.push(response.chain.evolves_to[0].species)
        }

        if (!!response.chain.evolves_to[0].evolves_to[0]){
          result.push(response.chain.evolves_to[0].evolves_to[0].species)
        }

        return result;
      },
    }),
    getEncounters: builder.query<LocationAreasEncounters, string>({
      query: (encountersUrl) => ({
        url: encountersUrl
      })
    }),
  }),
})

export const { useGetPokedexQuery, useGetPokemonByNameQuery, useGetSpeciesQuery, useGetEvolutionChainQuery, useGetEncountersQuery } = pokemonApi;
