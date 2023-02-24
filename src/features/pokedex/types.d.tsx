export type UrlBase = {name: string, url:string}

export type Pokedex = {
    id: number,
    pokemon_entries: [{entry_number: number, pokemon_species: UrlBase}]
}

export type Pokemon = {
    id: number,
    name: string,
    order: number,
    sprites: {front_default: string},
    abilities: [{ability: UrlBase}],
    moves: [{move: UrlBase}],
    types: [{slot: number, type: UrlBase}],
    species: UrlBase,
    forms: UrlBase[],
    location_area_encounter: string,
}

export type Species = {
    id: number
    color: UrlBase,
    has_gender_differences: boolean,
    evolution_chain: {url: string},
    habitat: UrlBase,
    names: [{name: string, language: UrlBase}],
    varieties: [{is_default: boolean, pokemon: UrlBase}]
}

export type EvolutionChain = {
    id: number,
    chain: Evolution
}

type Evolution = {
    species: UrlBase,
    evolves_to: Evolution[]
}

export type LocationAreasEncounters = {
    locationAreas: [location_areas: UrlBase]
}