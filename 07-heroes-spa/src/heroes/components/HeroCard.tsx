import { HeroType } from "../data";

interface HeroCardProps {
    hero: HeroType;
}

function HeroCard({ hero }: HeroCardProps) {
    const { superhero } = hero;
    return <div>{superhero}</div>;
}

export default HeroCard;
