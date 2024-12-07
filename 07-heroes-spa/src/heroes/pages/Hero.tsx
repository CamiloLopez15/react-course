import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const Hero = () => {
    const { id } = useParams();

    const hero = getHeroById(id as string);
    if (!hero) return <Navigate to={"/marvel"} />;

    const { superhero } = hero;

    console.log(hero);

    return <h1>{superhero}</h1>;
};
