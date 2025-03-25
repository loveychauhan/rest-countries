import React, { useEffect, useState } from 'react';
// import countryData from '../countryData';
import CountryCard from './CountryCard';
import ShimmerForall from './shimmerForall';

export default function CountriesList({ query, region }) {
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                setCountryData(data);
                setLoading(false)
            });
    }, []);

    if (loading) {
        return (
            <ShimmerForall />
        )
    }

    return (
        <div className="country-container">
            {countryData.filter((country) =>
                country.name.common.toLowerCase().includes(query.toLowerCase()) &&
                country.region.toLowerCase().includes(region.toLowerCase())
            ).map((country) => (
                <CountryCard
                    name={country.name.common}
                    key={country.name.common}
                    flags={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    data={country}
                />
            ))}
        </div>
    );
}

