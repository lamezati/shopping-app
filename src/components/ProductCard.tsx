import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const inStockRetailers = product.retailers.filter(r => r.inStock);
  const lowestPrice = Math.min(...inStockRetailers.map(r => r.price));

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-3 h-3 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white p-3 rounded hover:shadow-md transition-shadow duration-200">
        <div className="aspect-[4/3] mb-2 overflow-hidden rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h2 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h2>
        <div className="flex items-center mb-1">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="ml-1 text-xs text-gray-600">
            {product.reviewCount.toLocaleString()}
          </span>
        </div>
        {inStockRetailers.length > 0 && (
          <>
            <p className="text-lg font-bold text-gray-900">
              ${lowestPrice.toFixed(2)}
            </p>
            <p className="text-xs text-gray-700">
              Free delivery
            </p>
          </>
        )}
      </div>
    </Link>
  );
}