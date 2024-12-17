import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";
import { FormEvent } from "react";
import queryString from "query-string";
import { useForm } from "@src/hooks/useForm";
import { HeroCard } from "../components";

export const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = queryString.parse(location.search);
    const q: string = (params.q as string) || undefined || "";
    const heroes = getHeroesByName(q);

    const showSearch = q.length === 0;
    const showError = q.length > 0 && heroes.length === 0;

    const { searchText, onChangeInput } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form className="d-flex" onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control rounded-0 rounded-start"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onChangeInput}
                        />

                        <button className="btn btn-outline-primary rounded-0 rounded-end">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? "" : "none" }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? "" : "none" }}
                    >
                        No hero with <b>{q}</b>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        {heroes.map((hero) => (
                            <HeroCard hero={hero} key={hero.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
