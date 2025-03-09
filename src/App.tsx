import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { CategoryNav } from './components/CategoryNav';
import { mockProducts } from './types';
import { ShoppingCart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

function ProductSection({ title, products, showViewAll = true }: { title: string; products: typeof mockProducts; showViewAll?: boolean }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center space-x-4">
          {showViewAll && (
            <Link to="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              View all
            </Link>
          )}
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.slice(0, 6).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return mockProducts.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const productsByCategory = useMemo(() => {
    const grouped = mockProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as Record<string, typeof mockProducts>);
    return grouped;
  }, []);

  return (
    <main>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center py-4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>

      <CategoryNav />

      <div className="max-w-7xl mx-auto px-4 py-4">
        {searchQuery ? (
          filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">
                No products found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )
        ) : (
          <>
            {Object.entries(productsByCategory).map(([category, products]) => (
              <ProductSection 
                key={category}
                title={category} 
                products={products}
              />
            ))}

            <div className="mb-12">
              <ProductSection 
                title="PriceScout Devices for you" 
                products={mockProducts.filter(p => p.category === 'Electronics')} 
              />
            </div>

            <div>
              <ProductSection 
                title="Your Browsing History" 
                products={mockProducts.slice(0, 6)}
                showViewAll={false}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingCart className="w-7 h-7 text-yellow-400" />
                <h1 className="text-xl font-bold text-white">PriceScout</h1>
              </Link>
              <div className="flex items-center text-white text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Deliver to User</span>
              </div>
            </div>
            <nav className="flex space-x-6 text-sm text-gray-300 pb-2">
              <a href="#" className="hover:text-white">Today's Deals</a>
              <a href="#" className="hover:text-white">Customer Service</a>
              <a href="#" className="hover:text-white">Gift Cards</a>
              <a href="#" className="hover:text-white">Registry</a>
              <a href="#" className="hover:text-white">Sell</a>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage />} />
        </Routes>

        <footer className="bg-gray-900 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <p className="text-center text-gray-400 text-xs">
              © 2025 PriceScout. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;