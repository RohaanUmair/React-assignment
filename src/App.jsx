import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import SingleProduct from './pages/SingleProduct';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ScrollToTop from './components/ScrollToTop';
import SignedInPage from './pages/SignedInPage';
import { auth, handleSignOut, addProductToCart, getAddedToCarts } from './utils/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const handleSignOutBtn = () => {
    handleSignOut(auth);
  }
  
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (id) => {
    const userEmail = auth.currentUser?.email;
    if (userEmail) {
      addProductToCart(userEmail, id)
        .then(() => {
          getAddedToCarts(setCartProducts, userEmail);
        })
        .catch((error) => {
          console.error("Error adding product to cart: ", error);
        });
    } else {
      console.error("User is not logged in");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getAddedToCarts(setCartProducts, user.email);
      } else {
        console.error("No user is authenticated");
      }
    });

    return () => unsubscribe();
  }, []);
  

  return (
    <>
      <BrowserRouter>

        <Header />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} />} />
          <Route path='/shop' element={<ShopPage handleAddToCart={handleAddToCart} />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/cart' element={<CartPage cartProductsArray={cartProducts} />} />
          <Route path='/product/:id' element={<SingleProduct handleAddToCart={handleAddToCart} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signedin' element={<SignedInPage handleSignOut={handleSignOutBtn} />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;