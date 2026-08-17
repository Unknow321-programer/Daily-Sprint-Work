import { useEffect, useState } from "react";
import projectApi from "../API/projectApi";
import { toast } from "react-toastify";
import ProjectTable from "../components/ProjectTable";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import StatisticsCards from "../components/StatisticsCards";
import Pagination from "../components/Pagination";
import AddProjectModal from "../components/AddProjectModal";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // Search component state drive state
    const [searchPlaceholder, setSearchPlaceholder] = useState("search by project name...");
    const [selectedSearchBy, setSelectedSearchBy] = useState("project name");
    const [searchValue, setSearchValue] = useState("");

    const filterData = users.filter(
        (user) => {
            if (selectedSearchBy === "project name") {
                return user.name.toLowerCase().includes(searchValue.toLowerCase());
            } else if (selectedSearchBy === "client name") {
                return user.company.name.toLowerCase().includes(searchValue.toLowerCase());
            } else if (selectedSearchBy === "project owner") {
                return user.email.toLowerCase().includes(searchValue.toLowerCase());
            }
        }
    )

    const loadUserData = async () => {
        setLoading(true);
        try {
            const res = await projectApi();
            if (res === undefined || res === null) throw new Error("Respose not generated");
            // console.log(res);
            setUsers(res);
        } catch (err) {
            toast.error("Server error ): ", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUserData();
    }, [])


    return (
        <div>
            {loading && <Loader />}
            {!loading && <>
                <StatisticsCards users={users} />
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} searchPlaceholder={searchPlaceholder} setSearchPlaceholder={setSearchPlaceholder} setSelectedSearchBy={setSelectedSearchBy}/> 
                <AddProjectModal users={users} setUsers={setUsers} />
                <ProjectTable users={searchValue !== "" ? filterData : users} currentPage={currentPage} setUsers={setUsers} />
                <Pagination totalUsers={users.length} setCurrentPage={setCurrentPage} />
            </>
            }
        </div>
    );
}

export default Dashboard;