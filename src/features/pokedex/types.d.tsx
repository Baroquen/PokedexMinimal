export type UrlBase = {name: string, url:string}

export type PokemonList = {
    count: number,
    results: UrlBase[]
}

export type Pokemon = {
    id: number,
    name: string,
    order: number,
    sprites: {front_default: string},
    abilities: [{ability: UrlBase}],
    moves: [{move: UrlBase}],
    types: [{type: UrlBase}],
    species: UrlBase,
    forms: UrlBase[]
}

export type Species = {
    id: number
    color: UrlBase,
    has_gender_differences: boolean,
    evolution_chain: string,
    habitat: UrlBase,
    names: [{name: string, language: UrlBase}]
}

export type EvolutionChain = {
    id: number,
    chain: evolution
}

type evolution = {
    species: UrlBase,
    evolves_to: evolution[]
}