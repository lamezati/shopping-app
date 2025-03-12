import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { HomePage } from './pages/HomePage';
import allProducts from './data/productData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(allProducts);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allProducts.filter(
        product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<HomePage products={filteredProducts} searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetail products={allProducts} />} />
          <Route path="/category/:categoryId" element={<CategoryPage products={filteredProducts} />} />
          <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage products={filteredProducts} />} />
          <Route path="/deals/:dealType" element={<CategoryPage products={filteredProducts} />} />
          <Route path="/store/:storeName" element={<CategoryPage products={filteredProducts} />} />
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