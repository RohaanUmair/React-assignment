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
import { isUserLoggedIn } from './utils/firebase';

function App() {
  return (
    <>
    <BrowserRouter>

      <Header isUserLoggedIn={isUserLoggedIn} />
        <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signedin' element={<SignedInPage />} />
      </Routes>

      <Footer />
  
    </BrowserRouter>
    </>
  )
}

export default App;