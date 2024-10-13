import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosUnlock } from "react-icons/io";
import { Link } from "react-router-dom";
import { auth, createAccount } from '../../utils/firebase';


function SignupForm() {
    const [formData, setFormData] = useState({
        signupEmail: '',
        signupPassword: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount(auth, formData.signupEmail, formData.signupPassword) 
    }


    return (
        <div className={styles.whole_page}>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <div className={styles.email_sec}>
                    <label htmlFor="signupEmail">Email</label>
                    <HiOutlineMail className={styles.icons} />
                    <input
                        type="email"
                        name="signupEmail"
                        id="signupEmail"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.password_sec}>
                    <label htmlFor="signupPassword">Password</label>
                    <IoIosUnlock className={styles.icons} />
                    <input
                        type="password"
                        name="signupPassword"
                        id="signupPassword"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <p>Already have an account? 
                    <Link to={'/login'} style={{textDecoration: 'none'}} >
                        <span>Log in</span>
                    </Link>
                .</p>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;