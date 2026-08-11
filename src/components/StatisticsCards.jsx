import React, { useState, useEffect } from "react";
import "../stylesheets/StatisticsCards.css"
// import PieChart from "../charts/PieChart";
import DoughnutChart from "../charts/DoughnutChart";


const StatisticsCards = ({users}) => {
    const [filterCompleted, setFilterCompleted] = useState([]);
    const [filterPending, setFilterPending] = useState([]);
    const [filterInProgress, setFilterInProgress] = useState(0);

    useEffect(() => {
        setFilterCompleted(users.filter(user=>user.id % 3 ===0))
        setFilterPending(users.filter(user=> user.id % 2 ===0))
        setFilterInProgress( users.length -(filterPending.length + filterCompleted.length) );

    }, [users])
    
    return ( 
        <section className="static-view">
            <div className="static-container">
                <div className="show-project">
                    <span>Total Project: {users.length}</span>
                    <span>Completed: {filterCompleted.length}</span>
                    <span>Pending: {filterPending.length}</span>
                    <span>In Progress: {filterInProgress}</span>
                </div>
                <div className="show-bar">
                    <DoughnutChart projectData={{"completed":filterCompleted, "pending":filterPending, "active":filterInProgress}}/>
                </div>
            </div>
        </section>
     );
}
 
export default StatisticsCards;