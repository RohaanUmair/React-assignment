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
import data from './data/data.json'
import { auth, handleSignOut, addProductToCart, getAddedToCarts } from './utils/firebase';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import ValuesProvider, { ValuesContext } from './components/ValuesContext';

function App() {



  return (
    <>
      <ValuesProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </ValuesProvider>
    </>
  )
}



const AppContent = () => {

  const { cartProducts, setCartProducts, total, setTotal } = useContext(ValuesContext);
  console.log(cartProducts);
  

  const handleAddToCart = (id, productQuantity) => {
    const userEmail = auth.currentUser?.email;
    if (userEmail) {
      addProductToCart(userEmail, id, productQuantity)
        .then(() => {
          getAddedToCarts(setCartProducts, userEmail);
          console.log(cartProducts);
        });
    } else {
      alert("User is not logged in");
    }
  };


  useEffect(() => {
    const calculateTotal = () => {
      return cartProducts.reduce((acc, item) => {
        const product = data.find((dataItem) => dataItem.id == item.productId);
        return acc + Number(product.price * item.quantity);
      }, 0);
    };
    setTotal(calculateTotal());

  }, [cartProducts]);



  const handleSignOutBtn = () => {
    handleSignOut(auth);
  }

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
  const location = useLocation();

  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthRoute && <Header />}

      <Routes>
        <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} />} />

        <Route path='/shop' element={<ShopPage handleAddToCart={handleAddToCart} />} />

        <Route path='/contact' element={<ContactPage />} />

        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path='/cart' element={<CartPage />} />

        <Route path='/product/:id' element={<SingleProduct handleAddToCart={handleAddToCart} />} />

        <Route path='/signedin' element={<SignedInPage handleSignOut={handleSignOutBtn} />} />

        <Route path='/login' element={<LoginPage />} />

        <Route path='/signup' element={<SignupPage />} />
      </Routes>

      {!isAuthRoute && <Footer />}
    </>
  )

}

export default App; 