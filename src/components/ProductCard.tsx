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
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

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
        <div className="flex items-center mb-1">
          <div className="flex items-center mr-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-600 underline">
            {product.reviewCount.toLocaleString()}
          </span>
        </div>
        {inStockRetailers.length > 0 ? (
          <>
            <div className="mt-auto">
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-500">$</span>
                <span className="text-lg font-bold text-gray-900">{Math.floor(lowestPrice)}</span>
                <span className="text-sm font-bold text-gray-900">{(lowestPrice % 1 * 100).toFixed(0)}</span>
              </div>
              {lowestPrice > 25 && (
                <p className="text-xs text-gray-700">
                  Get <span className="text-blue-600">FREE Delivery</span> {product.retailers[0].deliveryDate}
                </p>
              )}
              {Math.random() > 0.5 && (
                <div className="mt-1">
                  <span className="bg-red-100 text-red-800 text-xs px-1 py-0.5">Limited time deal</span>
                </div>
              )}
              {Math.random() > 0.7 && (
                <p className="text-xs text-gray-600 mt-1">In stock - only {Math.floor(Math.random() * 10) + 1} left</p>
              )}
            </div>
          </>
        ) : (
          <div className="mt-auto">
            <p className="text-red-600 text-sm">Temporarily out of stock</p>
          </div>
        )}
      </div>
    </Link>
  );
}