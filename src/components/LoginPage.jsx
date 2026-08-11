import { useEffect, useState } from 'react';
import loginUser from '../API/loginApi';
import { LoaderCircle, LoaderCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import "../stylesheets/LoginPage.css"
const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const backendValidateUser = async (email, password) => {
        try {
            const user = await loginUser(email, password);
            if (user === null || user === undefined) throw new Error("User not found", "server error");
            if (user.email === email) {
                toast.success("Login Successfully");
                localStorage.setItem("id", user.id);
                localStorage.setItem("user", user.email);
                localStorage.setItem("role", user.role);
                navigate("/welcome");

            } else {
                toast.error('Invalid details ):');
            }

        } catch (err) {
            toast.error('please try again ):',err);
        } finally {
            setLoading(false);
        }
    }

    const validateForm = () => {
        const emailRegex = /^[\S]+[\@]+[\S]+[\.]+[\S]+$/;
        const passwordRegex = /^.{8,}$/;
        let flag = true;
        let tempError = {email:"", password:""};


        if (!emailRegex.test(formData.email)) {
            tempError.email='Please enter a valid email address.';
            flag = false;
        }

        if (!passwordRegex.test(formData.password)) {
            tempError.password = 'Password must be at least 8 characters long.';
            flag = false;
        }

        if (formData.rememberMe) {
            localStorage.setItem('rememberedEmail', formData.email);
        }
        setError(tempError);
        setLoading(false);
        return flag;
    }

    const handleSubmit = (e) => {

        setLoading(true);
        setError({ email: "", password: "" });

        e.preventDefault();
        const { email, password, rememberMe } = formData;


        if (validateForm()) {
            // call the API to authenticate the user
            backendValidateUser(email, password);
        }
        else {
            setLoading(false);
        }
    }
    


    return (
        <section >
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={loading}/>
                        <div style={{ "color": "red" }}>{error.email}</div>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} disabled={loading}/>
                        <div style={{ "color": "red" }}>{error.password}</div>

                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })} disabled={loading}/>
                        <label htmlFor="rememberMe">Remember Me</label>

                        <button type='submit' disabled={loading}>{loading ? "Loading..." : "Login"}{loading && <LoaderCircle size={13} className='loading'/>}</button>

                    </div>
                </form>


            </div>
        </section>
    );
}

export default LoginPage;