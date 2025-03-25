

export default function SearchBar({ setQuery }) {
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="searchField" placeholder="search for a country" 
            onInput={(e) => setQuery(e.target.value.toLowerCase())}></input>
        </div>
    )
}
