import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';

interface CategorySectionProps {
  title: string;
  products: Product[];
  linkPath: string;
  theme?: 'light' | 'dark';
  columns?: 2 | 3 | 4;
  imageUrl?: string;
}

export function CategorySection({ 
  title, 
  products, 
  linkPath, 
  theme = 'light',
  columns = 4,
  imageUrl 
}: CategorySectionProps) {
  // Determine grid columns class based on the columns prop
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }[columns];
  
  // Determine background and text colors based on theme
  const bgClass = theme === 'light' ? 'bg-white' : 'bg-gray-100';
  const textClass = theme === 'light' ? 'text-gray-900' : 'text-gray-800';
  
  return (
    <div className={`p-4 rounded-lg ${bgClass} mb-6`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-xl font-bold ${textClass}`}>{title}</h2>
        <Link 
          to={linkPath} 
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
        >
          See all deals <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      
      {imageUrl && (
        <div className="mb-4">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto rounded-md"
          />
        </div>
      )}
      
      <div className={`grid ${gridClass} gap-4`}>
        {products.slice(0, columns * 2).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link 
          to={linkPath} 
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Shop all {title}
        </Link>
      </div>
    </div>
  );
}