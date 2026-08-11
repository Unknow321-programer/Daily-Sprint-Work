import axios from "axios"

const baseUrl = "http://localhost:8080"
const loginUser = async (email, password) => {

    const data = await axios.get(baseUrl+"/user/getUser?email="+email+"&password="+password).then((res)=> {
        console.log("APi is called");
        return res.data;

    }).catch((err)=> {
        console.log("user not found", err);
    });

    return data;
}

export default loginUser;