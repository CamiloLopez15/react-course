import { useCounter, useFetch } from "../hooks";
import { Pokemon } from "../types/pokemon";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${counter}`
    );

    const isCounterGetterThanOnce = counter > 1;

    return (
        <div>
            <h1>Información de Pokemon</h1>
            <h4>Pokemon número {counter}</h4>
            <hr />
            {isLoading && !hasError? (
                <LoadingMessage />
            ) : (
                <>
                    <PokemonCard pokemon={data as Pokemon} key={data?.id}/>
                    <button
                        onClick={() =>
                            isCounterGetterThanOnce ? decrement() : null
                        }
                        className={`btn ${
                            isCounterGetterThanOnce
                                ? "btn-danger"
                                : "btn-secondary"
                        }`}
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => increment()}
                        className="btn btn-primary"
                    >
                        Siguiente
                    </button>
                </>
            )}
        </div>
    );
};
