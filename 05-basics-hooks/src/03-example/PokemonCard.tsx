import { Pokemon } from "../types/pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
}

export const PokemonCard = ({
    pokemon: {
        id,
        name,
        sprites: { front_default, front_shiny, back_default, back_shiny },
    },
}: PokemonCardProps) => {
    const imageSprites = [front_default, front_shiny, back_default, back_shiny];
    return (
        <section style={{ height: 200 }}>
            <h2 className="text-capitalize">
                #{id} - {name}
            </h2>
            <div>
                {imageSprites.map((sprite) => (
                    <img key={sprite} src={sprite} alt={name} />
                ))}
            </div>
        </section>
    );
};
