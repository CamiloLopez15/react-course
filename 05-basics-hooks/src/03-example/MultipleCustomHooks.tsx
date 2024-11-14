import { useFetch } from "../hooks";
import { Pokemon } from "../types/pokemon";

export const MultipleCustomHooks = () => {
    const { data, isLoading } = useFetch<Pokemon>(
        "https://pokeapi.co/api/v2/pokemon/1"
    );
    return (
        <div>
            <h1>Información de Pokemon</h1>
            <hr />
            {isLoading ? (
                <span>
                    <strong>Cargando...</strong>
                </span>
            ) : (
                <h2 style={{ height: 500, overflow: "auto" }}>{data?.name}</h2>
            )}
        </div>
    );
};
