import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd} data-testid="test-button-+1">
                {" "}
                +1{" "}
            </button>
            <button onClick={handleSubstract} data-testid="test-button--1">
                {" "}
                -1{" "}
            </button>
            <button
                onClick={handleReset}
                aria-label="test-button-reset"
            >
                {" "}
                Reset{" "}
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
