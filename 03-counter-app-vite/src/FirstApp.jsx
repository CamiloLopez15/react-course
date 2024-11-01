import PropTypes from "prop-types";
import React from "react";

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string,
};

FirstApp.defaultProps = {
    // title: "No hay título",
    subTitle: "No hay sub-título",
    name: "No hay nombre",
};
