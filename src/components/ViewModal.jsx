import { useLocation, useNavigate } from "react-router-dom";

import "../stylesheets/ViewModal.css"
const ViewModal = () => {
    const navigate = useNavigate();

    const {state} = useLocation();
    const user = state?.user;

    return ( 
        <>
        <div className="view-container">
            <span>Project Name: {user.name}</span>
            <span>Project Owner: {user.username}</span>
            <span>Email: {user.email}</span>
            <span>Phone: {user.phone}</span>
            <span>Website: {user.website}</span>
            <span>Company: {user.company.name}</span>
            <span>City: {user.address.city}</span>
            <span>Street: {user.address.street}</span>
            <span>Zipcode: {user.address.zipcode}</span>
        </div>

        <button onClick={()=> navigate("/")} className="view-back-btn">Back</button>
        </>
     );
}
 
export default ViewModal;