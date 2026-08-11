import React, { useEffect, useEffectEvent, useState } from "react";
import "../stylesheets/ProjectTable.css"
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";

const ProjectTable = ({ users, currentPage, setUsers }) => {

    const navigation = useNavigate();

    const [sortByName, setSortByName] = useState(false);
    const [sortByClient, setSortByClient] = useState(false);
    const [sortByOwner, setSortByOwner] = useState(false);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    // edit data row details
    const [editRow, setEditRow] = useState(false);
    

    const handleSort = (e) => {

        const column = e.target.id;

        if (column === "project-name") {
            displayedUsers.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (sortByName) {
                    if (nameA < nameB) { return -1; }
                    if (nameA > nameB) { return 1; }
                    return 0;
                } else {
                    if (nameA > nameB) { return -1; }
                    if (nameA < nameB) { return 1; }
                    return 0;
                }
            });
            setSortByName(!sortByName);

        } else if (column === "client-name") {
            displayedUsers.sort((a, b) => {
                const nameA = a.company.name.toLowerCase();
                const nameB = b.company.name.toLowerCase();

                if (sortByClient) {
                    if (nameA < nameB) { return -1; }
                    if (nameA > nameB) { return 1; }
                    return 0;
                } else {
                    if (nameA > nameB) { return -1; }
                    if (nameA < nameB) { return 1; }
                    return 0;
                }
            });
            setSortByClient(!sortByClient);
        } else if (column === "project-owner") {
            displayedUsers.sort((a, b) => {
                const nameA = a.email.toLowerCase();
                const nameB = b.email.toLowerCase();

                if (sortByOwner) {
                    if (nameA < nameB) { return -1; }
                    if (nameA > nameB) { return 1; }
                    return 0;
                } else {
                    if (nameA > nameB) { return -1; }
                    if (nameA < nameB) { return 1; }
                    return 0;
                }
            });
            setSortByOwner(!sortByOwner);
        }
    }

    useEffect(() => {
        setDisplayedUsers(users.slice(currentPage * 5 - 5, currentPage * 5));
    }, [currentPage, users]);

    const handleMoreBtn = (user) => {
        alert("click")
        navigation("/view-detail", {
            state: {
                user: user
            }
        }
        );
    }

    return (
        <section className="table-view">
            <table>
                <thead>
                    <tr>
                        <th onClick={handleSort} id="project-name">Project Name {sortByName ? '↑' : '↓'}</th>
                        <th onClick={handleSort} id="client-name">Client {sortByClient ? '↑' : '↓'}</th>
                        <th onClick={handleSort} id="project-owner">Project Owner {sortByOwner ? '↑' : '↓'}</th>
                        <th>Contact</th>
                        <th>Website</th>
                        <th>Status</th>
                        <th>Created Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    { displayedUsers.length ===0 &&
                        <tr>
                            <td colSpan={8}>No Records Found</td>
                        </tr>
                    }
                    {displayedUsers.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td >{user.name}</td>
                                <td >{user.company.name}</td>
                                <td >{user.email}</td>
                                <td >{user.phone}</td>
                                <td >{user.website}</td>
                                <td>
                                    <input type="list" list="statuslog" name="status" id="status" defaultValue={"Active"} />
                                    <datalist id="statuslog">
                                        <option value={"Active"} />
                                        <option value={"Deactive"} />
                                    </datalist>
                                </td>
                                <td >{new Date().toLocaleDateString()}</td>
                                <td >High</td>
                                <td className="action-td">
                                    <DeleteModal btnId={user.id} users={users} setUsers={setUsers} />
                                    <button onClick={() => handleMoreBtn(user)} className="view-btn">More</button>
                                    <EditModal editRow={editRow} setEditRow={setEditRow} id={user.id} users={users} setUsers={setUsers}/>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </section>
    );
}

export default ProjectTable;