import { getHeroesByPublisher } from "../helpers";
import HeroCard from "./HeroCard";

interface HeroListProps {
    publisher: string;
}

export const HeroList = ({ publisher }: HeroListProps) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <ul>
            {heroes.map((hero) => (
                <HeroCard hero={hero} key={hero.id} />
            ))}
        </ul>
    );
};
