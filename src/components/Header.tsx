import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, MapPin, Menu, Search, ChevronRight } from 'lucide-react';
import { categories } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [category, setCategory] = useState('All');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<Array<any>>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Categories for the dropdown
  const searchCategories = [
    'All',
    'Electronics',
    'Grocery',
    'Books',
    'Fashion',
    'Beauty',
    'Sports'
  ];

  // Categories for the horizontal navbar (updated for price comparison app)
  const navCategories = [
    { name: 'All', icon: <Menu className="w-4 h-4" />, className: 'font-bold', priority: 1 },
    { name: 'Electronics', icon: null, priority: 2 },
    { name: 'Home & Kitchen', icon: null, priority: 3 },
    { name: 'Clothing', icon: null, priority: 4 },
    { name: 'Groceries', icon: null, priority: 5 },
    { name: 'Beauty & Personal Care', icon: null, priority: 6 },
    { name: 'Toys & Games', icon: null, priority: 7 },
    { name: 'Sports & Outdoors', icon: null, priority: 8 },
    { name: 'Books', icon: null, priority: 9 },
    { name: 'Baby', icon: null, priority: 10 },
    { name: 'Pet Supplies', icon: null, priority: 11 },
    { name: 'Tools & Home Improvement', icon: null, priority: 12 },
    { name: 'Health & Household', icon: null, priority: 13 },
    { name: 'Automotive', icon: null, priority: 14 }
  ];

  // Shopping inspiration section items
  const shoppingInspiration = [
    { name: "Trending", path: "/trending" },
    { name: "Best Sellers", path: "/best-sellers" },
    { name: "New Releases", path: "/new-releases" },
    { name: "Movers & Shakers", path: "/movers-shakers" },
    { name: "Most Wished For", path: "/most-wished" },
    { name: "Gift Ideas", path: "/gift-ideas" },
    { name: "Deals of the Day", path: "/deals" },
    { name: "Clearance Items", path: "/clearance" }
  ];

  // Digital content category items
  const digitalContent = [
    { name: "Digital Content & Devices", isHeading: true },
    { name: "Prime Video", path: "/prime-video", hasSubmenu: true },
    { name: "Amazon Music", path: "/amazon-music", hasSubmenu: true },
    { name: "Echo & Alexa", path: "/echo-alexa", hasSubmenu: true },
    { name: "Fire Tablets", path: "/fire-tablets", hasSubmenu: true },
    { name: "Fire TV", path: "/fire-tv", hasSubmenu: true },
    { name: "Kindle E-readers & Books", path: "/kindle", hasSubmenu: true },
    { name: "Audible Books & Originals", path: "/audible", hasSubmenu: true },
    { name: "Amazon Photos", path: "/photos", hasSubmenu: true },
    { name: "Amazon Appstore", path: "/appstore", hasSubmenu: true }
  ];

  // Shop by department category items
  const shopByDepartment = [
    { name: "Shop by Department", isHeading: true },
    { name: "Electronics", path: "/department/electronics", hasSubmenu: true },
    { name: "Computers", path: "/department/computers", hasSubmenu: true },
    { name: "Smart Home", path: "/department/smart-home", hasSubmenu: true },
    { name: "Arts & Crafts", path: "/department/arts-crafts", hasSubmenu: true },
    { name: "Clothing, Shoes, Jewelry & Watches", path: "/department/clothing", hasSubmenu: true },
    { name: "Home & Kitchen", path: "/department/home-kitchen", hasSubmenu: true },
    { name: "Garden & Outdoor", path: "/department/garden", hasSubmenu: true },
    { name: "Pet Supplies", path: "/department/pet-supplies", hasSubmenu: true },
    { name: "Health & Household", path: "/department/health", hasSubmenu: true },
    { name: "Beauty & Personal Care", path: "/department/beauty", hasSubmenu: true },
    { name: "Toys & Games", path: "/department/toys", hasSubmenu: true },
    { name: "Sports & Outdoors", path: "/department/sports", hasSubmenu: true },
    { name: "Automotive", path: "/department/automotive", hasSubmenu: true },
    { name: "Books", path: "/department/books", hasSubmenu: true },
    { name: "Amazon Fresh", path: "/fresh", hasSubmenu: true }
  ];

  // Update visible categories based on window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate how many categories can be displayed
  useEffect(() => {
    // These values are approximations and may need adjustment
    const categoryWidth = 130; // Average width of a category in pixels
    const containerPadding = 40; // Padding of the container
    
    // Available width for categories
    const availableWidth = windowWidth - containerPadding;
    
    // Calculate how many categories can fit
    const numVisible = Math.max(1, Math.floor(availableWidth / categoryWidth));
    
    // Sort categories by priority
    const sortedCategories = [...navCategories].sort((a, b) => a.priority - b.priority);
    
    // Visible categories are the highest priority ones that fit
    setVisibleCategories(sortedCategories.slice(0, numVisible));
  }, [windowWidth]);

  return (
    <header className="relative">
      {/* Top navbar - dark blue background like Amazon */}
      <div className="bg-[#131921] text-white">
        <div className="max-w-[1500px] mx-auto">
          {/* Main header with logo, search, account */}
          <div className="flex items-center px-2 py-2 gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-2">
              <img 
                src="/shopping-app/amazon-logo.svg" 
                alt="PriceScout" 
                className="h-8 w-24 object-contain"
              />
            </Link>
            
            {/* Delivery address */}
            <div className="hidden md:flex flex-col text-xs mr-2">
              <span className="text-gray-300">Deliver to Leonel</span>
              <div className="flex items-center font-bold">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Raleigh 27603</span>
              </div>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 flex">
              <div className="relative flex w-full rounded overflow-hidden">
                <div className="relative">
                  <select 
                    className="h-full py-2 pl-3 pr-8 bg-[#f3f3f3] text-black border-r border-gray-300 text-sm appearance-none cursor-pointer rounded-l"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {searchCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Compare prices across stores..."
                  className="flex-1 py-2 px-3 text-black text-sm border-none focus:outline-none"
                />
                
                <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center justify-center transition-colors">
                  <Search className="text-black w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Right side links */}
            <div className="hidden md:flex items-center gap-4 ml-2">
              {/* Language */}
              <div className="flex items-center text-xs">
                <span className="font-bold">EN</span>
                <svg className="h-3 w-3 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {/* Account & Lists */}
              <div className="text-xs">
                <div>Hello, Leonel</div>
                <div className="font-bold flex items-center">
                  Account & Lists
                  <svg className="h-3 w-3 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              {/* Returns & Orders */}
              <div className="text-xs">
                <div>Returns</div>
                <div className="font-bold">& Orders</div>
              </div>
              
              {/* Cart */}
              <div className="relative flex items-center">
                <div className="relative">
                  <span className="absolute -top-1 left-4 bg-[#f3a847] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    8
                  </span>
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <span className="ml-1 font-bold">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category navbar with darker blue */}
      <div className="bg-[#232f3e] text-white">
        <div className="max-w-[1500px] mx-auto">
          <nav className="flex items-center px-2">
            {/* Only show categories that fit the screen width */}
            <div className="flex items-center">
              {visibleCategories.map((cat, index) => (
                <Link 
                  key={index}
                  to={cat.name === 'All' ? '#' : `/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`nav-link flex items-center px-3 py-2 text-sm whitespace-nowrap hover:bg-gray-700 ${cat.className || ''}`}
                  onClick={e => {
                    if (cat.name === 'All') {
                      e.preventDefault();
                      setShowAllCategories(!showAllCategories);
                    }
                  }}
                >
                  {cat.icon && <span className="mr-1">{cat.icon}</span>}
                  {cat.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      
      {/* All Categories sidebar menu (similar to Amazon style) */}
      {showAllCategories && (
        <div className="fixed inset-0 z-50 flex">
          {/* Semi-transparent overlay */}
          <div 
            className="bg-black bg-opacity-50 absolute inset-0" 
            onClick={() => setShowAllCategories(false)}
          ></div>
          
          {/* Sidebar menu */}
          <div className="relative bg-white text-black h-full w-80 md:w-96 overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setShowAllCategories(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* User greeting */}
            <div className="bg-[#232f3e] text-white p-4 flex items-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                L
              </div>
              <span className="font-bold">Hello, Leonel</span>
            </div>
            
            {/* Shopping Inspiration section */}
            <div className="border-b border-gray-200">
              {shoppingInspiration.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className="block px-6 py-3 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => setShowAllCategories(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Digital Content section */}
            <div className="border-b border-gray-200">
              {digitalContent.map((item, index) => (
                item.isHeading ? (
                  <div key={index} className="px-6 py-3 font-bold text-gray-900">
                    {item.name}
                  </div>
                ) : (
                  <Link 
                    key={index}
                    to={item.path || '#'}
                    className="block px-6 py-3 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => setShowAllCategories(false)}
                  >
                    {item.name}
                    {item.hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </Link>
                )
              ))}
            </div>
            
            {/* Shop by Department section */}
            <div className="border-b border-gray-200">
              {shopByDepartment.map((item, index) => (
                item.isHeading ? (
                  <div key={index} className="px-6 py-3 font-bold text-gray-900">
                    {item.name}
                  </div>
                ) : (
                  <Link 
                    key={index}
                    to={item.path || '#'}
                    className="block px-6 py-3 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => setShowAllCategories(false)}
                  >
                    {item.name}
                    {item.hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </Link>
                )
              ))}
            </div>
            
            {/* Help & Settings */}
            <div className="px-6 py-4">
              <Link 
                to="/customer-service"
                className="block py-2 text-gray-800 hover:underline"
                onClick={() => setShowAllCategories(false)}
              >
                Customer Service
              </Link>
              <Link 
                to="/sign-in"
                className="block py-2 text-gray-800 hover:underline"
                onClick={() => setShowAllCategories(false)}
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}