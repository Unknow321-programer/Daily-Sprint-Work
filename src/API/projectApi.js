import axios from "axios";
import { toast } from "react-toastify";


const projectApi = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        return data.data;
    } catch(err) {
        toast.error("Server error", err);
    }
}

export default projectApi;