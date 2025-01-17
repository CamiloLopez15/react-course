import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon/thunks";

function PokemonApp() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemons(0));
    }, [dispatch]);

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    );
}

export default PokemonApp;
