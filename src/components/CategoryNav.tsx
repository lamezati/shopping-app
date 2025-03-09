import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '../types';

export function CategoryNav() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="bg-white shadow">
      <div className="max-w-[1500px] mx-auto">
        <nav className="flex items-center h-12 px-4 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-full"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                to={`/category/${category.id}`}
                className="flex items-center h-full px-4 space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <span>{category.name}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              {hoveredCategory === category.id && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-b py-3 z-50">
                  <div className="px-4 mb-2">
                    <h3 className="font-bold text-blue-600">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.description}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        to={`/category/${category.id}/${subcategory.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                    <Link
                      to={`/category/${category.id}`}
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      See all in {category.name}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}