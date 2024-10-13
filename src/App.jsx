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
import { auth, handleSignOut } from './utils/firebase';

function App() {
  const handleSignOutBtn = () => {
    handleSignOut(auth);
  }

  return (
    <>
    <BrowserRouter>

      <Header />
        <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product:id' element={<SingleProduct />} />
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