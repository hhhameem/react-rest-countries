import React from "react";
import "./Country.css";

const Country = (props) => {
    const { name, capital } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name}</h2>
            <h2>Capital: {capital}</h2>
        </div>
    );
};

export default Country;
