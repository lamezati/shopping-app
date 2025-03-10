import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { HomePage } from './pages/HomePage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage />} />
          <Route path="/deals/:dealType" element={<CategoryPage />} />
          <Route path="/store/:storeName" element={<CategoryPage />} />
        </Routes>

        <footer className="bg-gray-900 mt-auto">
          <div className="max-w-[1500px] mx-auto px-4 pt-10 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-white">
              <div>
                <h3 className="font-bold mb-3">Get to Know Us</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">About PriceScout</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Press Releases</a></li>
                  <li><a href="#" className="hover:text-white">PriceScout Cares</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Make Money with Us</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Sell products on PriceScout</a></li>
                  <li><a href="#" className="hover:text-white">Become an Affiliate</a></li>
                  <li><a href="#" className="hover:text-white">Advertise Your Products</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Payment Products</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Business Card</a></li>
                  <li><a href="#" className="hover:text-white">Shop with Points</a></li>
                  <li><a href="#" className="hover:text-white">Reload Your Balance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Let Us Help You</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Your Account</a></li>
                  <li><a href="#" className="hover:text-white">Your Orders</a></li>
                  <li><a href="#" className="hover:text-white">Shipping Rates & Policies</a></li>
                  <li><a href="#" className="hover:text-white">Returns & Replacements</a></li>
                  <li><a href="#" className="hover:text-white">Help</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-center text-gray-400 text-xs">
                © 2025 PriceScout. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;