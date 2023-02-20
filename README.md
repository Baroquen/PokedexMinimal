# Pokedex
I created this pokedex as a coding challenge while job hunting in 2023.  It uses Redux to reach out to an existing Pokemon API and then displays the pokemon and a recent search history using react.  Only the following technologies are used

- ES6+
- Fetch and associated tooling, types
- Node and associated tooling, types
- React and associated tooling, types
- React Router and associated tooling, types
- Redux and associated tooling, types
- SASS and associated tooling for Webpack, types
- TypeScript and associated tooling for Webpack, types
- Webpack and associated tooling, types

## Notes
- Search bar filter the pokedex as the user types
- A recently viewed history shows you what you have recently selected
-- If you select a mon that is already in the recently viewed, then it will be moved to the front of the list

## Future Enhancement Suggestions
- Pokedex for multiple categories (Shiny, region, legendaries, etc.)

## Tech debt
- Limit is hardcoded on Pokedex API when getting the list of pokemon.  This should not be hardcoded.
-- Pokedex could call the API multiple times with offsets so that pokemon load in chunks
- Not too fond of the skeleton behavior atm, so could enhance that