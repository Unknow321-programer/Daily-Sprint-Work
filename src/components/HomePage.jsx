import { User } from "lucide-react";
import Navigation from "./Navigation";

const HomePage = () => {
    
    return ( 
        <div>
            <Navigation />
            <h1>welcome user : {localStorage.getItem("user")}</h1>
            <h3>your role is : {localStorage.getItem("role")}</h3>
        </div>
     );
}
 
export default HomePage;