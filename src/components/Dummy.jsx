import { LoaderCircle } from "lucide-react";
import React from "react";

const Dummy = () => {
    return ( 
        <div>
            <button>{false && <LoaderCircle size={13} className="loading"/>}</button>
        </div>
     );
}
 
export default Dummy;