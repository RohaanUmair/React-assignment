import React from "react";
import styles from "./loginForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosUnlock } from "react-icons/io";


function SignupForm() {
    return (
        <div className={styles.whole_page}>
            <form>
                <h1>Create Account</h1>

                <div className={styles.email_sec}>
                    <label htmlFor="loginEmail">Email</label>
                    <HiOutlineMail className={styles.icons} />
                    <input
                        type="email"
                        name="loginEmail"
                        id="loginEmail"
                        placeholder="Enter your Email"
                    />
                </div>

                <div className={styles.password_sec}>
                    <label htmlFor="loginPassword">Password</label>
                    <IoIosUnlock className={styles.icons} />
                    <input
                        type="password"
                        name="loginPassword"
                        id="loginPassword"
                        placeholder="Enter Password"
                    />
                </div>

                <p>Already have an account? <span>Log in</span>.</p>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;