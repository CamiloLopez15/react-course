import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import HeroCard from "./HeroCard";

interface HeroListProps {
    publisher: string;
}

export const HeroList = ({ publisher }: HeroListProps) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <ul className="row rows-cols-1 row-cols-md-3 g-3">
            {heroes.map((hero) => (
                <HeroCard hero={hero} key={hero.id} />
            ))}
        </ul>
    );
};
