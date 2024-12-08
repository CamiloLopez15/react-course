import { Link } from "react-router-dom";
import { HeroType } from "../data";
import { useMemo } from "react";

interface HeroCardProps {
    hero: HeroType;
}

function HeroCard({ hero }: HeroCardProps) {
    const { id, superhero, alter_ego, characters, first_appearance } = hero;
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const charactersWithoutAlterEgo = useMemo(() => {
        return characters
            .split(", ")
            .filter((character) => character !== alter_ego)
            .join(", ");
    }, [alter_ego, characters]);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img
                            className="card-img"
                            src={   heroImageUrl}
                            alt={superhero}
                        />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {charactersWithoutAlterEgo && (
                                <p className="card-text">
                                    {charactersWithoutAlterEgo}
                                </p>
                            )}
                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
