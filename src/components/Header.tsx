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

  // Shopping inspiration section items - price comparison focused
  const shoppingInspiration = [
    { name: "Trending Products", path: "/trending" },
    { name: "Best Sellers", path: "/best-sellers" },
    { name: "New Releases", path: "/new-releases" },
    { name: "Most Wished For", path: "/most-wished" },
    { name: "Today's Best Deals", path: "/todays-deals" },
    { name: "Price Drops", path: "/price-drops" },
    { name: "Clearance Items", path: "/clearance" },
    { name: "Gift Ideas", path: "/gift-ideas" }
  ];

  // Popular price comparison categories
  const comparisonCategories = [
    { name: "Popular Price Comparisons", isHeading: true },
    { name: "Electronics Deals", path: "/deals/electronics" },
    { name: "Grocery Savings", path: "/deals/grocery" },
    { name: "Kitchen Essentials", path: "/deals/kitchen" },
    { name: "Home Improvement", path: "/deals/home-improvement" },
    { name: "Fashion Discounts", path: "/deals/fashion" },
    { name: "Beauty Products", path: "/deals/beauty" },
    { name: "Sports & Outdoor Gear", path: "/deals/sports" },
    { name: "Baby Products", path: "/deals/baby" }
  ];

  // All product departments
  const allDepartments = [
    { name: "All Departments", isHeading: true },
    { name: "Electronics", path: "/category/electronics" },
    { name: "Computers & Accessories", path: "/category/computers" },
    { name: "Smart Home", path: "/category/smart-home" },
    { name: "Appliances", path: "/category/appliances" },
    { name: "Clothing & Accessories", path: "/category/clothing" },
    { name: "Shoes", path: "/category/shoes" },
    { name: "Jewelry & Watches", path: "/category/jewelry" },
    { name: "Home & Kitchen", path: "/category/home-kitchen" },
    { name: "Furniture", path: "/category/furniture" },
    { name: "Garden & Outdoor", path: "/category/garden" },
    { name: "Tools & Home Improvement", path: "/category/tools" },
    { name: "Pet Supplies", path: "/category/pet-supplies" },
    { name: "Health & Household", path: "/category/health" },
    { name: "Beauty & Personal Care", path: "/category/beauty" },
    { name: "Toys & Games", path: "/category/toys" },
    { name: "Sports & Outdoors", path: "/category/sports" },
    { name: "Automotive", path: "/category/automotive" },
    { name: "Books & Media", path: "/category/books" },
    { name: "Grocery & Gourmet", path: "/category/grocery" },
    { name: "Baby Products", path: "/category/baby" },
    { name: "Office Products", path: "/category/office" }
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
      
      {/* All Categories sidebar menu (focused on price comparison) */}
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
            
            {/* Popular Price Comparisons section */}
            <div className="border-b border-gray-200">
              {comparisonCategories.map((item, index) => (
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
                  </Link>
                )
              ))}
            </div>
            
            {/* All Departments section */}
            <div className="border-b border-gray-200">
              {allDepartments.map((item, index) => (
                item.isHeading ? (
                  <div key={index} className="px-6 py-3 font-bold text-gray-900">
                    {item.name}
                  </div>
                ) : (
                  <Link 
                    key={index}
                    to={item.path || '#'}
                    className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                    onClick={() => setShowAllCategories(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            
            {/* Compare by Store */}
            <div className="px-6 py-3 border-b border-gray-200">
              <div className="font-bold text-gray-900 mb-2">Compare by Store</div>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/store/walmart" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Walmart</Link>
                <Link to="/store/target" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Target</Link>
                <Link to="/store/amazon" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Amazon</Link>
                <Link to="/store/bestbuy" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Best Buy</Link>
                <Link to="/store/costco" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Costco</Link>
                <Link to="/store/kroger" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Kroger</Link>
                <Link to="/store/foodlion" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>Food Lion</Link>
                <Link to="/store/all" className="text-blue-600 hover:underline" onClick={() => setShowAllCategories(false)}>View All</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}