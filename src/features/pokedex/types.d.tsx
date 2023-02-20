export type PokemonList = {
    count: number,
    next: string | undefined,
    previous: string | undefined,
    results: PokemonUrls[]
}

export type PokemonUrls = { 
    name: string,
    url: string
}

export type Pokemon = {
    id: number,
    name: string,
    order: number,
    sprites: {front_default: string},
    abilities: [{ability: UrlBase}],
    moves: [{move: UrlBase}],
    types: [{type: UrlBase}]
}

type UrlBase = {name: string, url:string}