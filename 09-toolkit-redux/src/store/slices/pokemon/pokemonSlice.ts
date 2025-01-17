import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../../types/pokemon";

interface InitialState {
    page: number;
    pokemons: Pokemon[];
    isLoading: boolean;
}

const initialState: InitialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (
            state,
            action: PayloadAction<{
                page: number;
                pokemons: Pokemon[];
            }>
        ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
    },
});

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
