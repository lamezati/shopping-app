import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './pages/CategoryPage';
import { mockProducts } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Hero carousel component with blue background like Amazon
function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-blue-600 py-8">
      <div className="flex items-center justify-between max-w-[1500px] mx-auto px-6">
        <div className="text-white z-10 max-w-md">
          <h2 className="text-4xl font-bold mb-2">Fast, free shipping</h2>
          <p className="text-xl mb-6">Unlimited streaming & more</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
            Join Prime
          </button>
          <p className="text-sm mt-4">Terms apply</p>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="https://m.media-amazon.com/images/G/01/prime/2023/Prime-Core/Q2/Generic/Desktop/XCM_CUTTLE_1622933_3324241_758x608_2X_en_US._SY608_CB601738534_.jpg" 
            alt="Prime benefits" 
            className="w-96 h-auto object-contain"
          />
        </div>
        
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-4 rounded-full z-10">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-4 rounded-full z-10">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

function ProductSection({ title, products, showViewAll = true }: { title: string; products: typeof mockProducts; showViewAll?: boolean }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {showViewAll && (
          <Link to="#" className="text-sm text-blue-600 hover:text-red-600 hover:underline">
            See all
          </Link>
        )}
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
  const categories = [
    { title: 'Electronics', image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { title: 'Grocery', image: 'https://images.unsplash.com/photo-1553546895-531931aa1aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { title: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { title: 'Fashion', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2">{category.title}</h3>
          <div className="aspect-square overflow-hidden rounded-md mb-2">
            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          </div>
          <Link to={`/${category.title.toLowerCase().replace(' & ', '-')}`} className="text-sm text-blue-600 hover:text-red-600 hover:underline">
            Shop now
          </Link>
        </div>
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
    <main className="bg-gray-100 pb-8">
      {!searchQuery && (
        <>
          <HeroCarousel />
          <div className="max-w-[1500px] mx-auto pt-4">
            <CategoryGrid />
          </div>
        </>
      )}

      <div className="max-w-[1500px] mx-auto">
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
            <div className="px-4 py-4">
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

            <div className="px-4 py-4 bg-white rounded-lg shadow-sm mx-4 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Deals</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {mockProducts.slice(0, 6).map(product => (
                  <div key={product.id} className="relative">
                    <ProductCard product={product} />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                      SAVE 20%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <ProductSection 
                title="Related to items you've viewed"
                products={mockProducts.slice(3, 9)}
                showViewAll={true}
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
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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