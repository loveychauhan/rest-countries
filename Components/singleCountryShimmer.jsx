import React from 'react'
import './singleShimmer.css'
import { useTheme } from '../hooks/useTheme'

export default function singleCountryShimmer() {
    const [isDark] = useTheme()
    return (
        <section className={`countryData shimmer ${isDark ? 'dark' : ''}`}>
            <div className="image shimmer"></div>
            <div className="countryDetailsContainer">
                <div className="heading">
                    <h1 className="countryHeading shimmer"></h1>
                </div>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
                <p className="countryInfo shimmer"></p>
            </div>
        </section>
    )
}
