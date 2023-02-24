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
- Not terribly found of the endpoint data, but that isn't something we have control over
-- Wish the sprites were on a top level so that I don't need an extra call just to get them

## Future Enhancement Suggestions
- Pokedex for multiple categories (Shiny, region, legendaries, etc.)
- Make data on details page clickable (i.e. clicking on a moveset could take the user to a moveset page)
- Change primary picture based on Form / male / female / shiny / etc
- Labels that have no data are still displayed.  Maybe should only display this if there is data or find out why the pokemon doesn't have it listed. (i.e. Furfrou doesn't have location or habitat)
- Error handling for the Tech Debt mentioned below

## Tech debt
- After retreiving the national pokedex, I loop through to call the pokemon endpoint so that I can get the sprites.  Per documentation, you should be able to use the name of the pokemon to do this, but I have noticed that some are throwing errors.  Using their ids works though.  Would need to decide if we should be using the pokedex endpoint or the pokemon with the limit hardcoded.  Leaving it as is atm.