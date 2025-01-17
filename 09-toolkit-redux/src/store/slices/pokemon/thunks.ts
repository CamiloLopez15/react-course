import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { AppDispatch } from "../..";
import { pokemonApi } from "../../../api/pokemonApi";
import { Pokemon } from "../../../types/pokemon";

interface GetPokemon {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export const getPokemons = (page = 0) => {
    return async (dispatch: AppDispatch, getState) => {
        dispatch(startLoadingPokemons());
        const url = `/pokemon?limit=10&offset=${page}`;

        const { data } = await pokemonApi.get<GetPokemon>(url);

        dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
    };
};
