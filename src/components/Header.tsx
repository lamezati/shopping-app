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

  // Categories for the horizontal navbar (matching Amazon style)
  const navCategories = [
    { name: 'All', icon: <Menu className="w-4 h-4" />, className: 'font-bold' },
    { name: 'Same-Day Delivery', icon: null },
    { name: 'Medical Care', icon: null },
    { name: 'Alexa+', icon: null },
    { name: 'Prime Video', icon: null },
    { name: 'Prime', icon: null },
    { name: 'Keep Shopping For', icon: null },
    { name: 'Household, Health & Baby Care', icon: null }
  ];

  return (
    <header>
      {/* Top navbar - dark blue background like Amazon */}
      <div className="bg-amazon-blue text-white">
        <div className="max-w-[1500px] mx-auto">
          {/* Main header with logo, search, account */}
          <div className="flex items-center px-2 py-2 gap-2">
            {/* Logo */}
            <Link to="/" className="mr-2">
              <ShoppingCart className="w-8 h-8 text-white" />
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
                    className="h-full py-2 pl-3 pr-8 bg-gray-100 text-black border-r border-gray-300 text-sm appearance-none cursor-pointer rounded-l"
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
                  placeholder="Search PriceScout"
                  className="flex-1 py-2 px-3 text-black text-sm border-none focus:outline-none"
                />
                
                <button className="bg-amazon-yellow hover:bg-yellow-500 px-4 flex items-center justify-center transition-colors">
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
              <div className="relative">
                <div className="relative">
                  <span className="absolute -top-1 left-4 bg-amazon-yellow text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    8
                  </span>
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <span className="absolute -bottom-2 right-0 text-xs font-bold">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category navbar with darker blue */}
      <div className="bg-amazon-light text-white">
        <div className="max-w-[1500px] mx-auto">
          <nav className="flex overflow-x-hidden">
            {navCategories.map((cat, index) => (
              <Link 
                key={index}
                to={cat.name === 'All' ? '/' : `#${cat.name}`}
                className={`nav-link flex items-center px-3 py-2 text-sm whitespace-nowrap hover:bg-gray-700 ${cat.className || ''}`}
              >
                {cat.icon && <span className="mr-1">{cat.icon}</span>}
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}