import { ParsedPGN } from "pgn-parser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../components/GamesList";

interface IGameInitialState {
  currentGame: Game | null;
  parsedPGN: ParsedPGN[] | null;
}

const initialState: IGameInitialState = {
  currentGame: null,
  parsedPGN: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<Game>) => {
      state.currentGame = action.payload;
    },
    setPGN: (state, action: PayloadAction<ParsedPGN[]>) => {
      state.parsedPGN = action.payload;
    },
  },
});

export const { setGame, setPGN } = gameSlice.actions;
export default gameSlice.reducer;
