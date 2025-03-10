import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-white p-3 rounded-md hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        <div className="aspect-square mb-2 overflow-hidden bg-white flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h2>
      </div>
    </Link>
  );
}