import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  const [category, setCategory] = useState('All');
  
  const categories = [
    'All',
    'Electronics',
    'Grocery',
    'Books',
    'Fashion',
    'Beauty',
    'Sports'
  ];

  return (
    <div className="flex w-full rounded-md overflow-hidden">
      <div className="relative">
        <select 
          className="h-full py-2 pl-3 pr-8 bg-gray-100 border-r border-gray-300 text-sm appearance-none cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search PriceScout"
        className="flex-1 py-2 px-3 text-sm text-gray-700 border-none focus:outline-none"
      />
      
      <button className="bg-yellow-400 hover:bg-yellow-500 px-4 flex items-center justify-center transition-colors">
        <Search className="text-gray-800 w-5 h-5" />
      </button>
    </div>
  );
}