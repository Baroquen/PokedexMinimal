import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../pokedex/types.d";

export interface HistoryState {
  value: Pokemon[];
}

const initialState: HistoryState = {
  value: [],
};

export const historySlice = createSlice({
  name: "Search History",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pokemon>) => {
      state.value = [action.payload, ...state.value.filter((x) => x.id !== action.payload.id)];
    },
  },
});

export const { add } = historySlice.actions;
export default historySlice.reducer;
