import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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



function createAccount(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}











export {
    app,
    analytics,
    createUserWithEmailAndPassword,
    auth,
    createAccount
}