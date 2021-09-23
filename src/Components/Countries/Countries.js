import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(
            "./countries.json"
        )
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <div>
            <h1>Number of Countries: {countries.length}</h1>
            <div className='countries-column'>
                {countries.map((country) => (
                    <Country
                        key={country.alpha2Code}
                        country={country}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
