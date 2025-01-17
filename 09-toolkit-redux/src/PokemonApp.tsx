import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon/thunks";

function PokemonApp() {
    const dispatch = useAppDispatch();
    const { isLoading, pokemons, page } = useAppSelector(
        (state) => state.pokemon
    );
    useEffect(() => {
        dispatch(getPokemons(0));
    }, [dispatch]);

    const handleNext = () => {
        dispatch(getPokemons(page));
    };

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: {isLoading ? "True" : "False"}</span>
            <ul>
                {pokemons.map(({ name, id }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
            <button disabled={isLoading} onClick={handleNext}>
                Next
            </button>
        </>
    );
}

export default PokemonApp;
