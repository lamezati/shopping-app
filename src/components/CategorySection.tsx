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
  columns?: 2 | 3 | 4 | 5 | 6;
  imageUrl?: string;
  compact?: boolean;
}

export function CategorySection({ 
  title, 
  products, 
  linkPath, 
  theme = 'light',
  columns = 4,
  imageUrl,
  compact = true
}: CategorySectionProps) {
  // Determine grid columns class based on the columns prop
  const gridClass = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-3 sm:grid-cols-3',
    4: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-4',
    5: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5',
    6: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
  }[columns];
  
  // Determine background and text colors based on theme
  const bgClass = theme === 'light' ? 'bg-white' : 'bg-gray-100';
  const textClass = theme === 'light' ? 'text-gray-900' : 'text-gray-800';
  const padding = compact ? 'p-2 sm:p-3' : 'p-4';
  const margin = compact ? 'mb-3' : 'mb-6';
  
  return (
    <div className={`${padding} rounded-lg ${bgClass} ${margin}`}>
      <div className="flex items-center justify-between mb-2">
        <h2 className={`text-lg font-bold ${textClass}`}>{title}</h2>
        <Link 
          to={linkPath} 
          className="text-blue-600 hover:text-blue-800 flex items-center text-xs font-medium"
        >
          See all <ArrowRight className="w-3 h-3 ml-1" />
        </Link>
      </div>
      
      {imageUrl && (
        <div className="mb-2">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto rounded-md max-h-32 object-cover"
          />
        </div>
      )}
      
      <div className={`grid ${gridClass} gap-2`}>
        {products.slice(0, columns * 2).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-2 text-center">
        <Link 
          to={linkPath} 
          className="inline-block px-4 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
        >
          Shop all {title}
        </Link>
      </div>
    </div>
  );
}