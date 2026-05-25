import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App