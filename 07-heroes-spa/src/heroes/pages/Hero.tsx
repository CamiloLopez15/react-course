import { useParams } from "react-router-dom";

export const Hero = () => {
    const { heroId } = useParams();
    console.log(heroId);

    return <h1>Hero</h1>;
};
