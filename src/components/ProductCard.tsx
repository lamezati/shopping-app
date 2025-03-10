import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-white p-2 rounded-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        {/* Reduced aspect ratio for smaller images */}
        <div className="aspect-[4/3] mb-1 overflow-hidden bg-white flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Reduced text size and line clamping */}
        <h2 className="text-xs font-medium text-gray-900 line-clamp-2 min-h-[2rem]">
          {product.name}
        </h2>
      </div>
    </Link>
  );
}