import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { useForm } from "@src/hooks/useForm";
import queryString from "query-string";
// import { HeroCard } from "./../components";

export const Search = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const { q = "" } = queryString.parse(search);

    const { searchText, onChangeInput } = useForm({
        searchText: "",
    });
    useEffect(() => {}, [search]);

    const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`q=${searchText.toLowerCase().trim()}`);
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
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onChangeInput}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    <div className="alert alert-primary">Search a Hero</div>
                    <div className="alert alert-danger">
                        No hero with <b>{q}</b>
                    </div>

                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    );
};
