import { useState } from "react";

import "../stylesheets/SearchBar.css"
const SearchBar = ({ users, setUsers }) => {
    const [searchPlaceholder, setPlaceholder] = useState("search by project name...");
    const [selectedSearchBy, setSelectedSearchBy] = useState("project name");
    const [duplicateUsers, setDuplicateUsers] = useState([]);
    const [copyUsers, setCopyUsers] = useState(true);

    const handleSearchBy = (e) => {
        const searchValue = e.target.value;
        let filteredUsers = [];

        if(copyUsers) {
            setDuplicateUsers([...users]);
            setCopyUsers(false);
        }
        if (searchValue === "" || searchValue === null || searchValue === undefined) {
            filteredUsers = [...duplicateUsers];
        } else if (selectedSearchBy === "project name") {
            filteredUsers = duplicateUsers.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
            // console.log("filteredUsers by project name: ", filteredUsers);
        } else if (selectedSearchBy === "client name") {
            filteredUsers = duplicateUsers.filter(user => user.company.name.toLowerCase().includes(searchValue.toLowerCase()));
            // console.log("filteredUsers by client name: ", filteredUsers);
        } else if (selectedSearchBy === "project owner") {
            filteredUsers = duplicateUsers.filter(user => user.email.toLowerCase().includes(searchValue.toLowerCase()));
            // console.log("filteredUsers by project owner: ", filteredUsers);
        }
        setUsers(filteredUsers);
        // console.log("search value : ", searchValue, "& users : ", users, "& duplicate ", duplicateUsers, "& filtered : ", filteredUsers);
    }


    const handleRadioClick = (e) => {
        setSelectedSearchBy(e.target.value);
        setPlaceholder(`search by ${e.target.value}...`);
    }
    return (
        <section className="searchbar">
            <div className="searchbox-container">
                <input type="search" name="search" id="search" placeholder={searchPlaceholder} onKeyUp={handleSearchBy} />

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