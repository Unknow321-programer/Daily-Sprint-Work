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
        console.log("data ", users);
    }, [users]);

    useEffect(() => {
        loadUserData();
        // alert("Api is called");
        return () => {
        }
    }, [])

    useEffect(() => {

    })

    return (
        <div>
            {loading && <Loader />}
            {!loading && <>
                <StatisticsCards users={users} />
                <SearchBar users={users} setUsers={setUsers} />
                <AddProjectModal users={users} setUsers={setUsers} />
                <ProjectTable users={users} currentPage={currentPage} setUsers={setUsers} />
                <Pagination totalUsers={users.length} setCurrentPage={setCurrentPage} />

            </>
            }
        </div>
    );
}

export default Dashboard;