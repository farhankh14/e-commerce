import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart'; // Corrected import
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import men_banner from "./components/assets/banner_mens.png";
import kid_banner from "./components/assets/banner_kids.png";
import women_banner from "./components/assets/banner_womens.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />} >
          {/* Nested Routes */}
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} /> {/* Corrected path */}
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

