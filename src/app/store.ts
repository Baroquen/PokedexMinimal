import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import historyReducer from "../features/history/historySlice";
import { pokemonApi } from "../features/pokedex/pokedexApi";

export const store = configureStore({
  reducer: {
    history: historyReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      pokemonApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
