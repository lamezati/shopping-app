import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const inStockRetailers = product.retailers.filter(r => r.inStock);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white p-3 rounded-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        <div className="aspect-square mb-2 overflow-hidden bg-white flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h2 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h2>
        
        <div className="mt-auto flex flex-col">
          <div className="mt-1 flex items-center justify-between">
            <span className="text-xs text-blue-600">
              {inStockRetailers.length > 0 
                ? `Compare ${inStockRetailers.length} ${inStockRetailers.length === 1 ? 'store' : 'stores'}` 
                : 'Check availability'}
            </span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>
          
          {/* Only show in stock status, not pricing */}
          {inStockRetailers.length === 0 && (
            <div className="mt-1">
              <p className="text-orange-600 text-xs">Out of stock at most retailers</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}