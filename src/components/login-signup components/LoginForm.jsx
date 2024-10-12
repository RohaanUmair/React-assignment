import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosUnlock } from "react-icons/io";
import { Link } from "react-router-dom";
import { auth, loginUser} from '../../utils/firebase';


function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(auth, formData.email, formData.password);
    }


    return (
        <div className={styles.whole_page}>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className={styles.email_sec}>
                    <label htmlFor="loginEmail">Email</label>
                    <HiOutlineMail className={styles.icons} />
                    <input
                        type="email"
                        name="email"
                        id="loginEmail"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.password_sec}>
                    <label htmlFor="loginPassword">Password</label>
                    <IoIosUnlock className={styles.icons} />
                    <input
                        type="password"
                        name="password"
                        id="loginPassword"
                        placeholder="Enter your Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <p>Don't have an account? 
                    <Link to={'/signup'} style={{textDecoration: 'none'}} >
                        <span>Sign up here</span>
                    </Link>
                .</p>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
