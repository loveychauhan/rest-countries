import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ name, flags, population, region, capital, data }) {
    return (
        <Link className="country-card" to={`${name}`} state={data}>
            <img src={flags} alt="flag" />
            <div className="card-text">
                <h3 className="card-heading">{name}</h3>
                <p>
                    <b>Population: </b>
                    <span>{population.toLocaleString('en-IN')}</span>
                </p>
                <p>
                    <b>Region: </b>
                    <span>{region}</span>
                </p>
                <p>
                    <b>Capital: </b>
                    <span>{capital}</span>
                </p>
            </div>
        </Link>
    )
}
