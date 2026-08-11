import React from "react";
import "../stylesheets/Loader.css"
import { LoaderCircle } from "lucide-react";
const Loader = () => {
    return ( 
        <section className="loader-view">
            <div className="loader-container">
                <LoaderCircle className="loader" size={50} />
            </div>
        </section>
     );
}
 
export default Loader;