import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProductsArea from './Pages/ProductsArea';
const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignInPage />} />
          <Route path='/products' element={<ProductsArea />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App