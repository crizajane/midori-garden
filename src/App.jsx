import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

export default function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#F5F5F0]"> {/* light background to contrast header */}
  {!hideHeader && <Header />}
  <main className="pt-28 pb-16">  {/* 🌿 Adjust this padding if your header height changes */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </main>
</div>

  );
}
