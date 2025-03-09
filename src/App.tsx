import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { CategoryNav } from './components/CategoryNav';
import { mockProducts, categories } from './types';
import { ShoppingCart, MapPin, User, Heart, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

function HeroCarousel() {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="h-full flex flex-col justify-center px-16">
          <h2 className="text-white text-4xl font-bold mb-4">Welcome to PriceScout</h2>
          <p className="text-white text-xl max-w-md mb-6">Discover amazing deals across multiple retailers, all in one place.</p>
          <Link to="/category/electronics" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg w-fit transition duration-150">
            Shop deals
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductSection({ title, products, showViewAll = true }: { title: string; products: typeof mockProducts; showViewAll?: boolean }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-4">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4">
        {products.slice(0, 6).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function CategoryGrid() {
  const topCategories = categories.slice(0, 8);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-4">
      {topCategories.map(category => (
        <Link 
          key={category.id} 
          to={`/category/${category.id}`}
          className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow"
        >
          <h3 className="font-bold text-lg mb-2">{category.name}</h3>
          <div className="aspect-square rounded overflow-hidden bg-gray-100">
            {/* We would use real category images here */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Category Image
            </div>
          </div>
          <p className="mt-2 text-blue-600 text-sm">Shop now</p>
        </Link>
      ))}
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
    <main className="bg-gray-100">
      {!searchQuery && (
        <>
          <HeroCarousel />
          <div className="max-w-[1500px] mx-auto pt-8">
            <CategoryGrid />
          </div>
        </>
      )}

      <div className="max-w-[1500px] mx-auto pb-8">
        {searchQuery ? (
          filteredProducts.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow mx-4">
              <p className="text-gray-500 text-lg">
                No products found matching "{searchQuery}".
              </p>
              <p className="text-gray-500 mt-2">
                Try checking your spelling or use more general terms.
              </p>
            </div>
          ) : (
            <div className="px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Search Results: {filteredProducts.length} items found</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
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

            <div className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 py-6">
              <ProductSection 
                title="Recommended for you" 
                products={mockProducts.filter(p => p.category === 'Electronics')} 
              />
            </div>

            <div className="mb-8 px-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Deals</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {mockProducts.slice(0, 6).map(product => (
                    <div key={product.id} className="relative">
                      <ProductCard product={product} />
                      <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-bl">
                        SAVE 20%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-900">
          <div className="max-w-[1500px] mx-auto">
            {/* Top navbar */}
            <div className="flex items-center justify-between py-2 px-4">
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingCart className="w-8 h-8 text-yellow-400" />
                <h1 className="text-2xl font-bold text-white">PriceScout</h1>
              </Link>
              
              <div className="hidden md:flex items-center text-white text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Deliver to User</span>
              </div>
              
              <div className="flex-1 max-w-3xl mx-8 hidden md:block">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-white text-sm">
                  <div className="text-xs text-gray-300">Hello, Sign in</div>
                  <div className="font-bold">Account & Lists</div>
                </div>
                
                <div className="text-white text-sm">
                  <div className="text-xs text-gray-300">Returns</div>
                  <div className="font-bold">& Orders</div>
                </div>
                
                <div className="relative">
                  <ShoppingCart className="w-8 h-8 text-white" />
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
            </div>
            
            {/* Mobile search */}
            <div className="px-4 py-2 md:hidden">
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            
            {/* Bottom navbar */}
            <div className="flex items-center space-x-6 text-sm text-white px-4 py-2 overflow-x-auto">
              <div className="flex items-center space-x-1">
                <Menu className="w-5 h-5" />
                <span className="font-bold">All</span>
              </div>
              <a href="#" className="whitespace-nowrap hover:text-yellow-400">Today's Deals</a>
              <a href="#" className="whitespace-nowrap hover:text-yellow-400">Customer Service</a>
              <a href="#" className="whitespace-nowrap hover:text-yellow-400">Gift Cards</a>
              <a href="#" className="whitespace-nowrap hover:text-yellow-400">Registry</a>
              <a href="#" className="whitespace-nowrap hover:text-yellow-400">Sell</a>
            </div>
          </div>
        </header>

        <CategoryNav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage />} />
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
              <div className="flex items-center justify-center mb-4">
                <ShoppingCart className="w-10 h-10 text-yellow-400" />
                <h2 className="text-xl font-bold text-white ml-2">PriceScout</h2>
              </div>
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