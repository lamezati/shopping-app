import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, MapPin, Menu, Search } from 'lucide-react';
import { categories } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [category, setCategory] = useState('All');
  const [showAllCategories, setShowAllCategories] = useState(false);
  
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
    { name: 'All', icon: <Menu className="w-4 h-4" />, className: 'font-bold' },
    { name: 'Electronics', icon: null },
    { name: 'Home & Kitchen', icon: null },
    { name: 'Clothing', icon: null },
    { name: 'Groceries', icon: null },
    { name: 'Beauty & Personal Care', icon: null },
    { name: 'Toys & Games', icon: null },
    { name: 'Sports & Outdoors', icon: null },
    { name: 'Books', icon: null },
    { name: 'Baby', icon: null },
    { name: 'Pet Supplies', icon: null },
    { name: 'Tools & Home Improvement', icon: null },
    { name: 'Health & Household', icon: null },
    { name: 'Automotive', icon: null }
  ];

  // Extended categories for the "All" button dropdown
  const extendedCategories = [
    // Shopping inspiration sections
    { title: "Shopping Inspiration", items: [
      { name: "Trending Products", path: "/trending" },
      { name: "New Releases", path: "/new-releases" },
      { name: "Most Wished For", path: "/most-wished" },
      { name: "Gift Ideas", path: "/gift-ideas" },
      { name: "Deals of the Day", path: "/deals" },
      { name: "Clearance Items", path: "/clearance" },
      { name: "Seasonal Favorites", path: "/seasonal" },
      { name: "Best Sellers", path: "/best-sellers" }
    ]},
    // Deal categories
    { title: "Deal Categories", items: [
      { name: "Top Rated Products", path: "/top-rated" },
      { name: "Price Drops", path: "/price-drops" },
      { name: "Under $25", path: "/under-25" },
      { name: "Local Deals", path: "/local-deals" },
      { name: "Compare Brands", path: "/compare-brands" },
      { name: "User Favorites", path: "/user-favorites" },
      { name: "Recently Compared", path: "/recently-compared" }
    ]}
  ];

  return (
    <header>
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
          <nav className="flex overflow-x-auto">
            {navCategories.map((cat, index) => (
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
          </nav>
        </div>
      </div>
      
      {/* All Categories dropdown menu */}
      {showAllCategories && (
        <div className="absolute z-50 w-full bg-white shadow-lg text-black">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Regular categories */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-bold text-lg mb-2 text-blue-800">All Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {categories.map(category => (
                  <div key={category.id} className="mb-4">
                    <h4 className="font-semibold text-blue-600 mb-1">
                      <Link to={`/category/${category.id}`} className="hover:underline">
                        {category.name}
                      </Link>
                    </h4>
                    <ul className="space-y-1">
                      {category.subcategories.slice(0, 3).map(sub => (
                        <li key={sub.id} className="text-sm">
                          <Link 
                            to={`/category/${category.id}/${sub.id}`}
                            className="text-gray-700 hover:text-blue-600 hover:underline"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Special category collections */}
            {extendedCategories.map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="font-bold text-lg mb-2 text-blue-800">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path}
                        className="text-gray-700 hover:text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 p-2 text-center">
            <button 
              onClick={() => setShowAllCategories(false)}
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}