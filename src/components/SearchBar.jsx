import { useEffect, useState } from "react";

import "../stylesheets/SearchBar.css"
const SearchBar = ({ searchValue, setSearchValue, setSelectedSearchBy, selectedSearchBy }) => {

    const placeholderValue = `Search By ${selectedSearchBy}...`;
    const handleRadioClick = (e) => {
        setSelectedSearchBy(e.target.value);
    }
    return (
        <section className="searchbar">
            <div className="searchbox-container">
                <input type="search" name="search" id="search" placeholder={placeholderValue} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

                <input type="radio" name="searchby" id="byprojectname" value="project name" defaultChecked={true} onClick={handleRadioClick} />
                <label htmlFor="byprojectname">By Project Name</label>

                <input type="radio" name="searchby" id="byclientname" value="client name" onClick={handleRadioClick} />
                <label htmlFor="byclientname">By Client Name</label>

                <input type="radio" name="searchby" id="byprojectowner" value="project owner" onClick={handleRadioClick} />
                <label htmlFor="byprojectowner">By Project Owner</label>

            </div>
        </section>
    );
}

export default SearchBar;