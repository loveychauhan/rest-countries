import React, { useContext, useEffect, useState } from 'react'
import '../country.css'
import { data, Link, useLocation, useOutletContext, useParams } from 'react-router-dom'
import SingleCountryShimmer from './singleCountryShimmer';
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
    const [isDark] = useTheme()
    const [countryData, setCountryData] = useState({})
    const [notFound, setNotFound] = useState(false)
    const [loading, setLoading] = useState(true)
    const { state } = useLocation()
    const params = useParams()
    countryName = params.country


    function CountryState(data) {
        setCountryData({
            name: data.name.common,
            nativeName: Object.values(data.name.nativeName || {})[0]?.common,
            population: data.population.toLocaleString('en-IN'),
            region: data.region,
            subregion: data.subregion,
            capital: data.capital,
            tld: data.tld,
            currencies: Object.values(data.currencies || {}).map((curr) => curr.name).join(', '),
            languages: Object.values(data.languages || {}).join(', '),
            flag: data.flags.svg,
            borders: []
        })
        if (!data.borders) {
            data.borders = []
        }
        Promise.all(data.borders.map((border) => {
            return (fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => borderCountry.name.common)
            )
        }))
            .then((borders) => {
                setCountryData((prevState) => ({ ...prevState, borders }))
                // setCountryData((prevState) => console.log(({ ...prevState, borders })))
            })
    }

    // useEffect(() => {
    //     if (state) {
    //         CountryState(state)
    //         return
    //     }

    // },[])


    useEffect(() => {

        if (state) {
            setLoading(false)
            CountryState(state)
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                setLoading(false)
                CountryState(data)
            })
            .catch(() => {
                setNotFound(true)
            })
    }, [countryName])

    if (loading) {
        return (
            <SingleCountryShimmer />
        )
    }

    if (notFound) {
        return (
            <div>Country Not Found</div>
        )
    }

    return countryData === null ? ('loading ...') : (
        <main className={`main-content ${isDark ? 'dark' : ''}`}>
            <span className="back-button" onClick={() => history.back()}>
                <i className="fa-solid fa-arrow-left"></i>
                &nbsp;&nbsp;Back
            </span>
            <section className="hero-section">
                <div className="main-container">
                    <div className="image-container">
                        <img src={countryData.flag} alt={`${countryData.name}`} />
                    </div>
                    <div className="country-details">
                        <div className="country-data">
                            <h2 className="country-heading">{countryData.name}</h2>
                            <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
                            <p><b>Population: </b><span className="population">{countryData.population}</span></p>
                            <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                            <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
                            <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                            <p><b>Top Level Domain: </b><span className="tld">{countryData.tld}</span></p>
                            <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
                            <p><b>Languages:</b> <span className="languages">{countryData.languages}</span></p>
                        </div>
                        {countryData.borders?.length !== 0 && <div className="border-countries">
                            <b>Border Countries:</b>
                            {countryData.borders?.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)}
                        </div>}
                    </div>
                </div>
            </section>
        </main>
    )
}
