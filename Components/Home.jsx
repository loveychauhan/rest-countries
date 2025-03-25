import React, { useContext } from 'react'
import { useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import { useTheme } from '../hooks/useTheme';


export default function Home() {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('')
    const [isDark] = useTheme()

    return (
        <main className={` ${isDark ? 'dark' : ''}`}>
            <div className="seacrch-filter-container">
                <SearchBar setQuery={setQuery} ></SearchBar>
                <SelectMenu setRegion={setRegion}></SelectMenu>
            </div>
            {
                < CountriesList query={query} region={region}></CountriesList>
            }
        </main >
    )
}
