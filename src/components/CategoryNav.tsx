import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '../types';

export function CategoryNav() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-8 h-12 px-4 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-full"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                to={`/category/${category.id}`}
                className="flex items-center h-full space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>{category.name}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              {hoveredCategory === category.id && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2 z-50">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      to={`/category/${category.id}/${subcategory.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}