import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-3xl">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full px-3 py-2 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-200"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    </div>
  );
}