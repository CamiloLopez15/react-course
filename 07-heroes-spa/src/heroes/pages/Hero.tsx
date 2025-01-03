import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id as string), [id]);
    if (!hero) return <Navigate to={"/marvel"} />;

    const { superhero, alter_ego, characters, first_appearance, publisher } =
        hero;
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const groupLists = [
        {
            label: "Alter ego",
            value: alter_ego,
        },
        {
            label: "Primero aparición",
            value: first_appearance,
        },
        {
            label: "Editorial",
            value: publisher,
        },
    ];

    const handleNavigateBack = () => {
        navigate(-1);
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={heroImageUrl}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    {groupLists.map(({ label, value }, i) => (
                        <li className="list-group-item" key={i}>
                            <b>{label}:</b> {value}
                        </li>
                    ))}
                </ul>

                <h5 className="mt-3">Personajes</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={handleNavigateBack}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};
