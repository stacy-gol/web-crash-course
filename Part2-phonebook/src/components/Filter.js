const Filter = ( {personSearched, handleSearch} ) => {
    return (
        <input value={personSearched} onChange={handleSearch}></input>
    )
}

export default Filter