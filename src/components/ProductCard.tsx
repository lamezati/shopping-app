import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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
            <span className="text-xs text-blue-600">View details</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}