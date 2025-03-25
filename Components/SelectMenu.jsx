
export default function SelectMenu({ setRegion }) {
    return (
        <select id="filter-country" onChange={(e) => setRegion(e.target.value.toLowerCase())}>
            <option value="asia" hidden="">Filter by region</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="america">Americas</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}
