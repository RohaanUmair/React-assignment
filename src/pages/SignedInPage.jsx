import styles from '../components/signedIn.module.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignedInPage({ handleSignOut }) {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
            } else {
                navigate("/login");
            }
        });
    }, [navigate]);

    const signOutBtnStyles = {
        backgroundColor: "white",
        marginLeft: 10,
        color: "#b88e2f",
        border: "1px solid #b88e2f",
        fontWeight: 500,
        width: 200,
        height: 50,
        fontFamily: "Poppins",
        fontSize: 19,
        marginTop: 15,
        cursor: 'pointer'
    };

    return (
        <div
            style={{
                borderTop: "1px solid #d9d9d9",
                height: "50dvh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div>
                <h1 style={{ fontSize: 40 }}>You are Signed In.</h1>
                <button onClick={() => navigate("/shop")} className={styles.gotoShopBtnStyles} >
                    Shop
                </button>
                <button onClick={handleSignOut} className={styles.signOutBtnStyles} >
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default SignedInPage;
