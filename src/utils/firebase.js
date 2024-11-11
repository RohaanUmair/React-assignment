import Swal from "sweetalert2";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    getDocs
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



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


async function isUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log('User Logged In');
        } else {
            console.log('User Not Logged In');
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

            if (errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
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

            if (errorMessage == 'Firebase: Error (auth/invalid-credential).') {
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



const db = getFirestore(app);


async function addProductToCart(userEmail, productId, productQuantity) {
    try {
        for (let i = 0; i < productQuantity; i++) {     
            const docRef = await addDoc(collection(db, "cartProducts"), {
                userEmail,
                productId
            });
            console.log("Document written with ID: ", docRef.id);
        }
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added to Cart",
            showConfirmButton: false,
            timer: 1000
        });
    } catch (e) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed adding to cart",
            showConfirmButton: false,
            timer: 1000
        });
        console.error("Error adding document: ", e);
    }
}



async function getAddedToCarts(setCartProducts, email) {
    const q = query(collection(db, "cartProducts"), where("userEmail", "==", email));

    const querySnapshot = await getDocs(q);
    const products = [];
    const finalProducts = [];

    querySnapshot.forEach((doc) => {
        const product = doc.data();
        products.push(product);
    });

    products.forEach((product) => {
        const { productId } = product;
        const existingProduct = finalProducts.find((p) => p.productId === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            finalProducts.push({ ...product, quantity: 1 });
        }
    });

    setCartProducts(finalProducts);
    console.log(finalProducts);
}




function loginFirst() {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
            } else {
                navigate('/login');
            }
        });
    }, [navigate]);
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
    addProductToCart,
    getAddedToCarts,
    loginFirst
}