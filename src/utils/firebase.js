import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
// import { useState } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCAmtZgH1LUHIWZnz6-U_Hh_crVk42lyKM",
    authDomain: "furniture-website-67344.firebaseapp.com",
    projectId: "furniture-website-67344",
    storageBucket: "furniture-website-67344.appspot.com",
    messagingSenderId: "519642207059",
    appId: "1:519642207059:web:24d9dfd39d074ee7bac7a6",
    measurementId: "G-QR7YZ7W52M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
// const [isLogin, setIsLogin] = useState(false);


async function isUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log('User Logged In');
            // setIsLogin(true);
        } else {
            console.log('User Not Logged In');
            // setIsLogin(false);
        }
    });
}


function createAccount(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged In ",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Password is too weak",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        });
}


function loginUser(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged In ",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            if (errorMessage == 'Firebase: Error (auth/invalid-credential).'){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Wrong Credentials",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
            else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Please Try Again later",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        });
}


function handleSignOut(auth) {
    signOut(auth)
        .then(() => {
            console.log('Logged out');
        })
        .catch((error) => {
            alert(error);
        });
}










export {
    app,
    analytics,
    createUserWithEmailAndPassword,
    auth,
    createAccount,
    loginUser,
    isUserLoggedIn,
    handleSignOut,
}