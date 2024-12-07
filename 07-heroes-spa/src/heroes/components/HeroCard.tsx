import { HeroType } from "../data";

interface HeroCardProps {
    hero: HeroType;
}

function HeroCard({ hero }: HeroCardProps) {
    const { superhero } = hero;
    const heroImageUrl = `/assets/heroes/`;
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroImageUrl} alt={superhero} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
