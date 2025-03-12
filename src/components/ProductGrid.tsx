import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../interfaces';

interface ProductGridProps {
  title: string;
  products: Product[];
  linkPath: string;
  viewAllText?: string;
  showViewAllButton?: boolean;
  maxItems?: number;
}

export function ProductGrid({ 
  title, 
  products, 
  linkPath, 
  viewAllText = 'See all',
  showViewAllButton = true,
  maxItems = 3
}: ProductGridProps) {
  // Reliable fallback image
  const fallbackImage = "https://via.placeholder.com/300x300?text=Product";

  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link 
          to={linkPath} 
          className="text-blue-600 hover:underline flex items-center text-sm"
        >
          {viewAllText} <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, maxItems).map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="block">
            <div className="text-center">
              <div className="mb-3 bg-gray-50 p-4 rounded flex items-center justify-center h-40">
                <img 
                  src={product.image || fallbackImage} 
                  alt={product.name} 
                  className="max-h-32 max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = fallbackImage;
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {showViewAllButton && (
        <div className="mt-6 text-center">
          <Link 
            to={linkPath}
            className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
          >
            Shop all {title.toLowerCase()}
          </Link>
        </div>
      )}
    </div>
  );
}