import PropTypes from "prop-types";
import React from "react";

function CounterApp({ counter }) {
    return (
        <>
            <h1>CounterApp</h1>
            <span>/{counter}</span>
        </>
    );
}

export default CounterApp;

CounterApp.propTypes = {
    counter: PropTypes.number.isRequired,
};
