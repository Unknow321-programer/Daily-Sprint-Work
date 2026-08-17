import React, { useEffect, useState } from "react";

const Dummy = () => {
    const [serachTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "David" },
        { id: 3, name: "Mike" }
    ]);


    // const searchTerm = "da";
    let result = users.filter(
        (user) => user.name.toLowerCase().includes(serachTerm.toLowerCase())
    )
    

    return (
        <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} id="search" name="search" />
            {result.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default Dummy;